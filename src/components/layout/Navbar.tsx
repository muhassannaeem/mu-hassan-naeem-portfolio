'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X, Download, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const navLinks = ['About', 'Work', 'Services', 'Contact'];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/MuhammadHassanNaeem_Resume_July2026.pdf';
    link.download = 'MuhammadHassanNaeem_Resume_July2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMounted && isScrolled
            ? 'bg-black/50 backdrop-blur-xl border-b border-white/8'
            : 'bg-transparent'
        }`}
      >
        <Container className="flex items-center justify-between h-20">
          {/* Logo and Name - Left */}
          <motion.div
            className="flex items-center gap-3 flex-1"
            whileHover={{ scale: 1.02 }}
          >
            {/* Logo */}
            <Image
              src="/logo2.png"
              alt="Logo"
              width={140}
              height={140}
              className="flex-shrink-0"
            />
          </motion.div>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <motion.button
                key={link}
                onClick={() => handleScrollToSection(`#${link.toLowerCase()}`)}
                whileHover={{ color: '#ffffff' }}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link}
              </motion.button>
            ))}
          </div>

          {/* Right - Buttons and Mobile Menu */}
          <div className="flex items-center gap-3 justify-end flex-1">
            {/* Desktop Buttons */}
            <div className="hidden sm:flex gap-3">
              {/* Download CV Button */}
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium flex items-center gap-2 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all"
              >
                <Download size={16} />
                <span className="hidden sm:inline">Download CV</span>
              </motion.button>

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
                <span className="hidden sm:inline">Hire Me</span>
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
        className="fixed top-20 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/8 md:hidden overflow-hidden"
      >
        <Container className="py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <motion.button
              key={link}
              onClick={() => handleScrollToSection(`#${link.toLowerCase()}`)}
              whileHover={{ x: 4 }}
              className="text-sm text-zinc-400 hover:text-white transition-colors text-left"
            >
              {link}
            </motion.button>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium flex items-center justify-center gap-2 hover:border-white/40 bg-white/5"
            >
              <Download size={16} />
              Download CV
            </motion.button>

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
