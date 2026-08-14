"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import SpotlightCard from '@/components/SpotlightCard';
import { AnimatedCounter, StatCard } from '@/components/CounterMetric';
import ProjectModal, { ProjectDetail } from '@/components/ProjectModal';

const statsData = [
  { value: 10000, suffix: '+', label: 'Profiles Analyzed', sublabel: 'Risk Prediction' },
  { value: 15, suffix: '%', label: 'Accuracy Boost', sublabel: 'GenAI Anomaly Detection' },
  { value: 22, suffix: '%', label: 'Lag Reduction', sublabel: 'Workflow Automation' },
  { value: 20, suffix: '%', label: 'Error Mitigation', sublabel: 'Data Extraction Pipelines' },
];

const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: 'Customer Delinquency Risk Predictor',
    category: 'GenAI & No-Code ML',
    year: '2025',
    metricValue: 10000,
    metricSuffix: '+',
    metricLabel: 'Data Profiles Evaluated',
    desc: 'Engineered a no-code predictive modeling architecture using GenAI modules to evaluate customer default exposure across <span class="highlight-marker">10,000+ data profiles</span>. Accelerated high-risk anomaly accuracy by <span class="highlight-marker">15%</span>.',
    overview: 'Built a predictive scoring engine utilizing generative AI and automated machine learning heuristics to accurately classify debt delinquency probability among high-volume retail lending profiles.',
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'GenAI Prompt Engineering', 'Streamlit'],
    workflow: [
      'Aggregated & cleaned raw loan portfolio telemetry from CSV datasets.',
      'Constructed exploratory feature pipelines & missing-value imputations.',
      'Trained classification baseline models benchmarking against legacy delinquency scorecards.',
      'Integrated GenAI reasoning agents to synthesize natural-language risk summary memos for loan officers.'
    ],
    impact: [
      'Processed and classified 10,000+ customer records with 15% lower false-positive rate.',
      'Reduced initial portfolio audit times from days to minutes.',
      'Enabled proactive restructuring recommendations before defaults occurred.'
    ],
    githubUrl: 'https://github.com/shivamjha2o',
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
    overview: 'Devised an autonomous multi-agent orchestration architecture that monitors delinquency aging brackets and dispatches customized, compliant recovery touchpoints without manual intervention.',
    tools: ['Python', 'Agentic AI Workflows', 'REST APIs', 'MS Excel Automation', 'JSON Schema'],
    workflow: [
      'Mapped communication funnel paths based on borrower delinquency tiers.',
      'Deployed agentic AI workflows with strict regulatory compliance guardrails.',
      'Implemented automated status tracking dashboards updating in real-time.'
    ],
    impact: [
      'Delivered a 22% reduction in borrower query and status update latency.',
      'Maintained 100% adherence to financial compliance standards.',
      'Streamlined account tracking workflows across recovery management teams.'
    ],
    githubUrl: 'https://github.com/shivamjha2o',
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
    overview: 'Conducted an enterprise network simulation designing Role-Based Access Control (RBAC) and least-privilege identity architecture protecting sensitive corporate databases and API boundaries.',
    tools: ['IAM Policies', 'RBAC Architecture', 'Security Compliance', 'Zero Trust Principles'],
    workflow: [
      'Audited privilege escalation vulnerabilities across organizational units.',
      'Structured granular RBAC permissions matrix covering 3 distinct business domains.',
      'Authored corporate threat remediation playbooks and incident response checklists.'
    ],
    impact: [
      'Standardized least-privilege access governance across multiple operational pillars.',
      'Eliminated redundant access credentials and unmonitored privileged roles.',
      'Created clear executive compliance artifacts and architectural blueprints.'
    ],
    githubUrl: 'https://github.com/shivamjha2o',
    tags: ['Cybersecurity', 'IAM Controls', 'Access Matrix', 'Security Architecture']
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (project: ProjectDetail) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-transparent text-black relative">
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
            stackPosition="20%"
            scaleEndPosition="12%"
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
                    {/* Top Meta Bar */}
                    <div className="flex justify-between items-center gap-2 mb-4 pb-3 border-b-2 border-black">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black bg-[#B8FF65] px-3.5 py-1.5 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold bg-black text-white px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {project.year}
                      </span>
                    </div>

                    {/* Title & Metric */}
                    <div className="my-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                        <h3 className="text-xl sm:text-3xl font-black tracking-tight">{project.title}</h3>
                        <div className="bg-black text-[#B8FF65] border-2 border-black px-3 py-1 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] self-start sm:self-auto shrink-0 flex items-center gap-1.5">
                          <span className="text-[10px] font-bold uppercase text-gray-400">Impact</span>
                          <AnimatedCounter value={project.metricValue} suffix={project.metricSuffix} className="text-xs sm:text-sm" />
                        </div>
                      </div>
                      <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: project.desc }}></p>
                    </div>

                    {/* Divider Line with Generous Spacing */}
                    <div className="w-full h-[1.5px] bg-black/15 mt-8 mb-6" />

                    {/* Bottom Tags & Case Study CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
                      {/* High-Contrast Enhanced Tag Pills with Healthy Spacing */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-3">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="bg-[#B8FF65]/20 hover:bg-[#B8FF65] text-black font-extrabold text-[11px] sm:text-xs px-3.5 py-1.5 border border-black rounded-full uppercase tracking-wider transition-all duration-200 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 cursor-default leading-none"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Details Button */}
                      <button
                        onClick={() => handleOpenDetails(project)}
                        className="bg-black hover:bg-[#B8FF65] text-white hover:text-black font-black text-xs sm:text-sm uppercase tracking-wider px-5 py-2.5 rounded-xl border-2 border-black transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 self-start sm:self-auto shrink-0 flex items-center gap-1.5 group cursor-pointer"
                      >
                        <span>View Details</span>
                        <span className="group-hover:translate-x-1 transition-transform">↗</span>
                      </button>
                    </div>
                  </div>
                </SpotlightCard>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </motion.div>

      </div>

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;
