export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  sourceUrl: string;
}

export const projects: Project[] = [
  {
    id: 'ielts-counsel',
    title: 'IELTS Counsel',
    description:
      'A complete IELTS prep platform with Listening, Reading, Writing, and Speaking modules, personalized study plans, and real-time feedback to help you achieve your target score.',
    image: '/ielts.png',
    category: 'Technology Stack',
    technologies: ['Python', 'React', 'Tailwind'],
    liveUrl: 'https://www.ieltscounsel.com/',
    sourceUrl: '',
  },
  {
    id: 'elevat8',
    title: 'Elevat8',
    description:
      'A gym website that presents training programs, core features, and a polished fitness-focused experience for visitors.',
    image: '/elevat8.png',
    category: 'Technology Stack',
    technologies: ['React.js', 'Tailwind CSS'],
    liveUrl: 'https://elevat8-sigma.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'code-smell-detection',
    title: 'Code Smell Detection',
    description:
      'A web-based tool that scans uploaded source code and flags common design issues like Bloaters, Couplers, and other Object-Oriented smells. Helps developers spot quality and maintainability problems early, with clear, structured feedback for each finding.',
    image: '/codesmell.png',
    category: 'Technology Stack',
    technologies: ['React', 'Python', 'API'],
    liveUrl: 'https://code-smell-detection.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'docxtract',
    title: 'DocXtract',
    description:
      'An AI-powered document intelligence platform that transforms PDFs into interactive learning resources through summarization, document chat, comparisons, quizzes, and flashcards, enabling faster understanding and knowledge extraction.',
    image: '/docxtract.png',
    category: 'Technology Stack',
    technologies: ['Python', 'FastAPI', 'Next.js', 'MongoDB'],
    liveUrl: 'https://doc-xtract-frontend.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'corefinity',
    title: 'Corefinity Studio',
    description:
      'Marketing site for Corefinity, a software studio that helps startups, businesses, and enterprises design, build, and launch web, mobile, and AI products. Clean hero, animated sections, and a service-led layout that converts visitors into real conversations.',
    image: '/corefinity.png',
    category: 'Technology Stack',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://corefinity-website.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'blood-pulse-connect',
    title: 'Blood Pulse Connect',
    description:
      'A full Figma design with prototypes for a blood-donation app that helps donors and recipients connect in minutes. Built around urgency, trust, and removing friction when it matters most.',
    image: '/bloodpulse.png',
    category: 'Technology Stack',
    technologies: ['Figma', 'UI/UX', 'Prototyping'],
    liveUrl: 'https://www.figma.com/design/EwgWWL85cK6T0Xs091esDv/Blood-Pulse-Connect?node-id=0-1&p=f',
    sourceUrl: '',
  },
  {
    id: 'promography',
    title: 'Promography',
    description:
      'Find the perfect prompt for any task, from creative writing to complex problem-solving. Join thousands of creators sharing their best AI prompts.',
    image: '/promography.png',
    category: 'Technology Stack',
    technologies: ['Next.js', 'Tailwind', 'Python'],
    liveUrl: 'https://promography.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'apex-gym',
    title: 'Apex Gym',
    description:
      'A gym website that highlights training programs, key features, and membership-focused content in a clean, modern layout.',
    image: '/apexgym.png',
    category: 'Technology Stack',
    technologies: ['Next.js', 'Tailwind CSS', 'Python'],
    liveUrl: 'https://apex-gym-red.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'elevat8-design',
    title: 'Elevat8 Design',
    description:
      'A bold gym concept shaped to inspire motion, strength, and focus.',
    image: '/elevat8.png',
    category: 'Technology Stack',
    technologies: ['Figma', 'UI/UX', 'Prototyping'],
    liveUrl: 'https://www.figma.com/design/5NU6ClAKf500OX8ifW0qPw/Elevat8?node-id=0-1&p=f&t=6T73f2zgFyL0SP4M-0',
    sourceUrl: '',
  },
];

export const featuredProjects = projects.slice(0, 6);