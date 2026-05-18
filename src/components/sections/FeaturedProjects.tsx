'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
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

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  sourceUrl: string;
}

const projects: Project[] = [
  {
    id: 'fixpro',
    title: 'FixPro',
    description:
      'A comprehensive maintenance and repair management ecosystem',
    image: '/projects/fixpro.png',
    category: 'Technology Stack',
    technologies: ['React', 'API', 'Integrations'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'ielts-ai',
    title: 'IELTS AI Eval',
    description:
      'Automated essay scoring system utilizing LLMs to provide instant...',
    image: '/projects/ielts-ai.png',
    category: 'Technology Stack',
    technologies: ['Python', 'Vision', 'Prompt'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'orderswift',
    title: 'OrderSwift',
    description:
      'A high-performance realtime commerce platform with real-time...',
    image: '/projects/orderswift.png',
    category: 'Technology Stack',
    technologies: ['Flutter', 'Firebase', 'Stripe'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border-b border-white/10">
        <div className="w-full h-full flex items-center justify-center text-zinc-600">
          {/* Placeholder for project image */}
          <div className="text-sm">Project Image</div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-grow">
        {/* Title and Category */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-bold text-white">
            {project.title}
          </h3>
          <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 mt-auto">
          <a
            href={project.liveUrl}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
          <a
            href={project.sourceUrl}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <Code size={16} />
            <span>Source</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative w-full py-20 md:py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top left glow */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        {/* Bottom right glow */}
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
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
          <motion.div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.div className="flex flex-col gap-4">
              {/* Section Label */}
              <motion.div variants={itemVariants}>
                <span className="inline-block text-xs font-bold tracking-widest text-indigo-400 uppercase">
                  Selected Work
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white"
              >
                Featured Projects
              </motion.h2>
            </motion.div>

            {/* View All Link */}
            <motion.a
              variants={itemVariants}
              href="#"
              className="inline-flex items-center gap-2 text-sm md:text-base text-zinc-400 hover:text-white transition-colors"
            >
              <span>View all Projects</span>
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
