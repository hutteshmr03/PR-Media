import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Pause, Volume2, VolumeX, Maximize2, Newspaper, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WorkCard({ item, onPlayVideo }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Default muted ensures browser autoplay works without blocking
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);

  const handleStartPlay = (e) => {
    e.stopPropagation();
    setIsPlaying(true);
    setIsPaused(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.log('Autoplay handled:', err);
        });
      }
    }, 50);
  };

  const handleTogglePause = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const handleToggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMute = !videoRef.current.muted;
      videoRef.current.muted = nextMute;
      setIsMuted(nextMute);
    } else {
      setIsMuted(!isMuted);
    }
  };

  const handleStopVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setIsPaused(false);
  };

  const handleExpandToBigScreen = (e) => {
    e.stopPropagation();
    if (onPlayVideo) {
      onPlayVideo(item);
    }
  };

  // TYPE C: PRESS COVERAGE CARD (Newspaper / Article Style)
  if (item.type === 'press') {
    return (
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group relative rounded-2xl overflow-hidden bg-[#FBF9F5] p-6 sm:p-7 border-2 border-[#D5D1C8] shadow-sm hover:shadow-xl hover:border-[#2D5A54] transition-all duration-300 flex flex-col justify-between aspect-[4/3]"
      >
        <div>
          {/* Masthead Header */}
          <div className="flex items-center justify-between pb-3 border-b-2 border-[#23413C]/20 mb-4">
            <div className="flex items-center gap-2">
              <Newspaper className="w-4 h-4 text-[#2D5A54]" />
              <span
                className="text-xs sm:text-sm font-black tracking-widest text-[#23413C] uppercase"
                style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
              >
                {item.publication}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#2D5A54] bg-[#2D5A54]/10 px-2 py-0.5 rounded">
              {item.date}
            </span>
          </div>

          {/* Article Headline */}
          <h3
            className="text-base sm:text-lg font-black text-[#23413C] tracking-tight leading-snug group-hover:text-[#2D5A54] transition-colors mb-2"
            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
          >
            "{item.headline}"
          </h3>

          {/* Article Summary Snippet */}
          <p className="text-xs text-[#2B2B2B]/80 leading-relaxed line-clamp-3">
            {item.summary}
          </p>
        </div>

        {/* Card Footer */}
        <div className="pt-3 border-t border-[#D5D1C8]/60 flex items-center justify-between">
          <span className="text-[10px] font-bold text-[#2D5A54] tracking-wider uppercase">
            ✦ {item.stat}
          </span>
          <ArrowUpRight className="w-4 h-4 text-[#23413C]/50 group-hover:text-[#2D5A54] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </motion.div>
    );
  }

  // TYPE B: VIDEO CAMPAIGN CARD (Inline Playback + Move to Big Screen Option)
  if (item.type === 'video') {
    return (
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group relative rounded-2xl overflow-hidden bg-[#112C28] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between aspect-[4/3] border-2 border-transparent hover:border-[#4ECDC4]/70"
      >
        {/* If playing inline in card */}
        {isPlaying ? (
          <div className="relative w-full h-full bg-black overflow-hidden select-none">
            {/* Inline Video Player */}
            <video
              ref={videoRef}
              src={item.videoUrl}
              autoPlay
              playsInline
              loop
              muted={isMuted}
              preload="auto"
              className="w-full h-full object-cover"
              onPlay={() => setIsPaused(false)}
              onPause={() => setIsPaused(true)}
            />

            {/* Top Controls Bar (z-30: Guaranteed on top and clickable) */}
            <div className="absolute top-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-b from-black/85 via-black/40 to-transparent z-30 flex items-center justify-between pointer-events-auto">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-bold text-[#4ECDC4] uppercase tracking-wider shadow">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                Video Campaign
              </span>

              <div className="flex items-center gap-1.5">
                {/* Play / Pause Toggle (Icon Only) */}
                <button
                  type="button"
                  onClick={handleTogglePause}
                  className="w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/25 hover:border-[#10B981] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
                  title={isPaused ? 'Resume Video' : 'Pause Video'}
                  aria-label="Toggle Pause"
                >
                  {isPaused ? (
                    <Play className="w-3.5 h-3.5 fill-[#10B981] text-[#10B981] ml-0.5" />
                  ) : (
                    <Pause className="w-3.5 h-3.5 text-[#4ECDC4]" />
                  )}
                </button>

                {/* Mute/Unmute Toggle (Icon Only) */}
                <button
                  type="button"
                  onClick={handleToggleMute}
                  className={`w-8 h-8 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 ${
                    isMuted
                      ? 'bg-black/70 border-white/25 text-white hover:bg-[#10B981] hover:text-[#0A1E1B] hover:border-[#10B981]'
                      : 'bg-[#10B981] border-[#10B981] text-[#0A1E1B] shadow-[0_0_12px_#10B981]'
                  }`}
                  title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                  aria-label="Toggle Mute"
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5 text-[#4ECDC4]" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 text-[#0A1E1B]" />
                  )}
                </button>

                {/* Fullscreen Button (Icon Only - Single Button) */}
                <button
                  type="button"
                  onClick={handleExpandToBigScreen}
                  className="w-8 h-8 rounded-full bg-black/70 hover:bg-[#10B981] text-white hover:text-[#0A1E1B] border border-white/25 hover:border-[#10B981] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
                  title="Fullscreen"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                {/* Close / Reset */}
                <button
                  type="button"
                  onClick={handleStopVideo}
                  className="w-8 h-8 rounded-full bg-black/70 hover:bg-red-500 text-white border border-white/25 hover:border-red-500 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
                  title="Close Video"
                  aria-label="Stop Video"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Center Tap Area (z-10: handles video tap to toggle pause/resume without blocking top/bottom bars) */}
            <div
              onClick={handleTogglePause}
              className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
            >
              {isPaused && (
                <div className="w-14 h-14 rounded-full bg-black/80 text-[#4ECDC4] flex items-center justify-center border-2 border-[#4ECDC4] shadow-2xl backdrop-blur-md">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              )}
            </div>

            {/* Bottom Controls Bar (z-30: Guaranteed on top and clickable) */}
            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-30 flex items-end justify-between pointer-events-auto">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#4ECDC4] block mb-0.5">
                  ✦ {item.stat || '4K Master Reel'}
                </span>
                <h3
                  className="text-xs sm:text-sm font-black text-white uppercase tracking-tight line-clamp-1"
                  style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ) : (
          /* Poster View before playback starts (Crisp Light-Mode Visual) */
          <div className="relative w-full h-full flex flex-col justify-between">
            {/* Poster Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-100 contrast-[1.02] saturate-[1.05]"
              loading="lazy"
            />

            {/* Top Bar: Duration & Clean Icon Fullscreen */}
            <div className="relative z-20 w-full p-4 sm:p-5 flex items-center justify-between">
              <div>
                {item.duration && (
                  <span className="text-[10px] text-white/90 font-mono font-bold bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/15">
                    {item.duration}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {/* Direct Fullscreen button on poster (Clean Icon Only) */}
                <button
                  type="button"
                  onClick={handleExpandToBigScreen}
                  className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#10B981] text-white hover:text-[#0A1E1B] border border-white/20 hover:border-[#10B981] transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95 flex items-center justify-center"
                  title="Fullscreen"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Center Play Icon */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
              <button
                type="button"
                onClick={handleStartPlay}
                className="group/btn flex items-center justify-center cursor-pointer pointer-events-auto focus:outline-none"
                aria-label="Play video"
              >
                <div className="w-14 h-14 rounded-full bg-[#10B981] group-hover:bg-[#4ECDC4] text-[#0A1E1B] flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover/btn:scale-115">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </button>
            </div>

            {/* Bottom Title & Stat */}
            <div className="relative z-20 w-full p-4 sm:p-5 bg-gradient-to-t from-[#0D2B28]/95 via-[#0D2B28]/50 to-transparent">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4ECDC4] block mb-0.5">
                ✦ {item.stat || '4K Master Reel'}
              </span>
              <h3
                className="text-base sm:text-lg font-black text-white uppercase tracking-tight leading-snug group-hover:text-[#4ECDC4] transition-colors"
                style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
              >
                {item.title}
              </h3>
            </div>
          </div>
        )}
      </motion.div>
    );
  }

  // TYPE A: IMAGE CAMPAIGN CARD (Clean, Bright Light-Mode Photo Card)
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between aspect-[4/3] border-2 border-[#D5D1C8] hover:border-[#2D5A54]"
    >
      {/* Background Image (100% Crisp & Bright) */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-100 contrast-[1.02] saturate-[1.05]"
        loading="lazy"
      />

      {/* Clean Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B28]/92 via-[#0D2B28]/35 to-transparent p-5 sm:p-6 flex flex-col justify-between">
        {/* Category & Stat Label */}
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-[#0D2B28]/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-wider uppercase shadow-sm">
            {item.category}
          </span>
          {item.stat && (
            <span className="text-[10px] font-bold tracking-wider text-[#4ECDC4] bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15 shadow-sm">
              {item.stat}
            </span>
          )}
        </div>

        {/* Campaign Title */}
        <div>
          <h3
            className="text-base sm:text-lg font-black text-white uppercase tracking-tight leading-snug mb-1 group-hover:text-[#4ECDC4] transition-colors"
            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
          >
            {item.title}
          </h3>
          {item.summary && (
            <p className="text-xs text-white/85 line-clamp-2 transition-all">
              {item.summary}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

