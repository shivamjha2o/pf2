"use client";

import React from 'react';
import { motion } from 'motion/react';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import SpotlightCard from '@/components/SpotlightCard';
import { AnimatedCounter, StatCard } from '@/components/CounterMetric';

const statsData = [
  { value: 10000, suffix: '+', label: 'Profiles Analyzed', sublabel: 'Risk Prediction' },
  { value: 15, suffix: '%', label: 'Accuracy Boost', sublabel: 'GenAI Anomaly Detection' },
  { value: 22, suffix: '%', label: 'Lag Reduction', sublabel: 'Workflow Automation' },
  { value: 20, suffix: '%', label: 'Error Mitigation', sublabel: 'Data Extraction Pipelines' },
];

const projectsData = [
  {
    id: 1,
    title: 'Customer Delinquency Risk Predictor',
    category: 'GenAI & No-Code ML',
    year: '2025',
    metricValue: 10000,
    metricSuffix: '+',
    metricLabel: 'Data Profiles Evaluated',
    desc: 'Engineered a no-code predictive modeling architecture using GenAI modules to evaluate customer default exposure across <span class="highlight-marker">10,000+ data profiles</span>. Accelerated high-risk anomaly accuracy by <span class="highlight-marker">15%</span>.',
    tags: ['GenAI', 'No-Code ML', 'Exploratory Analytics', 'Risk Scoring']
  },
  {
    id: 2,
    title: 'AI-Driven Collections Strategy',
    category: 'Agentic AI & Automation Workflows',
    year: '2025',
    metricValue: 22,
    metricSuffix: '%',
    metricLabel: 'Response Lag Reduced',
    desc: 'Designed an end-to-end automated collection framework backed by <span class="highlight-marker">agentic AI networks</span>. Secured a target <span class="highlight-marker">22% reduction</span> in tracking response lag times while matching ethical compliance structures.',
    tags: ['Agentic AI', 'Automation', 'Workflow Optimization', 'Compliance']
  },
  {
    id: 3,
    title: 'IAM Security Framework',
    category: 'Cybersecurity Enterprise Simulation',
    year: '2025',
    metricValue: 3,
    metricSuffix: ' Domains',
    metricLabel: 'Enterprise Security Matrix',
    desc: 'Built an enterprise-level Identity and Access Management matrix managing access control across <span class="highlight-marker">3 separate business domains</span>. Authored system technical blueprints and threat mitigation decks.',
    tags: ['Cybersecurity', 'IAM Controls', 'Access Matrix', 'Security Architecture']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="pt-16 pb-36 sm:pt-24 sm:pb-52 bg-transparent text-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight bg-white text-black inline-block px-6 py-2.5 border-3 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Technical Projects
          </h2>
        </motion.div>

        {/* Animated Impact Counter Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          {statsData.map((stat, i) => (
            <StatCard
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
            />
          ))}
        </motion.div>

        {/* ScrollStack Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="w-full"
        >
          <ScrollStack
            useWindowScroll={true}
            itemDistance={60}
            itemScale={0.04}
            itemStackDistance={25}
            stackPosition="24%"
            scaleEndPosition="14%"
            baseScale={0.9}
            blurAmount={0}
          >
            {projectsData.map((project) => (
              <ScrollStackItem key={project.id} itemClassName="!my-6">
                <SpotlightCard
                  enableTilt={true}
                  maxTilt={7}
                  spotlightColor="rgba(184, 255, 101, 0.35)"
                  className="w-full h-full"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex justify-between items-center gap-2 mb-4 pb-3 border-b-2 border-black">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black bg-[#B8FF65] px-3 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold bg-black text-white px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {project.year}
                      </span>
                    </div>

                    <div className="my-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                        <h3 className="text-xl sm:text-3xl font-black tracking-tight">{project.title}</h3>
                        <div className="bg-black text-[#B8FF65] border border-black px-2.5 py-0.5 rounded shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] self-start sm:self-auto shrink-0">
                          <AnimatedCounter value={project.metricValue} suffix={project.metricSuffix} className="text-xs sm:text-sm" />
                        </div>
                      </div>
                      <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: project.desc }}></p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-gray-200">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 hover:bg-[#B8FF65] text-black font-bold text-xs px-3 py-1 border border-black rounded-full uppercase tracking-wider transition-colors shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
