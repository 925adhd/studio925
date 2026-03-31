'use client';

import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: "Foundation",
    standardPrice: "1,200",
    price: "900",
    description: "Get your business online with a clean, professional site that makes you easy to find and easy to contact.",
    pages: "Up to 5 pages",
    pageDetail: "Homepage, About, Services, Contact + 1 more",
    features: [
      "48-hour draft so you can see it fast",
      "Custom design built around your business",
      "Mobile-first — looks great on every phone",
      "Contact form so customers can reach you",
      "Google-ready SEO setup",
      "Domain setup + secure connection",
      "Simple logo cleanup if needed",
      "Optimized for fast load times",
      "Revisions until you're happy before launch",
      "You own everything after final payment",
    ],
    support: "Launch support included",
    bestFor: "Get your business online",
    cta: "Start Your Website",
    stripeLink: "https://buy.stripe.com/eVqbJ368b1Hi2W8160cIE02",
    featured: false
  },
  {
    name: "Growth",
    standardPrice: "2,400",
    price: "1,800",
    description: "Built to turn more visitors into calls and inquiries. Dedicated service pages, analytics, and lead tracking to help your business grow.",
    pages: "Up to 8 pages",
    pageDetail: "Everything in Foundation + dedicated service pages",
    features: [
      "Everything in Foundation, plus:",
      "Dedicated pages for each of your main services",
      "Website dashboard for quick content updates",
      "Structured to guide visitors toward contacting you",
      "Click-to-call and text buttons for mobile",
      "Google Analytics to see what's working",
      "Built-in lead tracking — know where calls come from",
      "Legal pages included (Privacy, Terms, Cookies)",
      "30 days of post-launch support",
    ],
    support: "30 days post-launch support",
    bestFor: "Most businesses choose this",
    cta: "Start Your Website",
    stripeLink: "https://buy.stripe.com/cNi3cx9kngCc9kw6qkcIE03",
    featured: true
  },
  {
    name: "Online Store",
    standardPrice: "3,200",
    price: "2,600",
    description: "Sell online, manage customers, and take payments — all from your own website. A complete system, not just a storefront.",
    pages: "Up to 12 pages",
    pageDetail: "Everything in Growth + store, accounts, checkout",
    features: [
      "Everything in Growth, plus:",
      "Online store with secure Stripe checkout",
      "Customer accounts — sign up, log in, manage orders",
      "Admin dashboard to manage products and customers",
      "Order confirmation emails sent automatically",
      "Built to handle payments and customer data securely",
      "60 days of guided post-launch support",
    ],
    support: "60 days guided support",
    bestFor: "Sell online & manage customers",
    cta: "Start Your Website",
    stripeLink: "https://buy.stripe.com/6oU00l0NR2LmgMYcOIcIE04",
    featured: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-brand-warm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 max-w-2xl md:max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 leading-snug">Simple pricing. <span className="italic text-brand-accent">Real results.</span></h2>
          <p className="text-brand-primary/60 text-sm md:text-lg mt-2 md:mt-3">One flat price per project. No hourly billing, no hidden fees, no monthly platform costs.</p>
          <p className="text-[11px] md:text-sm text-brand-primary/65 mt-2 md:mt-4">Introductory pricing currently available for new projects.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-14 lg:gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border flex flex-col ${
                tier.featured
                  ? 'bg-brand-primary text-white border-brand-primary shadow-2xl lg:scale-105 z-10'
                  : 'bg-white border-brand-primary/5'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                 <div className={`text-xs mb-1 font-semibold tracking-wide ${tier.featured ? 'text-white/70' : 'text-brand-primary/60'}`}>{tier.bestFor}</div>
                 <h3 className={`text-2xl mb-2 ${tier.featured ? 'text-white' : 'text-brand-primary'}`}>{tier.name}</h3>
                <div className="mb-5">
                  <span className={`text-xs font-semibold uppercase tracking-widest text-brand-accent`}>
                    Introductory Price
                  </span>
                  <div className="mt-1">
                    <span className="text-5xl font-serif font-bold italic">
                      ${tier.price}
                    </span>
                  </div>
                  <p className={`text-xs mt-3 ${tier.featured ? 'text-white/55' : 'text-brand-primary/65'}`}>
                    Standard Price ${tier.standardPrice}
                  </p>
                </div>

                {/* Page count badge */}
                <div className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-bold mb-4 ${
                  tier.featured
                    ? 'bg-white/10 text-white/80'
                    : 'bg-brand-accent/10 text-brand-accent'
                }`}>
                  {tier.pages}
                </div>

                <p className={`text-sm ${tier.featured ? 'text-white/70' : 'text-brand-primary/60'}`}>
                  {tier.description}
                </p>
                <p className={`text-xs mt-2 ${tier.featured ? 'text-white/55' : 'text-brand-primary/65'}`}>
                  {tier.pageDetail}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) =>
                  feature.endsWith('plus:') ? (
                    <li key={feature} className={`text-xs font-bold uppercase tracking-widest pt-1 ${tier.featured ? 'text-brand-accent/70' : 'text-brand-accent/50'}`}>
                      {feature}
                    </li>
                  ) : (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="text-brand-accent mt-0.5 shrink-0" />
                      <span className={tier.featured ? 'text-white/90' : 'text-brand-primary/80'}>{feature}</span>
                    </li>
                  )
                )}
              </ul>

              {/* Support callout */}
              <div className={`text-xs font-medium mb-5 px-3 py-2 rounded-xl ${
                tier.featured
                  ? 'bg-white/10 text-white/60'
                  : 'bg-brand-primary/[0.03] text-brand-primary/65'
              }`}>
                {tier.support}
              </div>

              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('planSelected', { detail: tier.name }));
                  window.location.href = '/#contact';
                }}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                  tier.featured
                    ? 'bg-brand-accent text-white hover:bg-brand-accent/90'
                    : 'bg-brand-primary text-white hover:bg-brand-primary/90'
                }`}>
                Let's Talk <ArrowRight size={18} />
              </button>
              <a
                href={tier.stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center text-[11px] mt-4 cursor-pointer transition-all hover:underline ${
                  tier.featured
                    ? 'text-white/60 hover:text-white/80'
                    : 'text-brand-primary/65 hover:text-brand-primary/70'
                }`}
              >
                  Already decided? Pay and get started →
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 space-y-2">
          <p className="text-xs text-brand-primary/65">
            50% deposit to get started. You fully own your website and all files after final payment.
          </p>
          <p className="text-xs text-brand-primary/65">
            Hosting is separate — <Link href="/hosting-support" className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800">plans start at $25/month</Link>. Want to understand pricing? Read the <Link href="/website-cost" className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800">website cost guide</Link>.
          </p>
        </div>
      </div>

      {/* After Launch Bridge */}
      <div className="max-w-2xl mx-auto text-center mt-16 md:mt-20 pt-10 md:pt-16 border-t border-brand-primary/5">
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
