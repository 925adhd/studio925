'use client';

import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

const plans = [
  {
    name: 'Basic Hosting',
    price: '25',
    features: [
      'Website hosting',
      'Secure backups',
      'Keeping your site live and running',
    ],
    featured: false,
    cta: 'Start Basic Hosting',
    stripeLink: 'https://buy.stripe.com/9B6cN79kn2Lm8gs8yscIE01',
  },
  {
    name: 'Full Support',
    price: '49',
    features: [
      'Everything in Basic Hosting, plus:',
      'Text changes, image swaps, layout tweaks — just message me',
      'New photos, menu updates, seasonal changes — handled',
      'You never have to touch the backend',
      'Priority support — I respond first',
      'Ongoing speed and security checks',
      'Technical SEO maintained — meta tags, indexing, and site health',
    ],
    featured: true,
    cta: 'Get Full Support',
    stripeLink: 'https://buy.stripe.com/14A5kFeEHgCceEQcOIcIE00',
  },
];

export default function HostingSupportPage() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        {/* Hero */}
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
          <h1 className="text-3xl md:text-5xl mb-4 md:mb-5">
            Website Care <span className="italic text-brand-accent">& Support</span>
          </h1>
          <p className="text-sm md:text-lg text-brand-primary/60 leading-relaxed max-w-xl mx-auto">
            Keep your site running smoothly after launch without dealing with the technical side. These website care plans are available for websites built by Studio 925 so performance, security, and reliability can be properly maintained.
          </p>
        </div>

        {/* Plans */}
        <div className="max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 md:p-8 rounded-3xl border flex flex-col ${
                  plan.featured
                    ? 'border-brand-accent/30 bg-brand-accent/[0.03]'
                    : 'border-brand-primary/10 bg-white'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-6 bg-brand-accent text-white px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
                    Most Popular
                  </span>
                )}

                <h3 className="text-lg md:text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-5 md:mb-6">
                  <span className="text-3xl font-serif font-bold italic">${plan.price}</span>
                  <span className="text-sm text-brand-primary/50">/month</span>
                </div>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) =>
                    feature.endsWith('plus:') ? (
                      <li key={feature} className="text-xs font-bold uppercase tracking-widest pt-1 text-brand-primary/30">
                        {feature}
                      </li>
                    ) : (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="text-brand-accent mt-0.5 shrink-0" />
                        <span className="text-brand-primary/80">{feature}</span>
                      </li>
                    )
                  )}
                </ul>

                <div className="mt-7 md:mt-8">
                  <a
                    href={plan.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3.5 rounded-2xl font-bold text-center transition-all ${
                      plan.featured
                        ? 'bg-brand-accent text-white hover:bg-brand-accent/90'
                        : 'border-2 border-brand-primary/20 text-brand-primary hover:border-brand-primary/40'
                    }`}
                  >
                    {plan.cta}
                  </a>
                  {plan.featured && (
                    <p className="text-center text-xs text-brand-primary/40 mt-3">
                      Most clients choose this for peace of mind
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs md:text-sm text-brand-primary/40 mt-8">
            You'll purchase your domain (usually around $10–$20/year) so it's fully yours. Already have one? I'll help you connect it. Either way, I handle the rest.
          </p>
        </div>

        {/* Who This Is For */}
        <div className="max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xl md:text-3xl mb-4 md:mb-6">Who This Is For</h2>
          <ul className="space-y-3">
            {[
              'Businesses who had their website built by Studio 925',
              'Businesses who want updates and backups handled',
              "Businesses who don't want to deal with technical website management",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm md:text-base text-brand-primary/70">
                <Check size={18} className="text-brand-accent mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Why I Only Host Websites I Build */}
        <div className="max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xl md:text-3xl mb-3 md:mb-4">Why I Only Host Websites I Build</h2>
          <p className="text-sm md:text-base text-brand-primary/60 leading-relaxed">
            I only host websites I build so I can maintain speed, security, and reliability. This allows me to properly support and maintain every website I manage because I know exactly how everything is built and structured.
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base md:text-lg text-brand-primary/60 mb-5">Need a website first?</p>
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-7 py-3.5 rounded-2xl font-semibold hover:bg-brand-primary/90 transition-all"
          >
            View Website Packages <ArrowRight size={18} />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
