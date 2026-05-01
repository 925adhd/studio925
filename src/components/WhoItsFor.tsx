'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

type Business = {
  name: string;
  short: string;
  hook: string;
  href?: string;
};

const businesses: Business[] = [
  { name: 'Contractors & trades', short: 'Contractors', hook: 'Get found when someone searches "roofer near me."' },
  { name: 'Service providers', short: 'Service pros', hook: 'Stop relying on word of mouth alone.' },
  { name: 'Restaurants & food', short: 'Restaurants', hook: 'Menus, hours, and directions. Not a Facebook page.' },
  { name: 'Retail & boutiques', short: 'Retail', hook: 'Show off what you sell before they walk in.' },
  { name: 'Healthcare & wellness', short: 'Healthcare', hook: 'Let patients book and find you online.' },
  { name: 'Real estate', short: 'Real estate', hook: 'Listings and credibility in one place.' },
  { name: 'Auto shops & dealers', short: 'Auto shops', hook: 'Make it easy to call, get directions, or request a quote.', href: '/auto-repair-shop-website-design-kentucky' },
  { name: 'Community groups', short: 'Community', hook: 'A real home for your organization online.' },
];

export default function WhoItsFor() {
  return (
    <section className="py-8 md:pt-12 md:pb-36 px-6 bg-white border-t border-brand-primary/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-14"
        >
          <h2 className="text-2xl md:text-4xl mb-2 md:mb-3">
            Built for businesses like <span className="italic text-brand-accent">yours</span>
          </h2>
          <p className="text-sm md:text-lg text-brand-primary/70 italic mb-3 md:mb-4">
            Every day, someone searches for what you do, and doesn&apos;t find you.
          </p>
          <Link
            href="/web-design-by-industry"
            className="inline-flex items-center gap-1.5 text-emerald-800 font-semibold text-sm md:text-base hover:underline underline-offset-4"
          >
            See web design by industry <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        {/* Mobile: compact chip grid, names only, keyword-rich and fast to scan */}
        <div className="md:hidden grid grid-cols-2 gap-2 auto-rows-fr">
          {businesses.map((biz) => {
            if (biz.href) {
              return (
                <Link
                  key={biz.name}
                  href={biz.href}
                  className="h-full px-2.5 py-2.5 rounded-xl bg-brand-accent/5 border border-brand-accent/30 hover:bg-brand-accent/10 active:bg-brand-accent/15 transition-colors flex items-start justify-between gap-2"
                >
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-1.5" />
                    <span className="font-semibold text-emerald-800 text-[13px] leading-tight">
                      {biz.name.replace(/& /g, '&\u00a0')}
                    </span>
                  </div>
                  <ArrowUpRight size={14} className="text-emerald-800 shrink-0 mt-0.5" />
                </Link>
              );
            }
            return (
              <div key={biz.name} className="h-full px-1 py-2">
                <div className="flex items-start gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-1.5" />
                  <span className="font-semibold text-brand-primary text-[13px] leading-tight">
                    {biz.name.replace(/& /g, '&\u00a0')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: full list with hooks */}
        <div className="hidden md:grid md:grid-cols-2 gap-x-12 gap-y-8">
          {businesses.map((biz, i) => {
            const motionProps = {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0, margin: "100% 0px 100% 0px" },
              transition: { delay: i * 0.05 },
            };
            if (biz.href) {
              return (
                <motion.div key={biz.name} {...motionProps}>
                  <Link
                    href={biz.href}
                    className="group flex items-start gap-3 rounded-2xl bg-brand-accent/5 border border-brand-accent/30 px-4 py-3.5 hover:bg-brand-accent/10 hover:border-brand-accent/50 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                    <div className="flex-1">
                      <div className="font-bold text-emerald-800 text-base">{biz.name}</div>
                      <div className="text-brand-primary/70 text-base">{biz.hook}</div>
                      <div className="mt-1.5 inline-flex items-center gap-1 text-emerald-800 font-semibold text-sm">
                        View page <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            }
            return (
              <motion.div key={biz.name} {...motionProps} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                <div>
                  <div className="font-bold text-brand-primary text-base">{biz.name}</div>
                  <div className="text-brand-primary/70 text-base">{biz.hook}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
