'use client';

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

const featured = {
  title: 'CS Media',
  tag: 'Media Brand',
  description:
    'A modern media brand site built for strong visual presence and clear service positioning.',
  impact: 'Clean, professional identity that builds trust fast.',
  bullets: [
    'Helps clients understand services at a glance',
    'Builds credibility instantly',
    'Designed to generate real inquiries',
  ],
  proof: 'Built for a real client ready to scale their brand',
  href: 'https://csmedia.vercel.app',
  image: '/csmedia.png',
};

const projects = [
  {
    title: 'Townly',
    description:
      'A clean, structured platform that replaces scattered posts with something people can actually use.',
    impact: 'Built to organize and power a local community.',
    bullets: [
      'Helps residents find local businesses faster',
      'Builds neighborhood trust instantly',
      'Designed to keep communities connected and growing',
    ],
    proof: 'Built for real users in Grayson County',
    href: 'https://townly.us',
    tag: 'Community Platform',
    image: '/townly.png',
  },
  {
    title: 'Four Chariots',
    description:
      'Apparel brand site with strong visual identity and a streamlined purchasing flow.',
    impact: 'Brand-focused e-commerce built for identity and storytelling.',
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
    title: '925 ADHD',
    description:
      'Flexible remote work platform designed around how ADHD minds actually work — with a gated resource library, blog, and Stripe-powered subscriptions.',
    impact: 'Helps ADHD individuals earn online with clarity and structure.',
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
];

const features = [
  'Mobile-first design',
  'SEO-friendly structure',
  'Fast performance',
  'Clear Calls to Action',
  'Secure deployment',
];

export default function PortfolioPage() {
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
              Latest Projects
            </h1>
            <p className="text-lg text-brand-primary/80 max-w-xl leading-relaxed">
              Real websites built to bring in more calls, leads, and customers.
            </p>
            <p className="text-sm text-brand-primary/50 mt-1">
              Scroll to see how I help businesses grow online.
            </p>
            <p className="text-sm text-brand-primary/40 mt-3">
              Most websites just sit there. These are built to actually do something.
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
            <span className="inline-block px-3 py-1 rounded-lg bg-brand-accent/10 text-brand-accent text-[11px] font-bold tracking-widest uppercase mb-1.5">
              Latest Project
            </span>
            <p className="text-xs text-brand-primary/50 mb-4">
              Real client. Real brand. Real results.
            </p>

            <div className="relative grid md:grid-cols-2 overflow-hidden rounded-[2.5rem] border border-brand-primary/10 shadow-lg shadow-brand-primary/10 bg-white">
              <div className="bg-brand-primary/5 p-4 md:p-10 md:flex md:items-center md:justify-center md:min-h-[400px]">
                <div className="h-56 md:h-auto rounded-xl md:rounded-2xl overflow-hidden shadow-lg shadow-brand-primary/15">
                  <img
                    src={featured.image}
                    alt={`${featured.title} screenshot`}
                    className="w-full h-full object-contain object-top"
                  />
                </div>
              </div>

              <div className="p-7 md:p-14 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-lg bg-brand-primary/5 text-brand-primary/60 text-xs font-medium tracking-wide mb-4 self-start">
                  {featured.tag}
                </span>
                <h2 className="text-xl md:text-4xl mb-2 md:mb-3">{featured.title}</h2>
                <p className="text-brand-primary/70 font-medium text-sm md:text-base mb-2">
                  {featured.impact}
                </p>
                <p className="text-brand-primary/60 leading-relaxed mb-3 text-sm md:text-[16px]">
                  {featured.description}
                </p>
                <ul className="space-y-1.5 mb-4">
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
                  className="inline-flex items-center gap-2 font-semibold text-base text-brand-accent hover:text-brand-accent/80 transition-colors self-start group mt-1 mb-4 max-md:after:content-[''] max-md:after:absolute max-md:after:inset-0"
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
          <div className="grid md:grid-cols-3 gap-4">
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
                  <div className="bg-brand-primary/5 p-2.5 md:p-4">
                    <div className="h-44 rounded-xl overflow-hidden shadow-md shadow-brand-primary/10 bg-white flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-contain object-center"
                      />
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-lg bg-brand-primary/5 text-brand-primary/60 text-xs font-medium tracking-wide mb-2.5">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-brand-primary/70 font-medium text-sm mb-2.5">{project.impact}</p>
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
                      className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand-accent hover:text-brand-accent/80 transition-colors group mt-1 max-md:after:content-[''] max-md:after:absolute max-md:after:inset-0"
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

        {/* What Every Project Includes */}
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
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            If you're ready for a website that looks professional, loads fast, and supports real growth, let's talk.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-9 py-4 rounded-2xl text-lg font-semibold hover:brightness-115 transition-all shadow-xl shadow-brand-accent/40"
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
