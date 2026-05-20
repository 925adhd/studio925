'use client';

import { motion } from 'motion/react';
import { ArrowRight, Check, HardHat, Code, Search, Smartphone, Zap } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FreeAuditBand from '../../src/components/FreeAuditBand';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Service"],
  "name": "Studio 925: Contractor Website Design in Kentucky",
  "url": "https://studio925.design/contractor-website-design-kentucky",
  "email": "kara@studio925.design",
  "telephone": "+1-270-551-2210",
  "description": "Custom website design for contractors and trades in Kentucky. Service pages, local SEO, and clear quote-request layouts built to turn local searches into booked jobs.",
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
  "serviceType": ["Contractor Website Design", "Trades Website Design", "Roofing Website Design", "Plumbing Website Design", "Electrician Website Design", "Web Design", "Local SEO"],
  "priceRange": "$$",
  "knowsAbout": ["Contractor Websites", "Trades Website Design", "Roofer Website Design", "Plumber Website Design", "Electrician Website Design", "Small Business Website Design", "Service Page SEO"]
};

const included = [
  { text: 'Custom homepage built around your business, not a template', icon: Code },
  { text: 'Mobile responsive so customers can call from their phone', icon: Smartphone },
  { text: 'Fast load times so customers don\'t bounce', icon: Zap },
  { text: 'On-page SEO structure built for local search', icon: Search },
];

const includedMore = [
  'Click-to-call phone numbers on every page',
  'Service area, hours, and license info clearly visible',
  'Contact and quote request forms',
  'Google Search Console submission',
  'Secure hosting setup and domain connection',
  'Full ownership of all files',
];

const customerSearches = [
  { query: '"roofer near me"', intent: 'Storm just hit. Ready to call today.' },
  { query: '"plumber [your town]"', intent: 'Pipe just burst. Calling whoever picks up.' },
  { query: '"emergency electrician"', intent: 'Power is out. Will call the first one online.' },
  { query: '"deck builder near me"', intent: 'Planning a project. Comparing options.' },
  { query: '"HVAC repair [zip]"', intent: 'AC out in July. Needs help fast.' },
  { query: '"concrete contractor Kentucky"', intent: 'Bigger job. Vetting carefully.' },
];

const contractorPages = [
  { title: 'Homepage', text: 'Phone, services, and the towns you cover up top. The first thing someone sees should be how to reach you and what you do.' },
  { title: 'Individual service pages', text: 'Roofing, gutters, siding, plumbing, electrical, HVAC, remodeling. Each service gets its own page so Google can rank you for what people actually search for.' },
  { title: 'Service area page', text: 'A real list of the towns and counties you cover. Tells Google where to show your site and tells customers right away if you come out their way.' },
  { title: 'Past work or photo gallery', text: 'Real photos of finished jobs. The most convincing thing on the page for a customer trying to decide between you and the next guy.' },
  { title: 'Contact and quote request form', text: 'A simple way for someone to send job details and photos without making three phone calls.' },
  { title: 'About and reviews', text: 'Who runs the business, how long you have been doing this, license info, and what your customers say. Builds trust before the call.' },
];

