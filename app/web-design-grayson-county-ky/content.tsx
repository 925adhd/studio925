'use client';

import { motion } from 'motion/react';
import { ArrowRight, Check, MapPin, Code, Search, Smartphone, Zap, Clock, Shield } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Service"],
  "name": "Studio 925 — Web Design in Grayson County, KY",
  "url": "https://studio925.design/web-design-grayson-county-ky",
  "email": "kara@studio925.design",
  "telephone": "+1-270-551-2210",
  "description": "Custom web design for small businesses in Grayson County, Kentucky. Custom-built websites by a local developer to help businesses get found online and convert visitors into customers.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Leitchfield",
    "addressRegion": "KY",
    "postalCode": "42754",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Grayson County" },
    { "@type": "City", "name": "Leitchfield", "containedInPlace": { "@type": "State", "name": "Kentucky" } },
    { "@type": "City", "name": "Clarkson" },
    { "@type": "City", "name": "Caneyville" },
    { "@type": "City", "name": "Shrewsbury" }
  ],
  "serviceType": ["Web Design", "Website Design", "Small Business Website Design", "Local SEO"],
  "priceRange": "$$",
  "knowsAbout": ["Web Design", "Web Design Grayson County KY", "Small Business Websites", "Local SEO", "Custom Website Development"]
};

const faqItems = [
  {
    question: 'How much does a website cost for a Grayson County business?',
    answer: 'Studio 925 websites start at $900 for a Foundation site (up to 5 pages). Growth sites with service pages and analytics start at $1,800, and e-commerce sites with online payments start at $2,600. Every project includes full ownership of your files — no monthly platform fees or lock-in.',
  },
  {
    question: 'How long does it take to get a website built?',
    answer: 'You\'ll see a working draft within 48 hours of starting. Most projects launch within 1–2 weeks after we review and refine the design together. There\'s no weeks-long waiting period.',
  },
  {
    question: 'Do I need to provide content for my website?',
    answer: 'No. Most clients just point me to their Facebook page, an existing website, or tell me about their business over a quick call. I handle the structure, layout, and content direction from there.',
  },
  {
    question: 'Will my website show up on Google?',
    answer: 'Every site includes on-page SEO structure, Google Search Console submission, and proper meta tags. Your site will be built to be found — but ranking takes time and depends on competition, content, and ongoing effort.',
  },
  {
    question: 'What if I already have a website that isn\'t working?',
    answer: 'That\'s one of the most common situations I work with. If your current site is slow, outdated, or not bringing in calls, I can build a replacement from scratch that\'s designed to actually convert visitors into customers.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes. Basic hosting starts at $25/month and full support (hosting + content updates + SEO improvements) is $49/month. You\'re not left on your own after launch.',
  },
];

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://studio925.design' },
    { '@type': 'ListItem', position: 2, name: 'Web Design in Grayson County, KY', item: 'https://studio925.design/web-design-grayson-county-ky' },
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

const included = [
  { text: 'Custom design — no templates or page builders', icon: Code },
  { text: 'Mobile responsive on every screen size', icon: Smartphone },
  { text: 'Fast load times built for the 3-second rule', icon: Zap },
  { text: 'SEO structure so Google can find you', icon: Search },
  { text: '48-hour draft turnaround', icon: Clock },
  { text: 'Secure hosting setup and SSL included', icon: Shield },
];

