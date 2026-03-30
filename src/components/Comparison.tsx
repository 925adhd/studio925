'use client';

import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';
import Link from 'next/link';

const rows = [
  { label: 'Who handles it', diy: 'You manage everything', studio: 'We handle everything for you', diyShort: 'You handle everything', studioShort: 'We handle everything' },
  { label: "How it's built", diy: 'Templates and drag-and-drop builders', studio: 'Custom built website', diyShort: 'Templates', studioShort: 'Custom built' },
  { label: 'Who builds it', diy: 'You build it yourself', studio: 'We build it for you', diyShort: 'You build it', studioShort: 'Built for you' },
  { label: 'Works on phones', diy: 'You adjust it yourself', studio: 'Works from the start', diyShort: 'You adjust it', studioShort: 'Works from the start' },
  { label: 'Making updates later', diy: 'You make updates', studio: 'We update it (with hosting)', diyShort: 'You update it', studioShort: 'We update it (with hosting)' },
  { label: 'Keeping everything running', diy: 'You manage it', studio: 'Full Support (with hosting)', diyShort: 'You manage it', studioShort: 'Full Support (with hosting)' },
  { label: 'When something breaks', diy: 'You troubleshoot issues', studio: 'Full Support (with hosting)', diyShort: 'You troubleshoot', studioShort: 'Full Support (with hosting)' },
  { label: 'Getting found on Google', diy: 'You set it up', studio: 'Google setup included', diyShort: 'You set it up', studioShort: 'Included' },
  { label: 'Speed and performance', diy: 'Varies by builder and templates', studio: 'Optimized for speed', diyShort: 'Varies', studioShort: 'Optimized' },
  { label: 'How customizable it is', diy: 'Limited customization', studio: 'Fully customizable', diyShort: 'Limited', studioShort: 'Fully custom' },
  { label: 'Ability to grow later', diy: 'Harder to expand or customize later', studio: 'Flexible and expandable', diyShort: 'Limited', studioShort: 'Flexible' },
  { label: 'Your time involved', diy: 'Many hours', studio: 'Minimal time from you', diyShort: 'Many hours', studioShort: 'Minimal time' },
  { label: 'Ongoing help and support', diy: 'None', studio: 'Ongoing support (with hosting)', diyShort: 'None', studioShort: 'Ongoing support (with hosting)' },
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
    <section className="py-16 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Title & Description */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-[22px] md:text-4xl mb-3 md:mb-4">
              Do It Yourself <span className="italic text-brand-accent">vs Let Us Handle It</span>
            </h2>
            <p className="hidden md:block text-base text-brand-primary/55 max-w-2xl mx-auto leading-relaxed">
              Platforms like Wix, Squarespace, Shopify, and WordPress are great tools if you want to build your own website. Studio 925 is for business owners who just want everything handled.
            </p>
            <p className="md:hidden text-xs text-brand-primary/55 max-w-xs mx-auto leading-relaxed">
              Skip the hassle of building it yourself. We handle everything for you.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block rounded-3xl border border-brand-primary/10 overflow-hidden">
            <div className="grid grid-cols-3 bg-brand-primary text-white">
              <div className="p-5 font-bold text-sm" />
              <div className="p-5 font-bold text-sm text-center">Build It Yourself</div>
              <div className="p-5 font-bold text-sm text-center">Studio 925</div>
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
          <div className="md:hidden rounded-2xl border border-brand-primary/10 overflow-hidden shadow-sm shadow-brand-primary/5">
            {/* Header */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-brand-primary text-white">
              <div className="px-3 py-2.5 text-[10px] font-bold uppercase tracking-widest" />
              <div className="px-2 py-2.5 text-[10px] font-bold text-center border-l border-white/10">DIY</div>
              <div className="px-2 py-2.5 text-[10px] font-bold text-center border-l border-white/10">Studio 925</div>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.2fr_1fr_1fr] items-center ${i % 2 === 0 ? 'bg-brand-primary/[0.02]' : 'bg-white'}`}
              >
                <div className="px-3 py-2 text-[11px] font-semibold text-brand-primary/70 border-r border-brand-primary/5">
                  {row.label}
                </div>
                <div className="px-2 py-2 flex items-center justify-center gap-1 border-r border-brand-primary/5">
                  <X size={11} className="text-brand-primary/25 shrink-0" />
                  <p className="text-[10px] text-brand-primary/40 leading-tight">{row.diyShort}</p>
                </div>
                <div className="px-2 py-2 flex items-center justify-center gap-1">
                  <Check size={11} className="text-brand-accent shrink-0" />
                  <p className="text-[10px] text-brand-primary/80 font-medium leading-tight">{row.studioShort}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-brand-primary/40 mt-6 md:mt-8">
            Ongoing updates, support, and maintenance are included with optional <Link href="/hosting-support" className="text-brand-accent hover:underline">hosting plans</Link>.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
