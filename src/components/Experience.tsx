'use client'

import { Experience as ExperienceType } from '@/types/portfolio'

interface ExperienceProps {
  experience: ExperienceType[]
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-6xl mx-auto scroll-reveal">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
        &lt;Experience /&gt;
      </h2>
      <div className="space-y-8">
        {experience.map((exp, i) => (
          <div 
            key={i}
            className="card-hover bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-xl p-8"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-[#00ffcc] mb-2">{exp.role}</h3>
                <p className="text-xl text-gray-300">{exp.company}</p>
              </div>
              <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
            </div>
            <ul className="space-y-3 mt-6">
              {exp.responsibilities.map((resp, j) => (
                <li key={j} className="flex gap-3 text-gray-300">
                  <span className="text-[#00ffcc] mt-1">▹</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
