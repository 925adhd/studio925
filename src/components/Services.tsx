'use client';

import { motion } from 'motion/react';
import { Layout, Zap, ShieldCheck, Search, Smartphone, Globe } from 'lucide-react';

const services = [
  {
    title: "Your site actually fits your business",
    description: "No templates. No drag-and-drop builders. Your site is coded from scratch, page by page, to say the right things and work the way your business needs it to.",
    icon: Layout,
  },
  {
    title: "Google understands your business",
    description: "When someone searches for what you do, your business has a real chance to show up. Your site is structured so Google understands what you offer and where.",
    icon: Search,
  },
  {
    title: "Looks right on every screen",
    description: "Most customers decide on their phone. Your site will load fast and look right immediately — no pinching, no waiting, no broken layouts.",
    icon: Smartphone,
  },
  {
    title: "Fast, secure, and always online",
    description: "A slow site loses customers before they read a word. Yours loads fast, stays secure, and doesn't go down.",
    icon: ShieldCheck,
  },
  {
    title: "Payments & booking built in",
    description: "Let customers book or pay directly from your site. Less phone tag. Fewer missed opportunities.",
    icon: Zap,
  },
  {
    title: "Someone in your corner",
    description: "You won't be handed a login and left to figure it out. After launch, I'm still here — updates, fixes, or just someone to call.",
    icon: Globe,
  }
];

const mobileServices = [
  services[0],
  services[1],
  {
    title: "Fast, secure, and looks right on every device",
    description: "Most customers decide on their phone. Your site loads fast, stays secure, and looks right immediately — no pinching, no waiting, no broken layouts.",
    icon: Smartphone,
  },
  services[5],
];

export default function Services() {
  return (
    <section id="services" className="pt-10 pb-14 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Your website should be<br /><span className="text-brand-accent italic">working for you right now.</span></h2>
          <p className="text-lg text-brand-primary/60">
            Here's what a Studio 925 website does for you.
          </p>
        </div>

        {/* Mobile: horizontal compact layout, condensed items */}
        <div className="md:hidden grid gap-4">
          {mobileServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-4"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                <service.icon size={20} strokeWidth={2} className="text-brand-accent" />
              </div>
              <div>
                <h3 className="text-base font-sans font-bold mb-1">{service.title}</h3>
                <p className="text-sm text-brand-primary/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: original layout, all 6 items */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8"
            >
              <service.icon size={22} strokeWidth={2} className="text-brand-accent mb-6 block" />
              <h3 className="text-xl font-sans font-bold mb-3">{service.title}</h3>
              <p className="text-brand-primary/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
