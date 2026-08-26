"use client";

import React from 'react';
import { motion } from 'motion/react';

const technicalSkills = [
  { name: 'Python', icon: '🐍', category: 'Programming & Analysis' },
  { name: 'SQL (PostgreSQL / MySQL)', icon: '🗄️', category: 'Databases & Querying' },
  { name: 'Power BI (DAX & Dashboards)', icon: '📊', category: 'Business Intelligence' },
  { name: 'Tableau', icon: '📉', category: 'Business Intelligence' },
  { name: 'Pandas & NumPy', icon: '🐼', category: 'Programming & Analysis' },
  { name: 'Data Analysis (EDA)', icon: '📊', category: 'Programming & Analysis' },
  { name: 'Advanced MS Excel (VLOOKUP, Pivot)', icon: '📈', category: 'Programming & Analysis' },
  { name: 'Data Visualization & Storytelling', icon: '📉', category: 'Business Intelligence' },
  { name: 'ETL & Automated Pipelines', icon: '🔄', category: 'Programming & Analysis' },
  { name: 'GenAI & Agentic AI', icon: '🤖', category: 'AI & Automation' },
  { name: 'Cybersecurity & IAM', icon: '🔒', category: 'Security' },
  { name: 'HTML & Web Tech', icon: '🌐', category: 'Development' },
  { name: 'Graphic Design', icon: '🎨', category: 'Creative' },
  { name: 'Video Editing', icon: '🎬', category: 'Creative' },
  { name: 'MS PowerPoint (Decks)', icon: '📑', category: 'Communication' },
];

const coreCompetencies = [
  'Interpersonal Collaboration', 'Creative Problem-Solving', 
  'Strategic Communication', 'Critical Thinking', 'Business Requirement Mapping',
  'Cross-Functional Reporting'
];

const languages = [
  'English (Proficient)', 'Hindi (Native)'
];

const badgeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.06,
    },
  },
};

const badgeItemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 320,
      damping: 22,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-transparent text-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-black mb-4 uppercase tracking-tight bg-white text-black inline-block px-5 py-2 border-3 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Technical Skills & Competencies
          </h2>
        </motion.div>

        {/* Technical Infrastructure */}
        <div className="mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2 mb-4"
          >
            <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-black bg-white inline-block px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Core Technical Stack (Data, SQL & BI)
            </h3>
          </motion.div>

          <motion.div
            variants={badgeContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-wrap gap-2.5 sm:gap-3.5"
          >
            {technicalSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={badgeItemVariants}
                whileHover={{
                  scale: 1.08,
                  y: -3,
                  boxShadow: "0 0 0 3px #000000, 0 0 18px 4px rgba(184, 255, 101, 0.85), 3px 3px 0px 0px rgba(0,0,0,1)",
                  transition: { type: "spring", stiffness: 450, damping: 15 }
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-[#B8FF65] hover:bg-[#cbfd7a] text-black font-extrabold border-2 border-black rounded-full px-3.5 sm:px-4.5 py-1.5 sm:py-2 min-h-[38px] sm:min-h-[40px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer select-none transition-colors flex items-center gap-1.5 group"
              >
                {/* Glowing Accent Ring / Aura */}
                <span className="absolute -inset-1 rounded-full bg-[#B8FF65]/50 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none -z-10 blur-[3px]" />
                <span className="text-sm sm:text-base transition-transform group-hover:scale-125 group-hover:rotate-6 duration-200">{skill.icon}</span>
                <span className="text-xs sm:text-sm font-black">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Competencies & Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="text-base sm:text-lg font-black mb-4 uppercase tracking-wider text-black bg-white inline-block px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Core Competencies
              </h3>
            </motion.div>

            <motion.div
              variants={badgeContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex flex-wrap gap-2.5"
            >
              {coreCompetencies.map((comp) => (
                <motion.div
                  key={comp}
                  variants={badgeItemVariants}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                    boxShadow: "0 0 0 3px #000000, 0 0 16px 3px rgba(184, 255, 101, 0.75), 3px 3px 0px 0px rgba(0,0,0,1)",
                    transition: { type: "spring", stiffness: 450, damping: 15 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-[#B8FF65] hover:bg-[#cbfd7a] text-black border-2 border-black rounded-full px-3.5 py-1.5 min-h-[36px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black text-xs sm:text-sm cursor-pointer select-none transition-colors group flex items-center gap-1.5"
                >
                  <span className="absolute -inset-1 rounded-full bg-[#B8FF65]/40 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none -z-10 blur-[2px]" />
                  <span className="transition-transform group-hover:scale-125 duration-200">⚡</span>
                  <span>{comp}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="text-base sm:text-lg font-black mb-4 uppercase tracking-wider text-black bg-white inline-block px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Linguistic Proficiency
              </h3>
            </motion.div>

            <motion.div
              variants={badgeContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex flex-wrap gap-2.5"
            >
              {languages.map((lang) => (
                <motion.div
                  key={lang}
                  variants={badgeItemVariants}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                    boxShadow: "0 0 0 3px #000000, 0 0 16px 3px rgba(184, 255, 101, 0.75), 3px 3px 0px 0px rgba(0,0,0,1)",
                    transition: { type: "spring", stiffness: 450, damping: 15 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-[#B8FF65] hover:bg-[#cbfd7a] text-black border-2 border-black rounded-full px-3.5 py-1.5 min-h-[36px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black text-xs sm:text-sm cursor-pointer select-none transition-colors group flex items-center gap-1.5"
                >
                  <span className="absolute -inset-1 rounded-full bg-[#B8FF65]/40 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none -z-10 blur-[2px]" />
                  <span className="transition-transform group-hover:scale-125 duration-200">🗣️</span>
                  <span>{lang}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

