'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import {
  ChevronDown,
  Globe,
  Smartphone,
  Sparkles,
  Palette,
} from 'lucide-react';
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

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
  hoverGlow: string;
}

const services: Service[] = [
  {
    id: 'web-dev',
    icon: <Globe size={20} strokeWidth={1.8} />,
    title: 'Web Development',
    description: 'Fast, scalable websites built to convert visitors into customers, not just look good.',
    accentColor: 'bg-blue-500',
    hoverGlow: 'group-hover:shadow-blue-500/50',
  },
  {
    id: 'mobile-dev',
    icon: <Smartphone size={20} strokeWidth={1.8} />,
    title: 'Mobile Development',
    description: 'Cross-platform apps with smooth, native-feel performance that your customers actually enjoy using.',
    accentColor: 'bg-cyan-500',
    hoverGlow: 'group-hover:shadow-cyan-500/50',
  },
  {
    id: 'ai-solutions',
    icon: <Sparkles size={20} strokeWidth={1.8} />,
    title: 'AI Solutions',
    description: 'From smart features inside your product to automating repetitive workflows — AI that actually saves you time and money.',
    accentColor: 'bg-orange-500',
    hoverGlow: 'group-hover:shadow-orange-500/50',
  },
  {
    id: 'ui-ux-design',
    icon: <Palette size={20} strokeWidth={1.8} />,
    title: 'UI/UX Design',
    description: "Human-centered design that's both beautiful and functionally clear, built around how your users actually think.",
    accentColor: 'bg-purple-500',
    hoverGlow: 'group-hover:shadow-purple-500/50',
  },
];

interface ServiceCardProps {
  service: Service;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function ServiceRow({ service, index, isOpen, onToggle }: ServiceCardProps) {
  return (
    <motion.div
      variants={rowVariants}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 6 }}
      className="group border-b border-white/10 py-7 first:pt-0 last:border-b-0 last:pb-0 transition-transform duration-300"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${service.id}-description`}
        className="flex w-full items-center gap-4 text-left md:gap-5"
      >
        <span className="w-6 flex-shrink-0 text-xs font-bold tracking-widest text-zinc-500">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${service.accentColor} text-white shadow-none transition-shadow duration-300 group-hover:shadow-lg ${service.hoverGlow}`}
        >
          {service.icon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-lg font-bold text-white transition-colors duration-300 group-hover:text-zinc-200 md:text-xl">
            {service.title}
          </span>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.span
                id={`${service.id}-description`}
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 4 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="block overflow-hidden text-sm leading-relaxed text-zinc-400 md:text-base"
              >
                {service.description}
              </motion.span>
            )}
          </AnimatePresence>
        </span>
        <ChevronDown
          size={20}
          aria-hidden="true"
          className={`flex-shrink-0 text-zinc-500 transition-transform duration-300 group-hover:text-zinc-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
    </motion.div>
  );
}

export default function ServicesOffered() {
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="relative w-full py-16 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <SectionHeading
            label="WHAT WE DO"
            title={
              <>
                Services built to grow your{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(to right, #06B6D4, #6366F1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  business
                </span>
              </>
            }
            subtitle="We combine thoughtful strategy, sharp design, and dependable technology to create digital products that move your business forward. Every solution is built to perform beautifully today and keep creating value as you grow."
            labelClassName="text-purple-400"
          />

          <motion.div
            className="flex flex-col"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <ServiceRow
                key={service.id}
                service={service}
                index={index}
                isOpen={openService === service.id}
                onToggle={() => setOpenService(openService === service.id ? null : service.id)}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
