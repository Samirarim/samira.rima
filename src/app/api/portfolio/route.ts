import { CVData } from '@/types/portfolio'
import { NextResponse } from 'next/server'

export async function GET() {
  const cvData: CVData = {
    name: "Samira Kabir Rima",
    title: "Full-Stack Developer",
    about: "As a Software Developer with a strong academic foundation in Computer Science, I bridge the gap between robust industry practices and innovative research. Having graduated Magna Cum Laude with a 3.88 CGPA, I have already contributed to the field through published research in deep learning and antenna design. My current work at Siara Solution involves building complex full-stack applications using React, Node.js, and PostgreSQL. I am now seeking to pursue a Master's degree in Australia to deepen my technical expertise and contribute to the next wave of technological innovation.",
    contact: {
      email: "samirarim2000@gmail.com",
      phone: "+8801676603278",
      github: "github.com/Samirarim",
      linkedin: "linkedin.com/in/samira-kabir-rima/"
    },
    experience: [
      {
        company: "Siara Solution",
        role: "Junior Software Developer",
        period: "Oct 2023 – Present",
        responsibilities: [
          "Contribute to front-end and back-end application development, gaining hands-on experience with modern technologies.",
          "Responsible for implementing API functionality and fetching data from back-end services.",
          "Strengthened skills in front-end development workflows, API integration, and feature implementation within a professional environment."
        ]
      },
      {
        company: "Siara Solution",
        role: "Software Development Intern",
        period: "Jun 2023 – Sep 2023",
        responsibilities: [
          "Gained practical experience with TypeScript, React, and Next.js, learning how to structure robust, type-checked components.",
          "Leveraged Next.js's server-side rendering capabilities, which improved application loading and performance."
        ]
      }
    ],
    education: [
      {
        institution: "American International University-Bangladesh (AIUB)",
        degree: "B.Sc. in Computer Science and Engineering (CSE)",
        cgpa: "3.88 / 4.00",
        year: "2024"
      },
      {
        institution: "St. Francis Xavier's Girls School & College",
        degree: "Higher Secondary Certificate (HSC)",
        year: "2019"
      },
      {
        institution: "Ahmed Bawani Academy School & College",
        degree: "Secondary School Certificate (SSC)",
        year: "2017"
      }
    ],
    skills: {
      languages: ["JavaScript", "Python", "TypeScript", "C++", "C#", "LaTeX"],
      databases: ["PostgreSQL", "MongoDB", "MySQL"],
      frameworks: ["React", "Next.js", "Nest.js", "Express.js", "Tailwind CSS", "MUI", "Antd"],
      tools: ["Node JS", "GitHub", "Azure board", "Confluence", "Visual Studio"]
    },
    publications: [
      {
        title: "A Low-Cost IoT and Machine Learning–Based Web Application for Smart Hydroponic Horticulture and Plant Disease Detection",
        conference: "5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE)",
        year: "2026"
      },
      {
        title: "Grey Blight Disease Detection on Tea Leaves Using Improved Deep Convolutional Neural Network",
        journal: "Computational Intelligence and Neuroscience",
        year: "2023"
      },
      {
        title: "Design of Crossed Dipole Yagi–Uda MIMO Antenna for Radar Applications",
        journal: "International Journal of Antennas and Propagation",
        year: "2022"
      }
    ],
    awards: [
      "Magna Cum Laude",
      "Dean's List Honor for 5 Consecutive Semesters"
    ]
  }

  return NextResponse.json(cvData)
}
