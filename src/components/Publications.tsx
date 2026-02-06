'use client'

import { Publication } from '@/types/portfolio'

interface PublicationsProps {
  publications: Publication[]
}

export default function Publications({ publications }: PublicationsProps) {
  return (
    <section id="publications" className="py-24 px-6 md:px-12 max-w-6xl mx-auto scroll-reveal">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
        &lt;Publications /&gt;
      </h2>
      <div className="space-y-6">
        {publications.map((pub, i) => (
          <div 
            key={i}
            className="card-hover bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-xl p-8"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <h3 className="text-xl font-bold text-primary mb-3">{pub.title}</h3>
            <p className="text-gray-400">
              {pub.journal || pub.conference} • {pub.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
