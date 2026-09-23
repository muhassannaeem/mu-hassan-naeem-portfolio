'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue, Variants } from 'framer-motion';
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

const processSteps = [
  {
    number: '01',
    accent: 'text-purple-500',
    dot: 'bg-purple-500',
    halo: 'group-hover:ring-purple-500/25',
    defaultHalo: true,
    stage: 'STAGE 01',
    title: 'Discover the Opportunity',
    description:
      'We examine your business, audience, and market to understand where growth is being lost and where the strongest opportunities lie.',
  },
  {
    number: '02',
    accent: 'text-blue-500',
    dot: 'bg-blue-500',
    halo: 'group-hover:ring-blue-500/25',
    stage: 'STAGE 02',
    title: 'Design the Blueprint',
    description:
      'We map the user journey, technical architecture, and visual direction needed to turn strategy into a clear, buildable plan.',
  },
  {
    number: '03',
    accent: 'text-cyan-500',
    dot: 'bg-cyan-500',
    halo: 'group-hover:ring-cyan-500/25',
    stage: 'STAGE 03',
    title: 'Build the System',
    description:
      'We develop, test, and refine the product, integrating the tools and AI-driven automations that keep it running smoothly.',
  },
  {
    number: '04',
    accent: 'text-orange-500',
    dot: 'bg-orange-500',
    halo: 'group-hover:ring-orange-500/25',
    stage: 'STAGE 04',
    title: 'Launch & Scale',
    description:
      'We deploy to production, connect performance tracking, and stay on to ensure it keeps performing as your business grows.',
  },
];

function TimelineStep({
  step,
  index,
  progress,
}: {
  step: (typeof processSteps)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const revealAt = [0.07, 0.21, 0.35, 0.5][index];
  const contentOpacity = useTransform(progress, [Math.max(0, revealAt - 0.1), revealAt], [0, 1]);
  const contentY = useTransform(progress, [Math.max(0, revealAt - 0.1), revealAt], [14, 0]);
  const dotScale = useTransform(
    progress,
    [Math.max(0, revealAt - 0.05), revealAt, Math.min(1, revealAt + 0.08)],
    [0.95, 1.12, 1],
  );
  const dotGlow = useTransform(
    progress,
    [Math.max(0, revealAt - 0.05), revealAt, Math.min(1, revealAt + 0.08)],
    [
      '0 0 0 2px rgba(161, 161, 170, 0.2)',
      '0 0 0 5px rgba(99, 102, 241, 0.24)',
      '0 0 0 2px rgba(161, 161, 170, 0.2)',
    ],
  );

  return (
    <li className="group relative">
      <motion.div
        style={{ scale: dotScale, boxShadow: dotGlow }}
        className={`relative z-10 mb-5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white ring-1 ring-zinc-400 ring-offset-2 ring-offset-white transition-shadow duration-300 group-hover:ring-4 ${step.dot} ${step.halo}`}
      >
        {step.number}
      </motion.div>
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="transition-transform duration-300 ease-out group-hover:-translate-y-1"
      >
        <p className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${step.accent}`}>
          {step.stage}
        </p>
        <h3 className="mt-4 max-w-[13rem] text-2xl font-bold leading-tight tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-zinc-700 md:text-3xl">
          {step.title}
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-600 transition-colors duration-300 group-hover:text-zinc-800 md:text-base">
          {step.description}
        </p>
      </motion.div>
    </li>
  );
}

export default function About() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start 85%', 'end 45%'],
  });
  const timelineDrawProgress = useTransform(timelineProgress, [0, 0.5], [0, 1]);

  return (
    <section
      id="about"
      className="relative flex w-full items-center justify-center overflow-hidden bg-white py-16 text-zinc-900"
    >
      {/* Background gradient elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Top left glow */}
           <motion.div
             className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
             animate={{ x: [0, 14, 0], y: [0, -12, 0], scale: [1, 1.08, 1], opacity: [0.45, 0.75, 0.45] }}
             transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
           />
        {/* Bottom right glow */}
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <Container className="relative z-10">
        <motion.div
          className="grid grid-cols-1 items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="flex flex-col gap-6">
            <SectionHeading
              label="About Us"
              title={
                <>
                  Innovating through{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      background: 'linear-gradient(to right, #06B6D4, #6366F1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Precision
                  </span>{' '}
                  &{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      background: 'linear-gradient(to right, #06B6D4, #6366F1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Purpose
                  </span>
                </>
              }
              labelClassName="text-purple-400"
              titleClassName="text-zinc-900"
            />

            <motion.div variants={itemVariants} className="space-y-5 pt-1">
              <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
                We&apos;re a digital product studio driven by the challenge of building
                high-impact web, mobile, and AI-powered products. From backend
                architecture to pixel-perfect interfaces, we bridge the gap between
                technical complexity and intuitive design. Whether it&apos;s a scalable
                web platform, a mobile app, or an AI-powered system, we focus on
                writing clean, maintainable code — and building things that are built
                to grow with your business.
              </p>
            </motion.div>

            <ol ref={timelineRef} style={{ position: 'relative' }} className="relative mt-8 grid grid-cols-1 gap-8 pt-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 lg:gap-8">
              <motion.span
                style={{ scaleX: timelineDrawProgress }}
                className="pointer-events-none absolute left-0 right-[11%] top-12 hidden h-1 origin-left bg-zinc-400 lg:block"
                aria-hidden="true"
              />
              {processSteps.map((step, index) => (
                <TimelineStep key={step.number} step={step} index={index} progress={timelineProgress} />
              ))}
            </ol>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
