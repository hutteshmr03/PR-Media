import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import SplashScreen from './components/SplashScreen';

// Lazy load pages for fast initial load and seamless performance
const Home = lazy(() => import('./pages/Home'));
const WhoWeAre = lazy(() => import('./pages/WhoWeAre'));
const WhatWeDo = lazy(() => import('./pages/WhatWeDo'));
const OurWork = lazy(() => import('./pages/OurWork'));
const WhyUs = lazy(() => import('./pages/WhyUs'));
const Contact = lazy(() => import('./pages/Contact'));

function PageFallback() {
  return (
    <div className="w-full min-h-[75vh] flex flex-col items-center justify-center bg-[#E5E3DE] gap-4">
      <div className="w-8 h-8 rounded-full border-2 border-[#2D5A54]/30 border-t-[#2D5A54] animate-spin" />
      <span className="text-[10px] font-bold tracking-[0.25em] text-[#2D5A54] uppercase">
        GLOBAL AADHAR
      </span>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/who-we-are"
          element={
            <PageTransition>
              <WhoWeAre />
            </PageTransition>
          }
        />
        <Route
          path="/what-we-do"
          element={
            <PageTransition>
              <WhatWeDo />
            </PageTransition>
          }
        />
        <Route
          path="/our-work"
          element={
            <PageTransition>
              <OurWork />
            </PageTransition>
          }
        />
        <Route
          path="/why-us"
          element={
            <PageTransition>
              <WhyUs />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        {/* Catch-all route redirects to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [splashDone, setSplashDone] = useState(() => {
    if (typeof window === 'undefined') return true;
    try {
      return sessionStorage.getItem('splashShown') === 'true';
    } catch (e) {
      return false;
    }
  });

  const handleSplashComplete = () => {
    try {
      sessionStorage.setItem('splashShown', 'true');
    } catch (e) {}
    setSplashDone(true);
  };

  // Initialize Lenis smooth scroll for buttery fluid motion
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      {/* Cinematic Intro Splash Screen */}
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}

      <div className="min-h-screen bg-[#E5E3DE] text-[#2B2B2B] selection:bg-[#2D5A54] selection:text-white antialiased relative flex flex-col justify-between font-sans">
        {/* Helper to reset scroll position on route change */}
        <ScrollToTop />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Page Content with Lazy Suspense and Animated Transitions */}
        <main className="flex-grow">
          <Suspense fallback={<PageFallback />}>
            <AnimatedRoutes />
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
