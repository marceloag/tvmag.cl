const { spawn } = require('child_process');
const fs = require('fs');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('Starting headless Google Chrome...');
  
  // Start Chrome with remote debugging
  const chromeProcess = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1440,900'
  ]);
  
  chromeProcess.on('error', (err) => {
    console.error('Failed to start Chrome:', err);
  });
  
  // Poll until remote debugging is available
  let targets = null;
  for (let i = 0; i < 20; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9222/json/list');
      targets = await res.json();
      if (targets && targets.length > 0) {
        console.log('Chrome is ready! Targets:', targets.length);
        break;
      }
    } catch (e) {
      // Chrome not ready yet
    }
    await sleep(500);
  }
  
  if (!targets || targets.length === 0) {
    console.error('Chrome failed to start or remote debugging is not responding.');
    chromeProcess.kill();
    process.exit(1);
  }
  
  // Find a page target or use the first target
  const target = targets.find(t => t.type === 'page') || targets[0];
  console.log('Target WebSocket URL:', target.webSocketDebuggerUrl);
  
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  
  const pendingRequests = new Map();
  let messageId = 1;
  
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pendingRequests.has(data.id)) {
      const { resolve, reject } = pendingRequests.get(data.id);
      pendingRequests.delete(data.id);
      if (data.error) {
        reject(data.error);
      } else {
        resolve(data.result);
      }
    }
  };
  
  function sendCommand(method, params = {}) {
    const id = messageId++;
    const message = JSON.stringify({ id, method, params });
    ws.send(message);
    return new Promise((resolve, reject) => {
      pendingRequests.set(id, { resolve, reject });
    });
  }
  
  // Open WebSocket connection
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });
  
  console.log('WebSocket connected. Enabling Page domain...');
  await sendCommand('Page.enable');
  
  console.log('Navigating to http://localhost:3002/app...');
  await sendCommand('Page.navigate', { url: 'http://localhost:3002/app' });
  
  console.log('Waiting 5 seconds for page to load and video stream / splash to stabilize...');
  await sleep(5000);
  
  console.log('Capturing desktop screenshot...');
  const desktopScreenshot = await sendCommand('Page.captureScreenshot', { format: 'png' });
  const desktopBuffer = Buffer.from(desktopScreenshot.data, 'base64');
  
  const desktopPath = '/Users/marceloag/.gemini/antigravity-cli/brain/dc7df57a-22d6-4bcc-a19b-61ec587cf2ef/screenshot_app_new.png';
  fs.writeFileSync(desktopPath, desktopBuffer);
  console.log('Saved desktop screenshot to:', desktopPath);
  
  console.log('Setting mobile device viewport metrics (390x844)...');
  await sendCommand('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
    screenOrientation: { angle: 0, type: 'portraitPrimary' }
  });
  
  console.log('Waiting 3 seconds for mobile layout adaptation...');
  await sleep(3000);
  
  console.log('Capturing mobile screenshot...');
  const mobileScreenshot = await sendCommand('Page.captureScreenshot', { format: 'png' });
  const mobileBuffer = Buffer.from(mobileScreenshot.data, 'base64');
  
  const mobilePath = '/Users/marceloag/.gemini/antigravity-cli/brain/dc7df57a-22d6-4bcc-a19b-61ec587cf2ef/screenshot_app_mobile_new.png';
  fs.writeFileSync(mobilePath, mobileBuffer);
  console.log('Saved mobile screenshot to:', mobilePath);
  
  console.log('Closing WebSocket and killing Chrome...');
  ws.close();
  chromeProcess.kill();
  console.log('Done!');
}

main().catch(err => {
  console.error('Error in capture script:', err);
});
