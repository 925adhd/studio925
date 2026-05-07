'use client';

import { Menu, X, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackEvent } from '../lib/gtag';
const logo = '/logo.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const pathname = usePathname();

  // Close menu reactively on route change instead of on click — avoids
  // unmount-during-pushState race that causes a null dispatchEvent crash
  // in the GTM-wrapped history API.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Float the sticky text button in only after the user scrolls past the hero,
  // so it doesn't compete with the hero CTA or cover the portfolio peek.
  useEffect(() => {
    const handleScroll = () => {
      setShowText(window.scrollY > window.innerHeight * 0.6);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <><nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-primary/5 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center">
          <img src={logo} alt="Studio 925 — custom websites for small businesses in Kentucky" width={162} height={56} className="h-8 md:h-[50px] w-auto" />
          <span style={{ fontFamily: 'var(--font-inter)' }} className="ml-2 md:ml-3 text-xs md:text-sm font-medium text-brand-primary/60 border-l border-brand-primary/15 pl-2 md:pl-3">Custom Web Design</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="/#services" className="text-sm font-medium hover:text-brand-accent transition-colors whitespace-nowrap">What You Get</a>
          <Link href="/portfolio" className="text-sm font-medium hover:text-brand-accent transition-colors whitespace-nowrap">Portfolio</Link>
          <a href="/#pricing" className="text-sm font-medium hover:text-brand-accent transition-colors whitespace-nowrap">Pricing</a>
          <Link href="/hosting-support" className="text-sm font-medium hover:text-brand-accent transition-colors whitespace-nowrap">Hosting & Support</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-brand-accent transition-colors whitespace-nowrap">Blog</Link>
          <a href="/#contact" onClick={() => trackEvent('click_contact_kara', 'navbar')} className="bg-brand-primary text-white px-5 py-2 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-brand-primary/90 transition-all whitespace-nowrap">
            Contact Kara <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile/Tablet Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="fade-in-up absolute top-full left-0 right-0 bg-brand-warm border-b border-brand-primary/5 shadow-lg p-6 lg:hidden">
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
        </div>
      )}
    </nav>

    {/* Floating mobile text button — fades in after user scrolls past hero */}
    <button
      onClick={() => { trackEvent('click_text', 'sticky_mobile'); window.location.href = 'sms:+12705512210?body=Hi%2C%20I%27m%20interested%20in%20a%20website'; }}
      className={`fixed bottom-5 right-5 z-50 md:hidden bg-brand-accent text-white p-4 rounded-full shadow-lg shadow-brand-accent/30 transition-all duration-300 ease-out ${showText ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Text Studio 925"
      aria-hidden={!showText}
      tabIndex={showText ? 0 : -1}
    >
      <MessageCircle size={22} />
    </button>
    </>
  );
}
