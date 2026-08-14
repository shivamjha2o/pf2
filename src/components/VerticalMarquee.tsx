"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VerticalMarquee({
  text,
  className = "",
  reverse = false,
  baseSpeed = 1,
  hoverSpeed = 0.2,
  scrollSpeed = 4
}: {
  text: string;
  className?: string;
  reverse?: boolean;
  baseSpeed?: number;
  hoverSpeed?: number;
  scrollSpeed?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const speed = useRef(baseSpeed);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let yPos = 0;
    let animationFrameId: number;

    const render = () => {
      if (!textRef.current || !containerRef.current) return;

      const height = textRef.current.offsetHeight / 2;
      if (height <= 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const velocity = speed.current * (reverse ? -1 : 1);
      yPos -= velocity;

      if (yPos <= -height) {
        yPos += height;
      } else if (yPos >= 0) {
        yPos -= height;
      }

      gsap.set(textRef.current, { y: yPos });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleWheel = (e: WheelEvent) => {
      const direction = e.deltaY > 0 ? -1 : 1;
      speed.current = scrollSpeed * direction * (reverse ? -1 : 1);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        speed.current = baseSpeed;
      }, 150);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("wheel", handleWheel);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [reverse, baseSpeed, scrollSpeed]);

  return (
    <div
      ref={containerRef}
      className={`flex overflow-hidden h-full w-full whitespace-nowrap pointer-events-auto cursor-ns-resize select-none items-center justify-center ${className}`}
      onMouseEnter={() => { speed.current = hoverSpeed * (reverse ? -1 : 1); }}
      onMouseLeave={() => { speed.current = baseSpeed; }}
    >
      <div ref={textRef} className="flex flex-col flex-shrink-0 h-max [writing-mode:vertical-rl] items-center justify-center text-center">
        <div className="flex flex-col h-max items-center">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="py-6 tracking-widest text-sm sm:text-base md:text-lg font-black uppercase inline-block whitespace-nowrap">{text}</span>
          ))}
        </div>
        <div className="flex flex-col h-max items-center">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="py-6 tracking-widest text-sm sm:text-base md:text-lg font-black uppercase inline-block whitespace-nowrap">{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
