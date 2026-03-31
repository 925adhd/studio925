'use client';

import { motion } from 'motion/react';
import { Clock, Key, MessageCircle, DollarSign, MapPin, Code } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: '48-hour draft',
    text: 'See a working version of your site within 48 hours. No weeks of waiting to find out what you\'re getting.',
  },
  {
    icon: Code,
    title: 'Custom code, not templates',
    text: 'Your site is written from scratch. Faster load times, better Google rankings, and a design that\'s actually yours.',
  },
  {
    icon: Key,
    title: 'You own everything',
    text: 'After final payment, every file is yours. No platform lock-in, no monthly fees just to keep your site.',
  },
  {
    icon: MapPin,
    title: 'Local, not outsourced',
    text: 'Based in Grayson County. You work directly with the person building your site — not a middleman.',
  },
  {
    icon: DollarSign,
    title: 'One clear price',
    text: 'No hourly billing. No surprise invoices. You know exactly what your website costs before we start.',
  },
  {
    icon: MessageCircle,
    title: 'Direct communication',
    text: 'Call, text, or email. You get a real answer the same day — not a support ticket.',
  },
];

export default function WhyStudio() {
  return (
    <section className="py-16 md:py-24 px-6 bg-brand-warm">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
              Why business owners choose <span className="italic text-brand-accent">Studio 925</span>
            </h2>
            <p className="text-sm md:text-base text-brand-primary/55 max-w-xl mx-auto leading-relaxed">
              No templates. No page builders. No runaround. Here's what makes working with Studio 925 different.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-4 md:p-7 rounded-2xl md:rounded-3xl bg-white border border-brand-primary/5"
            >
              <reason.icon size={18} className="text-brand-accent mb-3 md:mb-4 md:!w-5 md:!h-5" />
              <h3 className="text-sm md:text-base font-sans font-bold mb-1.5 md:mb-2">{reason.title}</h3>
              <p className="text-xs md:text-sm text-brand-primary/55 leading-relaxed">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
