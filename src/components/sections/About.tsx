'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code2, Palette, Rocket, Search } from 'lucide-react';
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
    icon: Search,
    border: 'hover:border-purple-300',
    numberColor: 'text-purple-500',
    iconColor: 'bg-purple-100 text-purple-500',
    title: 'Discover',
    description: 'We learn your business, goals, and what success looks like.',
  },
  {
    number: '02',
    icon: Palette,
    border: 'hover:border-blue-300',
    numberColor: 'text-blue-500',
    iconColor: 'bg-blue-100 text-blue-500',
    title: 'Design',
    description: 'We map out the experience and visual direction before writing code.',
  },
  {
    number: '03',
    icon: Code2,
    border: 'hover:border-cyan-300',
    numberColor: 'text-cyan-500',
    iconColor: 'bg-cyan-100 text-cyan-500',
    title: 'Build',
    description: 'We develop, test, and refine, keeping you in the loop the whole way.',
  },
  {
    number: '04',
    icon: Rocket,
    border: 'hover:border-orange-300',
    numberColor: 'text-orange-500',
    iconColor: 'bg-orange-100 text-orange-500',
    title: 'Launch & Support',
    description: 'We ship it, then stick around to make sure it performs.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative flex w-full items-center justify-center overflow-hidden bg-white py-12 text-zinc-900 md:py-20"
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
              title="Innovating through Precision & Purpose"
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

            <div className="mt-6 border-t border-zinc-200 pt-8 md:mt-8 md:pt-10">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
                  How We Work
                </span>
              </div>

              <ol className="flex flex-col gap-4 lg:flex-row lg:gap-0">
                {processSteps.map((step, index) => (
                  <li
                    key={step.number}
                    className={`relative flex-1 ${
                      index < processSteps.length - 1
                        ? 'after:absolute after:left-5 after:top-full after:h-4 after:w-px after:bg-purple-500/30 lg:after:left-1/2 lg:after:top-1/2 lg:after:h-px lg:after:w-full'
                        : ''
                    }`}
                  >
                    <div className={`group relative z-10 h-full rounded-2xl border border-zinc-200 bg-zinc-50 p-6 pt-12 shadow-[0_8px_24px_rgba(24,24,27,0.08)] transition-all duration-300 hover:-translate-y-1 ${step.border} hover:shadow-[0_16px_32px_rgba(24,24,27,0.14)] md:p-7 md:pt-12 lg:mr-4`}>
                      <span className={`absolute left-5 top-5 text-2xl font-extrabold tracking-tight ${step.numberColor} md:left-6 md:top-6 md:text-3xl`}>
                        {step.number}
                      </span>
                      <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-full ${step.iconColor}`}>
                        <step.icon size={21} strokeWidth={2} aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-semibold text-zinc-900">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
