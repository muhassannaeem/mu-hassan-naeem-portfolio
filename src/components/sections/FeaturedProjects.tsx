'use client';

import React from 'react';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Container from '@/components/ui/Container';
import { featuredProjects } from '@/config/projects';
import ProjectCard from '@/components/sections/ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
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

export default function FeaturedProjects() {
  const [flippedProjectId, setFlippedProjectId] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="relative w-full bg-white py-16 text-zinc-900 flex items-center justify-center overflow-hidden"
    >
      {/* Main content */}
      <Container className="relative z-10">
        <motion.div
          className="flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              label="Selected Work"
              title="Featured Projects"
              labelClassName="text-purple-400"
              titleClassName="text-zinc-900"
            />

            {/* View All Link */}
            <motion.a
              variants={itemVariants}
              href="/projects"
              className="inline-flex items-center gap-2 text-sm md:text-base text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <span>View all Projects</span>
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isFlipped={flippedProjectId === project.id}
                onFlip={() => setFlippedProjectId((currentId) => currentId === project.id ? null : project.id)}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
