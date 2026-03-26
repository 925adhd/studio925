'use client';

import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
const logo = '/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-primary/5 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center">
          <img src={logo} alt="Studio 925" className="h-8 md:h-[50px] w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#services" className="text-sm font-medium hover:text-brand-accent transition-colors">Services</a>
          <a href="/#local" className="text-sm font-medium hover:text-brand-accent transition-colors">About</a>
          <a href="/#pricing" className="text-sm font-medium hover:text-brand-accent transition-colors">Pricing</a>
          <a href="/#contact" className="bg-brand-primary text-white px-5 py-2 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-brand-primary/90 transition-all">
            Build My Website <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-warm border-b border-brand-primary/5 shadow-lg p-6 md:hidden"
        >
          <div className="flex flex-col gap-5 items-start">
            <a href="/#services" onClick={() => setIsOpen(false)} className="text-lg font-medium">Services</a>
            <a href="/#local" onClick={() => setIsOpen(false)} className="text-lg font-medium">About</a>
            <a href="/#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium">Pricing</a>
            <a href="/#contact" onClick={() => setIsOpen(false)} className="bg-brand-primary text-white px-4 py-2.5 rounded-xl font-medium text-base mt-1">
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
