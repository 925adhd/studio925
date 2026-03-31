'use client';

import { motion } from 'motion/react';
import { ArrowRight, Check, MapPin, Code, Search, Smartphone, Zap } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Studio 925 — Website Design in Leitchfield, KY",
  "url": "https://studio925.design/website-design-leitchfield-ky",
  "email": "kara@studio925.design",
  "description": "Professional website design for small businesses in Leitchfield, Kentucky. Custom websites built from scratch to help local businesses get found online.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Leitchfield",
    "addressRegion": "KY",
    "postalCode": "42754",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Leitchfield", "containedInPlace": { "@type": "State", "name": "Kentucky" } },
    { "@type": "AdministrativeArea", "name": "Grayson County" }
  ],
  "serviceType": ["Website Design", "Web Design", "Small Business Website Design"],
  "priceRange": "$$",
  "knowsAbout": ["Website Design", "Web Design Leitchfield KY", "Small Business Websites", "Local SEO"]
};

const included = [
  { text: 'Custom homepage design tailored to your business', icon: Code },
  { text: 'Fully mobile responsive layout', icon: Smartphone },
  { text: 'Fast load times optimized for performance', icon: Zap },
  { text: 'On-page SEO structure for Google visibility', icon: Search },
];

const includedMore = [
  'Contact forms and clear calls to action',
  'Secure hosting setup and domain connection',
  'Google Search Console submission',
  'Complete launch and deployment',
  'Full ownership of all files',
];

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://studio925.design' },
    { '@type': 'ListItem', position: 2, name: 'Website Design in Leitchfield, KY', item: 'https://studio925.design/website-design-leitchfield-ky' },
  ],
};

