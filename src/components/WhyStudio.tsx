'use client';

import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';

export default function WhyStudio() {
  return (
    <section className="py-28 md:py-40 px-6 bg-brand-primary text-white relative overflow-hidden">
      {/* Premium background motif — abstract crest */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
        <Handshake size={500} className="text-white opacity-[0.04]" strokeWidth={0.75} />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-l-2 border-brand-accent pl-8 md:pl-12"
        >
          <h2 className="text-2xl md:text-4xl mb-8 md:mb-10 leading-snug">
            Why small businesses trust <span className="italic text-brand-accent">Studio 925</span>
          </h2>

          <div className="space-y-8 md:space-y-12 text-base md:text-xl">
            {[
              { bold: '48-hour draft.', rest: 'Not weeks of waiting.' },
              { bold: 'Custom code.', rest: 'Not a template with your logo on it.' },
              { bold: 'One clear price.', rest: 'Not hourly surprises.' },
              { bold: 'You own everything.', rest: 'Not locked into a platform.' },
              { bold: 'Direct communication.', rest: 'Not a support ticket.' },
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <span className="font-bold text-white">{line.bold}</span>{' '}
                <span className="text-white/50">{line.rest}</span>
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
