import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers, Globe, BarChart3, CheckCircle2 } from 'lucide-react';
import { engagementModels, clientProcessSteps, sectorsServed } from '../data/engagement';
import ProcessSteps from '../components/ProcessSteps';

const advantages = [
  {
    icon: Layers,
    title: 'INTEGRATED EXPERTISE',
    desc: 'Strategic PR, media production, events, digital marketing, and tech capability all under one roof. No multiple vendor coordination.',
  },
  {
    icon: Globe,
    title: 'LOCAL NETWORK & REACH',
    desc: 'Strongest media, government, and institutional connections in Goa and expanding across national networks.',
  },
  {
    icon: BarChart3,
    title: 'MEASURABLE IMPACT',
    desc: 'Every campaign tracked, measured, and reported with transparent KPIs, media coverage logs, and actionable ROI metrics.',
  },
];

export default function WhyUs() {
  return (
    <div className="w-full">
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
            Why Choose Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
          >
            WHY GLOBAL AADHAR
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3.5 text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Six distinct advantages set Global Aadhar apart — bringing together strategic PR depth, trusted institutional relationships, and cutting-edge media execution under one roof.
          </motion.p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section A2: STATS WITH ANIMATED SVG ICONS (Teal Bar)      */}
      {/* ======================================================== */}
      <section className="py-8 sm:py-10 bg-[#16332F] text-white border-y border-[#2C5E55]/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Stat 1: 500+ Campaigns (Bar Chart Animated SVG) */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="group p-4 sm:p-5 rounded-2xl bg-[#0D2B28] border border-[#2D5A54] hover:border-[#4ECDC4] hover:shadow-[0_0_20px_rgba(78,205,196,0.2)] transition-all flex flex-col items-center text-center"
            >
              {/* Animated Bar Chart SVG */}
              <div className="w-12 h-12 mb-3 rounded-xl bg-[#2D5A54]/60 group-hover:bg-[#4ECDC4]/20 flex items-center justify-center transition-colors">
                <svg className="w-6 h-6 text-[#4ECDC4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <motion.line
                    x1="18" y1="20" x2="18" y2="4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="stroke-[#10B981]"
                  />
                  <motion.line
                    x1="12" y1="20" x2="12" y2="10"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  <motion.line
                    x1="6" y1="20" x2="6" y2="14"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  />
                </svg>
              </div>
              <div
                className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#4ECDC4] transition-colors"
                style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
              >
                500+
              </div>
              <div className="text-[11px] font-bold text-[#4ECDC4] uppercase tracking-wider mt-0.5">
                Campaigns Delivered
              </div>
            </motion.div>

            {/* Stat 2: 15+ Years (Calendar Animated SVG) */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="group p-4 sm:p-5 rounded-2xl bg-[#0D2B28] border border-[#2D5A54] hover:border-[#4ECDC4] hover:shadow-[0_0_20px_rgba(78,205,196,0.2)] transition-all flex flex-col items-center text-center"
            >
              {/* Animated Calendar SVG */}
              <div className="w-12 h-12 mb-3 rounded-xl bg-[#2D5A54]/60 group-hover:bg-[#4ECDC4]/20 flex items-center justify-center transition-colors">
                <svg className="w-6 h-6 text-[#4ECDC4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <motion.path
                    d="M9 16l2 2 4-4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="stroke-[#10B981]"
                  />
                </svg>
              </div>
              <div
                className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#4ECDC4] transition-colors"
                style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
              >
                15+
              </div>
              <div className="text-[11px] font-bold text-[#4ECDC4] uppercase tracking-wider mt-0.5">
                Years Experience
              </div>
            </motion.div>

            {/* Stat 3: 180+ Media Contacts (Signal / Broadcast Pulse SVG) */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="group p-4 sm:p-5 rounded-2xl bg-[#0D2B28] border border-[#2D5A54] hover:border-[#4ECDC4] hover:shadow-[0_0_20px_rgba(78,205,196,0.2)] transition-all flex flex-col items-center text-center"
            >
              {/* Animated Radio Tower Pulse SVG */}
              <div className="w-12 h-12 mb-3 rounded-xl bg-[#2D5A54]/60 group-hover:bg-[#4ECDC4]/20 flex items-center justify-center transition-colors">
                <svg className="w-6 h-6 text-[#4ECDC4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.93 19.07a10 10 0 0 1 0-14.14" className="animate-pulse" />
                  <path d="M7.76 16.24a6 6 0 0 1 0-8.48" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" className="text-[#10B981]" />
                  <path d="M16.24 7.76a6 6 0 0 1 0 8.48" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" className="animate-pulse" />
                </svg>
              </div>
              <div
                className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#4ECDC4] transition-colors"
                style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
              >
                180+
              </div>
              <div className="text-[11px] font-bold text-[#4ECDC4] uppercase tracking-wider mt-0.5">
                Media Network
              </div>
            </motion.div>

            {/* Stat 4: Goa #1 PR (Trophy Glowing SVG) */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="group p-4 sm:p-5 rounded-2xl bg-[#0D2B28] border border-[#2D5A54] hover:border-[#4ECDC4] hover:shadow-[0_0_20px_rgba(78,205,196,0.2)] transition-all flex flex-col items-center text-center"
            >
              {/* Animated Trophy SVG */}
              <div className="w-12 h-12 mb-3 rounded-xl bg-[#2D5A54]/60 group-hover:bg-[#4ECDC4]/20 flex items-center justify-center transition-colors">
                <svg className="w-6 h-6 text-[#10B981] group-hover:text-[#4ECDC4] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34" />
                  <path d="M6 4h12v5a6 6 0 0 1-12 0V4z" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              <div
                className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#4ECDC4] transition-colors"
                style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
              >
                Goa #1 PR
              </div>
              <div className="text-[11px] font-bold text-[#10B981] uppercase tracking-wider mt-0.5">
                Strategic Agency
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section B: 3 Advantage Cards (Beige)                     */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-14 bg-[#E5E3DE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#2D5A54] uppercase block mb-1">
              Our Core Strengths
            </span>
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#23413C]"
              style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
            >
              THE GLOBAL AADHAR ADVANTAGE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {advantages.map((adv, idx) => {
              const IconComp = adv.icon;
              return (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-[#D5D1C8]/70 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#2D5A54] flex items-center justify-center text-white mb-4 shadow-sm">
                      <IconComp className="w-5 h-5 text-[#4ECDC4]" />
                    </div>
                    <h3
                      className="text-base sm:text-lg font-black text-[#23413C] uppercase tracking-tight mb-2"
                      style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                    >
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section C: How We Engage (Dark Teal Split Table)          */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-14 bg-[#23413C] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#4ECDC4] uppercase block mb-1">
              Flexible Collaboration
            </span>
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white"
              style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
            >
              HOW WE ENGAGE
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-white/80">
              Tailored commercial structures designed for agile execution, ongoing retainers, and high-impact institutional mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {[0, 1, 2].map((idx) => {
              const leftItem = engagementModels.left[idx];
              const rightItem = engagementModels.right[idx];
              return (
                <React.Fragment key={idx}>
                  {/* Left Model Card */}
                  {leftItem && (
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#4ECDC4]/50 transition-all flex flex-col justify-center h-full shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4
                            className="text-sm font-black text-white uppercase tracking-wide mb-1"
                            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                          >
                            {leftItem.title}
                          </h4>
                          <p className="text-xs text-white/75 leading-relaxed">
                            {leftItem.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Right Model Card */}
                  {rightItem && (
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#4ECDC4]/50 transition-all flex flex-col justify-center h-full shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4
                            className="text-sm font-black text-white uppercase tracking-wide mb-1"
                            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                          >
                            {rightItem.title}
                          </h4>
                          <p className="text-xs text-white/75 leading-relaxed">
                            {rightItem.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section D: Client Engagement Process (Beige)              */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-14 bg-[#E5E3DE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#2D5A54] uppercase block mb-1">
              Our Methodology
            </span>
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#23413C]"
              style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
            >
              CLIENT ENGAGEMENT PROCESS
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#2B2B2B]">
              A disciplined four-stage lifecycle from diagnostic discovery to measurable impact.
            </p>
          </div>

          <ProcessSteps steps={clientProcessSteps} />
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section E: Who We Serve (3 Sector Cards)                  */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-14 bg-[#EDEBE7] border-t border-[#D5D1C8]/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#2D5A54] uppercase block mb-1">
              Sectors &amp; Industries
            </span>
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#23413C]"
              style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
            >
              WHO WE SERVE
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#2B2B2B]">
              Trusted partner across corporate enterprises, grassroots organizations, and government departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {sectorsServed.map((sector) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative rounded-xl overflow-hidden shadow-sm flex flex-col justify-end p-6 text-white min-h-[260px] ${
                  sector.isCenter ? 'ring-2 ring-[#4ECDC4] shadow-md md:-translate-y-1' : ''
                }`}
              >
                {/* Image Background */}
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="absolute inset-0 w-full h-full object-cover brightness-100 contrast-[1.02] saturate-[1.05]"
                  loading="lazy"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B28]/90 via-[#0D2B28]/40 to-transparent" />

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#4ECDC4] uppercase block mb-1">
                    {sector.subtitle}
                  </span>
                  <h3
                    className="text-lg sm:text-xl font-black uppercase tracking-tight mb-1 text-white"
                    style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                  >
                    {sector.title}
                  </h3>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#4ECDC4] uppercase hover:underline mt-1"
                  >
                    <span>Partner With Us</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section F: CTA Strip                                     */}
      {/* ======================================================== */}
      <section className="py-10 bg-[#E5E3DE] border-t border-[#D5D1C8]/60 text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3
            className="text-lg sm:text-xl font-black text-[#23413C] uppercase tracking-tight text-center sm:text-left"
            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
          >
            Ready to scale your strategic outreach?
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
