'use client';

import { motion } from 'motion/react';
import { ArrowRight, DollarSign, Clock, Layers, Users, Zap, Check } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

const faqItems = [
  {
    question: 'How much does a website designer cost?',
    answer: 'Website design costs vary widely based on complexity, experience, and approach. A basic small business site typically costs $500–$5,000 with a freelancer, while agencies charge $10,000–$100,000+. At Studio 925, custom websites start at $900 with transparent, flat-rate pricing — no hourly surprises.',
  },
  {
    question: 'What is the average cost to build a website for a small business?',
    answer: 'Most small businesses spend between $2,000 and $8,000 on a custom website. Template-based sites can cost less ($300–$1,200), but they come with limitations in design, performance, and SEO. Studio 925 offers custom-coded websites starting at $900, with plans up to $2,600 for e-commerce and membership features.',
  },
  {
    question: 'What is the difference between a DIY website builder and a custom website?',
    answer: 'DIY builders like Wix and Squarespace are template-based tools you manage yourself. They\'re affordable upfront ($0–$40/month) but limit your design, speed, and SEO. A custom website is built from scratch for your specific business — faster load times, better Google rankings, and a design that actually matches your brand.',
  },
  {
    question: 'What are the ongoing costs of a website?',
    answer: 'After launch, expect to pay for hosting ($3–$300/month), domain renewal ($10–$20/year), and optional maintenance ($50–$200/month). Studio 925 offers hosting starting at $25/month and full support at $49/month, which covers hosting, backups, content updates, and SEO improvements.',
  },
  {
    question: 'What is the 3-second rule in website design?',
    answer: 'The 3-second rule means your website has roughly three seconds to communicate what you do, why it matters, and what visitors should do next — before they leave. Research shows 53% of mobile users abandon sites that take longer than 3 seconds to load. That\'s why every Studio 925 website is built for speed and clarity from the start.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'A DIY website builder takes 10–20 hours of your time. A custom website from an agency can take 4–12 weeks. Studio 925 delivers a working draft within 48 hours of starting, with most projects launching within 1–2 weeks after review and refinement.',
  },
  {
    question: 'Can I build my own website for free?',
    answer: 'Yes — platforms like Wix, Google Sites, and Canva offer free plans. However, free websites come with platform branding, limited features, slower speeds, and a subdomain (not your own .com). For a business that needs to attract real customers, a professionally built website is a better investment.',
  },
  {
    question: 'Should I hire a freelancer or an agency for my website?',
    answer: 'Freelancers typically charge $500–$5,000 and offer direct communication. Agencies charge $10,000–$100,000+ and provide larger teams but more overhead. For small businesses, a skilled freelancer or solo developer often delivers better value — you get personal attention without the agency markup.',
  },
];

const jsonLd = {
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

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'How Much Does a Website Cost?',
  description: 'Website design costs explained. Learn what affects pricing, compare DIY vs custom, and see transparent pricing from a local Kentucky web designer.',
  url: 'https://studio925.design/website-cost',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Studio 925',
    url: 'https://studio925.design',
  },
  provider: {
    '@type': 'LocalBusiness',
    name: 'Studio 925',
    url: 'https://studio925.design',
  },
};

const costBreakdown = [
  { type: 'Basic / Template Site', range: '$300 – $1,200', note: 'Limited design, you manage it' },
  { type: 'Small Business Custom', range: '$900 – $5,000', note: 'Professional, built for your business' },
  { type: 'E-Commerce Site', range: '$2,000 – $10,000+', note: 'Online store with checkout' },
  { type: 'Agency Custom Design', range: '$10,000 – $100,000+', note: 'Large teams, longer timelines' },
];

const factors = [
  { icon: Layers, title: 'Complexity & Features', desc: 'A 3-page brochure site costs far less than an e-commerce store with customer accounts, payment processing, and inventory management.' },
  { icon: Users, title: 'Who Builds It', desc: 'Freelancers charge $500–$5,000. Agencies start at $10,000+. The right choice depends on your project scope, not just your budget.' },
  { icon: Clock, title: 'Timeline & Revisions', desc: 'Rush projects and extensive revision rounds add cost. A clear process with defined milestones keeps your project on time and on budget.' },
  { icon: Zap, title: 'Ongoing Maintenance', desc: 'Hosting runs $3–$300/month. Updates and support cost $50–$200/month. These recurring costs are often overlooked when budgeting.' },
];

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://studio925.design' },
    { '@type': 'ListItem', position: 2, name: 'How Much Does a Website Cost?', item: 'https://studio925.design/website-cost' },
  ],
};

