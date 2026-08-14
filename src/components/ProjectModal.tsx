"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  year: string;
  metricValue: number;
  metricSuffix: string;
  metricLabel: string;
  desc: string;
  overview: string;
  tools: string[];
  workflow: string[];
  impact: string[];
  githubUrl?: string;
  tags: string[];
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Lock background scroll and prevent scroll chaining when modal is active
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-hidden overscroll-contain"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Card Container with Isolated Scroll */}
          <motion.div
            data-lenis-prevent="true"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white border-3 sm:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-2xl sm:rounded-3xl p-5 sm:p-8 z-10 max-h-[85vh] overflow-y-auto overscroll-contain text-black"
          >
            {/* Header with Close Button */}
            <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b-2 border-black sticky -top-5 sm:-top-8 bg-white pt-2 z-20">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider bg-[#B8FF65] text-black px-3 py-1 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold bg-black text-white px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-xl sm:text-3xl font-black tracking-tight">{project.title}</h3>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 bg-gray-100 hover:bg-[#B8FF65] border-2 border-black rounded-full font-black text-base sm:text-lg flex items-center justify-center transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Case Study Deep-Dive */}
            <div className="space-y-6">
              {/* Executive Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-1.5 flex items-center gap-1">
                  <span>📌</span> Executive Summary
                </h4>
                <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Architecture & Workflow */}
              <div className="bg-[#f9fafb] border-2 border-black rounded-xl p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="text-xs font-black uppercase tracking-wider text-black mb-3 flex items-center gap-1.5">
                  <span>⚙️</span> Architecture & Implementation Workflow
                </h4>
                <div className="space-y-2.5">
                  {project.workflow.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-gray-800">
                      <span className="w-5 h-5 rounded-full bg-black text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        {idx + 1}
                      </span>
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-2 flex items-center gap-1">
                  <span>🛠️</span> Exact Tools & Stack Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-white hover:bg-[#B8FF65] text-black font-extrabold text-xs px-3 py-1.5 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Impact & Results */}
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-2 flex items-center gap-1">
                  <span>📈</span> Key Business Outcomes
                </h4>
                <ul className="space-y-2 list-disc list-inside text-xs sm:text-sm font-medium text-gray-800">
                  {project.impact.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t-2 border-black flex flex-wrap gap-3 sticky -bottom-5 sm:-bottom-8 bg-white pb-2">
                <a
                  href={project.githubUrl || "https://github.com/shivamjha2o"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-[#B8FF65] text-white hover:text-black font-black text-xs sm:text-sm uppercase tracking-wider px-5 py-2.5 rounded-xl border-2 border-black transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>💻</span> View on GitHub
                </a>
                <button
                  onClick={onClose}
                  className="bg-white hover:bg-gray-100 text-black font-black text-xs sm:text-sm uppercase tracking-wider px-5 py-2.5 rounded-xl border-2 border-black transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 ml-auto cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
