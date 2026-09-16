import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, ArrowUpRight, Play } from 'lucide-react';
import { servicesData } from '../data/services';
import ProcessSteps from '../components/ProcessSteps';
import VideoLightbox from '../components/VideoLightbox';

const tabOptions = [
  { id: '01', label: '01 Gov Relations' },
  { id: '02', label: '02 Media PR' },
  { id: '03', label: '03 Events' },
  { id: '04', label: '04 CSR' },
  { id: '05', label: '05 Digital' },
  { id: '06', label: '06 Technology' },
];

export default function WhatWeDo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || '01';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoUrl: '',
    title: '',
  });

  useEffect(() => {
    const tabFromUrl = searchParams.get('tab');
    if (tabFromUrl && tabOptions.some((t) => t.id === tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams({ tab: tabId });
  };

  const currentService = servicesData.find((s) => s.id === activeTab) || servicesData[0];

  return (
    <div className="w-full">
      {/* Video Lightbox Player */}
      <VideoLightbox
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal({ isOpen: false, videoUrl: '', title: '' })}
        videoUrl={videoModal.videoUrl}
        title={videoModal.title}
      />

      {/* ======================================================== */}
      {/* Section A: Page Hero (Compact & Editorial)               */}
      {/* ======================================================== */}
      <section className="relative w-full py-14 sm:py-18 min-h-[320px] flex items-center justify-center bg-[#0D2B28] text-white pt-24 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-bold tracking-[0.25em] text-[#4ECDC4] uppercase block mb-2"
          >
            Capabilities &amp; Practices
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
          >
            WHAT WE DO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3.5 text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Six integrated service pillars — each designed to build trust, amplify impact, and drive measurable communication outcomes.
          </motion.p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section B: Animated Tab Switcher & Content (Beige)       */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-14 bg-[#E5E3DE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Tabs Bar */}
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-3 mb-6 no-scrollbar border-b border-[#D5D1C8]">
            {tabOptions.map((t) => {
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => handleTabChange(t.id)}
                  className="relative py-2.5 px-3.5 sm:px-4 whitespace-nowrap text-xs font-bold tracking-wider uppercase transition-colors focus:outline-none cursor-pointer"
                >
                  <span className={isActive ? 'text-[#23413C] font-black' : 'text-[#2B2B2B]/60 hover:text-[#23413C]'}>
                    {t.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="whatWeDoTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#2D5A54] rounded-full"
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 border border-[#D5D1C8]/70 shadow-sm min-h-[440px]">
            <AnimatePresence mode="wait">
              {/* TAB 01: GOVERNMENT RELATIONS */}
              {activeTab === '01' && (
                <motion.div
                  key="tab-01"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
                >
                  <div className="lg:col-span-6 flex flex-col gap-3">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-sm border-2 border-[#D5D1C8]">
                      <img
                        src={currentService.image}
                        alt={currentService.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-100 contrast-[1.02] saturate-[1.05]"
                        loading="lazy"
                      />
                    </div>
                    {/* Embedded Video Preview Card */}
                    <div
                      onClick={() =>
                        setVideoModal({
                          isOpen: true,
                          videoUrl: currentService.videoUrl,
                          title: currentService.videoTitle,
                        })
                      }
                      className="group p-3 rounded-xl bg-[#132E2B] text-white flex items-center justify-between border border-[#2D5A54] hover:border-[#4ECDC4] shadow-sm hover:shadow-[0_0_15px_rgba(78,205,196,0.2)] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-full bg-[#10B981] group-hover:bg-[#4ECDC4] flex items-center justify-center text-[#0A1E1B] transition-transform duration-300 group-hover:scale-110">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-white group-hover:text-[#4ECDC4] transition-colors">
                            ▶ Watch How We Do It
                          </span>
                          <span className="text-[10px] text-white/60">
                            Institutional Communications Workflow Reel
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#4ECDC4] bg-white/10 px-2 py-1 rounded">
                        4K Asset
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-6 flex flex-col gap-3.5">
                    <h3
                      className="text-xl sm:text-2xl font-black text-[#23413C] uppercase tracking-tight"
                      style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                    >
                      {currentService.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2D5A54] font-semibold">
                      {currentService.tagline}
                    </p>
                    <div className="flex flex-col gap-2.5 mt-1">
                      {currentService.items?.map((item) => (
                        <div key={item.title} className="p-3.5 rounded-lg bg-[#EDEBE7] border border-[#D5D1C8]/60">
                          <h4 className="text-xs font-black text-[#23413C] uppercase tracking-wide mb-0.5">
                            {item.num} {item.title}
                          </h4>
                          <p className="text-xs text-[#2B2B2B] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 02: MEDIA PRODUCTION & PR */}
              {activeTab === '02' && (
                <motion.div
                  key="tab-02"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
                >
                  <div className="lg:col-span-6 flex flex-col gap-3.5 order-2 lg:order-1">
                    <h3
                      className="text-xl sm:text-2xl font-black text-[#23413C] uppercase tracking-tight"
                      style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                    >
                      {currentService.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2D5A54] font-semibold">
                      {currentService.tagline}
                    </p>
                    <div className="flex flex-col gap-2.5 mt-1">
                      {currentService.items?.map((item) => (
                        <div key={item.title} className="p-3.5 rounded-lg bg-[#EDEBE7] border border-[#D5D1C8]/60">
                          <h4 className="text-xs font-black text-[#23413C] uppercase tracking-wide mb-0.5">
                            {item.num} {item.title}
                          </h4>
                          <p className="text-xs text-[#2B2B2B] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-6 flex flex-col gap-3 order-1 lg:order-2">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-sm border-2 border-[#D5D1C8]">
                      <img
                        src={currentService.image}
                        alt={currentService.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-100 contrast-[1.02] saturate-[1.05]"
                        loading="lazy"
                      />
                    </div>
                    {/* Embedded Video Preview Card */}
                    <div
                      onClick={() =>
                        setVideoModal({
                          isOpen: true,
                          videoUrl: currentService.videoUrl,
                          title: currentService.videoTitle,
                        })
                      }
                      className="group p-3 rounded-xl bg-[#132E2B] text-white flex items-center justify-between border border-[#2D5A54] hover:border-[#4ECDC4] shadow-sm hover:shadow-[0_0_15px_rgba(78,205,196,0.2)] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-full bg-[#10B981] group-hover:bg-[#4ECDC4] flex items-center justify-center text-[#0A1E1B] transition-transform duration-300 group-hover:scale-110">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-white group-hover:text-[#4ECDC4] transition-colors">
                            ▶ Watch How We Do It
                          </span>
                          <span className="text-[10px] text-white/60">
                            Broadcast Studio &amp; Filming Showcase
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#4ECDC4] bg-white/10 px-2 py-1 rounded">
                        4K Asset
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 03: EVENTS & EXPERIENCES */}
              {activeTab === '03' && (
                <motion.div
                  key="tab-03"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-7">
                      <h3
                        className="text-xl sm:text-2xl font-black text-[#23413C] uppercase tracking-tight"
                        style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                      >
                        {currentService.headline}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2D5A54] font-semibold mt-0.5">
                        {currentService.tagline}
                      </p>
                    </div>
                    <div className="lg:col-span-5">
                      <div
                        onClick={() =>
                          setVideoModal({
                            isOpen: true,
                            videoUrl: currentService.videoUrl,
                            title: currentService.videoTitle,
                          })
                        }
                        className="group p-3 rounded-xl bg-[#132E2B] text-white flex items-center justify-between border border-[#2D5A54] hover:border-[#4ECDC4] shadow-sm hover:shadow-[0_0_15px_rgba(78,205,196,0.2)] transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-8 h-8 rounded-full bg-[#10B981] group-hover:bg-[#4ECDC4] flex items-center justify-center text-[#0A1E1B] transition-transform duration-300 group-hover:scale-110">
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          </span>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-white group-hover:text-[#4ECDC4] transition-colors">
                              ▶ Watch How We Do It
                            </span>
                            <span className="text-[10px] text-white/60">
                              Event Production &amp; Protocol Reel
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#4ECDC4] bg-white/10 px-2 py-1 rounded">
                          4K Asset
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-5 aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-sm border-2 border-[#D5D1C8]">
                      <img
                        src={currentService.image}
                        alt={currentService.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-100 contrast-[1.02] saturate-[1.05]"
                        loading="lazy"
                      />
                    </div>
                    <div className="lg:col-span-7">
                      <ProcessSteps steps={currentService.process} />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 04: CSR COMMUNICATION */}
              {activeTab === '04' && (
                <motion.div
                  key="tab-04"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
                >
                  <div className="lg:col-span-6 flex flex-col gap-3">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-sm border-2 border-[#D5D1C8]">
                      <img
                        src={currentService.image}
                        alt={currentService.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-100 contrast-[1.02] saturate-[1.05]"
                        loading="lazy"
                      />
                    </div>
                    {/* Embedded Video Preview Card */}
                    <div
                      onClick={() =>
                        setVideoModal({
                          isOpen: true,
                          videoUrl: currentService.videoUrl,
                          title: currentService.videoTitle,
                        })
                      }
                      className="group p-3 rounded-xl bg-[#132E2B] text-white flex items-center justify-between border border-[#2D5A54] hover:border-[#4ECDC4] shadow-sm hover:shadow-[0_0_15px_rgba(78,205,196,0.2)] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-full bg-[#10B981] group-hover:bg-[#4ECDC4] flex items-center justify-center text-[#0A1E1B] transition-transform duration-300 group-hover:scale-110">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-white group-hover:text-[#4ECDC4] transition-colors">
                            ▶ Watch How We Do It
                          </span>
                          <span className="text-[10px] text-white/60">
                            CSR Beneficiary Documentary Story
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#4ECDC4] bg-white/10 px-2 py-1 rounded">
                        4K Asset
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-6 flex flex-col gap-3.5">
                    <h3
                      className="text-xl sm:text-2xl font-black text-[#23413C] uppercase tracking-tight"
                      style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                    >
                      {currentService.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2D5A54] font-semibold">
                      {currentService.tagline}
                    </p>
                    <div className="flex flex-col gap-2.5 mt-1">
                      {currentService.items?.map((item) => (
                        <div key={item.title} className="p-3.5 rounded-lg bg-[#EDEBE7] border border-[#D5D1C8]/60">
                          <h4 className="text-xs font-black text-[#23413C] uppercase tracking-wide mb-0.5">
                            {item.num} {item.title}
                          </h4>
                          <p className="text-xs text-[#2B2B2B] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 05: DIGITAL MARKETING */}
              {activeTab === '05' && (
                <motion.div
                  key="tab-05"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
                >
                  {/* Chart Left with Video Card */}
                  <div className="lg:col-span-6 flex flex-col gap-3">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-sm border-2 border-[#D5D1C8]">
                      <img
                        src={currentService.image}
                        alt={currentService.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-100 contrast-[1.02] saturate-[1.05]"
                        loading="lazy"
                      />
                    </div>
                    {/* Embedded Video Preview Card */}
                    <div
                      onClick={() =>
                        setVideoModal({
                          isOpen: true,
                          videoUrl: currentService.videoUrl,
                          title: currentService.videoTitle,
                        })
                      }
                      className="group p-3 rounded-xl bg-[#132E2B] text-white flex items-center justify-between border border-[#2D5A54] hover:border-[#4ECDC4] shadow-sm hover:shadow-[0_0_15px_rgba(78,205,196,0.2)] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-full bg-[#10B981] group-hover:bg-[#4ECDC4] flex items-center justify-center text-[#0A1E1B] transition-transform duration-300 group-hover:scale-110">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-white group-hover:text-[#4ECDC4] transition-colors">
                            ▶ Watch How We Do It
                          </span>
                          <span className="text-[10px] text-white/60">
                            Digital Growth Strategy &amp; Campaign Analytics
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#4ECDC4] bg-white/10 px-2 py-1 rounded">
                        4K Asset
                      </span>
                    </div>
                  </div>

                  {/* Content Right */}
                  <div className="lg:col-span-6 flex flex-col gap-3.5">
                    <h3
                      className="text-xl sm:text-2xl font-black text-[#23413C] uppercase tracking-tight"
                      style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                    >
                      {currentService.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2D5A54] font-semibold">
                      {currentService.tagline}
                    </p>
                    <div className="flex flex-col gap-2.5 mt-1">
                      {currentService.badges?.map((badge) => (
                        <div key={badge} className="px-3.5 py-2.5 rounded-lg bg-[#2D5A54] text-white text-xs font-semibold flex items-center gap-2 shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#4ECDC4] flex-shrink-0" />
                          <span>{badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 06: TECHNOLOGY SOLUTIONS */}
              {activeTab === '06' && (
                <motion.div
                  key="tab-06"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
                >
                  <div className="lg:col-span-6 flex flex-col gap-3.5 order-2 lg:order-1">
                    <h3
                      className="text-xl sm:text-2xl font-black text-[#23413C] uppercase tracking-tight"
                      style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                    >
                      {currentService.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2D5A54] font-semibold">
                      {currentService.tagline}
                    </p>
                    <div className="flex flex-col gap-2.5 mt-1">
                      {currentService.items?.map((item) => (
                        <div key={item.title} className="p-3.5 rounded-lg bg-[#EDEBE7] border border-[#D5D1C8]/60">
                          <h4 className="text-xs font-black text-[#23413C] uppercase tracking-wide mb-0.5">
                            {item.num} {item.title}
                          </h4>
                          <p className="text-xs text-[#2B2B2B] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-6 flex flex-col gap-3 order-1 lg:order-2">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-sm border-2 border-[#D5D1C8]">
                      <img
                        src={currentService.image}
                        alt={currentService.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-100 contrast-[1.02] saturate-[1.05]"
                        loading="lazy"
                      />
                    </div>
                    {/* Embedded Video Preview Card */}
                    <div
                      onClick={() =>
                        setVideoModal({
                          isOpen: true,
                          videoUrl: currentService.videoUrl,
                          title: currentService.videoTitle,
                        })
                      }
                      className="group p-3 rounded-xl bg-[#132E2B] text-white flex items-center justify-between border border-[#2D5A54] hover:border-[#4ECDC4] shadow-sm hover:shadow-[0_0_15px_rgba(78,205,196,0.2)] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-full bg-[#10B981] group-hover:bg-[#4ECDC4] flex items-center justify-center text-[#0A1E1B] transition-transform duration-300 group-hover:scale-110">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-white group-hover:text-[#4ECDC4] transition-colors">
                            ▶ Watch How We Do It
                          </span>
                          <span className="text-[10px] text-white/60">
                            Sumant Cloud Tech &amp; Platform Architecture
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#4ECDC4] bg-white/10 px-2 py-1 rounded">
                        4K Asset
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section C: CTA                                           */}
      {/* ======================================================== */}
      <section className="py-10 bg-[#EDEBE7] border-t border-[#D5D1C8]/60 text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3
            className="text-lg sm:text-xl font-black text-[#23413C] uppercase tracking-tight text-center sm:text-left"
            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
          >
            Need a specific service?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2D5A54] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#23413C] transition-all flex-shrink-0"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
