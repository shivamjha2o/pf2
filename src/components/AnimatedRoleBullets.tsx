"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';

interface BulletItem {
  label: string;
  value: string;
  badge?: string;
}

const items: BulletItem[] = [
  { label: 'Current Role', value: 'Data Analyst Intern', badge: 'Active' },
  { label: 'At Company', value: 'JK Paper Ltd.', badge: 'Corp' },
  { label: 'Specialization', value: 'GenAI & Analytics', badge: 'Tech' },
];

export default function AnimatedRoleBullets() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.15,
          },
        },
      }}
      className="flex flex-col gap-4 sm:gap-5"
    >
      {items.map((item, idx) => {
        const isHovered = hoveredIndex === idx;

        return (
          <motion.div
            key={item.label}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            variants={{
              hidden: { opacity: 0, x: -20, y: 8, filter: 'blur(3px)' },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                filter: 'blur(0px)',
                transition: {
                  type: 'spring',
                  stiffness: 280,
                  damping: 22,
                },
              },
            }}
            whileHover={{ x: 6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            className="group relative cursor-pointer select-none p-2 -mx-2 rounded-xl transition-all duration-200 hover:bg-black/5"
          >
            {/* Left Accent Indicator Bar on Hover */}
            <motion.div
              initial={false}
              animate={{
                height: isHovered ? '100%' : '0%',
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-0 w-1 bg-[#B8FF65] rounded-full border border-black"
            />

            {/* Label Row */}
            <div className="flex items-center gap-2 mb-1">
              <motion.span
                animate={isHovered ? { scale: [1, 1.35, 1], rotate: [0, 15, -10, 0] } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.35 }}
                className="w-2 h-2 rounded-full bg-[#B8FF65] border border-black inline-block shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
              />
              <p className="text-xs font-bold uppercase text-gray-500 tracking-wider group-hover:text-black transition-colors">
                {item.label}
              </p>

              {/* Hover Badge Pill */}
              <motion.span
                initial={{ opacity: 0, scale: 0.6, x: -5 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.6,
                  x: isHovered ? 0 : -5,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="text-[10px] font-black uppercase bg-[#B8FF65] text-black border border-black px-1.5 py-0.5 rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] ml-auto"
              >
                {item.badge}
              </motion.span>
            </div>

            {/* Value Row with Handwritten Cursive Font */}
            <div className="overflow-hidden py-0.5">
              <p className="font-handwritten text-2xl sm:text-3xl font-bold text-black leading-tight flex flex-wrap gap-x-2">
                {item.value.split(' ').map((word, wordIdx) => (
                  <motion.span
                    key={wordIdx}
                    animate={
                      isHovered
                        ? {
                            y: [-2, -6, 0],
                            rotate: [-1, 2, 0],
                          }
                        : { y: 0, rotate: 0 }
                    }
                    transition={{
                      duration: 0.35,
                      delay: wordIdx * 0.06,
                      ease: 'easeInOut',
                    }}
                    className="inline-block whitespace-nowrap"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
