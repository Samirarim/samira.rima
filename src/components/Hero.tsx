'use client'

import { CVData, MousePosition } from '@/types/portfolio'
import { Canvas } from '@react-three/fiber'
import Link from 'next/link'
import AnimatedSphere from './3d/AnimatedSphere'
import ParticleField from './3d/ParticleField'

interface HeroProps {
  mouse: MousePosition
  cvData: CVData
}

export default function Hero({ mouse, cvData }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <ParticleField mouse={mouse} />
          <AnimatedSphere mouse={mouse} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 fade-in">
        <div className="mb-6" style={{ animationDelay: '0.2s' }}>
          <span className="text-primary text-sm tracking-widest uppercase font-semibold">
            &lt;Developer /&gt;
          </span>
        </div>
        <h1 
          className="text-6xl md:text-8xl font-bold mb-4 glow"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="gradient-text">{cvData.name}</span>
        </h1>
        <p 
          className="text-xl md:text-2xl text-gray-400 mb-8 font-light"
          style={{ animationDelay: '0.6s' }}
        >
          {cvData.title}
        </p>
        <div 
          className="flex gap-6 justify-center flex-wrap"
          style={{ animationDelay: '0.8s' }}
        >
          <Link
           href={ '#contact'}
            // href={`mailto:${cvData.contact.email}`}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
          >
            Get In Touch
          </Link>
          <Link
            href={`https://${cvData.contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300"
          >
            View GitHub
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
