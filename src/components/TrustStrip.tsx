'use client';

import { motion } from 'motion/react';
import { CheckCircle2, Clock, Users, Sparkles } from 'lucide-react';

const items = [
  {
    title: '48-Hour Draft',
    mobileTitle: '48-Hour Draft',
    desc: 'See a working version of your website in days, not weeks.',
    icon: Clock,
  },
  {
    title: 'Local',
    mobileTitle: 'Local',
    desc: 'One developer, right here in Leitchfield, KY. No outsourcing.',
    icon: Users,
  },
  {
    title: 'Fully Custom',
    mobileTitle: 'Fully Custom',
    desc: 'Built with real code specifically for your business. No templates.',
    icon: Sparkles,
  },
];

export default function TrustStrip() {
  return (
    <section className="pt-8 pb-10 md:pt-12 md:pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: plain text row — no animation, instant */}
        <div className="sm:hidden flex items-center justify-center gap-4">
          {items.map((item) => (
            <div key={item.mobileTitle} className="flex items-center gap-1.5">
              <item.icon size={12} className="text-brand-accent shrink-0" />
              <span className="text-[11px] font-semibold text-brand-primary/65 whitespace-nowrap">{item.mobileTitle}</span>
            </div>
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
                <p className="text-xs md:text-sm text-brand-primary/65 leading-relaxed mb-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
