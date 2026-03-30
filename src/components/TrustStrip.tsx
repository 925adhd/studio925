'use client';

import { motion } from 'motion/react';
import { CheckCircle2, Clock, Users, Sparkles } from 'lucide-react';

const items = [
  {
    title: '48-Hour First Draft',
    mobileTitle: '48-Hour Draft',

    desc: 'See a working version of your website in days, not weeks.',
    icon: Clock,
  },
  {
    title: 'Built to Be Found',
    mobileTitle: 'Local',
    desc: 'Show up when people search for what you do.',
    icon: Users,
  },
  {
    title: 'Built to Convert',
    mobileTitle: 'Fully Custom',
    desc: 'Turn visitors into calls, messages, and booked work.',
    icon: Sparkles,
  },
];

export default function TrustStrip() {
  return (
    <section className="pt-12 pb-8 md:py-16 mb-6 md:mb-6 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: plain text row */}
        <div className="sm:hidden flex items-center justify-center gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.mobileTitle}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-center gap-1.5"
            >
              <item.icon size={12} className="text-brand-accent shrink-0" />
              <span className="text-[11px] font-semibold text-brand-primary/50 whitespace-nowrap">{item.mobileTitle}</span>
            </motion.div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-20">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 size={22} className="text-brand-accent shrink-0 mt-0.5 md:w-6 md:h-6" />
              <div>
                <p className="font-bold text-sm md:text-lg text-brand-primary mb-1.5">{item.title}</p>
                <p className="text-xs md:text-sm text-brand-primary/55 leading-relaxed mb-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
