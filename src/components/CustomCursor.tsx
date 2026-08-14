"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring physics for the outer follower ring
  const springX = useSpring(mouseX, { damping: 26, stiffness: 320, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 26, stiffness: 320, mass: 0.5 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Accessibility & Performance checks:
    // 1. Disable on touch/mobile devices
    // 2. Disable if user prefers reduced motion
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Detect if hovering over clickable or interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor="hover"]'
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!enabled || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Outer Follower Ring */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 2.2 : 1,
          borderColor: isHovered ? '#B8FF65' : '#000000',
          backgroundColor: isHovered ? 'rgba(184, 255, 101, 0.18)' : 'rgba(0, 0, 0, 0.04)',
          borderWidth: isHovered ? '2px' : '1.5px',
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 360 }}
        className="fixed w-8 h-8 rounded-full border border-black shadow-[0_0_14px_rgba(184,255,101,0.5)] backdrop-blur-[0.5px]"
      />

      {/* Inner Precision Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.5 : isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? '#B8FF65' : '#000000',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 450 }}
        className="fixed w-2 h-2 rounded-full border border-black/40 shadow-sm"
      />
    </div>
  );
}
