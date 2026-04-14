'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { trackEvent } from '../lib/gtag';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.5, delay },
});

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-36 pb-6 md:pb-28 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-pattern -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Desktop: staggered fade-in */}
        <div className="hidden md:block">
          <motion.p
            {...fade(0)}
            className="text-xs font-medium tracking-[0.15em] uppercase text-brand-primary/60 mb-5"
          >
            Helping Local Businesses Grow Online · Leitchfield &amp; Grayson County, Kentucky
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="text-5xl md:text-7xl mb-4 leading-[1.1]"
          >
            Your business deserves a website <span className="italic text-brand-accent">that actually works.</span>
          </motion.h1>

          <motion.p
            {...fade(0.2)}
            className="flex items-center justify-center gap-1.5 text-base mb-5"
          >
            <MapPin size={14} className="shrink-0 text-brand-primary/55" />
            <span className="font-semibold text-brand-primary/70">Leitchfield, KY</span>
          </motion.p>

          <motion.p
            {...fade(0.3)}
            className="text-xl text-brand-primary/70 mb-4 max-w-2xl leading-relaxed mx-auto"
          >
            Fast, mobile-first websites built to look professional, load fast, and make it easy for customers to find and contact&nbsp;you.
          </motion.p>

          <motion.div
            {...fade(0.4)}
            className="flex flex-row gap-4 justify-center"
          >
            <a href="/#contact" onClick={() => trackEvent('click_get_started', 'hero_desktop')} className="bg-brand-primary text-white px-9 py-3.5 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-brand-primary/20">
              Get Started <ArrowRight size={20} />
            </a>
            <Link href="/portfolio" onClick={() => trackEvent('click_see_my_work', 'hero_desktop')} className="bg-white border border-brand-primary/10 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-brand-primary/5 transition-colors text-brand-primary flex items-center justify-center gap-2">
              <img src="/kara-gibson-small.webp" alt="Kara Gibson, owner of Studio 925" width={28} height={28} className="w-7 h-7 rounded-full object-cover shrink-0" />
              See My Work
            </Link>
          </motion.div>
        </div>

        {/* Mobile: fully static, no animation — critical for LCP */}
        <div className="md:hidden">
          <p className="text-[9px] sm:text-xs font-medium tracking-[0.15em] uppercase text-brand-primary/60 mb-4 sm:mb-5">
            Helping Local Businesses Grow Online · Leitchfield &amp; Grayson County, Kentucky
          </p>

          <h1 className="text-4xl sm:text-5xl mb-3 leading-[1.05] sm:leading-[1.1]">
            Your business deserves a website <span className="italic text-brand-accent">that actually works.</span>
          </h1>

          <p className="flex items-center justify-center gap-1.5 text-sm mb-4">
            <MapPin size={14} className="shrink-0 text-brand-primary/55" />
            <span className="font-semibold text-brand-primary/70">Leitchfield, KY</span>
          </p>

          <p className="text-sm sm:text-[15px] text-brand-primary/70 mb-3 max-w-2xl leading-[1.65] mx-auto">
            Fast, mobile-first websites built to look professional, load fast, and make it easy for customers to find and contact&nbsp;you.
          </p>

          <div className="flex flex-col gap-5 justify-center">
            <a href="/#contact" onClick={() => trackEvent('click_get_started', 'hero_mobile')} className="w-full bg-brand-primary text-white px-9 py-3.5 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20">
              Get Started <ArrowRight size={20} />
            </a>
            <Link href="/portfolio" onClick={() => trackEvent('click_see_my_work', 'hero_mobile')} className="text-lg font-semibold text-brand-primary/70 underline flex items-center justify-center gap-2">
              <img src="/kara-gibson-small.webp" alt="Kara Gibson, owner of Studio 925 web design in Grayson County, KY" width={28} height={28} className="w-7 h-7 rounded-full object-cover shrink-0" />
              See My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
