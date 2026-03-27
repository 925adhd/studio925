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
    <section className="md:hidden py-14 px-6 bg-[#edeae5]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-10 max-w-2xl">
          <h2 className="text-2xl sm:text-4xl md:text-5xl mb-3 md:mb-4">
            This shouldn't feel like<br /><span className="italic text-brand-accent">a second job.</span>
          </h2>
          <p className="text-base md:text-lg text-brand-primary/60">
            Getting a website shouldn't feel confusing or time-consuming.
          </p>
        </div>

        {/* Mobile: horizontal compact layout */}
        <div className="md:hidden grid gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-4"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                <item.icon size={20} strokeWidth={2} className="text-brand-accent" />
              </div>
              <div>
                <h3 className="text-base font-sans font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-brand-primary/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: original stacked layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
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

        <p className="text-xs md:text-sm text-brand-primary/50 mt-8 md:mt-12 max-w-xl mx-auto text-center leading-relaxed">
          No confusion. No back-and-forth. Just a website that gets built right.
        </p>
      </div>
    </section>
  );
}
