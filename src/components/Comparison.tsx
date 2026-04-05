'use client';

import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';
import Link from 'next/link';

const points = [
  { diy: 'You handle everything yourself', studio: 'We handle everything for you' },
  { diy: 'Templates and drag-and-drop', studio: 'Custom built from scratch' },
  { diy: 'You fix mobile issues yourself', studio: 'Mobile-ready from the start' },
  { diy: 'You figure out updates alone', studio: 'We update it for you' },
  { diy: 'Something breaks? You\'re on your own', studio: 'Something breaks? We fix it' },
  { diy: 'SEO? Set it up yourself', studio: 'SEO setup included' },
  { diy: 'No backlinks to boost your ranking', studio: 'We link to your site, which helps your Google ranking' },
  { diy: 'Hours of your time', studio: 'Minimal time from you' },
];

export default function Comparison() {
  return (
    <section className="py-16 md:py-28 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-xl md:text-4xl mb-3 md:mb-4">
            Do It Yourself <span className="italic text-brand-accent">or Have It Handled</span>
          </h2>
          <p className="text-sm md:text-base text-brand-primary/60 max-w-lg mx-auto">
            You could spend hours building it yourself. Or tell us about your business and we'll take it from here.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* DIY side — heavy, muted */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-brand-primary/[0.03] border border-brand-primary/8 rounded-2xl md:rounded-3xl p-6 md:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-brand-primary/30 mb-6">Build It Yourself</p>
            <div className="space-y-4 md:space-y-5">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X size={16} className="text-brand-primary/20 shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-brand-primary/40">{point.diy}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Studio 925 side — bright, confident */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-brand-primary text-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">Studio 925</p>
            <div className="space-y-4 md:space-y-5">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-brand-accent shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-white/80">{point.studio}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <p className="text-center text-xs text-brand-primary/60 mt-8 md:mt-10">
          Ongoing updates, support, and maintenance are included with optional <Link href="/hosting-support" className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800">hosting plans</Link>.
          {' '}Wondering about pricing? See our <Link href="/website-cost" className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800">website cost guide</Link>.
        </p>
      </div>
    </section>
  );
}
