import { motion } from 'motion/react';
import { Layout, Zap, ShieldCheck, Search, Smartphone, Globe } from 'lucide-react';

const services = [
  {
    title: "Custom-Built Website",
    description: "A professionally designed website built around your business, not a cookie-cutter template. Designed to make the right first impression every time a potential customer looks you up.",
    icon: Layout,
  },
  {
    title: "Search-Ready Website Structure",
    description: "Your website is built and structured properly so search engines can clearly understand your services and display your site accurately in search results.",
    icon: Search,
  },
  {
    title: "Mobile Optimization",
    description: "Most customers check you out on their phone before they ever call. Your site will look and work exactly right on every screen size.",
    icon: Smartphone,
  },
  {
    title: "Speed & Security Optimization",
    description: "A slow or broken site costs you customers before they read a single word. Yours will load fast, run clean, and stay online.",
    icon: ShieldCheck,
  },
  {
    title: "Online Payments & Booking Integration",
    description: "Let customers book, pay, or place orders directly from your site. Fewer calls chasing invoices. More revenue with less back-and-forth.",
    icon: Zap,
  },
  {
    title: "Someone in Your Corner",
    description: "You won't be left figuring it out alone. When something needs updating or something breaks, you've got someone to call.",
    icon: Globe,
  }
];

export default function Services() {
  return (
    <section id="services" className="pt-20 pb-14 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl mb-4">Your website should be <br /><span className="text-brand-accent italic">working for you right now.</span></h2>
          <p className="text-lg text-brand-primary/60">
            Here's what's included in your website.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
