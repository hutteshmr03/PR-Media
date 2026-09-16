import React from 'react';
import { motion } from 'framer-motion';

export default function ProcessSteps({ steps = [] }) {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* 4-Step Animated Pill Process Bar */}
      <div className="relative flex items-center justify-between max-w-4xl mx-auto px-4 w-full overflow-x-auto pb-3 no-scrollbar">
        <div className="hidden sm:block absolute top-1/2 left-8 right-8 h-[2px] border-t-2 border-dashed border-[#2D5A54]/40 -translate-y-1/2 z-0" />
        {steps.map((st, idx) => (
          <motion.div
            key={st.step || st.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative z-10 flex flex-col items-center gap-2 flex-shrink-0 mx-2"
          >
            <div className="px-5 py-2 rounded-full bg-[#2D5A54] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4]" />
              <span>{st.step || st.name}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4 Equal Columns Description Panel with Dividers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#EDEBE7] p-6 rounded-2xl border border-[#D5D1C8] divide-y sm:divide-y-0 lg:divide-x divide-[#D5D1C8]">
        {steps.map((st) => (
          <div key={st.step || st.name} className="pt-4 sm:pt-0 lg:px-4 first:pl-0 last:pr-0">
            <h4 className="text-sm font-black text-[#23413C] uppercase tracking-wider mb-2">
              {st.step || st.name}
            </h4>
            <p className="text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
              {st.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
