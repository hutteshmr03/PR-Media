import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const visionSlides = [
  {
    id: 1,
    iconType: 'circles',
    headline: 'Strategic depth with decisive execution',
    body: "We don't just secure media coverage; we shape institutional narratives. Every campaign is engineered with precision to protect reputations, build lasting public trust, and command authority across national and regional media ecosystems.",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80',
    imgPosition: 'object-[center_top]',
    alt: 'Strategic PR Communications Consultant',
  },
  {
    id: 2,
    iconType: 'diamond',
    headline: 'A renowned vision with unyielding integrity',
    body: "Rooted in Goa with expanding reach across India, our deep relationships with government secretariats, major news wires, and corporate boards ensure our clients' voices resonate with undeniable clarity where decisions are made.",
    image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1200&q=80',
    imgPosition: 'object-center',
    alt: 'Executive Leadership Strategy Board',
  },
  {
    id: 3,
    iconType: 'clover',
    headline: 'Communications that inspires real impact',
    body: "From high-stakes policy advocacy to nationwide brand rollouts, we turn complex corporate mandates into clear, compelling momentum that moves industries, drives conviction, and delivers measurable outcomes.",
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=1200&q=80',
    imgPosition: 'object-[center_top]',
    alt: 'Strategic PR Director at Workstation',
  },
];

export default function VisionStatementSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % visionSlides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + visionSlides.length) % visionSlides.length);
  };

  const current = visionSlides[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#081715] text-white overflow-hidden border-t border-white/10 select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#4ECDC4]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Geometric Icon + Quote Headline + Body + Controls */}
          <div className="lg:col-span-6 flex flex-col justify-center min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col"
              >
                {/* Minimalist Geometric Wire Icon */}
                <div className="mb-6 sm:mb-8 text-[#F4A8A8]">
                  {current.iconType === 'circles' && (
                    <svg className="w-16 h-12 text-[#F4A8A8]" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="34" cy="30" r="26" />
                      <circle cx="66" cy="30" r="26" />
                    </svg>
                  )}

                  {current.iconType === 'diamond' && (
                    <svg className="w-16 h-14 text-[#9D8CFC]" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="40,8 72,26 40,44 8,26" />
                      <polygon points="40,36 72,54 40,72 8,54" />
                    </svg>
                  )}

                  {current.iconType === 'clover' && (
                    <svg className="w-16 h-14 text-[#F4A8A8]" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M40 40 C30 20 15 20 15 35 C15 50 30 50 40 40 Z" />
                      <path d="M40 40 C50 20 65 20 65 35 C65 50 50 50 40 40 Z" />
                      <path d="M40 40 C30 60 15 60 15 45 C15 30 30 30 40 40 Z" />
                      <path d="M40 40 C50 60 65 60 65 45 C65 30 50 30 40 40 Z" />
                    </svg>
                  )}
                </div>

                {/* Main Quote Headline */}
                <h3
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12] mb-5 sm:mb-6"
                  style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                >
                  {current.headline}
                </h3>

                {/* Body Paragraph */}
                <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed max-w-xl">
                  {current.body}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slide Navigation Controls */}
            <div className="mt-8 sm:mt-10 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#4ECDC4] text-white hover:text-[#0A1E1B] border border-white/20 hover:border-[#4ECDC4] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:scale-105 active:scale-95"
                  aria-label="Previous slide"
                  title="Previous"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#4ECDC4] text-[#0A1E1B] hover:bg-[#10B981] border border-[#4ECDC4] hover:border-[#10B981] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                  aria-label="Next slide"
                  title="Next"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Step indicator */}
              <div className="flex items-center gap-2 ml-3">
                {visionSlides.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-[#4ECDC4]' : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual with Chamfered Top-Right Corner */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-[16/11]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full h-full relative"
                >
                  {/* Outer container with signature chamfered top-right corner */}
                  <div
                    className="w-full h-full overflow-hidden bg-[#132E2A] shadow-2xl transition-all duration-500"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 64px) 0, 100% 64px, 100% 100%, 0 100%)',
                    }}
                  >
                    <img
                      src={current.image}
                      alt={current.alt}
                      className={`w-full h-full object-cover ${current.imgPosition || 'object-center'} brightness-100 contrast-[1.03] saturate-[1.05]`}
                      loading="lazy"
                    />

                    {/* Subtle bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Decorative corner accent line */}
                  <div
                    className="absolute -inset-1 border-2 border-white/15 pointer-events-none -z-10 rounded-lg"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 66px) 0, 100% 66px, 100% 100%, 0 100%)',
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
