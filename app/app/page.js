'use client';
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import posthog from 'posthog-js';

/* ─── Premium SVG Icons ─────────────────────────────────── */
function PlayIcon({ className = "w-6 h-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
    </svg>
  );
}

function PauseIcon({ className = "w-6 h-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
    </svg>
  );
}

function PrevIcon({ className = "w-6 h-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .857-.917 1.399-1.667.986l-7.859-4.322a1.125 1.125 0 0 1 0-1.972l7.859-4.322A1.125 1.125 0 0 1 21 8.188V16.811ZM9 16.811c0 .857-.917 1.399-1.667.986L-.526 13.475a1.125 1.125 0 0 1 0-1.972l7.859-4.322A1.125 1.125 0 0 1 9 8.188V16.811Z" />
    </svg>
  );
}

function NextIcon({ className = "w-6 h-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.189c0-.857.917-1.399 1.667-.986l7.859 4.322a1.125 1.125 0 0 1 0 1.972l-7.859 4.322A1.125 1.125 0 0 1 3 15.812V8.19ZM15 8.189c0-.857.917-1.399 1.667-.986l7.859 4.322a1.125 1.125 0 0 1 0 1.972l-7.859 4.322A1.125 1.125 0 0 1 15 15.812V8.19Z" />
    </svg>
  );
}

function SpeakerIcon({ className = "w-6 h-6", isMuted = false }) {
  if (isMuted) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
    </svg>
  );
}

function FullscreenIcon({ className = "w-6 h-6", isFullscreen = false }) {
  if (isFullscreen) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
    </svg>
  );
}

