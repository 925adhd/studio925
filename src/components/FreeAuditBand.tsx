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
    <section className="px-6 py-8 md:py-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
          className="rounded-3xl bg-white border border-brand-primary/10 p-6 md:p-10"
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
              <p className="text-sm md:text-base text-brand-primary/75 leading-relaxed mb-5 md:mb-6">
                {subhead}
              </p>

              {/* Mobile-only sample image — visual proof between body and CTA */}
              <div className="md:hidden mb-5">
                <div className="rounded-2xl overflow-hidden border border-brand-primary/10 bg-white">
                  <img
                    src="/audit-sample-heatmap-mobile.webp"
                    alt="Sample free local SEO audit showing a Google rankings heatmap across a Kentucky service area"
                    width={730}
                    height={600}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-brand-primary/65 mt-2 italic">
                  Sample audit. Yours will look like this.
                </p>
              </div>

              <a
                href="https://audit.studio925.design"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-sm md:text-base font-semibold hover:bg-brand-primary/90 transition-colors"
              >
                {ctaText} <ArrowRight size={18} />
              </a>
              <p className="text-xs text-brand-primary/65 mt-2 md:mt-3 italic">
                Takes about 30 seconds. No signup, no sales call.
              </p>
            </div>
            <div className="hidden md:block md:w-72 shrink-0">
              <div className="rounded-2xl overflow-hidden border border-brand-primary/10 bg-white">
                <img
                  src="/audit-sample-heatmap.webp"
                  alt="Sample free local SEO audit showing a Google rankings heatmap across a Kentucky service area"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover object-top"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-brand-primary/65 mt-2 text-left italic">
                Sample audit. Yours will look like this.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
