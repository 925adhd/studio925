'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { trackEvent } from '../lib/gtag';

const images = ['/csmedia-listing-sold-hero.webp', '/csmedia-featured-projects-portfolio.webp', '/csmedia-services-grid.webp', '/csmedia-virtual-staging-service.webp', '/csmedia-how-it-works.webp', '/csmedia-client-reviews-testimonials.webp', '/csmedia-booking-call-to-action.webp'];

function useCarousel(enabled: boolean) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pausedUntil, setPausedUntil] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const now = Date.now();
    const baseDelay = 2000;
    const delay = Math.max(baseDelay, pausedUntil - now);
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [activeIndex, pausedUntil, enabled]);

  const goTo = (i: number) => {
    setActiveIndex(i);
    setPausedUntil(Date.now() + 5000);
  };

  const next = () => {
    setActiveIndex((p) => (p + 1) % images.length);
    setPausedUntil(Date.now() + 5000);
  };

  const prev = () => {
    setActiveIndex((p) => (p - 1 + images.length) % images.length);
    setPausedUntil(Date.now() + 5000);
  };

  // Swipe gesture handlers — left = next, right = prev. Only fire when the
  // gesture is clearly horizontal so vertical page scrolls don't trigger it.
  const touchStart = useRef({ x: 0, y: 0 });
  const swipeHandlers = {
    onTouchStart: (e: React.TouchEvent) => {
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    },
    onTouchEnd: (e: React.TouchEvent) => {
      const dx = touchStart.current.x - e.changedTouches[0].clientX;
      const dy = touchStart.current.y - e.changedTouches[0].clientY;
      if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx > 0) next();
      else prev();
    },
  };

  return { activeIndex, goTo, swipeHandlers };
}

function Slides({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative">
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt={`CS Media website screenshot ${i + 1}`}
          loading="lazy"
          className={`w-full h-full object-cover transition-opacity duration-700 ${i === 0 ? '' : 'absolute inset-0'} ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
}

function Dots({ activeIndex, onSelect }: { activeIndex: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex gap-1 justify-center py-3">
      {images.map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          aria-label={`View screenshot ${i + 1}`}
          className="inline-flex items-center justify-center w-6 h-6 cursor-pointer"
        >
          <span className={`block w-1.5 h-1.5 rounded-full transition-colors ${
            i === activeIndex ? 'bg-brand-primary' : 'bg-brand-primary/30'
          }`} />
        </button>
      ))}
    </div>
  );
}

export default function PortfolioPreview() {
  // Gate each carousel's timer until its section scrolls into view so the
  // first slide doesn't auto-advance while the user is still above the fold.
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const desktopInView = useInView(desktopRef, { margin: '-10% 0px' });
  const mobileInView = useInView(mobileRef, { margin: '-10% 0px' });

  const desktopCarousel = useCarousel(desktopInView);
  const mobileCarousel = useCarousel(mobileInView);

  return (
    <section className="py-14 md:py-36 px-6 bg-white border-t border-brand-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-7 md:mb-14">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
            Real websites for <span className="italic text-brand-accent">real businesses</span>
          </h2>
          <p className="text-sm md:text-base text-brand-primary/60 max-w-lg mx-auto">
            Every project is built from scratch. No templates, no page builders.
          </p>
        </div>

        {/* Desktop: side by side */}
        <div ref={desktopRef} className="hidden md:grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          {/* Portfolio card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group block rounded-3xl overflow-hidden border border-brand-primary/5 bg-white shadow-sm shadow-brand-primary/5"
          >
            <div
              className="aspect-[16/10] overflow-hidden bg-brand-primary/5 p-5 pb-3 touch-pan-y select-none"
              {...desktopCarousel.swipeHandlers}
            >
              <div className="w-full h-full rounded-xl overflow-hidden shadow-md shadow-brand-primary/10 flex items-center">
                <Slides activeIndex={desktopCarousel.activeIndex} />
              </div>
            </div>
            <Dots activeIndex={desktopCarousel.activeIndex} onSelect={desktopCarousel.goTo} />
            <a
              href="https://cscreatesmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 flex items-center justify-between gap-4"
            >
              <div>
                <p className="font-bold text-lg">CS Media LLC</p>
                <p className="text-sm text-brand-primary/70">Real Estate Media · Leitchfield, KY</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 shrink-0">
                Visit Site <ExternalLink size={13} />
              </span>
            </a>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex gap-0.5 mb-5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="text-brand-accent fill-brand-accent" />
              ))}
            </div>
            <p className="text-base lg:text-lg text-brand-primary/70 leading-relaxed mb-4 italic">
              "Not even exaggerating, this is hands down the cleanest, smoothest, most professional site I've ever had. Everything flows, loads fast, and actually reflects the quality I bring. Studio 925 doesn't just build websites, she builds brands that convert. If you're serious about leveling up your business, I highly recommend reaching out to Kara."
            </p>
            <p className="text-sm font-semibold text-brand-primary mb-6">Cheris, Owner of CS Media LLC</p>
            <Link
              href="/portfolio"
              onClick={() => trackEvent('click_view_portfolio', 'portfolio_preview')}
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-brand-primary/90 transition-all group"
            >
              View Full Portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile: stacked */}
        <div ref={mobileRef} className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group block rounded-2xl overflow-hidden border border-brand-primary/5 bg-white shadow-sm shadow-brand-primary/5 mb-6"
          >
            <div className="aspect-[16/10] overflow-hidden bg-brand-primary/5 p-3 pb-2 select-none">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-md shadow-brand-primary/10 flex items-center">
                <Slides activeIndex={mobileCarousel.activeIndex} />
              </div>
            </div>
            <Dots activeIndex={mobileCarousel.activeIndex} onSelect={mobileCarousel.goTo} />
            <a
              href="https://cscreatesmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 flex items-center justify-between gap-3"
            >
              <div>
                <p className="font-bold text-base">CS Media LLC</p>
                <p className="text-xs text-brand-primary/75">Real Estate Media · Leitchfield, KY</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 shrink-0">
                Visit Site <ExternalLink size={11} />
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-5 rounded-2xl bg-brand-warm border border-brand-primary/5"
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="text-brand-accent fill-brand-accent" />
              ))}
            </div>
            <p className="text-sm text-brand-primary/70 leading-relaxed mb-3 italic">
              "Not even exaggerating, this is hands down the cleanest, smoothest, most professional site I've ever had. Studio 925 doesn't just build websites, she builds brands that convert."
            </p>
            <p className="text-xs font-semibold text-brand-primary">Cheris, Owner of CS Media LLC</p>
          </motion.div>

          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              onClick={() => trackEvent('click_view_portfolio', 'portfolio_preview_mobile')}
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-brand-primary/90 transition-all group"
            >
              View Full Portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
