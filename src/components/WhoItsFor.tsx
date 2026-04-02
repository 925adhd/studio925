'use client';

import { motion } from 'motion/react';

const businesses = [
  { name: 'Contractors & trades', hook: 'Get found when someone searches "roofer near me."' },
  { name: 'Service providers', hook: 'Stop relying on word of mouth alone.' },
  { name: 'Restaurants & food', hook: 'Menus, hours, and directions — not a Facebook page.' },
  { name: 'Retail & boutiques', hook: 'Show off what you sell before they walk in.' },
  { name: 'Healthcare & wellness', hook: 'Let patients book and find you online.' },
  { name: 'Real estate', hook: 'Listings and credibility in one place.' },
  { name: 'Auto shops & dealers', hook: 'Make it easy to call, get directions, or request a quote.' },
  { name: 'Community groups', hook: 'A real home for your organization online.' },
];

export default function WhoItsFor() {
  return (
    <section className="py-20 md:py-36 px-6 bg-white border-t border-brand-primary/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-4xl mb-3">
            Built for businesses like <span className="italic text-brand-accent">yours</span>
          </h2>
          <p className="text-base md:text-lg text-brand-primary/50 italic">
            If your phone isn't ringing because of your website, this is for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8">
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
                <span className="font-bold text-brand-primary text-sm md:text-base">{biz.name}</span>
                <span className="text-brand-primary/45 text-sm md:text-base"> — {biz.hook}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
