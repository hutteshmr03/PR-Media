import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const primaryLinks = [
    { label: 'HOME', path: '/' },
    { label: 'WHO WE ARE', path: '/who-we-are' },
    { label: 'WHAT WE DO', path: '/what-we-do' },
    { label: 'OUR WORK', path: '/our-work' },
    { label: 'WHY US', path: '/why-us' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-[#061224] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12">
        {/* ======================================================== */}
        {/* MAIN ROW: Brand Identity & Quick Navigation              */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Left Column: Brand Logo & Strategic PR Subtitles */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="inline-flex items-center text-left group" aria-label="Global Aadhar Home">
              <img
                src="/logo-horizontal-white.png"
                alt="Global Aadhar - PR & Communications"
                className="h-10 sm:h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
            </Link>
            <p className="text-xs text-white/70 tracking-[0.2em] uppercase font-semibold">
              Goa · India · Worldwide
            </p>
          </div>

          {/* Right Column: Quick Navigation */}
          <div className="flex flex-col gap-3 lg:items-end">
            <div className="mb-1">
              <span
                className="text-xs sm:text-sm font-black uppercase tracking-wider text-white border-b-2 border-[#D4AF37] pb-1 inline-block"
                style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
              >
                QUICK NAVIGATION
              </span>
            </div>

            {/* Primary Nav Links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-white/85">
              {primaryLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* BOTTOM ROW: Copyright & Scroll to Top Button             */}
        {/* ======================================================== */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] sm:text-xs text-white/60 tracking-wider text-center sm:text-left">
            Copyright © 2026 Global Aadhar, All Rights Reserved | Strategic Communications &amp; PR · Panjim, Goa
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#061224] text-white flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
