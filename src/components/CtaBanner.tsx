"use client";

import React from 'react';
import { motion } from 'motion/react';

export default function CtaBanner() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white text-black p-6 sm:p-10 rounded-2xl sm:rounded-[28px] border-3 sm:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden group"
      >
        {/* Left Headline & Sub-Badge */}
        <div className="relative z-10 text-center lg:text-left max-w-2xl">
          <div className="inline-block mb-3">
            <span className="bg-black text-[#B8FF65] border-2 border-black text-[10.5px] sm:text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              READY FOR HIGH-IMPACT ANALYTICS?
            </span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-[32px] font-black uppercase tracking-tight text-black leading-tight sm:leading-tight">
            LET&apos;S BUILD INTELLIGENT DATA SOLUTIONS TOGETHER.
          </h2>
        </div>

        {/* Right Green Direct Email Button */}
        <div className="relative z-10 shrink-0 w-full sm:w-auto flex justify-center">
          <a
            href="mailto:shivamjha9871@gmail.com?subject=Opportunity%20Inquiry%20-%20Shivam%20Kumar%20Jha"
            className="w-full sm:w-auto bg-[#B8FF65] hover:bg-black hover:text-[#B8FF65] text-black font-black text-xs sm:text-sm md:text-base uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2.5 group/btn"
          >
            <span className="text-base sm:text-lg">✉</span>
            <span className="font-black">DIRECT EMAIL ME</span>
            <span className="text-base sm:text-lg group-hover/btn:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
