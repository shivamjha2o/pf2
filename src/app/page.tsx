"use client";

import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PillNav from '@/components/PillNav';

export default function Home() {
  const [activeSection, setActiveSection] = useState('#home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // Trigger threshold offset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(`#${sectionIds[i]}`);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen text-black relative bg-[#f8f9fa]">
      <div className="fixed top-4 left-0 w-full z-[1000] flex justify-center pointer-events-none">
        <div className="pointer-events-auto w-full px-4 md:w-auto md:px-0">
          <PillNav
            logo="/Group 7.png"
            logoAlt="Shivam Kumar Jha Logo"
            items={navItems}
            activeHref={activeSection}
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#B8FF65"
            pillTextColor="#000000"
          />
        </div>
      </div>
      <Hero />
      <div className="bg-dot-pattern">
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
