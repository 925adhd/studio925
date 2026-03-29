'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const items = [
  {
    title: '48-Hour First Draft',
    desc: 'See a working version of your website in days, not weeks.',
  },
  {
    title: 'Built to Be Found',
    desc: 'Designed so customers can find you on Google and contact you easily.',
  },
  {
    title: 'Built to Bring You Customers',
    desc: 'Your website should generate calls, messages, and new business.',
  },
];

export default function TrustStrip() {
  return (
    <section className="py-14 md:py-16 mb-8 md:mb-6 px-8 md:px-6 bg-brand-primary/[0.02] border-y border-brand-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-20">
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
