'use client'

import { CVData, MousePosition } from '@/types/portfolio'
import { useEffect, useState } from 'react'
import About from './About'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Publications from './Publications'
import Skills from './Skills'

export default function Portfolio() {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 })
  const [cvData, setCvData] = useState<CVData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2
      })
    }

    // Data fetching
    const fetchData = async () => {
      try {
        const response = await fetch('/api/portfolio')
        const data = await response.json()
        setCvData(data)
      } catch (error) {
        console.error('Error fetching CV data:', error)
      } finally {
        setLoading(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    fetchData()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  if (loading) {
    return (
      <div className="bg-[#0a0a0f] h-screen flex items-center justify-center text-primary">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!cvData) {
    return null // or error state
  }

  return (
    <div className="bg-[#0a0a0f] text-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero mouse={mouse} cvData={cvData} />
      <About cvData={cvData} />
      <Experience experience={cvData.experience} />
      <Skills skills={cvData.skills} />
      <Publications publications={cvData.publications} />
      <Education education={cvData.education} />
      <Contact />
      <Footer cvData={cvData} />
    </div>
  )
}
