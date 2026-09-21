'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Container from '@/components/ui/Container';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  gradient: string;
  glow: string;
}

const stats: Stat[] = [
  {
    value: 15,
    suffix: '+',
    label: 'Projects Delivered',
    gradient: 'from-purple-400 via-purple-500 to-indigo-500',
    glow: 'rgba(139, 92, 246, 0.35)',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Happy Clients',
    gradient: 'from-cyan-400 via-cyan-500 to-indigo-500',
    glow: 'rgba(6, 182, 212, 0.35)',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Client Satisfaction',
    gradient: 'from-emerald-400 via-green-500 to-emerald-600',
    glow: 'rgba(16, 185, 129, 0.35)',
  },
  {
    value: 50,
    prefix: '$',
    suffix: 'K+',
    label: 'Revenue Generated',
    gradient: 'from-amber-300 via-orange-400 to-orange-500',
    glow: 'rgba(249, 115, 22, 0.35)',
  },
];

function CountUp({ stat }: { stat: Stat }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const startTime = performance.now();
    let animationFrame = 0;

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(easedProgress * stat.value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, stat.value]);

  return (
    <span ref={countRef}>
      {stat.prefix}
      {count}
      {stat.suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="group relative h-full rounded-2xl p-px overflow-hidden"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(135deg, transparent 15%, ${stat.glow}, transparent 85%)` }}
      />
      <div className="relative flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:p-8">
        <span className="absolute left-5 top-5 text-xs font-bold tracking-widest text-zinc-600">
          0{index + 1}
        </span>
        <div className={`bg-gradient-to-br ${stat.gradient} bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl`}>
          <CountUp stat={stat} />
        </div>
        <p className="text-sm text-zinc-400 md:text-base">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export default function CounterStats() {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="flex flex-col gap-8"
        >
          <motion.div variants={cardVariants}>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Our Impact</span>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}