import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Customer Delinquency Risk Predictor',
    category: 'GenAI & No-Code ML',
    year: '2025',
    desc: 'Engineered a no-code predictive modeling architecture using GenAI modules to evaluate customer default exposure across <span class="highlight-marker">10,000+ data profiles</span>. Accelerated high-risk anomaly accuracy by <span class="highlight-marker">15%</span>.',
    tags: ['GenAI', 'No-Code ML', 'Exploratory Analytics', 'Risk Scoring']
  },
  {
    id: 2,
    title: 'AI-Driven Collections Strategy',
    category: 'Agentic AI & Automation Workflows',
    year: '2025',
    desc: 'Designed an end-to-end automated collection framework backed by <span class="highlight-marker">agentic AI networks</span>. Secured a target <span class="highlight-marker">22% reduction</span> in tracking response lag times while matching ethical compliance structures.',
    tags: ['Agentic AI', 'Automation', 'Workflow Optimization', 'Compliance']
  },
  {
    id: 3,
    title: 'IAM Security Framework',
    category: 'Cybersecurity Enterprise Simulation',
    year: '2025',
    desc: 'Built an enterprise-level Identity and Access Management matrix managing access control across <span class="highlight-marker">3 separate business domains</span>. Authored system technical blueprints and threat mitigation decks.',
    tags: ['Cybersecurity', 'IAM Controls', 'Access Matrix', 'Security Architecture']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-24 bg-transparent text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-black mb-4 uppercase tracking-tight bg-white text-black inline-block px-5 py-2 border-3 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Technical Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 sm:hover:-translate-y-2 transition-all flex flex-col">
              <div className="p-4 sm:p-5 bg-gray-50 border-b-2 sm:border-b-4 border-black flex justify-between items-center">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black bg-white px-2.5 py-1 border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">{project.category}</span>
                <span className="font-mono text-xs font-bold bg-[#B8FF65] text-black border border-black px-2.5 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">{project.year}</span>
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 text-xs sm:text-sm mb-4 font-medium leading-relaxed flex-1" dangerouslySetInnerHTML={{ __html: project.desc }}></p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-[#B8FF65] text-black font-bold text-[10px] sm:text-xs px-2.5 py-1 border border-black rounded-full uppercase tracking-wider shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
