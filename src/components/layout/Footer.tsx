'use client';

import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import Container from '@/components/ui/Container';

const footerLinks = {
  navigation: [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-hassan-naeem-77b551251/', icon: 'linkedin' },
    { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=muhassannaeem@gmail.com', icon: 'email' },
  ],
};

interface SocialIconProps {
  icon: string;
}

function SocialIcon({ icon }: SocialIconProps) {
  const icons: { [key: string]: React.ReactNode } = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v9.13h2.5v-4.7c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.7h2.5M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-9.1H5.5v9.1h2.77Z" />
      </svg>
    ),
    email: <Mail className="h-5 w-5" aria-hidden="true" />,
  };

  return icons[icon] || null;
}

export default function Footer() {
  return (
    <footer className="relative w-full py-16 flex items-center justify-center border-t border-white/10">
      {/* Main content */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left - Company Info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-white">Muhammad Hassan Naeem</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Engineering digital excellence through modern code and creative vision.
            </p>
          </div>

          {/* Center - Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Navigation</h4>
            <div className="flex flex-col gap-2">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.label}
                  href={`/${link.href}`}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Social */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Connect</h4>
            <div className="flex items-center gap-3">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                   target="_blank"
                   rel="noopener noreferrer"
                  aria-label={link.label === 'Email' ? 'Email Muhammad Hassan Naeem' : link.label}
                  title={link.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom - Copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Muhammad Hassan Naeem. Built with precision.
          </p>
        </div>
      </Container>
    </footer>
  );
}
