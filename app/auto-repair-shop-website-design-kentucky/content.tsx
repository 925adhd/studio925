'use client';

import { motion } from 'motion/react';
import { ArrowRight, Check, Wrench, Code, Search, Smartphone, Zap } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FreeAuditBand from '../../src/components/FreeAuditBand';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Service"],
  "name": "Studio 925: Auto Repair Shop Website Design in Kentucky",
  "url": "https://studio925.design/auto-repair-shop-website-design-kentucky",
  "email": "kara@studio925.design",
  "telephone": "+1-270-551-2210",
  "description": "Custom website design for auto repair shops in Kentucky. Service pages, local SEO, and call-ready layouts built to turn local searches into booked work.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Leitchfield",
    "addressRegion": "KY",
    "postalCode": "42754",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "State", "name": "Kentucky" }
  ],
  "serviceType": ["Auto Repair Shop Website Design", "Website Design", "Web Design", "Local SEO"],
  "priceRange": "$$",
  "knowsAbout": ["Auto Repair Shop Websites", "Mechanic Website Design", "Auto Shop Local SEO", "Small Business Website Design", "Service Page SEO"]
};

const included = [
  { text: 'Custom homepage built around your shop, not a template', icon: Code },
  { text: 'Mobile responsive so customers can call from their phone', icon: Smartphone },
  { text: 'Fast load times so customers don\'t bounce', icon: Zap },
  { text: 'On-page SEO structure built for local search', icon: Search },
];

const includedMore = [
  'Click-to-call phone numbers on every page',
  'Hours, address, and directions clearly visible',
  'Contact and service request forms',
  'Google Search Console submission',
  'Secure hosting setup and domain connection',
  'Full ownership of all files',
];

const customerSearches = [
  { query: '"oil change near me"', intent: 'Ready to book today.' },
  { query: '"brake repair [your town]"', intent: 'Comparing local shops right now.' },
  { query: '"check engine light diagnostic"', intent: 'Worried, looking for someone trustworthy.' },
  { query: '"tire rotation [zip code]"', intent: 'Routine maintenance, price-shopping.' },
  { query: '"transmission repair Kentucky"', intent: 'Big job, vetting carefully.' },
  { query: '"mechanic open Saturday"', intent: 'Has a problem this weekend.' },
];

const shopPages = [
  { title: 'Homepage', text: 'Phone, hours, and main services above the fold. The first thing a customer sees should be how to reach you.' },
  { title: 'Individual service pages', text: 'Oil changes, brakes, tires, diagnostics, transmission, AC, alignment, inspections. Each service gets its own page so Google can rank you for what people actually search.' },
  { title: 'Hours, location, and directions', text: 'A real address, a real map, and hours that match Google. The single most important page for local SEO.' },
  { title: 'Request service form', text: 'Make it easy for someone to send vehicle info and a description without picking up the phone.' },
  { title: 'About and why choose us', text: 'Who runs the shop, how long you\'ve been in town, certifications, warranty. This is what builds trust before they ever call.' },
  { title: 'Reviews and testimonials', text: 'Pull in real reviews. Local customers want to see other local customers.' },
];

const faqs = [
  {
    question: 'How much does a website cost for an auto repair shop in Kentucky?',
    answer: 'Most shops do well on the Foundation plan ($900, up to 5 pages) for a clean homepage, services overview, hours, and contact form. If you want individual service pages for oil changes, brakes, tires, diagnostics, etc., the Growth plan ($1,800, up to 10 pages) is the right fit. Growth starts with a hands-on SEO audit so the site is built around real local search behavior. Service pages are how shops rank for "brake repair near me" and similar searches. Every project includes full ownership of your files.',
  },
  {
    question: 'Do I really need a website if I already have a Facebook page?',
    answer: 'A Facebook page can\'t rank for "auto repair near me" or "oil change [your town]" the way a real website can. Facebook is fine for posting updates and connecting with regulars, but most new customers start on Google. If you only live on Facebook, you\'re invisible to anyone searching for a mechanic right now.',
  },
  {
    question: 'What pages should an auto repair shop website have?',
    answer: 'At minimum: a homepage with phone, hours, and main services up top. A page or section for each major service (oil changes, brakes, tires, diagnostics, etc.). A clear hours/directions page. A contact or request service form. A reviews or about section to build trust. The service pages are the part most shop websites skip, and the part Google rewards most.',
  },
  {
    question: 'Will my shop show up when someone searches "auto repair near me"?',
    answer: 'Every site I build includes on-page SEO structure, schema markup, and Google Search Console submission. That gives your shop the foundation to rank locally. Long-term, ranking also depends on having a real Google Business Profile, getting reviews, and keeping your hours and address consistent across the web. I help set that up too. If you want to see exactly where your shop ranks today, the free local audit further down on this page maps it out for you.',
  },
  {
    question: 'Can customers request service or appointments online?',
    answer: 'Yes. Every site includes a contact form set up to take vehicle info, the service requested, and preferred timing. If you want a more advanced booking system that ties into a calendar, that\'s available on the Growth plan or as an add-on.',
  },
  {
    question: 'Do I have to provide all the photos and content?',
    answer: 'No. Most shop owners are too busy to write web copy or shoot photos. Point me to your Facebook page, walk me through what you do over a quick call, and I handle the writing and layout from there. You review and approve everything before it goes live.',
  },
  {
    question: 'How long does it take to build an auto repair shop website?',
    answer: 'You\'ll have a working draft within 48 hours of our first conversation. Most shop sites launch within 1 to 2 weeks after revisions. You review every page before it goes live, and revisions are included until you\'re happy.',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://studio925.design' },
    { '@type': 'ListItem', position: 2, name: 'Auto Repair Shop Website Design in Kentucky', item: 'https://studio925.design/auto-repair-shop-website-design-kentucky' },
  ],
};

