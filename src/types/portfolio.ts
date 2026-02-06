export interface MousePosition {
  x: number
  y: number
}

export interface ParticleFieldProps {
  mouse: MousePosition
}

export interface AnimatedSphereProps {
  mouse: MousePosition
}

export interface Experience {
  company: string
  role: string
  period: string
  responsibilities: string[]
}

export interface Education {
  institution: string
  degree: string
  cgpa?: string
  year: string
}

export interface Publication {
  title: string
  journal?: string
  conference?: string
  year: string
}

export interface Skills {
  languages: string[]
  databases: string[]
  frameworks: string[]
  tools: string[]
}

export interface Contact {
  email: string
  phone: string
  github: string
  linkedin: string
}

export interface CVData {
  name: string
  title: string
  about: string
  contact: Contact
  experience: Experience[]
  education: Education[]
  skills: Skills
  publications: Publication[]
  awards: string[]
}
