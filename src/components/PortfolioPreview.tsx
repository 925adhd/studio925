'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { trackEvent } from '../lib/gtag';

const images = ['/csmedia-listing-sold-hero.webp', '/csmedia-featured-projects-portfolio.webp', '/csmedia-services-grid.webp', '/csmedia-virtual-staging-service.webp', '/csmedia-how-it-works.webp', '/csmedia-client-reviews-testimonials.webp', '/csmedia-booking-call-to-action.webp'];

function CarouselImage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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

export default function PortfolioPreview() {
  return (
    <section className="py-20 md:py-36 px-6 bg-white border-t border-brand-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
            Real websites for <span className="italic text-brand-accent">real businesses</span>
          </h2>
          <p className="text-sm md:text-base text-brand-primary/60 max-w-lg mx-auto">
            Every project is built from scratch. No templates, no page builders.
          </p>
        </div>

        {/* Desktop: side by side */}
        <div className="hidden md:grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          {/* Portfolio card */}
          <motion.a
            href="https://cscreatesmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group block rounded-3xl overflow-hidden border border-brand-primary/5 bg-white shadow-sm shadow-brand-primary/5"
          >
            <div className="aspect-[16/10] overflow-hidden bg-brand-primary/5 p-5">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-md shadow-brand-primary/10 flex items-center">
                <CarouselImage />
              </div>
            </div>
            <div className="p-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg">CS Media LLC</p>
                <p className="text-sm text-brand-primary/50">Real Estate Media · Leitchfield, KY</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent shrink-0">
                Visit Site <ExternalLink size={13} />
              </span>
            </div>
          </motion.a>

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
        <div className="md:hidden">
          <motion.a
            href="https://cscreatesmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group block rounded-2xl overflow-hidden border border-brand-primary/5 bg-white shadow-sm shadow-brand-primary/5 mb-6"
          >
            <div className="aspect-[16/10] overflow-hidden bg-brand-primary/5 p-3">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-md shadow-brand-primary/10 flex items-center">
                <CarouselImage />
              </div>
            </div>
            <div className="p-4 flex items-center justify-between gap-3">
              <div>
                <p className="font-bold text-base">CS Media LLC</p>
                <p className="text-xs text-brand-primary/50">Real Estate Media · Leitchfield, KY</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-accent shrink-0">
                Visit Site <ExternalLink size={11} />
              </span>
            </div>
          </motion.a>

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
