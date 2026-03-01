import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const featured = {
  title: '925 ADHD',
  tag: 'SaaS Platform',
  description:
    'A platform built to help ADHD individuals find flexible remote work opportunities. Designed around how ADHD minds actually work — with a clean interface, gated resource library, integrated blog, and Stripe-powered subscription model. Built for clarity, usability, and scalable growth.',
  href: 'https://925adhd.com',
};

const projects = [
  {
    title: 'Townly',
    description:
      'Community-focused platform built to connect local residents through alerts, reviews, and shared resources. Structured for long-term expansion.',
    href: null,
    tag: 'Community Platform',
    image: '/townly.png',
  },
  {
    title: 'Four Chariots',
    description:
      'E-commerce brand site built to sell apparel with strong visual identity and streamlined purchasing flow.',
    href: 'https://4chariots.com',
    tag: 'E-Commerce Brand',
    image: '/4chariots.png',
  },
  {
    title: 'Studio 925',
    description:
      "The website you're currently viewing. Built to demonstrate performance, clarity, and modern structure for local service businesses.",
    href: 'https://studio925.design',
    tag: 'Service Business Website',
    image: '/studio925.png',
  },
];

const features = [
  'Mobile-first design',
  'SEO-friendly structure',
  'Fast performance',
  'Clear Calls to Action',
  'Secure deployment',
];

export default function Portfolio() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20 px-6">

        {/* Intro */}
        <section className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase text-brand-primary/40 mb-4">
              Portfolio
            </p>
            <h1 className="text-3xl md:text-5xl mb-4 leading-[1.1]">
              Selected Work
            </h1>
            <p className="text-lg text-brand-primary/60 max-w-xl leading-relaxed">
              A collection of real products and websites I've designed, developed, and deployed.
            </p>
          </motion.div>
        </section>

        {/* Featured Project */}
        <section className="max-w-6xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative grid md:grid-cols-2 overflow-hidden rounded-[2.5rem] border border-brand-primary/10 shadow-sm shadow-brand-primary/5 bg-white"
          >
            {/* Screenshot side */}
            <div className="bg-brand-primary/5 p-3 md:p-8 md:flex md:items-center md:justify-center md:min-h-[360px]">
              <div className="h-48 md:h-auto rounded-xl md:rounded-2xl overflow-hidden shadow-md md:shadow-lg shadow-brand-primary/10">
                <img
                  src="/925adhd.png"
                  alt="925 ADHD platform screenshot"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Content side */}
            <div className="p-7 md:p-14 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 rounded-lg bg-brand-primary/5 text-brand-primary/60 text-xs font-medium tracking-wide mb-5 self-start">
                {featured.tag}
              </span>
              <h2 className="text-xl md:text-4xl mb-3 md:mb-5">{featured.title}</h2>
              <p className="text-brand-primary/60 leading-relaxed mb-5 md:mb-8 text-sm md:text-[17px]">
                {featured.description}
              </p>
              <a
                href={featured.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-brand-primary hover:text-brand-accent transition-colors self-start group max-md:after:content-[''] max-md:after:absolute max-md:after:inset-0"
              >
                View Website
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Secondary Grid */}
        <section className="max-w-6xl mx-auto mb-28">
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-3xl border border-brand-primary/10 shadow-sm shadow-brand-primary/5 hover:shadow-md hover:shadow-brand-primary/10 hover:-translate-y-1 transition-all overflow-hidden"
              >
                {project.image && (
                  <div className="bg-brand-primary/5 p-3 md:p-6">
                    <div className="h-48 rounded-xl overflow-hidden shadow-md shadow-brand-primary/10">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                )}
                <div className="p-7">
                  <span className="inline-block px-3 py-1 rounded-lg bg-brand-primary/5 text-brand-primary/60 text-xs font-medium tracking-wide mb-5">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-brand-primary/60 text-sm leading-relaxed mb-5">{project.description}</p>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors group max-md:after:content-[''] max-md:after:absolute max-md:after:inset-0"
                    >
                      View Website
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-sm text-brand-primary/30 italic">Coming soon</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto text-center py-16 px-8 bg-brand-primary text-white rounded-[2.5rem] mb-28">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Add Your Business to This List?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            If you're ready for a website that looks professional, loads fast, and supports real growth, let's talk.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-brand-accent/90 transition-colors"
          >
            Start My Project <ArrowRight size={20} />
          </a>
        </section>

        {/* What Every Project Includes */}
        <section className="max-w-4xl mx-auto">
          <div className="p-10 md:p-14 glass rounded-[2.5rem]">
            <h2 className="text-3xl md:text-4xl mb-8">
              What every project <span className="italic text-brand-accent">includes.</span>
            </h2>
            <ul className="space-y-4">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-primary/80 text-lg">
                  <CheckCircle2 size={20} className="text-brand-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