function MenuIcon({ className = "w-6 h-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

export default function Page() {
  const defaultCanal = {
    id: 0,
    canal: 'TvMag Oficial',
    url: '/spottvmag-corto.mp4',
    avatar: 'canales/tvmag.svg'
  };

  /* ─── State Management ────────────────────────────────── */
  const [canales, setCanales] = useState([]);
  const [stream, setStream] = useState(defaultCanal);
  const [currentChannelIndex, setCurrentChannelIndex] = useState(0);
  
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const [showControls, setShowControls] = useState(true);
  const [showGuide, setShowGuide] = useState(false);
  const [showInfoBanner, setShowInfoBanner] = useState(false);
  const [keyboardNavEnabled, setKeyboardNavEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  /* ─── Refs ────────────────────────────────────────────── */
  const containerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  /* ─── Data Fetching ───────────────────────────────────── */
  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await fetch('/api/canales');
        const data = await response.json();
        if (data && data.length > 0) {
          // Put our default advertisement canal as the first element or prepended
          const prependedData = [
            {
              id: 0,
              canal: 'TvMag Anuncio',
              url: '/spottvmag-corto.mp4',
              avatar: 'canales/tvmag.svg',
              slug: 'anuncio-tvmag'
            },
            ...data
          ];
          setCanales(prependedData);
          setStream(prependedData[0]);
        }
      } catch (err) {
        console.error('Error fetching channels list:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchChannels();
  }, []);

  /* ─── Posthog & Analytical Events ──────────────────────── */
  useEffect(() => {
    if (stream && stream.canal) {
      posthog.capture('Canal', { property: stream.canal });
    }
  }, [stream]);

  /* ─── Image URL Resolution Helper ─────────────────────── */
  const getLogoUrl = (avatar) => {
    if (!avatar || avatar.includes('tvmag.svg')) return '/tvmag.svg';
    if (avatar.startsWith('http')) return avatar;
    if (avatar.startsWith('canales/')) {
      return `https://static.tvmag.cl/${avatar.slice(8)}`;
    }
    return `https://static.tvmag.cl/${avatar}`;
  };

  /* ─── Channel Switch Core Logic ───────────────────────── */
  const changeChannel = (idx) => {
    if (canales.length === 0) return;
    const boundedIndex = (idx + canales.length) % canales.length;
    setCurrentChannelIndex(boundedIndex);
    setStream(canales[boundedIndex]);
    setPlaying(true);
    
    // Trigger popup banner
    setShowInfoBanner(true);
    triggerHUDVisibility();
  };

  /* ─── Auto-Hiding TV Controls HUD Logic ───────────────── */
  const triggerHUDVisibility = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      // Auto-hide only when player is playing and guide sidebar is closed
      setShowControls(false);
    }, 4000);
  };

  // Keep controls open when guide is visible or paused
  const shouldRenderHUD = showControls || showGuide || !playing;

  useEffect(() => {
    const handleMouseMove = () => {
      triggerHUDVisibility();
    };
    
    // Bind activity triggers
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleMouseMove);
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, [playing, showGuide]);

  /* ─── Screen Tap Mobile Gesture ────────────────────────── */
  const handleViewportTap = (e) => {
    // Avoid hiding controls when clicking directly on overlay menus or controls bar
    if (e.target.closest('.hud-controls') || e.target.closest('.guide-sidebar')) {
      return;
    }
    // Toggle HUD controls on mobile/pointer tap
    setShowControls(prev => !prev);
  };

  /* ─── TV Channel Info Banner Popup Timeout ─────────────── */
  useEffect(() => {
    if (showInfoBanner) {
      const bannerTimer = setTimeout(() => {
        setShowInfoBanner(false);
      }, 4000);
      return () => clearTimeout(bannerTimer);
    }
  }, [showInfoBanner]);

  /* ─── Smart Keyboard Channel Surfing ───────────────────── */
  useEffect(() => {
    if (!keyboardNavEnabled || canales.length === 0) return;

    const handleKeyDown = (e) => {
      // Ignore keyboard surfing when focusing search bar
      if (document.activeElement?.tagName === 'INPUT') {
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowRight':
          e.preventDefault();
          changeChannel(currentChannelIndex + 1);
          break;
        case 'ArrowDown':
        case 'ArrowLeft':
          e.preventDefault();
          changeChannel(currentChannelIndex - 1);
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          setShowGuide(prev => !prev);
          break;
        case ' ':
          e.preventDefault();
          setPlaying(prev => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyboardNavEnabled, canales, currentChannelIndex]);

  /* ─── Fullscreen Event Listener & API ──────────────────── */
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(err => console.error("Error attempting to enable fullscreen:", err));
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false));
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  /* ─── Channel Filter (Search Query) ────────────────────── */
  const filteredChannels = canales.filter(c =>
    c.canal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div 
      ref={containerRef}
      onClick={handleViewportTap}
      className="relative w-screen h-screen overflow-hidden bg-[#020408] text-white flex flex-col justify-between select-none"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      
      {/* ── Brand Splash Screen Heartbeat Loader ───────────── */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#06090f] z-50 flex flex-col items-center justify-center gap-6">
          <div className="relative animate-pulse flex flex-col items-center">
            <div className="absolute inset-0 w-32 h-32 rounded-full bg-[#7b2fff] blur-3xl opacity-50 -z-10" />
            <Image src="/tvmag.svg" alt="TvMag Logo" width={110} height={110} priority className="mb-4" />
            <h2 className="text-xl font-bold tracking-widest text-white uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
              Cargando <span className="gradient-text">TvMag</span>
            </h2>
            <p className="text-xs text-white/40 mt-2">Sintonizando la señal magallánica...</p>
          </div>
        </div>
      )}

      {/* ── HTML5 Video Player Backdrop ─────────────────────── */}
      <div className="absolute inset-0 w-full h-full bg-black z-0">
        {canales.length > 0 && (
          <ReactPlayer
            url={stream.url}
            playing={playing}
            controls={false} // Drawing custom controls
            width="100%"
            height="100%"
            volume={isMuted ? 0 : volume}
            onEnded={() => changeChannel(currentChannelIndex + 1)}
            style={{ position: 'absolute', top: 0, left: 0 }}
            config={{
              file: {
                attributes: {
                  style: { width: '100%', height: '100%', objectFit: 'cover' }
                }
              }
            }}
          />
        )}
      </div>

      {/* ── Floating TV Header overlay (Branded) ───────────── */}
      <header 
        className={`absolute top-0 inset-x-0 z-20 flex items-center justify-between p-6 bg-gradient-to-b from-[#020408]/80 to-transparent pointer-events-none transition-all duration-700 ease-in-out ${
          shouldRenderHUD ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex items-center gap-3 pointer-events-auto">
          <Image src="/tvmag.svg" alt="TvMag Logo" width={38} height={38} />
          <span className="font-extrabold tracking-tight text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>TvMag</span>
        </div>

        <div className="flex items-center gap-3 pointer-events-auto">
          <span className="inline-flex items-center gap-1.5 bg-rose-500/20 border border-rose-500/40 text-rose-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full inline-block animate-ping" />
            En Vivo
          </span>
        </div>
      </header>

      {/* ── TV Channel Info Banner Popup (Top-Left) ────────── */}
      <div 
        className={`absolute top-24 left-6 z-20 pointer-events-none transition-all duration-500 ease-spring ${
          showInfoBanner ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'
        }`}
      >
        <div className="glass px-5 py-4 rounded-2xl flex items-center gap-4 max-w-sm backdrop-blur-md shadow-2xl border border-white/10">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-black/40 border border-white/20 shrink-0 flex items-center justify-center">
            <Image
              src={getLogoUrl(stream.avatar)}
              alt={stream.canal}
              width={42}
              height={42}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#00d4c8] mb-0.5">Sintonizando</span>
            <h3 className="font-bold text-white text-base leading-tight pr-4">{stream.canal}</h3>
            <span className="text-[11px] text-white/50 mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              Región de Magallanes
            </span>
          </div>
        </div>
      </div>

      {/* ── TV Controls Bar HUD Overlay (Bottom) ────────────────── */}
      <div 
        className={`absolute bottom-6 inset-x-0 z-30 flex justify-center transition-all duration-500 ease-out transform ${
          shouldRenderHUD ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="hud-controls glass-strong px-6 py-4 rounded-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 max-w-4xl w-[92%] border border-white/15 shadow-[0_24px_64px_rgba(0,0,0,0.85)]">
          
          {/* Action buttons (Play, Prev, Next) */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => changeChannel(currentChannelIndex - 1)}
              className="p-3 rounded-full hover:bg-white/10 active:scale-95 transition-all text-white/80 hover:text-white"
              title="Canal Anterior (Arrow Down / Left)"
            >
              <PrevIcon className="w-5 h-5" />
            </button>

            <button 
              onClick={() => setPlaying(prev => !prev)}
              className="p-4 rounded-full bg-white text-black hover:bg-white/90 active:scale-95 transition-all hover:scale-105"
              title="Reproducir / Pausar (Espacio)"
            >
              {playing ? <PauseIcon className="w-6 h-6 fill-black" /> : <PlayIcon className="w-6 h-6 fill-black" />}
            </button>

            <button 
              onClick={() => changeChannel(currentChannelIndex + 1)}
              className="p-3 rounded-full hover:bg-white/10 active:scale-95 transition-all text-white/80 hover:text-white"
              title="Siguiente Canal (Arrow Up / Right)"
            >
              <NextIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Active Info Badge */}
          <div className="flex flex-col text-center md:text-left leading-tight shrink-0 max-w-xs md:max-w-md">
            <span className="text-[10px] uppercase tracking-widest text-[#00d4c8] font-bold">Estas viendo</span>
            <h4 className="font-extrabold text-white text-sm md:text-base tracking-tight truncate max-w-[200px] sm:max-w-xs">{stream.canal}</h4>
          </div>

          {/* Right Controls HUD (Volume, Keyboard navigation toggle, Guide sidebar, Fullscreen) */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            
            {/* Custom volume controls */}
            <div className="flex items-center gap-2 group/volume relative">
              <button 
                onClick={() => setIsMuted(prev => !prev)}
                className="p-2.5 rounded-full hover:bg-white/10 transition-all text-white/80 hover:text-white"
                title={isMuted ? "Quitar Silencio" : "Silenciar"}
              >
                <SpeakerIcon className="w-5 h-5" isMuted={isMuted || volume === 0} />
              </button>
              
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setVolume(val);
                  if (val > 0) setIsMuted(false);
                }}
                className="w-20 md:w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#7b2fff] transition-all hover:h-1.5"
                style={{
                  background: `linear-gradient(to right, #7b2fff 0%, #7b2fff ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.2) ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.2) 100%)`
                }}
              />
            </div>

            {/* Keyboard Surfing Toggle Switch */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5" title="Navegar canales con las flechas del teclado">
              <span className="text-[9px] font-bold text-white/50 uppercase tracking-wider hidden sm:inline">Teclado</span>
              <button 
                onClick={() => setKeyboardNavEnabled(prev => !prev)}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  keyboardNavEnabled ? 'bg-[#00d4c8]' : 'bg-white/20'
                }`}
              >
                <span 
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    keyboardNavEnabled ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Sidebar Guide toggle */}
            <button 
              onClick={() => setShowGuide(prev => !prev)}
              className={`p-2.5 rounded-full transition-all flex items-center gap-1.5 font-bold text-xs ${
                showGuide 
                  ? 'bg-white text-black hover:bg-white/95 scale-105' 
                  : 'hover:bg-white/10 text-white/80 hover:text-white border border-white/10 bg-white/5 px-4'
              }`}
              title="Abrir Guía de Canales (G)"
            >
              <MenuIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Canales</span>
            </button>

            {/* Fullscreen API Toggle */}
            <button 
              onClick={toggleFullscreen}
              className="p-2.5 rounded-full hover:bg-white/10 transition-all text-white/80 hover:text-white border border-white/10 bg-white/5"
              title="Alternar Pantalla Completa"
            >
              <FullscreenIcon className="w-5 h-5" isFullscreen={isFullscreen} />
            </button>
          </div>

        </div>
      </div>

      {/* ── Sliding Liquid Glass Channel Guide Sidebar ─────── */}
      <div 
        className={`fixed top-0 right-0 h-full z-40 transition-all duration-500 ease-spring ${
          showGuide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="guide-sidebar w-80 sm:w-[350px] h-[calc(100vh-2rem)] my-4 mr-4 rounded-3xl glass-strong border border-white/10 shadow-[0_32px_96px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden backdrop-blur-2xl">
          
          {/* Guide Header */}
          <div className="p-5 border-b border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4c8] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d4c8]" />
                </span>
                <h3 className="font-extrabold tracking-tight text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Guía de Canales</h3>
              </div>
              <button 
                onClick={() => setShowGuide(false)}
                className="p-1 rounded-full text-white/40 hover:text-white hover:bg-white/15 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Search Input Filter */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar canal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-2 px-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7b2fff]/80 transition-all font-light"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-white/30 hover:text-white text-xs transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Guide Channel List */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2.5 custom-scrollbar">
            {filteredChannels.length > 0 ? (
              filteredChannels.map((ch, idx) => {
                // Find actual index of this channel in original list
                const originalIndex = canales.findIndex(c => c.id === ch.id);
                const isActive = stream.id === ch.id;
                
                return (
                  <button
                    key={ch.id}
                    onClick={() => changeChannel(originalIndex)}
                    className={`flex items-center gap-4 p-3 rounded-2xl text-left border transition-all duration-300 w-full hover:scale-[1.02] active:scale-[0.98] ${
                      isActive 
                        ? 'bg-white/15 border-[#00d4c8] shadow-[0_0_20px_rgba(0,212,200,0.2)]' 
                        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                    }`}
                  >
                    {/* Logo container */}
                    <div className="relative w-12 h-12 rounded-xl bg-black/30 border border-white/15 shrink-0 flex items-center justify-center overflow-hidden">
                      <Image 
                        src={getLogoUrl(ch.avatar)} 
                        alt={ch.canal} 
                        width={38}
                        height={38}
                        className="object-contain rounded-lg"
                      />
                    </div>
                    {/* Channel Detail */}
                    <div className="flex flex-col overflow-hidden">
                      <h4 className="font-bold text-sm text-white truncate pr-1">{ch.canal}</h4>
                      <span className="text-[10px] text-white/40 truncate">
                        {ch.id === 0 ? "Señal TvMag" : "Señal Satelital En Vivo"}
                      </span>
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center text-white/30">
                <span className="text-2xl mb-1">🔍</span>
                <p className="text-xs">No se encontraron canales</p>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
