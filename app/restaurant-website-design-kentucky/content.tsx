'use client';

import { motion } from 'motion/react';
import { ArrowRight, Check, ChevronDown, UtensilsCrossed, Code, Search, Smartphone, Zap } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import FreeAuditBand from '../../src/components/FreeAuditBand';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Service"],
  "name": "Studio 925: Restaurant Website Design in Kentucky",
  "url": "https://studio925.design/restaurant-website-design-kentucky",
  "email": "kara@studio925.design",
  "telephone": "+1-270-551-2210",
  "description": "Custom website design for restaurants in Kentucky. Text menus Google can read, accurate hours, directions, and order buttons built for customers deciding on their phone.",
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
  "serviceType": ["Restaurant Website Design", "Cafe Website Design", "Food Truck Website Design", "Web Design", "Local SEO"],
  "priceRange": "$$",
  "knowsAbout": ["Restaurant Websites", "Online Menu Design", "Cafe Website Design", "Catering Website Design", "Small Business Website Design", "Local SEO"]
};

const included = [
  { text: 'Custom homepage built around your restaurant, not a template', icon: Code },
  { text: 'Built for phones first, since that\'s where people decide where to eat', icon: Smartphone },
  { text: 'Fast load times, even on a weak cell signal', icon: Zap },
  { text: 'On-page SEO structure built for local search', icon: Search },
];

const includedMore = [
  'Tap-to-call phone number on every page',
  'Menu written as real text, not a photo or PDF',
  'Hours and directions with a Google Maps link',
  'Order Online button linked to your ordering system',
  'Google Search Console submission',
  'Full ownership of all files',
];

const customerSearches = [
  { query: '"restaurants near me"', intent: 'Hungry now. Picking from whatever shows up.' },
  { query: '"breakfast [your town]"', intent: 'Wants to know who\'s open and what they serve.' },
  { query: '"pizza delivery near me"', intent: 'Ready to order. Needs a number or an order link.' },
  { query: '"[your restaurant] menu"', intent: 'Already knows you. Checking prices before coming in.' },
  { query: '"catering Grayson County"', intent: 'Planning an event. Bigger order, comparing options.' },
  { query: '"restaurants open now"', intent: 'Late night or Sunday. Your hours have to be right.' },
];

const restaurantPages = [
  { title: 'Homepage', text: 'Hours, address, phone, and an Order or Call button right at the top. Most visitors came for one of those four things.' },
  { title: 'Menu page', text: 'Written as real text, not a photo or a PDF. Easy to read on a phone, easy to update when prices change, and every dish on it can show up in search.' },
  { title: 'Hours and location', text: 'A map, parking notes, and holiday hours. This is the page people check right before they get in the car.' },
  { title: 'Order online or call ahead', text: 'A button that goes straight to your ordering system or your phone. If you already use Square, Toast, or something similar, it links right there.' },
  { title: 'Catering and private events', text: 'The page that brings in the big orders. What you cater, how many people you can feed, and a simple request form.' },
  { title: 'About and reviews', text: 'Your story, who\'s cooking, and what your regulars say. People like knowing there\'s a real person behind the food.' },
];

