import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import Ticker from '../components/Ticker';
import StrategicShowcase from '../components/StrategicShowcase';
import VideoLightbox from '../components/VideoLightbox';
import VisionStatementSlider from '../components/VisionStatementSlider';

export default function Home() {
  const buttonRef = useRef(null);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });
  const [heroTilt, setHeroTilt] = useState({ rotX: 0, rotY: 0, shiftX: 0, shiftY: 0 });
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoUrl: '',
    title: '',
  });

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setHeroTilt({
      rotX: y * -10,
      rotY: x * 12,
      shiftX: x * 18,
      shiftY: y * 18,
    });
  };

  const handleHeroMouseLeave = () => {
    setHeroTilt({ rotX: 0, rotY: 0, shiftX: 0, shiftY: 0 });
  };

  // Direct Work Video Cards Audio/Play State & Refs
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const toggleMute1 = (e) => {
    e.stopPropagation();
    if (videoRef1.current) {
      videoRef1.current.muted = !videoRef1.current.muted;
      setIsMuted1(videoRef1.current.muted);
    }
  };

  const toggleMute2 = (e) => {
    e.stopPropagation();
    if (videoRef2.current) {
      videoRef2.current.muted = !videoRef2.current.muted;
      setIsMuted2(videoRef2.current.muted);
    }
  };

  const togglePlay1 = (e) => {
    e.stopPropagation();
    if (videoRef1.current) {
      if (videoRef1.current.paused) {
        videoRef1.current.play();
        setIsPlaying1(true);
      } else {
        videoRef1.current.pause();
        setIsPlaying1(false);
      }
    }
  };

  const togglePlay2 = (e) => {
    e.stopPropagation();
    if (videoRef2.current) {
      if (videoRef2.current.paused) {
        videoRef2.current.play();
        setIsPlaying2(true);
      } else {
        videoRef2.current.pause();
        setIsPlaying2(false);
      }
    }
  };

  const handleButtonMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setBtnOffset({ x: (e.clientX - centerX) * 0.25, y: (e.clientY - centerY) * 0.25 });
  };

  const handleButtonMouseLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  const servicesTeaser = [
    { num: '01', name: 'Government Relations', tab: '01' },
    { num: '02', name: 'Media Production & PR', tab: '02' },
    { num: '03', name: 'Events & Experiences', tab: '03' },
    { num: '04', name: 'CSR Communication', tab: '04' },
    { num: '05', name: 'Digital Marketing', tab: '05' },
    { num: '06', name: 'Technology Solutions', tab: '06' },
  ];

  return (
    <div className="w-full">
      {/* Video Lightbox Player Modal */}
      <VideoLightbox
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal({ isOpen: false, videoUrl: '', title: '' })}
        videoUrl={videoModal.videoUrl}
        title={videoModal.title}
      />

      {/* ======================================================== */}
      {/* 1a. HERO (Cinematic Landing Entrance Animation + Parallax) */}
      {/* ======================================================== */}
      <section
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative w-full py-20 sm:py-24 lg:py-28 flex items-center overflow-hidden bg-[#0D2B28] text-white select-none"
      >
        {/* Editorial Cinematic Image Background with Smooth Landing Dolly Zoom */}
        <motion.div
          initial={{ scale: 1.15, opacity: 0, filter: 'blur(10px) brightness(0.4)' }}
          animate={{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px) brightness(0.72)',
            x: heroTilt.shiftX ? heroTilt.shiftX * -0.35 : 0,
            y: heroTilt.shiftY ? heroTilt.shiftY * -0.35 : 0,
          }}
          transition={{
            scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 1.2, ease: 'easeOut' },
            filter: { duration: 1.2, ease: 'easeOut' },
            x: { type: 'spring', damping: 25, stiffness: 120 },
            y: { type: 'spring', damping: 25, stiffness: 120 },
          }}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85"
            alt="Global Aadhar Architecture & Strategic PR"
            className="w-full h-full object-cover object-center contrast-[1.05] saturate-[0.95]"
          />
          {/* Subtle Directional Gradient Shield (Protects left headline readability while keeping right side crisp & clear) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B28]/92 via-[#0D2B28]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B28]/80 via-transparent to-[#0D2B28]/40" />
        </motion.div>

        {/* Ambient Atmospheric Glows */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#4ECDC4]/10 blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-6 left-6 w-64 h-64 rounded-full bg-[#2D5A54]/20 blur-[80px] pointer-events-none z-0" />

        {/* Foreground Content with Staggered Landing Animation */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 sm:pt-8">
          <motion.div
            animate={{
              x: heroTilt.shiftX ? heroTilt.shiftX * 0.25 : 0,
              y: heroTilt.shiftY ? heroTilt.shiftY * 0.25 : 0,
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            className="max-w-xl lg:max-w-2xl"
          >
            {/* Small Pill Label (Drop Down Animation) */}
            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-5 sm:mb-6 shadow-lg"
            >
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-white/90 uppercase">
                STRATEGIC COMMUNICATIONS &amp; PR · GOA
              </span>
            </motion.div>

            {/* Headline (Dramatic Staggered Mask Reveal) */}
            <div className="overflow-hidden mb-1">
              <motion.div
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1
                  className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.06]"
                  style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                >
                  BUILDING TRUST.
                </h1>
              </motion.div>
            </div>

            <div className="overflow-hidden mb-4">
              <motion.div
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2
                  className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#4ECDC4] uppercase leading-[1.06] opacity-95"
                  style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                >
                  CREATING IMPACT.
                </h2>
              </motion.div>
            </div>

            {/* One Line Only Subtext (Soft Blur Fade In) */}
            <motion.p
              initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-sm sm:text-base md:text-lg text-white/85 font-normal leading-relaxed"
            >
              Goa's leading PR &amp; Strategic Communications firm.
            </motion.p>

            {/* 2 CTAs: Let's Talk + Explore Our Work (Smooth Pop In) */}
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <motion.div
                ref={buttonRef}
                onMouseMove={handleButtonMouseMove}
                onMouseLeave={handleButtonMouseLeave}
                animate={{ x: btnOffset.x, y: btnOffset.y }}
                transition={{ type: 'spring', damping: 15, stiffness: 200, mass: 0.1 }}
              >
                <Link
                  to="/contact"
                  className="relative group overflow-hidden inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#2D5A54] border border-[#4ECDC4]/40 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg hover:border-[#4ECDC4] hover:shadow-[0_0_24px_rgba(78,205,196,0.35)] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] group-hover:animate-shimmer pointer-events-none" />
                  <span className="relative z-10">Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>

              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full border border-white/30 text-white font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-white/10 hover:border-white transition-all duration-300 shadow-md backdrop-blur-sm hover:scale-105 active:scale-95"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Small Attribution (Fade In) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="mt-5 text-[11px] sm:text-xs text-white/50 tracking-wide font-medium"
            >
              Presented by: <strong className="text-white font-semibold">Amol K Arondekar</strong>, Partner
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 1b. AUTO-SCROLLING MARQUEE                              */}
      {/* ======================================================== */}
      <Ticker />

      {/* ======================================================== */}
      {/* 1c. ABOUT TEASER (Warm, Clean & Inviting 2-Col Spread)    */}
      {/* ======================================================== */}
      <section id="home-about" className="py-14 sm:py-20 bg-[#E5E3DE] border-b border-[#D5D1C8]/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            {/* Left: Headline & Friendly Button */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#2D5A54] uppercase block">
                Who We Are
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#23413C] uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
              >
                WHO WE ARE
              </h2>
              <div className="pt-2">
                <Link
                  to="/who-we-are"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#2D5A54] text-[#23413C] hover:text-white border border-[#D5D1C8] hover:border-[#2D5A54] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Intro text + 3 Large, Friendly Stat Cards */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <p className="text-base sm:text-lg text-[#2B2B2B] leading-relaxed font-normal">
                A Goa-based PR firm embedded in the region's media ecosystem, institutional networks, and government landscape.
              </p>

              {/* 3 Friendly Stat Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { num: '500+', label: 'Campaigns' },
                  { num: '15+', label: 'Years' },
                  { num: '180+', label: 'Media Contacts' },
                ].map((stat, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-[#D5D1C8] shadow-sm hover:shadow-md hover:border-[#2D5A54]/40 transition-all duration-300 text-center flex flex-col justify-center"
                  >
                    <div
                      className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#23413C] tracking-tight transition-colors duration-300 hover:text-[#2D5A54]"
                      style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                    >
                      {stat.num}
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-[#2D5A54] tracking-wider uppercase mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 1d. SERVICES TEASER (Warm Dark Green, Clear Friendly Cards) */}
      {/* ======================================================== */}
      <section className="py-14 sm:py-20 bg-[#23413C] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/15 gap-4">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#4ECDC4] uppercase block mb-1">
                Core Practices
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white"
                style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
              >
                WHAT WE DO
              </h2>
            </div>
            <Link
              to="/what-we-do"
              className="group text-xs font-bold tracking-wider uppercase text-[#4ECDC4] hover:text-white inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 hover:border-[#4ECDC4] transition-all duration-300"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* 6 Clean, Friendly Interactive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {servicesTeaser.map((srv) => (
              <motion.div
                key={srv.num}
                whileHover={{ y: -4, scale: 1.015 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              >
                <Link
                  to={`/what-we-do?tab=${srv.tab}`}
                  className="group relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#4ECDC4] hover:bg-white/10 hover:shadow-xl transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-8 h-8 rounded-xl bg-white/10 group-hover:bg-[#4ECDC4] group-hover:text-[#0D2B28] border border-white/15 group-hover:border-[#4ECDC4] flex items-center justify-center text-xs font-mono font-bold text-[#4ECDC4] transition-all duration-300">
                      {srv.num}
                    </span>
                    <span
                      className="text-base sm:text-lg font-bold uppercase tracking-tight text-white group-hover:text-[#4ECDC4] transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                    >
                      {srv.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#4ECDC4] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 1e. STRATEGIC SHOWCASES (3 Interactive Video Showcases)   */}
      {/* ======================================================== */}
      <StrategicShowcase />

      {/* ======================================================== */}
      {/* 1f. WORK TEASER (Beige, 2 Large Interactive Cards)        */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-14 bg-[#E5E3DE] border-b border-[#D5D1C8]/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#D5D1C8]">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#2D5A54] uppercase block mb-1">
                Portfolio Snapshot
              </span>
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#23413C]"
                style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
              >
                OUR WORK
              </h2>
            </div>
            <Link
              to="/our-work"
              className="group text-xs font-bold tracking-wider uppercase text-[#2D5A54] hover:text-[#23413C] inline-flex items-center gap-1.5 transition-colors"
            >
              <span>View All Work</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Direct Video Card 1: Media Relations */}
            <motion.div
              whileHover={{ y: -5, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            >
              <div className="group relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-[#112C28] block border-2 border-[#2C5E55] hover:border-[#4ECDC4] transition-all duration-500">
                {/* Direct Video Player (Bright Light-Mode Poster default with click-to-play) */}
                <video
                  ref={videoRef1}
                  loop
                  muted={isMuted1}
                  playsInline
                  preload="metadata"
                  poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
                  className="w-full h-full object-cover brightness-100 contrast-[1.02] saturate-[1.05] transition-all duration-500"
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* Click to Toggle Play */}
                <div
                  onClick={togglePlay1}
                  className="absolute inset-0 z-10 cursor-pointer pointer-events-auto"
                />

                {/* Video Controls & Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B28]/95 via-transparent to-black/40 p-5 sm:p-6 flex flex-col justify-between pointer-events-none z-20">
                  {/* Top Bar: Clean Icon-Only Controls */}
                  <div className="flex items-center justify-end pointer-events-auto">
                    {/* Icon-Only Clean Controls Cluster */}
                    <div className="flex items-center gap-2">
                      {/* Play / Pause Toggle (Icon Only) */}
                      <button
                        type="button"
                        onClick={togglePlay1}
                        className="w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/25 hover:border-[#10B981] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:scale-110 active:scale-95"
                        aria-label={isPlaying1 ? 'Pause' : 'Play'}
                        title={isPlaying1 ? 'Pause' : 'Play'}
                      >
                        {isPlaying1 ? (
                          <Pause className="w-4 h-4 text-[#4ECDC4]" />
                        ) : (
                          <Play className="w-4 h-4 fill-[#10B981] text-[#10B981] ml-0.5" />
                        )}
                      </button>

                      {/* Sound Mute / Unmute Toggle (Icon Only) */}
                      <button
                        type="button"
                        onClick={toggleMute1}
                        className={`w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:scale-110 active:scale-95 ${
                          isMuted1
                            ? 'bg-black/70 border-white/25 text-white hover:bg-[#10B981] hover:text-[#0A1E1B] hover:border-[#10B981]'
                            : 'bg-[#10B981] border-[#10B981] text-[#0A1E1B] shadow-[0_0_12px_#10B981]'
                        }`}
                        aria-label={isMuted1 ? 'Unmute' : 'Mute'}
                        title={isMuted1 ? 'Unmute' : 'Mute'}
                      >
                        {isMuted1 ? (
                          <VolumeX className="w-4 h-4 text-[#4ECDC4]" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-[#0A1E1B]" />
                        )}
                      </button>

                      {/* Fullscreen Button (Icon Only - Single Button) */}
                      <button
                        type="button"
                        onClick={() =>
                          setVideoModal({
                            isOpen: true,
                            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                            title: 'Media Relations & Broadcast Production Campaign',
                          })
                        }
                        className="w-9 h-9 rounded-full bg-black/70 hover:bg-[#10B981] text-white hover:text-[#0A1E1B] border border-white/25 hover:border-[#10B981] flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 active:scale-95 cursor-pointer"
                        title="Fullscreen"
                        aria-label="Fullscreen"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Bottom Details Bar (Clean Title & Category) */}
                  <div className="flex items-end justify-between pointer-events-auto">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#4ECDC4] block mb-0.5">
                        ✦ 4K Broadcast Case Film
                      </span>
                      <h3
                        className="text-base sm:text-xl font-black text-white uppercase tracking-tight group-hover:text-[#4ECDC4] transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                      >
                        Media Relations Special
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Direct Video Card 2: Government PR */}
            <motion.div
              whileHover={{ y: -5, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            >
              <div className="group relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-[#112C28] block border-2 border-[#2C5E55] hover:border-[#4ECDC4] transition-all duration-500">
                {/* Direct Video Player (Bright Light-Mode Poster default with click-to-play) */}
                <video
                  ref={videoRef2}
                  loop
                  muted={isMuted2}
                  playsInline
                  preload="metadata"
                  poster="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
                  className="w-full h-full object-cover brightness-100 contrast-[1.02] saturate-[1.05] transition-all duration-500"
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* Click to Toggle Play */}
                <div
                  onClick={togglePlay2}
                  className="absolute inset-0 z-10 cursor-pointer pointer-events-auto"
                />

                {/* Video Controls & Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B28]/95 via-transparent to-black/40 p-5 sm:p-6 flex flex-col justify-between pointer-events-none z-20">
                  {/* Top Bar: Clean Icon-Only Controls */}
                  <div className="flex items-center justify-end pointer-events-auto">
                    {/* Icon-Only Clean Controls Cluster */}
                    <div className="flex items-center gap-2">
                      {/* Play / Pause Toggle (Icon Only) */}
                      <button
                        type="button"
                        onClick={togglePlay2}
                        className="w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/25 hover:border-[#10B981] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:scale-110 active:scale-95"
                        aria-label={isPlaying2 ? 'Pause' : 'Play'}
                        title={isPlaying2 ? 'Pause' : 'Play'}
                      >
                        {isPlaying2 ? (
                          <Pause className="w-4 h-4 text-[#4ECDC4]" />
                        ) : (
                          <Play className="w-4 h-4 fill-[#10B981] text-[#10B981] ml-0.5" />
                        )}
                      </button>

                      {/* Sound Mute / Unmute Toggle (Icon Only) */}
                      <button
                        type="button"
                        onClick={toggleMute2}
                        className={`w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:scale-110 active:scale-95 ${
                          isMuted2
                            ? 'bg-black/70 border-white/25 text-white hover:bg-[#10B981] hover:text-[#0A1E1B] hover:border-[#10B981]'
                            : 'bg-[#10B981] border-[#10B981] text-[#0A1E1B] shadow-[0_0_12px_#10B981]'
                        }`}
                        aria-label={isMuted2 ? 'Unmute' : 'Mute'}
                        title={isMuted2 ? 'Unmute' : 'Mute'}
                      >
                        {isMuted2 ? (
                          <VolumeX className="w-4 h-4 text-[#4ECDC4]" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-[#0A1E1B]" />
                        )}
                      </button>

                      {/* Fullscreen Button (Icon Only - Single Button) */}
                      <button
                        type="button"
                        onClick={() =>
                          setVideoModal({
                            isOpen: true,
                            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                            title: 'Government PR & State Institutional Wire',
                          })
                        }
                        className="w-9 h-9 rounded-full bg-black/70 hover:bg-[#10B981] text-white hover:text-[#0A1E1B] border border-white/25 hover:border-[#10B981] flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 active:scale-95 cursor-pointer"
                        title="Fullscreen"
                        aria-label="Fullscreen"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Bottom Details Bar (Clean Title & Category) */}
                  <div className="flex items-end justify-between pointer-events-auto">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#4ECDC4] block mb-0.5">
                        ✦ 4K Policy Summit Wire
                      </span>
                      <h3
                        className="text-base sm:text-xl font-black text-white uppercase tracking-tight group-hover:text-[#4ECDC4] transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                      >
                        Government PR Summit
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 1g. VISION & PHILOSOPHY SLIDER (Chamfered Editorial Card) */}
      {/* ======================================================== */}
      <VisionStatementSlider />

      {/* ======================================================== */}
      {/* 1h. WHO WE SERVE TEASER (Blurred BG Image + Dark Teal)     */}
      {/* ======================================================== */}
      <section className="relative py-12 sm:py-16 text-white text-center overflow-hidden">
        {/* Background Image Layer (Unique Executive Architectural Space & Clear Visibility) */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80"
            alt="Who We Serve Institutional Background"
            className="w-full h-full object-cover scale-105 blur-[2px] brightness-[0.6] contrast-110 saturate-105"
            loading="lazy"
          />
          {/* Subtle Dark Teal Brand Tint Overlay */}
          <div className="absolute inset-0 bg-[#1e3833]/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#23413C]/90 via-transparent to-[#23413C]/90" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#4ECDC4] uppercase block mb-4 drop-shadow-sm">
            WHO WE SERVE
          </span>

          <div className="flex flex-col gap-2 my-4">
            {[
              { label: 'CORPORATES & PHARMA', tab: 'why-us' },
              { label: 'NGOS & STARTUPS', tab: 'why-us' },
              { label: 'EDUCATION & GOVERNMENT', tab: 'why-us' },
            ].map((item, iIdx) => (
              <React.Fragment key={iIdx}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <Link
                    to="/why-us"
                    className="group inline-flex items-center justify-center gap-3 py-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-white/95 hover:text-[#4ECDC4] transition-all duration-300 drop-shadow-md font-sans"
                  >
                    <span className="group-hover:tracking-wider transition-all duration-300">{item.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#4ECDC4] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.div>
                {iIdx < 2 && <div className="w-16 h-[1px] bg-white/20 mx-auto my-1.5" />}
              </React.Fragment>
            ))}
          </div>

          <p className="text-[11px] sm:text-xs text-white/75 tracking-[0.2em] uppercase mt-4 font-semibold drop-shadow-sm">
            Across Goa and beyond
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 1h. CONTACT CTA (Beige with Animated Floating Button)     */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 bg-[#E5E3DE] text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2
            className="text-xl sm:text-3xl font-black text-[#23413C] uppercase tracking-tight mb-2"
            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
          >
            Ready to Build Your Story?
          </h2>
          <p className="text-sm sm:text-base text-[#2B2B2B] font-normal mb-6">
            Let's talk about your next campaign.
          </p>

          <motion.div
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="inline-block mb-5"
          >
            <Link
              to="/contact"
              className="relative group overflow-hidden inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2D5A54] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:bg-[#23413C] hover:shadow-[0_10px_25px_rgba(45,90,84,0.35)] transition-all"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:animate-shimmer pointer-events-none" />
              <span className="relative z-10">Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#2B2B2B]/75 font-medium">
            <a href="mailto:amol@globalaadhar.com" className="hover:text-[#2D5A54] hover:underline transition-colors">
              amol@globalaadhar.com
            </a>
            <span className="opacity-40">·</span>
            <a href="tel:+919326510950" className="hover:text-[#2D5A54] hover:underline transition-colors">
              +91 9326510950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
