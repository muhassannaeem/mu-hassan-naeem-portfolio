'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
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
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

interface StatCard {
  value: string;
  label: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
}

const stats: StatCard[] = [
  {
    value: '03+',
    label: 'Years Experience',
    gradientFrom: 'from-purple-400',
    gradientVia: 'via-purple-500',
    gradientTo: 'to-purple-600',
  },
  {
    value: '40+',
    label: 'Happy Clients',
    gradientFrom: 'from-cyan-400',
    gradientVia: 'via-cyan-500',
    gradientTo: 'to-cyan-600',
  },
  {
    value: '12K+',
    label: 'Commits Made',
    gradientFrom: 'from-orange-400',
    gradientVia: 'via-orange-500',
    gradientTo: 'to-orange-600',
  },
  {
    value: '08+',
    label: 'Tech Awards',
    gradientFrom: 'from-indigo-400',
    gradientVia: 'via-indigo-500',
    gradientTo: 'to-indigo-600',
  },
];

interface StatItemProps {
  stat: StatCard;
  index: number;
}

function StatItem({ stat, index }: StatItemProps) {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)' }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 cursor-default"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        {/* Gradient Value */}
        <div className={`bg-gradient-to-br ${stat.gradientFrom} ${stat.gradientVia} ${stat.gradientTo} bg-clip-text text-transparent`}>
          <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
        </div>

        {/* Label */}
        <p className="text-sm md:text-base text-zinc-400">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-20 md:py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top left glow */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        {/* Bottom right glow */}
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <Container className="relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Column */}
          <motion.div className="flex flex-col gap-8 order-2 lg:order-1">
            {/* Section Label */}
            <motion.div variants={itemVariants}>
              <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase">
                About Me
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white"
            >
              Innovating through
              <br />
              Precision & Purpose
            </motion.h2>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                I am a Software Engineer driven by the challenge of creating
                high-impact digital products. With expertise spanning from low-level
                systems to modern high-level frameworks, I bridge the gap between
                technical complexity and intuitive user design.
              </p>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                Whether it's building robust backend architectures or crafting
                pixel-perfect mobile interfaces, I focus on writing clean,
                maintainable code that scales.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