const faqs = [
  {
    question: 'How much does a restaurant website cost in Kentucky?',
    answer: 'Most restaurants do well on the Foundation plan ($900, up to 5 pages): homepage, menu, hours and location, catering, and about. If you have more than one location, separate menus for breakfast, lunch, and dinner, or you want catering and events to compete in search on their own, the Growth plan ($1,800, up to 10 pages) is the better fit. Growth starts with a hands-on SEO audit so the site is built around how people in your area actually search. Need a page or two more than your plan includes? Extra pages are $75 each. Every project includes full ownership of your files.',
  },
  {
    question: 'Do I need a website if I already have Facebook and a Google listing?',
    answer: 'Your Google Business Profile matters a lot for restaurants, and you should keep it up to date. Facebook can show up when someone searches your restaurant by name. A website adds the piece neither one does well: a full menu Google can read, a place your Google listing can link to that you control, and a spot where your hours, specials, and catering info live without fighting a news feed. The listing gets people to look. The website helps them decide.',
  },
  {
    question: 'Should my menu be a PDF or a photo?',
    answer: 'No. A PDF or photo of your menu is hard to read on a phone, and Google reads plain text on a page far more reliably when matching searches like "catfish near me" or "gluten free pizza." A menu written as real text on the page loads fast, reads well on any screen, and lets every dish show up in search. I build it as text and keep the look clean.',
  },
  {
    question: 'Can I update my menu and specials myself?',
    answer: 'On the Growth plan, you get a simple editor so you can change menu items and prices yourself. On the Full Support hosting plan, just text me the change and I\'ll update it, usually within a business day. Either way, you are never stuck waiting weeks for a price change.',
  },
  {
    question: 'Can customers order online through my website?',
    answer: 'Yes. If you already use an ordering system like Square or Toast, I add an Order Online button to every page that goes straight to it. That way more orders come through your own system instead of a delivery app that charges a commission on each one. If you don\'t have an ordering system yet, I can walk you through the options.',
  },
  {
    question: 'Will my restaurant show up when people search "restaurants near me"?',
    answer: 'The map results for "near me" searches lean heavily on your Google Business Profile, your reviews, and how close someone is. Your website supports all of that. When your listing links to a fast site with the same hours, the same address, and a real menu, it gives Google and your customers more reasons to trust you. Every site I build includes on-page SEO, schema markup, and Google Search Console submission. If you want to see where you rank today, the free local audit on this page maps it out.',
  },
  {
    question: 'Do I have to write everything and take the photos?',
    answer: 'No. Send me your menu (a photo of the paper one is fine), a few pictures of your food and dining room from your phone, and walk me through your story on a quick call. I handle the writing and layout. Tip for phone photos: shoot near a window in daylight. Natural light beats any filter. You review and approve everything before it goes live.',
  },
  {
    question: 'How long does it take to build a restaurant website?',
    answer: 'You will have a working draft within 48 hours of our first conversation. Most restaurant sites launch within 1 to 2 weeks after revisions. You review every page before it goes live, and revisions are included until you are happy.',
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
    { '@type': 'ListItem', position: 2, name: 'Restaurant Website Design in Kentucky', item: 'https://studio925.design/restaurant-website-design-kentucky' },
  ],
};

