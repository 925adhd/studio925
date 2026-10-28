'use client';

import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
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
  image?: string;
  alt?: string;
};

const industries: Industry[] = [
  {
    slug: 'auto-repair',
    name: 'Auto repair shops & dealers',
    short: 'auto repair shop',
    insight: 'Customers searching "brake repair near me" or "oil change Leitchfield" need to land on a service page, not just a homepage. Service pages are how a shop ranks for what people actually search.',
    href: '/auto-repair-shop-website-design-kentucky',
    image: '/auto-repair-shop-bay-kentucky.webp',
    alt: 'Modern auto repair shop bay with a car on a service stand under overhead lighting',
  },
  {
    slug: 'contractors',
    name: 'Contractors & trades',
    short: 'contractor or trades',
    insight: 'Roofers, plumbers, electricians, and tradespeople get most of their leads from "X near me" searches. Your site has to be fast, clear, and tell Google exactly what you do and where you do it.',
    href: '/contractor-website-design-kentucky',
    image: '/contractor-rooftop-job-kentucky.webp',
    alt: 'Roofing contractor working on a residential roof on a clear Kentucky afternoon',
  },
  {
    slug: 'restaurants',
    name: 'Restaurants & food',
    short: 'restaurant',
    insight: 'Menu, hours, directions, reservations. Customers decide where to eat in under a minute, so your site has to answer those four questions before anything else loads.',
    href: '/restaurant-website-design-kentucky',
    image: '/restaurant-cook-kitchen-kentucky.webp',
    alt: 'Cook seasoning a row of plated dishes in a busy restaurant kitchen',
  },
  {
    slug: 'retail',
    name: 'Retail & boutiques',
    short: 'boutique or shop',
    insight: 'Customers want to see what you sell before they walk in. A clean product preview, real photos, and clear store hours beat a generic shop-now button that goes nowhere useful.',
    href: '/retail-boutique-website-design-kentucky',
    image: '/boutique-owner-arranging-store-kentucky.webp',
    alt: 'Boutique owner taking notes beside a clothing rack and wrapped gift boxes',
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
  "name": "Studio 925: Web Design by Industry in Kentucky",
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

      {/* Hero — text with a collage of real industry photos */}
      <section className="pt-28 pb-14 md:pt-40 md:pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-brand-primary/75 mb-3 md:mb-4">Kentucky · By industry</p>
            <h1 className="text-3xl md:text-6xl mb-4 md:mb-6 leading-[1.1]">
              Web Design by <span className="italic">Industry</span> in Kentucky
            </h1>
            <p className="text-base md:text-xl text-brand-primary/75 max-w-xl leading-relaxed">
              Studio 925 builds custom websites for Kentucky&apos;s local industries: auto repair shops, contractors, restaurants, boutiques, real estate, and more. Each industry&apos;s customers search differently, so each gets a site built around how they actually find you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-3 md:gap-4"
            aria-hidden="true"
          >
            <div className="space-y-3 md:space-y-4">
              <img src="/contractor-rooftop-job-kentucky.webp" alt="" className="w-full h-40 md:h-56 object-cover rounded-2xl" />
              <img src="/restaurant-cook-kitchen-kentucky.webp" alt="" className="w-full h-28 md:h-40 object-cover rounded-2xl" />
            </div>
            <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
              <img src="/boutique-owner-arranging-store-kentucky.webp" alt="" className="w-full h-28 md:h-40 object-cover rounded-2xl" />
              <img src="/auto-repair-shop-bay-kentucky.webp" alt="" className="w-full h-40 md:h-56 object-cover rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Same town, different searches */}
      <section className="py-14 md:py-20 px-6 bg-white border-y border-brand-primary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-8 md:mb-12 max-w-2xl">
            Same town. Three customers. Three completely different searches.
          </h2>
          <div className="grid md:grid-cols-3">
            {[
              { who: 'Auto repair customer', search: 'brake repair near me' },
              { who: 'Boutique shopper', search: 'where to buy a dress in Leitchfield' },
              { who: 'Homeowner with a leak', search: 'roof leak repair Kentucky' },
            ].map((item, i) => (
              <div
                key={item.who}
                className={i > 0 ? 'py-5 md:py-0 md:px-8 border-t md:border-t-0 md:border-l border-brand-primary/15' : 'py-5 md:py-0 md:pr-8'}
              >
                <p className="text-sm text-brand-primary/70 mb-2">{item.who}</p>
                <p className="font-serif italic text-2xl md:text-3xl leading-snug">&ldquo;{item.search}&rdquo;</p>
              </div>
            ))}
          </div>
          <p className="mt-8 md:mt-12 text-base md:text-lg text-brand-primary/75 leading-relaxed max-w-3xl">
            A one-size-fits-all site quietly loses all three. The industry pages below are each built around what that industry&apos;s customers actually type.
          </p>
        </div>
      </section>

      {/* Industry directory — built pages with photos */}
      <section className="py-14 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-8 md:mb-12">Industry pages</h2>
          <div className="border-t border-brand-primary/15">
            {industries.filter((ind) => ind.href).map((ind, i) => (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
                transition={{ delay: i * 0.04 }}
                className="border-b border-brand-primary/15"
              >
                <Link
                  href={ind.href!}
                  className="group grid grid-cols-[6rem_1fr] sm:grid-cols-[3rem_10rem_1fr_auto] md:grid-cols-[4rem_14rem_1fr_auto] gap-4 md:gap-8 items-center py-5 md:py-7"
                >
                  <span className="hidden sm:block font-serif italic text-2xl md:text-3xl text-brand-primary/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <img
                    src={ind.image}
                    alt={ind.alt}
                    className="w-full h-20 sm:h-24 md:h-32 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="text-xl md:text-3xl mb-1 md:mb-2 group-hover:underline underline-offset-4 decoration-2">{ind.name}</h3>
                    <p className="hidden sm:block text-sm md:text-base text-brand-primary/75 leading-relaxed max-w-xl">{ind.insight}</p>
                  </div>
                  <ArrowRight size={22} className="hidden sm:block text-brand-primary shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries without a dedicated page yet */}
      <section className="py-14 md:py-20 px-6 bg-white border-t border-brand-primary/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">I also build for</h2>
            <p className="text-brand-primary/75 text-sm md:text-lg leading-relaxed mb-5 md:mb-6">
              These don&apos;t have their own page yet, but they get the same custom build. Don&apos;t see your business at all? The conversation is the same.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 btn-lit [--btn:var(--color-brand-primary)] hover:[--btn:#1e293b] text-white px-6 py-3 rounded-2xl text-sm md:text-base font-semibold"
            >
              Tell me about your business <ArrowRight size={18} />
            </Link>
          </div>
          <div className="border-t border-brand-primary/15">
            {industries.filter((ind) => !ind.href).map((ind) => (
              <div key={ind.slug} className="py-5 md:py-6 border-b border-brand-primary/15">
                <h3 className="text-lg md:text-xl mb-1.5">{ind.name}</h3>
                <p className="text-sm md:text-base text-brand-primary/75 leading-relaxed mb-2">{ind.insight}</p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-emerald-800 font-semibold text-sm hover:underline underline-offset-4"
                >
                  <MessageCircle size={14} />
                  Talk about your {ind.short} site
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free audit band */}
      <FreeAuditBand
        headline="See your business's actual local rankings"
        subhead="Whatever industry you're in, the first step is knowing where you stand. The free local audit shows you exactly how your business ranks for the searches your customers run."
      />

      {/* Pricing teaser */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Same pricing for every industry</h2>
          <p className="text-brand-primary/75 text-sm md:text-lg leading-relaxed mb-8 md:mb-12 max-w-3xl">
            The right plan depends on how hard you need to compete on Google, not on what you sell. The <Link href="/website-cost" className="text-emerald-800 underline underline-offset-2 hover:text-emerald-900">website cost guide</Link> breaks down each one.
          </p>
          <div className="grid sm:grid-cols-3 border-t border-brand-primary/15 mb-8 md:mb-10">
            {[
              { price: '$900', name: 'Foundation', note: 'Up to 5 pages. Get found when people search your name.' },
              { price: '$1,800', name: 'Growth', note: 'Up to 10 pages and an SEO audit. Built to compete on Google.' },
              { price: '$2,600', name: 'Online Store', note: 'Everything in Growth, plus checkout and customer accounts.' },
            ].map((plan, i) => (
              <div
                key={plan.name}
                className={i > 0 ? 'py-6 sm:pb-0 sm:px-8 border-t sm:border-t-0 sm:border-l border-brand-primary/15' : 'py-6 sm:pb-0 sm:pr-8'}
              >
                <p className="font-serif text-4xl md:text-5xl font-bold mb-2">{plan.price}</p>
                <p className="font-semibold mb-1">{plan.name}</p>
                <p className="text-sm text-brand-primary/75 leading-relaxed">{plan.note}</p>
              </div>
            ))}
          </div>
          <a
            href="/#pricing"
            className="inline-flex items-center gap-2 btn-lit [--btn:var(--color-brand-primary)] hover:[--btn:#1e293b] text-white px-5 md:px-6 py-3 rounded-2xl text-sm md:text-base font-semibold"
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
          <div className="grid sm:grid-cols-2 gap-x-10 border-t border-brand-primary/15">
            <Link href="/website-design-leitchfield-ky" className="group flex items-center justify-between gap-4 py-4 border-b border-brand-primary/15 font-medium text-brand-primary hover:text-emerald-800 transition-colors">
              Website Design in Leitchfield, KY <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/web-design-grayson-county-ky" className="group flex items-center justify-between gap-4 py-4 border-b border-brand-primary/15 font-medium text-brand-primary hover:text-emerald-800 transition-colors">
              Web Design in Grayson County, KY <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/small-business-website-design-kentucky" className="group flex items-center justify-between gap-4 py-4 border-b border-brand-primary/15 font-medium text-brand-primary hover:text-emerald-800 transition-colors">
              Small Business Website Design in Kentucky <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
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
              className="inline-flex items-center justify-center gap-2 btn-lit [--btn:var(--color-brand-accent)] hover:[--btn:#047857] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold"
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
