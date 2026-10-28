'use client';

import { motion } from 'motion/react';
import { ArrowRight, MapPin, Search, Grid3x3, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FreeAuditBand from '../../src/components/FreeAuditBand';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Service"],
  "name": "Studio 925: Website Design in Clarkson, KY",
  "url": "https://studio925.design/website-design-clarkson-ky",
  "email": "kara@studio925.design",
  "telephone": "+1-270-551-2210",
  "description": "Custom website design for small businesses in Clarkson, Kentucky, built by a local designer in Leitchfield.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Leitchfield",
    "addressRegion": "KY",
    "postalCode": "42754",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Clarkson", "containedInPlace": { "@type": "AdministrativeArea", "name": "Grayson County, Kentucky" } },
    { "@type": "PostalCodeSpecification", "postalCode": "42726" }
  ],
  "serviceType": ["Web Design", "Website Design", "Small Business Website Design", "Local SEO"],
  "priceRange": "$$"
};

const faqItems = [
  {
    question: 'Do you work with businesses in Clarkson, or only Leitchfield?',
    answer: 'Clarkson is part of my home turf. I\'m in Leitchfield, a few minutes west on US 62, and I build sites for businesses all over Grayson County. The person you talk to is the person writing your code.',
  },
  {
    question: 'How much does a website cost for a Clarkson business?',
    answer: 'Foundation sites are $900 for up to 5 pages. Growth sites are $1,800 for up to 10 pages and start with a hands-on SEO audit of your local search results. Online Store sites are $2,600. Flat price, 50% deposit to start, and you own everything after final payment.',
  },
  {
    question: 'I already have a Facebook page. Do I need a website too?',
    answer: 'Keep the Facebook page. It\'s great for regulars, and it can show up when people search your name. But for "plumber near me," Google shows its map listings first, and each one links to a website. A website is the part you own and control.',
  },
  {
    question: 'Can you show me how I rank on Google right now?',
    answer: 'Yes. The free local audit maps where your business shows up on Google at dozens of points around Clarkson for the searches your customers actually run. You see the real picture before deciding anything.',
  },
  {
    question: 'How long until my site is live?',
    answer: 'You\'ll see a working draft within 48 hours of starting. Most sites launch within 1 to 2 weeks after we refine the design together.',
  },
];

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://studio925.design' },
    { '@type': 'ListItem', position: 2, name: 'Web Design in Grayson County, KY', item: 'https://studio925.design/web-design-grayson-county-ky' },
    { '@type': 'ListItem', position: 3, name: 'Website Design in Clarkson, KY', item: 'https://studio925.design/website-design-clarkson-ky' },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const viewport = { once: true, amount: 0, margin: "100% 0px 100% 0px" };

const searchRealities = [
  {
    icon: Search,
    title: '"Near me" searches often land in Leitchfield',
    text: 'Clarkson has fewer business listings than the county seat, so when someone here searches "plumber near me" or "hair salon near me," Google fills the gaps with Leitchfield businesses. A website that clearly says Clarkson, and names the areas you cover, gives Google a reason to show you instead.',
  },
  {
    icon: Grid3x3,
    title: 'Your ranking changes from one end of town to the other',
    text: "Google doesn't show everyone the same results. You might be #2 for someone searching in town and #14 for someone a few miles out. My free audit checks your ranking at dozens of points around Clarkson, so you can see exactly where you show up and where you don't.",
  },
  {
    icon: Smartphone,
    title: "Word of mouth only reaches people who know you",
    text: "Plenty of Clarkson businesses run on Facebook and word of mouth, and that works for regulars. The person who has never heard of you, like a Honeyfest visitor in September, starts with a Google search. A website gives your map listing somewhere to send them.",
  },
];

const speedResults = [
  { name: 'CS Media', place: 'Leitchfield, KY', score: 93, url: 'https://cscreatesmedia.com' },
  { name: '925 ADHD', place: 'Membership platform', score: 91, url: 'https://925adhd.com' },
  { name: 'Four Chariots', place: 'Apparel store', score: 99, url: 'https://4chariots.com' },
];

