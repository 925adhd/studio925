'use client';

import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: "Foundation",
    standardPrice: "1,200",
    price: "900",
    description: "A simple, professional website so people can find you and contact you.",
    features: [
      "48-hour draft so you can see it fast",
      "Custom homepage designed for your business",
      "Your website is live and ready for customers",
      "Looks great on every phone and screen",
      "Contact form so customers can reach you",
      "Set up so customers can find you on Google",
      "Simple logo creation or cleanup if needed",
      "Domain setup and secure connection included",
      "Custom favicon for a polished look",
      "Optimized to load fast",
      "We work with you to refine everything until you're happy before launch",
      "You own everything after final payment"
    ],
    bestFor: "Get your business online",
    cta: "Start Your Website",
    stripeLink: "https://buy.stripe.com/eVqbJ368b1Hi2W8160cIE02",
    featured: false
  },
  {
    name: "Growth",
    standardPrice: "2,400",
    price: "1,800",
    description: "A website designed to generate calls, leads, and help grow your business.",
    features: [
      "Structured to guide visitors to contact you and take action",
      "Easy call, text, and contact buttons for mobile visitors",
      "Set up to show what's driving calls and inquiries",
      "Built-in tracking to capture calls and messages from your website",
      "We work with you to refine everything until you're happy before launch",
      "Legal pages included (Privacy, Terms, Cookies)",
      "Support after launch if you need it"
    ],
    bestFor: "Most businesses choose this",
    cta: "Start Your Website",
    stripeLink: "https://buy.stripe.com/cNi3cx9kngCc9kw6qkcIE03",
    featured: true
  },
  {
    name: "Membership & Payments",
    standardPrice: "3,200",
    price: "2,600",
    description: "Not just a website. A system to sell online, manage customers, and grow your business.",
    features: [
      "Includes everything in the Growth plan, plus:",
      "Online store with secure checkout",
      "Customers can create accounts and log in",
      "Customers can view and manage their orders",
      "Everything is clearly organized so nothing feels confusing",
      "Simple admin area to stay on top of orders and customers",
      "Customers receive confirmation emails after every order",
      "Fast, secure, and built to handle payments and customer data",
      "We work with you to refine everything until you're happy before launch",
      "Extended support after launch"
    ],
    bestFor: "Sell online and manage customers",
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 leading-snug">Every serious local business needs a website <span className="italic text-brand-accent">that works.</span></h2>
          <p className="text-brand-primary/50 text-sm md:text-lg mt-2 md:mt-3">Clear pricing. One flat price. No hidden fees.</p>
          <p className="text-[11px] md:text-sm text-brand-primary/40 mt-2 md:mt-4">Introductory pricing currently available for new projects.</p>
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
                 <div className={`text-xs mb-1 font-semibold tracking-wide ${tier.featured ? 'text-white/60' : 'text-brand-primary/50'}`}>{tier.bestFor}</div>
                 <h3 className={`text-2xl mb-2 ${tier.featured ? 'text-white' : 'text-brand-primary'}`}>{tier.name}</h3>
                <div className="mb-7">
                  <span className={`text-xs font-semibold uppercase tracking-widest ${tier.featured ? 'text-brand-accent' : 'text-brand-accent'}`}>
                    Introductory Price
                  </span>
                  <div className="mt-1">
                    <span className="text-5xl font-serif font-bold italic">
                      ${tier.price}
                    </span>
                  </div>
                  <p className={`text-xs mt-3 ${tier.featured ? 'text-white/40' : 'text-brand-primary/35'}`}>
                    Standard Price ${tier.standardPrice}
                  </p>
                </div>
                <p className={`text-sm ${tier.featured ? 'text-white/70' : 'text-brand-primary/60'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) =>
                  feature.endsWith('plus:') ? (
                    <li key={feature} className={`text-xs font-bold uppercase tracking-widest pt-1 ${tier.featured ? 'text-white/40' : 'text-brand-primary/30'}`}>
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
                    ? 'text-white/50 hover:text-white/80'
                    : 'text-brand-primary/40 hover:text-brand-primary/60'
                }`}
              >
                  Already decided? Pay and get started →
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-brand-primary/40 mt-8 md:mt-12">
          50% deposit to get started. You fully own your website after final payment.
        </p>
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