const faqs = [
  {
    question: 'How much does a website cost for a contractor in Kentucky?',
    answer: 'Most contractors do well on the Foundation plan ($900, up to 5 pages) for a clean homepage, services overview, service area, and contact form. If you want a separate page for each service you offer (roofing, plumbing, electrical, remodeling, and so on), the Growth plan ($1,800, up to 10 pages) is the right fit. Growth starts with a hands-on SEO audit so the site is built around real local search behavior. Service pages are how contractors rank for "roofer near me" and similar searches. Every project includes full ownership of your files.',
  },
  {
    question: 'Do I really need a website if I already have a Facebook page?',
    answer: 'A Facebook page can show up in Google search if someone types your business name. What it almost never does is win the top spots for searches like "plumber in [your town]" or "emergency electrician." Those go to real websites and Google Maps listings, which is where most new customers click. Facebook is fine for posting updates and connecting with people who already know you. For new customers searching right now, a real website does the heavy lifting.',
  },
  {
    question: 'What pages should a contractor website have?',
    answer: 'At minimum: a homepage with phone, services, and the towns you cover up top. A page for each major service you offer. A clear service area page. A past-work gallery so customers can see real jobs you have finished. A contact or quote form. The service pages are the part most contractor websites skip, and the part Google rewards most.',
  },
  {
    question: 'Will my business show up when someone searches "roofer near me" or "plumber near me"?',
    answer: 'Every site I build includes on-page SEO structure, schema markup, and Google Search Console submission. That gives you the foundation to rank locally. Long-term, ranking also depends on having a real Google Business Profile, getting reviews, and keeping your service area consistent across the web. I help set that up too. If you want to see exactly where you rank today, the free local audit further down on this page maps it out for you.',
  },
  {
    question: 'Can customers request quotes online?',
    answer: 'Yes. Every site includes a contact form set up to take job details, photos, and preferred timing. If you want a more advanced quote system that ties into a calendar or sends automatic replies, that is available on the Growth plan or as an add-on.',
  },
  {
    question: 'Do I have to give you all the photos and write the content?',
    answer: 'No. Most contractors are too busy to write web copy or shoot photos. Point me to your Facebook page, send a few photos from finished jobs, and walk me through what you do over a quick call. I handle the writing and layout. You review and approve everything before it goes live.',
  },
  {
    question: 'How long does it take to build a contractor website?',
    answer: 'You will have a working draft within 48 hours of our first conversation. Most contractor sites launch within 1 to 2 weeks after revisions. You review every page before it goes live, and revisions are included until you are happy.',
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
    { '@type': 'ListItem', position: 2, name: 'Contractor Website Design in Kentucky', item: 'https://studio925.design/contractor-website-design-kentucky' },
  ],
};

