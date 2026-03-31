'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Not even exaggerating — this is hands down the cleanest, smoothest, most professional site I've ever had. Everything flows, loads fast, and actually reflects the quality I bring. Studio 925 doesn't just build websites — she builds brands that convert. If you're serious about leveling up your business, I highly recommend reaching out to Kara.",
    name: 'CS Media',
    role: 'Media Brand · Leitchfield, KY',
    link: 'https://csmedia.vercel.app',
    placeholder: false,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-6 bg-brand-warm">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
            What business owners <span className="italic text-brand-accent">are&nbsp;saying</span>
          </h2>
          <p className="text-sm md:text-base text-brand-primary/50 max-w-lg mx-auto">
            Real feedback from real businesses.
          </p>
        </div>

        <div className={`grid gap-4 md:gap-6 ${testimonials.length === 1 ? 'max-w-2xl mx-auto' : 'md:grid-cols-3'}`}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-10 rounded-3xl bg-white border border-brand-primary/5"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-brand-accent fill-brand-accent md:!w-4 md:!h-4" />
                ))}
              </div>
              <p className="text-sm md:text-base text-brand-primary/70 leading-relaxed mb-5 md:mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className={`text-sm font-semibold ${t.placeholder ? 'text-brand-primary/30' : 'text-brand-primary'}`}>
                  {t.link ? (
                    <a href={t.link} target="_blank" rel="noopener noreferrer" className="text-brand-accent underline underline-offset-2">{t.name}</a>
                  ) : t.name}
                </p>
                <p className="text-xs text-brand-primary/40">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