export default function AutoRepairShopContent() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Navbar />

      {/* Hero — full-bleed photo background */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/auto-repair-shop-bay-kentucky.webp"
            alt="Modern auto repair shop bay with a car on a service stand under overhead lighting"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for type contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/85 to-brand-primary/55" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-medium mb-5 md:mb-7">
              <Wrench size={12} className="shrink-0" /> Auto Repair Shops · Kentucky
            </div>
            <h1 className="text-3xl md:text-6xl mb-4 md:mb-6 leading-[1.1] text-white">
              Website Design for <span className="italic text-brand-accent">Auto Repair Shops</span> in Kentucky
            </h1>
            <p className="text-base md:text-xl text-white/85 max-w-xl leading-relaxed">
              Custom website design for auto repair shops in Kentucky. Built to help your shop get found on Google, take calls and service requests, and turn local searches into booked work.
            </p>
            <div className="mt-7 md:mt-9 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://audit.studio925.design"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-black/20"
              >
                Get My Free Audit <ArrowRight size={20} />
              </a>
              <a
                href="/#pricing"
                className="bg-white/10 backdrop-blur-sm border border-white/25 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold hover:bg-white/20 transition-colors text-center"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why auto shops need a real website */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
          >
            <h2 className="text-2xl md:text-4xl mb-6 md:mb-8">
              Why auto repair shops in Kentucky need a <span className="italic text-brand-accent">real website</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              { title: 'Customers Google first, call second', text: 'When a brake light comes on or a tire goes flat, almost nobody opens Facebook to find a mechanic. They search Google. If your shop doesn\'t show up there, they\'re calling someone who does.' },
              { title: 'A Facebook page can\'t rank you', text: 'Facebook isn\'t a website and it can\'t compete for "auto repair near me" or "oil change [your town]" the way a real site can. You can\'t out-post your way into Google\'s map results.' },
              { title: 'Trust starts before the phone rings', text: 'A clean website with hours, services, real reviews, and clear pricing tells a customer your shop is run right. Most decisions about which mechanic to call are made before anyone picks up a phone.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
                transition={{ delay: i * 0.1 }}
                className="p-5 md:p-8 glass rounded-3xl"
              >
                <h3 className="text-lg md:text-xl font-sans font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-brand-primary/70 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo break — alignment shot with statement */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-auto md:min-h-[28rem]">
            <img
              src="/mechanic-alignment-service-bay.webp"
              alt="Mechanic performing wheel alignment service on a car raised on a scissor lift"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="bg-brand-primary text-white px-6 py-12 md:px-12 md:py-20 flex items-center">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3 md:mb-4">The gap most shop sites miss</p>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-5 leading-tight">
                Most auto-shop websites stop at a phone number and a list of services.
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                That&apos;s why their phones don&apos;t ring. The shops that actually win calls are the ones with real service pages, real reviews, and a layout that respects how a customer is searching in the first place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What customers actually search for — with diagnostic photo */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
                What customers search for when they need a <span className="italic text-brand-accent">mechanic</span>
              </h2>
              <p className="text-brand-primary/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Each one of these is a search a real shop website can show up for. A homepage alone can&apos;t. Individual service pages can. That&apos;s the part most cheap auto-shop websites skip, and the reason their phones don&apos;t ring.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {customerSearches.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
                    transition={{ delay: i * 0.05 }}
                    className="p-3 md:p-4 rounded-xl bg-brand-primary/5 border border-brand-primary/5"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Search size={13} className="text-emerald-800 shrink-0" />
                      <span className="font-semibold text-brand-primary text-xs md:text-sm">{s.query}</span>
                    </div>
                    <p className="text-xs text-brand-primary/70 leading-relaxed pl-5">{s.intent}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Diagnostic photo callout */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
              className="hidden md:block w-72 shrink-0 sticky top-24"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-brand-primary/10 border border-brand-primary/5">
                <img
                  src="/mechanic-using-diagnostic-tool.webp"
                  alt="Mechanic using a handheld diagnostic tool to check a car"
                  className="w-full h-72 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-xs uppercase tracking-widest text-emerald-800 font-semibold mb-1.5">SEO note</p>
                  <p className="text-sm text-brand-primary/80 leading-relaxed">
                    Customers searching &quot;check engine light diagnostic&quot; want a shop that looks like it knows what it&apos;s doing. The site does that work before the phone rings.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pages your auto shop should have — with engine photo */}
      <section className="py-16 md:py-24 px-6 bg-brand-primary/[0.03] border-t border-brand-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
                Pages your auto repair shop website should <span className="italic text-brand-accent">actually have</span>
              </h2>
              <p className="text-brand-primary/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                A good shop site isn&apos;t a single page with a phone number. It&apos;s a small, focused set of pages built to answer the questions a real customer is about to ask.
              </p>
              <div className="space-y-3 md:space-y-4">
                {shopPages.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-white border border-brand-primary/5"
                  >
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-emerald-800" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-primary text-sm md:text-base mb-1">{p.title}</h3>
                      <p className="text-sm text-brand-primary/70 leading-relaxed">{p.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Engine work photo callout */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
              className="hidden md:block w-72 shrink-0 sticky top-24"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-brand-primary/10 border border-brand-primary/5">
                <img
                  src="/auto-shop-engine-service.webp"
                  alt="Mechanic checking engine oil dipstick during a routine service inspection"
                  className="w-full h-96 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-xs uppercase tracking-widest text-emerald-800 font-semibold mb-1.5">Service-page tip</p>
                  <p className="text-sm text-brand-primary/80 leading-relaxed">
                    Each service you offer gets its own page. That&apos;s how Google connects your shop to &quot;oil change near me&quot; and the dozen other searches your customers run.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-24 px-6 bg-brand-primary text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">What&apos;s included in every shop website</h2>
          <p className="text-white/75 mb-8 md:mb-12 max-w-2xl text-sm md:text-base leading-relaxed">
            Every site I build for an auto repair shop includes the core pieces a customer needs to find you, trust you, and call you.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
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
                <span className="text-white/80 text-xs md:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Studio 925 */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl mb-5 md:mb-8">
            What makes Studio 925 <span className="italic text-brand-accent">different</span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-brand-primary/75 text-sm md:text-lg leading-relaxed">
            <p>
              Most auto-shop websites are either built on a template that looks like every other shop in the state, or built by an agency that hands the shop owner a polished site with no real local search foundation underneath it. Studio 925 sits in the middle. Custom-coded, no templates, no page builders. Built around your shop, your services, and the way customers actually search.
            </p>
            <p>
              I&apos;m based in Grayson County, Kentucky, not a remote agency three states away. When you work with me, you&apos;re talking directly to the person building your site. No account managers. No outsourcing. No runaround.
            </p>
            <p>
              Some web shops focus only on auto repair. Others focus only on big agency clients. Studio 925 is built around small Kentucky businesses, with the same depth of service-page detail an auto shop actually needs to rank on Google.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-6 md:mb-10">
            Common questions about <span className="italic text-brand-accent">auto repair shop websites</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
                transition={{ delay: i * 0.05 }}
                className="p-5 md:p-6 rounded-2xl bg-white border border-brand-primary/5"
              >
                <h3 className="text-sm md:text-base font-bold mb-2">{faq.question}</h3>
                <p className="text-sm text-brand-primary/70 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free audit band */}
      <FreeAuditBand
        headline={`See your shop's actual rankings for "auto repair near me"`}
        subhead="The free local audit shows you exactly where your shop ranks across your service area for the searches that drive calls. No login, no sales call, just the data."
      />

      {/* Pricing */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Auto repair shop website pricing</h2>
          <p className="text-brand-primary/75 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
            Foundation sites start at <strong>$900</strong> (up to 5 pages) for shops that need a clean homepage, services overview, hours, and a contact form. Growth sites start at <strong>$1,800</strong> (up to 10 pages) and begin with a hands-on SEO audit, then add individual service pages for oil changes, brakes, tires, diagnostics, and more, which is what helps your shop rank in local search. Want a closer look at what goes into the price? Read the <Link href="/website-cost" className="text-emerald-800 hover:underline">website cost guide</Link>.
          </p>
          <a
            href="/#pricing"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-5 md:px-6 py-3 rounded-2xl text-sm md:text-base font-semibold hover:scale-[1.02] transition-transform"
          >
            See Full Pricing <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Also serving */}
      <section className="py-12 md:py-16 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Also serving</h2>
          <p className="text-brand-primary/75 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
            Studio 925 builds custom websites for small businesses across Kentucky. Whether you run a shop in Leitchfield, Grayson County, or anywhere in the state, the work is the same: a real site that helps real customers find you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 flex-wrap">
            <Link href="/web-design-by-industry" className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-brand-accent/5 border border-brand-accent/30 hover:bg-brand-accent/10 transition-colors text-sm md:text-base font-semibold text-emerald-800">
              All Industries Web Design <ArrowRight size={16} className="inline ml-2" />
            </Link>
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

      {/* CTA */}
      <section className="px-6 pb-16 md:pb-20 pt-12 md:pt-16">
        <div className="max-w-4xl mx-auto text-center py-12 md:py-16 px-6 md:px-8 bg-brand-primary text-white rounded-[2.5rem]">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Ready to get a website that actually brings in calls?</h2>
          <p className="text-white/75 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            See what I&apos;ve built for other Kentucky businesses, then let&apos;s talk about your shop.
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
