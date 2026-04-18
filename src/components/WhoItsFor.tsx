'use client';

import { motion } from 'motion/react';

const businesses = [
  { name: 'Contractors & trades', short: 'Contractors', hook: 'Get found when someone searches "roofer near me."' },
  { name: 'Service providers', short: 'Service pros', hook: 'Stop relying on word of mouth alone.' },
  { name: 'Restaurants & food', short: 'Restaurants', hook: 'Menus, hours, and directions — not a Facebook page.' },
  { name: 'Retail & boutiques', short: 'Retail', hook: 'Show off what you sell before they walk in.' },
  { name: 'Healthcare & wellness', short: 'Healthcare', hook: 'Let patients book and find you online.' },
  { name: 'Real estate', short: 'Real estate', hook: 'Listings and credibility in one place.' },
  { name: 'Auto shops & dealers', short: 'Auto shops', hook: 'Make it easy to call, get directions, or request a quote.' },
  { name: 'Community groups', short: 'Community', hook: 'A real home for your organization online.' },
];

export default function WhoItsFor() {
  return (
    <section className="py-12 md:py-36 px-6 bg-white border-t border-brand-primary/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-14"
        >
          <h2 className="text-2xl md:text-4xl mb-2 md:mb-3">
            Built for businesses like <span className="italic text-brand-accent">yours</span>
          </h2>
          <p className="text-sm md:text-lg text-brand-primary/50 italic">
            Every day, someone searches for what you do — and doesn't find you.
          </p>
        </motion.div>

        {/* Mobile: compact chip grid — keyword-rich, still scannable */}
        <div className="md:hidden grid grid-cols-2 gap-2 auto-rows-fr">
          {businesses.map((biz) => (
            <div
              key={biz.name}
              className="h-full px-3 py-2.5 rounded-xl bg-brand-primary/[0.03] border border-brand-primary/5"
            >
              <div className="flex items-start gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-1.5" />
                <span className="font-semibold text-brand-primary text-[13px] leading-tight">
                  {biz.name.replace(/& /g, '&\u00a0')}
                </span>
              </div>
              <p className="text-[10px] text-brand-primary/50 leading-snug">{biz.hook}</p>
            </div>
          ))}
        </div>

        {/* Desktop: full list with hooks */}
        <div className="hidden md:grid md:grid-cols-2 gap-x-12 gap-y-8">
          {businesses.map((biz, i) => (
            <motion.div
              key={biz.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
              <div>
                <span className="font-bold text-brand-primary text-base">{biz.name}</span>
                <span className="text-brand-primary/45 text-base"> — {biz.hook}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
