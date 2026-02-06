'use client'

import { CVData } from '@/types/portfolio'

interface FooterProps {
  cvData: CVData
}

export default function Footer({ cvData }: FooterProps) {
  return (
    <footer className="py-12 px-6 border-t border-indigo-500/30 text-center">
      <p className="text-gray-400">
        © 2025 {cvData.name}. Built with Next.js, React Three Fiber & Tailwind CSS
      </p>
      <div className="mt-4 flex gap-6 justify-center">
        <a href={`https://${cvData.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-[#00ffcc] hover:underline">
          GitHub
        </a>
        <a href={`https://${cvData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-[#00ffcc] hover:underline">
          LinkedIn
        </a>
        <a href={`mailto:${cvData.contact.email}`} className="text-[#00ffcc] hover:underline">
          Email
        </a>
      </div>
    </footer>
  )
}
