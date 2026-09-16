import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const exitTriggeredRef = useRef(false);

  const triggerExit = useCallback(() => {
    if (exitTriggeredRef.current) return;
    exitTriggeredRef.current = true;
    setIsExiting(true);

    // Wait for curtain split animation (750ms) to complete before unmounting
    setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 750);
  }, [onComplete]);

  useEffect(() => {
    // 1. Auto-exit fallback after 4.2 seconds
    const autoExitTimer = setTimeout(() => {
      triggerExit();
    }, 4200);

    // 2. Keyboard listener for any key press
    const handleKeyDown = () => {
      triggerExit();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Prevent background scrolling while splash is active
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(autoExitTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [triggerExit]);

  return (
    <div
      onClick={triggerExit}
      role="button"
      tabIndex={0}
      aria-label="Skip splash screen"
      className="fixed inset-0 z-[9999] w-screen h-screen overflow-hidden select-none cursor-pointer flex items-center justify-center"
    >
      {/* Top Half Curtain */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: isExiting ? '-100%' : '0%' }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-full h-[50%] bg-[#1a3830] z-0 border-b border-[#234b41]/40"
      />

      {/* Bottom Half Curtain */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: isExiting ? '100%' : '0%' }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 w-full h-[50%] bg-[#1a3830] z-0 border-t border-[#234b41]/40"
      />

      {/* Center Cinematic Content */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: isExiting ? 0 : 1,
          scale: isExiting ? 0.96 : 1,
          y: isExiting ? -10 : 0,
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center justify-center text-center pointer-events-none"
      >
        {/* 1. Top Category / Subtitle Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mb-3 sm:mb-5"
        >
          <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.25em] text-[#4ECDC4] uppercase">
            STRATEGIC PR &amp; COMMUNICATIONS
          </span>
        </motion.div>

        {/* 2. Massive Wordmark - GLOBAL AADHAR */}
        <div className="flex flex-col items-center justify-center leading-[0.85] select-none my-1 sm:my-2">
          {/* Line 1: GLOBAL */}
          <div className="overflow-hidden py-1">
            <motion.h1
              initial={{ y: '105%', opacity: 0.5 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 0.85,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-white font-black uppercase tracking-tight text-[clamp(54px,15vw,165px)] m-0 p-0"
              style={{
                fontFamily: 'var(--font-headline, "Archivo Black", "Anton", sans-serif)',
              }}
            >
              GLOBAL
            </motion.h1>
          </div>

          {/* Line 2: AADHAR */}
          <div className="overflow-hidden py-1 -mt-2 sm:-mt-4">
            <motion.h1
              initial={{ y: '105%', opacity: 0.5 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 0.85,
                delay: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-white font-black uppercase tracking-tight text-[clamp(54px,15vw,165px)] m-0 p-0"
              style={{
                fontFamily: 'var(--font-headline, "Archivo Black", "Anton", sans-serif)',
              }}
            >
              AADHAR
            </motion.h1>
          </div>
        </div>

        {/* 3. Accent Line: Draws in left-to-right below wordmark */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.55, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 sm:w-24 h-[2px] bg-[#4ECDC4] my-5 sm:my-7 origin-left"
        />

        {/* 4. Bottom Tagline: Two lines */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4, ease: 'easeOut' }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-white/95 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
            BUILDING TRUST. CREATING IMPACT.
          </span>
          <span className="text-[#4ECDC4] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            GOA &amp; WESTERN INDIA
          </span>
        </motion.div>
      </motion.div>

      {/* 5. Very Bottom: Pulsing Tap Anywhere instruction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isExiting ? 0 : [0.35, 1, 0.35],
        }}
        transition={{
          opacity: {
            delay: 1.8,
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="absolute bottom-6 sm:bottom-10 z-10 pointer-events-none text-center"
      >
        <span className="text-white/70 text-[10px] sm:text-[11px] font-medium tracking-[0.3em] uppercase">
          TAP ANYWHERE TO ENTER
        </span>
      </motion.div>
    </div>
  );
}
