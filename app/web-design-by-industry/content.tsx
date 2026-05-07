'use client';

import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, MessageCircle, Layers } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FreeAuditBand from '../../src/components/FreeAuditBand';

type Industry = {
  slug: string;
  name: string;
  short: string;
  insight: string;
  href?: string;
};

const industries: Industry[] = [
  {
    slug: 'auto-repair',
    name: 'Auto repair shops & dealers',
    short: 'auto repair shop',
    insight: 'Customers searching "brake repair near me" or "oil change [your town]" need to land on a service page, not just a homepage. Service pages are how a shop ranks for what people actually search.',
    href: '/auto-repair-shop-website-design-kentucky',
  },
  {
    slug: 'contractors',
    name: 'Contractors & trades',
    short: 'contractor or trades',
    insight: 'Roofers, plumbers, electricians, and tradespeople get most of their leads from "X near me" searches. Your site has to be fast, clear, and tell Google exactly what you do and where you do it.',
  },
  {
    slug: 'restaurants',
    name: 'Restaurants & food',
    short: 'restaurant',
    insight: 'Menu, hours, directions, reservations. Customers decide where to eat in under a minute, so your site has to answer those four questions before anything else loads.',
  },
  {
    slug: 'retail',
    name: 'Retail & boutiques',
    short: 'boutique or shop',
    insight: 'Customers want to see what you sell before they walk in. A clean product preview, real photos, and clear store hours beat a generic shop-now button that goes nowhere useful.',
  },
  {
    slug: 'service-providers',
    name: 'Service providers',
    short: 'service business',
    insight: 'Cleaners, lawn care, dog groomers, tutors. People searching for service providers want to see your service area, your pricing range, and a way to book without making three phone calls.',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & wellness',
    short: 'healthcare or wellness',
    insight: 'Patients want to know if you take their insurance, what services you offer, and how to schedule. A trustworthy site does half the work of converting an appointment.',
  },
  {
    slug: 'real-estate',
    name: 'Real estate',
    short: 'real estate',
    insight: 'Listings have to load fast and look polished. Your site is the first impression a seller has of how you will market their home, so the design quality is the pitch.',
  },
  {
    slug: 'community',
    name: 'Community groups',
    short: 'community group',
    insight: 'Churches, nonprofits, civic groups. Your site is where members and the public find events, contact info, and what you stand for. Clarity beats clever every time.',
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Service"],
  "name": "Studio 925 — Web Design by Industry in Kentucky",
  "url": "https://studio925.design/web-design-by-industry",
  "email": "kara@studio925.design",
  "telephone": "+1-270-551-2210",
  "description": "Custom websites for Kentucky small businesses across local industries: auto repair shops, contractors, restaurants, boutiques, service providers, healthcare, real estate, and community groups.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Leitchfield",
    "addressRegion": "KY",
    "postalCode": "42754",
    "addressCountry": "US"
  },
  "areaServed": [{ "@type": "State", "name": "Kentucky" }],
  "serviceType": ["Website Design", "Web Design", "Industry-Specific Web Design", "Local SEO"],
  "priceRange": "$$",
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://studio925.design' },
    { '@type': 'ListItem', position: 2, name: 'Web Design by Industry in Kentucky', item: 'https://studio925.design/web-design-by-industry' },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Web Design by Industry in Kentucky',
  itemListElement: industries.map((ind, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: ind.name,
    ...(ind.href && { url: `https://studio925.design${ind.href}` }),
  })),
};

