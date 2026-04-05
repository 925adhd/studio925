'use client';

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

const featuredProjects = [
  {
    title: 'CS Media',
    tag: 'Media Brand',
    description:
      'A modern media brand site built for strong visual presence and clear service positioning.',
    purpose: [
      'Present services clearly so potential clients understand the value immediately',
      'Build professional credibility and trust at first glance',
      'Generate real inquiries through clear calls to action',
      'Establish a strong brand identity online',
    ],
    href: 'https://cscreatesmedia.com',
    image: '/csmedia-real-estate-media-homepage.webp',
    images: ['/csmedia-real-estate-media-homepage.webp', '/csmedia-listing-sold-hero.webp', '/csmedia-virtual-staging-service.webp', '/csmedia-featured-projects-portfolio.webp', '/csmedia-client-reviews-testimonials.webp', '/csmedia-booking-call-to-action.webp'],
    tags: ['Lead Generation', 'Branding'],
    results: {
      desktop: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100, fcp: '0.3s', lcp: '0.7s', cls: '0', speedIndex: '0.6s', image: '/csmedia-speed-desktop.webp' },
      mobile: { performance: 93, accessibility: 100, bestPractices: 100, seo: 100, fcp: '0.9s', lcp: '3.2s', cls: '0', speedIndex: '1.9s', image: '/csmedia-speed-mobile.webp' },
    },
  },
  {
    title: 'Townly',
    tag: 'Community Platform',
    description:
      'A clean, structured platform that replaces scattered posts with something people can actually use.',
    purpose: [
      'Help residents find local businesses and services faster',
      'Organize community information in one place',
      'Build neighborhood trust and keep communities connected',
      'Replace scattered social media posts with real structure',
    ],
    href: 'https://townly.us',
    image: '/townly.webp',
    images: undefined as string[] | undefined,
    tags: ['Community Platform', 'Local Business'],
    results: undefined as typeof featuredProjects[0]['results'] | undefined,
  },
  {
    title: 'Four Chariots',
    tag: 'E-Commerce Brand',
    description:
      'Apparel brand site with strong visual identity and a streamlined purchasing flow.',
    purpose: [
      'Showcase products with a brand-first visual experience',
      'Make purchasing fast and intuitive on any device',
      'Build brand trust through clean design and storytelling',
      'Convert browsers into buyers with clear product pages',
    ],
    href: 'https://4chariots.com',
    image: '/4chariots.webp',
    images: undefined as string[] | undefined,
    tags: ['E-commerce', 'Branding'],
    results: undefined as typeof featuredProjects[0]['results'] | undefined,
  },
];

const smallProjects = [
  {
    title: '925 ADHD',
    description:
      'Flexible remote work platform designed around how ADHD minds actually work — with a gated resource library, blog, and Stripe-powered subscriptions.',
    purpose: [
      'Help users find the right remote work opportunities',
      'Convert visitors into paying subscribers',
      'Provide structured resources for ADHD professionals',
    ],
    href: 'https://925adhd.com',
    image: '/925adhd.webp',
    tags: ['SaaS', 'Lead Generation'],
  },
];

const features = [
  'Mobile-first design',
  'SEO-friendly structure',
  'Fast performance',
  'Clear Calls to Action',
  'Secure deployment',
];

function PageSpeedResults({ title, results }: { title: string; results: NonNullable<typeof featuredProjects[0]['results']> }) {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div className="mb-6 md:mb-8">
      <h3 className="text-xs font-bold uppercase tracking-widest text-brand-primary/40 mb-3">
        Google PageSpeed Results
      </h3>
      <div className="rounded-2xl border border-brand-primary/5 bg-brand-primary/[0.02] p-4">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setModalImage(results.desktop.image)}
            className="rounded-xl overflow-hidden bg-white shadow-sm cursor-zoom-in hover:shadow-md transition-shadow"
          >
            <img
              src={results.desktop.image}
              alt={`${title} Google PageSpeed desktop score — ${results.desktop.performance}/100`}
              loading="lazy"
              className="w-full h-auto"
            />
          </button>
          <button
            onClick={() => setModalImage(results.mobile.image)}
            className="rounded-xl overflow-hidden bg-white shadow-sm cursor-zoom-in hover:shadow-md transition-shadow"
          >
            <img
              src={results.mobile.image}
              alt={`${title} Google PageSpeed mobile score — ${results.mobile.performance}/100`}
              loading="lazy"
              className="w-full h-auto"
            />
          </button>
        </div>
        <p className="text-[10px] text-brand-primary/50 mt-3 text-center">
          Desktop: {results.desktop.performance}/100 · Mobile: {results.mobile.performance}/100 — Accessibility, Best Practices & SEO all 100
        </p>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={modalImage}
            alt="Google PageSpeed Insights result"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

