import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic Hosting",
    price: "25",
    features: [
      "I keep your website live and running",
      "Secure hosting & backups handled"
    ],
    featured: false
  },
  {
    name: "Full Support",
    price: "49",
    features: [
      "Everything in Hosting",
      "I handle edits & small updates for you",
      "Ongoing help when you need it"
    ],
    featured: true
  }
];

export default function WebsiteCare() {
  return (
    <section className="py-24 px-6 bg-white border-t border-brand-primary/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl mb-3">Website Care & Support</h2>
          <p className="text-brand-primary/50 text-lg">Keep your site running smoothly after launch — without dealing with the technical side.</p>
          <p className="text-brand-primary/60 text-sm mt-3">You'll purchase your domain (usually around $10–$20/year) so it's fully yours. I'll guide you through it and handle the rest.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border flex flex-col ${
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

              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-serif font-bold italic">${plan.price}</span>
                <span className="text-sm text-brand-primary/50">/month</span>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-brand-accent mt-0.5 shrink-0" />
                    <span className="text-brand-primary/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