export default function IndustryHubContent() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-medium mb-4 md:mb-6">
              <Layers size={12} className="shrink-0" /> Kentucky · By Industry
            </div>
            <h1 className="text-3xl md:text-6xl mb-4 md:mb-6 leading-[1.1]">
              Web Design by <span className="italic text-brand-accent">Industry</span> in Kentucky
            </h1>
            <p className="text-base md:text-xl text-brand-primary/75 max-w-2xl leading-relaxed">
              Studio 925 builds custom websites for Kentucky&apos;s local industries: auto repair shops, contractors, restaurants, boutiques, and more. Each industry has different customer search behavior, so each gets a site built around how those customers actually find local services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why industry-specific matters */}
      <section className="py-10 md:py-14 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 md:p-8 rounded-3xl bg-brand-primary text-white">
            <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-2 md:mb-3">Why this matters</p>
            <p className="text-base md:text-lg leading-relaxed text-white/90">
              An auto repair customer searches "brake repair near me." A boutique customer searches "where to buy a dress in [town]." A roofer&apos;s customer searches "roof leak repair Kentucky." Same town, three different intents. A one-template-fits-all site quietly loses on all three. The pages below are built around how each industry&apos;s customers actually search.
            </p>
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {industries.map((ind, i) => {
              const motionProps = {
                initial: { opacity: 0, y: 12 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0, margin: "100% 0px 100% 0px" },
                transition: { delay: i * 0.04 },
              };
              if (ind.href) {
                return (
                  <motion.div key={ind.slug} {...motionProps}>
                    <Link
                      href={ind.href}
                      className="group block h-full p-5 md:p-7 rounded-3xl bg-brand-accent/5 border-2 border-brand-accent/30 hover:bg-brand-accent/10 hover:border-brand-accent/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2 md:mb-3">
                        <h2 className="text-lg md:text-xl font-sans font-bold text-emerald-800">
                          {ind.name}
                        </h2>
                        <ArrowUpRight size={18} className="text-emerald-800 shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <p className="text-sm md:text-base text-brand-primary/75 leading-relaxed mb-4">
                        {ind.insight}
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-emerald-800 font-semibold text-sm md:text-base">
                        View industry page <ArrowRight size={14} />
                      </div>
                    </Link>
                  </motion.div>
                );
              }
              return (
                <motion.div
                  key={ind.slug}
                  {...motionProps}
                  className="h-full p-5 md:p-7 rounded-3xl bg-white border border-brand-primary/10 flex flex-col"
                >
                  <h2 className="text-lg md:text-xl font-sans font-bold text-brand-primary mb-2 md:mb-3">
                    {ind.name}
                  </h2>
                  <p className="text-sm md:text-base text-brand-primary/75 leading-relaxed mb-4 flex-1">
                    {ind.insight}
                  </p>
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center gap-1.5 text-emerald-800 font-semibold text-sm md:text-base hover:underline underline-offset-4"
                  >
                    <MessageCircle size={14} />
                    Talk about your {ind.short} site
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Don't see your industry? */}
      <section className="py-12 md:py-16 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">
            Don&apos;t see your <span className="italic text-brand-accent">industry?</span>
          </h2>
          <p className="text-brand-primary/75 text-sm md:text-lg leading-relaxed mb-5 md:mb-6 max-w-2xl mx-auto">
            The list above covers the industries Studio 925 sees most often, but it isn&apos;t the whole list. If you run a small business in Kentucky and you need a custom website, the conversation is the same regardless of category.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 md:px-7 md:py-4 rounded-2xl text-sm md:text-base font-semibold hover:bg-brand-primary/90 transition-colors"
          >
            Tell me about your business <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Free audit band */}
      <FreeAuditBand
        headline="See your business's actual local rankings"
        subhead="Whatever industry you're in, the first step is knowing where you stand. The free local audit shows you exactly how your business ranks for the searches your customers run."
      />

      {/* Pricing teaser */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Same pricing across every industry</h2>
          <p className="text-brand-primary/75 text-sm md:text-lg leading-relaxed mb-5 md:mb-7 max-w-3xl">
            Foundation sites start at <strong>$900</strong>. Growth sites with individual service pages start at <strong>$1,800</strong>. Online stores start at <strong>$2,600</strong>. The right tier depends on whether your industry needs deep service pages to rank, not on the industry itself. The <Link href="/website-cost" className="text-emerald-800 hover:underline">website cost guide</Link> breaks down what you get at each tier.
          </p>
          <a
            href="/#pricing"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-5 md:px-6 py-3 rounded-2xl text-sm md:text-base font-semibold hover:bg-brand-primary/90 transition-colors"
          >
            See Full Pricing <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Also serving (geo pages) */}
      <section className="py-12 md:py-16 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Also serving</h2>
          <p className="text-brand-primary/75 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
            Looking for web design in a specific Kentucky town or region? Studio 925 has dedicated pages for these areas too.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 flex-wrap">
            <Link href="/website-design-leitchfield-ky" className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-white border border-brand-primary/10 hover:border-brand-accent/30 transition-colors text-sm md:text-base font-medium text-brand-primary/80">
              Website Design in Leitchfield, KY <ArrowRight size={16} className="inline ml-2" />
            </Link>
            <Link href="/web-design-grayson-county-ky" className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-white border border-brand-primary/10 hover:border-brand-accent/30 transition-colors text-sm md:text-base font-medium text-brand-primary/80">
              Web Design in Grayson County, KY <ArrowRight size={16} className="inline ml-2" />
            </Link>
            <Link href="/small-business-website-design-kentucky" className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-white border border-brand-primary/10 hover:border-brand-accent/30 transition-colors text-sm md:text-base font-medium text-brand-primary/80">
              Small Business Website Design in Kentucky <ArrowRight size={16} className="inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-16 md:pb-20 pt-12 md:pt-16">
        <div className="max-w-4xl mx-auto text-center py-12 md:py-16 px-6 md:px-8 bg-brand-primary text-white rounded-[2.5rem]">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Ready for a website built around your industry?</h2>
          <p className="text-white/80 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            Pick the industry page above, or just send me a quick note about what you do.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold hover:bg-brand-accent/90 transition-colors"
            >
              View Portfolio <ArrowRight size={20} />
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
