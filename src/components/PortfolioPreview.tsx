'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { trackEvent } from '../lib/gtag';

type Project = {
  src: string;
  alt: string;
  href: string;
  name: string;
};

const projects: Project[] = [
  { src: '/csmedia-listing-sold-hero.webp', alt: 'CS Media — Real estate photography in Leitchfield, KY', href: 'https://cscreatesmedia.com', name: 'CS Media' },
  { src: '/925adhd.webp', alt: '925 ADHD — flexible work guide', href: 'https://925adhd.com', name: '925 ADHD' },
  { src: '/townly.webp', alt: 'Townly — Grayson County community board', href: 'https://townly.us', name: 'Townly' },
  { src: '/4chariots.webp', alt: 'Four Chariots — minimal faithwear e-commerce site', href: 'https://4chariots.com', name: 'Four Chariots' },
];

/* CS Media carousel images for mobile — depth over breadth */
const csmediaImages = [
  '/csmedia-listing-sold-hero.webp',
  '/csmedia-featured-projects-portfolio.webp',
  '/csmedia-services-grid.webp',
  '/csmedia-virtual-staging-service.webp',
  '/csmedia-how-it-works.webp',
  '/csmedia-client-reviews-testimonials.webp',
  '/csmedia-booking-call-to-action.webp',
];

function useCarousel(enabled: boolean) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pausedUntil, setPausedUntil] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const now = Date.now();
    const baseDelay = 2000;
    const delay = Math.max(baseDelay, pausedUntil - now);
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % csmediaImages.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [activeIndex, pausedUntil, enabled]);

  const goTo = (i: number) => {
    setActiveIndex(i);
    setPausedUntil(Date.now() + 5000);
  };
  const next = () => {
    setActiveIndex((p) => (p + 1) % csmediaImages.length);
    setPausedUntil(Date.now() + 5000);
  };
  const prev = () => {
    setActiveIndex((p) => (p - 1 + csmediaImages.length) % csmediaImages.length);
    setPausedUntil(Date.now() + 5000);
  };

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
      {csmediaImages.map((img, i) => (
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
      {csmediaImages.map((_, i) => (
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const maxHeight = 110;

  const mobileRef = useRef<HTMLDivElement>(null);
  const mobileInView = useInView(mobileRef, { margin: '-10% 0px' });
  const mobileCarousel = useCarousel(mobileInView);

  return (
    <section className="relative pt-2 pb-14 md:pt-12 md:pb-12 px-6 bg-white">
      {/* Extends the hero's warm background down through the middle of the cards (desktop only) */}
      <div className="absolute inset-x-0 top-0 h-[90px] bg-brand-warm hidden md:block pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-center text-lg mb-4 md:sr-only">
          Most recent <span className="italic text-emerald-800">build</span>
        </h2>

        {/* Desktop: angled 3D overlapping row */}
        <div className="hidden md:block relative h-[300px] md:-mt-4 -mb-[160px]">
          <div className="flex -space-x-48 lg:-space-x-56 pb-8 pt-8 items-end justify-center">
            {projects.map((project, index) => {
              const totalImages = projects.length;
              const baseOffset = maxHeight;

              const isHovered = hoveredIndex === index;
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
              const xOffset = isOtherHovered
                ? (index < hoveredIndex! ? -55 : 55)
                : 0;
              const zOffset = isHovered ? 90 : 0;
              const zIndex = isHovered ? 50 : totalImages - index;

              return (
                <motion.a
                  key={index}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_portfolio_card', `gallery_${project.name.toLowerCase().replace(/\s+/g, '_')}`)}
                  className="group flex-shrink-0 cursor-pointer"
                  style={{ zIndex }}
                  initial={false}
                  animate={{
                    transform: `perspective(2200px) translateX(${xOffset}px) translateZ(${zOffset}px) rotateY(-28deg) translateY(${-baseOffset}px)`,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  aria-label={`Visit ${project.name}`}
                >
                  <div
                    className={`relative aspect-video w-80 lg:w-96 rounded-xl overflow-hidden ring-1 transition duration-300 group-hover:scale-[1.03] ${
                      isHovered ? 'ring-brand-primary/25' : 'ring-brand-primary/5'
                    }`}
                    style={{
                      boxShadow: isHovered
                        ? '0 28px 50px -12px rgba(15,23,42,0.45), 0 12px 24px -8px rgba(15,23,42,0.25), 20px 0px 20px 0px rgba(15,23,42,0.22)'
                        : '0.8px 0px 0.8px 0px rgba(15,23,42,0.02), 2.4px 0px 2.4px 0px rgba(15,23,42,0.04), 6.4px 0px 6.4px 0px rgba(15,23,42,0.08), 20px 0px 20px 0px rgba(15,23,42,0.22)',
                    }}
                  >
                    <img
                      src={project.src}
                      alt={project.alt}
                      className="w-full h-full object-cover object-left-top"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-brand-primary/85 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold">{project.name}</span>
                      <ExternalLink size={13} />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Mobile: CS Media carousel — depth over breadth */}
        <div ref={mobileRef} className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group block rounded-2xl overflow-hidden border border-brand-primary/5 bg-white shadow-sm shadow-brand-primary/5"
          >
            <div
              className="aspect-[16/10] overflow-hidden bg-brand-primary/5 p-3 pb-2 touch-pan-y select-none"
              {...mobileCarousel.swipeHandlers}
            >
              <div className="w-full h-full rounded-xl overflow-hidden shadow-md shadow-brand-primary/10 flex items-center">
                <Slides activeIndex={mobileCarousel.activeIndex} />
              </div>
            </div>
            <Dots activeIndex={mobileCarousel.activeIndex} onSelect={mobileCarousel.goTo} />
            <a
              href="https://cscreatesmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_portfolio_card', 'mobile_csmedia')}
              className="p-4 flex items-center justify-between gap-3 border-t border-brand-primary/5"
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
        </div>

        {/* Testimonial + CTA */}
        <div className="mt-8 md:mt-16 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center max-w-4xl mx-auto">
          <div>
            <div className="flex gap-0.5 mb-3 md:mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={15} className="text-brand-accent fill-brand-accent" />
              ))}
            </div>
            <p className="text-sm md:text-base text-brand-primary/70 leading-relaxed mb-3 italic">
              "Hands down the cleanest, smoothest, most professional site I've ever had. Studio 925 doesn't just build websites, she builds brands that convert."
            </p>
            <p className="text-xs md:text-sm font-semibold text-brand-primary">Cheris, Owner of CS Media LLC</p>
          </div>

          <Link
            href="/portfolio"
            onClick={() => trackEvent('click_view_portfolio', 'portfolio_preview')}
            className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-brand-primary/90 transition-all group shrink-0"
          >
            View Full Portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
