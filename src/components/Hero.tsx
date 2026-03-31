'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-32 pb-2 md:pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-pattern -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[9px] sm:text-xs font-medium tracking-[0.15em] uppercase text-brand-primary/60 mb-4 sm:mb-5">
            Helping Local Businesses Grow Online · Grayson County, Kentucky
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-7xl mb-3 md:mb-4 leading-[1.05] sm:leading-[1.1]">
            Your business deserves a website <span className="italic text-brand-accent">that actually works.</span>
          </h2>

          <p className="flex items-center justify-center gap-1.5 text-sm md:text-base mb-4 md:mb-5">
            <MapPin size={14} className="shrink-0 text-brand-primary/55" />
            <span className="font-semibold text-brand-primary/70">Grayson County, KY</span>
          </p>

          <p className="text-sm sm:text-[15px] md:text-xl text-brand-primary/70 mb-3 md:mb-4 max-w-2xl leading-[1.65] md:leading-relaxed mx-auto">
            Fast, mobile-first websites built for small businesses in Grayson County. Built to look professional, load fast, and make it easy for customers to find and contact&nbsp;you.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-4 justify-center">
            <a href="/#contact" className="w-full sm:w-auto bg-brand-primary text-white px-9 py-3.5 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-brand-primary/20">
              Get Started <ArrowRight size={20} />
            </a>
            <Link href="/portfolio" className="sm:bg-white sm:border sm:border-brand-primary/10 sm:px-8 sm:py-4 sm:rounded-2xl text-lg font-semibold sm:hover:bg-brand-primary/5 transition-colors text-brand-primary/70 sm:text-brand-primary underline sm:no-underline flex items-center justify-center gap-2">
              <img src="/me-small.webp" alt="Kara Gibson, owner of Studio 925 web design in Grayson County, KY" width={28} height={28} className="w-7 h-7 rounded-full object-cover shrink-0 sm:hidden" />
              See My Work
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
