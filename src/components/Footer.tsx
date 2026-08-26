"use client";

import React from 'react';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <footer className="bg-transparent py-10 sm:py-14 border-t-3 sm:border-t-4 border-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-gray-300">
          <div className="text-center md:text-left">
            <a 
              href="#home" 
              className="text-xl font-black text-black tracking-tight uppercase bg-white px-3.5 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block hover:bg-[#B8FF65] transition-colors"
            >
              Shivam Kumar Jha
            </a>
            <p className="text-xs font-bold text-gray-600 mt-1.5">
              Data Analyst • GenAI Builder • Electronics Student (DU ARSD &apos;27)
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