function FeaturedProject({ project, index, isReversed }: { project: typeof featuredProjects[number]; index: number; isReversed: boolean }) {
  const hasCarousel = !!project.images && project.images.length > 1;
  const hasResults = !!project.results;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!hasCarousel) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % project.images!.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [hasCarousel, project.images]);

  /* Stacked layout for projects with results, side-by-side for others */
  if (hasResults) {
    return (
      <section className="max-w-6xl mx-auto mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Full-width image on top */}
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-lg shadow-brand-primary/10 bg-brand-primary/5 mb-8 md:mb-10"
          >
            {hasCarousel ? (
              <div className="relative">
                {project.images!.map((img, i) => (
                  <img
                    key={img}
                    src={img}
                    alt={`${project.title} website designed by Studio 925 — screenshot ${i + 1}`}
                    loading={i === 0 ? undefined : 'lazy'}
                    className={`w-full h-auto object-cover scale-110 transition-opacity duration-700 ${i === 0 ? '' : 'absolute inset-0'} ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
            ) : (
              <img
                src={project.image}
                alt={`${project.title} website designed by Studio 925`}
                loading="lazy"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </a>

          {/* Details below — two columns on desktop */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-brand-accent/10 text-brand-accent text-[11px] font-bold tracking-widest uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl md:text-4xl mb-2 md:mb-3">{project.title}</h2>
              <p className="text-sm md:text-base text-brand-primary/60 leading-relaxed mb-5 md:mb-6">
                {project.description}
              </p>

              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-primary/40 mb-3">
                What this site was built to do
              </h3>
              <ul className="space-y-2.5 mb-6 md:mb-8">
                {project.purpose.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-brand-primary/70">
                    <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl font-semibold text-sm hover:bg-brand-primary/90 transition-all group"
              >
                View Website <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* PageSpeed results on the right */}
            <div>
              <PageSpeedResults title={project.title} results={project.results!} />
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  /* Default side-by-side layout */
  return (
    <section className="max-w-6xl mx-auto mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-6 md:gap-12 items-center"
      >
        {/* Image / Video */}
        <div className={isReversed ? 'md:order-2' : ''}>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-lg shadow-brand-primary/10 bg-brand-primary/5"
          >
            {hasCarousel ? (
              <div className="relative">
                {project.images!.map((img, i) => (
                  <img
                    key={img}
                    src={img}
                    alt={`${project.title} website designed by Studio 925 — screenshot ${i + 1}`}
                    loading={i === 0 ? undefined : 'lazy'}
                    className={`w-full h-auto object-cover scale-110 transition-opacity duration-700 ${i === 0 ? '' : 'absolute inset-0'} ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
            ) : (
              <img
                src={project.image}
                alt={`${project.title} website designed by Studio 925`}
                loading="lazy"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </a>
        </div>

        {/* Details */}
        <div className={isReversed ? 'md:order-1' : ''}>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-brand-accent/10 text-brand-accent text-[11px] font-bold tracking-widest uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-2xl md:text-4xl mb-2 md:mb-3">{project.title}</h2>
          <p className="text-sm md:text-base text-brand-primary/60 leading-relaxed mb-5 md:mb-6">
            {project.description}
          </p>

          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-primary/40 mb-3">
            What this site was built to do
          </h3>
          <ul className="space-y-2.5 mb-6 md:mb-8">
            {project.purpose.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-brand-primary/70">
                <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl font-semibold text-sm hover:bg-brand-primary/90 transition-all group"
          >
            View Website <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20 px-6">

        {/* Intro */}
        <section className="max-w-6xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase text-brand-primary/40 mb-3">
              Portfolio
            </p>
            <h1 className="text-3xl md:text-5xl mb-3 leading-[1.1]">
              Featured Projects
            </h1>
            <p className="text-base md:text-lg text-brand-primary/60 max-w-xl leading-relaxed">
              These are real websites built to bring in calls, leads, customers, and growth — not just look nice.
            </p>
          </motion.div>
        </section>

        {/* Featured Projects — Alternating Layout */}
        {featuredProjects.map((project, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <FeaturedProject key={project.title} project={project} index={index} isReversed={isReversed} />
          );
        })}

        {/* Divider */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="border-t border-brand-primary/5" />
        </div>

        {/* Smaller Projects */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-xl md:text-3xl mb-6 md:mb-8">More Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smallProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-3xl border border-brand-primary/10 shadow-sm shadow-brand-primary/5 overflow-hidden"
              >
                {project.image && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group bg-brand-primary/5 p-2.5 md:p-4"
                  >
                    <div className="h-44 rounded-xl overflow-hidden shadow-md shadow-brand-primary/10 bg-white flex items-center justify-center relative">
                      <img
                        src={project.image}
                        alt={`${project.title} website designed by Studio 925`}
                        loading="lazy"
                        className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/60 transition-all duration-300 flex items-center justify-center rounded-xl">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-brand-primary px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-2">
                          View Live Site <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </a>
                )}
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-brand-primary/5 text-brand-primary/60 text-[10px] font-medium tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-1.5">{project.title}</h3>
                  <p className="text-sm text-brand-primary/60 leading-relaxed mb-4">{project.description}</p>
                  <ul className="space-y-1.5 mb-4">
                    {project.purpose.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-brand-primary/60 text-[13px]">
                        <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand-accent hover:text-brand-accent/80 transition-colors group"
                  >
                    View Website
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </a>
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
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
            <a href="/#pricing" className="text-white/60 hover:text-white underline underline-offset-2 transition-colors">View pricing</a>
            <a href="/hosting-support" className="text-white/60 hover:text-white underline underline-offset-2 transition-colors">Hosting & Support</a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
