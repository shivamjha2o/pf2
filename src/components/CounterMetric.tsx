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
  duration = 2,
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    // Smooth easeOutExpo curve for realistic count-up acceleration and gentle stop
    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progress);
      const currentVal = easedProgress * value;

      setDisplayValue(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  const formattedNumber =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.floor(displayValue).toLocaleString();

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
    <div className="bg-white p-4 sm:p-5 border-2 sm:border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl flex flex-col justify-between hover:translate-x-[2px] hover:translate-y-[2px] transition-all group">
      <div className="flex items-baseline gap-1 mb-1">
        <AnimatedCounter
          value={value}
          prefix={prefix}
          suffix={suffix}
          duration={2.2}
          className="text-2xl sm:text-4xl text-black group-hover:text-[#2f293a] transition-colors"
        />
      </div>
      <div>
        <p className="text-xs sm:text-sm font-black uppercase tracking-tight text-black">{label}</p>
        {sublabel && <p className="text-[11px] font-semibold text-gray-500 mt-0.5">{sublabel}</p>}
      </div>
    </div>
  );
}
