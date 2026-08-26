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
    techStack: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'OpenPyXL', 'Advanced MS Excel', 'ETL Pipelines'],
    impactHighlight: '20% Error Mitigation & Automated Reporting',
    bullets: [
      'Extract, clean, and structure high-volume operational and corporate data sets using <span class="highlight-marker">Python (Pandas, NumPy)</span> and advanced MS Excel functions to conduct deep-dive exploratory data analysis (EDA).',
      'Architect automated data extraction pipelines and interactive Power BI / Excel reporting templates, significantly streamlining operational visibility and <span class="highlight-marker">mitigating reporting errors by 20%</span>.',
      'Query relational enterprise databases using structured <span class="highlight-marker">SQL pipelines</span> to extract key metrics across procurement, inventory aging, and supply chain telemetry.',
      'Collaborate directly with executive stakeholders to analyze workflow bottlenecks and interpret data trends, formulating actionable structural recommendations for operational optimizations.'
    ]
  },
  {
    id: 2,
    role: 'Data Analytics Virtual Intern',
    company: 'Tata iQ (via Forage)',
    location: 'Remote Simulation',
    period: '2025',
    techStack: ['GenAI Heuristics', 'Python', 'Predictive Modeling', 'Tableau', 'Risk Frameworks'],
    impactHighlight: 'Executive Risk & Data Visualization Simulation',
    bullets: [
      'Executed an immersive job simulation analyzing complex retail financial telemetry for the corporate Financial Services wing.',
      'Leveraged specialized <span class="highlight-marker">GenAI environments</span> to drive automated data analysis, calculate complex business risk frameworks, and sketch predictive algorithms.',
      'Drafted executive-ready data visualization dashboards and delivered strategic recommendations for leadership review.'
    ]
  },
  {
    id: 3,
    role: 'Cybersecurity Analyst Virtual Intern',
    company: 'Tata Consultancy Services (via Forage)',
    location: 'Remote Simulation',
    period: '2025',
    techStack: ['IAM Governance', 'RBAC Matrix', 'Zero Trust Architecture', 'Security Compliance'],
    impactHighlight: 'Enterprise Access Control & Policy Matrix',
    bullets: [
      'Completed an enterprise network access simulation mapping out <span class="highlight-marker">Identity and Access Management (IAM)</span> controls for corporate security positioning.',
      'Mastered fundamental IAM policies, Role-Based Access Control (RBAC), and zero-trust methods to align defensive positions with corporate compliance standards.',
      'Formulated risk mitigation blueprints protecting sensitive databases against unauthorized privilege escalations.'
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
            Experience & Internships
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
                maxTilt={5}
                spotlightColor="rgba(184, 255, 101, 0.3)"
                className="rounded-xl sm:rounded-2xl"
              >
                <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl border-3 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  {/* Header Row */}
                  <div className="sm:flex items-start justify-between mb-4 border-b-2 border-black pb-4 gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">{exp.role}</h3>
                        {exp.impactHighlight && (
                          <span className="bg-black text-[#B8FF65] border border-black text-[10.5px] font-black uppercase px-2.5 py-0.5 rounded shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                            ★ {exp.impactHighlight}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm sm:text-base text-gray-900 font-extrabold mt-0.5">
                        {exp.company} • <span className="text-gray-600 font-medium">{exp.location}</span>
                      </h4>
                    </div>
                    <span className="mt-2 sm:mt-0 font-mono text-xs sm:text-sm bg-[#B8FF65] text-black border-2 border-black inline-block px-3.5 py-1 rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0 self-start">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 list-disc list-inside text-xs sm:text-sm font-medium text-gray-800 mb-5">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: b }}></li>
                    ))}
                  </ul>

                  {/* Dedicated Tech Stack Sub-Badge Bar */}
                  <div className="pt-3.5 border-t border-gray-200 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-gray-500 mr-1 flex items-center gap-1">
                      <span>🛠️</span> Tech Stack:
                    </span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#B8FF65]/20 hover:bg-[#B8FF65] text-black font-extrabold text-[10.5px] sm:text-xs px-2.5 py-0.5 border border-black rounded-md shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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

