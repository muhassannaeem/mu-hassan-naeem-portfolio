'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Code2,
  Palette,
  Server,
  Brain,
  Wrench,
  Zap,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

interface TechCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  technologies: string[];
  accentColor: string;
}

const techCards: TechCard[] = [
  {
    id: 'languages',
    icon: <Code2 size={32} />,
    title: 'Languages',
    technologies: ['JavaScript', 'Python', 'C++', 'Java', 'SQL', 'Kotlin', 'Typescript'],
    accentColor: 'from-indigo-500 to-indigo-600',
  },
  {
    id: 'frontend',
    icon: <Palette size={32} />,
    title: 'Frontend',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Jetpack Compose'],
    accentColor: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 'backend',
    icon: <Server size={32} />,
    title: 'Backend',
    technologies: ['Node.js', 'FastAPI', 'Express.js', 'MongoDB', 'Rest APIs', 'MySQL'],
    accentColor: 'from-orange-500 to-orange-600',
  },
  {
    id: 'aiml',
    icon: <Brain size={32} />,
    title: 'AI & ML',
    technologies: ['TensorFlow', 'Prompt Engineering', 'NLP', 'LLM Evaluation'],
    accentColor: 'from-purple-500 to-purple-600',
  },
  {
    id: 'tools',
    icon: <Wrench size={32} />,
    title: 'Tools',
    technologies: ['Docker', 'Git', 'Figma', 'Postman', 'Vercel'],
    accentColor: 'from-pink-500 to-pink-600',
  },
  {
    id: 'specialties',
    icon: <Zap size={32} />,
    title: 'Specialties',
    technologies: ['Full-Stack Development', 'AI Integration', 'Cloud Deployment', 'Performance Optimization'],
    accentColor: 'from-emerald-500 to-emerald-600',
  },
];

interface TechItemProps {
  card: TechCard;
  index: number;
}

function TechCard({ card, index }: TechItemProps) {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300 flex flex-col items-center"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col items-center text-center gap-4 w-full">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.accentColor} text-white flex items-center justify-center flex-shrink-0`}
        >
          {card.icon}
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-white whitespace-nowrap">{card.title}</h3>

        {/* Technology List */}
        <div className="flex flex-wrap gap-1.5 w-full justify-center">
          {card.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 hover:border-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TechArsenal() {
  return (
    <section
      id="tech-arsenal"
      className="relative w-full py-12 md:py-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top right glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        {/* Bottom left glow */}
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <Container className="relative z-10">
        <motion.div
          className="flex flex-col gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <SectionHeading
            align="center"
            label="My Expertise"
            title="Technical Arsenal"
            subtitle="The tools and technologies I use to bring ideas to life."
            labelClassName="text-cyan-400"
            subtitleClassName="max-w-xl mx-auto"
          />

          {/* Tech Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
          >
            {techCards.map((card, index) => (
              <TechCard key={card.id} card={card} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
