'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import type { Project } from '@/config/projects';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
    >
      <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border-b border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col gap-4 p-6 flex-grow">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
        </div>

        <p className="text-sm md:text-base text-zinc-400 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex flex-col gap-2 pt-2">
          <h4 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={`flex gap-3 pt-4 mt-auto ${!project.sourceUrl ? 'w-full' : ''}`}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${!project.sourceUrl ? 'w-full' : 'flex-1'} flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all`}
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Code size={16} />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}