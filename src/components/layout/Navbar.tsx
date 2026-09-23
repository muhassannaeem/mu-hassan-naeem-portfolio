'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const navLinks = [
  { label: 'Home', target: '#top' },
  { label: 'About', target: '#about' },
  { label: 'Services', target: '#services' },
  { label: 'Work', target: '#work' },
  { label: 'Contact', target: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [isMounted] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);

      if (pathname !== '/') return;

      const sections = ['top', 'about', 'services', 'work', 'contact'];
      const currentSection = sections.reduce((current, sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop - 140 <= scrollY) return sectionId;
        return current;
      }, 'top');

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleScrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    if (pathname === '/') {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    router.push(`/${sectionId}`);
  };

  return (
    <>
      {/* Fixed navbar background effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-x-0 top-0 z-40 pointer-events-none"
      >
        <div className="h-20" />
      </motion.div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        suppressHydrationWarning
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ${
          isMounted && isScrolled
            ? 'bg-black/50 backdrop-blur-xl border-b border-white/8'
            : 'bg-transparent'
        }`}
      >
        <Container className={`flex items-center justify-between transition-[height] duration-200 ease-out ${isScrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo and Name - Left */}
          <motion.div
            className="flex items-center gap-3 flex-1"
            whileHover={{ scale: 1.02 }}
          >
            <Link href="/#hero" aria-label="Go to hero section" className="flex-shrink-0">
              <Image
                src="/logox.png"
                alt="Logo"
                width={160}
                height={160}
                loading="eager"
                priority
                className="flex-shrink-0"
              />
            </Link>
          </motion.div>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => handleScrollToSection(link.target)}
                className={`relative py-2 text-sm transition-colors ${activeSection === link.target.slice(1) ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                aria-current={activeSection === link.target.slice(1) ? 'location' : undefined}
              >
                {link.label}
                {activeSection === link.target.slice(1) && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-x-0 -bottom-1 h-px bg-cyan-300"
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right - Buttons and Mobile Menu */}
          <div className="flex items-center gap-3 justify-end flex-1">
            {/* Desktop Buttons */}
            <div className="hidden sm:flex gap-3">
              {/* Hire Me Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScrollToSection('#contact')}
                className="px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 hover:shadow-lg transition-all"
                style={{
                  background: 'linear-gradient(to right, #6366F1, #06B6D4)',
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
                }}
              >
                <span className="hidden sm:inline">Let&apos;s Talk</span>
                <span className="sm:hidden">Talk</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/8 md:hidden overflow-hidden transition-[top] duration-200 ease-out ${isScrolled ? 'top-16' : 'top-20'}`}
      >
        <Container className="py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <motion.button
              key={link.label}
              onClick={() => handleScrollToSection(link.target)}
              whileHover={{ x: 4 }}
              className="text-sm text-zinc-400 hover:text-white transition-colors text-left"
            >
              {link.label}
            </motion.button>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollToSection('#contact')}
              className="w-full px-4 py-2 rounded-full text-white text-sm font-medium flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(to right, #6366F1, #06B6D4)',
              }}
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </Container>
      </motion.div>
    </>
  );
}
