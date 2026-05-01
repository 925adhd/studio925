'use client';

import { motion } from 'motion/react';
import { ArrowRight, Search } from 'lucide-react';

type Props = {
  headline: string;
  subhead: string;
  ctaText?: string;
};

export default function FreeAuditBand({ headline, subhead, ctaText = "Get my free local audit" }: Props) {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
          className="rounded-3xl bg-gradient-to-br from-brand-accent/10 via-brand-accent/5 to-transparent border-2 border-brand-accent/30 p-6 md:p-10"
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
                <Search size={16} className="text-emerald-800" />
                <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">Free local audit</span>
              </div>
              <h2 className="text-xl md:text-3xl font-sans font-bold mb-2 md:mb-3 leading-tight">
                {headline}
              </h2>
              <p className="text-sm md:text-base text-brand-primary/75 leading-relaxed">
                {subhead}
              </p>
            </div>
            <a
              href="https://audit.studio925.design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-sm md:text-base font-semibold hover:bg-brand-primary/90 hover:scale-[1.02] transition-all shrink-0 self-start md:self-center"
            >
              {ctaText} <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
