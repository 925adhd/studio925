'use client';

import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

const rows = [
  { label: 'How the site is built', diy: 'Templates / drag-and-drop builders', studio: 'Custom built website', diyShort: 'Templates', studioShort: 'Custom built' },
  { label: 'Build the website', diy: 'You build it yourself', studio: 'We build it for you', diyShort: 'You build it', studioShort: 'Built for you' },
  { label: 'Mobile optimization', diy: 'You adjust it', studio: 'Built mobile-first from the start', diyShort: 'You adjust it', studioShort: 'Mobile-first' },
  { label: 'Website changes', diy: 'You make updates', studio: 'We can update it', diyShort: 'You update it', studioShort: 'We update it' },
  { label: 'Technical maintenance', diy: 'You manage it', studio: 'Included with Full Support', diyShort: 'You manage it', studioShort: 'Full Support' },
  { label: 'Fixing problems', diy: 'You troubleshoot issues', studio: 'Support with Full Support', diyShort: 'You fix it', studioShort: 'Full Support' },
  { label: 'Google setup', diy: 'You figure it out', studio: 'Google setup included', diyShort: 'You figure it out', studioShort: 'Included' },
  { label: 'Performance', diy: 'Depends on builder and templates', studio: 'Optimized for speed', diyShort: 'Depends', studioShort: 'Optimized' },
  { label: 'Customization', diy: 'Limited customization', studio: 'Fully customizable', diyShort: 'Limited', studioShort: 'Fully custom' },
  { label: 'Long-term flexibility', diy: 'Harder to expand or customize later', studio: 'Flexible and expandable', diyShort: 'Harder to expand', studioShort: 'Flexible' },
  { label: 'Time required', diy: 'Many hours', studio: 'Very little time from you', diyShort: 'Many hours', studioShort: 'Very little' },
  { label: 'Ongoing help', diy: 'None', studio: 'Ongoing support available', diyShort: 'None', studioShort: 'Available' },
];

const platforms = ['Wix', 'Squarespace', 'Shopify', 'WordPress'];

function PlatformLogo({ name }: { name: string }) {
  return (
    <span className="text-xs md:text-base font-semibold text-brand-primary/30 tracking-wide">
      {name}
    </span>
  );
}

export default function Comparison() {
  return (
    <section className="py-16 md:py-28 px-6 bg-brand-primary/[0.02] border-y border-brand-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Title & Description */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
              Website Builders <span className="italic text-brand-accent">vs Studio 925</span>
            </h2>
            <p className="text-[13px] md:text-base text-brand-primary/55 max-w-xs md:max-w-2xl mx-auto leading-relaxed">
              Platforms like Wix, Squarespace, Shopify, and WordPress are great tools if you want to build your own website. Studio 925 is for business owners who just want everything handled.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block rounded-3xl border border-brand-primary/10 overflow-hidden">
            <div className="grid grid-cols-3 bg-brand-primary text-white">
              <div className="p-5 font-bold text-sm" />
              <div className="p-5 font-bold text-sm text-center">Website Builders</div>
              <div className="p-5 font-bold text-sm text-center">Us</div>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-brand-primary/[0.02]' : 'bg-white'}`}
              >
                <div className="p-5 text-sm font-semibold text-brand-primary border-r border-brand-primary/5">
                  {row.label}
                </div>
                <div className="p-5 text-sm text-brand-primary/50 text-center flex items-center justify-center gap-2 border-r border-brand-primary/5">
                  <X size={15} className="text-brand-primary/30 shrink-0" />
                  {row.diy}
                </div>
                <div className="p-5 text-sm text-brand-primary/80 text-center flex items-center justify-center gap-2">
                  <Check size={15} className="text-brand-accent shrink-0" />
                  {row.studio}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden rounded-2xl border border-brand-primary/10 overflow-hidden">
            <div className="grid grid-cols-2 bg-brand-primary text-white text-xs font-bold">
              <div className="p-3 text-center border-r border-white/10">Website Builders</div>
              <div className="p-3 text-center">Us</div>
            </div>

            {rows.map((row, i) => (
              <div key={row.label} className={i % 2 === 0 ? 'bg-brand-primary/[0.02]' : 'bg-white'}>
                <div className="px-3 pt-2.5 pb-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/40">{row.label}</p>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-3 pb-2.5 flex items-center gap-1.5 border-r border-brand-primary/5">
                    <X size={12} className="text-brand-primary/25 shrink-0" />
                    <p className="text-[11px] text-brand-primary/40 leading-tight">{row.diyShort}</p>
                  </div>
                  <div className="px-3 pb-2.5 flex items-center gap-1.5">
                    <Check size={12} className="text-brand-accent shrink-0" />
                    <p className="text-[11px] text-brand-primary/80 font-medium leading-tight">{row.studioShort}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-brand-primary/50 mt-8 md:mt-10 max-w-xl mx-auto leading-relaxed">
            Website builders give you tools and templates to build your own website. Studio 925 builds a custom website for you, launches it, and offers hosting and full support so you can focus on running your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
