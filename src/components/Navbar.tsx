'use client';

import { motion } from 'motion/react';
import { Menu, X, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackEvent } from '../lib/gtag';
const logo = '/logo.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu reactively on route change instead of on click — avoids
  // unmount-during-pushState race that causes a null dispatchEvent crash
  // in the GTM-wrapped history API.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <><nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-primary/5 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center">
          <img src={logo} alt="Studio 925 — custom websites for small businesses in Kentucky" width={162} height={56} className="h-8 md:h-[50px] w-auto" />
          <span style={{ fontFamily: 'var(--font-inter)' }} className="ml-2 md:ml-3 text-xs md:text-sm font-medium text-brand-primary/60 border-l border-brand-primary/15 pl-2 md:pl-3">Custom Web Design</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#services" className="text-sm font-medium hover:text-brand-accent transition-colors">What You Get</a>
          <Link href="/portfolio" className="text-sm font-medium hover:text-brand-accent transition-colors">Portfolio</Link>
          <a href="/#pricing" className="text-sm font-medium hover:text-brand-accent transition-colors">Pricing</a>
          <Link href="/hosting-support" className="text-sm font-medium hover:text-brand-accent transition-colors">Hosting & Support</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-brand-accent transition-colors">Blog</Link>
          <a href="/#contact" onClick={() => trackEvent('click_get_started', 'navbar')} className="bg-brand-primary text-white px-5 py-2 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-brand-primary/90 transition-all">
            Get Started <ArrowRight size={16} />
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
            <a href="/#services" onClick={() => setIsOpen(false)} className="text-lg font-medium">What You Get</a>
            <Link href="/portfolio" className="text-lg font-medium">Portfolio</Link>
            <a href="/#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium">Pricing</a>
            <Link href="/hosting-support" className="text-lg font-medium">Hosting & Support</Link>
            <Link href="/blog" className="text-lg font-medium">Blog</Link>
            <div className="flex gap-3 mt-1">
              <a href="tel:+12705512210" onClick={() => { trackEvent('click_call', 'mobile_menu'); setIsOpen(false); }} className="bg-brand-accent text-white px-4 py-2.5 rounded-xl font-medium text-base flex items-center gap-2">
                <Phone size={16} /> Call
              </a>
              <button onClick={() => { trackEvent('click_text', 'mobile_menu'); setIsOpen(false); window.location.href = 'sms:+12705512210?body=Hi%2C%20I%27m%20interested%20in%20a%20website'; }} className="bg-brand-primary text-white px-4 py-2.5 rounded-xl font-medium text-base flex items-center gap-2">
                <MessageCircle size={16} /> Text
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>

    {/* Floating mobile text button — quick SMS, lightweight */}
    <button
      onClick={() => { trackEvent('click_text', 'sticky_mobile'); window.location.href = 'sms:+12705512210?body=Hi%2C%20I%27m%20interested%20in%20a%20website'; }}
      className="fixed bottom-5 right-5 z-50 md:hidden bg-brand-accent text-white p-4 rounded-full shadow-lg shadow-brand-accent/30 hover:scale-105 transition-transform"
      aria-label="Text Studio 925"
    >
      <MessageCircle size={22} />
    </button>
    </>
  );
}
