'use client';

import { motion } from 'motion/react';
import { ArrowRight, Check, MapPin } from 'lucide-react';
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
  'Custom homepage design tailored to your business',
  'Fully mobile responsive layout',
  'Fast load times optimized for performance',
  'Contact forms and clear calls to action',
  'On-page SEO structure for Google visibility',
  'Secure hosting setup and domain connection',
  'Google Search Console submission',
  'Complete launch and deployment',
  'Full ownership of all files',
];

export default function LeitchfieldContent() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="pt-32 pb-20 px-6">

        {/* Hero */}
        <section className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-brand-primary text-white text-xs font-medium mb-6">
              <MapPin size={12} className="shrink-0" /> Leitchfield, KY
            </div>
            <h1 className="text-4xl md:text-6xl mb-6 leading-[1.1]">
              Website Design in <span className="italic text-brand-accent">Leitchfield, Kentucky</span>
            </h1>
            <p className="text-xl text-brand-primary/70 max-w-2xl leading-relaxed">
              Custom website design for small businesses in Leitchfield, KY. No templates, no page builders. Your site is built from scratch to bring in real customers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="bg-brand-primary text-white px-8 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-brand-primary/20"
              >
                Book a Free Consultation <ArrowRight size={20} />
              </a>
              <a
                href="/#pricing"
                className="bg-white border border-brand-primary/10 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-brand-primary/5 transition-colors text-center"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </section>

        {/* Why Leitchfield businesses need a website */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl mb-6">
            Why Leitchfield businesses need a professional website
          </h2>
          <div className="space-y-6 text-brand-primary/70 text-lg leading-relaxed">
            <p>
              When someone in Leitchfield searches for a contractor, a restaurant, or a local service, they go to Google first. If your business doesn't show up, or your website looks outdated, they're calling someone else.
            </p>
            <p>
              A professional website tells potential customers that you're serious about your business. It makes you easy to find, easy to contact, and easy to trust. In a town like Leitchfield where reputation matters, your website should reflect the quality of your work.
            </p>
            <p>
              Most website designers serving Leitchfield are based hours away or use cookie-cutter templates. Studio 925 is based right here in Grayson County. I build every site by hand, and I work directly with you through the entire process.
            </p>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl mb-6">Who this is for</h2>
          <p className="text-brand-primary/70 text-lg leading-relaxed mb-6">
            If you run a business in Leitchfield and you don't have a website, or your current site is outdated, slow, or isn't bringing in customers, this is for you. I work with:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 text-brand-primary/80">
            {[
              'Contractors & tradespeople',
              'Local service providers',
              'Retail shops and boutiques',
              'Restaurants and food businesses',
              'Healthcare and wellness providers',
              'Real estate professionals',
              'Auto shops and dealerships',
              'Any Leitchfield business ready to grow',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={18} className="text-brand-accent mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What's Included */}
        <section className="max-w-4xl mx-auto mb-24 p-8 md:p-12 glass rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl mb-6">What's included in every website</h2>
          <p className="text-brand-primary/70 mb-8 leading-relaxed">
            Every website I build for Leitchfield businesses includes everything you need to launch professionally and start getting calls. No hidden fees. No shortcuts.
          </p>
          <ul className="space-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={18} className="text-brand-accent mt-0.5 shrink-0" />
                <span className="text-brand-primary/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What makes Studio 925 different */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl mb-6">
            What makes Studio 925 different
          </h2>
          <div className="space-y-6 text-brand-primary/70 text-lg leading-relaxed">
            <p>
              Most web designers use templates and page builders. I don't. Every Studio 925 website is hand-coded from scratch, which means faster load times, better Google rankings, and a site that actually looks like your business — not everyone else's.
            </p>
            <p>
              I'm based in Grayson County, not a remote agency three states away. When you work with me, you're talking directly to the person building your site. No account managers. No outsourcing. No runaround.
            </p>
            <p>
              You get a website that's built to perform — fast, mobile-friendly, optimized for search engines, and designed to turn visitors into paying customers.
            </p>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl mb-6">Website design pricing</h2>
          <p className="text-brand-primary/70 text-lg leading-relaxed mb-8">
            Website projects start at <strong>$1,200</strong> for a clean, professional Foundation site. Growth and Membership plans are available for businesses that need expanded pages, content systems, or online payments. Every project includes full ownership of your files.
          </p>
          <a
            href="/#pricing"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl font-semibold hover:scale-[1.02] transition-transform"
          >
            See Full Pricing <ArrowRight size={18} />
          </a>
        </section>

        {/* Other service areas */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl mb-6">Also serving</h2>
          <p className="text-brand-primary/70 text-lg leading-relaxed mb-6">
            Studio 925 builds websites for businesses across Grayson County and Kentucky. See more:
          </p>
          <ul className="space-y-3 text-brand-primary/70">
            <li>
              <Link href="/web-design-grayson-county-ky" className="text-brand-accent hover:text-brand-accent/80 font-medium transition-colors">
                Web Design in Grayson County, KY →
              </Link>
            </li>
            <li>
              <Link href="/small-business-website-design-kentucky" className="text-brand-accent hover:text-brand-accent/80 font-medium transition-colors">
                Small Business Website Design in Kentucky →
              </Link>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto text-center py-16 px-8 bg-brand-primary text-white rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to get a website that works for your Leitchfield business?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation and let's talk about your goals, your customers, and what a professional website can do for your business.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-brand-accent/90 transition-colors"
          >
            Book My Free Consultation <ArrowRight size={20} />
          </a>
        </section>

      </main>

      <Footer />
    </div>
  );
}
