'use client';

import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { trackEvent } from '../lib/gtag';

const foundation = {
  name: "Foundation",
  standardPrice: "1,200",
  price: "900",
  description: "A professional website for your business — live in about a week. No templates, no page builders, no waiting around.",
  pages: "Up to 5 pages",
  features: [
    "48-hour draft so you can see it fast",
    "Custom design built around your business",
    "Mobile-first — looks great on every phone",
    "Contact form so customers can reach you",
    "Google-ready SEO setup",
    "Domain setup + secure connection",
    "Simple logo cleanup if needed",
    "Optimized for fast load times",
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
    pages: "Up to 8 pages",
    desc: "Turn visitors into calls. Includes a hands-on SEO audit built from Google's own ranking guidelines, dedicated service pages, analytics, and lead tracking.",
    support: "30 days post-launch support",
    bestFor: "Ready to get more leads",
    stripeLink: "https://buy.stripe.com/cNi3cx9kngCc9kw6qkcIE03",
  },
  {
    name: "Online Store",
    standardPrice: "3,200",
    price: "2,600",
    pages: "Up to 12 pages",
    desc: "Sell products, take payments, and manage customers from your own website. 60 days of guided support to make sure everything runs smooth.",
    support: "60 days guided support",
    bestFor: "Ready to sell online",
    stripeLink: "https://buy.stripe.com/6oU00l0NR2LmgMYcOIcIE04",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-36 px-6 bg-brand-warm">
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
            Ready to go
          </div>

          <div className="md:flex md:gap-12 md:items-start">
            {/* Left — name, price, CTA */}
            <div className="md:w-2/5 mb-8 md:mb-0">
              <h3 className="text-3xl md:text-4xl mb-1 whitespace-nowrap">Get online <span className="italic text-brand-accent">this&nbsp;week.</span></h3>
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
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {foundation.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check size={14} className="text-brand-accent mt-0.5 shrink-0" />
                    <span className="text-white/85">{feature}</span>
                  </li>
                ))}
              </ul>
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
                <button
                  onClick={() => {
                    trackEvent('click_lets_talk', alt.name);
                    window.dispatchEvent(new CustomEvent('planSelected', { detail: alt.name }));
                    window.location.href = '/#contact';
                  }}
                  className="shrink-0 bg-brand-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-1.5 hover:bg-brand-primary/90 transition-all"
                >
                  Let's Talk <ArrowRight size={14} />
                </button>
              </div>
              <a
                href={alt.stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_pay_now', alt.name)}
                className="block text-right text-[10px] mt-2.5 text-brand-primary/40 hover:text-brand-primary/60 transition-all hover:underline cursor-pointer"
              >
                Already decided? Pay for {alt.name} →
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-brand-primary/70 mt-8 md:mt-12">
          50% deposit to start. You own everything after final payment.
        </p>
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
