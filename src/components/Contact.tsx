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
    isPrimary: true,
  },
  {
    icon: '💼',
    label: 'LinkedIn Profile',
    value: 'shivamjha9871',
    href: 'https://www.linkedin.com/in/shivamjha9871',
    cta: 'Connect on LinkedIn ↗',
    isPrimary: false,
  },
  {
    icon: '💻',
    label: 'GitHub Code Repos',
    value: 'shivamjha2o',
    href: 'https://github.com/shivamjha2o',
    cta: 'View GitHub Repos ↗',
    isPrimary: false,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

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

    // Build mailto fallback url
    const mailtoUrl = `mailto:shivamjha9871@gmail.com?subject=${encodeURIComponent(`Portfolio Message from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

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
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-transparent text-black border-t-2 border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-black mb-4 uppercase tracking-tight bg-white text-black inline-block px-5 py-2 border-3 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Get In Touch
          </h2>
          <div>
            <p className="mt-4 sm:mt-6 text-gray-800 max-w-2xl mx-auto text-xs sm:text-base font-medium bg-white p-3.5 border-2 border-black inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Open for <span className="highlight-marker">Data Analytics</span>, <span className="highlight-marker">Business Intelligence</span>, and <span className="highlight-marker">AI/ML</span> roles. Let&apos;s build together!
            </p>
          </div>
        </motion.div>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
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
                maxTilt={5}
                spotlightColor="rgba(184, 255, 101, 0.4)"
                className="h-full"
              >
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-4 sm:p-5 border-2 sm:border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col items-center text-center group h-full justify-between rounded-xl active:translate-x-0.5 active:translate-y-0.5 ${
                    link.isPrimary 
                      ? 'bg-[#B8FF65] hover:bg-[#cbfd7a]' 
                      : 'bg-white hover:bg-[#B8FF65]'
                  }`}
                  title={link.cta}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-2xl mb-1.5 bg-white p-2 rounded-lg border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:scale-110">
                      {link.icon}
                    </span>
                    <span className="text-xs font-black uppercase tracking-wider text-black">{link.label}</span>
                    <span className="text-xs sm:text-sm font-extrabold text-black truncate max-w-full mt-0.5">{link.value}</span>
                  </div>
                  <span className="text-[10.5px] font-black uppercase text-black bg-white/80 group-hover:bg-black group-hover:text-white px-2.5 py-0.5 rounded border border-black transition-colors mt-3">
                    {link.cta}
                  </span>
                </a>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Contact Form Container */}
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
            className="w-full rounded-2xl"
          >
            <div className="bg-white p-5 sm:p-10 rounded-2xl border-3 sm:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              {/* Form Title */}
              <div className="mb-6 pb-4 border-b-2 border-black">
                <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight uppercase">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm font-medium text-gray-600 mt-0.5">
                  Leave your contact details and message below.
                </p>
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
                        Thank you for reaching out! Your message was formatted and I will respond to your email promptly.
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
                    className="space-y-4 sm:space-y-5"
                  >
                    {errorMsg && (
                      <div className="bg-red-100 border-2 border-red-500 text-red-900 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-[2px_2px_0px_0px_rgba(239,68,68,1)]">
                        ⚠️ {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-black mb-1.5 uppercase">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white border-2 border-black px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-base text-black focus:outline-none focus:ring-4 focus:ring-[#B8FF65] transition-all placeholder:text-gray-400 font-medium rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          placeholder="e.g. John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-black mb-1.5 uppercase">
                          Your Email <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border-2 border-black px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-base text-black focus:outline-none focus:ring-4 focus:ring-[#B8FF65] transition-all placeholder:text-gray-400 font-medium rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          placeholder="john.smith@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-black mb-1.5 uppercase">
                        Message / Project Scope <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        id="message" 
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white border-2 border-black px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-base text-black focus:outline-none focus:ring-4 focus:ring-[#B8FF65] transition-all placeholder:text-gray-400 font-medium rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] resize-none"
                        placeholder="Hi Shivam, I came across your portfolio and would like to discuss an opportunity..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white hover:bg-[#B8FF65] hover:text-black text-xs sm:text-sm font-black uppercase tracking-widest py-3.5 sm:py-4 px-6 border-2 border-black rounded-xl transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            className="inline-block w-4 h-4 border-2 border-[#B8FF65] border-t-transparent rounded-full"
                          />
                          <span>Formatting Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <span className="inline-block text-base leading-none">→</span>
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

