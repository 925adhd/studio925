'use client';

import { motion } from 'motion/react';
import { ArrowRight, Check, MapPin, Code, Users, TrendingUp, Smartphone, Search, Zap } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FreeAuditBand from '../../src/components/FreeAuditBand';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Service"],
  "name": "Studio 925: Custom Websites for Small Businesses in Kentucky",
  "url": "https://studio925.design/small-business-website-design-kentucky",
  "email": "kara@studio925.design",
  "telephone": "+1-270-551-2210",
  "description": "Custom website design for small businesses across Kentucky. Custom-built websites designed to help local businesses get found online, build trust, and turn visits into calls and customers.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Leitchfield",
    "addressRegion": "KY",
    "postalCode": "42754",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "State",
    "name": "Kentucky"
  },
  "serviceType": ["Custom Website Design", "Web Design", "Small Business Website Design", "E-Commerce Website Design", "Local SEO"],
  "priceRange": "$$",
  "knowsAbout": ["Custom Websites for Small Businesses", "Custom Website Design Kentucky", "Small Business Website Design Kentucky", "Local SEO", "E-Commerce"]
};

const faqItems = [
  {
    question: 'Do I need to be in Grayson County to work with Studio 925?',
    answer: 'No. I\'m based in Grayson County but work with small businesses across all of Kentucky. Everything is handled remotely. A quick call, email, or text is all we need to get started. You don\'t need to be local to get a great website.',
  },
  {
    question: 'What kind of businesses do you build websites for?',
    answer: 'Contractors, service providers, retail shops, restaurants, healthcare practices, real estate agents, and e-commerce businesses. If you\'re a small business that needs more customers from the internet, I can help.',
  },
  {
    question: 'Why hire a solo developer instead of an agency?',
    answer: 'With an agency, you pay for office space, project managers, and salespeople. None of those improve your website. With one person doing the work, every dollar goes into the design and the build. You also talk directly to the person building your site, which means faster communication and fewer misunderstandings.',
  },
  {
    question: 'What\'s the difference between your plans?',
    answer: 'Foundation ($900) is up to 5 pages, built to make sure customers can find your business when they search your name. Growth ($1,800) is up to 10 pages and starts with a hands-on SEO audit, then builds dedicated service pages, analytics, and lead tracking around real local search behavior. Online Store ($2,600) is up to 15 pages and includes everything in Growth plus a full online store with payments and customer management.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes. Many clients come to me with an outdated Wix, Squarespace, or WordPress site that isn\'t bringing them business. I rebuild it from scratch. Faster, better set up for Google, and designed to actually get people to reach out.',
  },
  {
    question: 'What happens after my website launches?',
    answer: 'You can manage it on your own (you own all the files), or choose a hosting plan. Basic hosting is $25/month. Full support is $49/month, which covers content updates, text edits, and ongoing SEO work.',
  },
  {
    question: 'Can I just use Wix or Squarespace for my small business?',
    answer: 'You can, and for some businesses, a DIY builder is fine. But free plans come with platform branding, limited SEO, slower speeds, and a generic look. If your website needs to compete in local search and turn visits into actual customers, a custom-built site will outperform a template every time.',
  },
  {
    question: 'How do I create a website for my small business?',
    answer: 'You have two paths: build it yourself with a platform like Wix or Squarespace (takes 10–20+ hours of your time), or hire someone to handle everything. Studio 925 builds custom websites starting at $900. You get a working draft in 48 hours and launch within 1–2 weeks, with zero homework on your end.',
  },
];

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://studio925.design' },
    { '@type': 'ListItem', position: 2, name: 'Custom Websites for Small Businesses in Kentucky', item: 'https://studio925.design/small-business-website-design-kentucky' },
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

