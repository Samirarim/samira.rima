# Samira Kabir Rima - Modern Portfolio Website (TypeScript)

A stunning, modern portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **React Three Fiber**, and **Tailwind CSS** featuring interactive 3D animations and smooth scroll effects.

## ✨ Features

- **Interactive 3D Hero Section**: Floating particles and animated geometry using React Three Fiber
- **Mouse-Reactive Animations**: 3D elements respond to mouse movements
- **Smooth Scroll Animations**: Sections fade in and slide up as you scroll
- **Dark Mode UI**: Sleek, cyberpunk-inspired design with gradient accents
- **Fully Responsive**: Optimized for all screen sizes
- **Type-Safe**: Built with TypeScript for better developer experience and code quality
- **CV Data Parsing**: Automatically populated from structured CV data
- **Performance Optimized**: Built with Next.js 14 App Router for optimal loading

## 🎨 Design Highlights

- **Typography**: Space Mono for headings, JetBrains Mono for body text
- **Color Scheme**: Deep purple (#6366f1) and cyber blue (#00ffcc) on dark background
- **Animations**: CSS keyframes, React Three Fiber, and scroll-triggered reveals
- **Interactive Cards**: Hover effects with smooth transitions and shadows
- **Type Definitions**: Complete TypeScript interfaces for all data structures

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
samira-portfolio/
├── app/
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles with Tailwind
├── portfolio.tsx         # Main portfolio component ⭐
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── README.md            # This file
```

## 🎯 TypeScript Interfaces

The project includes comprehensive type definitions:

```typescript
interface CVData {
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

interface Experience {
  company: string
  role: string
  period: string
  responsibilities: string[]
}

// ... and more
```

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript 5.3**: Type-safe JavaScript
- **React 18**: UI library
- **React Three Fiber**: 3D graphics with Three.js
- **@react-three/drei**: Useful helpers for R3F
- **Three.js**: 3D library (with TypeScript types)
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Space Mono & JetBrains Mono

## 📱 Sections

1. **Hero**: Interactive 3D background with name and CTA buttons
2. **About**: Personal introduction with awards and contact info
3. **Experience**: Professional work history with detailed responsibilities
4. **Skills**: Categorized technical skills (Languages, Frameworks, Databases, Tools)
5. **Publications**: Research papers and conference proceedings
6. **Education**: Academic background with CGPA
7. **Footer**: Social links and copyright

## 🎨 Customization

### Update CV Data

Edit the `cvData` object in `portfolio.tsx` to update your information:

```typescript
const cvData: CVData = {
  name: "Your Name",
  title: "Your Title",
  about: "Your bio...",
  // ... add your data
}
```

### Modify Colors

Update colors in `tailwind.config.js`:

```js
colors: {
  'cyber-blue': '#00ffcc',    // Change to your preferred accent
  'deep-purple': '#6366f1',   // Change to your preferred primary
}
```

### Adjust Animations

Modify animation timings in the CSS sections or Tailwind config.

### Add New Types

Create new interfaces in `portfolio.tsx` or extract them to a separate `types.ts` file:

```typescript
// types.ts
export interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

Vercel automatically detects TypeScript and configures the build.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify

## 🔍 Type Checking

Run TypeScript type checking:

```bash
npx tsc --noEmit
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, pull requests are welcome!

## 💡 Tips for TypeScript Users

- **IntelliSense**: Get autocomplete for all CV data properties
- **Type Safety**: Catch errors at compile time instead of runtime
- **Refactoring**: Safely rename properties across the entire codebase
- **Documentation**: Types serve as inline documentation

## 📧 Contact

- **Email**: samirarim2000@gmail.com
- **LinkedIn**: [linkedin.com/in/samira-kabir-rima](https://linkedin.com/in/samira-kabir-rima/)
- **GitHub**: [github.com/Samirarim](https://github.com/Samirarim)

---

Built with ❤️ using Next.js, TypeScript, React Three Fiber, and Tailwind CSS
