import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, User } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="w-full">
      {/* ======================================================== */}
      {/* Section A: Page Hero (Compact & Editorial)               */}
      {/* ======================================================== */}
      <section className="relative w-full py-14 sm:py-18 min-h-[300px] flex items-center justify-center bg-[#0A192F] text-white pt-24 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-bold tracking-[0.25em] text-[#D4AF37] uppercase block mb-2"
          >
            Direct Communications Desk
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
          >
            LET'S BUILD IMPACT TOGETHER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3.5 text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Whether you need state-level PR, institutional crisis management, broadcast media production, or digital campaigns — our desk is ready.
          </motion.p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section B: 2-Column Details + Form                       */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-14 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Column: Direct Agency Details Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-[#0C2340] rounded-2xl p-6 sm:p-8 text-white shadow-md border border-white/10 flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block mb-1.5">
                    Headquarters &amp; Direct Desk
                  </span>
                  <h2
                    className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-6"
                    style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                  >
                    GLOBAL AADHAR
                  </h2>

                  <div className="flex flex-col gap-4 text-xs sm:text-sm text-white/85">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-[11px] uppercase tracking-wider mb-0.5">
                          Location
                        </div>
                        <div className="font-medium text-white/90">Panjim, Goa, India</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-[11px] uppercase tracking-wider mb-0.5">
                          Leadership
                        </div>
                        <div className="font-medium text-white/90">Amol K Arondekar, Partner</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-[11px] uppercase tracking-wider mb-0.5">
                          Email
                        </div>
                        <a
                          href="mailto:contact@globalaadhar.com"
                          className="hover:text-[#D4AF37] font-medium text-white/90 transition-colors"
                        >
                          contact@globalaadhar.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-[11px] uppercase tracking-wider mb-0.5">
                          Media Desk Phone
                        </div>
                        <a
                          href="tel:+919326510950"
                          className="hover:text-[#D4AF37] font-medium text-white/90 transition-colors"
                        >
                          +91 93265 10950
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2-Hour Response SLA Badge */}
                <div className="mt-8 pt-5 border-t border-white/15 flex items-center gap-3 bg-white/5 -mx-2 -mb-2 p-3.5 rounded-xl">
                  <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <p className="text-xs text-white/90 leading-snug">
                    <strong className="text-white font-bold">2-Hour SLA:</strong> All briefs are acknowledged and routed to leadership within 2 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: 5-Field Contact Form */}
            <div className="lg:col-span-7 flex flex-col">
              <ContactForm />
            </div>
          </div>

          {/* Section B2: Office Location Visual & Interactive Map */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-[#E2E8F0]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#112842] uppercase block mb-1">
                  Panjim Bureau &amp; Office
                </span>
                <h3
                  className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0C2340]"
                  style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                >
                  VISIT US IN PANJIM, GOA
                </h3>
              </div>
              <span className="text-xs text-[#1E293B]/70 font-medium">
                Centrally located in Goa's administrative &amp; media hub
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Panjim Goa Bureau Visual Card */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md bg-[#0C2340] min-h-[280px] flex flex-col justify-between p-6 text-white border border-[#E2E8F0]">
                <img
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
                  alt="Visit us in Panjim, Goa"
                  className="absolute inset-0 w-full h-full object-cover brightness-100 contrast-[1.02] saturate-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/35 to-transparent" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                    State Bureau Desk
                  </span>
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">
                    ✦ Strategic PR Bureau
                  </span>
                  <h4
                    className="text-xl font-black uppercase tracking-tight text-white mb-1"
                    style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                  >
                    Panjim Headquarters
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Direct access to Goa's Secretariat, Assembly, Media Houses, and Corporate Institutions.
                  </p>
                </div>
              </div>

              {/* Embedded Google Maps Container */}
              <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-md border-2 border-[#E2E8F0] bg-[#F1F3F5] min-h-[280px] relative">
                <iframe
                  src="https://maps.google.com/maps?q=Panjim,Goa,India&output=embed"
                  title="Global Aadhar Panjim Bureau Location Map"
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[280px] border-0"
                  style={{ filter: 'contrast(1.05) saturate(0.95)' }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
