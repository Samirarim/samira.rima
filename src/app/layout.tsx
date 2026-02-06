import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samira Kabir Rima - Full-Stack Developer',
  description: 'Portfolio of Samira Kabir Rima, Full-Stack Developer specializing in React, Node.js, PostgreSQL, and Deep Learning Research',
  keywords: ['Full-Stack Developer', 'React', 'Node.js', 'PostgreSQL', 'Next.js', 'TypeScript', 'Deep Learning'],
  authors: [{ name: 'Samira Kabir Rima' }],
  openGraph: {
    title: 'Samira Kabir Rima - Full-Stack Developer',
    description: 'Portfolio showcasing full-stack development projects and research publications',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
