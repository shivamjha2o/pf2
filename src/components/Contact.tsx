"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SpotlightCard from '@/components/SpotlightCard';

const contactLinks = [
  {
    icon: '📧',
    label: 'Email',
    value: 'shivamjha9871@gmail.com',
    href: 'mailto:shivamjha9871@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/shivamjha9871',
    href: 'https://www.linkedin.com/in/shivamjha9871',
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'github.com/shivamjha2o',
    href: 'https://github.com/shivamjha2o',
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

    // Simulate instant smooth processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 800);
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
            <p className="mt-4 sm:mt-6 text-gray-800 max-w-2xl mx-auto text-xs sm:text-base font-medium bg-white p-3 border border-black inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Open for <span className="highlight-marker">Data Analytics</span>, Electronics, and AI/ML opportunities. Feel free to reach out!
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
                maxTilt={6}
                spotlightColor="rgba(184, 255, 101, 0.4)"
                className="h-full"
              >
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#B8FF65] transition-colors flex flex-col items-center text-center group h-full justify-center"
                >
                  <span className="text-xl mb-1 bg-gray-100 group-hover:bg-white p-1 rounded border border-black transition-colors">
                    {link.icon}
                  </span>
                  <span className="text-xs font-bold uppercase text-gray-700">{link.label}</span>
                  <span className="text-xs sm:text-sm font-bold text-black truncate max-w-full">{link.value}</span>
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
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="w-full"
        >
          <SpotlightCard
            enableTilt={false}
            spotlightColor="rgba(184, 255, 101, 0.2)"
            className="w-full"
          >
            <div className="bg-white p-5 sm:p-12 border-3 sm:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
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
                        Message Received!
                      </h3>
                      <p className="text-sm sm:text-base font-bold text-black/90 mt-1.5 max-w-md mx-auto">
                        Thanks for reaching out! I&apos;ll get back to you shortly.
                      </p>
                    </div>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="bg-black hover:bg-white text-white hover:text-black font-black text-xs sm:text-sm uppercase tracking-wider py-3 px-6 rounded-xl border-2 border-black transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
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
                    className="space-y-4 sm:space-y-6"
                  >
                    {errorMsg && (
                      <div className="bg-red-100 border-2 border-red-500 text-red-900 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold shadow-[2px_2px_0px_0px_rgba(239,68,68,1)]">
                        ⚠️ {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-black mb-1.5 sm:mb-2 uppercase">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white border-2 border-black px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-base text-black focus:outline-none focus:ring-4 focus:ring-[#B8FF65] transition-colors placeholder:text-gray-400 font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-black mb-1.5 sm:mb-2 uppercase">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border-2 border-black px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-base text-black focus:outline-none focus:ring-4 focus:ring-[#B8FF65] transition-colors placeholder:text-gray-400 font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-black mb-1.5 sm:mb-2 uppercase">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        id="message" 
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white border-2 border-black px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-base text-black focus:outline-none focus:ring-4 focus:ring-[#B8FF65] transition-colors placeholder:text-gray-400 font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] resize-none"
                        placeholder="Hello Shivam, I'd like to connect regarding..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white hover:bg-[#B8FF65] hover:text-black text-xs sm:text-sm font-black uppercase tracking-widest py-3.5 sm:py-4 px-6 sm:px-8 border-2 border-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            className="inline-block w-4 h-4 border-2 border-[#B8FF65] border-t-transparent rounded-full"
                          />
                          <span>Sending Message...</span>
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