export default function ContractorContent() {
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
        <div className="absolute inset-0">
          <img
            src="/contractor-rooftop-job-kentucky.webp"
            alt="Roofing contractor working on a residential roof on a clear Kentucky afternoon"
            className="w-full h-full object-cover"
          />
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
              <HardHat size={12} className="shrink-0" /> Contractors &amp; Trades · Kentucky
            </div>
            <h1 className="text-3xl md:text-6xl mb-4 md:mb-6 leading-[1.1] text-white">
              Website Design for <span className="italic text-brand-accent">Contractors &amp; Trades</span> in Kentucky
            </h1>
            <p className="text-base md:text-xl text-white/85 max-w-xl leading-relaxed">
              Custom websites for contractors, roofers, plumbers, electricians, and builders across Kentucky. Built to help your phone ring when someone in your area needs work done today.
            </p>
            <div className="mt-7 md:mt-9 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://audit.studio925.design"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold flex items-center justify-center gap-2 hover:bg-brand-accent/90 transition-colors shadow-lg shadow-black/20"
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

      {/* Why contractors need a real website */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
          >
            <h2 className="text-2xl md:text-4xl mb-6 md:mb-8">
              Why Kentucky contractors need a <span className="italic text-brand-accent">real website</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              { title: 'People Google it, they don\'t open Facebook', text: 'When a roof leaks or a pipe bursts, almost nobody opens Facebook to find help. They grab their phone and Google it. Your Facebook page might show up if they type your business name. The top spots for "roofer near me" go to real websites and Google Maps listings. That\'s where the new calls come from.' },
              { title: 'The new guy in town already has a site', text: 'That contractor across town with the polished website is taking jobs that used to be yours. Not because he\'s better. Because he shows up first when customers search.' },
              { title: 'A real site builds trust before they call', text: 'Hours, services, real photos of finished work, and reviews tell a customer you are legit before they ever pick up the phone. Most decisions get made on the website, not on the call.' },
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

      {/* Photo break — trade shot with statement */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-auto md:min-h-[28rem]">
            <img
              src="/tradesman-installing-electrical-panel.webp"
              alt="Electrician wiring a residential electrical panel during a service upgrade"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="bg-brand-primary text-white px-6 py-12 md:px-12 md:py-20 flex items-center">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3 md:mb-4">The gap most contractor sites miss</p>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-5 leading-tight">
                Most contractor websites are a phone number and a list of services.
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                That&apos;s why their phones don&apos;t ring. The contractors who actually win calls are the ones with real service pages, real photos of finished jobs, and a layout built around how customers actually search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What customers actually search for — with plumber photo */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
                What customers search for when they need a <span className="italic text-brand-accent">contractor</span>
              </h2>
              <p className="text-brand-primary/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Each of these is a search a real website can show up for. A homepage alone can&apos;t. Individual service pages can. That&apos;s the part most cheap contractor websites skip, and the reason their phones don&apos;t ring.
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

            {/* Plumber photo callout */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
              className="hidden md:block w-72 shrink-0 sticky top-24"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-brand-primary/10 border border-brand-primary/5">
                <img
                  src="/plumber-fixing-pipes-under-sink.webp"
                  alt="Plumber adjusting boiler pipes and instrumentation during a service call"
                  className="w-full h-72 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-xs uppercase tracking-widest text-emerald-800 font-semibold mb-1.5">SEO note</p>
                  <p className="text-sm text-brand-primary/80 leading-relaxed">
                    Someone searching &quot;emergency plumber&quot; is going to call the first business that shows up and looks the part. The site does that work before the phone rings.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pages your contractor site should have — with blueprint photo */}
      <section className="py-16 md:py-24 px-6 bg-brand-primary/[0.03] border-t border-brand-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
                Pages your contractor website should <span className="italic text-brand-accent">actually have</span>
              </h2>
              <p className="text-brand-primary/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                A good contractor site isn&apos;t one page with a phone number. It&apos;s a small, focused set of pages built to answer the questions a real customer is about to ask.
              </p>
              <div className="space-y-3 md:space-y-4">
                {contractorPages.map((p, i) => (
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

            {/* Blueprint photo callout */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
              className="hidden md:block w-72 shrink-0 sticky top-24"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-brand-primary/10 border border-brand-primary/5">
                <img
                  src="/contractor-reviewing-blueprints-jobsite.webp"
                  alt="Contractor reviewing building blueprints at a residential job site"
                  className="w-full h-96 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-xs uppercase tracking-widest text-emerald-800 font-semibold mb-1.5">Service-page tip</p>
                  <p className="text-sm text-brand-primary/80 leading-relaxed">
                    Each service you offer gets its own page. That&apos;s how Google connects your business to &quot;deck builder near me&quot; and the dozen other searches your customers run.
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
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">What&apos;s included in every contractor website</h2>
          <p className="text-white/75 mb-8 md:mb-12 max-w-2xl text-sm md:text-base leading-relaxed">
            Every site I build for a contractor includes the core pieces a customer needs to find you, trust you, and call you.
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
              Most contractor websites are templates with the business name swapped in, or they are built by an agency that hands you a polished site without a real local search foundation underneath it. Studio 925 sits in the middle. Custom-coded, no templates, no page builders. Built around your trade, your services, and how customers in your area actually search.
            </p>
            <p>
              I&apos;m based in Grayson County, Kentucky, not a remote agency three states away. When you work with me, you&apos;re talking directly to the person building your site. No account managers. No outsourcing. No runaround.
            </p>
            <p>
              Some web shops only take one industry. Others only take big agency clients. Studio 925 is built around small Kentucky businesses with the depth of service-page detail a contractor actually needs to rank on Google.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-6 md:mb-10">
            Common questions about <span className="italic text-brand-accent">contractor websites</span>
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
        headline={`See your actual rankings for "roofer near me" or your trade`}
        subhead="The free local audit shows you exactly where your business ranks across your service area for the searches that drive calls. No login, no sales call, just the data."
      />

      {/* Pricing */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Contractor website pricing</h2>
          <p className="text-brand-primary/75 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
            Foundation sites start at <strong>$900</strong> (up to 5 pages) for contractors who need a clean homepage, services overview, service area, and contact form. Growth sites start at <strong>$1,800</strong> (up to 10 pages) and begin with a hands-on SEO audit, then add individual service pages for roofing, plumbing, electrical, HVAC, remodeling, and the rest. That&apos;s what helps your business rank in local search. Want a closer look at what goes into the price? Read the <Link href="/website-cost" className="text-emerald-800 hover:underline">website cost guide</Link>.
          </p>
          <a
            href="/#pricing"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-5 md:px-6 py-3 rounded-2xl text-sm md:text-base font-semibold hover:bg-brand-primary/90 transition-colors"
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
            Studio 925 builds custom websites for small businesses across Kentucky. Whether you run a trade business in Leitchfield, Grayson County, or anywhere in the state, the work is the same: a real site that helps real customers find you.
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
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Ready for a website that actually brings in calls?</h2>
          <p className="text-white/75 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            See what I&apos;ve built for other Kentucky businesses, then let&apos;s talk about your business.
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