export default function LeitchfieldContent() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />

      {/* Hero — full bleed with grid pattern */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4" />

        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-medium mb-4 md:mb-6">
              <MapPin size={12} className="shrink-0" /> Leitchfield, KY
            </div>
            <h1 className="text-3xl md:text-6xl mb-4 md:mb-6 leading-[1.1]">
              Website Design in <span className="italic text-brand-accent">Leitchfield, Kentucky</span>
            </h1>
            <p className="text-base md:text-xl text-brand-primary/70 max-w-xl leading-relaxed">
              Custom website design for small businesses in Leitchfield, KY. No templates, no page builders. Your site is built from scratch to bring in real customers.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="/portfolio"
                className="bg-brand-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-brand-primary/20"
              >
                See My Work <ArrowRight size={20} />
              </Link>
              <a
                href="/#pricing"
                className="bg-white border border-brand-primary/10 px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold hover:bg-brand-primary/5 transition-colors text-center"
              >
                View Pricing
              </a>
            </div>
          </motion.div>

          {/* Desktop photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-accent/10 rounded-[2.5rem] -rotate-3" />
              <img
                src="/me.png"
                alt="Kara Gibson — web designer in Leitchfield, KY"
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
              src="/me.png"
              alt="Kara Gibson — web designer in Leitchfield, KY"
              className="w-14 h-14 rounded-full object-cover shadow-md shadow-brand-primary/10 border-2 border-white"
            />
            <div>
              <p className="text-sm font-semibold text-brand-primary">Kara Gibson</p>
              <p className="text-xs text-brand-primary/50">Owner, Studio 925 · Leitchfield, KY</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Leitchfield businesses need a website */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl mb-6 md:mb-8">
              Why Leitchfield businesses need a <span className="italic text-brand-accent">professional website</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              { title: 'Get found first', text: 'When someone in Leitchfield searches for a contractor, a restaurant, or a local service, they go to Google first. If your business doesn\'t show up, they\'re calling someone else.' },
              { title: 'Build instant trust', text: 'A professional website tells potential customers that you\'re serious. In a town like Leitchfield where reputation matters, your website should reflect the quality of your work.' },
              { title: 'Work with a local', text: 'Most designers serving Leitchfield are based hours away or use cookie-cutter templates. Studio 925 is right here in Grayson County. I build every site by hand.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 md:p-8 glass rounded-3xl"
              >
                <h3 className="text-lg md:text-xl font-sans font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-brand-primary/60 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Who this is for</h2>
          <p className="text-brand-primary/70 text-base md:text-lg leading-relaxed mb-6 md:mb-10">
            If you run a business in Leitchfield and you don't have a website, or your current site is outdated, slow, or isn't bringing in customers, this is for you.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              'Contractors & tradespeople',
              'Local service providers',
              'Retail shops and boutiques',
              'Restaurants and food businesses',
              'Healthcare and wellness providers',
              'Real estate professionals',
              'Auto shops and dealerships',
              'Any Leitchfield business ready to grow',
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-2xl bg-white border border-brand-primary/5"
              >
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-brand-accent md:!w-4 md:!h-4" />
                </div>
                <span className="text-xs md:text-base text-brand-primary/80 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included — cards */}
      <section className="py-16 md:py-24 px-6 bg-brand-primary text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">What's included in every website</h2>
          <p className="text-white/60 mb-8 md:mb-12 max-w-2xl text-sm md:text-base leading-relaxed">
            Every website I build for Leitchfield businesses includes everything you need to launch professionally and start getting calls.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 md:p-6 rounded-2xl bg-white/10 border border-white/10"
              >
                <item.icon size={20} className="text-brand-accent mb-3 md:mb-4 md:!w-6 md:!h-6" />
                <p className="text-xs md:text-sm font-medium leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            {includedMore.map((item) => (
              <div key={item} className="flex items-center gap-2 md:gap-3">
                <Check size={14} className="text-brand-accent shrink-0 md:!w-4 md:!h-4" />
                <span className="text-white/70 text-xs md:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes Studio 925 different */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl mb-5 md:mb-8">
            What makes Studio 925 <span className="italic text-brand-accent">different</span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-brand-primary/70 text-sm md:text-lg leading-relaxed">
            <p>
              Most web designers use templates and page builders like Wix, Squarespace, or WordPress themes. I don't. Every Studio 925 website is hand-coded from scratch, which means faster load times, better Google rankings, and a site that actually looks like your business — not everyone else's.
            </p>
            <p>
              I'm based in Grayson County, not a remote agency three states away. When you work with me, you're talking directly to the person building your site. No account managers. No outsourcing. No runaround.
            </p>
            <p>
              You might've seen sites that create hundreds of "city pages" just to rank. This isn't that. I'm <em className="italic text-brand-accent not-italic">actually</em> local, and this page exists because I work with businesses here. I built <a href="https://csmedia.vercel.app" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline underline-offset-2 hover:text-brand-accent/80 transition-colors">CS Media's website</a> right here in Leitchfield, and <a href="https://townly.us" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline underline-offset-2 hover:text-brand-accent/80 transition-colors">Townly</a> was built specifically for the Grayson County community.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Website design pricing</h2>
          <p className="text-brand-primary/70 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
            Website projects start at <strong>$900</strong> for a clean, professional Foundation site. Growth and Online Store plans are available for businesses that need expanded pages, content systems, or online payments. Every project includes full ownership of your files. Want to understand what goes into website pricing? Read our <Link href="/website-cost" className="text-brand-accent hover:underline">website cost guide</Link>.
          </p>
          <a
            href="/#pricing"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-5 md:px-6 py-3 rounded-2xl text-sm md:text-base font-semibold hover:scale-[1.02] transition-transform"
          >
            See Full Pricing <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Other service areas */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Also serving</h2>
          <p className="text-brand-primary/70 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
            Studio 925 builds websites for businesses across Grayson County and Kentucky.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link href="/web-design-grayson-county-ky" className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-white border border-brand-primary/10 hover:border-brand-accent/30 transition-colors text-sm md:text-base font-medium text-brand-primary/80">
              Web Design in Grayson County, KY <ArrowRight size={16} className="inline ml-2" />
            </Link>
            <Link href="/small-business-website-design-kentucky" className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-white border border-brand-primary/10 hover:border-brand-accent/30 transition-colors text-sm md:text-base font-medium text-brand-primary/80">
              Small Business Website Design in Kentucky <ArrowRight size={16} className="inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center py-12 md:py-16 px-6 md:px-8 bg-brand-primary text-white rounded-[2.5rem]">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Ready to get a website that works for your Leitchfield business?</h2>
          <p className="text-white/70 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            See what I've built for other businesses, then let's talk about yours.
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

      <Footer />
    </div>
  );
}
