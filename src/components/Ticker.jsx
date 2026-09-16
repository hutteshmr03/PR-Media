import React from 'react';

const tickerText = [
  'MEDIA RELATIONS',
  'GOVERNMENT PR',
  'CRISIS COMMUNICATIONS',
  'EVENT MANAGEMENT',
  'DIGITAL MARKETING',
  'CSR CAMPAIGNS',
  'MEDIA PRODUCTION',
  'STRATEGIC COMMUNICATIONS',
];

const liveNewsItems = [
  '📰 Global Aadhar client featured in Times of Goa',
  '📺 Media placement secured in Doordarshan Goa',
  '🎙️ Client interview aired on Goa 365 TV',
  '📰 Press release covered by Herald Goa',
  '🏆 Campaign wins Best PR Award 2026',
];

export default function Ticker() {
  // Repeating list duplicated for 100% continuous infinite loop
  const duplicatedTicker = [...tickerText, ...tickerText, ...tickerText, ...tickerText];
  const duplicatedNews = [...liveNewsItems, ...liveNewsItems, ...liveNewsItems, ...liveNewsItems, ...liveNewsItems, ...liveNewsItems];

  return (
    <div className="w-full select-none overflow-hidden">
      {/* 1. Primary Services Marquee (Silky Smooth, Hover to Pause) */}
      <div className="group relative w-full py-4 sm:py-5 bg-[#23413C] overflow-hidden border-t border-[#0D2B28] shadow-inner cursor-default">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#23413C] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#23413C] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-services pause-hover flex items-center whitespace-nowrap gap-8">
          {duplicatedTicker.map((text, idx) => (
            <div key={idx} className="flex items-center gap-8 flex-shrink-0">
              <span
                className="text-sm sm:text-base md:text-lg font-black tracking-widest text-white/90 uppercase transition-colors duration-200 group-hover:text-white"
                style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
              >
                {text}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#4ECDC4] opacity-80 shadow-[0_0_8px_#4ECDC4]" />
            </div>
          ))}
        </div>
      </div>

      {/* 2. Secondary LIVE NEWS TICKER (Independent Smooth Track, Hover to Pause) */}
      <div className="group relative w-full py-2 bg-[#1B3B36] overflow-hidden border-y border-[#16332E] text-white flex items-center shadow-sm cursor-default">
        {/* Fixed Left Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-4 py-0.5 bg-[#0D2B28] border-r border-[#2C5E55] z-20 flex-shrink-0 text-[10px] font-bold tracking-wider text-[#4ECDC4] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>Live Coverage</span>
        </div>

        {/* Soft edge fade masks */}
        <div className="absolute left-0 sm:left-32 top-0 bottom-0 w-12 bg-gradient-to-r from-[#1B3B36] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#1B3B36] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-news pause-hover flex items-center whitespace-nowrap gap-8">
          {duplicatedNews.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 flex-shrink-0">
              <span className="text-[11px] sm:text-xs font-semibold text-white/90 tracking-wide hover:text-[#4ECDC4] transition-colors">
                {item}
              </span>
              <span className="text-[#4ECDC4]/60 text-xs">·</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

