'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic Hosting",
    price: "25",
    features: [
      "Website hosting",
      "Secure backups",
      "Keeping your site live and running"
    ],
    featured: false,
    cta: "Start Basic Hosting",
    stripeLink: "https://buy.stripe.com/9B6cN79kn2Lm8gs8yscIE01"
  },
  {
    name: "Full Support",
    price: "49",
    features: [
      "Everything in Hosting",
      "Free custom domain included",
      "DNS setup + email routing",
      "SSL included",
      "Need something changed? Just message me — I handle it",
      "Text edits, new photos, layout tweaks",
      "You don't have to deal with the technical side",
      "Ongoing SEO improvements",
      "Priority support"
    ],
    featured: true,
    cta: "Get Full Support",
    stripeLink: "https://buy.stripe.com/14A5kFeEHgCceEQcOIcIE00"
  }
];

export default function WebsiteCare() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl mb-3">Website Care & Support</h2>
          <p className="text-brand-primary/50 text-sm md:text-lg">Keep your site running smoothly after launch — without dealing with the technical side.</p>
          <p className="text-brand-primary/60 text-xs md:text-sm mt-3">Full Support includes a free custom domain for as long as your plan is active. Basic Hosting clients purchase their own domain — I'll help you connect it either way.</p>
        </div>

        {/* Plans */}
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
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-brand-accent mt-0.5 shrink-0" />
                    <span className="text-brand-primary/80">{feature}</span>
                  </li>
                ))}
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

      </div>
    </section>
  );
}
