export interface Project {
  id: string;
  title: string;
  clientType: string;
  problem: string;
  result: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  sourceUrl: string;
}

export const projects: Project[] = [
  {
    id: 'ielts-counsel',
    title: 'IELTS Counsel',
    clientType: 'Education / Test Prep',
    problem: 'Students needed one place to practice all 4 IELTS modules with real feedback, not scattered free tools.',
    result: 'Delivered a complete prep platform with personalized study plans and real-time feedback, built to keep students engaged and scoring higher.',
    image: '/ielts.png',
    technologies: ['Python', 'React', 'Tailwind'],
    liveUrl: 'https://www.ieltscounsel.com/',
    sourceUrl: '',
  },
  {
    id: 'elevat8',
    title: 'Elevat8',
    clientType: 'Fitness & Wellness',
    problem: 'A gym needed a modern site that reflects its brand and actually converts visitors into sign-ups, not just an info page.',
    result: 'Built a polished, fitness-focused site showcasing programs and features designed to drive membership inquiries.',
    image: '/elevat8.png',
    technologies: ['React.js', 'Tailwind CSS'],
    liveUrl: 'https://elevat8-sigma.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'code-smell-detection',
    title: 'Code Smell Detection',
    clientType: 'Developer Tooling / AI',
    problem: 'Development teams often catch code quality issues too late, after they\'ve already caused maintainability problems.',
    result: 'Built a tool that scans code and flags design issues early, with clear, structured feedback that speeds up review time.',
    image: '/codesmell.png',
    technologies: ['React', 'Python', 'API'],
    liveUrl: 'https://code-smell-detection.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'docxtract',
    title: 'DocXtract',
    clientType: 'AI Product / SaaS',
    problem: 'People drowning in long PDFs with no fast way to extract, understand, or query the important parts.',
    result: 'Built an AI platform that turns any document into summaries, quizzes, and an interactive chat, cutting document review time dramatically.',
    image: '/docxtract.png',
    technologies: ['Python', 'FastAPI', 'Next.js', 'MongoDB'],
    liveUrl: 'https://doc-xtract-frontend.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'corefinity',
    title: 'Corefinity Studio',
    clientType: 'Software Studio / Agency',
    problem: 'Needed a site that converts visitors into real client conversations, not just a portfolio to scroll past.',
    result: 'Delivered a service-led site with animated sections and clean structure, built specifically to drive inbound inquiries.',
    image: '/corefinity.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://corefinity-website.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'blood-pulse-connect',
    title: 'Blood Pulse Connect',
    clientType: 'Healthcare / Social Impact (Design Concept)',
    problem: 'Donors and recipients had no fast, trustworthy way to connect during urgent situations.',
    result: 'Designed a full prototype built around speed and trust, reducing friction at the exact moment it matters most.',
    image: '/bloodpulse.png',
    technologies: ['Figma', 'UI/UX', 'Prototyping'],
    liveUrl: 'https://www.figma.com/design/EwgWWL85cK6T0Xs091esDv/Blood-Pulse-Connect?node-id=0-1&p=f',
    sourceUrl: '',
  },
  {
    id: 'promography',
    title: 'Promography',
    clientType: 'AI Product / SaaS',
    problem: 'Creators struggle to find reliable, high-quality prompts for AI tools without digging through scattered forums.',
    result: 'Built a platform where creators discover and share proven AI prompts, organized for fast, targeted searching.',
    image: '/promography.png',
    technologies: ['Next.js', 'Tailwind', 'Python'],
    liveUrl: 'https://promography.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'apex-gym',
    title: 'Apex Gym',
    clientType: 'Fitness & Wellness',
    problem: 'A gym needed a clean, modern site to showcase programs and drive membership sign-ups.',
    result: 'Delivered a membership-focused layout highlighting training programs and key features in a clean, modern design.',
    image: '/apexgym.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Python'],
    liveUrl: 'https://apex-gym-red.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'elevat8-design',
    title: 'Elevat8 Design',
    clientType: 'Fitness & Wellness (Design Concept)',
    problem: 'A gym brand needed a bold visual identity that captures energy and motivation before any code was written.',
    result: 'Designed a full concept shaped around motion, strength, and focus, setting the visual direction for the brand.',
    image: '/elevat8.png',
    technologies: ['Figma', 'UI/UX', 'Prototyping'],
    liveUrl: 'https://www.figma.com/design/5NU6ClAKf500OX8ifW0qPw/Elevat8?node-id=0-1&p=f&t=6T73f2zgFyL0SP4M-0',
    sourceUrl: '',
  },
];

export const featuredProjects = projects.slice(0, 6);