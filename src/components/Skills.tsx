import React from 'react';

const technicalSkills = [
  'Python', 'Pandas & NumPy', 'Data Analysis (EDA)', 'MS Excel (VLOOKUP & Pivot Tables)', 
  'Data Visualization', 'GenAI & Agentic AI', 'HTML', 'Cybersecurity & IAM', 
  'Graphic Design', 'Video Editing', 'Digital Marketing', 'MS PowerPoint'
];

const coreCompetencies = [
  'Interpersonal Collaboration', 'Creative Problem-Solving', 
  'Strategic Communication', 'Critical Thinking'
];

const languages = [
  'English (Proficient)', 'Hindi (Native)'
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-transparent text-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-black mb-4 uppercase tracking-tight bg-white text-black inline-block px-5 py-2 border-3 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Technical Skills & Competencies</h2>
        </div>

        {/* Technical Infrastructure */}
        <div className="mb-10">
          <h3 className="text-lg sm:text-xl font-bold mb-4 uppercase tracking-wider text-black bg-white inline-block px-3 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Technical Infrastructure</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {technicalSkills.map((skill) => (
              <div key={skill} className="bg-[#B8FF65] text-black font-bold border-2 border-black rounded-full px-4 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-default">
                <span className="text-xs sm:text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies & Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 uppercase tracking-wider text-black bg-white inline-block px-3 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {coreCompetencies.map(comp => (
                <div key={comp} className="bg-[#B8FF65] text-black border-2 border-black rounded-full px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold text-xs sm:text-sm">
                  ⚡ {comp}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 uppercase tracking-wider text-black bg-white inline-block px-3 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Linguistic Proficiency</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map(lang => (
                <div key={lang} className="bg-[#B8FF65] text-black border-2 border-black rounded-full px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold text-xs sm:text-sm">
                  🗣️ {lang}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
