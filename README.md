# 🚀 Muhammad Hassan Naeem - Personal Portfolio

A modern, high-performance personal portfolio website built with **Next.js 16**, **TypeScript 5**, **Tailwind CSS 4**, and **Framer Motion**. Features smooth animations, responsive design, and a premium dark theme with cyan and indigo gradients.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)](https://github.com/muhassannaeem/portfolio)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

## ✨ Features

- **🎨 Premium Dark Theme** - Modern elegant design with cyan (#06B6D4) and indigo (#6366F1) gradients
- **⚡ Fully Responsive** - Optimized for mobile, tablet, and desktop screens
- **✨ Smooth Animations** - Framer Motion for professional micro-interactions and transitions
- **🎯 Performance Optimized** - Next.js 16 App Router with fast loading and SEO optimization
- **🔧 TypeScript Support** - Full type safety throughout the codebase
- **📱 Mobile Menu** - Responsive hamburger navigation for smaller screens
- **📧 Email Integration** - Nodemailer contact form with Gmail SMTP support
- **🎨 Glassmorphism Design** - Modern glass effects with backdrop blur and gradient overlays
- **♿ Accessible** - Semantic HTML and proper ARIA attributes

## 📋 Project Structure

```
src/components/
├── layout/
│   ├── Navbar.tsx          # Sticky navigation with logo & mobile menu
│   └── Footer.tsx          # Footer with navigation & social links
├── sections/
│   ├── Hero.tsx            # Hero with CTA & profile image
│   ├── About.tsx           # About section with statistics
│   ├── TechArsenal.tsx     # Technical skills by category
│   ├── FeaturedProjects.tsx# Portfolio projects showcase
│   ├── Services.tsx        # Services offered
│   └── Contact.tsx         # Contact form with email integration
└── ui/
    └── Container.tsx       # Reusable max-width wrapper

app/
├── api/contact/route.ts    # Email API endpoint (Nodemailer)
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Home page
└── globals.css             # Global styles

public/
├── logo2.png               # Brand logo
├── Hassan.jpeg             # Profile picture
├── ielts.png               # IELTS Counsel project image
├── promography.png         # Promography project image
├── codesmell.png           # Code Smell Detection project image
├── bloodpulse.png          # Blood Pulse Connect project image
└── corefinity.png          # Corefinity project image
```

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16** - React framework with App Router for modern web applications
- **React 19** - UI library for building components
- **TypeScript 5** - Type-safe JavaScript development

### Styling & Animation
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Advanced animation library for smooth transitions
- **Lucide React 1.16** - Beautiful, consistent icon library

### Backend & Email
- **Nodemailer** - SMTP email service for sending emails
- **Gmail API** - Email delivery via Gmail account

### Development Tools
- **ESLint 9** - Code quality and consistency linting
- **PostCSS 4** - CSS processing and optimization

## 📦 Featured Projects

### 1. IELTS Counsel
- **Live:** https://www.ieltscounsel.com/
- **Tech:** Python, React, Tailwind
- **Description:** A complete IELTS prep platform with Listening, Reading, Writing, and AI-powered Speaking modules. The Speaking AI runs the full 3-part interview with personalized feedback on fluency, vocabulary, grammar, and pronunciation.

### 2. Promography
- **Live:** https://promography.vercel.app/
- **Tech:** Next.js, Tailwind, Python
- **Description:** Find the perfect prompt for any task, from creative writing to complex problem-solving. Join thousands of creators sharing their best AI prompts.

### 3. Code Smell Detection
- **Live:** https://code-smell-detection.vercel.app/
- **Tech:** React, Python, API
- **Description:** A web-based tool that scans uploaded source code and flags common design issues like Bloaters, Couplers, and other Object-Oriented smells. Helps developers spot quality and maintainability problems early with clear, structured feedback.

### 4. Blood Pulse Connect
- **Live:** https://www.figma.com/design/EwgWWL85cK6T0Xs091esDv/Blood-Pulse-Connect
- **Tech:** Figma, UI/UX, Prototyping
- **Description:** A full Figma design with interactive prototypes for a blood-donation app that helps donors and recipients connect in minutes. Built around urgency, trust, and removing friction when it matters most.

### 5. Corefinity Studio Website
- **Live:** https://corefinity-website.vercel.app/
- **Tech:** Next.js, React, Tailwind CSS, Framer Motion
- **Description:** Marketing site for Corefinity, a software studio that helps startups, businesses, and enterprises design, build, and launch web, mobile, and AI products. Features clean hero, animated sections, and service-led layout.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Gmail account (for contact form email integration)

### Installation

```bash
# Clone repository
git clone https://github.com/muhassannaeem/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.local .example .env.local
# Update EMAIL_USER and EMAIL_PASSWORD in .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

## 🔧 Configuration

### Email Setup with Nodemailer

To enable the contact form to send emails:

1. Enable 2-Step Verification in your Gmail account
2. Generate an App Password at: https://myaccount.google.com/apppasswords
3. Update `.env.local` with your credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-character-app-password
   ```

The contact form will now send submissions to `muhassannaeem@gmail.com` with user details (name, email, subject, message).

## 📊 Available Scripts

```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint for code quality
npm run lint
```

## 🎨 Design System

### Color Palette
- **Primary Accent:** Cyan `#06B6D4`
- **Secondary Accent:** Indigo `#6366F1`
- **Background:** Near-black `#0a0a0b`
- **Text Primary:** White `#ffffff`
- **Text Secondary:** Zinc `#27272a`

### Gradient Effects
```css
/* Main Gradient (Cyan → Indigo) */
background: linear-gradient(to right, #06B6D4, #6366F1);

/* Reversed Gradient (Indigo → Cyan) */
background: linear-gradient(to right, #6366F1, #06B6D4);

/* Background Glow */
background: linear-gradient(to bottom-right, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.1));
```

### Responsive Breakpoints
- **Mobile:** 0px - 640px (sm)
- **Tablet:** 641px - 1024px (md)
- **Desktop:** 1025px+ (lg)

## 📱 Page Sections

### Navbar
- Sticky header with logo
- Center navigation (About, Work, Services, Contact)
- Download CV button & Hire Me CTA
- Mobile hamburger menu that animates on scroll

### Hero
- Dynamic headline with gradient text effect
- Professional description
- Two CTA buttons (View Projects, Let's Talk)
- Profile image with glow effect and smooth animations
- Floating info card (10+ Live Projects)

### About
- Professional biography
- 4 statistics cards with gradient values
  - 1+ Years Experience
  - 10+ Happy Clients
  - 1K+ Commits
  - 02+ Awards

### Tech Arsenal
- 6 technology categories with icons:
  - Languages (JavaScript, TypeScript, Python, etc.)
  - Frontend (React, Next.js, Vue, etc.)
  - Backend (Node.js, Express, Django, etc.)
  - AI & ML (TensorFlow, PyTorch, etc.)
  - Tools (Git, Docker, VS Code, etc.)
  - Specialties (Web Design, Mobile Apps, etc.)
- Vertical-centered card layout with tech pill styling

### Featured Projects
- Grid layout showcasing 5 live projects
- Project images, descriptions, and tech stacks
- Live Demo button (opens in new tab)
- Source Code button (conditionally hidden if no GitHub repo)

### Services
- 4 service offerings with visual icons
- Brief descriptions of each service

### Contact
- Contact CTA heading with gradient text
- Email and location information
- Social media links (LinkedIn, GitHub)
- Fully functional contact form with validation
- Nodemailer email integration for submissions

### Footer
- Brand name and tagline
- Navigation links
- Social media links
- Copyright notice

## 🚀 Deployment

### Deploy to Vercel

This portfolio is optimized for Vercel deployment:

```bash
# Push to GitHub
git push origin main

# Connect repository in Vercel Dashboard
# Add environment variables:
# - EMAIL_USER
# - EMAIL_PASSWORD

# Deploy automatically on push
```

### Environment Variables Required
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

## 🔍 Code Quality

All files pass ESLint linting with zero errors:

```bash
npm run lint
```

No TypeScript compilation errors:

```bash
npx tsc --noEmit
```

## 📝 Key Components

### Container Component
Reusable wrapper with max-width constraint and padding:
```typescript
<Container className="...">
  {/* Content */}
</Container>
```

### Motion Components
All animations use Framer Motion with variants for consistent timing:
- `containerVariants` - Parent stagger animations
- `itemVariants` - Child fade-in animations
- Custom `initial`, `animate`, `whileHover` states

### Project Card
Displays project showcase with:
- Image with hover overlay
- Title and description
- Technology stack pills
- Live Demo & Source buttons with conditional rendering

## 📄 License

MIT License - This project is open source and available for personal and commercial use.

## 👨‍💻 Author

**Muhammad Hassan Naeem**
- Email: muhassannaeem@gmail.com
- LinkedIn: https://www.linkedin.com/in/muhammad-hassan-naeem-77b551251/
- GitHub: https://github.com/muhassannaeem
- Location: Islamabad, Pakistan

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
