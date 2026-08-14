"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypewriterText({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1800,
  className = '',
}: TypewriterTextProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = texts[textIndex % texts.length];

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Pausing after complete word typed
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Switch to next text string
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div
      className={`inline-flex items-center justify-center gap-1 bg-[#B8FF65] text-black border-2 sm:border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-2 sm:px-7 sm:py-3 font-black uppercase text-base sm:text-2xl md:text-3xl tracking-tight select-none whitespace-nowrap ${className}`}
    >
      <span>{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        className="inline-block w-2.5 h-6 sm:h-8 bg-black ml-0.5"
      />
    </div>
  );
}
