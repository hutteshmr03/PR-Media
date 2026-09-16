import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function ImageGallery({ images = [], title = 'Moments in Action' }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const isOpen = selectedIndex !== null;

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }
  }, [selectedIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [selectedIndex, images.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
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
  }, [isOpen, handleClose, handleNext, handlePrev]);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full">
      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={() => setSelectedIndex(idx)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white border-2 border-[#D5D1C8] hover:border-[#2D5A54] shadow-sm hover:shadow-xl cursor-pointer"
          >
            <img
              src={img.url}
              alt={img.alt || `Gallery Image ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-100 contrast-[1.02] saturate-[1.05]"
              loading="lazy"
            />
            {/* Subtle Gradient & Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B28]/85 via-[#0D2B28]/15 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300 p-4 flex flex-col justify-between">
              <div className="flex justify-end">
                <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5 text-[#4ECDC4]" />
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#4ECDC4] uppercase block mb-0.5">
                  {img.tag || 'Media Archive'}
                </span>
                <p className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2">
                  {img.caption || img.alt}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 select-none"
            onClick={handleClose}
          >
            <div
              className="relative w-full max-w-5xl h-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="w-full flex items-center justify-between pb-3 text-white">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#4ECDC4]">
                    {selectedIndex + 1} / {images.length}
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-white truncate max-w-md">
                    {images[selectedIndex].caption || images[selectedIndex].alt}
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image View */}
              <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden rounded-2xl bg-[#0A1E1B] border border-white/15 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedIndex}
                    src={images[selectedIndex].url}
                    alt={images[selectedIndex].alt}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="max-w-full max-h-[72vh] object-contain rounded-xl"
                  />
                </AnimatePresence>

                {/* Left / Right Nav Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 sm:left-4 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#10B981] text-white transition-all shadow-lg cursor-pointer backdrop-blur-sm border border-white/20 group"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-3 sm:right-4 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#10B981] text-white transition-all shadow-lg cursor-pointer backdrop-blur-sm border border-white/20 group"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Footer Caption */}
              <div className="w-full pt-3 flex items-center justify-between text-xs text-white/70">
                <span>✦ Press &amp; Strategic Stakeholder Archive · Global Aadhar</span>
                <span className="hidden sm:inline">Use ← → Arrow Keys to Navigate · ESC to Close</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
