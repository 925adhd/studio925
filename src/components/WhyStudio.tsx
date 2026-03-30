'use client';

import { motion } from 'motion/react';
import { Zap, Rocket, User, PhoneCall, MapPin, Key, DollarSign, MessageCircle, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type TickerItem = { text: string; icon: LucideIcon };

const mobileRow1: TickerItem[] = [
  { text: '48-hour preview', icon: Zap },
  { text: 'See it fast', icon: Rocket },
  { text: 'Work with the developer', icon: User },
];
const mobileRow2: TickerItem[] = [
  { text: 'Turns visitors into customers', icon: PhoneCall },
  { text: 'Local, not outsourced', icon: MapPin },
  { text: 'You own everything', icon: Key },
];
const mobileRow3: TickerItem[] = [
  { text: 'No hidden fees', icon: DollarSign },
  { text: 'Clear communication', icon: MessageCircle },
  { text: 'Nothing confusing', icon: Sparkles },
];

const desktopRow1: TickerItem[] = [
  { text: '48-hour live preview', icon: Zap },
  { text: 'See your website take shape fast', icon: Rocket },
  { text: 'Work directly with the developer', icon: User },
  { text: 'Designed to turn visitors into customers', icon: PhoneCall },
  { text: 'Local, not outsourced', icon: MapPin },
];
const desktopRow2: TickerItem[] = [
  { text: 'You own your website and files', icon: Key },
  { text: 'Simple, upfront pricing', icon: DollarSign },
  { text: 'Clear communication from start to launch', icon: MessageCircle },
  { text: 'No confusing tools or dashboards', icon: Sparkles },
];

function TickerRow({ items, speed, reverse = false, size = 'sm' }: { items: TickerItem[]; speed: number; reverse?: boolean; size?: 'sm' | 'lg' }) {
  const isLg = size === 'lg';
  return (
    <div className="overflow-hidden">
      <div className="flex">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className={`flex ${isLg ? 'gap-4' : 'gap-2.5'} shrink-0 ${isLg ? 'pr-4' : 'pr-2.5'}`}
            style={{
              animation: `scroll ${speed}s linear infinite${reverse ? ' reverse' : ''}`,
              willChange: 'transform',
            }}
            aria-hidden={copy === 1}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className={`flex items-center ${isLg ? 'gap-3 px-6 py-4' : 'gap-2 px-4 py-3'} rounded-xl bg-white/90 border border-brand-primary/5 whitespace-nowrap shrink-0`}
              >
                <item.icon size={isLg ? 18 : 14} className="text-brand-accent shrink-0" />
                <span className={`${isLg ? 'text-[15px]' : 'text-[13px]'} text-brand-primary/70 font-medium`}>{item.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhyStudio() {
  return (
    <section className="py-16 md:py-24 bg-brand-warm overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-xl md:text-4xl mb-3 md:mb-4">
              What Makes <span className="italic text-brand-accent">Studio 925 Different</span>
            </h2>
            <p className="text-xs md:text-base text-brand-primary/55 max-w-xs md:max-w-2xl mx-auto leading-relaxed">
              No templates. No page builders. Just clean code built specifically for your business.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Desktop: 2-row ticker — full width */}
      <div className="hidden md:block space-y-4">
        <TickerRow items={desktopRow1} speed={23} size="lg" />
        <TickerRow items={desktopRow2} speed={25} reverse size="lg" />
      </div>

      {/* Mobile: 3-row ticker — full width */}
      <div className="md:hidden space-y-2.5">
        <TickerRow items={mobileRow1} speed={10} />
        <TickerRow items={mobileRow2} speed={16} reverse />
        <TickerRow items={mobileRow3} speed={13} />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
      `}} />
    </section>
  );
}
