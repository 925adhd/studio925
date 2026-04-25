'use client';

import { CheckCircle2, Clock, Users, Sparkles } from 'lucide-react';

const items = [
  {
    title: '48-Hour Draft',
    mobileTitle: '48-Hour Draft',
    desc: 'Stop wondering if you made the right call. See your site working in days, not weeks.',
    icon: Clock,
    href: undefined as string | undefined,
  },
  {
    title: 'Local',
    mobileTitle: 'Local',
    desc: 'No outsourcing or time zones. One developer, right here in Leitchfield, KY.',
    icon: Users,
    href: '#local',
  },
  {
    title: 'Fully Custom',
    mobileTitle: 'Fully Custom',
    desc: 'No cookie-cutter templates. Built with real code, specifically for your business.',
    icon: Sparkles,
    href: undefined as string | undefined,
  },
];

export default function TrustStrip() {
  return (
    <section className="pt-8 pb-10 md:pt-12 md:pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="sr-only">Why local businesses choose Studio 925</h2>
        {/* Mobile: plain text row — no animation, instant */}
        <div className="sm:hidden flex items-center justify-center gap-4">
          {items.map((item) => (
            <div key={item.mobileTitle} className="flex items-center gap-1.5">
              <item.icon size={12} className="text-brand-accent shrink-0" />
              <span className="text-xs font-semibold text-brand-primary/65 whitespace-nowrap">{item.mobileTitle}</span>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-20">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="fade-in-up flex items-start gap-3"
              style={{ animationDelay: `${0.5 + i * 0.1}s` }}
            >
              <CheckCircle2 size={22} className="text-brand-accent shrink-0 mt-0.5 md:w-6 md:h-6" />
              <div>
                {item.href ? (
                  <a href={item.href} className="font-bold text-sm md:text-lg text-brand-primary mb-1.5 block hover:text-brand-accent transition-colors">{item.title}</a>
                ) : (
                  <p className="font-bold text-sm md:text-lg text-brand-primary mb-1.5">{item.title}</p>
                )}
                <p className="text-xs md:text-sm text-brand-primary/65 leading-relaxed mb-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
