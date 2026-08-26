"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  // Using positive margin so counting starts smoothly when approaching viewport
  const isInView = useInView(ref, { once: true, margin: "100px 0px" });
  // Always initialize displayValue with the real value to ensure zero placeholder values are never permanently shown
  const [displayValue, setDisplayValue] = useState<number>(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = (currentTime - startTime) / (duration * 1000);
      const progress = Math.min(elapsed, 1);
      const easedProgress = easeOutExpo(progress);
      const currentVal = easedProgress * value;

      setDisplayValue(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    setDisplayValue(0);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      setDisplayValue(value);
    };
  }, [isInView, value, duration, hasAnimated]);

  const formattedNumber =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString();

  return (
    <span ref={ref} className={`font-mono font-black inline-block ${className}`}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}

interface StatItemProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
}

export function StatCard({ value, prefix = "", suffix = "", label, sublabel }: StatItemProps) {
  return (
    <div className="relative bg-white p-4 sm:p-5 border-2 sm:border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl flex flex-col justify-between cursor-default transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_0_0_2px_#000000,0_0_22px_rgba(184,255,101,0.65),6px_6px_0px_0px_rgba(0,0,0,1)] group overflow-hidden">
      {/* Subtle Glow & Shimmer Accent on Hover */}
      <span className="absolute -top-10 -right-10 w-24 h-24 bg-[#B8FF65]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="flex items-baseline gap-1 mb-1 relative z-10">
        <AnimatedCounter
          value={value}
          prefix={prefix}
          suffix={suffix}
          duration={1.8}
          className="text-2xl sm:text-4xl text-black group-hover:text-[#111111] transition-colors"
        />
      </div>
      <div className="relative z-10">
        <p className="text-xs sm:text-sm font-black uppercase tracking-tight text-black flex items-center justify-between">
          <span>{label}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF65] border border-black opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </p>
        {sublabel && <p className="text-[11px] font-semibold text-gray-500 mt-0.5">{sublabel}</p>}
      </div>
    </div>
  );
}

