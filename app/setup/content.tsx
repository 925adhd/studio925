'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Globe, Mail, ChevronRight } from 'lucide-react';

const guides = [
  {
    title: 'Connect Your Domain',
    description: 'Buy a domain name and connect it to your new website. Takes about 10 minutes.',
    icon: Globe,
    href: '/setup/domain',
    color: 'bg-brand-accent',
  },
  {
    title: 'Set Up Your Contact Form',
    description: 'Connect your contact form so messages go straight to your email. Takes about 5 minutes.',
    icon: Mail,
    href: '/setup/contact',
    color: 'bg-sky-600',
  },
];

export default function SetupContent() {
  return (
    <div className="min-h-screen bg-brand-warm selection:bg-brand-accent selection:text-white">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-brand-primary text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Client Setup
          </span>
          <h1 className="text-3xl md:text-5xl mb-4 leading-[1.1]">
            Welcome to Your<br />
            <span className="italic text-brand-accent">Setup Guides</span>
          </h1>
          <p className="text-lg text-brand-primary/60 max-lg mx-auto leading-relaxed">
            Pick the guide you need below. Each one walks you through every step — no technical experience required.
          </p>
        </motion.div>

        {/* Guide Cards */}
        <div className="space-y-5">
          {guides.map((guide, i) => (
            <motion.div
              key={guide.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
            >
              <Link
                href={guide.href}
                className="glass rounded-3xl p-7 md:p-9 flex items-center gap-6 relative overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer block"
              >
                <div className={`absolute top-0 left-0 w-1.5 h-full ${guide.color} rounded-l-3xl`} />
                <div className={`${guide.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center shrink-0`}>
                  <guide.icon size={28} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl leading-tight mb-1">{guide.title}</h2>
                  <p className="text-sm text-brand-primary/50 font-sans font-medium">{guide.description}</p>
                </div>
                <ChevronRight size={24} className="text-brand-primary/20 group-hover:text-brand-accent transition-colors shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-brand-primary/30 mt-12 font-sans">
          Studio 925 &middot; <a href="https://studio925.design" className="hover:text-brand-accent transition-colors">studio925.design</a>
        </p>
      </div>
    </div>
  );
}
