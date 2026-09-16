import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VideoLightbox({ isOpen, onClose, videoUrl, title = 'Global Aadhar Strategic Media' }) {
  // Listen for ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Determine if URL is YouTube or direct MP4/video
  const isYouTube =
    videoUrl &&
    (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be'));

  let embedUrl = videoUrl;
  if (isYouTube) {
    if (videoUrl.includes('watch?v=')) {
      const videoId = videoUrl.split('watch?v=')[1]?.split('&')[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    } else if (videoUrl.includes('youtu.be/')) {
      const videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    } else if (!videoUrl.includes('autoplay=1')) {
      embedUrl = videoUrl.includes('?')
        ? `${videoUrl}&autoplay=1&rel=0`
        : `${videoUrl}?autoplay=1&rel=0`;
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#112C28] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#2C5E55]/80 shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#0A1E1B] border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-white truncate max-w-[260px] sm:max-w-md">
                  {title}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Container */}
            <div className="relative aspect-video w-full bg-black">
              {isYouTube ? (
                <iframe
                  src={embedUrl}
                  title={title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  src={videoUrl}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              )}
            </div>

            {/* Modal Bottom Bar */}
            <div className="px-5 py-3.5 bg-[#0A1E1B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/80">
              <span className="text-white/70 font-medium tracking-wide">
                ✦ Global Aadhar Panjim Media Bureau Master Asset
              </span>
              <Link
                to="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#10B981] text-[#0A1E1B] font-bold text-xs uppercase tracking-wider hover:bg-[#34D399] transition-all flex-shrink-0 shadow-sm"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
