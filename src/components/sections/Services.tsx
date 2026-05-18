'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Sparkles,
  Palette,
} from 'lucide-react';
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
  bgGradient: string;
}

const services: Service[] = [
  {
    id: 'web-dev',
    icon: <Globe size={32} />,
    title: 'Web Dev',
    description:
      'High-performance, scalable web applications optimized for speed and user experience.',
    accentColor: 'bg-blue-500',
    bgGradient: 'from-blue-500/20 to-blue-600/20',
  },
  {
    id: 'mobile-dev',
    icon: <Smartphone size={32} />,
    title: 'Mobile Dev',
    description:
      'Cross-platform Flutter apps with high-performance and smooth animations.',
    accentColor: 'bg-cyan-500',
    bgGradient: 'from-cyan-500/20 to-cyan-600/20',
  },
  {
    id: 'ai-integration',
    icon: <Sparkles size={32} />,
    title: 'AI Integration',
    description:
      'Innovative AI solutions, computer vision, and predictive models.',
    accentColor: 'bg-orange-500',
    bgGradient: 'from-orange-500/20 to-orange-600/20',
  },
  {
    id: 'ui-ux-design',
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description:
      'Human-centered design, aesthetic beauty and functional claims.',
    accentColor: 'bg-purple-500',
    bgGradient: 'from-purple-500/20 to-purple-600/20',
  },
];

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col gap-4">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-lg ${service.accentColor} flex items-center justify-center text-white flex-shrink-0`}
        >
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white">{service.title}</h3>

        {/* Description */}
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesOffered() {
  return (
    <section
      id="services"
      className="relative w-full py-20 md:py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top right glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        {/* Bottom left glow */}
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <Container className="relative z-10">
        <motion.div
          className="flex flex-col gap-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div className="flex flex-col gap-4 text-center">
            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white"
            >
              Services Offered
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto"
            >
              Tailored solutions for your digital transformation.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