export default function RestaurantContent() {
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
            src="/restaurant-cook-kitchen-kentucky.webp"
            alt="Cook seasoning a row of plated dishes in a busy restaurant kitchen"
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
              <UtensilsCrossed size={12} className="shrink-0" /> Restaurants &amp; Food · Kentucky
            </div>
            <h1 className="text-3xl md:text-6xl mb-4 md:mb-6 leading-[1.1] text-white">
              Website Design for <span className="italic text-brand-accent">Restaurants</span> in Kentucky
            </h1>
            <p className="text-base md:text-xl text-white/85 max-w-xl leading-relaxed">
              Custom restaurant websites for diners, cafes, pizza places, food trucks, and family restaurants across Kentucky. Built so hungry people can find your menu, your hours, and your front door in under a minute.
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

      {/* Why restaurants need a real website */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
          >
            <h2 className="text-2xl md:text-4xl mb-6 md:mb-8">
              Why Kentucky restaurants need a <span className="italic text-brand-accent">real website</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              { title: 'Hungry people decide fast', text: 'Someone searching "lunch near me" is looking at three or four places at once. If your menu won\'t load or your hours are missing, they pick the next one. A real site answers what you serve, when you\'re open, where you are, and how to order before they have to scroll.' },
              { title: 'A menu photo is hard to read', text: 'Lots of restaurants post a picture of the menu or a PDF. Those are tough to read on a phone, and Google matches plain text to searches like "catfish near me" much more reliably. A menu written as real text can show up for every dish on it.' },
              { title: 'Apps and Facebook aren\'t yours', text: 'Delivery apps help people find you, but they charge a commission on every order and the customer belongs to the app. Facebook shows up when people search your name, but your menu gets buried under posts. Your own site keeps the customer coming back to you.' },
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

      {/* Photo break — server shot with statement */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-auto md:min-h-[28rem]">
            <img
              src="/waitress-serving-pizza-cafe.webp"
              alt="Server bringing a pizza to a customer's table at a casual restaurant"
              className="absolute inset-0 w-full h-full object-cover object-[center_45%]"
            />
          </div>
          <div className="bg-brand-primary text-white px-6 py-12 md:px-12 md:py-20 flex items-center">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3 md:mb-4">The gap most restaurant sites miss</p>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-5 leading-tight">
                Most restaurant websites hide the menu inside a PDF.
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                On a phone, that means pinching and zooming in a parking lot. The restaurants that win the quick decision put the menu, the hours, and a tap-to-call button right where a hungry person&apos;s thumb lands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What customers actually search for — with phone photo */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
                What people search for when they&apos;re <span className="italic text-brand-accent">hungry</span>
              </h2>
              <p className="text-brand-primary/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Each of these is a search your restaurant can show up for. Some are about food, some are about timing, and one is about you by name. A good site has an answer ready for every one.
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

            {/* Phone search photo callout */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
              className="hidden md:block w-72 shrink-0 sticky top-24"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-brand-primary/10 border border-brand-primary/5">
                <img
                  src="/customer-searching-restaurant-on-phone.webp"
                  alt="Customer looking up a restaurant on her phone at a cafe table"
                  className="w-full h-72 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-xs uppercase tracking-widest text-emerald-800 font-semibold mb-1.5">Hours note</p>
                  <p className="text-sm text-brand-primary/80 leading-relaxed">
                    The hours on your website should match your Google listing exactly. When they don&apos;t, someone drives over to a locked door, and that&apos;s a review you don&apos;t want.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pages your restaurant site should have — with menu photo */}
      <section className="py-16 md:py-24 px-6 bg-brand-primary/[0.03] border-t border-brand-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
                Pages your restaurant website should <span className="italic text-brand-accent">actually have</span>
              </h2>
              <p className="text-brand-primary/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                A restaurant site doesn&apos;t need to be big. It needs to answer four questions fast: what do you serve, when are you open, where are you, and how do I order. These pages cover all four, plus the one that brings in catering money.
              </p>
              <div className="space-y-3 md:space-y-4">
                {restaurantPages.map((p, i) => (
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

            {/* Menu photo callout */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
              className="hidden md:block w-72 shrink-0 sticky top-24"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-brand-primary/10 border border-brand-primary/5">
                <img
                  src="/friends-reading-cafe-menu.webp"
                  alt="Two friends at a cafe table looking over a menu and a phone together"
                  className="w-full h-96 object-cover"
                />
                <div className="p-4 bg-white">
                  <p className="text-xs uppercase tracking-widest text-emerald-800 font-semibold mb-1.5">Menu tip</p>
                  <p className="text-sm text-brand-primary/80 leading-relaxed">
                    Put your best sellers near the top of the menu page with a short line about each. Those are the dishes people search for by name, and the ones they&apos;ll order.
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
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">What&apos;s included in every restaurant website</h2>
          <p className="text-white/75 mb-8 md:mb-12 max-w-2xl text-sm md:text-base leading-relaxed">
            Every restaurant site I build includes the core pieces a hungry customer needs to find you, decide on you, and walk through your door.
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
          <p className="text-brand-primary/75 text-sm md:text-lg leading-relaxed">
            A lot of restaurant sites come from templates with a big photo slider and the menu buried in a PDF. Studio 925 sites are custom-coded so the menu, hours, and order button load first on a phone. I&apos;m based in Grayson County, so when your holiday hours change, you just text me. No account managers, no runaround.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-6 md:mb-10">
            Common questions about <span className="italic text-brand-accent">restaurant websites</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "100% 0px 100% 0px" }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl bg-white border border-brand-primary/5"
              >
                <details className="group">
                  <summary className="flex items-center justify-between gap-4 p-5 md:p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="text-sm md:text-base font-bold">{faq.question}</h3>
                    <ChevronDown size={18} className="shrink-0 text-brand-primary/70 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-sm text-brand-primary/75 leading-relaxed px-5 md:px-6 pb-5 md:pb-6 -mt-1">{faq.answer}</p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free audit band */}
      <FreeAuditBand
        headline={`See where your restaurant shows up for "restaurants near me"`}
        subhead="The free local audit shows you exactly where your restaurant ranks across your area for the searches hungry customers actually run. No login, no sales call, just the data."
      />

      {/* Pricing */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6">Restaurant website pricing</h2>
          <p className="text-brand-primary/75 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
            Foundation sites start at <strong>$900</strong> (up to 5 pages), which covers most restaurants: homepage, menu, hours and location, catering, and about. Growth sites start at <strong>$1,800</strong> (up to 10 pages) and begin with a hands-on SEO audit. That&apos;s the better fit if you have more than one location, separate menus, or catering and events you want to rank on their own. Want a closer look at what goes into the price? Read the <Link href="/website-cost" className="text-emerald-800 hover:underline">website cost guide</Link>.
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
            Studio 925 builds custom websites for small businesses in Leitchfield, Grayson County, and across Kentucky.
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
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">Ready for a website that helps fill more tables?</h2>
          <p className="text-white/75 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            See what I&apos;ve built for other Kentucky businesses, then let&apos;s talk about your restaurant.
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
