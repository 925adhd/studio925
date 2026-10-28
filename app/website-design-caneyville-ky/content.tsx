'use client';

import { motion } from 'motion/react';
import { ArrowRight, Check, MapPin, Home, Ticket, Trophy } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FreeAuditBand from '../../src/components/FreeAuditBand';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Service"],
  "name": "Studio 925: Website Design in Caneyville, KY",
  "url": "https://studio925.design/website-design-caneyville-ky",
  "email": "kara@studio925.design",
  "telephone": "+1-270-551-2210",
  "description": "Custom website design for small businesses in Caneyville, Kentucky, built by a local designer in Leitchfield.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Leitchfield",
    "addressRegion": "KY",
    "postalCode": "42754",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Caneyville", "containedInPlace": { "@type": "AdministrativeArea", "name": "Grayson County, Kentucky" } },
    { "@type": "PostalCodeSpecification", "postalCode": "42721" }
  ],
  "serviceType": ["Web Design", "Website Design", "Small Business Website Design", "Local SEO"],
  "priceRange": "$$"
};

const faqItems = [
  {
    question: "Do you build websites for Caneyville businesses?",
    answer: "Yes. I'm based in Leitchfield, about 14 miles up the road, and I build sites for businesses all over Grayson County. I design it, code it, launch it, and I'm still the one you text when your hours change.",
  },
  {
    question: "My business is out in the county, not in town. Can a website still help?",
    answer: "Yes, and it matters even more. Most of your customers probably live outside city limits too. Your site can name Caneyville as home base and list the areas you cover, so Google knows to show you to people searching from those places.",
  },
  {
    question: "What if I only need something small?",
    answer: "The Foundation site is $900 for up to 5 pages, which covers most small businesses. If you need one or two more, extra pages are $75 each. You get a flat price up front, a 50% deposit to start, and you own everything after final payment.",
  },
  {
    question: "How do I know if my current website is the problem?",
    answer: "Two quick checks. Run your site through Google PageSpeed Insights on mobile, and if it scores under 50, customers are likely leaving before it loads. Then get the free local audit to see where you rank around Caneyville. Between the two, you'll know whether it's the site, your Google profile, or both.",
  },
  {
    question: "How long does it take?",
    answer: "You'll see a working draft within 48 hours of starting. Most sites launch within 1 to 2 weeks after we refine the design together.",
  },
];

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://studio925.design' },
    { '@type': 'ListItem', position: 2, name: 'Web Design in Grayson County, KY', item: 'https://studio925.design/web-design-grayson-county-ky' },
    { '@type': 'ListItem', position: 3, name: 'Website Design in Caneyville, KY', item: 'https://studio925.design/website-design-caneyville-ky' },
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

const localFacts = [
  {
    icon: Home,
    title: "Most of your customers don't live in town",
    text: "Caneyville has about 530 people inside city limits, but more than 4,000 live in the 42721 ZIP code. They're searching from farms and homes miles out. If your website only says \"Caneyville\" once in the footer, Google has no idea you serve them.",
  },
  {
    icon: Ticket,
    title: "Pine Knob brings in people who've never been here",
    text: "Pine Knob Theatre, a few miles north of town, has been drawing show-night crowds since 1987. Those visitors search their phones for dinner, gas, and directions. They find whoever has a website that answers those questions clearly.",
  },
  {
    icon: Trophy,
    title: "In a small town, a good site stands out fast",
    text: "In a big city you're up against dozens of polished websites. Around Caneyville, there may only be a handful in your line of work. A fast, clear site can put you ahead of the pack without waiting years for SEO to kick in.",
  },
];

const foundationIncludes = [
  "Custom design built around your business, no templates",
  "Up to 5 pages, with extra pages at $75 each",
  "Mobile-first layout that loads fast on a phone",
  "Google-ready SEO setup and Search Console submission",
  "Contact form and tap-to-call buttons",
  "Legal pages (Privacy, Terms, Cookies)",
  "Revisions until you're happy before launch",
  "You own every file after final payment",
];

