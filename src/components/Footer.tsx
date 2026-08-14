"use client";

import React from 'react';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <footer className="bg-transparent py-12 border-t-4 border-black">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center"
      >
        <div className="mb-4 md:mb-0">
          <a href="#home" className="text-xl font-black text-black tracking-tight uppercase bg-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block hover:bg-[#B8FF65] transition-colors">
            Shivam <span className="underline decoration-2">Kumar Jha</span>
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/shivamjha2o" target="_blank" rel="noopener noreferrer" className="text-black hover:bg-[#B8FF65] font-bold uppercase text-xs sm:text-sm transition-colors bg-white px-3 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shivamjha9871" target="_blank" rel="noopener noreferrer" className="text-black hover:bg-[#B8FF65] font-bold uppercase text-xs sm:text-sm transition-colors bg-white px-3 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            LinkedIn
          </a>
          <a href="mailto:shivamjha9871@gmail.com" className="text-black hover:bg-[#B8FF65] font-bold uppercase text-xs sm:text-sm transition-colors bg-white px-3 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Email
          </a>
        </div>
      </motion.div>
      <div className="mt-8 text-center text-black font-bold text-xs sm:text-sm">
        <p>© {new Date().getFullYear()} Shivam Kumar Jha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
