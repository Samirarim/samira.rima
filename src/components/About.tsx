'use client'

import { CVData } from '@/types/portfolio'

interface AboutProps {
  cvData: CVData
}

export default function About({ cvData }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto scroll-reveal">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
        &lt;About /&gt;
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {cvData.about}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {cvData.awards.map((award, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-indigo-900/30 border border-indigo-500/50 rounded-lg text-sm text-indigo-300"
              >
                🏆 {award}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-primary mb-6">Contact</h3>
          <div className="space-y-3">
            <a 
              href={`mailto:${cvData.contact.email}`}
              className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
            >
              <span className="text-xl">📧</span>
              {cvData.contact.email}
            </a>
            <a 
              href={`tel:${cvData.contact.phone}`}
              className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
            >
              <span className="text-xl">📱</span>
              {cvData.contact.phone}
            </a>
            <a 
              href={`https://${cvData.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
            >
              <span className="text-xl">💼</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
