"use client";

import React, { useEffect, useState } from 'react';
import DotGrid from '@/components/DotGrid';
import InteractiveMarquee from '@/components/InteractiveMarquee';
import StrokeText from '@/components/StrokeText';
import AnimatedRoleBullets from '@/components/AnimatedRoleBullets';
import TypewriterText from '@/components/TypewriterText';
import ParticleStarfield from '@/components/ParticleStarfield';

const Hero = () => {
  const [fontSize, setFontSize] = useState(96);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setFontSize(52);
      } else if (window.innerWidth < 768) {
        setFontSize(68);
      } else if (window.innerWidth < 1024) {
        setFontSize(84);
      } else {
        setFontSize(96);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between text-black pt-20 pb-10 relative bg-transparent overflow-hidden select-none"
    >
      {/* Interactive Background Layer: Dot Grid + Particle Starfield */}
      <div className="absolute inset-0 z-0 opacity-60">
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
        <ParticleStarfield />
      </div>

      {/* Infinite Marquee Ticker Strips running in background (Bold & Prominent across Mobile & Desktop) */}
      <div className="flex absolute top-1/2 right-0 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] lg:w-[950px] lg:h-[950px] pointer-events-none z-[1] lg:z-10 translate-x-1/4 sm:translate-x-1/4 -translate-y-1/2 opacity-90 sm:opacity-95 lg:opacity-100 justify-center items-center overflow-visible">
        {/* Strip 1: Black BG, White Text */}
        <div className="absolute top-1/2 left-1/2 w-[280%] -translate-x-1/2 -translate-y-1/2 -rotate-35 sm:-rotate-45 bg-black text-white border-y-3 sm:border-y-4 border-black font-black uppercase text-sm sm:text-lg md:text-2xl py-2.5 sm:py-3.5 flex shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-none lg:pointer-events-auto">
          <InteractiveMarquee
            text="DATA ANALYTICS ✦ OPEN TO WORK ✦"
            baseSpeed={1.5}
            hoverSpeed={0.3}
            scrollSpeed={8}
            className="items-center"
          />
        </div>

        {/* Strip 2: Accent BG, Black Text */}
        <div className="absolute top-1/2 left-1/2 w-[280%] -translate-x-1/2 -translate-y-1/2 rotate-35 sm:rotate-45 bg-[#B8FF65] text-black border-y-3 sm:border-y-4 border-black font-black uppercase text-sm sm:text-lg md:text-2xl py-2.5 sm:py-3.5 flex shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-none lg:pointer-events-auto">
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

        {/* Journey Bullets with Text Motion */}
        <AnimatedRoleBullets />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 w-full flex-1 flex flex-col justify-center items-center relative z-10">
        {/* Mobile-only Paper Tape Note */}
        <div className="lg:hidden mb-3 self-start">
          <div className="bg-white border-2 border-black px-3.5 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] relative inline-block -rotate-2 rounded-lg">
            <p className="font-black text-xs tracking-tight text-black">DU ARSD '27 • New Delhi</p>
          </div>
        </div>

        {/* ANIMATED STROKE NAME DISPLAY */}
        <div className="w-full max-w-4xl mb-3 sm:mb-6 z-20 px-2 flex justify-center items-center overflow-hidden">
          <StrokeText
            text="Shivam Kumar Jha"
            strokeColor="#000000"
            fillColor="#000000"
            strokeWidth={2.4}
            drawDuration={1.2}
            fillDelay={0.1}
            stagger={0.03}
            ease="power2.out"
            trigger="mount"
            fillMode="fade"
            fontSize={fontSize}
            fontWeight={900}
            letterSpacing={-1}
            className="font-extrabold tracking-tight text-center drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)]"
          />
        </div>

        {/* "I'M A" + TYPEWRITER CYCLING ROLE PILL */}
        <div className="my-2 flex flex-wrap justify-center items-center gap-2.5 sm:gap-4 relative z-20 w-full px-2">
          <span className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black whitespace-nowrap drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
            I'm a
          </span>
          <TypewriterText
            texts={['DATA ANALYST INTERN', 'GENAI BUILDER', 'ELECTRONICS STUDENT', 'PROBLEM SOLVER']}
            typingSpeed={75}
            deletingSpeed={45}
            pauseDuration={1800}
          />
        </div>

        {/* Mobile-only Animated Role Bullets Display */}
        <div className="lg:hidden mt-5 w-full max-w-md bg-white/95 border-3 border-black p-4 sm:p-5 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] backdrop-blur-md">
          <AnimatedRoleBullets />
        </div>
      </div>

      {/* Hero Bottom Buttons */}
      <div className="flex justify-center gap-3.5 sm:gap-4 relative z-20 px-4 mt-6">
        <a
          href="#projects"
          className="bg-black hover:bg-[#B8FF65] hover:text-black text-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm rounded-full font-black uppercase tracking-wider transition-all border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 whitespace-nowrap"
        >
          View My Projects
        </a>
        <a
          href="#about"
          className="bg-white hover:bg-gray-100 text-black px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm rounded-full font-black uppercase tracking-wider transition-all border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 whitespace-nowrap"
        >
          About Me
        </a>
      </div>
    </section>
  );
};

export default Hero;

