'use client';

import { motion } from 'motion/react';
import { ClipboardX, MessageCircle, Hammer } from 'lucide-react';

const items = [
  {
    title: "No homework required",
    description: "You don't need to write everything, gather assets, or figure it all out before starting.",
    icon: ClipboardX,
  },
  {
    title: "Guided process",
    description: "We start with a conversation. I ask the right questions and handle the structure from there.",
    icon: MessageCircle,
  },
  {
    title: "Built for you",
    description: "I take what you do and turn it into a clean, professional website that actually works.",
    icon: Hammer,
  },
];

export default function NoHomework() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            This shouldn't feel like<br /><span className="italic text-brand-accent">a second job.</span>
          </h2>
          <p className="text-lg text-brand-primary/60">
            Getting a website shouldn't feel confusing or time-consuming.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8"
            >
              <item.icon size={22} strokeWidth={2} className="text-brand-accent mb-6 block" />
              <h3 className="text-xl font-sans font-bold mb-3">{item.title}</h3>
              <p className="text-brand-primary/60 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-brand-primary/50 mt-12 max-w-xl mx-auto text-center leading-relaxed">
          No confusion. No back-and-forth. Just a website that gets built and gets results.
        </p>
      </div>
    </section>
  );
}
