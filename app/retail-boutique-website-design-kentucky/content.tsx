'use client';

import { motion } from 'motion/react';
import { ArrowRight, Check, ChevronDown, ShoppingBag, Code, Search, Smartphone, Zap } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FreeAuditBand from '../../src/components/FreeAuditBand';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Service"],
  "name": "Studio 925: Boutique & Retail Website Design in Kentucky",
  "url": "https://studio925.design/retail-boutique-website-design-kentucky",
  "email": "kara@studio925.design",
  "telephone": "+1-270-551-2210",
  "description": "Custom website design for boutiques, gift shops, and retail stores in Kentucky. Product photos, brands carried, current hours, and online stores for shops ready to sell online.",
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
  "serviceType": ["Boutique Website Design", "Retail Website Design", "Gift Shop Website Design", "Ecommerce Website Design", "Web Design", "Local SEO"],
  "priceRange": "$$",
  "knowsAbout": ["Boutique Websites", "Retail Store Websites", "Small Business Online Stores", "Product Photography for Websites", "Small Business Website Design", "Local SEO"]
};

const included = [
  { text: 'Custom homepage built around your shop, not a template', icon: Code },
  { text: 'Built for phones, where most people browse before they visit', icon: Smartphone },
  { text: 'Fast load times, even with lots of product photos', icon: Zap },
  { text: 'On-page SEO structure built for local search', icon: Search },
];

const includedMore = [
  'Real photos of your store and what you carry',
  'Brands you carry listed in plain text',
  'Hours, holiday hours, and directions with a Google Maps link',
  'Tap-to-call phone number on every page',
  'Google Search Console submission',
  'Full ownership of all files',
];

const customerSearches = [
  { query: '"boutique near me"', intent: 'Wants somewhere to shop today.' },
  { query: '"women\'s clothing store Elizabethtown"', intent: 'Comparing local shops before making the drive.' },
  { query: '"gift shop near me"', intent: 'Needs a gift, probably by this weekend.' },
  { query: '"Kendra Scott near me"', intent: 'Knows exactly what they want. Looking for who has it.' },
  { query: '"baby shower gifts Leitchfield"', intent: 'Has an event coming up. Ready to buy.' },
  { query: '"boutiques open Sunday"', intent: 'Free afternoon. Your hours have to be right.' },
];

const retailPages = [
  { title: 'Homepage', text: 'What you carry, your hours, and where you are, with real photos of your store. Someone should know in five seconds if you are their style.' },
  { title: 'New arrivals or what we carry', text: 'A photo gallery of what is on your racks and shelves right now. Updated as new stock comes in, so people have a reason to check back.' },
  { title: 'Brands we carry', text: 'The brands you stock, written out in plain text. When someone searches for a brand by name, this is the page that can show up.' },
  { title: 'Visit us', text: 'Hours, holiday hours, parking, and a map. Plus events like a holiday open house or sidewalk sale.' },
  { title: 'Shop online (optional)', text: 'Products, prices, and checkout for shops ready to sell online. Start with best sellers and gift items, then add more over time.' },
  { title: 'About', text: 'Your story and the person behind the counter. A lot of people shop small because of who runs the shop.' },
];

const faqs = [
  {
    question: 'How much does a boutique or retail website cost in Kentucky?',
    answer: 'It depends on whether you want to sell online. If your site\'s job is to show what you carry and get people in the door, the Foundation plan ($900, up to 5 pages) covers a homepage, what we carry, brands, visit us, and about. If you want separate pages for each category or brand to compete in local search, the Growth plan ($1,800, up to 10 pages) starts with a hands-on SEO audit. If you are ready to sell online, the Online Store plan ($2,600) adds secure checkout, customer accounts, and an admin dashboard to manage products. Extra pages are $75 each on any plan, and you own all of your files.',
  },
  {
    question: 'Do I need an online store?',
    answer: 'Not always. Plenty of boutiques do great with a site that shows what is in the store and makes it easy to call, message, or stop by. An online store makes sense when you already ship orders from Facebook Lives or DMs, you have customers out of town, or you want sales coming in while the shop is closed. If you are not sure, start with a browse-and-visit site. It can grow into an online store later.',
  },
  {
    question: 'Isn\'t Instagram or Facebook enough for a boutique?',
    answer: 'Instagram and Facebook are great for showing new arrivals to people who already follow you, and they can show up in Google when someone searches your shop by name. Someone new to town searching "boutique near me" sees Google\'s map listings first, and those listings link to your website. A website gives that new customer a place to see your style, your hours, and the brands you carry in one spot. Keep posting. The website is the part you own and control.',
  },
  {
    question: 'Can I add new arrivals myself?',
    answer: 'Yes, depending on your plan. With the Online Store plan you get an admin dashboard to add products, photos, and prices yourself. On the Growth plan you get a simple editor for updating pages and photos. On Foundation with the Full Support hosting plan, just text me the photos and I\'ll post them, usually within a business day.',
  },
  {
    question: 'Can my shop show up when people search for a brand I carry?',
    answer: 'It can help a lot. A "brands we carry" page with each brand written out in plain text gives Google something to match when someone searches for that brand near them. Nobody can promise a ranking, but without that page, there is nothing for Google to match. One note: brands usually have rules about using their logos, so I use brand names in text and only add logos if the brand allows it.',
  },
  {
    question: 'Will an online store have monthly platform fees like Shopify?',
    answer: 'Your store is custom built, so there is no monthly platform subscription on top of your website. You still pay for hosting, and like any card reader, the payment processor charges a small fee on each sale. You see exactly what those costs are before we start.',
  },
  {
    question: 'Do I have to take all the product photos?',
    answer: 'You send them, but they don\'t need to be professional. Phone photos work well if you shoot near a window in daylight, against a plain wall or table. Send a handful of shots of your store and your best sellers, walk me through your shop on a quick call, and I handle the writing and layout. You review and approve everything before it goes live.',
  },
  {
    question: 'How long does it take to build a boutique website?',
    answer: 'You will have a working draft within 48 hours of our first conversation. Most browse-and-visit sites launch within 1 to 2 weeks after revisions. Online stores take longer, depending on how many products you are starting with. You review every page before it goes live, and revisions are included until you are happy.',
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
    { '@type': 'ListItem', position: 2, name: 'Boutique & Retail Website Design in Kentucky', item: 'https://studio925.design/retail-boutique-website-design-kentucky' },
  ],
};

