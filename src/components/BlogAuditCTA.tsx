'use client';

import { ArrowRight, Search } from 'lucide-react';

export default function BlogAuditCTA() {
  return (
    <div className="my-10 md:my-12 p-5 md:p-7 rounded-2xl border-2 border-brand-accent/30 bg-brand-accent/5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 mb-2">
            <Search size={14} className="text-emerald-800" />
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">Free local audit</span>
          </div>
          <h3 className="text-lg md:text-xl font-sans font-bold mb-1 leading-tight">
            Want me to check your site for this?
          </h3>
          <p className="text-sm text-brand-primary/75 leading-relaxed">
            See where your business actually ranks on Google for the searches your customers run. Takes about 30 seconds. No signup, no sales call.
          </p>
        </div>
        <a
          href="https://audit.studio925.design"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-primary text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-brand-primary/90 transition-colors whitespace-nowrap shrink-0"
        >
          Run my free audit <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
