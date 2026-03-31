'use client';

import { motion } from 'motion/react';
import { Wrench, Store, UtensilsCrossed, Heart, Home, Car, Users, Briefcase } from 'lucide-react';

const businesses = [
  { name: 'Contractors & trades', icon: Wrench },
  { name: 'Local service providers', icon: Briefcase },
  { name: 'Retail & boutiques', icon: Store },
  { name: 'Restaurants & food', icon: UtensilsCrossed },
  { name: 'Healthcare & wellness', icon: Heart },
  { name: 'Real estate', icon: Home },
  { name: 'Auto shops & dealers', icon: Car },
  { name: 'Community groups', icon: Users },
];

export default function WhoItsFor() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 md:mb-12 max-w-2xl">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
            Built for businesses like <span className="italic text-brand-accent">yours</span>
          </h2>
          <p className="text-sm md:text-base text-brand-primary/55 leading-relaxed">
            If you run a local business and your phone isn't ringing because of your website, this is for you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {businesses.map((biz, i) => (
            <motion.div
              key={biz.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2.5 md:gap-3 p-3.5 md:p-5 rounded-2xl bg-brand-primary/[0.02] border border-brand-primary/5"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                <biz.icon size={16} className="text-brand-accent md:!w-[18px] md:!h-[18px]" />
              </div>
              <span className="text-xs md:text-sm font-medium text-brand-primary/70">{biz.name}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-brand-primary/55 mt-6 md:mt-8">
          Don't see your industry? If you serve local customers, we can help.
        </p>
      </div>
    </section>
  );
}