export default function RetailContent() {
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
            src="/boutique-owner-arranging-store-kentucky.webp"
            alt="Boutique owner taking notes beside a clothing rack and wrapped gift boxes"
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
            <div className="inline-flex items-center gap-1.5 text-white/85 text-sm font-medium mb-4 md:mb-5">
              <ShoppingBag size={12} className="shrink-0" /> Boutiques &amp; Retail · Kentucky
            </div>
            <h1 className="text-3xl md:text-6xl mb-4 md:mb-6 leading-[1.1] text-white">
              Website Design for <span className="italic">Boutiques &amp; Retail Shops</span> in Kentucky
            </h1>
            <p className="text-base md:text-xl text-white/85 max-w-xl leading-relaxed">
              Custom websites for boutiques, gift shops, and retail stores across Kentucky. Built to show people what you carry before they make the drive, and to sell online when you are ready.
            </p>
            <div className="mt-7 md:mt-9 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://audit.studio925.design"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lit [--btn:var(--color-brand-accent)] hover:[--btn:#047857] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold flex items-center justify-center gap-2"
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

      {/* Why boutiques need a real website */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
          >
            <h2 className="text-2xl md:text-4xl mb-6 md:mb-8">
              Why Kentucky shops need a <span className="italic">real website</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              { title: 'People shop with their eyes first', text: 'Before anyone drives to a boutique, they want to know it\'s their style. Real photos of what\'s on your racks and shelves do more than any slogan. A good site shows them in the first scroll.' },
              { title: 'Instagram reaches followers. Google reaches everyone else.', text: 'Instagram is great for people who already follow you. Someone new in town searching "boutique near me" sees Google\'s map listings first, and those link to your website. That\'s where you meet customers who have never heard of you.' },
              { title: 'Your stock and hours change. Your site should keep up.', text: 'New arrivals, holiday hours, sidewalk sales. A site that\'s easy to update keeps people from showing up to a locked door or a rack that sold out last week.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
                transition={{ delay: i * 0.1 }}
                className="border-t-2 border-brand-primary pt-5"
              >
                <h3 className="text-lg md:text-xl font-sans font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-brand-primary/70 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo break — gift shop shot with statement */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-auto md:min-h-[28rem]">
            <img
              src="/gift-shop-cards-and-gifts-display.webp"
              alt="Gift shop with racks of greeting cards, wrapping paper, and gift boxes under a skylight"
              className="absolute inset-0 w-full h-full object-cover object-[center_70%]"
            />
          </div>
          <div className="bg-brand-primary text-white px-6 py-12 md:px-12 md:py-20 flex items-center">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3 md:mb-4">The gap most shop websites miss</p>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-5 leading-tight">
                Most shop websites show the storefront, not the stuff.
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                People want to see what&apos;s on your racks and shelves before they make the drive. The shops that win the visit show real products, the brands they carry, and when new stock lands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What customers actually search for — with shopper photo */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
                What shoppers search for <span className="italic">before they visit</span>
              </h2>
              <p className="text-brand-primary/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Some of these are about your type of shop. Some are about a gift or an occasion. One is about a brand you already carry. A good shop site has a page ready for each kind.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-10 border-t border-brand-primary/15">
                {customerSearches.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
                    transition={{ delay: i * 0.05 }}
                    className="py-4 border-b border-brand-primary/15"
                  >
                    <p className="font-semibold text-brand-primary text-sm md:text-base mb-1">{s.query}</p>
                    <p className="text-sm text-brand-primary/70 leading-relaxed">{s.intent}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Shopper photo callout */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
              className="hidden md:block w-72 shrink-0 sticky top-24"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-brand-primary/10 border border-brand-primary/5">
                <img
                  src="/shopper-browsing-clothing-rack-boutique.webp"
                  alt="Shopper looking through a rack of clothes in a small boutique"
                  className="w-full h-72 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-xs uppercase tracking-widest text-emerald-800 font-semibold mb-1.5">Brand tip</p>
                  <p className="text-sm text-brand-primary/80 leading-relaxed">
                    If you carry brands people already know, list them on your site in plain text. Someone searching for a brand by name is already halfway to buying.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pages your shop site should have — with online orders photo */}
      <section className="py-16 md:py-24 px-6 bg-brand-primary/[0.03] border-t border-brand-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
                Pages your shop website should <span className="italic">actually have</span>
              </h2>
              <p className="text-brand-primary/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Whether you sell online or just want people walking through the door, these are the pages that turn a quick search into a visit.
              </p>
              <div className="border-t border-brand-primary/15">
                {retailPages.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
                    transition={{ delay: i * 0.05 }}
                    className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[3.5rem_1fr] py-5 border-b border-brand-primary/15"
                  >
                    <span className="font-serif italic text-xl md:text-2xl text-brand-primary/70 leading-none pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-bold text-brand-primary text-sm md:text-base mb-1">{p.title}</h3>
                      <p className="text-sm text-brand-primary/70 leading-relaxed">{p.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Online orders photo callout */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
              className="hidden md:block w-72 shrink-0 sticky top-24"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-brand-primary/10 border border-brand-primary/5">
                <img
                  src="/boutique-owner-packing-online-orders.webp"
                  alt="Smiling shop owner leaning on a shipping box in front of a clothing rack and stacked boxes"
                  className="w-full h-96 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-xs uppercase tracking-widest text-emerald-800 font-semibold mb-1.5">Online store tip</p>
                  <p className="text-sm text-brand-primary/80 leading-relaxed">
                    You don&apos;t have to put your whole store online on day one. Start with best sellers and gift items, then add more as you see what sells.
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
            Every boutique and retail site I build includes the core pieces a shopper needs to find you, like your style, and come see you in person.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-white/15 pt-5 pr-4"
              >
                <item.icon size={22} strokeWidth={1.5} className="text-brand-accent mb-4" />
                <p className="text-sm md:text-base leading-relaxed text-white/90">{item.text}</p>
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
            What makes Studio 925 <span className="italic">different</span>
          </h2>
          <p className="text-brand-primary/75 text-sm md:text-lg leading-relaxed">
            A lot of small shops end up on a store builder with a monthly fee and a theme that looks like every other shop on it. Studio 925 sites are custom-coded, so your shop looks like your shop. It can start as a place to show what you carry and grow into an online store when you&apos;re ready. I&apos;m based in Grayson County, so you talk directly to the person building it.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-6 md:mb-10">
            Common questions about <span className="italic">boutique websites</span>
          </h2>
          <div className="border-t border-brand-primary/15">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-brand-primary/15"
              >
                <details className="group">
                  <summary className="flex items-center justify-between gap-4 py-5 md:py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base md:text-lg font-bold">{faq.question}</h3>
                    <ChevronDown size={18} className="shrink-0 text-brand-primary/70 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-sm text-brand-primary/75 leading-relaxed pb-6 -mt-1 max-w-3xl">{faq.answer}</p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free audit band */}
      <FreeAuditBand
        headline={`See where your shop shows up for "boutique near me"`}
        subhead="The free local audit shows you exactly where your shop ranks across your area for the searches local shoppers actually run. No login, no sales call, just the data."
      />

      {/* Pricing */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Boutique and retail website pricing</h2>
          <p className="text-brand-primary/75 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
            Foundation sites start at <strong>$900</strong> (up to 5 pages) for shops that want to show what they carry and bring people in the door. Growth sites start at <strong>$1,800</strong> (up to 10 pages) and begin with a hands-on SEO audit, with pages for your categories and brands. Online stores start at <strong>$2,600</strong> and add secure checkout, customer accounts, and a dashboard to manage your products. Want a closer look at what goes into the price? Read the <Link href="/website-cost" className="text-emerald-800 hover:underline">website cost guide</Link>.
          </p>
          <a
            href="/#pricing"
            className="inline-flex items-center gap-2 btn-lit [--btn:var(--color-brand-primary)] hover:[--btn:#1e293b] text-white px-5 md:px-6 py-3 rounded-2xl text-sm md:text-base font-semibold"
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
            Studio 925 builds custom websites for small businesses in Leitchfield, Grayson County, and across Kentucky.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-10 border-t border-brand-primary/15">
            <Link href="/web-design-by-industry" className="group flex items-center justify-between gap-4 py-4 border-b border-brand-primary/15 font-medium text-brand-primary hover:text-emerald-800 transition-colors">
              All Industries Web Design <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
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

      {/* CTA */}
      <section className="px-6 pb-16 md:pb-20 pt-12 md:pt-16">
        <div className="max-w-4xl mx-auto text-center py-12 md:py-16 px-6 md:px-8 bg-brand-primary text-white rounded-[2.5rem]">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Ready for a website that brings shoppers through the door?</h2>
          <p className="text-white/75 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            See what I&apos;ve built for other businesses, including an online apparel store, then let&apos;s talk about your shop.
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
