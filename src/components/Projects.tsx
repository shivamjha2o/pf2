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
    category: 'GenAI & Predictive ML',
    year: '2025',
    metricValue: 10000,
    metricSuffix: '+ Profiles',
    metricLabel: 'Data Profiles Evaluated',
    desc: 'Engineered a predictive scoring engine using Python, SQL, and GenAI modules to evaluate customer default exposure across <span class="highlight-marker">10,000+ portfolio records</span>. Accelerated high-risk anomaly detection accuracy by <span class="highlight-marker">15%</span>.',
    overview: 'Built an end-to-end predictive scoring engine utilizing generative AI, SQL data aggregation pipelines, and machine learning heuristics to accurately classify loan delinquency probability among high-volume retail lending portfolios.',
    tools: ['Python', 'SQL (PostgreSQL)', 'Pandas', 'NumPy', 'Scikit-Learn', 'GenAI Prompt Engineering', 'Streamlit', 'Jupyter Notebook (.ipynb)'],
    workflow: [
      'Aggregated and cleaned raw loan portfolio telemetry from relational SQL databases and CSV data lakes.',
      'Constructed exploratory feature pipelines, missing-value imputations, and delinquency risk distributions in Jupyter Notebook.',
      'Trained classification baseline models benchmarking against legacy delinquency scorecards with 15% lower false positives.',
      'Integrated GenAI reasoning agents to synthesize natural-language risk summary memos for loan officers via an interactive Streamlit UI.'
    ],
    impact: [
      'Processed and classified 10,000+ customer records with 15% lower false-positive rate.',
      'Reduced initial portfolio risk audit times from days to minutes.',
      'Enabled proactive restructuring recommendations before customer defaults occurred.'
    ],
    githubUrl: 'https://github.com/shivamjha2o/Customer-Delinquency-Risk-Predictor',
    demoUrl: 'https://github.com/shivamjha2o/Customer-Delinquency-Risk-Predictor',
    tags: ['Python', 'SQL', 'GenAI', 'Predictive Scoring', 'Streamlit', 'EDA']
  },
  {
    id: 2,
    title: 'AI-Driven Collections Strategy',
    category: 'Agentic AI & Automation',
    year: '2025',
    metricValue: 22,
    metricSuffix: '% Reduction',
    metricLabel: 'Response Lag Reduced',
    desc: 'Designed an autonomous multi-agent orchestration architecture backed by <span class="highlight-marker">agentic AI workflows</span>. Secured a target <span class="highlight-marker">22% reduction</span> in borrower query lag times while ensuring ethical compliance structures.',
    overview: 'Devised an autonomous multi-agent collection strategy that monitors delinquency aging brackets, queries structured SQL logs, and automatically dispatches customized, compliant recovery touchpoints without manual delay.',
    tools: ['Python', 'Agentic AI Workflows', 'SQL Logs', 'REST APIs', 'MS Excel Automation', 'JSON Schema Guardrails'],
    workflow: [
      'Mapped communication funnel paths and borrower risk tiers based on aging query telemetry from structured databases.',
      'Deployed agentic AI workflows with strict regulatory compliance and ethical guardrails.',
      'Implemented automated status tracking dashboards updating operational recovery teams in real time.'
    ],
    impact: [
      'Delivered a 22% reduction in borrower query and status update latency.',
      'Maintained 100% adherence to financial compliance standards.',
      'Streamlined account tracking workflows across recovery management teams.'
    ],
    githubUrl: 'https://github.com/shivamjha2o/AI-Driven-Collections-Strategy',
    tags: ['Agentic AI', 'Automation', 'Python', 'SQL Telemetry', 'Workflow Optimization']
  },
  {
    id: 3,
    title: 'IAM Security Framework',
    category: 'Cybersecurity Simulation',
    year: '2025',
    metricValue: 3,
    metricSuffix: ' Domains',
    metricLabel: 'Enterprise Security Matrix',
    desc: 'Built an enterprise-level Identity and Access Management matrix managing access control across <span class="highlight-marker">3 separate business domains</span>. Authored system technical blueprints, zero-trust policies, and threat mitigation decks.',
    overview: 'Conducted an enterprise network simulation designing Role-Based Access Control (RBAC) and least-privilege identity architecture protecting sensitive corporate databases and API boundaries.',
    tools: ['IAM Policies', 'RBAC Architecture', 'Zero Trust Principles', 'Security Compliance', 'Policy Matrix'],
    workflow: [
      'Audited privilege escalation vulnerabilities and access paths across organizational units.',
      'Structured granular RBAC permissions matrix covering 3 distinct business domains.',
      'Authored corporate threat remediation playbooks, executive compliance decks, and incident response checklists.'
    ],
    impact: [
      'Standardized least-privilege access governance across multiple operational pillars.',
      'Eliminated redundant access credentials and unmonitored privileged roles.',
      'Created clear executive compliance artifacts and architectural blueprints.'
    ],
    githubUrl: 'https://github.com/shivamjha2o/IAM-Enterprise-Security-Framework',
    tags: ['Cybersecurity', 'IAM Controls', 'RBAC Matrix', 'Zero Trust', 'Governance']
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
    <section id="projects" className="pt-14 pb-20 sm:pt-24 sm:pb-32 bg-transparent text-black relative">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14"
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
          <ScrollStack>
            {projectsData.map((project, index) => (
              <ScrollStackItem key={project.id} index={index}>
                <SpotlightCard
                  enableTilt={true}
                  maxTilt={6}
                  spotlightColor="rgba(184, 255, 101, 0.3)"
                  className="w-full h-full"
                >
                  {/* Uniform Height Flex Layout with Responsive Breathing Room */}
                  <div className="flex flex-col justify-between h-full min-h-[320px] sm:min-h-[300px]">
                    {/* Top Meta Bar with Category, Year & Direct GitHub Repo Badge */}
                    <div className="flex justify-between items-center gap-2 mb-3 sm:mb-4 pb-3 border-b-2 border-black">
                      <span className="text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-wider text-black bg-[#B8FF65] px-2.5 sm:px-3.5 py-1 sm:py-1.5 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] truncate max-w-[62%] sm:max-w-none">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={project.githubUrl || "https://github.com/shivamjha2o"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-white hover:bg-[#B8FF65] text-black font-extrabold text-[11px] sm:text-xs px-2.5 py-1 border-2 border-black rounded-md shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] transition-colors group/link"
                          title="Open GitHub Repository"
                        >
                          <span>Code</span>
                          <span className="text-[10px] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">↗</span>
                        </a>
                        <span className="font-mono text-xs sm:text-sm font-bold bg-black text-white px-2.5 sm:px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Title & Metric & Description with Vertical Balance */}
                    <div className="my-auto py-1 sm:py-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2 sm:mb-2.5">
                        <h3 className="text-lg sm:text-2xl md:text-3xl font-black tracking-tight leading-snug text-black">
                          {project.title}
                        </h3>
                        <div className="bg-black text-[#B8FF65] border-2 border-black px-2.5 sm:px-3 py-1 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] self-start sm:self-auto shrink-0 flex items-center gap-1.5">
                          <span className="text-[10px] font-black uppercase text-gray-400">Impact</span>
                          <AnimatedCounter value={project.metricValue} suffix={project.metricSuffix} className="text-xs sm:text-sm" />
                        </div>
                      </div>
                      <p className="text-gray-800 text-[13.5px] sm:text-base font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: project.desc }}></p>
                    </div>

                    {/* Divider Line with Generous Spacing */}
                    <div className="w-full h-[1.5px] bg-black/15 my-3.5 sm:my-5" />

                    {/* Bottom Tags & Case Study CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4">
                      {/* High-Contrast Enhanced Tag Pills */}
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="bg-[#B8FF65]/20 hover:bg-[#B8FF65] text-black font-extrabold text-[10.5px] sm:text-xs px-3 py-1 sm:py-1.5 border border-black rounded-full uppercase tracking-wider transition-all duration-200 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 cursor-default leading-none"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Details Button */}
                      <button
                        onClick={() => handleOpenDetails(project)}
                        className="w-full sm:w-auto justify-center bg-black hover:bg-[#B8FF65] text-white hover:text-black font-black text-xs sm:text-sm uppercase tracking-wider px-5 py-2.5 sm:py-3 rounded-xl border-2 border-black transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 shrink-0 flex items-center gap-1.5 group cursor-pointer"
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

