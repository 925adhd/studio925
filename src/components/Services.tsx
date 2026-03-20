import { motion } from 'motion/react';
import { Layout, Zap, ShieldCheck, Search, Smartphone, Globe } from 'lucide-react';

const services = [
  {
    title: "No templates. Built for your business.",
    description: "Not a theme swap. Built specifically for your business so it looks right, says the right things, and works the way you need it to.",
    icon: Layout,
  },
  {
    title: "Show up when customers are looking",
    description: "Your site is structured so search engines understand what you do and where you do it — so more people find you when they're actively looking.",
    icon: Search,
  },
  {
    title: "Built for how people actually use their phones",
    description: "Most customers decide on their phone before they ever call. Your site will look sharp and load fast on every screen. Period.",
    icon: Smartphone,
  },
  {
    title: "Speed & Security Optimization",
    description: "A slow or broken site loses customers before they read a single word. Yours loads fast, runs clean, and stays online.",
    icon: ShieldCheck,
  },
  {
    title: "Online Payments & Booking Integration",
    description: "Let customers book appointments or pay invoices directly from your site. Less phone tag. More closed business.",
    icon: Zap,
  },
  {
    title: "Someone in Your Corner",
    description: "You won't be handed a login and left to figure it out. When something needs updating or something breaks, you have someone to call.",
    icon: Globe,
  }
];

export default function Services() {
  return (
    <section id="services" className="pt-20 pb-14 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl mb-4">Your website should be <br /><span className="text-brand-accent italic">working for you right now.</span></h2>
          <p className="text-lg text-brand-primary/60">
            Here's what's included in your website.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
