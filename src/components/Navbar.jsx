import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'WHO WE ARE', path: '/who-we-are' },
    { label: 'WHAT WE DO', path: '/what-we-do' },
    { label: 'OUR WORK', path: '/our-work' },
    { label: 'WHY US', path: '/why-us' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 sm:h-[64px] flex items-center ${
        isScrolled || !isHome
          ? 'bg-[#E5E3DE]/95 backdrop-blur-md shadow-sm border-b border-[#D5D1C8]/70'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo & Strategic PR Tag */}
        <Link
          to="/"
          className="group flex flex-col text-left focus:outline-none"
        >
          <span
            className={`text-sm sm:text-base font-extrabold tracking-widest uppercase transition-colors duration-200 ${
              isScrolled || !isHome ? 'text-[#23413C]' : 'text-white'
            }`}
          >
            GLOBAL AADHAR
          </span>
          <span
            className={`text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-semibold transition-colors duration-200 ${
              isScrolled || !isHome ? 'text-[#2D5A54]' : 'text-[#4ECDC4]'
            }`}
          >
            STRATEGIC PR · GOA
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-bold tracking-wider uppercase transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-[#2D5A54] border-b-2 border-[#2D5A54]'
                    : isScrolled || !isHome
                    ? 'text-[#2B2B2B] hover:text-[#2D5A54]'
                    : 'text-white/85 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm ${
              isScrolled || !isHome
                ? 'bg-[#2D5A54] text-white hover:bg-[#23413C]'
                : 'bg-[#2D5A54] border border-[#4ECDC4]/50 text-white hover:bg-[#23413C] hover:border-[#4ECDC4]'
            }`}
          >
            Let's Talk
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none ${
            isScrolled || !isHome ? 'text-[#23413C]' : 'text-white'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-[#E5E3DE] border-b border-[#D5D1C8] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-bold tracking-wider uppercase py-2 border-b border-[#D5D1C8]/40 ${
                    isActive ? 'text-[#2D5A54] font-black' : 'text-[#2B2B2B]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#2D5A54] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#23413C]"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
