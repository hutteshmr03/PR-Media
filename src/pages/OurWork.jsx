import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Tv, Newspaper, Radio, Play, ExternalLink } from 'lucide-react';
import { workCategories, workItems } from '../data/work';
import WorkCard from '../components/WorkCard';
import VideoLightbox from '../components/VideoLightbox';

const stats = [
  { value: '500+', label: 'Campaigns Delivered' },
  { value: '180+', label: 'Media Contacts & Network' },
  { value: '15+', label: 'Years Strategic Experience' },
  { value: '100%', label: 'Goa & National Outreach' },
];

const mediaReelItems = [
  {
    icon: Tv,
    mediaName: 'Doordarshan Goa',
    typeBadge: 'Television Wire',
    headline: 'Client Feature Story & Prime Special Broadcast',
    date: 'February 2026',
    actionText: '▶ Watch',
    isVideo: true,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    icon: Newspaper,
    mediaName: 'Herald Goa',
    typeBadge: 'Print Syndicate',
    headline: 'Front Page Coverage on State Innovation Mandate',
    date: 'March 2026',
    actionText: 'Read Coverage →',
    isVideo: false,
    link: '#',
  },
  {
    icon: Radio,
    mediaName: 'All India Radio Goa',
    typeBadge: 'Radio Broadcast',
    headline: 'Executive Interview on Sustainable Regional Outreach',
    date: 'January 2026',
    actionText: 'Listen Feature →',
    isVideo: false,
    link: '#',
  },
];

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoUrl: '',
    title: '',
  });

  const filteredItems =
    activeCategory === 'All'
      ? workItems
      : workItems.filter((item) => item.category === activeCategory);

  const handlePlayVideo = (item) => {
    setVideoModal({
      isOpen: true,
      videoUrl: item.videoUrl || 'https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-in-an-office-4848-large.mp4',
      title: item.title || item.headline,
    });
  };

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
            Portfolio &amp; Impact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
          >
            OUR WORK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3.5 text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Showcasing transformative communications, high-impact media productions, government PR campaigns, and stakeholder outreach across Goa and beyond.
          </motion.p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section B: Category Filter Tabs & Multi-Media Grid       */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-14 bg-[#E5E3DE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10">
            {workCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#2D5A54] text-white shadow-md'
                      : 'bg-white/80 text-[#2B2B2B] hover:bg-white border border-[#D5D1C8]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 3-Column Responsive Multi-Media Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <WorkCard item={item} onPlayVideo={handlePlayVideo} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section B2: FEATURED MEDIA REEL SECTION (Dark Teal)       */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 bg-[#16332F] text-white border-t border-[#2C5E55]/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-white/10 gap-3">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#4ECDC4] uppercase block mb-1">
                Broadcast &amp; Press Syndicates
              </span>
              <h2
                className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white"
                style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
              >
                IN THE MEDIA
              </h2>
            </div>
            <span className="text-xs text-white/70 font-medium">
              Verified Regional &amp; National Press Placements
            </span>
          </div>

          {/* 3 Horizontal Coverage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {mediaReelItems.map((media, mIdx) => {
              const IconComp = media.icon;
              return (
                <motion.div
                  key={mIdx}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  onClick={() => {
                    if (media.isVideo) {
                      setVideoModal({
                        isOpen: true,
                        videoUrl: media.videoUrl,
                        title: `${media.mediaName} • ${media.headline}`,
                      });
                    }
                  }}
                  className="group relative rounded-2xl bg-[#0D2B28] p-6 border border-[#2D5A54] hover:border-[#4ECDC4] shadow-lg hover:shadow-[0_0_20px_rgba(78,205,196,0.18)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Top Media Masthead Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#2D5A54] group-hover:bg-[#4ECDC4] text-white group-hover:text-[#0D2B28] flex items-center justify-center transition-colors duration-300">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span
                          className="text-sm font-black text-white uppercase tracking-wider"
                          style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                        >
                          {media.mediaName}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#4ECDC4] bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        {media.date}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold text-[#4ECDC4] uppercase tracking-wider block mb-1">
                      {media.typeBadge}
                    </span>

                    {/* Headline */}
                    <h3
                      className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-[#4ECDC4] transition-colors"
                      style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                    >
                      {media.headline}
                    </h3>
                  </div>

                  {/* Action Link / Button */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4ECDC4] group-hover:text-white flex items-center gap-1.5 transition-colors">
                      {media.isVideo && <Play className="w-3.5 h-3.5 fill-current" />}
                      <span>{media.actionText}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#4ECDC4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section C: Stats Bar (Dark Teal)                         */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-12 bg-[#23413C] text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div
                  className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#4ECDC4] mb-1"
                  style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                >
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section D: CTA Strip                                     */}
      {/* ======================================================== */}
      <section className="py-10 bg-[#E5E3DE] border-t border-[#D5D1C8]/60 text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3
            className="text-lg sm:text-xl font-black text-[#23413C] uppercase tracking-tight text-center sm:text-left"
            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
          >
            Have a campaign or story to launch?
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

