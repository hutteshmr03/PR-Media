import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Radio, Network, Cog, ArrowUpRight, RadioTower, Users, MapPin } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';

const pillars = [
  {
    icon: Radio,
    heading: 'STRATEGIC PR & COMMUNICATIONS',
    text: 'Rooted in Goa, Global Aadhar delivers end-to-end public relations and strategic communications for corporates, NGOs, government bodies, and institutions seeking credible, impactful outreach.',
  },
  {
    icon: Network,
    heading: 'MEDIA & INSTITUTIONAL NETWORK',
    text: 'We operate within a rich ecosystem of media partners, NGOs, and government departments, enabling meaningful engagement with stakeholders and communities that matter most.',
  },
  {
    icon: Cog,
    heading: 'INTEGRATED EXECUTION',
    text: 'From strategy to storytelling to on-ground activation — communications, media production, events, digital marketing, and technology under one integrated delivery model.',
  },
];

const advantages = [
  {
    icon: RadioTower,
    title: 'MEDIA ACCESS',
    desc: 'Direct relationships with TV channels, digital platforms, and print media across Goa and beyond.',
  },
  {
    icon: Users,
    title: 'STAKEHOLDER RELATIONSHIPS',
    desc: 'Established networks spanning government departments, NGOs, institutional bodies, and community leaders.',
  },
  {
    icon: MapPin,
    title: 'LOCAL KNOWLEDGE & EXECUTION',
    desc: 'Rooted in Goa with unmatched regional insight, cultural understanding, and on-ground execution capability via Sumant Cloud.',
  },
];

export default function WhoWeAre() {
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
            About Global Aadhar
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
          >
            WHO WE ARE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3.5 text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Global Aadhar is a Goa-based Public Relations and Strategic Communications company, deeply embedded in the region's media ecosystem, institutional networks, and government landscape — delivering integrated communications that build trust and drive impact.
          </motion.p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section B: 3 Pillar Cards (Beige)                        */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-14 bg-[#E5E3DE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.heading}
                  initial={{ opacity: 0, y: 20 }}
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
                      {pillar.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Section C: 2 Media Images Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 sm:mt-10">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-sm bg-white border-2 border-[#D5D1C8]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Strategic PR team collaboration"
                className="w-full h-full object-cover brightness-100 contrast-[1.02] saturate-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B28]/85 via-transparent to-transparent p-5 flex items-end">
                <span className="text-white text-[11px] font-bold tracking-wider uppercase bg-[#0D2B28]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                  Strategic Team Collaboration
                </span>
              </div>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-sm bg-white border-2 border-[#D5D1C8]">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                alt="Institutional partnership"
                className="w-full h-full object-cover brightness-100 contrast-[1.02] saturate-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B28]/85 via-transparent to-transparent p-5 flex items-end">
                <span className="text-white text-[11px] font-bold tracking-wider uppercase bg-[#0D2B28]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                  Institutional Trust &amp; Partnership
                </span>
              </div>
            </div>
          </div>

          {/* Section C2: Interactive Agency Photo Gallery */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-[#D5D1C8]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#2D5A54] uppercase block mb-1">
                  On-Ground &amp; Behind The Scenes
                </span>
                <h2
                  className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#23413C]"
                  style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                >
                  MEDIA &amp; TEAM GALLERY
                </h2>
              </div>
              <span className="text-xs text-[#2B2B2B]/70 font-medium">
                Click any image to view in full-screen gallery
              </span>
            </div>

            <ImageGallery
              images={[
                {
                  url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600',
                  alt: 'Strategic Team Strategy Meeting',
                  caption: 'Executive PR Strategy & Campaign Planning Session',
                  tag: 'Team at Work',
                },
                {
                  url: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=600',
                  alt: 'Institutional Partnership Handshake',
                  caption: 'State Institutional Partnership & Stakeholder Alignment',
                  tag: 'Partnerships',
                },
                {
                  url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600',
                  alt: 'Business Media Advisory Meeting',
                  caption: 'Corporate Narrative Strategy & Crisis Advisory Session',
                  tag: 'Consultation',
                },
                {
                  url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600',
                  alt: 'Media Press Conference Briefing',
                  caption: 'Live Broadcast Press Conference & Journalistic Wire Briefing',
                  tag: 'Press Conference',
                },
                {
                  url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
                  alt: 'Integrated Team Collaboration',
                  caption: 'Cross-functional PR, Digital, and Video Production Alignment',
                  tag: 'Collaboration',
                },
                {
                  url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
                  alt: 'Large-Scale Media Conference Stage',
                  caption: 'Marquee Summit Production & Live Stakeholder Engagement',
                  tag: 'Events & Experiences',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section D: Why Global Aadhar (Dark Teal)                 */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-14 bg-[#23413C] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Headline & Image */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#4ECDC4] uppercase block mb-1.5">
                  Competitive Advantage
                </span>
                <h2
                  className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                >
                  WHY GLOBAL AADHAR
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-white/80">
                  Six distinct advantages set Global Aadhar apart.
                </p>
              </div>

              <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-sm border border-white/10 bg-[#0D2B28]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Global Aadhar leadership"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Col: 3 Stacked Items */}
            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {advantages.map((item) => (
                <div
                  key={item.title}
                  className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#4ECDC4]/50 transition-all"
                >
                  <h3
                    className="text-sm sm:text-base font-black text-white uppercase tracking-wide mb-1.5"
                    style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* Section E: CTA Strip                                     */}
      {/* ======================================================== */}
      <section className="py-10 bg-[#E5E3DE] border-t border-[#D5D1C8]/60 text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3
            className="text-lg sm:text-xl font-black text-[#23413C] uppercase tracking-tight text-center sm:text-left"
            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
          >
            Ready to work with us?
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
