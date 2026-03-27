'use client';

import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: "Foundation",
    standardPrice: "1,200",
    price: "900",
    description: "A clean, professional website that makes your business look credible and easy to contact.",
    features: [
      "48-Hour Rough Draft to Review",
      "Up to 3 Core Pages (typically Home, About, and Contact or Services)",
      "Fully Mobile Responsive",
      "Custom Homepage Layout",
      "Simple Logo Creation or Cleanup (if needed)",
      "Contact / Inquiry Form",
      "Website Domain & Secure Setup",
      "Submit Your Site to Google",
      "Favicon Setup",
      "Speed Optimization",
      "1 Round of Revisions",
      "Complete Launch & Deployment",
      "Full Ownership of Files"
    ],
    bestFor: "Best for businesses that need a solid, trustworthy online presence without the extras.",
    cta: "Start My Project",
    featured: false
  },
  {
    name: "Growth",
    standardPrice: "2,400",
    price: "1,800",
    description: "Built to help you attract more customers, build trust faster, and turn visitors into real leads.",
    features: [
      "Everything in Foundation, plus:",
      "Up to 6 Core Pages",
      "Separate Pages for Your Main Services",
      "Structured Layout Designed to Encourage Calls & Inquiries",
      "Blog or Content Management System",
      "Google Analytics & Search Console Setup",
      "Basic Analytics & Form Tracking Setup",
      "Custom Lead Capture Forms",
      "2 Rounds of Revisions",
      "30 Days Post-Launch Support",
      "Basic Legal Pages Included (Privacy Policy, Terms, Cookie Notice as needed)"
    ],
    bestFor: "Best for businesses ready to expand their online presence and see what's actually working.",
    cta: "Start My Project",
    featured: true
  },
  {
    name: "Membership & Payments",
    standardPrice: "3,200",
    price: "2,600",
    description: "Built for businesses ready to sell online or offer secure member access.",
    features: [
      "Everything in Growth, plus:",
      "Online Store with Secure Checkout",
      "Secure Customer Accounts & Login System",
      "Customer Dashboard & Order Management",
      "Structured System for Orders or Member Data",
      "Admin Dashboard to Manage Customers",
      "Automated Email Confirmations",
      "Performance & Security Optimization",
      "Full Launch Setup + 60 Days Guided Support"
    ],
    bestFor: "Best for businesses ready to accept payments, offer memberships, or add secure account functionality to their website.",
    cta: "Start My Project",
    featured: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl mb-3 md:mb-4 leading-snug">Every serious local business needs a website <span className="italic text-brand-accent">that works.</span></h2>
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
                {tier.cta} <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-base text-brand-primary/50 mt-12 mb-2">
          Not sure which one fits? We'll figure it out together.
        </p>
        <p className="text-center text-sm text-brand-primary/40 mt-4">
          Projects begin with a 50% deposit. The remaining balance is due at launch.<br />
          Full ownership of all website files transfers upon final payment.
        </p>
      </div>
    </section>
  );
}
