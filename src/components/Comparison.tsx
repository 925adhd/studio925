'use client';

import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';
import Link from 'next/link';

const rows = [
  { label: 'Who handles it', diy: 'You handle everything yourself', studio: 'We handle everything for you', diyShort: 'You handle it', studioShort: 'We handle it' },
  { label: "How it's built", diy: 'Templates and drag-and-drop builders', studio: 'Custom built website', diyShort: 'Templates', studioShort: 'Custom built' },
  { label: 'Mobile ready', diy: 'You have to adjust it yourself', studio: 'Works from the start', diyShort: 'You fix it', studioShort: 'Works from the start' },
  { label: 'Updating later', diy: 'You figure it out yourself', studio: 'We update it (with hosting)', diyShort: 'Up to you', studioShort: 'We update it' },
  { label: 'If something breaks', diy: "You're on your own", studio: 'We fix it for you (with hosting)', diyShort: 'On your own', studioShort: 'We fix it' },
  { label: 'Found on Google', diy: 'You set it up yourself', studio: 'Google setup included', diyShort: 'You set it up', studioShort: 'Set up for you' },
  { label: 'Your time', diy: 'Takes hours of your time', studio: 'Minimal time from you', diyShort: 'Takes hours', studioShort: 'Almost none' },
];

export default function Comparison() {
  return (
    <section className="py-16 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Title & Description */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-4xl mb-3 md:mb-4">
              Do It Yourself <span className="italic text-brand-accent">or Have It Handled</span>
            </h2>
            <p className="hidden md:block text-base text-brand-primary/55 max-w-2xl mx-auto leading-relaxed">
              Platforms like Wix, Squarespace, Shopify, and WordPress are great tools if you have the time. Studio 925 is for business owners who want a professional online presence without doing it themselves.
            </p>
            <p className="md:hidden text-xs text-brand-primary/55 max-w-xs mx-auto leading-relaxed">
              Focus on running your business. We handle your online presence.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block rounded-3xl border border-brand-primary/10 overflow-hidden">
            <div className="grid grid-cols-3 bg-brand-primary text-white">
              <div className="p-5 font-bold text-sm" />
              <div className="p-5 font-bold text-sm text-center">Build It Yourself</div>
              <div className="p-5 font-bold text-sm text-center">Studio 925</div>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-brand-primary/[0.02]' : 'bg-white'}`}
              >
                <div className="p-5 text-sm font-semibold text-brand-primary border-r border-brand-primary/5">
                  {row.label}
                </div>
                <div className="p-5 text-sm text-brand-primary/50 text-center flex items-center justify-center gap-2 border-r border-brand-primary/5">
                  <X size={15} className="text-brand-primary/30 shrink-0" />
                  {row.diy}
                </div>
                <div className="p-5 text-sm text-brand-primary/80 text-center flex items-center justify-center gap-2">
                  <Check size={15} className="text-brand-accent shrink-0" />
                  {row.studio}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden rounded-2xl border border-brand-primary/10 overflow-hidden shadow-sm shadow-brand-primary/5">
            {/* Header */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-brand-primary text-white">
              <div className="px-3 py-2.5 text-[10px] font-bold uppercase tracking-widest" />
              <div className="px-2 py-2.5 text-[10px] font-bold text-center border-l border-white/10">DIY</div>
              <div className="px-2 py-2.5 text-[10px] font-bold text-center border-l border-white/10">Studio 925</div>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.2fr_1fr_1fr] items-center ${i % 2 === 0 ? 'bg-brand-primary/[0.02]' : 'bg-white'}`}
              >
                <div className="px-3 py-2 text-[11px] font-semibold text-brand-primary/70 border-r border-brand-primary/5">
                  {row.label}
                </div>
                <div className="px-2 py-2 flex items-start gap-1.5 border-r border-brand-primary/5">
                  <X size={11} className="text-brand-primary/25 shrink-0 mt-[3px]" />
                  <p className="text-[10px] text-brand-primary/40 leading-tight">{row.diyShort}</p>
                </div>
                <div className="px-2 py-2 flex items-start gap-1.5">
                  <Check size={11} className="text-brand-accent shrink-0 mt-[3px]" />
                  <p className="text-[10px] text-brand-primary/80 font-medium leading-tight">{row.studioShort}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-brand-primary/40 mt-6 md:mt-8">
            Ongoing updates, support, and maintenance are included with optional <Link href="/hosting-support" className="text-brand-accent hover:underline">hosting plans</Link>.
            {' '}Wondering about pricing? See our <Link href="/website-cost" className="text-brand-accent hover:underline">website cost guide</Link>.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
