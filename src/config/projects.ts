export interface Project {
  id: string;
  title: string;
  clientType: string;
  outcomeTeaser: string;
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
    outcomeTeaser: 'Helping students prep smarter with real-time feedback.',
    problem: 'Students preparing for IELTS were relying on scattered free tools with no structure, no real feedback, and no way to track progress toward their target score.',
    result: 'Delivered a complete prep platform covering all 4 modules with personalized study plans and real-time feedback, helping students prepare with structure and confidence.',
    image: '/ielts.png',
    technologies: ['Python', 'React', 'Tailwind CSS'],
    liveUrl: 'https://www.ieltscounsel.com/',
    sourceUrl: '',
  },
  {
    id: 'elevat8',
    title: 'Elevat8',
    clientType: 'Fitness & Wellness',
    outcomeTeaser: "A digital presence that matches the gym's energy.",
    problem: "The gym's brand and offerings weren't translating online — visitors had no clear reason to convert into leads or members.",
    result: 'Built a polished, fitness-focused site with clear program showcases and conversion-focused CTAs, giving the brand a digital presence that matches its energy.',
    image: '/elevat8.png',
    technologies: ['React.js', 'Tailwind CSS'],
    liveUrl: 'https://elevat8-sigma.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'code-smell-detection',
    title: 'Code Smell Detection',
    clientType: 'Developer Tooling / AI',
    outcomeTeaser: 'Catching code issues before they become technical debt.',
    problem: 'Development teams were catching code quality issues late, after they\'d already caused maintainability and technical debt problems.',
    result: 'Built a tool that scans source code and flags design issues early, with clear, structured feedback that speeds up code review and prevents problems from compounding.',
    image: '/codesmell.png',
    technologies: ['React', 'Python', 'API'],
    liveUrl: 'https://code-smell-detection.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'docxtract',
    title: 'DocXtract',
    clientType: 'AI Product / SaaS',
    outcomeTeaser: 'Turning hours of document review into minutes.',
    problem: 'People were drowning in long PDFs and documents with no fast way to extract, understand, or query the information that actually mattered.',
    result: 'Built an AI-powered platform that turns any document into summaries, quizzes, comparisons, and an interactive chat — cutting document review time from hours to minutes.',
    image: '/docxtract.png',
    technologies: ['Python', 'FastAPI', 'Next.js', 'MongoDB'],
    liveUrl: 'https://doc-xtract-frontend.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'corefinity',
    title: 'Corefinity Studio',
    clientType: 'Software Studio / Agency',
    outcomeTeaser: 'Built to turn visitors into real client conversations.',
    problem: 'The studio needed a site that did more than list services — it needed to actively convert visitors into real client conversations.',
    result: 'Delivered a service-led site with a clean hero, animated sections, and a structure built specifically to drive inbound inquiries rather than passive browsing.',
    image: '/corefinity.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://corefinity-website.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'blood-pulse-connect',
    title: 'Blood Pulse Connect',
    clientType: 'Healthcare / Social Impact (Design Concept)',
    outcomeTeaser: 'Removing friction when speed and trust matter most.',
    problem: 'Blood donors and recipients had no fast, trustworthy way to connect during urgent, time-sensitive situations.',
    result: 'Designed a full prototype built around speed and trust, removing friction at exactly the moment it matters most for donors and recipients alike.',
    image: '/bloodpulse.png',
    technologies: ['Figma', 'UI/UX', 'Prototyping'],
    liveUrl: 'https://www.figma.com/design/EwgWWL85cK6T0Xs091esDv/Blood-Pulse-Connect?node-id=0-1&p=f',
    sourceUrl: '',
  },
  {
    id: 'promography',
    title: 'Promography',
    clientType: 'AI Product / SaaS',
    outcomeTeaser: 'Turning prompt trial-and-error into a shared resource.',
    problem: 'Creators using AI tools struggled to find reliable, high-quality prompts, often digging through scattered forums and losing time experimenting.',
    result: 'Built a platform where creators discover and share proven AI prompts, organized for fast, targeted searching — turning trial-and-error into a reusable resource.',
    image: '/promography.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Python'],
    liveUrl: 'https://promography.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'apex-gym',
    title: 'Apex Gym',
    clientType: 'Fitness & Wellness',
    outcomeTeaser: 'A clean path from visitor to member.',
    problem: 'The gym needed a clean, modern site that clearly showcased programs and made it easy for visitors to take the next step toward membership.',
    result: 'Delivered a membership-focused layout highlighting training programs and key features in a clean, conversion-friendly design.',
    image: '/apexgym.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Python'],
    liveUrl: 'https://apex-gym-red.vercel.app/',
    sourceUrl: '',
  },
  {
    id: 'elevat8-design',
    title: 'Elevat8 Design',
    clientType: 'Fitness & Wellness (Design Concept)',
    outcomeTeaser: 'A bold identity built before a single line of code.',
    problem: 'The gym brand needed a bold, cohesive visual identity established before any code was written — one that captured energy and motivation from the first impression.',
    result: 'Designed a full concept shaped around motion, strength, and focus, setting the visual direction that guided the eventual site build.',
    image: '/elevat8design.png',
    technologies: ['Figma', 'UI/UX', 'Prototyping'],
    liveUrl: 'https://www.figma.com/design/5NU6ClAKf500OX8ifW0qPw/Elevat8?node-id=0-1&p=f&t=6T73f2zgFyL0SP4M-0',
    sourceUrl: '',
  },
];

export const featuredProjects = projects.slice(0, 6);