export default function GraysonCountyContent() {
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-medium mb-4 md:mb-6">
              <MapPin size={12} className="shrink-0" /> Grayson County, KY
            </div>
            <h1 className="text-3xl md:text-6xl mb-4 md:mb-6 leading-[1.1]">
              Web Design for Businesses in <span className="italic text-brand-accent">Grayson County, Kentucky</span>
            </h1>
            <p className="text-base md:text-xl text-brand-primary/70 max-w-xl leading-relaxed">
              Custom websites for local businesses in Leitchfield, Clarkson, Caneyville, and across Grayson County. Built by a developer who actually lives here — not a remote agency using your zip code to rank.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="/#contact"
                className="bg-brand-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-brand-primary/20"
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
                alt="Kara Gibson — web designer in Grayson County, KY"
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
              alt="Kara Gibson — web designer in Grayson County, KY"
              width={56} height={56}
              loading="lazy"
              className="w-14 h-14 rounded-full object-cover shadow-md shadow-brand-primary/10 border-2 border-white"
            />
            <div>
              <p className="text-sm font-semibold text-brand-primary">Kara Gibson</p>
              <p className="text-xs text-brand-primary/50">Owner, Studio 925 · Grayson County, KY</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Grayson County businesses come to Studio 925 */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl mb-6 md:mb-8">
              Why Grayson County businesses choose a <span className="italic text-brand-accent">local web designer</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                title: 'You\'re not just another ticket',
                text: 'With an agency, you\'re project #47 in a queue. With Studio 925, you\'re talking directly to the person writing your code. Questions get answered the same day, not after three email forwards.',
              },
              {
                title: 'I know this market',
                text: 'I live in Grayson County. I know what local customers expect when they search for a contractor, a restaurant, or a service provider here. Your website is built for this audience — not a generic national template.',
              },
              {
                title: 'Your reputation backs it up',
                text: 'In a county where everyone knows everyone, reputation is everything. A professional website reinforces the trust you\'ve already built through word-of-mouth and years of good work.',
              },
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

      {/* What the website does for your business */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
            What a good website actually <span className="italic text-brand-accent">does</span> for your business
          </h2>
          <p className="text-brand-primary/60 text-sm md:text-lg leading-relaxed mb-6 md:mb-10 max-w-2xl">
            It's not about having a website. It's about having one that works.
          </p>
          <div className="space-y-4 md:space-y-6 text-brand-primary/70 text-sm md:text-lg leading-relaxed">
            <p>
              When someone in Grayson County needs a plumber, an electrician, or a place to eat, they pull out their phone and search. If your business doesn't show up — or shows up with a site that looks like it was built in 2012 — they're calling whoever does show up.
            </p>
            <p>
              A professionally built website puts you in front of those searches. It loads fast, makes your phone number easy to tap, and tells customers exactly what you do and how to reach you. No guessing, no digging through menus.
            </p>
            <p>
              That's the difference between a website that's a digital business card collecting dust and one that's actively bringing in calls every week. The businesses that invest in this see it in their phone — more calls, more messages, more booked jobs.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 px-6 bg-brand-primary text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">What every website includes</h2>
          <p className="text-white/60 mb-8 md:mb-12 max-w-2xl text-sm md:text-base leading-relaxed">
            No shortcuts, no hidden fees. Every project comes with everything you need to launch and start getting customers.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
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
            {[
              'Contact forms and clear calls to action',
              'Domain setup and connection',
              'Google Search Console submission',
              'Full ownership of all website files',
              'Revisions until you\'re happy before launch',
              'Complete deployment and launch',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 md:gap-3">
                <Check size={14} className="text-brand-accent shrink-0 md:!w-4 md:!h-4" />
                <span className="text-white/70 text-xs md:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof — local projects */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl mb-5 md:mb-8">
            Built right here in <span className="italic text-brand-accent">Grayson County</span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-brand-primary/70 text-sm md:text-lg leading-relaxed">
            <p>
              Some web designers create dozens of "city pages" just to show up in search results. They've never set foot in Grayson County. Studio 925 is different — I live here, I work here, and the projects I've built prove it.
            </p>
            <p>
              <a href="https://cscreatesmedia.com" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline underline-offset-2 hover:text-brand-accent/80 transition-colors">CS Media</a> is a Leitchfield-based media brand that needed a site to generate leads and establish credibility. <a href="https://townly.us" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline underline-offset-2 hover:text-brand-accent/80 transition-colors">Townly</a> was built specifically for the Grayson County community — connecting local businesses with local people. Both were built right here, for businesses that operate right here.
            </p>
            <p>
              That's the difference between a designer who knows your area and one who Googled your zip code.
            </p>
          </div>
          <div className="mt-6 md:mt-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:underline text-sm md:text-base"
            >
              See all projects in the portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Free local audit callout */}
      <section className="py-12 md:py-20 px-6 bg-brand-warm border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-brand-primary/10 bg-white p-6 md:p-10 shadow-lg shadow-brand-primary/5"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-700/5 -skew-x-12 translate-x-1/3 pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/10 text-emerald-800 text-xs font-bold tracking-widest uppercase mb-3 md:mb-4">
                  <MapPin size={12} className="shrink-0" /> Free for Grayson County
                </div>
                <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
                  See exactly where you rank on <span className="italic text-emerald-800">Google</span> first.
                </h2>
                <p className="text-sm md:text-base text-brand-primary/70 leading-relaxed mb-5 md:mb-6">
                  Before we talk about a website, get a free 49-point map of how your business shows up across Grayson County. Visibility score, top competitors, and one concrete recommendation. No subscription, no catch.
                </p>
                <a
                  href="https://audit.studio925.design"
                  className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl text-sm md:text-base font-semibold hover:scale-[1.02] transition-transform shadow-lg shadow-brand-primary/20"
                >
                  Get my free audit <ArrowRight size={18} />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="relative rounded-2xl border border-brand-primary/10 bg-brand-warm p-5 font-serif">
                  <div className="text-[10px] tracking-[0.22em] font-bold text-brand-primary/50 mb-2 uppercase">Local Geomap · Sample</div>
                  <div className="grid grid-cols-7 gap-1.5">
                    {[2, 1, 4, 7, 9, 12, 18, 1, 1, 3, 5, 8, 14, 20, 3, 2, 5, 8, 11, 16, 22, 6, 4, 7, 10, 13, 19, 25, 9, 7, 11, 14, 17, 21, 30].map((rank, i) => {
                      const tone =
                        rank <= 3 ? 'bg-emerald-700 text-white' :
                        rank <= 10 ? 'bg-emerald-700/30 text-emerald-900' :
                        rank <= 20 ? 'bg-amber-200 text-amber-900' :
                        'bg-red-200 text-red-900';
                      return (
                        <div key={i} className={`aspect-square rounded-md flex items-center justify-center text-[10px] font-bold ${tone}`}>
                          {rank}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[10px] text-brand-primary/60">
                    <span>← Top 3</span>
                    <span>11–20</span>
                    <span>20+ →</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Transparent pricing</h2>
          <p className="text-brand-primary/70 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
            Flat-rate pricing. No hourly billing, no surprise invoices. You know exactly what your website costs before we start.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6 md:mb-8">
            {[
              { name: 'Foundation', price: '$900', desc: 'Up to 5 pages, contact form, SEO setup' },
              { name: 'Growth', price: '$1,800', desc: 'Service pages, analytics, lead capture' },
              { name: 'Online Store', price: '$2,600', desc: 'Online store, customer accounts, checkout' },
            ].map((plan) => (
              <div key={plan.name} className="p-5 md:p-6 rounded-2xl border border-brand-primary/10 text-center">
                <p className="text-xs text-brand-primary/40 font-medium mb-1">{plan.name}</p>
                <p className="text-2xl md:text-3xl font-serif font-bold italic mb-2">{plan.price}</p>
                <p className="text-xs text-brand-primary/50">{plan.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs md:text-sm text-brand-primary/40 mb-6">
            50% deposit to start. You own everything after final payment. Hosting plans available from $25/month.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl text-sm md:text-base font-semibold hover:scale-[1.02] transition-transform"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
              Common <span className="italic text-brand-accent">questions</span>
            </h2>
            <p className="text-brand-primary/60 text-sm md:text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl">
              Questions I hear from Grayson County business owners, answered honestly.
            </p>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 md:p-8 rounded-2xl md:rounded-3xl border border-brand-primary/10 bg-white"
              >
                <h3 className="text-base md:text-lg font-sans font-bold mb-2 md:mb-3 text-brand-primary">
                  {item.question}
                </h3>
                <p className="text-sm md:text-base text-brand-primary/60 leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Also Serving */}
      <section className="py-12 md:py-16 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Also serving</h2>
          <p className="text-brand-primary/70 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
            Studio 925 builds websites for businesses across Kentucky.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link href="/website-design-leitchfield-ky" className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-white border border-brand-primary/10 hover:border-brand-accent/30 transition-colors text-sm md:text-base font-medium text-brand-primary/80">
              Website Design in Leitchfield, KY <ArrowRight size={16} className="inline ml-2" />
            </Link>
            <Link href="/small-business-website-design-kentucky" className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-white border border-brand-primary/10 hover:border-brand-accent/30 transition-colors text-sm md:text-base font-medium text-brand-primary/80">
              Small Business Websites in Kentucky <ArrowRight size={16} className="inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center py-12 md:py-16 px-6 md:px-8 bg-brand-primary text-white rounded-[2.5rem]">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Ready to get a website that works for your business?</h2>
          <p className="text-white/70 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            No pressure, no sales pitch. Tell me about your business and I'll show you what I can build.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold hover:bg-brand-accent/90 transition-colors"
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
