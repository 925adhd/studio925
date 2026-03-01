import { motion } from 'motion/react';
import { Layout, Zap, ShieldCheck, Search, Smartphone, Globe } from 'lucide-react';

const services = [
  {
    title: "A Site That Represents You",
    description: "Your business has a reputation worth showing off. Get a website that makes the right first impression, every time a potential customer looks you up.",
    icon: Layout,
  },
  {
    title: "Built So Google Can Properly Index Your Business",
    description: "Your site will be structured and submitted correctly so search engines can find and understand what you offer.",
    icon: Search,
  },
  {
    title: "Smooth on Every Device",
    description: "Most customers check you out on their phone before they ever call. Make sure what they see makes them want to reach out.",
    icon: Smartphone,
  },
  {
    title: "Fast & Reliable",
    description: "A slow website loses customers before they read a single word. Yours will load fast, run clean, and stay online.",
    icon: ShieldCheck,
  },
  {
    title: "Get Paid Without the Back-and-Forth",
    description: "Let customers book, pay, or order right from your site. Fewer calls chasing invoices. More revenue with less effort.",
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
    <section id="services" className="pt-32 pb-14 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <p className="text-xs font-medium tracking-widest uppercase text-brand-primary/40 mb-3">Services</p>
          <h2 className="text-4xl md:text-5xl mb-6">Your website should be <br /><span className="text-brand-accent italic">working for you right now.</span></h2>
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