export default function KentuckyContent() {
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
              <MapPin size={12} className="shrink-0" /> Based in Kentucky
            </div>
            <h1 className="text-3xl md:text-6xl mb-4 md:mb-6 leading-[1.1]">
              Custom Website Design for Small Businesses in <span className="italic text-brand-accent">Kentucky</span>
            </h1>
            <p className="text-base md:text-xl text-brand-primary/70 max-w-xl leading-relaxed">
              Studio 925 is a Kentucky website designer building custom websites for small businesses across the state. Built from scratch by one person, not pieced together from a template. Made to help your business get found on Google and get the phone ringing.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="/#contact"
                className="bg-brand-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-brand-primary/20"
              >
                Get a Free Quote <ArrowRight size={20} />
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
                alt="Kara Gibson, Kentucky web designer"
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
              alt="Kara Gibson, Kentucky web designer"
              width={56} height={56}
              loading="lazy"
              className="w-14 h-14 rounded-full object-cover shadow-md shadow-brand-primary/10 border-2 border-white"
            />
            <div>
              <p className="text-sm font-semibold text-brand-primary">Kara Gibson</p>
              <p className="text-xs text-brand-primary/50">Owner, Studio 925 · Based in Kentucky</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl mb-6 md:mb-8">
              Most small business websites <span className="italic text-brand-accent">aren't working</span>
            </h2>
          </motion.div>
          <div className="space-y-4 md:space-y-6 text-brand-primary/70 text-sm md:text-lg leading-relaxed">
            <p>
              You either built something yourself on Wix or Squarespace and it never really took off, or you paid someone who gave you a template site that looks like every other business in your industry. Either way, your phone isn't ringing because of your website.
            </p>
            <p>
              The problem usually isn't that you don't have a website. It's that the one you have is slow, hard to use on a phone, invisible to Google, or doesn't tell visitors what to do next. A website like that isn't helping you. It's costing you customers.
            </p>
            <p>
              Kentucky has over 400,000 small businesses. The ones getting found online have websites that load fast, give visitors a clear next step, and are set up so Google can actually understand what they do. That's what Studio 925 builds.
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
            What makes a Studio 925 website <span className="italic text-brand-accent">different</span>
          </h2>
          <p className="text-brand-primary/60 text-sm md:text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl">
            Every website is custom-built. No templates. No page builders. Here's what that means for your business.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Code,
                title: 'Custom code, not templates',
                text: 'Your website is written from scratch. That means it loads faster, ranks better, and doesn\'t look like the same Squarespace template your competitor uses.',
              },
              {
                icon: Smartphone,
                title: 'Built for phones first',
                text: 'Over 60% of searches happen on phones. Your site is built for phones first, then made to look right on a computer. Not the other way around.',
              },
              {
                icon: Search,
                title: 'SEO built in from day one',
                text: 'The technical setup Google needs to find your business is handled. You don\'t need to know what any of it means. Your site is just built to be found.',
              },
              {
                icon: Zap,
                title: 'Speed that keeps visitors',
                text: 'Research shows 53% of visitors leave if a site takes more than 3 seconds to load. Studio 925 sites are built lean. No slow add-ons or heavy templates dragging them down.',
              },
              {
                icon: Users,
                title: 'Direct communication',
                text: 'You talk to the person building your site. No account managers, no project coordinators, no game of telephone. One person, start to finish.',
              },
              {
                icon: TrendingUp,
                title: 'Built to bring in calls',
                text: 'A clear next step on every page. Easy-to-find contact info. A layout that guides visitors toward calling you or filling out a form.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 md:p-8 glass rounded-3xl"
              >
                <item.icon size={20} className="text-brand-accent mb-3 md:mb-4 md:!w-6 md:!h-6" />
                <h3 className="text-base md:text-lg font-sans font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-brand-primary/60 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 md:py-24 px-6 bg-brand-primary text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Who this is built for</h2>
          <p className="text-white/60 mb-8 md:mb-12 text-sm md:text-base leading-relaxed max-w-2xl">
            Studio 925 works best for small businesses that need a website to attract local customers. If any of these describe you, we're a good fit.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              'Contractors & trades',
              'Service providers',
              'Retail & boutiques',
              'Restaurants & food',
              'Healthcare & wellness',
              'Real estate agents',
              'Auto shops & dealers',
              'Any small business',
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-2xl bg-white/10 border border-white/10"
              >
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-brand-accent md:!w-4 md:!h-4" />
                </div>
                <span className="text-xs md:text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio proof */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl mb-5 md:mb-8">
            Real websites for <span className="italic text-brand-accent">real businesses</span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-brand-primary/70 text-sm md:text-lg leading-relaxed">
            <p>
              Every project in my portfolio was built for a real business with real goals. <a href="https://cscreatesmedia.com" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline underline-offset-2 hover:text-brand-accent/80 transition-colors">CS Media</a> needed a site to bring in new business for their media brand. <a href="https://4chariots.com" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline underline-offset-2 hover:text-brand-accent/80 transition-colors">Four Chariots</a> needed an online store that reflected their brand. <a href="https://townly.us" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline underline-offset-2 hover:text-brand-accent/80 transition-colors">Townly</a> was built to connect a local community with local businesses.
            </p>
            <p>
              None of these are template sites. None of them use page builders. They're all custom-built, fast, and designed around each business's specific customers and goals.
            </p>
          </div>
          <div className="mt-6 md:mt-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl text-sm md:text-base font-semibold hover:scale-[1.02] transition-transform"
            >
              View Full Portfolio <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* The process */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">How it works</h2>
          <p className="text-brand-primary/60 text-sm md:text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl">
            Four steps. No homework. No confusion. Most projects launch within 1–2 weeks.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { step: '01', title: 'Quick Conversation', desc: 'Tell me about your business. A call, a text, or just point me to your Facebook page.' },
              { step: '02', title: '48-Hour Draft', desc: 'You\'ll see a working draft of your website within 48 hours. No weeks of waiting.' },
              { step: '03', title: 'Review & Refine', desc: 'You tell me what to change. I handle the revisions until you\'re completely happy.' },
              { step: '04', title: 'Launch', desc: 'Your site goes live. Domain connected, security set up, Google notified. You\'re online.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-5 md:p-8 glass rounded-2xl md:rounded-3xl"
              >
                <span className="text-lg md:text-4xl font-serif font-bold italic text-brand-accent/15 absolute top-1.5 right-2.5 md:top-3 md:right-5">{item.step}</span>
                <h3 className="text-sm md:text-lg font-sans font-bold mb-2 md:mb-3 mt-1 md:mt-2 pr-6 md:pr-0">{item.title}</h3>
                <p className="text-xs md:text-sm text-brand-primary/55 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free audit band */}
      <FreeAuditBand
        headline="See how your business ranks across Kentucky"
        subhead="The free local audit maps your real search rankings for the queries your customers actually run. No login, no sales call, just the data."
      />

      {/* Pricing */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Simple, transparent pricing</h2>
          <p className="text-brand-primary/70 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
            One flat price per project. No hourly billing, no hidden fees, no ongoing platform costs. You own everything when it's done.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6 md:mb-8">
            {[
              { name: 'Foundation', price: '$900', desc: 'Up to 5 pages, contact form, mobile responsive, SEO setup' },
              { name: 'Growth', price: '$1,800', desc: 'Up to 10 pages, hands-on SEO audit, service pages, analytics' },
              { name: 'Online Store', price: '$2,600', desc: 'Up to 15 pages, online store, customer accounts, checkout' },
            ].map((plan) => (
              <div key={plan.name} className="p-5 md:p-6 rounded-2xl border border-brand-primary/10 text-center">
                <p className="text-xs text-brand-primary/40 font-medium mb-1">{plan.name}</p>
                <p className="text-2xl md:text-3xl font-serif font-bold italic mb-2">{plan.price}</p>
                <p className="text-xs text-brand-primary/50">{plan.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs md:text-sm text-brand-primary/40 mb-6">
            Hosting available from $25/month. Full support (updates + SEO) available at $49/month.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl text-sm md:text-base font-semibold hover:scale-[1.02] transition-transform"
            >
              View Full Pricing <ArrowRight size={18} />
            </a>
            <Link
              href="/website-cost"
              className="inline-flex items-center justify-center gap-2 bg-white border border-brand-primary/10 px-6 py-3 rounded-2xl text-sm md:text-base font-semibold hover:bg-brand-primary/5 transition-colors"
            >
              Website Cost Guide
            </Link>
            <Link
              href="/hosting-support"
              className="inline-flex items-center justify-center gap-2 bg-white border border-brand-primary/10 px-6 py-3 rounded-2xl text-sm md:text-base font-semibold hover:bg-brand-primary/5 transition-colors"
            >
              Hosting & Support
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
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
              Honest answers to common questions about working with Studio 925.
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

      {/* Local pages */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Serving businesses across Kentucky</h2>
          <p className="text-brand-primary/70 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
            Based in Grayson County, working with small businesses statewide and across a range of local industries. No agency overhead, just focused work on your website.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 flex-wrap">
            <Link href="/web-design-by-industry" className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-brand-accent/5 border border-brand-accent/30 hover:bg-brand-accent/10 transition-colors text-sm md:text-base font-semibold text-emerald-800">
              Web Design by Industry in Kentucky <ArrowRight size={16} className="inline ml-2" />
            </Link>
            <Link href="/web-design-grayson-county-ky" className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-white border border-brand-primary/10 hover:border-brand-accent/30 transition-colors text-sm md:text-base font-medium text-brand-primary/80">
              Web Design in Grayson County <ArrowRight size={16} className="inline ml-2" />
            </Link>
            <Link href="/website-design-leitchfield-ky" className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-white border border-brand-primary/10 hover:border-brand-accent/30 transition-colors text-sm md:text-base font-medium text-brand-primary/80">
              Website Design in Leitchfield, KY <ArrowRight size={16} className="inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center py-12 md:py-16 px-6 md:px-8 bg-brand-primary text-white rounded-[2.5rem]">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Let's build something that grows your business.</h2>
          <p className="text-white/70 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            No pressure. No jargon. Just a conversation about your business and what a great website can do for it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold hover:bg-brand-accent/90 transition-colors"
            >
              Get a Free Quote <ArrowRight size={20} />
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
