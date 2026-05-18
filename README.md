# 🚀 Muhammad Hassan Naeem - Personal Portfolio

A modern, pixel-perfect personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Featuring smooth animations, responsive design, and a premium dark theme inspired by Vercel, Linear, and Raycast.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)](https://github.com/muhassannaeem/portfolio)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

## ✨ Features

- **🎨 Premium Dark Theme** - Modern, elegant design with near-black background and gradient accents
- **⚡ Fully Responsive** - Optimized for mobile, tablet, and desktop screens
- **✨ Smooth Animations** - Subtle motion effects using Framer Motion for professional feel
- **🎯 Performance Optimized** - Built with Next.js 16 for fast loading and SEO
- **🔧 TypeScript Support** - Full type safety throughout the project
- **📱 Mobile Menu** - Responsive hamburger menu for mobile navigation
- **📧 Contact Form** - Fully functional contact form with form validation
- **🎨 Beautiful Components** - Glassmorphism effects, gradient overlays, and smooth transitions
- **♿ Accessible** - Semantic HTML and ARIA attributes for accessibility

## 📋 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   │   └── Footer.tsx          # Footer with links and social
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── About.tsx           # About me with stats
│   │   ├── TechArsenal.tsx     # Technical skills showcase
│   │   ├── FeaturedProjects.tsx# Project showcase
│   │   ├── Services.tsx        # Services offered
│   │   └── Contact.tsx         # Contact form
│   └── ui/
│       └── Container.tsx       # Reusable container wrapper
├── styles/
│   └── globals.css             # Global styles and design tokens
└── app/
    ├── layout.tsx              # Root layout
    ├── page.tsx                # Home page
    ├── globals.css             # CSS imports
    └── ...
```

## 🛠️ Tech Stack

### Core
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & Animation
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Development
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/muhassannaeem/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📝 Configuration

### Update Personal Information

Edit the following files to customize the portfolio with your information:

#### `app/layout.tsx`
Update metadata with your name and description:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Software Engineer",
  description: "Your professional description...",
};
```

#### `src/components/layout/Navbar.tsx`
Update the full name in the navbar:
```typescript
<span className="text-white font-semibold text-sm hidden sm:inline">
  Your Full Name
</span>
```

#### `src/components/sections/Hero.tsx`
Update hero heading, description, and CTA text:
```typescript
<h1>Your custom heading</h1>
<p>Your professional summary...</p>
```

#### `src/components/sections/About.tsx`
Update the about section content:
```typescript
<h2>Your about heading</h2>
<p>Your about description...</p>
```

#### `src/components/sections/Contact.tsx`
Update your email address:
```typescript
href="mailto:your.email@example.com"
// Update to your email
```

#### `src/components/layout/Footer.tsx`
Update company info and social links:
```typescript
const footerLinks = {
  // Update your links here
};
```

### Add Your Projects

Edit `src/components/sections/FeaturedProjects.tsx`:
```typescript
const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project Name',
    description: 'Project description...',
    image: '/projects/project-1.png',
    category: 'Technology Stack',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://project-demo.com',
    sourceUrl: 'https://github.com/username/project',
  },
  // Add more projects...
];
```

### Customize Design Tokens

Edit `app/globals.css` to modify colors, spacing, and other design variables:
```css
:root {
  --background: #0a0a0b;
  --foreground: #ffffff;
  --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
}
```

## 📁 Adding Project Images

1. Create a `public/projects` folder:
```bash
mkdir public/projects
```

2. Add your project images:
```
public/
├── projects/
│   ├── project-1.png
│   ├── project-2.png
│   └── project-3.png
```

3. Update the image paths in `FeaturedProjects.tsx`:
```typescript
image: '/projects/project-1.png',
```

## 📧 Contact Form Integration

The contact form currently logs messages to the console. To integrate with a backend service:

### Option 1: Using Nodemailer
```bash
npm install nodemailer
```

Create `app/api/contact/route.ts`:
```typescript
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { fullName, email, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_TO,
    subject: subject,
    text: `${fullName}\n\n${message}`,
  });

  return Response.json({ success: true });
}
```

### Option 2: Using Formspree
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    // Success handling
  }
};
```

### Option 3: Using SendGrid
```bash
npm install @sendgrid/mail
```

Refer to [SendGrid documentation](https://docs.sendgrid.com/) for setup.

## 🎨 Sections Overview

### 1. **Navbar**
- Sticky navigation with logo/name
- Center navigation links
- Download CV button
- "Hire Me" CTA button
- Mobile responsive hamburger menu

### 2. **Hero**
- Large bold heading with gradient text
- Professional description
- Two CTA buttons
- Profile image card placeholder
- Floating stats card (25+ Live Projects)

### 3. **About**
- Section heading and description
- 2x2 grid of stat cards with gradient values:
  - Years of Experience
  - Happy Clients
  - Commits Made
  - Tech Awards

### 4. **Tech Arsenal**
- Technology categories with icons:
  - Languages
  - Frontend
  - Backend
  - AI & ML
  - Tools
  - Specialties
- Technology tags for each category

### 5. **Featured Projects**
- Project showcase grid
- Project images (placeholders)
- Description and tech stack
- Live Demo and Source Code buttons

### 6. **Services**
- 4 service offerings with icons:
  - Web Development
  - Mobile Development
  - AI Integration
  - UI/UX Design

### 7. **Contact**
- Contact CTA heading
- Contact information (email, location)
- Social media links
- Contact form with fields:
  - Full Name
  - Email Address
  - Subject
  - Message
- Submit button

### 8. **Footer**
- Company info
- Navigation links
- Social media links
- Copyright and legal links

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy with Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Click "Deploy"

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Netlify**
- Drag and drop the `.next` folder to [netlify.com](https://netlify.com)
- Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

1. **Update `next.config.ts`**
```typescript
const nextConfig = {
  output: 'export',
};
export default nextConfig;
```

2. **Build and deploy**
```bash
npm run build
git add .
git commit -m "Build for deployment"
git push origin main
```

3. **Enable GitHub Pages** in repository settings

## 📦 Build & Production

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Run Linter
```bash
npm run lint
```

## 🔧 Troubleshooting

### Port 3000 Already in Use
```bash
# Windows
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### Clear Next.js Cache
```bash
rm -rf .next
npm run dev
```

### TypeScript Errors
```bash
npm run build
```

This will show detailed TypeScript errors.

## 📝 Customization Guide

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
}
```

### Modify Font
Update the font in `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-custom",
  subsets: ["latin"],
});
```

### Add New Sections
1. Create a new component in `src/components/sections/`
2. Export it as a client component with `'use client'`
3. Import and add it to `app/page.tsx`

### Update Animations
Adjust animation timings and effects in each section component by modifying the `Variants` objects.

## 🌐 Environment Variables

Create a `.env.local` file for any sensitive data:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

**Muhammad Hassan Naeem**
- Email: [muhassannaeem@gmail.com](mailto:muhassannaeem@gmail.com)
- Location: Islamabad, Pakistan
- LinkedIn: [Your LinkedIn Profile](#)
- GitHub: [github.com/muhassannaeem](#)
- Twitter: [Your Twitter](#)

## 🎯 Roadmap

- [ ] Blog section
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] CMS integration
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] PDF CV download
- [ ] Testimonials section

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

## 🙏 Acknowledgments

Inspired by design systems from:
- [Vercel](https://vercel.com)
- [Linear](https://linear.app)
- [Raycast](https://raycast.com)

---

**Made with ❤️ by Muhammad Hassan Naeem**

⭐ If you find this project helpful, please consider giving it a star!
