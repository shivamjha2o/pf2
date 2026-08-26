"use client";

import React from 'react';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md py-10 sm:py-14 border-t-3 sm:border-t-4 border-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Top Footer Banner / Direct Mailto CTA */}
        <div className="bg-black text-white p-5 sm:p-7 rounded-2xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#B8FF65] bg-white/10 px-2.5 py-1 rounded">
              Ready for high-impact analytics?
            </span>
            <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-white mt-1.5">
              Let&apos;s build intelligent data solutions together.
            </h3>
          </div>
          <a
            href="mailto:shivamjha9871@gmail.com?subject=Opportunity%20Inquiry%20-%20Shivam%20Kumar%20Jha"
            className="bg-[#B8FF65] hover:bg-white text-black font-black text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-0.5 active:translate-y-0.5 shrink-0 flex items-center gap-2 group"
          >
            <span>✉️</span>
            <span>Direct Email Me</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-gray-200">
          <div className="text-center md:text-left">
            <a 
              href="#home" 
              className="text-xl font-black text-black tracking-tight uppercase bg-white px-3.5 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block hover:bg-[#B8FF65] transition-colors"
            >
              Shivam Kumar Jha
            </a>
            <p className="text-xs font-bold text-gray-600 mt-1.5">
              Data Analyst • GenAI Builder • Electronics Student
            </p>
          </div>

          {/* Social Profiles & Quick Actions */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3">
            <a 
              href="mailto:shivamjha9871@gmail.com" 
              className="text-black hover:bg-[#B8FF65] font-black uppercase text-xs transition-all bg-white px-3.5 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-lg active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-1.5"
            >
              <span>📧</span>
              <span>Email</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/shivamjha9871" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:bg-[#B8FF65] font-black uppercase text-xs transition-all bg-white px-3.5 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-lg active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-1.5"
            >
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/shivamjha2o" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:bg-[#B8FF65] font-black uppercase text-xs transition-all bg-white px-3.5 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-lg active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-1.5"
            >
              <span>💻</span>
              <span>GitHub</span>
            </a>
            <a 
              href="/Shivam_Kumar_Jha_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              download="Shivam_Kumar_Jha_Resume.pdf"
              className="text-black bg-[#B8FF65] hover:bg-black hover:text-[#B8FF65] font-black uppercase text-xs transition-all px-3.5 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-lg active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-1.5"
            >
              <span>📄</span>
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Copyright & Timestamp */}
        <div className="mt-6 text-center text-gray-700 font-bold text-xs">
          <p>© {new Date().getFullYear()} Shivam Kumar Jha • Built with Next.js, TypeScript & Neobrutalism Design</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

