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
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
    </svg>
  );
}

function NextIcon({ className = "w-6 h-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.625L12.75 12l-7.5 6.375m6-12.75L18.75 12l-7.5 6.375" />
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

function MultiviewIcon({ className = "w-6 h-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>
  );
}

function PiPIcon({ className = "w-6 h-6" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 5.25a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V5.25Zm10.5 6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-5.25Z" />
    </svg>
  );
}

export default function Page() {
  const defaultCanal = {
    id: 0,
    canal: 'TvMag Anuncio',
    url: '/spottvmag-corto.mp4',
    avatar: 'canales/tvmag.svg',
    slug: 'anuncio-tvmag'
  };

  /* ─── State Management ────────────────────────────────── */
  const [canales, setCanales] = useState([]);
  const [multiviewStreams, setMultiviewStreams] = useState([defaultCanal]);
  const [audioFocusIndex, setAudioFocusIndex] = useState(0);
  const [focusedSlotIndex, setFocusedSlotIndex] = useState(0);
  const [isMultiviewEnabled, setIsMultiviewEnabled] = useState(false);
  
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
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  /* ─── Refs ────────────────────────────────────────────── */
  const containerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);
  const playersRef = useRef({});

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await fetch('/api/canales');
        const data = await response.json();
        if (data && data.length > 0) {
          const prependedData = [defaultCanal, ...data];
          setCanales(prependedData);
          // Set initial stream to the first real channel! (index 1 is data[0], which is Sur TV!)
          const initialStream = prependedData[1] || prependedData[0];
          setMultiviewStreams([initialStream]);
        }
      } catch (err) {
        console.error('Error fetching channels list:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchChannels();
  }, []);

  /* ─── Posthog Events for Primary Audio Stream ─────────── */
  useEffect(() => {
    const currentAudioStream = multiviewStreams[audioFocusIndex];
    if (currentAudioStream && currentAudioStream.canal) {
      posthog.capture('Canal', { property: currentAudioStream.canal });
    }
  }, [audioFocusIndex, multiviewStreams]);

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
  const selectChannelInSlot = (channel, slotIdx) => {
    const updated = [...multiviewStreams];
    updated[slotIdx] = channel;
    setMultiviewStreams(updated);
    
    // Set visual confirmation banner targeting this slot
    if (slotIdx === audioFocusIndex) {
      setShowInfoBanner(true);
    }
    triggerHUDVisibility();
  };

  // Keyboard navigation sintonizes the active audio slot
  const changeChannelInAudioSlot = (offset) => {
    if (canales.length === 0) return;
    const currentStream = multiviewStreams[audioFocusIndex];
    const currentIdx = canales.findIndex(c => c.id === currentStream?.id);
    
    const targetIdx = (currentIdx + offset + canales.length) % canales.length;
    selectChannelInSlot(canales[targetIdx], audioFocusIndex);
  };

  /* ─── Multiview Slots Modifications ───────────────────── */
  const addSlot = (channel) => {
    if (multiviewStreams.length >= 4) return;
    const updated = [...multiviewStreams, channel];
    setMultiviewStreams(updated);
    setAudioFocusIndex(updated.length - 1);
    setFocusedSlotIndex(updated.length - 1);
  };

  const removeSlot = (slotIdx) => {
    if (multiviewStreams.length <= 1) return;
    const updated = multiviewStreams.filter((_, idx) => idx !== slotIdx);
    setMultiviewStreams(updated);
    
    // Reset focus pointers safely
    const newFocusIndex = audioFocusIndex >= updated.length ? 0 : audioFocusIndex;
    setAudioFocusIndex(newFocusIndex);
    setFocusedSlotIndex(newFocusIndex);
  };

  const toggleMultiviewMode = () => {
    if (isMultiviewEnabled) {
      // Return to single standard view using the stream that currently has audio focus
      const focusedStream = multiviewStreams[audioFocusIndex] || defaultCanal;
      setMultiviewStreams([focusedStream]);
      setAudioFocusIndex(0);
      setFocusedSlotIndex(0);
      setIsMultiviewEnabled(false);
    } else {
      // Enter Multiview mode: if only 1 stream, automatically add a placeholder or copy it
      if (multiviewStreams.length === 1 && canales.length > 1) {
        // Automatically add the next channel as slot 2 so they see the split grid instantly!
        const nextChannel = canales[1] || defaultCanal;
        setMultiviewStreams([multiviewStreams[0], nextChannel]);
        setFocusedSlotIndex(1);
        setAudioFocusIndex(0);
      }
      setIsMultiviewEnabled(true);
      setShowGuide(true); // Open guide sidebar so they can start building their grid
    }
  };

  /* ─── Auto-Hiding Controls HUD Logic ──────────────────── */
  const triggerHUDVisibility = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      // Auto-hide HUD only when playing and guide sidebar is closed
      setShowControls(false);
    }, 4500);
  };

  const shouldRenderHUD = showControls || showGuide || !playing;

  useEffect(() => {
    const handleMouseMove = () => triggerHUDVisibility();
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
    if (e.target.closest('.hud-controls') || e.target.closest('.guide-sidebar') || e.target.closest('.slot-action-btn')) {
      return;
    }
    setShowControls(prev => !prev);
  };

  /* ─── TV Channel Info Banner Timeout ──────────────────── */
  useEffect(() => {
    if (showInfoBanner) {
      const bannerTimer = setTimeout(() => setShowInfoBanner(false), 4000);
      return () => clearTimeout(bannerTimer);
    }
  }, [showInfoBanner]);

  /* ─── Smart Keyboard Channel Surfing ───────────────────── */
  useEffect(() => {
    if (!keyboardNavEnabled || canales.length === 0) return;

    const handleKeyDown = (e) => {
      if (document.activeElement?.tagName === 'INPUT') return;

      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowRight':
          e.preventDefault();
          changeChannelInAudioSlot(1);
          break;
        case 'ArrowDown':
        case 'ArrowLeft':
          e.preventDefault();
          changeChannelInAudioSlot(-1);
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          setShowGuide(prev => !prev);
          break;
        case 'm':
        case 'M':
          e.preventDefault();
          toggleMultiviewMode();
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
  }, [keyboardNavEnabled, canales, multiviewStreams, audioFocusIndex, isMultiviewEnabled]);

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

  /* ─── Picture-in-Picture API ───────────────────────────── */
  const triggerPiP = async () => {
    try {
      const activePlayer = playersRef.current[audioFocusIndex];
      if (!activePlayer) return;
      
      const video = activePlayer.getInternalPlayer();
      if (!video) return;
      
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (document.pictureInPictureEnabled || video.webkitSupportsPresentationMode) {
        if (video.requestPictureInPicture) {
          await video.requestPictureInPicture();
        } else if (video.webkitSetPresentationMode) {
          video.webkitSetPresentationMode("picture-in-picture");
        }
      } else {
        alert("Picture-in-Picture no es soportado en este navegador.");
      }
    } catch (err) {
      console.error("Error triggering Picture-in-Picture:", err);
    }
  };

  /* ─── Channel Filter (Search Query) ────────────────────── */
  const filteredChannels = canales.filter(c =>
    c.canal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  /* ─── Render Helper: Dynamic Mosaic Grid Class Names ───── */
  const getGridContainerClass = () => {
    const count = multiviewStreams.length;
    if (count <= 1) return "w-full h-full flex items-center justify-center bg-black relative";
    if (count === 2) return "w-full h-full flex flex-col md:flex-row gap-1 bg-[#020408] justify-center items-center";
    if (count === 3) return "w-full h-full flex flex-col md:flex-row gap-1 bg-[#020408] justify-center items-center";
    return "w-full h-full grid grid-cols-2 grid-rows-2 gap-1 bg-[#020408]";
  };

  const getSlotClass = (idx) => {
    const count = multiviewStreams.length;
    if (count <= 1) return "w-full aspect-video md:absolute md:inset-0 md:w-full md:h-full md:aspect-none relative";
    if (count === 2) return "w-full aspect-video md:flex-1 md:h-full md:w-full md:aspect-none relative";
    if (count === 3) {
      // Focus Mode layout: Slot 1 is big, 2 & 3 are vertically stacked
      if (idx === 0) return "w-full aspect-video md:flex-[2] md:h-full md:w-full md:aspect-none relative";
      return "w-full flex flex-col gap-1 md:flex-1 md:h-full md:w-full md:aspect-none relative";
    }
    return "w-full aspect-video md:w-full md:h-full md:aspect-none relative";
  };

  return (
    <div 
      ref={containerRef}
      onClick={handleViewportTap}
      className="relative w-screen h-[100dvh] overflow-hidden bg-[#020408] text-white flex flex-col justify-between select-none"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      
      {/* ── Brand Splash Screen Loader ────────────────────── */}
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

      {/* ── TV Channel Info Banner Popup (Top-Left) ────────── */}
      {multiviewStreams[audioFocusIndex] && (
        <div 
          className={`absolute top-24 left-6 z-20 pointer-events-none transition-all duration-500 ease-spring ${
            showInfoBanner ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-12 opacity-0 scale-95'
          }`}
        >
          <div className="glass px-5 py-4 rounded-2xl flex items-center gap-4 max-w-sm backdrop-blur-md shadow-2xl border border-white/10">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-black/40 border border-white/20 shrink-0 flex items-center justify-center">
              <Image
                src={getLogoUrl(multiviewStreams[audioFocusIndex].avatar)}
                alt={multiviewStreams[audioFocusIndex].canal}
                width={42}
                height={42}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#00d4c8] mb-0.5">Sintonizando Audio</span>
              <h3 className="font-bold text-white text-base leading-tight pr-4">{multiviewStreams[audioFocusIndex].canal}</h3>
              <span className="text-[11px] text-white/50 mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                Audio Activo • Multiview
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── Dynamic Multiview Mosaic Grid Backdrop ─────────── */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        <div className={getGridContainerClass()}>
          
          {/* Loop over our active streams */}
          {hasMounted && multiviewStreams.map((ch, idx) => {
            const hasAudio = idx === audioFocusIndex;
            const isGuideFocused = idx === focusedSlotIndex;
            
            // Adjust layouts specifically for 3-channel stack wrapper
            const renderPlayerBlock = (
              <div 
                key={ch.id + '-' + idx}
                onMouseEnter={() => setAudioFocusIndex(idx)}
                onClick={() => setAudioFocusIndex(idx)}
                className={`relative w-full aspect-video md:w-full md:h-full md:aspect-none md:flex-1 bg-black group/slot transition-all duration-300 ${
                  hasAudio 
                    ? 'border-2 border-[#00d4c8] shadow-[inset_0_0_20px_rgba(0,212,200,0.35)]' 
                    : 'border-2 border-transparent border-b-white/5 md:border-r-white/5 hover:border-white/20'
                }`}
              >
                {/* React Player instance */}
                <ReactPlayer
                  ref={el => { playersRef.current[idx] = el; }}
                  url={ch.url}
                  playing={playing}
                  controls={false}
                  playsinline={true}
                  width="100%"
                  height="100%"
                  volume={hasAudio && !isMuted ? volume : 0}
                  muted={!hasAudio || isMuted}
                  style={{ position: 'absolute', top: 0, left: 0 }}
                  config={{
                    file: {
                      attributes: {
                        style: { width: '100%', height: '100%', objectFit: 'contain' },
                        playsInline: true
                      }
                    }
                  }}
                />

                {/* Glass overlays and visual indicators inside slot */}
                <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-3">
                  
                  {/* Slot Top Header Tag (Visible on HUD controls) */}
                  <div 
                    className={`flex items-center justify-between w-full transition-all duration-500 ${
                      shouldRenderHUD ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                    }`}
                  >
                    <div className="glass px-2.5 py-1 rounded-lg flex items-center gap-2 backdrop-blur-md border border-white/10 shadow text-[10px] font-bold text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7b2fff]" />
                      Pantalla {idx + 1}
                    </div>

                    <div className="flex items-center gap-1.5 pointer-events-auto">
                      {/* Active audio speaker indicator */}
                      {hasAudio && (
                        <div className="bg-[#00d4c8] text-black px-2 py-0.5 rounded-lg text-[9px] font-extrabold flex items-center gap-1 shadow-md">
                          <span>AUDIO</span>
                          <span className="w-1 h-1 bg-black rounded-full animate-ping" />
                        </div>
                      )}

                      {/* Guide mapping focused target indicator */}
                      {isMultiviewEnabled && isGuideFocused && (
                        <div className="bg-[#7b2fff] text-white px-2 py-0.5 rounded-lg text-[9px] font-bold flex items-center gap-1 shadow-md">
                          <span>SINTONIZANDO</span>
                        </div>
                      )}

                      {/* Slot Close button (Minimum 1 slot left) */}
                      {isMultiviewEnabled && multiviewStreams.length > 1 && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSlot(idx);
                          }}
                          className="slot-action-btn bg-black/50 hover:bg-rose-600/90 text-white rounded-lg p-1 transition-all"
                          title="Eliminar Pantalla"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Slot Bottom Label (Channel Name) */}
                  <div 
                    className={`transition-all duration-500 ${
                      shouldRenderHUD ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                  >
                    <div className="glass px-3 py-1.5 rounded-xl inline-flex items-center gap-2 backdrop-blur-md border border-white/10 shadow text-xs font-semibold">
                      <Image 
                        src={getLogoUrl(ch.avatar)} 
                        alt={ch.canal} 
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                      <span>{ch.canal}</span>
                    </div>
                  </div>

                </div>
              </div>
            );

            // Handle the 3-channel stacking layout correctly
            if (multiviewStreams.length === 3) {
              if (idx === 0) {
                return (
                  <div key={idx} className={getSlotClass(idx)}>
                    {renderPlayerBlock}
                  </div>
                );
              }
              // Stack slots 2 & 3 inside a vertical flex column
              if (idx === 1) {
                return (
                  <div key="stack-right" className="w-full flex flex-col gap-1 md:flex-1 md:h-full">
                    {renderPlayerBlock}
                    {/* Render slot 3 immediately below */}
                    {hasMounted && multiviewStreams[2] && (
                      <div 
                        onMouseEnter={() => setAudioFocusIndex(2)}
                        onClick={() => setAudioFocusIndex(2)}
                        className={`relative w-full aspect-video md:w-full md:h-full md:aspect-none md:flex-1 bg-black group/slot transition-all duration-300 ${
                          2 === audioFocusIndex 
                            ? 'border-2 border-[#00d4c8] shadow-[inset_0_0_20px_rgba(0,212,200,0.35)]' 
                            : 'border-2 border-transparent border-t-white/5 hover:border-white/20'
                        }`}
                      >
                        <ReactPlayer
                          ref={el => { playersRef.current[2] = el; }}
                          url={multiviewStreams[2].url}
                          playing={playing}
                          controls={false}
                          playsinline={true}
                          width="100%"
                          height="100%"
                          volume={2 === audioFocusIndex && !isMuted ? volume : 0}
                          muted={2 !== audioFocusIndex || isMuted}
                          style={{ position: 'absolute', top: 0, left: 0 }}
                          config={{
                            file: {
                              attributes: {
                                style: { width: '100%', height: '100%', objectFit: 'contain' },
                                playsInline: true
                              }
                            }
                          }}
                        />
                        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-3">
                          <div className={`flex items-center justify-between w-full transition-all duration-500 ${shouldRenderHUD ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                            <div className="glass px-2.5 py-1 rounded-lg flex items-center gap-2 backdrop-blur-md border border-white/10 shadow text-[10px] font-bold text-white/80">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#7b2fff]" />
                              Pantalla 3
                            </div>
                            <div className="flex items-center gap-1.5 pointer-events-auto">
                              {2 === audioFocusIndex && (
                                <div className="bg-[#00d4c8] text-black px-2 py-0.5 rounded-lg text-[9px] font-extrabold flex items-center gap-1 shadow-md">
                                  <span>AUDIO</span>
                                  <span className="w-1 h-1 bg-black rounded-full animate-ping" />
                                </div>
                              )}
                              {isGuideFocused && 2 === focusedSlotIndex && (
                                <div className="bg-[#7b2fff] text-white px-2 py-0.5 rounded-lg text-[9px] font-bold flex items-center gap-1 shadow-md">
                                  <span>SINTONIZANDO</span>
                                </div>
                              )}
                              <button 
                                onClick={(e) => { e.stopPropagation(); removeSlot(2); }}
                                className="slot-action-btn bg-black/50 hover:bg-rose-600/90 text-white rounded-lg p-1 transition-all"
                                title="Eliminar Pantalla"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className={`transition-all duration-500 ${shouldRenderHUD ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                            <div className="glass px-3 py-1.5 rounded-xl inline-flex items-center gap-2 backdrop-blur-md border border-white/10 shadow text-xs font-semibold">
                              <Image src={getLogoUrl(multiviewStreams[2].avatar)} alt={multiviewStreams[2].canal} width={18} height={18} className="object-contain" />
                              <span>{multiviewStreams[2].canal}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return null; // Handled index 2 above
            }

            // Standard layout block
            return (
              <div key={idx} className={getSlotClass(idx)}>
                {renderPlayerBlock}
              </div>
            );
          })}

          {/* Quick-add Grid Quadrant placeholder for Multiview */}
          {isMultiviewEnabled && multiviewStreams.length < 4 && (
            <div 
              onClick={() => {
                setFocusedSlotIndex(multiviewStreams.length);
                setShowGuide(true);
              }}
              className="flex-1 w-full h-full relative flex flex-col items-center justify-center border-2 border-dashed border-white/10 hover:border-[#00d4c8]/50 bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer group/add-slot"
            >
              <div className="glass p-5 rounded-2xl flex flex-col items-center justify-center gap-2 text-center max-w-xs backdrop-blur shadow hover:scale-105 transition-transform duration-300">
                <span className="text-3xl text-white/40 group-hover/add-slot:text-[#00d4c8] transition-colors">➕</span>
                <h4 className="font-extrabold text-sm text-white/80 group-hover/add-slot:text-white">Agregar Pantalla {multiviewStreams.length + 1}</h4>
                <p className="text-[10px] text-white/40">Sintoniza otro canal simultáneamente en este cuadrante</p>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── Branded TV Header Overlay ────────────────────────── */}
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
          {isMultiviewEnabled && (
            <span className="bg-[#7b2fff]/20 border border-[#7b2fff]/45 text-[#b07eff] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b2fff] inline-block animate-pulse" />
              Modo Multi-Pantalla ({multiviewStreams.length}/4)
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 bg-rose-500/20 border border-rose-500/40 text-rose-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full inline-block animate-ping" />
            En Vivo
          </span>
        </div>
      </header>

      {/* ── TV Controls Bar HUD Overlay (Bottom) ────────────────── */}
      <div 
        className={`absolute bottom-4 md:bottom-6 inset-x-0 z-30 flex justify-center transition-all duration-500 ease-out transform ${
          shouldRenderHUD ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="hud-controls glass-strong px-3 md:px-6 py-2 md:py-4 rounded-3xl mx-auto flex items-center justify-between gap-2 md:gap-8 max-w-4xl w-[94%] border border-white/15 shadow-[0_24px_64px_rgba(0,0,0,0.85)]">
          
          {/* Action buttons (Play, Prev, Next) */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => changeChannelInAudioSlot(-1)}
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
              onClick={() => changeChannelInAudioSlot(1)}
              className="p-3 rounded-full hover:bg-white/10 active:scale-95 transition-all text-white/80 hover:text-white"
              title="Siguiente Canal (Arrow Up / Right)"
            >
              <NextIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Active Audio Channel Info Badge */}
          {multiviewStreams[audioFocusIndex] && (
            <div className="flex flex-col text-center md:text-left leading-tight shrink-0 max-w-xs md:max-w-md">
              <span className="text-[10px] uppercase tracking-widest text-[#00d4c8] font-bold">Audio principal</span>
              <h4 className="font-extrabold text-white text-sm md:text-base tracking-tight truncate max-w-[200px] sm:max-w-xs">{multiviewStreams[audioFocusIndex].canal}</h4>
            </div>
          )}

          {/* Right Controls HUD */}
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
                className="hidden md:inline-block w-20 md:w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#7b2fff] transition-all hover:h-1.5"
                style={{
                  background: `linear-gradient(to right, #7b2fff 0%, #7b2fff ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.2) ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.2) 100%)`
                }}
              />
            </div>

            {/* Multiview Toggle Button */}
            <button 
              onClick={toggleMultiviewMode}
              className={`p-2.5 rounded-full transition-all border ${
                isMultiviewEnabled 
                  ? 'bg-[#7b2fff] text-white border-[#8d4fff] scale-105 shadow-[0_0_15px_rgba(123,47,255,0.4)]' 
                  : 'hover:bg-white/10 border-white/10 bg-white/5 text-white/80 hover:text-white'
              }`}
              title="Alternar Modo Multi-Pantalla (M)"
            >
              <MultiviewIcon className="w-5 h-5" />
            </button>

            {/* Picture-in-Picture Toggle */}
            <button 
              onClick={triggerPiP}
              className="p-2.5 rounded-full hover:bg-white/10 transition-all text-white/80 hover:text-white border border-white/10 bg-white/5"
              title="Imagen en Imagen (PiP)"
            >
              <PiPIcon className="w-5 h-5" />
            </button>

            {/* Fullscreen API Toggle */}
            <button 
              onClick={toggleFullscreen}
              className="p-2.5 rounded-full hover:bg-white/10 transition-all text-white/80 hover:text-white border border-white/10 bg-white/5"
              title="Alternar Pantalla Completa"
            >
              <FullscreenIcon className="w-5 h-5" isFullscreen={isFullscreen} />
            </button>

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

            {/* Multiview Active Slots Selector Tabs */}
            {isMultiviewEnabled && (
              <div className="flex flex-col gap-1.5 mt-2 bg-white/[0.03] border border-white/5 p-2 rounded-2xl">
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-white/40 mb-1">Destino de Sintonización</span>
                <div className="grid grid-cols-4 gap-1.5">
                  {[0, 1, 2, 3].map((slotIdx) => {
                    const slotStream = multiviewStreams[slotIdx];
                    const isTarget = slotIdx === focusedSlotIndex;
                    const hasStream = !!slotStream;
                    
                    return (
                      <button
                        key={slotIdx}
                        onClick={() => {
                          // If slot doesn't exist, we can't select it until preceding slots exist
                          if (slotIdx <= multiviewStreams.length) {
                            setFocusedSlotIndex(slotIdx);
                          }
                        }}
                        disabled={slotIdx > multiviewStreams.length}
                        className={`py-1.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                          slotIdx > multiviewStreams.length ? 'opacity-25 cursor-not-allowed' : ''
                        } ${
                          isTarget 
                            ? 'bg-[#7b2fff] border-[#8d4fff] text-white scale-105 shadow-md' 
                            : hasStream
                              ? 'bg-white/10 border-white/5 text-white hover:bg-white/15'
                              : 'bg-dashed border-2 border-white/10 text-white/30 hover:border-white/20'
                        }`}
                      >
                        <span className="text-[9px] font-bold">P{slotIdx + 1}</span>
                        {hasStream ? (
                          <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0 mt-0.5">
                            <Image src={getLogoUrl(slotStream.avatar)} alt="" width={16} height={16} className="object-contain" />
                          </div>
                        ) : (
                          <span className="text-[10px] mt-0.5">➕</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Guide Channel List */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2.5 custom-scrollbar">
            {filteredChannels.length > 0 ? (
              filteredChannels.map((ch) => {
                const isSelectedInGuide = isMultiviewEnabled 
                  ? multiviewStreams[focusedSlotIndex]?.id === ch.id 
                  : multiviewStreams[0]?.id === ch.id;
                
                return (
                  <button
                    key={ch.id}
                    onClick={() => {
                      if (isMultiviewEnabled) {
                        // If focused slot is empty/adding new slot, append it
                        if (focusedSlotIndex === multiviewStreams.length) {
                          addSlot(ch);
                        } else {
                          selectChannelInSlot(ch, focusedSlotIndex);
                        }
                      } else {
                        selectChannelInSlot(ch, 0);
                      }
                    }}
                    className={`flex items-center gap-4 p-3 rounded-2xl text-left border transition-all duration-300 w-full hover:scale-[1.02] active:scale-[0.98] ${
                      isSelectedInGuide 
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
