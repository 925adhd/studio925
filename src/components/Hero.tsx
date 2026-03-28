'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-32 pb-4 md:pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-pattern -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[9px] sm:text-xs font-medium tracking-[0.15em] uppercase text-brand-primary/60 mb-4 sm:mb-5">
            Web Design for Local Businesses in Grayson County, Kentucky
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-7xl mb-3 md:mb-4 leading-[1.05] sm:leading-[1.1]">
            You don't just need a website. You need one <span className="italic text-brand-accent">built to bring you customers.</span>
          </h2>

          <p className="flex items-center justify-center gap-1.5 text-sm md:text-base mb-4 md:mb-5">
            <MapPin size={14} className="shrink-0 text-brand-primary/35" />
            <span className="font-semibold text-brand-primary/70">Grayson County, KY</span>
          </p>

          <p className="text-sm sm:text-[15px] md:text-xl text-brand-primary/70 mb-3 md:mb-4 max-w-2xl leading-[1.65] md:leading-relaxed mx-auto">
            Custom-built websites for local businesses in Grayson County. Built to be found on Google, load fast, and make your business look professional&nbsp;online.<span className="hidden sm:inline"> Designed for more calls, more leads, and real growth.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center">
            <a href="/#contact" className="w-full sm:w-auto bg-brand-primary text-white px-9 py-3.5 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-brand-primary/20">
              Get Started <ArrowRight size={20} />
            </a>
            <Link href="/portfolio" className="sm:bg-white sm:border sm:border-brand-primary/10 sm:px-8 sm:py-4 sm:rounded-2xl text-lg font-semibold sm:hover:bg-brand-primary/5 transition-colors text-brand-primary/70 sm:text-brand-primary underline sm:no-underline flex items-center justify-center gap-2">
              <img src="/me.png" alt="Kara Gibson" className="w-7 h-7 rounded-full object-cover shrink-0 sm:hidden" />
              See My Work
            </Link>
          </div>

          <p className="text-xs text-brand-primary/55 font-semibold tracking-normal mt-6 sm:mt-10 mb-3">
            Local. No outsourcing. No templates.
          </p>

          <div className="flex flex-row flex-wrap gap-2 sm:gap-x-6 gap-y-2 sm:gap-y-3 items-center justify-center">
            {['48-Hour First Draft', 'Built to Be Found', 'Get More Customers'].map((item) => (
              <div key={item} className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-sm font-medium text-brand-primary/60 whitespace-nowrap">
                <CheckCircle2 size={14} className="text-brand-accent" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
