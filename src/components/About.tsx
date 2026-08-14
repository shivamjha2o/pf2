"use client";

import React from 'react';
import { motion } from 'motion/react';
import SpotlightCard from '@/components/SpotlightCard';
import InteractiveMarquee from '@/components/InteractiveMarquee';
import VerticalMarquee from '@/components/VerticalMarquee';

const About = () => {
  return (
    <section id="about" className="bg-transparent text-black border-y-2 border-black relative overflow-hidden">
      
      {/* 1. TOP PROMINENT MARQUEE STRIP */}
      <div className="w-full bg-black text-[#B8FF65] border-b-2 sm:border-b-3 border-black font-black uppercase text-sm sm:text-base md:text-lg py-3 sm:py-3.5 shadow-[0_2px_0px_0px_rgba(0,0,0,1)] relative z-20">
        <InteractiveMarquee
          text="DATA ANALYST INTERN ✦ JK PAPER LTD. ✦ PYTHON & PANDAS ✦ EDA & DATA VISUALIZATION ✦ DU ARSD '27 ✦"
          baseSpeed={1.5}
          hoverSpeed={0.3}
          scrollSpeed={7}
          className="items-center"
        />
      </div>

      {/* 2. LEFT VERTICAL PROMINENT MARQUEE STRIP */}
      <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-14 sm:w-16 bg-black text-[#B8FF65] border-r-3 border-black font-black uppercase text-sm sm:text-base md:text-lg tracking-widest z-10 items-center justify-center shadow-[2px_0px_0px_0px_rgba(0,0,0,1)]">
        <VerticalMarquee
          text="✦ B.SC. PHYSICAL SCIENCE WITH ELECTRONICS ✦ PROBLEM SOLVER ✦ STREAMLIT ✦ COLLABORATION ✦"
          baseSpeed={1.3}
          hoverSpeed={0.3}
          scrollSpeed={6}
          className="text-sm sm:text-base md:text-lg font-black"
        />
      </div>

      {/* 3. RIGHT VERTICAL PROMINENT MARQUEE STRIP */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-14 sm:w-16 bg-black text-white border-l-3 border-black font-black uppercase text-sm sm:text-base md:text-lg tracking-widest z-10 items-center justify-center shadow-[-2px_0px_0px_0px_rgba(0,0,0,1)]">
        <VerticalMarquee
          text="✦ GENAI & NO-CODE ML ✦ DELINQUENCY PREDICTOR ✦ AGENTIC AI ✦ AUTOMATION WORKFLOWS ✦"
          reverse={true}
          baseSpeed={1.3}
          hoverSpeed={0.3}
          scrollSpeed={6}
          className="text-sm sm:text-base md:text-lg font-black"
        />
      </div>

      {/* MAIN CONTENT INNER CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-24 py-12 sm:py-20 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-black mb-4 uppercase tracking-tight bg-white text-black inline-block px-5 py-2 border-3 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="w-full"
          >
            <SpotlightCard
              enableTilt={true}
              maxTilt={5}
              spotlightColor="rgba(184, 255, 101, 0.3)"
              className="rounded-xl sm:rounded-2xl"
            >
              <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="bg-[#B8FF65] p-1 border-2 border-black rounded text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">💡</span> Professional Summary
                </h3>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                  Detail-oriented and analytical 2nd-year B.Sc. Physical Science with Electronics student at Delhi University, currently gaining practical corporate exposure as a <span className="highlight-marker">Data Analyst Intern</span> at <span className="font-bold">JK Paper Ltd.</span>
                </p>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium mt-3">
                  I combine a rigorous academic baseline in Physics, Mathematics, and Electronics with hands-on technical proficiencies in <span className="highlight-marker">Python script development</span>, advanced <span className="highlight-marker">data analytics workflows</span>, and AI-driven systems.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Education & Certifications Card */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="w-full"
            >
              <SpotlightCard
                enableTilt={true}
                maxTilt={5}
                spotlightColor="rgba(184, 255, 101, 0.3)"
                className="rounded-xl sm:rounded-2xl"
              >
                <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-black">🎓 Education</h3>
                    <span className="font-mono text-xs sm:text-sm bg-[#B8FF65] text-black border-2 border-black px-3 py-1 rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">2024 - Present</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900"><span className="highlight-marker">B.Sc. Physical Science</span> with Electronics</h4>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium"><span className="highlight-marker">Atma Ram Sanatana Dharma College</span>, Delhi University • New Delhi, India</p>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <span className="text-xs font-bold uppercase text-gray-500 block mb-1">Relevant Coursework</span>
                    <p className="text-xs sm:text-sm font-medium text-gray-800">Classical Mechanics, Electronics, Mathematical Physics, Digital Electronics</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="w-full"
            >
              <SpotlightCard
                enableTilt={true}
                maxTilt={5}
                spotlightColor="rgba(184, 255, 101, 0.3)"
                className="rounded-xl"
              >
                <div className="bg-white p-5 sm:p-6 rounded-xl border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <span className="bg-[#B8FF65] p-1 border-2 border-black rounded text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">📜</span> Certifications
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-black"><span className="highlight-marker">Microsoft Excel: Data Analysis</span> (Basic to Advanced)</p>
                  <p className="text-xs text-gray-600 font-medium mt-1">Udemy (2024) • Mastered Excel functions, pivot tables, VLOOKUP, and advanced analytics techniques.</p>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM PROMINENT MARQUEE STRIP */}
      <div className="w-full bg-black text-white border-t-2 sm:border-t-3 border-black font-black uppercase text-sm sm:text-base md:text-lg py-3 sm:py-3.5 shadow-[0_-2px_0px_0px_rgba(0,0,0,1)] relative z-20">
        <InteractiveMarquee
          text="✦ CYBERSECURITY & IAM ✦ ACCESS MATRIX ✦ MS EXCEL ADVANCED ✦ RISK SCORING ✦ 10,000+ PROFILES ANALYZED ✦"
          reverse={true}
          baseSpeed={1.5}
          hoverSpeed={0.3}
          scrollSpeed={7}
          className="items-center"
        />
      </div>

    </section>
  );
};

export default About;
