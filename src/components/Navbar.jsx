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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 sm:h-[68px] lg:h-[72px] flex items-center ${
        isScrolled || !isHome
          ? 'bg-[#F8F9FA]/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0]/70'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center text-left focus:outline-none py-1"
          aria-label="Global Aadhar Home"
        >
          <img
            src={isScrolled || !isHome ? '/logo-horizontal.png' : '/logo-horizontal-white.png'}
            alt="Global Aadhar - PR & Communications - Your Story. Our Global Reach."
            className="h-10 sm:h-11 lg:h-12 w-auto max-w-[240px] sm:max-w-[320px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
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
                    ? 'text-[#112842] border-b-2 border-[#112842]'
                    : isScrolled || !isHome
                    ? 'text-[#1E293B] hover:text-[#112842]'
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
                ? 'bg-[#112842] text-white hover:bg-[#0C2340]'
                : 'bg-[#112842] border border-[#D4AF37]/50 text-white hover:bg-[#0C2340] hover:border-[#D4AF37]'
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
            isScrolled || !isHome ? 'text-[#0C2340]' : 'text-white'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-[#F8F9FA] border-b border-[#E2E8F0] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-bold tracking-wider uppercase py-2 border-b border-[#E2E8F0]/40 ${
                    isActive ? 'text-[#112842] font-black' : 'text-[#1E293B]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#112842] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#0C2340]"
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
