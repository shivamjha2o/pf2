"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function InteractiveMarquee({
  text,
  className = "",
  reverse = false,
  baseSpeed = 1,
  hoverSpeed = 0.2,
  scrollSpeed = 5
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
    let xPos = 0;
    let animationFrameId: number;

    const render = () => {
      if (!textRef.current || !containerRef.current) return;
      
      const width = textRef.current.offsetWidth / 2;
      const velocity = speed.current * (reverse ? -1 : 1);
      xPos -= velocity;
      
      if (xPos <= -width) {
        xPos += width;
      } else if (xPos >= 0) {
        xPos -= width;
      }
      
      gsap.set(textRef.current, { x: xPos });
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    const handleWheel = (e: WheelEvent) => {
      // scroll down -> e.deltaY > 0 -> backward -> direction = -1
      // scroll up -> e.deltaY < 0 -> forward -> direction = 1
      const direction = e.deltaY > 0 ? -1 : 1;
      
      // Override speed with directional scroll speed
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
      className={`flex overflow-hidden w-full whitespace-nowrap pointer-events-auto cursor-ew-resize ${className}`}
      onMouseEnter={() => { speed.current = hoverSpeed * (reverse ? -1 : 1); }}
      onMouseLeave={() => { speed.current = baseSpeed; }}
    >
      <div ref={textRef} className="flex flex-shrink-0 w-max">
        <div className="flex w-max">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="pr-3">{text}</span>
          ))}
        </div>
        <div className="flex w-max">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="pr-3">{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
