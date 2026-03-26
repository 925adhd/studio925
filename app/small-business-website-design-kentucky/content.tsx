'use client';

import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

const reasons = [
  'Most customers search online before calling any business',
  'A well-built site builds immediate credibility and trust',
  'Well-built sites appear in local Google searches',
  'Clear calls to action convert visitors into real leads',
  'Mobile-responsive design reaches customers on every device',
  'Speed and performance directly impact search rankings',
];

export default function KentuckyContent() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20 px-6">

        {/* Hero */}
        <section className="max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl mb-6 leading-[1.1]">
              Small Business Website Design in <span className="italic text-brand-accent">Kentucky</span>
            </h1>
            <p className="text-xl text-brand-primary/70 max-w-2xl leading-relaxed">
              Studio 925 builds custom websites for small businesses across Kentucky — from Grayson County to Louisville and everywhere in between. Fast, strategic, and built around your specific customers.
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
                See Pricing
              </a>
            </div>
          </motion.div>
        </section>

        {/* What Small Businesses in Kentucky Need */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl mb-6">What small businesses in Kentucky need from a website</h2>
          <div className="space-y-6 text-brand-primary/70 text-lg leading-relaxed">
            <p>
              Running a small business in Kentucky comes with its own challenges: tight margins, strong local competition, and customers who already know their neighbors. Your website needs to do more than look nice. It needs to make you easy to find, easy to contact, and easy to trust.
            </p>
            <p>
              You get a website that's fast, clear, and built around your specific customers — not a generic template that looks like everyone else.
            </p>
            <p>
              Whether you're a solo operator in a small county or a growing business in a larger market, the principles are the same: clear messaging, strong design, and a site that actually performs.
            </p>
            <p>
              Based in Grayson County, I work directly with business owners — no outsourcing, no middle layers.
            </p>
          </div>
        </section>

        {/* Why Professional Web Design Matters */}
        <section className="max-w-4xl mx-auto mb-24 p-8 md:p-12 glass rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl mb-6">Why professional web design matters for Kentucky small businesses</h2>
          <ul className="space-y-4">
            {reasons.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={18} className="text-brand-accent mt-0.5 shrink-0" />
                <span className="text-brand-primary/80 text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-brand-primary/70 text-lg leading-relaxed">
            The goal isn't just a website. It's more calls, more inquiries, and more booked work.
          </p>
        </section>

        {/* What We Build */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl mb-6">What we build</h2>
          <p className="text-brand-primary/70 text-lg leading-relaxed mb-6">
            Every website I build is created from scratch. No page builders. No generic templates. You get a custom design built around your brand and structured to support real results.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Service Business Sites', desc: 'Clear, conversion-focused websites for contractors, service providers, and professionals who need more calls and booked work.' },
              { title: 'Local Business Websites', desc: 'Websites designed to help local customers find you, trust you, and contact you quickly.' },
              { title: 'E-commerce Stores', desc: 'Online stores with secure Stripe checkout and a streamlined customer experience.' },
              { title: 'Growth-Focused Sites', desc: 'Websites structured to attract more customers, with built-in analytics and clear paths for capturing leads.' },
            ].map((item) => (
              <div key={item.title} className="p-6 glass rounded-2xl">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-brand-primary/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl mb-6">Serving local businesses across Kentucky</h2>
          <p className="text-brand-primary/70 text-lg leading-relaxed mb-6">
            Whether you're in Louisville, Bowling Green, Elizabethtown, or a small rural county — the goal is the same: a website that makes your business easy to find, easy to trust, and easy to contact.
          </p>
          <p className="text-brand-primary/70 text-lg leading-relaxed">
            I'm based in Grayson County and work directly with business owners across Western and Central Kentucky. No agency overhead. No outsourcing. Just focused work on your site.
          </p>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto text-center py-16 px-8 bg-brand-primary text-white rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl mb-4">Let's build something that works for your Kentucky business.</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            No pressure, no sales pitch. Just a conversation about your goals and how a great website can move your business forward.
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
