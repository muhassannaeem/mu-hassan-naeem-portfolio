'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import {
  ArrowUpRight,
  RotateCw,
} from 'lucide-react';
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
  isFlipped: boolean;
  onFlip: () => void;
}

export default function ProjectCard({ project, index, isFlipped, onFlip }: ProjectCardProps) {
  const isFirstProject = index === 0;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onFlip();
    }
  };

  const openLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <motion.div
      variants={cardVariants}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      className="h-full"
    >
      <div
        className={`group project-card h-full ${isFlipped ? 'is-flipped' : ''}`}
        role="button"
        tabIndex={0}
        aria-expanded={isFlipped}
        aria-label={`${isFlipped ? 'Hide' : 'View'} details for ${project.title}`}
        aria-live={isFlipped ? 'polite' : 'off'}
        onClick={onFlip}
        onKeyDown={handleKeyDown}
      >
        <div className="project-card-face project-card-front flex h-full flex-col overflow-hidden">
          <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-zinc-900">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading={isFirstProject ? 'eager' : 'lazy'}
              priority={isFirstProject}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
            <div className="min-w-0">
              <h3 className="text-lg font-bold leading-snug text-white">{project.title}</h3>
              <span className="mt-3 inline-flex max-w-full rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-zinc-400">
                {project.clientType}
              </span>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400">{project.outcomeTeaser}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs text-zinc-500 transition-colors group-hover:text-zinc-300">
                <RotateCw size={13} aria-hidden="true" />
                <span>Tap to explore</span>
              </span>
            </div>

            <div className="mt-auto flex items-end justify-between gap-4 pt-6">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={openLink} className="inline-flex items-center gap-2 border-b border-white/25 pb-1 text-sm font-medium text-zinc-300 transition-colors hover:border-cyan-300 hover:text-cyan-200">
                <span>View Live Site</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="project-card-face project-card-back flex h-full flex-col p-6 md:p-8">
          <div>
            <h3 className="text-lg font-bold leading-snug text-white">{project.title}</h3>
            <p className="mt-3 text-xs text-zinc-500">{project.technologies.join(' · ')}</p>
          </div>

          <div className="mt-10 space-y-7 text-sm leading-relaxed">
            <p className="text-zinc-400">{project.problem}</p>
            <p className="font-semibold text-white">{project.result}</p>
          </div>

          <div className="mt-auto flex justify-end pt-8">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={openLink} className="inline-flex items-center gap-2 border-b border-white/25 pb-1 text-sm font-medium text-zinc-300 transition-colors hover:border-cyan-300 hover:text-cyan-200">
              <span>View Live Site</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}