export default function ClarksonContent() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4" />

        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-1.5 text-brand-primary/75 text-sm font-medium mb-3 md:mb-4">
              <MapPin size={12} className="shrink-0" /> Clarkson, KY
            </div>
            <h1 className="text-3xl md:text-6xl mb-4 md:mb-6 leading-[1.1]">
              Website Design in <span className="italic">Clarkson, KY</span>
            </h1>
            <p className="text-base md:text-xl text-brand-primary/70 max-w-xl leading-relaxed">
              Custom website design for small businesses in Clarkson, Kentucky. I build fast, custom-coded sites that help people find you on Google and pick up the phone, from just down the road in Leitchfield.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="/#contact"
                className="btn-lit [--btn:var(--color-brand-primary)] hover:[--btn:#1e293b] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </a>
              <Link
                href="/portfolio"
                className="bg-white border border-brand-primary/10 px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold hover:bg-brand-primary/5 transition-colors text-center"
              >
                See My Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-accent/10 rounded-[2.5rem] -rotate-3" />
              <img
                src="/kara-gibson.webp"
                alt="Kara Gibson, website designer serving Clarkson, KY"
                width={384} height={384}
                loading="lazy"
                className="relative w-full max-w-sm mx-auto rounded-[2rem] shadow-xl shadow-brand-primary/10"
              />
            </div>
          </motion.div>

          {/* Mobile photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:hidden flex items-center gap-4 mt-2"
          >
            <img
              src="/kara-gibson.webp"
              alt="Kara Gibson, website designer serving Clarkson, KY"
              width={56} height={56}
              loading="lazy"
              className="w-14 h-14 rounded-full object-cover shadow-md shadow-brand-primary/10 border-2 border-white"
            />
            <div>
              <p className="text-sm font-semibold text-brand-primary">Kara Gibson</p>
              <p className="text-xs text-brand-primary/70">Owner, Studio 925 · Leitchfield, KY</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Getting found in Clarkson */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
          >
            <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
              Getting found in <span className="italic">Clarkson</span> works a little differently
            </h2>
            <p className="text-brand-primary/70 text-sm md:text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl">
              Clarkson is a town of about a thousand people. In a market that size, a few small things decide whether Google shows you or someone else.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {searchRealities.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: i * 0.1 }}
                className="border-t-2 border-brand-primary pt-5"
              >
                <item.icon size={22} className="text-emerald-800 mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-sans font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-brand-primary/70 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed proof */}
      <section className="py-16 md:py-24 px-6 bg-brand-primary text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Don&apos;t take my word for it. Test my work.</h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mb-8 md:mb-12">
            Every Studio 925 site is custom-coded, with no templates or page builders. Here are real mobile scores from Google PageSpeed Insights for sites I&apos;ve built. Tap any of them and run the test yourself.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-10">
            {speedResults.map((site) => (
              <a
                key={site.name}
                href={`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(site.url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-t border-white/15 pt-5"
              >
                <p className="text-4xl md:text-5xl font-serif font-bold italic text-brand-accent">{site.score}</p>
                <p className="text-xs uppercase tracking-widest text-white/70 mt-1 mb-3">Mobile score</p>
                <p className="font-semibold group-hover:underline underline-offset-4">{site.name}</p>
                <p className="text-sm text-white/70">{site.place}</p>
              </a>
            ))}
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-6">
            Google calls 90 to 100 &ldquo;good.&rdquo; Scores move a few points from test to test.
          </p>
        </div>
      </section>

      {/* Working together */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-5 md:mb-8">
            A designer down the road, <span className="italic">not across the country</span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-brand-primary/70 text-sm md:text-lg leading-relaxed">
            <p>
              I&apos;m Kara, and Studio 925 is just me. I live and work in Leitchfield, a few minutes from Clarkson, and I build every site myself, so you always know who to call.
            </p>
            <p>
              You&apos;ll see a working draft of your site within 48 hours. We refine it together, it launches, and you own every file. If you want me to keep it updated, hosting and support plans start at $25 a month, and you can cancel anytime.
            </p>
            <p>
              Not sure where you stand right now? The free local audit below shows where your business ranks on Google across the area, block by block, before you spend a dollar.
            </p>
          </div>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-6">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-emerald-800 font-semibold hover:underline text-sm md:text-base">
              See the portfolio <ArrowRight size={16} />
            </Link>
            <Link href="/how-it-works" className="inline-flex items-center gap-2 text-emerald-800 font-semibold hover:underline text-sm md:text-base">
              How it works <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <FreeAuditBand
        headline="See where your Clarkson business shows up on Google"
        subhead="The free local audit maps your real rankings across Clarkson and the surrounding area for the searches your customers run. No login, no sales call."
      />

      {/* Pricing */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Flat-rate pricing</h2>
          <p className="text-brand-primary/70 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
            You know the full price before we start. No hourly billing and no surprise invoices.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6 md:mb-8">
            {[
              { name: 'Foundation', price: '$900', desc: 'Up to 5 pages, contact form, SEO setup' },
              { name: 'Growth', price: '$1,800', desc: 'Up to 10 pages, hands-on SEO audit, service pages, analytics' },
              { name: 'Online Store', price: '$2,600', desc: 'Up to 15 pages, online store, customer accounts, checkout' },
            ].map((plan) => (
              <div key={plan.name} className="py-4 sm:py-0 sm:px-6 border-b sm:border-b-0 sm:border-l sm:first:border-l-0 border-brand-primary/15 text-center">
                <p className="text-xs text-brand-primary/70 font-medium mb-1">{plan.name}</p>
                <p className="text-2xl md:text-3xl font-serif font-bold italic mb-2">{plan.price}</p>
                <p className="text-xs text-brand-primary/70">{plan.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 btn-lit [--btn:var(--color-brand-primary)] hover:[--btn:#1e293b] text-white px-6 py-3 rounded-2xl text-sm md:text-base font-semibold"
            >
              See Full Pricing Details <ArrowRight size={18} />
            </a>
            <Link
              href="/website-cost"
              className="inline-flex items-center justify-center gap-2 bg-white border border-brand-primary/10 px-6 py-3 rounded-2xl text-sm md:text-base font-semibold hover:bg-brand-primary/5 transition-colors"
            >
              Website Cost Guide
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-8 md:mb-12">
            Questions from <span className="italic">Clarkson</span> business owners
          </h2>
          <div className="border-t border-brand-primary/15">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="py-5 md:py-6 border-b border-brand-primary/15"
              >
                <h3 className="text-base md:text-lg font-sans font-bold mb-2 md:mb-3 text-brand-primary">
                  {item.question}
                </h3>
                <p className="text-sm md:text-base text-brand-primary/70 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also Serving */}
      <section className="py-12 md:py-16 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Also serving</h2>
          <p className="text-brand-primary/70 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
            Studio 925 builds websites for businesses across Grayson County and the rest of Kentucky.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-10 border-t border-brand-primary/15">
            <Link href="/web-design-grayson-county-ky" className="group flex items-center justify-between gap-4 py-4 border-b border-brand-primary/15 font-medium text-brand-primary hover:text-emerald-800 transition-colors">
              Web Design in Grayson County, KY <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/website-design-leitchfield-ky" className="group flex items-center justify-between gap-4 py-4 border-b border-brand-primary/15 font-medium text-brand-primary hover:text-emerald-800 transition-colors">
              Website Design in Leitchfield, KY <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/website-design-caneyville-ky" className="group flex items-center justify-between gap-4 py-4 border-b border-brand-primary/15 font-medium text-brand-primary hover:text-emerald-800 transition-colors">
              Website Design in Caneyville, KY <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/web-design-by-industry" className="group flex items-center justify-between gap-4 py-4 border-b border-brand-primary/15 font-medium text-brand-primary hover:text-emerald-800 transition-colors">
              Web Design by Industry <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center py-12 md:py-16 px-6 md:px-8 bg-brand-primary text-white rounded-[2.5rem]">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Ready for a website that brings Clarkson customers to you?</h2>
          <p className="text-white/70 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            Send me a quick note and I&apos;ll sketch out what your site could look like. No pressure and no sales pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 btn-lit [--btn:var(--color-brand-accent)] hover:[--btn:#047857] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold"
            >
              Get Started <ArrowRight size={20} />
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold hover:bg-white/20 transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
