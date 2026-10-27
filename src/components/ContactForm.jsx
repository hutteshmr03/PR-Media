import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send, Loader2, AlertCircle, Mail } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    target: 'Media Relations',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const targets = [
    'Media Relations',
    'Government PR',
    'Events',
    'CSR',
    'Digital',
    'Technology',
    'General Inquiry',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setError(null);

    try {
      // Direct email dispatch to contact@globalaadhar.com
      const response = await fetch('https://formsubmit.co/ajax/contact@globalaadhar.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Company: formData.company || 'Not Specified',
          Target: formData.target,
          Message: formData.message,
          _subject: `New Strategic Brief: ${formData.name} (${formData.target})`,
          _replyto: formData.email,
          _template: 'table',
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok || (result && (result.success === 'true' || result.success === true))) {
        setSubmitted(true);
      } else {
        throw new Error(result?.message || 'Could not deliver form. Please try again or use direct email.');
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      setError('Unable to send brief automatically. You can directly email us at contact@globalaadhar.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoFallback = `mailto:contact@globalaadhar.com?subject=${encodeURIComponent(
    `Strategic Brief from ${formData.name || 'Visitor'} - ${formData.target}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nTarget: ${formData.target}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-md flex flex-col justify-between h-full">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-xl bg-[#F8F9FA] border border-[#112842]/20 text-center"
        >
          <div className="w-12 h-12 rounded-full bg-[#112842]/10 text-[#112842] flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-7 h-7 text-[#112842]" />
          </div>
          <h3
            className="text-lg font-black text-[#0C2340] uppercase tracking-tight mb-1"
            style={{ fontFamily: 'var(--font-headline, sans-serif)' }}
          >
            Brief Transmitted
          </h3>
          <p className="text-[#1E293B] text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Thank you, <strong className="text-[#0C2340]">{formData.name}</strong>. Your message has been routed to our leadership desk at <strong className="text-[#0C2340]">contact@globalaadhar.com</strong>.
          </p>
          <div className="mt-3 inline-block px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#0C2340] text-[11px] font-bold">
            ⚡ 2-Hour Response SLA Active
          </div>
          <div className="mt-5">
            <button
              onClick={() => {
                setSubmitted(false);
                setError(null);
                setFormData({ name: '', email: '', company: '', target: 'Media Relations', message: '' });
              }}
              className="text-xs uppercase tracking-widest text-[#112842] font-bold hover:text-[#D4AF37] hover:underline cursor-pointer transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 text-left">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 font-semibold">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600" />
                <span>{error}</span>
              </div>
              <a
                href={mailtoFallback}
                className="inline-flex items-center gap-1.5 font-bold text-rose-900 underline hover:text-rose-700"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Click here to send directly via your email app</span>
              </a>
            </motion.div>
          )}

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#112842] mb-1">
                Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                disabled={isSubmitting}
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#F1F3F5] border border-[#E2E8F0] rounded-lg px-3.5 py-2 text-[#1E293B] placeholder-[#1E293B]/40 text-xs sm:text-sm focus:outline-none focus:border-[#112842] focus:ring-1 focus:ring-[#112842] transition-all disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#112842] mb-1">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                disabled={isSubmitting}
                placeholder="name@organization.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#F1F3F5] border border-[#E2E8F0] rounded-lg px-3.5 py-2 text-[#1E293B] placeholder-[#1E293B]/40 text-xs sm:text-sm focus:outline-none focus:border-[#112842] focus:ring-1 focus:ring-[#112842] transition-all disabled:opacity-50"
              />
            </div>
          </div>

          {/* Company & Primary Target */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#112842] mb-1">
                Company / Organisation
              </label>
              <input
                type="text"
                disabled={isSubmitting}
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-[#F1F3F5] border border-[#E2E8F0] rounded-lg px-3.5 py-2 text-[#1E293B] placeholder-[#1E293B]/40 text-xs sm:text-sm focus:outline-none focus:border-[#112842] focus:ring-1 focus:ring-[#112842] transition-all disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#112842] mb-1">
                Primary Target
              </label>
              <select
                disabled={isSubmitting}
                value={formData.target}
                onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                className="w-full bg-[#F1F3F5] border border-[#E2E8F0] rounded-lg px-3.5 py-2 text-[#1E293B] text-xs sm:text-sm focus:outline-none focus:border-[#112842] focus:ring-1 focus:ring-[#112842] transition-all cursor-pointer disabled:opacity-50"
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
            <label className="block text-[11px] font-bold tracking-wider uppercase text-[#112842] mb-1">
              Story Hook / Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={3}
              disabled={isSubmitting}
              placeholder="Tell us about your strategic communications brief..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#F1F3F5] border border-[#E2E8F0] rounded-lg px-3.5 py-2 text-[#1E293B] placeholder-[#1E293B]/40 text-xs sm:text-sm focus:outline-none focus:border-[#112842] focus:ring-1 focus:ring-[#112842] transition-all resize-none disabled:opacity-50"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 sm:py-3 rounded-full bg-[#112842] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#0C2340] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-0.5 disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#D4AF37]" />
                <span>Transmitting Brief to Our Desk...</span>
              </>
            ) : (
              <>
                <span>Transmit Brief to Our Desk</span>
                <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
