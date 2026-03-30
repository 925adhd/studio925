'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const points = [
  '48-hour website preview',
  'Clean, fast code without unnecessary plugins',
  'Mobile-first from the start',
  'Simple upfront pricing with no monthly builder fees',
  'No long contracts',
  'You own your code and files',
  'One developer builds and supports your site',
  'Hosting and ongoing support available',
  'You focus on your business, we handle the website',
];

export default function WhyStudio() {
  return (
    <section className="py-16 md:py-24 px-6 bg-brand-primary/[0.02] border-t border-brand-primary/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
              Why Work With <span className="italic text-brand-accent">Studio 925</span>
            </h2>
            <p className="text-xs md:text-base text-brand-primary/55 max-w-xs md:max-w-2xl mx-auto leading-relaxed">
              No templates. No page builders. Just clean code built specifically for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {points.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-primary/5"
              >
                <CheckCircle2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-brand-primary/75 font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
