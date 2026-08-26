"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableTilt?: boolean;
  maxTilt?: number;
  scale?: number;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(184, 255, 101, 0.28)",
  enableTilt = true,
  maxTilt = 8,
  scale = 1.015,
  style,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [supportsHover, setSupportsHover] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSupportsHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!supportsHover || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePos({ x, y });

      if (enableTilt) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;
        setTilt({ rotateX, rotateY });
      }
    },
    [enableTilt, maxTilt, supportsHover]
  );

  const handleMouseEnter = () => {
    if (supportsHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (supportsHover) {
      setIsHovered(false);
      setTilt({ rotateX: 0, rotateY: 0 });
    }
  };

  const shouldApplyTilt = supportsHover && enableTilt && isHovered;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: supportsHover && enableTilt ? 1000 : undefined,
        ...style,
      }}
      className={`relative ${className}`}
      {...props}
    >
      <div
        style={{
          transform: shouldApplyTilt
            ? `rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
            : "none",
          transition: isHovered ? "transform 0.08s ease-out" : "transform 0.4s ease-out",
          transformStyle: supportsHover ? "preserve-3d" : "flat",
        }}
        className="w-full h-full relative rounded-[inherit]"
      >
        {/* Spotlight Radial Gradient Overlay - only on hover-capable desktop */}
        {supportsHover && (
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[inherit] overflow-hidden"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 65%)`,
              zIndex: 1,
            }}
          />
        )}

        {/* Card Content Container */}
        <div className="relative z-10 w-full h-full rounded-[inherit]">
          {children}
        </div>
      </div>
    </div>
  );
}
