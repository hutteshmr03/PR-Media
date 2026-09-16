import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const showcases = [
  {
    id: '01',
    tabLabel: 'VIDEO 01',
    badge: 'STRATEGIC COMMUNICATIONS IN ACTION · 01',
    headline: 'WE DELIVER REAL VALUE',
    description:
      'Through our narrative-first approach, broadcast media network, and high-production storytelling across Goa and Western India.',
    tag: '4K Ultra HD Commercial',
    spec: 'Cinema Rigging · Script-to-Screen Direction',
    footerLeft: '+ 4K Ultra HD Commercial',
    footerRight: 'Global Aadhar Panjim Bureau',
    videoTitle: 'Production Reel in Curation · Available on Request',
    videoSub: 'Click to Watch · Broadcast & 4K Master Asset',
    poster: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    id: '02',
    tabLabel: 'VIDEO 02',
    badge: 'STRATEGIC COMMUNICATIONS IN ACTION · 02',
    headline: 'WE SHAPE PUBLIC NARRATIVES',
    description:
      'From government relations to NGO storytelling — we craft media-ready campaigns that reach the right desks and audiences.',
    tag: 'CSR Impact Documentary',
    spec: 'Broadcast Ready · Multi-Platform Distribution',
    footerLeft: '+ CSR Impact Documentary',
    footerRight: 'Global Aadhar Panjim Bureau',
    videoTitle: 'Broadcast Footage in Curation · Available on Request',
    videoSub: 'Click to Watch · Broadcast & 4K Master Asset',
    poster: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  {
    id: '03',
    tabLabel: 'VIDEO 03',
    badge: 'STRATEGIC COMMUNICATIONS IN ACTION · 03',
    headline: 'WE BUILD LASTING MEDIA PRESENCE',
    description:
      'Press conferences, product launches, and institutional events — executed flawlessly and amplified across every channel.',
    tag: 'Event PR Coverage',
    spec: 'Live Broadcast · Press Pack Distribution',
    footerLeft: '+ Event PR Coverage',
    footerRight: 'Global Aadhar Panjim Bureau',
    videoTitle: 'Documentary Reel in Curation · Available on Request',
    videoSub: 'Click to Watch · Broadcast & 4K Master Asset',
    poster: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
  },
];

const cardVariants = {
  top: {
    y: 0,
    scale: 1,
    opacity: 1,
    zIndex: 30,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.65)',
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  behind1: {
    y: 12,
    scale: 0.97,
    opacity: 0.6,
    zIndex: 20,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.45)',
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  behind2: {
    y: 24,
    scale: 0.94,
    opacity: 0.3,
    zIndex: 10,
    boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.35)',
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
};

export default function StrategicShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalVideo, setModalVideo] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance timer (5 seconds) with pause on hover
  useEffect(() => {
    if (isHovered || modalVideo) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, modalVideo]);

  return (
    <section className="py-12 sm:py-16 bg-[#E5E3DE] border-b border-[#D5D1C8]/60 overflow-visible select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header & Card Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-3 border-b border-[#D5D1C8] gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#2D5A54] uppercase block mb-1">
              Media in Action
            </span>
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#23413C]"
              style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
            >
              SHOWCASES
            </h2>
          </div>

          {/* 3 Tab Buttons (VIDEO 01, VIDEO 02, VIDEO 03) */}
          <div className="flex items-center gap-2 bg-[#DDD9D2] p-1.5 rounded-xl border border-[#C8C3B8]">
            {showcases.map((s, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#1E3F3A] text-white shadow-md'
                      : 'text-[#2B2B2B]/70 hover:text-[#1E3F3A] hover:bg-white/60'
                  }`}
                >
                  {s.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stack Deck Container (Relative, full card height + 24px extra bottom for visible stack cards) */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full min-h-[580px] sm:min-h-[500px] lg:min-h-[460px] pb-10 overflow-visible"
        >
          {showcases.map((item, idx) => {
            // Compute card position relative to active index:
            // 0 = active (top)
            // 1 = behind1 (+12px, scale 0.97, opacity 0.6)
            // 2 = behind2 (+24px, scale 0.94, opacity 0.3)
            const n = showcases.length;
            const pos = (idx - activeIndex + n) % n;
            const variantKey = pos === 0 ? 'top' : pos === 1 ? 'behind1' : 'behind2';
            const isTop = pos === 0;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                animate={variantKey}
                onClick={() => {
                  if (!isTop) setActiveIndex(idx);
                }}
                className={`absolute inset-x-0 top-0 w-full rounded-2xl sm:rounded-3xl bg-[#112C28] text-white border-2 border-[#2C5E55] transition-[border-color] duration-300 ${
                  isTop ? 'cursor-default border-[#4ECDC4]/70' : 'cursor-pointer hover:border-[#4ECDC4]/50'
                } p-6 sm:p-8 lg:p-10 overflow-hidden`}
              >
                {/* Ambient Radial Glows */}
                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#4ECDC4]/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#2D5A54]/25 blur-3xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Column: Messaging & Badges */}
                  <div className="lg:col-span-5 flex flex-col gap-3.5">
                    {/* Green Dot Eyebrow */}
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                      <span className="text-[11px] font-bold text-[#10B981] uppercase tracking-[0.2em]">
                        {item.badge}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3
                      className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-[1.1]"
                      style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                    >
                      {item.headline}
                    </h3>

                    {/* Body */}
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Badges */}
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold text-[#10B981]">
                        {item.tag}
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/75">
                        {item.spec}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Video Showcase Card */}
                  <div className="lg:col-span-7 flex flex-col">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalVideo(item);
                      }}
                      className="group relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black aspect-[16/10] cursor-pointer"
                    >
                      {/* Video Poster */}
                      <img
                        src={item.poster}
                        alt={item.headline}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-100 contrast-[1.02] saturate-[1.05]"
                        loading="lazy"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />

                      {/* Play Button & Details Bar on Bottom */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-full bg-[#10B981] group-hover:bg-[#4ECDC4] text-[#0A1E1B] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs sm:text-sm font-bold text-white tracking-wide leading-snug">
                            {item.videoTitle}
                          </span>
                          <span className="text-[10px] text-[#10B981] font-medium tracking-wider">
                            {item.videoSub}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Caption Bar */}
                    <div className="flex items-center justify-between text-[11px] text-white/70 pt-2.5 px-1 font-medium">
                      <span>{item.footerLeft}</span>
                      <span>·</span>
                      <span>{item.footerRight}</span>
                    </div>
                  </div>
                </div>

                {/* Auto-Advance Progress Bar (running along bottom of active card) */}
                {isTop && !isHovered && (
                  <motion.div
                    key={`progress-${activeIndex}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5, ease: 'linear' }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#4ECDC4] origin-left z-20"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Video Modal Player */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-[#112C28] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-4 bg-[#0A1E1B] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    {modalVideo.headline} • {modalVideo.badge}
                  </span>
                </div>
                <button
                  onClick={() => setModalVideo(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close video modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-black">
                <video
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src={modalVideo.videoUrl} type="video/mp4" />
                </video>
              </div>

              {/* Modal Bottom Bar */}
              <div className="p-4 bg-[#0A1E1B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/80">
                <p className="max-w-2xl">{modalVideo.description}</p>
                <Link
                  to="/contact"
                  onClick={() => setModalVideo(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#10B981] text-[#0A1E1B] font-bold text-xs uppercase tracking-wider hover:bg-[#34D399] transition-all flex-shrink-0"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
