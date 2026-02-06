'use client'

import { Education as EducationType } from '@/types/portfolio'

interface EducationProps {
  education: EducationType[]
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-6xl mx-auto scroll-reveal">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
        &lt;Education /&gt;
      </h2>
      {education.map((edu, i) => (
        <div 
          key={i}
          className="card-hover bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 border border-indigo-500/30 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-[#00ffcc] mb-2">{edu.degree}</h3>
          <p className="text-xl text-gray-300 mb-2">{edu.institution}</p>
          <div className="flex gap-6 text-gray-400">
           {edu.cgpa && <><span>CGPA: {edu.cgpa}</span>
            <span>•</span></>} 
            <span>Graduated: {edu.year}</span>
          </div>
        </div>
      ))}
    </section>
  )
}
