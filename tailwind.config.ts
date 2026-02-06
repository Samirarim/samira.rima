import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#00ffcc',
          dark: '#00ccaa',
          light: '#33ffdd',
        },
        secondary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
          light: '#818cf8',
        },
        error: {
          DEFAULT: '#f87171', // red-400
          dark: '#ef4444',    // red-500
          light: '#fca5a5',   // red-300
        },
        success: {
          DEFAULT: '#4ade80', // green-400
          dark: '#22c55e',    // green-500
          light: '#86efac',   // green-300
        },
        warning: {
          DEFAULT: '#fbbf24', // amber-400
          dark: '#f59e0b',    // amber-500
          light: '#fcd34d',   // amber-300
        },
      },
    },
  },
  plugins: [],
}
export default config
