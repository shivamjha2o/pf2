"use client";

import React from 'react';
import RotatingText from '@/components/RotatingText';
import DotGrid from '@/components/DotGrid';
import CircularText from '@/components/CircularText';
import InteractiveMarquee from '@/components/InteractiveMarquee';
import StrokeText from '@/components/StrokeText';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between text-black pt-20 pb-10 relative bg-transparent overflow-hidden select-none"
    >
      {/* Interactive Dot Grid Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <DotGrid
          dotSize={3}
          gap={20}
          baseColor="#2f293a"
          activeColor="#B8FF65"
          proximity={120}
          speedTrigger={50}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Crossed Marquees at Right Side */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] md:w-[900px] md:h-[900px] pointer-events-none z-10 translate-x-1/4 -translate-y-1/2 opacity-90 flex justify-center items-center">
        {/* Strip 1: Black BG, White Text */}
        <div className="absolute top-1/2 left-1/2 w-[200%] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-black text-white border-y-2 sm:border-y-4 border-black font-black uppercase text-lg md:text-2xl py-2 md:py-3.5 flex shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-auto">
          <InteractiveMarquee
            text="DATA ANALYTICS ✦ OPEN TO WORK ✦"
            baseSpeed={1.5}
            hoverSpeed={0.3}
            scrollSpeed={8}
            className="items-center"
          />
        </div>

        {/* Strip 2: Accent BG, Black Text */}
        <div className="absolute top-1/2 left-1/2 w-[200%] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#B8FF65] text-black border-y-2 sm:border-y-4 border-black font-black uppercase text-lg md:text-2xl py-2 md:py-3.5 flex shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-auto">
          <InteractiveMarquee
            text="GEN AI BUILDER ✦ PROBLEM SOLVER ✦"
            baseSpeed={1.5}
            hoverSpeed={0.3}
            scrollSpeed={8}
            reverse={true}
            className="items-center"
          />
        </div>
      </div>
      {/* Absolute Viewport-level Left Sidebar */}
      <div className="hidden lg:flex flex-col gap-10 absolute left-4 sm:left-6 md:left-8 top-32 xl:top-40 z-20 text-left max-w-[260px]">
        {/* Paper Tape Note */}
        <div className="bg-white border-2 border-black p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] relative max-w-[190px] -rotate-3 mb-2 hover:-rotate-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-default group">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-200/80 border border-black/30 backdrop-blur-sm -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
          <p className="font-extrabold text-base sm:text-lg tracking-tight text-black">DU ARSD '27</p>
          <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-0.5">New Delhi, India</p>
        </div>

        {/* Journey Bullets */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-1">Current Role</p>
            <p className="font-handwritten text-3xl font-bold text-black leading-tight">Data Analyst Intern</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-1">At Company</p>
            <p className="font-handwritten text-3xl font-bold text-black leading-tight">JK Paper Ltd.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-1">Specialization</p>
            <p className="font-handwritten text-3xl font-bold text-black leading-tight">GenAI & Analytics</p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 w-full flex-1 flex flex-col justify-center items-center relative z-10">

        {/* Mobile-only Paper Tape Note */}
        <div className="lg:hidden mb-4 self-start">
          <div className="bg-white border-2 border-black px-3 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] relative inline-block -rotate-2">
            <p className="font-extrabold text-xs tracking-tight text-black">DU ARSD '26 • New Delhi</p>
          </div>
        </div>

        {/* ANIMATED STROKE NAME DISPLAY */}
        <div className="w-full max-w-4xl mb-4 sm:mb-6 z-20 px-2 flex justify-center items-center">
          <StrokeText
            text="Shivam Kumar Jha"
            strokeColor="#000000"
            fillColor="#000000"
            strokeWidth={2.2}
            drawDuration={1.6}
            fillDelay={0.2}
            stagger={0.05}
            ease="power2.out"
            trigger="scroll"
            fillMode="wipe"
            fontSize={96}
            fontWeight={900}
            letterSpacing={-1}
            className="font-extrabold tracking-tight text-center"
          />
        </div>

        {/* "I'M A" + ROTATING ROLE PILL */}
        <div className="my-2 flex flex-row justify-center items-center gap-3 sm:gap-4 relative z-20 w-full px-2">
          <span className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black whitespace-nowrap">
            I'm a
          </span>
          <RotatingText
            texts={['DATA ANALYST INTERN', 'GENAI BUILDER', 'ELECTRONICS STUDENT', 'PROBLEM SOLVER']}
            mainClassName="px-4 py-2 sm:px-8 sm:py-3.5 bg-[#B8FF65] text-black overflow-hidden border-2 sm:border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight justify-center"
            staggerFrom="last"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            rotationInterval={2600}
            splitBy="characters"
            auto
            loop
          />
        </div>

      </div>

      {/* Hero Bottom Buttons */}
      <div className="flex justify-center gap-4 relative z-20 px-4 mt-6">
        <a href="#projects" className="bg-black hover:bg-gray-800 text-white px-6 py-3 text-xs sm:text-sm rounded-full font-bold transition-all border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
          View My Projects
        </a>
        <a href="#about" className="bg-white hover:bg-gray-100 text-black px-6 py-3 text-xs sm:text-sm rounded-full font-bold transition-all border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] whitespace-nowrap">
          About Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
