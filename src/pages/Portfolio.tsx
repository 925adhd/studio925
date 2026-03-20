import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const featured = {
  title: 'Townly',
  tag: 'Community Platform',
  description:
    'Community-focused platform built to connect local residents through alerts, reviews, and shared resources. Designed around how neighbors actually communicate — with a clean interface, neighborhood-level targeting, and a structure built for long-term expansion.',
  impact: 'A platform built to organize and power an entire local community.',
  bullets: [
    'Helps residents find local businesses faster',
    'Builds neighborhood trust instantly',
    'Designed to keep communities connected and growing',
  ],
  proof: 'Built for real users in Grayson County',
  href: 'https://townly.us',
  image: '/townly.png',
};

const projects = [
  {
    title: '925 ADHD',
    description:
      'A platform built to help ADHD individuals find flexible remote work opportunities. Designed around how ADHD minds actually work — with a clean interface, gated resource library, integrated blog, and Stripe-powered subscription model.',
    impact: 'A system designed to help ADHD individuals earn online with clarity and structure.',
    bullets: [
      'Helps users find the right opportunities faster',
      'Builds confidence through clear structure',
      'Designed to convert visitors into subscribers',
    ],
    proof: 'Designed for real-world usage, not just display',
    href: 'https://925adhd.com',
    tag: 'SaaS Platform',
    image: '/925adhd.png',
  },
  {
    title: 'Four Chariots',
    description:
      'E-commerce brand site built to sell apparel with strong visual identity and streamlined purchasing flow.',
    impact: 'A brand-focused e-commerce experience built for identity and storytelling.',
    bullets: [
      'Helps customers find products faster',
      'Builds brand trust instantly',
      'Designed to convert browsers into buyers',
    ],
    href: 'https://4chariots.com',
    tag: 'E-Commerce Brand',
    image: '/4chariots.png',
  },
  {
    title: 'Studio 925',
    description:
      "The website you're currently viewing. Built to demonstrate performance, clarity, and modern structure for local service businesses.",
    impact: 'A conversion-focused website designed to generate real business leads.',
    bullets: [
      'Helps customers find the business faster',
      'Builds trust instantly',
      'Designed to convert visitors into leads',
    ],
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

      <main className="pt-28 pb-20 px-6">

        {/* Intro */}
        <section className="max-w-6xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase text-brand-primary/40 mb-3">
              Portfolio
            </p>
            <h1 className="text-3xl md:text-5xl mb-2 leading-[1.1]">
              Selected Work
            </h1>
            <p className="text-lg text-brand-primary/80 max-w-xl leading-relaxed">
              Real websites built to bring in more calls, leads, and customers.
            </p>
            <p className="text-sm text-brand-primary/50 mt-1">
              Scroll to see how I help businesses grow online.
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
          >
            <span className="inline-block px-3 py-1 rounded-lg bg-brand-accent/10 text-brand-accent text-[11px] font-bold tracking-widest uppercase mb-4">
              Featured Project
            </span>

            <div className="relative grid md:grid-cols-2 overflow-hidden rounded-[2.5rem] border border-brand-primary/10 shadow-lg shadow-brand-primary/10 bg-white">
              {/* Screenshot side */}
              <div className="bg-brand-primary/5 p-4 md:p-10 md:flex md:items-center md:justify-center md:min-h-[400px]">
                <div className="h-56 md:h-auto rounded-xl md:rounded-2xl overflow-hidden shadow-lg shadow-brand-primary/15">
                  <img
                    src={featured.image}
                    alt={`${featured.title} screenshot`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Content side */}
              <div className="p-7 md:p-14 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-lg bg-brand-primary/5 text-brand-primary/60 text-xs font-medium tracking-wide mb-4 self-start">
                  {featured.tag}
                </span>
                <h2 className="text-xl md:text-4xl mb-2 md:mb-3">{featured.title}</h2>
                <p className="text-brand-primary/70 font-medium text-sm md:text-base mb-3">
                  {featured.impact}
                </p>
                <p className="text-brand-primary/60 leading-relaxed mb-4 text-sm md:text-[17px]">
                  {featured.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {featured.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-brand-primary/60 text-sm">
                      <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-base text-brand-primary hover:text-brand-accent transition-colors self-start group mb-4 max-md:after:content-[''] max-md:after:absolute max-md:after:inset-0"
                >
                  View Website
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-xs text-brand-primary/40 italic">{featured.proof}</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Secondary Grid */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-5">
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
                  <div className="bg-brand-primary/5 p-3 md:p-5">
                    <div className="h-48 rounded-xl overflow-hidden shadow-md shadow-brand-primary/10 bg-white flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-contain object-center"
                      />
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-lg bg-brand-primary/5 text-brand-primary/60 text-xs font-medium tracking-wide mb-3">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-brand-primary/70 font-medium text-sm mb-3">{project.impact}</p>
                  <ul className="space-y-1.5 mb-4">
                    {project.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-brand-primary/60 text-[13px]">
                        <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors group max-md:after:content-[''] max-md:after:absolute max-md:after:inset-0"
                    >
                      View Website
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-sm text-brand-primary/30 italic">Coming soon</span>
                  )}
                  {project.proof && (
                    <p className="text-xs text-brand-primary/40 italic mt-3">{project.proof}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What Every Project Includes — moved ABOVE CTA */}
        <section className="max-w-4xl mx-auto mb-12">
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

        {/* CTA */}
        <section className="max-w-4xl mx-auto text-center py-16 px-8 bg-brand-primary text-white rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to get a website that actually brings you customers?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            If you're ready for a website that looks professional, loads fast, and supports real growth, let's talk.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:brightness-110 transition-all shadow-lg shadow-brand-accent/30"
          >
            Start My Project <ArrowRight size={20} />
          </a>
          <p className="text-white/50 text-sm mt-5">
            No templates. No outsourcing. Built personally for your business.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}
