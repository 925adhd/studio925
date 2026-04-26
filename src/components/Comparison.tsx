'use client';

import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';
import Link from 'next/link';

const points = [
  { diy: 'Weeks of your nights and weekends', studio: 'Live in about a week. No homework.', mobile: true },
  { diy: 'Looks like every other template', studio: 'Custom-built, one of a kind', mobile: true },
  { diy: 'Clunky on phones. Customers leave.', studio: 'Mobile-first. Every visitor stays.', mobile: true },
  { diy: 'You figure out updates alone', studio: 'Updates handled for you', mobile: false },
  { diy: 'Something breaks? You\'re on your own', studio: 'Something breaks? I fix it.', mobile: true },
  { diy: 'Invisible when people search Google', studio: 'Built so Google can find you', mobile: true },
  { diy: 'No backlinks to boost your ranking', studio: 'I link to your site to boost your ranking', mobile: false },
  { diy: 'Hope it brings in customers', studio: 'Built to turn visitors into customers', mobile: false },
];

export default function Comparison() {
  return (
    <section className="py-14 md:pt-12 md:pb-28 px-6 bg-gray-50">
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
            You could spend hours building it yourself. Or tell me about your business and I'll take it from here.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* DIY side — heavy, muted */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-brand-primary/[0.03] border border-brand-primary/8 rounded-2xl md:rounded-3xl p-5 md:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-brand-primary/30 mb-4 md:mb-6">Build It Yourself</p>
            <div className="space-y-3 md:space-y-5">
              {points.map((point, i) => (
                <div
                  key={i}
                  className={`${point.mobile ? 'flex' : 'hidden md:flex'} items-start gap-3`}
                >
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
            className="bg-brand-primary text-white rounded-2xl md:rounded-3xl p-5 md:p-10 shadow-xl"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4 md:mb-6">Studio 925</p>
            <div className="space-y-3 md:space-y-5">
              {points.map((point, i) => (
                <div
                  key={i}
                  className={`${point.mobile ? 'flex' : 'hidden md:flex'} items-start gap-3`}
                >
                  <Check size={16} className="text-brand-accent shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-white/80">{point.studio}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <p className="text-center text-xs text-brand-primary/60 mt-8 md:mt-10">
          Ongoing updates, support, and maintenance available through optional <Link href="/hosting-support" className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800">hosting plans</Link>.
        </p>
        <p className="text-center text-xs text-brand-primary/50 mt-2">
          Curious about pricing? See the <Link href="/website-cost" className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800">website cost guide</Link>.
        </p>
      </div>
    </section>
  );
}
