import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, User, ShieldCheck } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="w-full">
      {/* ======================================================== */}
      {/* Section A: Page Hero (Compact & Editorial)               */}
      {/* ======================================================== */}
      <section className="relative w-full py-14 sm:py-18 min-h-[300px] flex items-center justify-center bg-[#0D2B28] text-white pt-24 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-bold tracking-[0.25em] text-[#4ECDC4] uppercase block mb-2"
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
      <section className="py-10 sm:py-14 bg-[#E5E3DE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Direct Agency Details */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-[#23413C] rounded-xl p-5 sm:p-6 text-white shadow-sm">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#4ECDC4] uppercase block mb-1.5">
                  Headquarters &amp; Direct Desk
                </span>
                <h2
                  className="text-lg sm:text-xl font-black uppercase tracking-tight text-white mb-4"
                  style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                >
                  GLOBAL AADHAR
                </h2>

                <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-white/85">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#4ECDC4]">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-[11px] uppercase tracking-wider mb-0.5">
                        Location
                      </div>
                      <div>Panjim, Goa, India</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#4ECDC4]">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-[11px] uppercase tracking-wider mb-0.5">
                        Leadership
                      </div>
                      <div>Amol K Arondekar, Partner</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#4ECDC4]">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-[11px] uppercase tracking-wider mb-0.5">
                        Email
                      </div>
                      <a
                        href="mailto:contact@globalaadhar.com"
                        className="hover:text-[#4ECDC4] transition-colors"
                      >
                        contact@globalaadhar.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#4ECDC4]">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-[11px] uppercase tracking-wider mb-0.5">
                        Media Desk Phone
                      </div>
                      <a
                        href="tel:+919326510950"
                        className="hover:text-[#4ECDC4] transition-colors"
                      >
                        +91 93265 10950 / +91 (0832) 242-XXXX
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2-Hour Response SLA Badge */}
                <div className="mt-5 pt-4 border-t border-white/15 flex items-center gap-2.5 bg-white/5 -mx-1 -mb-1 p-3 rounded-lg">
                  <Clock className="w-4 h-4 text-[#4ECDC4] flex-shrink-0" />
                  <p className="text-[11px] text-white/90 leading-snug">
                    <strong className="text-white font-bold">2-Hour SLA:</strong> All briefs are acknowledged and routed to leadership within 2 hours.
                  </p>
                </div>
              </div>

              {/* Trust & Confidentiality card */}
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#D5D1C8]/70 shadow-sm flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#2D5A54] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#23413C] mb-0.5">
                    Strict Confidentiality
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#2B2B2B] leading-relaxed">
                    All strategic discussions and preliminary campaign briefs remain strictly confidential under mutual NDA protocols.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: 5-Field Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>

          {/* Section B2: Office Location Visual & Interactive Map */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-[#D5D1C8]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#2D5A54] uppercase block mb-1">
                  Panjim Bureau &amp; Office
                </span>
                <h3
                  className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#23413C]"
                  style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                >
                  VISIT US IN PANJIM, GOA
                </h3>
              </div>
              <span className="text-xs text-[#2B2B2B]/70 font-medium">
                Centrally located in Goa's administrative &amp; media hub
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Panjim Goa Bureau Visual Card */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md bg-[#23413C] min-h-[280px] flex flex-col justify-between p-6 text-white border border-[#D5D1C8]">
                <img
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
                  alt="Visit us in Panjim, Goa"
                  className="absolute inset-0 w-full h-full object-cover brightness-100 contrast-[1.02] saturate-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B28]/90 via-[#0D2B28]/35 to-transparent" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold text-[#4ECDC4] uppercase tracking-wider">
                    State Bureau Desk
                  </span>
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] font-bold text-[#4ECDC4] uppercase tracking-wider block mb-1">
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
              <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-md border-2 border-[#D5D1C8] bg-[#EDEBE7] min-h-[280px] relative">
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
