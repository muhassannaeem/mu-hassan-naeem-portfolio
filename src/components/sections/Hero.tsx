'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Container from '@/components/ui/Container';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const titleLineVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const floatVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 10 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top right glow */}
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -18, 0], y: [0, 14, 0], scale: [1, 1.08, 1], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Bottom left glow */}
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 16, 0], y: [0, -12, 0], scale: [1, 1.06, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main content */}
      <Container className="relative z-10 py-8 md:py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-120px)]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <motion.div className="flex flex-col gap-8 justify-center">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex w-fit px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: 'linear-gradient(to right, #06B6D4, #6366F1)',
                  }}
                />
                <span className="text-xs font-medium text-white">Digital Product Expert</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={titleVariants} className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <motion.span variants={titleLineVariants} className="block text-white">
                  A{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      background: 'linear-gradient(to right, #06B6D4, #6366F1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    digital solution
                  </span>
                </motion.span>
                <motion.span variants={titleLineVariants} className="block text-white">
                  that actually{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      background: 'linear-gradient(to right, #06B6D4, #6366F1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    wins
                  </span>{' '}
                  you{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      background: 'linear-gradient(to right, #06B6D4, #6366F1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    customers.
                  </span>
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={titleLineVariants}
              className="text-lg text-zinc-400 max-w-lg leading-relaxed"
            >
              We build websites, apps, and AI-powered systems that help businesses attract more customers, automate the busywork, and scale without adding overhead.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              {/* Primary Button */}
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                style={{
                  background: 'linear-gradient(to right, #6366F1, #06B6D4)',
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
                }}
              >
                View Projects
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold flex items-center justify-center gap-2 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all"
              >
                Let&apos;s Talk
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center lg:translate-x-8"
          >
            {/* Circular profile image */}
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              whileHover={{ y: -8, rotate: -1 }}
              className="relative w-full mt-8 -translate-y-4 max-w-xs lg:max-w-sm lg:-translate-y-6"
            >
              {/* Glow effect behind image */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background: 'linear-gradient(to bottom-right, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.1))',
                }}
                animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Image container - clean and sleek */}
              <div className="relative w-full aspect-square rounded-full overflow-hidden border border-white/10">
                {/* Profile Image */}
                <Image
                  src="/Hassan.png"
                  alt="Hassan"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="translate-y-9 translate-x-4 scale-120 object-cover object-[center_25%]"
                  priority
                  quality={100}
                />
              </div>
              </motion.div>
            </motion.div>
          </motion.div>
      </Container>
    </section>
  );
}
