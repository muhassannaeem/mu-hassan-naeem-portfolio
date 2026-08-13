'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const headingVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const titleLineVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  labelClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  labelClassName = '',
  titleClassName = '',
  subtitleClassName = '',
}: SectionHeadingProps) {
  const lines = title.split('\n');

  return (
    <motion.div
      variants={headingVariants}
      className={`flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : ''}`}
    >
      <motion.div variants={textVariants}>
        <span className={`inline-block text-xs font-bold tracking-widest uppercase ${labelClassName}`}>
          {label}
        </span>
      </motion.div>

      <motion.h2
        variants={textVariants}
        className={`text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white ${titleClassName}`}
      >
        {lines.map((line, index) => (
          <motion.span key={index} variants={titleLineVariants} className="block">
            {line}
          </motion.span>
        ))}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={textVariants}
          className={`text-base md:text-lg text-zinc-400 leading-relaxed ${subtitleClassName}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}