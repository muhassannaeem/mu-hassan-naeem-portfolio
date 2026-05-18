'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Container from '@/components/ui/Container';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top right glow */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        {/* Bottom left glow */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <Container className="relative z-10 py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-120px)]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <motion.div className="flex flex-col gap-8 justify-center">
            {/* Badge */}
            <motion.div
              variants={itemVariants as any}
              className="inline-flex w-fit px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                <span className="text-xs font-medium text-white">Software Engineer</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants as any} className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-white">Building modern</span>
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  web, mobile, and
                </span>
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  AI-powered
                </span>
                <span className="block text-white">applications.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants as any}
              className="text-lg text-zinc-400 max-w-lg leading-relaxed"
            >
              Architecture scalable digital solutions with a focus on performance, user
              experience, and cutting-edge intelligence. Transforming complex problems into
              elegant code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants as any}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
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
                Let's Talk
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image and Info Card */}
          <motion.div
            variants={itemVariants as any}
            className="relative flex items-center justify-center"
          >
            {/* Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="relative w-full aspect-square max-w-md lg:max-w-lg"
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/20 rounded-3xl blur-3xl" />

              {/* Image container with glass effect */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden backdrop-blur-xl border border-white/10 bg-white/5">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative">
                  {/* Inner gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                  {/* Placeholder avatar with initials */}
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center border border-white/20">
                      <span className="text-4xl font-bold text-white">MHN</span>
                    </div>
                    <p className="text-sm text-zinc-400">Replace with profile image</p>
                  </div>
                </div>

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-cyan-500/20 pointer-events-none" />
              </div>

              {/* Floating Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                className="absolute -bottom-8 -left-6 md:-left-12 lg:-left-16 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">25+</div>
                    <div className="text-xs text-zinc-400">Live Projects</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
