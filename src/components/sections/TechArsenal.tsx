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
    icon: <Code2 size={24} />,
    title: 'Languages',
    technologies: ['TypeScript', 'Python', 'Rust', 'C++', 'Java'],
    accentColor: 'from-indigo-500 to-indigo-600',
  },
  {
    id: 'frontend',
    icon: <Palette size={24} />,
    title: 'Frontend',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Flutter'],
    accentColor: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 'backend',
    icon: <Server size={24} />,
    title: 'Backend',
    technologies: ['Node.js', 'FastAPI', 'Flask', 'PostgreSQL'],
    accentColor: 'from-orange-500 to-orange-600',
  },
  {
    id: 'aiml',
    icon: <Brain size={24} />,
    title: 'AI & ML',
    technologies: ['PyTorch', 'TensorFlow', 'Spacy', 'LangChain'],
    accentColor: 'from-purple-500 to-purple-600',
  },
  {
    id: 'tools',
    icon: <Wrench size={24} />,
    title: 'Tools',
    technologies: ['Docker', 'Git', 'Figma', 'Postman'],
    accentColor: 'from-pink-500 to-pink-600',
  },
  {
    id: 'specialties',
    icon: <Zap size={24} />,
    title: 'Specialties',
    technologies: ['System Design', 'Microservices', 'Cloud Architecture'],
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
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col gap-5">
        {/* Header with Icon and Title */}
        <div className="flex items-center gap-3">
          <div
            className={`p-3 rounded-lg bg-gradient-to-br ${card.accentColor} text-white flex items-center justify-center flex-shrink-0`}
          >
            {card.icon}
          </div>
          <h3 className="text-lg font-semibold text-white">{card.title}</h3>
        </div>

        {/* Technology List */}
        <div className="flex flex-wrap gap-2">
          {card.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-zinc-300 hover:border-white/20 transition-colors"
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
      className="relative w-full py-20 md:py-32 flex items-center justify-center overflow-hidden"
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
          className="flex flex-col gap-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div className="flex flex-col gap-4 text-center">
            {/* Section Label */}
            <motion.div variants={itemVariants}>
              <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase">
                My Expertise
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white max-w-2xl mx-auto"
            >
              Technical Arsenal
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto"
            >
              The tools and technologies I use to bring ideas to life.
            </motion.p>
          </motion.div>

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
