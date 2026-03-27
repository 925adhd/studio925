'use client';

import { motion } from 'motion/react';
import { Menu, X, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
const logo = '/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <><nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-primary/5 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center">
          <img src={logo} alt="Studio 925" className="h-8 md:h-[50px] w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#services" className="text-sm font-medium hover:text-brand-accent transition-colors">Services</a>
          <Link href="/portfolio" className="text-sm font-medium hover:text-brand-accent transition-colors">Portfolio</Link>
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
            <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-lg font-medium">Portfolio</Link>
            <a href="/#local" onClick={() => setIsOpen(false)} className="text-lg font-medium">About</a>
            <a href="/#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium">Pricing</a>
            <div className="flex gap-3 mt-1">
              <a href="tel:+12705512210" onClick={() => setIsOpen(false)} className="bg-brand-accent text-white px-4 py-2.5 rounded-xl font-medium text-base flex items-center gap-2">
                <Phone size={16} /> Call
              </a>
              <button onClick={() => { setIsOpen(false); window.location.href = 'sms:+12705512210?body=Hi%2C%20I%27m%20interested%20in%20a%20website'; }} className="bg-brand-primary text-white px-4 py-2.5 rounded-xl font-medium text-base flex items-center gap-2">
                <MessageCircle size={16} /> Text
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>

    {/* Sticky mobile call button */}
    <button
      onClick={() => { window.location.href = 'sms:+12705512210?body=Hi%2C%20I%27m%20interested%20in%20a%20website'; }}
      className="fixed bottom-5 right-5 z-50 md:hidden bg-brand-accent text-white p-4 rounded-full shadow-lg shadow-brand-accent/30 hover:scale-105 transition-transform"
      aria-label="Text Studio 925"
    >
      <MessageCircle size={22} />
    </button>
    </>
  );
}
