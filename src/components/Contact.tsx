"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SpotlightCard from '@/components/SpotlightCard';

const contactLinks = [
  {
    icon: '📧',
    label: 'Direct Email',
    value: 'shivamjha9871@gmail.com',
    href: 'mailto:shivamjha9871@gmail.com?subject=Data%20Analytics%20Inquiry%20-%20Shivam%20Kumar%20Jha',
    cta: 'Click to Send Email ↗',
    isEmail: true,
  },
  {
    icon: '💼',
    label: 'LinkedIn Profile',
    value: 'shivamjha9871',
    href: 'https://www.linkedin.com/in/shivamjha9871',
    cta: 'Connect on LinkedIn ↗',
    isEmail: false,
  },
  {
    icon: '💻',
    label: 'GitHub Code Repos',
    value: 'shivamjha2o',
    href: 'https://github.com/shivamjha2o',
    cta: 'View GitHub Repos ↗',
    isEmail: false,
  },
];

const inquiryTopics = [
  '💼 Full-Time Role',
  '📊 Data & BI Project',
  '🤖 AI/ML Opportunity',
  '💬 General Inquiry',
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [selectedTopic, setSelectedTopic] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('shivamjha9871@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSelectTopic = (topic: string) => {
    setSelectedTopic(topic);
    if (!formData.message.startsWith(`[${topic}]`)) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `[${topic}] ${prev.message.replace(/^\[.*?\]\s*/, '')}` : `[${topic}] `,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all fields before submitting.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    const subjectText = selectedTopic ? `${selectedTopic} - From ${formData.name}` : `Portfolio Inquiry from ${formData.name}`;
    const mailtoUrl = `mailto:shivamjha9871@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger user's mail client as seamless direct link fallback
      try {
        window.location.href = mailtoUrl;
      } catch {
        // Ignored if blocked
      }

      setFormData({ name: '', email: '', message: '' });
      setSelectedTopic('');
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-transparent text-black border-t-3 border-black relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Prominent Live Availability Pill */}
          <div className="inline-flex items-center gap-2.5 bg-white border-2 sm:border-3 border-black px-4 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-5 hover:-translate-y-0.5 transition-transform select-none">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8FF65] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#B8FF65] border border-black"></span>
            </span>
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black">
              Available for Data Analytics & AI/ML Opportunities
            </span>
          </div>

          <h2 className="block text-3xl sm:text-5xl md:text-6xl font-black mb-4 uppercase tracking-tight bg-white text-black inline-block px-6 py-2.5 sm:px-8 sm:py-3 border-3 sm:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            Get In Touch
          </h2>

          <div>
            <p className="mt-4 sm:mt-6 text-gray-900 max-w-2xl mx-auto text-xs sm:text-base font-semibold bg-white p-4 sm:p-5 border-2 sm:border-3 border-black inline-block shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-xl leading-relaxed">
              Open for <span className="highlight-marker">Data Analytics</span>, <span className="highlight-marker">Business Intelligence</span>, and <span className="highlight-marker">AI/ML</span> roles. Have an opportunity or project? Let&apos;s connect!
            </p>
          </div>

          {/* Quick Credential / Status Chips */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 text-[11px] sm:text-xs font-bold text-black">
            <span className="bg-white px-3 py-1 border border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              ⚡ Rapid Response (&lt; 24 hrs)
            </span>
            <span className="bg-white px-3 py-1 border border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              📍 New Delhi, India • Remote & Relocation Open
            </span>
            <span className="bg-white px-3 py-1 border border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              💼 Full-Time & Contract Roles
            </span>
          </div>
        </motion.div>

        {/* 3 Contact Info Cards - All Clean White (No color in email box) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10 sm:mb-12">
          {contactLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="w-full"
            >
              <SpotlightCard
                enableTilt={true}
                maxTilt={6}
                spotlightColor="rgba(184, 255, 101, 0.35)"
                className="h-full rounded-2xl"
              >
                <div className="p-5 sm:p-6 bg-white border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center group h-full justify-between rounded-2xl active:translate-x-0.5 active:translate-y-0.5">
                  <div className="flex flex-col items-center w-full">
                    {/* Icon */}
                    <div className="text-3xl mb-2.5 bg-[#f8f9fa] group-hover:bg-[#B8FF65] p-3 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:scale-110">
                      {link.icon}
                    </div>

                    {/* Label */}
                    <span className="text-xs font-black uppercase tracking-wider text-black">
                      {link.label}
                    </span>

                    {/* Value */}
                    <span className="text-xs sm:text-sm font-extrabold text-black truncate max-w-full mt-1 px-1">
                      {link.value}
                    </span>

                    {/* One-click copy email button for direct email box */}
                    {link.isEmail && (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="mt-2 text-[10px] sm:text-[11px] font-bold text-gray-700 hover:text-black bg-neutral-100 hover:bg-[#B8FF65] px-2.5 py-1 rounded-md border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer flex items-center gap-1 active:scale-95"
                        title="Copy email address to clipboard"
                      >
                        <span>{copiedEmail ? '✓ Copied to clipboard!' : '📋 Copy Address'}</span>
                      </button>
                    )}
                  </div>

                  {/* Action Link Button */}
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-full mt-4 text-[11px] sm:text-xs font-black uppercase tracking-wider text-black bg-white group-hover:bg-black group-hover:text-white px-3 py-2 rounded-lg border-2 border-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block text-center"
                    title={link.cta}
                  >
                    {link.cta}
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Contact Form Container - Highly Prominent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full"
        >
          <SpotlightCard
            enableTilt={false}
            spotlightColor="rgba(184, 255, 101, 0.2)"
            className="w-full rounded-2xl sm:rounded-3xl"
          >
            <div className="bg-white p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              {/* Form Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-5 border-b-2 sm:border-b-3 border-black">
                <div>
                  <div className="inline-block mb-1">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest bg-black text-[#B8FF65] px-2.5 py-0.5 rounded border border-black">
                      INTERACTIVE CONTACT FORM
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight uppercase">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 mt-1">
                    Leave your contact details and message below. Expect a response within 24 hours.
                  </p>
                </div>

                <a
                  href="mailto:shivamjha9871@gmail.com?subject=Direct%20Inquiry%20from%20Portfolio"
                  className="inline-flex items-center gap-2 bg-[#B8FF65] hover:bg-black hover:text-[#B8FF65] text-black font-black text-xs uppercase tracking-wider px-4 py-2.5 border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all shrink-0 self-start sm:self-auto active:translate-x-0.5 active:translate-y-0.5"
                >
                  <span>✉️</span>
                  <span>Direct Mailto</span>
                  <span>↗</span>
                </a>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  /* Instant Inline Confirmation Message */
                  <motion.div
                    key="success-banner"
                    initial={{ opacity: 0, scale: 0.92, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: -15 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 24 }}
                    className="bg-[#B8FF65] p-6 sm:p-10 border-3 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center space-y-4 my-2"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: 'spring', stiffness: 450 }}
                      className="w-14 h-14 bg-black text-[#B8FF65] rounded-full flex items-center justify-center text-2xl font-black mx-auto border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      ✓
                    </motion.div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
                        Message Prepared!
                      </h3>
                      <p className="text-sm sm:text-base font-bold text-black/90 mt-1.5 max-w-md mx-auto">
                        Thank you for reaching out! Your email application was opened with this message, and I will respond to your inquiry promptly.
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                      <a
                        href="mailto:shivamjha9871@gmail.com"
                        className="bg-white hover:bg-black hover:text-white text-black font-black text-xs sm:text-sm uppercase tracking-wider py-2.5 px-5 rounded-xl border-2 border-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-1.5"
                      >
                        <span>Open Mail Client ↗</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="bg-black hover:bg-white text-white hover:text-black font-black text-xs sm:text-sm uppercase tracking-wider py-2.5 px-5 rounded-xl border-2 border-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Interactive Contact Form */
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5 sm:space-y-6"
                  >
                    {errorMsg && (
                      <div className="bg-red-100 border-2 border-red-500 text-red-900 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-[2px_2px_0px_0px_rgba(239,68,68,1)]">
                        ⚠️ {errorMsg}
                      </div>
                    )}

                    {/* Topic / Intent Filter Chips */}
                    <div>
                      <label className="block text-xs sm:text-sm font-black text-black mb-2 uppercase tracking-wide">
                        What is this regarding? <span className="text-gray-500 font-normal normal-case">(Click to select)</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {inquiryTopics.map((topic) => (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => handleSelectTopic(topic)}
                            className={`text-xs font-black px-3.5 py-1.5 rounded-lg border-2 border-black transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 ${
                              selectedTopic === topic
                                ? 'bg-black text-[#B8FF65]'
                                : 'bg-white text-black hover:bg-[#B8FF65]'
                            }`}
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email 2-Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm font-black text-black mb-1.5 uppercase tracking-wide">
                          Your Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#fafafa] focus:bg-white border-2 border-black px-4 py-3 text-xs sm:text-base text-black focus:outline-none focus:ring-4 focus:ring-[#B8FF65] transition-all placeholder:text-gray-400 font-semibold rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                          placeholder="e.g. John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-black text-black mb-1.5 uppercase tracking-wide">
                          Your Email <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#fafafa] focus:bg-white border-2 border-black px-4 py-3 text-xs sm:text-base text-black focus:outline-none focus:ring-4 focus:ring-[#B8FF65] transition-all placeholder:text-gray-400 font-semibold rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                          placeholder="john.smith@company.com"
                        />
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label htmlFor="message" className="block text-xs sm:text-sm font-black text-black mb-1.5 uppercase tracking-wide">
                        Message / Project Scope <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#fafafa] focus:bg-white border-2 border-black px-4 py-3 text-xs sm:text-base text-black focus:outline-none focus:ring-4 focus:ring-[#B8FF65] transition-all placeholder:text-gray-400 font-semibold rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] resize-none"
                        placeholder="Hi Shivam, I came across your data analytics portfolio and would like to discuss..."
                      ></textarea>
                    </div>

                    {/* Big Prominent Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white hover:bg-[#B8FF65] hover:text-black text-sm sm:text-base font-black uppercase tracking-widest py-4 sm:py-4.5 px-8 border-3 border-black rounded-xl sm:rounded-2xl transition-all shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            className="inline-block w-5 h-5 border-2 border-[#B8FF65] border-t-transparent rounded-full"
                          />
                          <span>Formatting Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <span className="inline-block text-lg leading-none">→</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

