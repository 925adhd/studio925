'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { trackEvent } from '../lib/gtag';

const foundation = {
  name: "Foundation",
  standardPrice: "1,200",
  price: "900",
  description: "A professional site customers can find when they search your name. A Facebook page isn't enough; word-of-mouth and referrals still Google you before they call, and a missing or messy site costs you the close. Live in about a week.",
  pages: "Up to 5 pages",
  features: [
    "Custom design built around your business",
    "48-hour draft so you can see it fast",
    "Mobile-first, looks great on every phone",
    "Domain setup + secure connection",
    "Optimized for fast load times",
    "SEO backlink from Studio 925 to your site",
    "Google-ready SEO setup",
    "Simple logo cleanup if needed",
    "Contact form so customers can reach you",
    "Legal pages included (Privacy, Terms, Cookies)",
    "Revisions until you're happy before launch",
    "You own everything after final payment",
  ],
  support: "Launch support included",
  stripeLink: "https://buy.stripe.com/eVqbJ368b1Hi2W8160cIE02",
};

const alternatives = [
  {
    name: "Growth",
    standardPrice: "2,400",
    price: "1,800",
    pages: "Up to 10 core pages",
    desc: "Show up when people are ready to call. We start with a hands-on SEO audit, then build the site around the actual keyword gaps. Dedicated service pages, analytics, and lead tracking so you can see which words are bringing calls.",
    support: "30 days post-launch support",
    bestFor: "Built to compete on Google",
    stripeLink: "https://buy.stripe.com/cNi3cx9kngCc9kw6qkcIE03",
  },
  {
    name: "Online Store",
    standardPrice: "3,200",
    price: "2,600",
    pages: "Up to 15 core pages",
    desc: "Everything in Growth, plus a full online store. Sell products, take payments, and manage customers from your own website. 60 days of guided support to make sure everything runs smooth.",
    support: "60 days guided support",
    bestFor: "Ready to sell online",
    stripeLink: "https://buy.stripe.com/6oU00l0NR2LmgMYcOIcIE04",
  },
];

export default function Pricing() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  return (
    <section id="pricing" className="py-14 md:pt-20 md:pb-36 px-6 bg-brand-warm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 leading-snug">Simple pricing. <span className="italic text-brand-accent">Real results.</span></h2>
          <p className="text-brand-primary/60 text-sm md:text-lg mt-2 md:mt-3">One flat price per project. No hourly billing, no hidden fees, no monthly platform costs.</p>
          <Link href="/blog/is-custom-website-worth-it" className="inline-block text-xs text-emerald-700 underline underline-offset-2 hover:text-emerald-800 mt-2 md:mt-3 transition-colors">See how a $900 website pays for itself →</Link>
        </div>

        {/* Hero card — Foundation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-brand-primary text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl mb-4"
        >
          <div className="absolute -top-4 left-8 md:left-12 bg-brand-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Foundation
          </div>

          <div className="md:flex md:gap-12 md:items-start">
            {/* Left — name, price, CTA */}
            <div className="md:w-2/5 mb-8 md:mb-0">
              <h3 className="text-3xl md:text-4xl mb-1">Get online <span className="italic text-brand-accent">this&nbsp;week.</span></h3>
              <div className="mb-4 mt-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl md:text-6xl font-serif font-bold italic">
                    ${foundation.price}
                  </span>
                  <span className="text-sm text-white/40 line-through">${foundation.standardPrice}</span>
                </div>
                <p className="text-xs text-brand-accent font-semibold uppercase tracking-widest mt-2">
                  Introductory price · {foundation.pages}
                </p>
              </div>

              <p className="text-sm text-white/65 leading-relaxed mb-6">
                {foundation.description}
              </p>

              <a
                href={foundation.stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_lets_go', 'Foundation')}
                className="w-full md:w-auto bg-brand-accent text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-accent/90 transition-all text-lg cursor-pointer"
              >
                Let's Go <ArrowRight size={20} />
              </a>
              <p className="text-[11px] text-white/40 mt-3 text-center md:text-left">50% deposit to start · You own everything after final payment</p>
            </div>

            {/* Right — features */}
            <div className="md:w-3/5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">Everything included</p>
              {/* Mobile: collapsed list (first 5), desktop: full list */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {foundation.features.map((feature, i) => (
                  <li
                    key={feature}
                    className={`${i >= 5 && !featuresOpen ? 'hidden md:flex' : 'flex'} items-start gap-2.5 text-sm`}
                  >
                    <Check size={14} className="text-brand-accent mt-0.5 shrink-0" />
                    <span className="text-white/85">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setFeaturesOpen((v) => !v)}
                aria-expanded={featuresOpen}
                className="md:hidden mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent underline underline-offset-4 min-h-[44px]"
              >
                {featuresOpen ? 'Show less' : 'See everything included'}
                <ChevronDown size={14} className={`transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className="mt-6 text-xs font-medium px-3 py-2 rounded-xl bg-white/10 text-white/55 inline-block">
                {foundation.support}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Alternative plans — compact rows */}
        <div className="grid md:grid-cols-2 gap-4">
          {alternatives.map((alt, i) => (
            <motion.div
              key={alt.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-brand-primary/5 rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/40">{alt.bestFor}</span>
                  <h3 className="text-lg font-serif font-bold">{alt.name}</h3>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-2xl font-serif font-bold italic">${alt.price}</span>
                  <p className="text-[10px] text-brand-primary/50">Std. ${alt.standardPrice}</p>
                </div>
              </div>

              <p className="text-xs text-brand-primary/60 leading-relaxed mb-4 flex-1">{alt.desc}</p>

              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-medium text-brand-primary/45">{alt.pages} · {alt.support}</span>
                <a
                  href={alt.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_lets_go', alt.name)}
                  className="shrink-0 bg-brand-accent text-white px-5 py-3 rounded-xl text-sm font-bold flex items-center gap-1.5 hover:bg-brand-accent/90 transition-all cursor-pointer"
                >
                  Let's Go <ArrowRight size={14} />
                </a>
              </div>
              <p className="text-[10px] text-brand-primary/40 mt-2.5 text-right">50% deposit · You own everything after final payment</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-brand-primary/70 mt-8 md:mt-12">
          50% deposit to start. You own everything after final payment.
        </p>
        <div className="mt-3 text-center">
          <Link
            href="/how-it-works"
            onClick={() => trackEvent('click_how_it_works', 'pricing')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-4 transition-colors"
          >
            See the full process from start to launch
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-6 text-center">
          <Link href="/blog/your-website-is-a-tax-write-off" className="inline-block text-[11px] text-brand-primary/75 hover:text-brand-primary transition-colors">
            Did you know? Your website may be fully tax-deductible.
          </Link>
          <p className="text-[10px] text-brand-primary/70 mt-0.5">Consult a tax professional for your specific situation.</p>
        </div>
      </div>

      {/* After Launch Bridge */}
      <div className="max-w-2xl mx-auto text-center mt-12 md:mt-16 pt-8 md:pt-12 border-t border-brand-primary/5">
        <h3 className="text-xl md:text-3xl mb-3 md:mb-4">Keep Your Website Running Smoothly</h3>
        <p className="text-sm md:text-base text-brand-primary/60 leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto">
          We handle updates, backups, and support so your website stays online and working for your business.
        </p>
        <Link
          href="/hosting-support"
          className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3.5 rounded-2xl font-semibold hover:bg-brand-primary/90 transition-all"
        >
          View Hosting & Support <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
