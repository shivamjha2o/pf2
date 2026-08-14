"use client";

import React from 'react';
import { motion } from 'motion/react';
import SpotlightCard from '@/components/SpotlightCard';

const experienceData = [
  {
    id: 1,
    role: 'Data Analyst Intern',
    company: 'JK Paper Ltd. (Head Office)',
    location: 'New Delhi, India',
    period: 'June 2026 - Present',
    bullets: [
      'Extract and structure complex operational and corporate data sets using <span class="highlight-marker">Python (Pandas, NumPy)</span> and advanced MS Excel functions to conduct deep-dive exploratory data analysis (EDA).',
      'Develop automated data extraction pipelines and interactive reporting templates, significantly streamlining performance visibility and <span class="highlight-marker">mitigating errors by 20%</span>.',
      'Collaborate directly with senior decision-makers to cross-examine core workflow constraints, interpreting data trends to formulate structural recommendations for supply and planning optimizations.'
    ]
  },
  {
    id: 2,
    role: 'Data Analytics Virtual Intern',
    company: 'Tata iQ (via Forage)',
    location: 'Remote',
    period: '2025',
    bullets: [
      'Executed an immersive job simulation analyzing data trends for the corporate Financial Services wing.',
      'Leveraged specialized <span class="highlight-marker">GenAI environments</span> to drive automated data analysis, calculate complex business risk frameworks, and sketch predictive algorithms.'
    ]
  },
  {
    id: 3,
    role: 'Cybersecurity Analyst Virtual Intern',
    company: 'Tata Consultancy Services (via Forage)',
    location: 'Remote',
    period: '2025',
    bullets: [
      'Completed an enterprise network access simulation mapping out <span class="highlight-marker">Identity and Access Management (IAM)</span> controls for corporate security positioning.',
      'Mastered fundamental IAM policies, security compliance frameworks, and methods to match system defenses with organizational objectives.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-transparent text-black border-y-2 border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-black mb-4 uppercase tracking-tight bg-white text-black inline-block px-5 py-2 border-3 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="relative"
            >
              <SpotlightCard
                enableTilt={true}
                maxTilt={6}
                spotlightColor="rgba(184, 255, 101, 0.3)"
                className="rounded-xl"
              >
                <div className="bg-white p-5 sm:p-8 rounded-xl border-3 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="sm:flex items-start justify-between mb-4 border-b border-gray-200 pb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-black">{exp.role}</h3>
                      <h4 className="text-base sm:text-lg text-gray-800 font-bold mt-0.5">{exp.company} • <span className="text-gray-600 font-normal">{exp.location}</span></h4>
                    </div>
                    <span className="mt-2 sm:mt-0 font-mono text-xs sm:text-sm bg-[#B8FF65] text-black border-2 border-black inline-block px-3.5 py-1 rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-xs sm:text-sm font-medium text-gray-800">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: b }}></li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
