'use client'

import { Skills as SkillsType } from '@/types/portfolio'

interface SkillsProps {
  skills: SkillsType
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-6xl mx-auto scroll-reveal">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
        &lt;Skills /&gt;
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-6">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {skills.languages.map((skill, i) => (
              <span 
                key={i}
                className="tech-tag px-4 py-2 bg-indigo-600/30 border border-indigo-400/50 rounded-lg text-sm font-semibold hover:bg-indigo-600/50 transition-all cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-6">Frameworks & Libraries</h3>
          <div className="flex flex-wrap gap-3">
            {skills.frameworks.map((skill, i) => (
              <span 
                key={i}
                className="tech-tag px-4 py-2 bg-purple-600/30 border border-purple-400/50 rounded-lg text-sm font-semibold hover:bg-purple-600/50 transition-all cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-6">Databases</h3>
          <div className="flex flex-wrap gap-3">
            {skills.databases.map((skill, i) => (
              <span 
                key={i}
                className="tech-tag px-4 py-2 bg-cyan-600/30 border border-cyan-400/50 rounded-lg text-sm font-semibold hover:bg-cyan-600/50 transition-all cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-6">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((skill, i) => (
              <span 
                key={i}
                className="tech-tag px-4 py-2 bg-emerald-600/30 border border-emerald-400/50 rounded-lg text-sm font-semibold hover:bg-emerald-600/50 transition-all cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
