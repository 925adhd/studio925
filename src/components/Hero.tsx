'use client';

import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { trackEvent } from '../lib/gtag';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] md:min-h-0 pt-32 md:pt-36 pb-10 md:pb-28 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 grid-pattern -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Desktop: staggered fade-in via CSS (no JS animation library) */}
        <div className="hidden md:block">
          <p className="fade-in-up text-xs font-medium tracking-[0.15em] uppercase text-brand-primary/70 mb-5">
            Helping Local Businesses Grow Online · Leitchfield &amp; Grayson County, Kentucky
          </p>

          <h1 className="fade-in-up text-5xl md:text-7xl mb-4 leading-[1.1]" style={{ animationDelay: '0.1s' }}>
            Your business deserves a website <span className="italic text-brand-accent">that actually works.</span>
          </h1>

          <p className="fade-in-up flex items-center justify-center gap-1.5 text-base mb-5" style={{ animationDelay: '0.2s' }}>
            <MapPin size={14} className="shrink-0 text-brand-primary/55" />
            <span className="font-semibold text-brand-primary/70">Leitchfield, KY</span>
          </p>

          <p className="fade-in-up text-xl text-brand-primary/70 mb-4 max-w-2xl leading-relaxed mx-auto" style={{ animationDelay: '0.3s' }}>
            Fast, mobile-first websites built to look professional, load fast, and make it easy for customers to find and contact&nbsp;you.
          </p>

          <div className="fade-in-up flex justify-center" style={{ animationDelay: '0.4s' }}>
            <Link href="https://audit.studio925.design" onClick={() => trackEvent('click_free_audit', 'hero_desktop')} className="bg-brand-primary text-white px-9 py-3.5 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/20">
              Get my free local SEO audit <ArrowRight size={20} />
            </Link>
          </div>
          <p className="fade-in-up text-xs font-medium text-brand-primary/70 mt-4" style={{ animationDelay: '0.5s' }}>
            Real Google data · No commitment
          </p>
          <a href="/#pricing" onClick={() => trackEvent('click_view_pricing', 'hero_desktop')} className="fade-in-up inline-block mt-3 text-sm font-semibold text-brand-primary/70 underline underline-offset-4 hover:text-brand-primary transition-colors" style={{ animationDelay: '0.6s' }}>
            View Pricing
          </a>
        </div>

        {/* Mobile: fully static, no animation — critical for LCP */}
        <div className="md:hidden text-left">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-brand-primary/70 mb-6">
            Helping Local Businesses Grow Online
          </p>

          <h1 className="text-[clamp(2.25rem,9vw,3.5rem)] mb-5 leading-[1.12]">
            Your business<br />deserves a website<span className="block italic text-brand-accent">that actually&nbsp;works.</span>
          </h1>

          <p className="flex items-center gap-1.5 text-lg mb-7">
            <MapPin size={18} className="shrink-0 text-brand-primary/55" />
            <span className="font-bold text-brand-primary/85">Leitchfield, KY</span>
          </p>

          <p className="text-lg text-brand-primary/70 mb-12 leading-[1.4]">
            Fast, mobile-first websites built to look professional and get&nbsp;found.
          </p>

          <div className="flex flex-col">
            <Link href="https://audit.studio925.design" onClick={() => trackEvent('click_free_audit', 'hero_mobile')} className="w-full bg-brand-primary text-white py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/25">
              Free local SEO audit <ArrowRight size={22} />
            </Link>
            <p className="mt-4 text-sm font-medium text-brand-primary/70 text-center">
              Real Google data · No commitment
            </p>
            <a href="/#pricing" onClick={() => trackEvent('click_view_pricing', 'hero_mobile')} className="mt-6 text-lg font-bold text-brand-primary underline underline-offset-4 flex items-center justify-center gap-1 min-h-[44px]">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