export default function WebsiteCostContent() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
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

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-medium mb-4 md:mb-6">
              <DollarSign size={12} className="shrink-0" /> Pricing Guide
            </div>
            <h1 className="text-3xl md:text-6xl mb-4 md:mb-6 leading-[1.1]">
              How Much Does a <span className="italic text-brand-accent">Website Cost?</span>
            </h1>
            <p className="text-base md:text-xl text-brand-primary/70 max-w-2xl leading-relaxed">
              Website design pricing depends on what you need, who builds it, and how custom it is. Here's an honest breakdown so you can make the right decision for your business.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="/#pricing"
                className="bg-brand-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-brand-primary/20"
              >
                See Our Pricing <ArrowRight size={20} />
              </a>
              <a
                href="#faq"
                className="bg-white border border-brand-primary/10 px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold hover:bg-brand-primary/5 transition-colors text-center"
              >
                Jump to FAQ
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost Breakdown Table */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
              Website design costs at a <span className="italic text-brand-accent">glance</span>
            </h2>
            <p className="text-brand-primary/60 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 max-w-2xl">
              Industry averages for 2026. Where your project falls depends on complexity, features, and who builds it.
            </p>
          </motion.div>

          {/* Desktop Table */}
          <div className="hidden md:block rounded-3xl border border-brand-primary/10 overflow-hidden">
            <div className="grid grid-cols-3 bg-brand-primary text-white">
              <div className="p-5 font-bold text-sm">Website Type</div>
              <div className="p-5 font-bold text-sm text-center">Typical Cost</div>
              <div className="p-5 font-bold text-sm text-center">Notes</div>
            </div>
            {costBreakdown.map((row, i) => (
              <div
                key={row.type}
                className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-brand-primary/[0.02]' : 'bg-white'}`}
              >
                <div className="p-5 text-sm font-semibold text-brand-primary border-r border-brand-primary/5">
                  {row.type}
                </div>
                <div className="p-5 text-sm text-brand-primary/80 text-center border-r border-brand-primary/5 font-mono">
                  {row.range}
                </div>
                <div className="p-5 text-sm text-brand-primary/60 text-center">
                  {row.note}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {costBreakdown.map((row, i) => (
              <motion.div
                key={row.type}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-2xl border border-brand-primary/10 bg-white"
              >
                <p className="text-sm font-semibold text-brand-primary mb-1">{row.type}</p>
                <p className="text-lg font-mono font-bold text-brand-accent mb-1">{row.range}</p>
                <p className="text-xs text-brand-primary/50">{row.note}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-5 md:p-6 rounded-2xl bg-brand-accent/5 border border-brand-accent/10">
            <p className="text-sm md:text-base text-brand-primary/80 leading-relaxed">
              <strong>Studio 925 pricing:</strong> Custom websites start at <strong>$900</strong> with flat-rate pricing. No hourly billing, no hidden fees. You know exactly what you're paying before we start.{' '}
              <a href="/#pricing" className="text-brand-accent font-semibold hover:underline">View our plans →</a>
            </p>
          </div>
        </div>
      </section>

      {/* What Affects Cost */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
              What affects the cost of a <span className="italic text-brand-accent">website</span>
            </h2>
            <p className="text-brand-primary/60 text-sm md:text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl">
              Four factors drive most of the price difference between a $500 site and a $50,000 one.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {factors.map((factor, i) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 md:p-8 glass rounded-3xl"
              >
                <factor.icon size={20} className="text-brand-accent mb-3 md:mb-4 md:!w-6 md:!h-6" />
                <h3 className="text-lg md:text-xl font-sans font-bold mb-2 md:mb-3">{factor.title}</h3>
                <p className="text-sm md:text-base text-brand-primary/60 leading-relaxed">{factor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The 3-Second Rule */}
      <section className="py-16 md:py-24 px-6 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">
              The 3-second rule: why cheap websites cost more in the long run
            </h2>
            <div className="space-y-4 md:space-y-6 text-white/70 text-sm md:text-lg leading-relaxed">
              <p>
                When someone visits your website, you have about <strong className="text-white">three seconds</strong> to show them what you do, why it matters, and what to do next. If your site is slow, cluttered, or confusing, they leave — and they're calling your competitor instead.
              </p>
              <p>
                Research shows <strong className="text-white">53% of mobile users abandon sites that take longer than 3 seconds to load.</strong> That means a slow website isn't just frustrating — it's actively losing you customers.
              </p>
              <p>
                A well-built website loads fast, communicates clearly above the fold, and guides visitors toward contacting you. That's the difference between a site that looks nice and one that actually works for your business.
              </p>
            </div>

            <div className="mt-8 md:mt-10 grid grid-cols-3 gap-3 md:gap-6">
              {[
                { stat: '3s', label: 'To grab attention' },
                { stat: '53%', label: 'Leave slow sites' },
                { stat: '88%', label: 'Won\'t return after bad UX' },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 md:p-6 rounded-2xl bg-white/10 border border-white/10">
                  <p className="text-2xl md:text-4xl font-serif font-bold italic text-brand-accent">{item.stat}</p>
                  <p className="text-xs md:text-sm text-white/60 mt-1 md:mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIY vs Custom */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
              DIY website builders vs. <span className="italic text-brand-accent">custom development</span>
            </h2>
            <p className="text-brand-primary/60 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 max-w-2xl">
              Both are valid options. Here's an honest look at what each gives you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* DIY */}
            <div className="p-6 md:p-8 rounded-3xl border border-brand-primary/10">
              <h3 className="text-xl md:text-2xl font-sans font-bold mb-4">DIY Builders</h3>
              <p className="text-xs text-brand-primary/40 font-mono mb-4">Wix, Squarespace, WordPress.com</p>
              <ul className="space-y-3">
                {[
                  { text: 'Low upfront cost ($0–$40/month)', good: true },
                  { text: 'Drag-and-drop, no coding needed', good: true },
                  { text: 'Limited design flexibility', good: false },
                  { text: 'Slower page load speeds', good: false },
                  { text: 'You manage everything yourself', good: false },
                  { text: 'Generic SEO structure', good: false },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2 text-sm">
                    <Check size={14} className={`mt-0.5 shrink-0 ${item.good ? 'text-brand-accent' : 'text-brand-primary/25'}`} />
                    <span className={item.good ? 'text-brand-primary/80' : 'text-brand-primary/50'}>{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-brand-primary/40 mt-4">Best for: personal projects, blogs, testing an idea</p>
            </div>

            {/* Custom */}
            <div className="p-6 md:p-8 rounded-3xl border-2 border-brand-accent/20 bg-brand-accent/[0.02]">
              <h3 className="text-xl md:text-2xl font-sans font-bold mb-4">Custom Development</h3>
              <p className="text-xs text-brand-accent font-mono mb-4">What Studio 925 builds</p>
              <ul className="space-y-3">
                {[
                  'Designed specifically for your business',
                  'Fast load times (built for the 3-second rule)',
                  'SEO structure built in from the start',
                  'Fully mobile responsive by default',
                  'Someone handles updates and maintenance',
                  'You own everything — no platform lock-in',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check size={14} className="text-brand-accent mt-0.5 shrink-0" />
                    <span className="text-brand-primary/80">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-brand-primary/40 mt-4">Best for: local businesses that need to attract real customers</p>
            </div>
          </div>

          <p className="text-center text-xs text-brand-primary/40 mt-6 md:mt-8">
            Not sure which is right for you? <a href="/#contact" className="text-brand-accent hover:underline">Reach out</a> and I'll give you an honest recommendation.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
              Frequently asked <span className="italic text-brand-accent">questions</span>
            </h2>
            <p className="text-brand-primary/60 text-sm md:text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl">
              Common questions about website design costs, answered clearly.
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

      {/* Studio 925 Pricing CTA */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Studio 925 pricing</h2>
          <p className="text-brand-primary/60 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-2xl">
            Flat-rate pricing with no hourly billing and no hidden fees. You know the full cost before we start.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { name: 'Foundation', price: '$900', desc: 'Professional site, up to 5 pages' },
              { name: 'Growth', price: '$1,800', desc: 'Service pages, analytics, lead capture' },
              { name: 'Online Store', price: '$2,600', desc: 'Online store, customer accounts' },
            ].map((plan) => (
              <div key={plan.name} className="p-5 md:p-6 rounded-2xl border border-brand-primary/10 text-center">
                <p className="text-xs text-brand-primary/40 font-medium mb-1">{plan.name}</p>
                <p className="text-2xl md:text-3xl font-serif font-bold italic mb-2">{plan.price}</p>
                <p className="text-xs text-brand-primary/50">{plan.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold hover:scale-[1.02] transition-transform"
            >
              View Full Pricing Details <ArrowRight size={20} />
            </a>
            <Link
              href="/hosting-support"
              className="inline-flex items-center justify-center gap-2 bg-white border border-brand-primary/10 px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold hover:bg-brand-primary/5 transition-colors"
            >
              Hosting & Support Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Learn more</h2>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link href="/website-design-leitchfield-ky" className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-white border border-brand-primary/10 hover:border-brand-accent/30 transition-colors text-sm md:text-base font-medium text-brand-primary/80">
              Website Design in Leitchfield, KY <ArrowRight size={16} className="inline ml-2" />
            </Link>
            <Link href="/web-design-grayson-county-ky" className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-white border border-brand-primary/10 hover:border-brand-accent/30 transition-colors text-sm md:text-base font-medium text-brand-primary/80">
              Web Design in Grayson County <ArrowRight size={16} className="inline ml-2" />
            </Link>
            <Link href="/portfolio" className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-white border border-brand-primary/10 hover:border-brand-accent/30 transition-colors text-sm md:text-base font-medium text-brand-primary/80">
              View Portfolio <ArrowRight size={16} className="inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center py-12 md:py-16 px-6 md:px-8 bg-brand-primary text-white rounded-[2.5rem]">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Ready to get a website that works?</h2>
          <p className="text-white/70 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            Transparent pricing. No surprises. Let's build something that brings you customers.
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
              See My Work
            </Link>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
