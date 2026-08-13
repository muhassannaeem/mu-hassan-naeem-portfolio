'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Container from '@/components/ui/Container';
import { featuredProjects, type Project } from '@/config/projects';
import ProjectCard from '@/components/sections/ProjectCard';

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

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function FeaturedProjects() {
  return (
    <section
      id="work"
      className="relative w-full py-12 md:py-20 flex items-center justify-center overflow-hidden"
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
          className="flex flex-col gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
            <motion.div className="flex flex-col gap-3">
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
              href="/projects"
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
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