export default function CaneyvilleContent() {
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
              <MapPin size={12} className="shrink-0" /> Caneyville, KY
            </div>
            <h1 className="text-3xl md:text-6xl mb-4 md:mb-6 leading-[1.1]">
              Website Design in <span className="italic">Caneyville, KY</span>
            </h1>
            <p className="text-base md:text-xl text-brand-primary/70 max-w-xl leading-relaxed">
              Custom website design for small businesses in Caneyville, Kentucky. I&apos;m Kara, a one-person studio in Leitchfield, and I code every site by hand so it loads quick and turns visitors into phone calls.
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
                alt="Kara Gibson, website designer serving Caneyville, KY"
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
              alt="Kara Gibson, website designer serving Caneyville, KY"
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

      {/* Caneyville specifics */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
          >
            <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
              Three things about <span className="italic">Caneyville</span> your website should know
            </h2>
            <p className="text-brand-primary/70 text-sm md:text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl">
              A website for a small town isn&apos;t a smaller version of a city website. It has a different job.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {localFacts.map((item, i) => (
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

      {/* What $900 gets you */}
      <section className="py-16 md:py-24 px-6 bg-brand-primary text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-14 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/70 mb-3">Foundation site</p>
            <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">What <span className="italic">$900</span> gets a Caneyville business</h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              One flat price, everything listed up front. If you want to compete harder on Google, the Growth plan ($1,800) adds a hands-on SEO audit, up to 10 pages, and lead tracking.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 btn-lit [--btn:var(--color-brand-accent)] hover:[--btn:#047857] text-white px-6 py-3 rounded-2xl text-sm md:text-base font-semibold"
              >
                Compare all plans <ArrowRight size={18} />
              </a>
              <Link
                href="/website-cost"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-2xl text-sm md:text-base font-semibold hover:bg-white/20 transition-colors"
              >
                Website Cost Guide
              </Link>
            </div>
          </div>
          <ul className="space-y-3 md:space-y-4">
            {foundationIncludes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={18} className="text-brand-accent shrink-0 mt-0.5" />
                <span className="text-white/85 text-sm md:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* After launch */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-5 md:mb-8">
            Launch day isn&apos;t <span className="italic">the end</span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-brand-primary/70 text-sm md:text-lg leading-relaxed">
            <p>
              A lot of small-town websites get built once and then sit untouched for years. The hours go stale, the phone number changes, and Google slowly stops trusting it.
            </p>
            <p>
              If you&apos;d rather not deal with that, Full Support is $49 a month. It covers hosting, your domain, any text or photo changes you send me, one new page or two blog posts every month, and a monthly scan of where you rank on Google. Cancel anytime, and your site and domain stay yours.
            </p>
          </div>
          <div className="mt-6 md:mt-8">
            <Link href="/hosting-support" className="inline-flex items-center gap-2 text-emerald-800 font-semibold hover:underline text-sm md:text-base">
              See hosting and support plans <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <FreeAuditBand
        headline="Find out where your Caneyville business ranks"
        subhead="The free local audit maps your real Google rankings around Caneyville for the searches your customers run. No login, no sales call."
      />

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-8 md:mb-12">
            Questions from <span className="italic">Caneyville</span> business owners
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
      <section className="py-12 md:py-16 px-6 border-t border-brand-primary/5">
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
            <Link href="/website-design-clarkson-ky" className="group flex items-center justify-between gap-4 py-4 border-b border-brand-primary/15 font-medium text-brand-primary hover:text-emerald-800 transition-colors">
              Website Design in Clarkson, KY <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
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
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Let&apos;s get your Caneyville business found</h2>
          <p className="text-white/70 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            Send me a quick note about your business. You&apos;ll get a straight answer on what I&apos;d build and the exact price.
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
