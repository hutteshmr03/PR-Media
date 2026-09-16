import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    target: 'Media Relations',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const targets = [
    'Media Relations',
    'Government PR',
    'Events',
    'CSR',
    'Digital',
    'Technology',
    'General Inquiry',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#D5D1C8]/80 shadow-sm">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-xl bg-[#EDEBE7] border border-[#2D5A54]/30 text-center"
        >
          <CheckCircle2 className="w-10 h-10 text-[#2D5A54] mx-auto mb-2" />
          <h3 className="text-lg font-bold text-[#23413C] mb-1">Brief Received</h3>
          <p className="text-[#2B2B2B] text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Thank you, {formData.name}. Our team will be in touch within 2 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', company: '', target: 'Media Relations', message: '' });
            }}
            className="mt-4 text-xs uppercase tracking-widest text-[#2D5A54] font-bold hover:underline cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 text-left">
          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#2D5A54] mb-1">
                Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#EDEBE7] border border-[#D5D1C8] rounded-lg px-3.5 py-2 text-[#2B2B2B] placeholder-[#2B2B2B]/40 text-xs sm:text-sm focus:outline-none focus:border-[#2D5A54] focus:ring-1 focus:ring-[#2D5A54] transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#2D5A54] mb-1">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="name@organization.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#EDEBE7] border border-[#D5D1C8] rounded-lg px-3.5 py-2 text-[#2B2B2B] placeholder-[#2B2B2B]/40 text-xs sm:text-sm focus:outline-none focus:border-[#2D5A54] focus:ring-1 focus:ring-[#2D5A54] transition-all"
              />
            </div>
          </div>

          {/* Company & Primary Target */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#2D5A54] mb-1">
                Company / Organisation
              </label>
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-[#EDEBE7] border border-[#D5D1C8] rounded-lg px-3.5 py-2 text-[#2B2B2B] placeholder-[#2B2B2B]/40 text-xs sm:text-sm focus:outline-none focus:border-[#2D5A54] focus:ring-1 focus:ring-[#2D5A54] transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#2D5A54] mb-1">
                Primary Target
              </label>
              <select
                value={formData.target}
                onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                className="w-full bg-[#EDEBE7] border border-[#D5D1C8] rounded-lg px-3.5 py-2 text-[#2B2B2B] text-xs sm:text-sm focus:outline-none focus:border-[#2D5A54] focus:ring-1 focus:ring-[#2D5A54] transition-all cursor-pointer"
              >
                {targets.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Story Hook / Message */}
          <div>
            <label className="block text-[11px] font-bold tracking-wider uppercase text-[#2D5A54] mb-1">
              Story Hook / Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={3}
              placeholder="Tell us about your strategic communications brief..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#EDEBE7] border border-[#D5D1C8] rounded-lg px-3.5 py-2 text-[#2B2B2B] placeholder-[#2B2B2B]/40 text-xs sm:text-sm focus:outline-none focus:border-[#2D5A54] focus:ring-1 focus:ring-[#2D5A54] transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 sm:py-3 rounded-full bg-[#2D5A54] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#23413C] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-0.5"
          >
            <span>Transmit Brief to Our Desk</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      )}
    </div>
  );
}
