import { motion } from 'motion/react';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

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

export default function GraysonCountyPage() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <SEO
        title="Web Design in Grayson County, KY | Studio 925"
        description="Professional web design for small businesses in Grayson County, Kentucky. Custom-built websites that bring in real customers and grow your business."
        path="/web-design-grayson-county-ky"
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
              <MapPin size={12} className="shrink-0" /> Grayson County, KY
            </div>
            <h1 className="text-4xl md:text-6xl mb-6 leading-[1.1]">
              Web Design Services in <span className="italic text-brand-accent">Grayson County, Kentucky</span>
            </h1>
            <p className="text-xl text-brand-primary/70 max-w-2xl leading-relaxed">
              Custom website design built for local service providers, contractors, and small businesses in Grayson County, Leitchfield, and the surrounding Kentucky communities.
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

        {/* Who This Is For */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl mb-6">Who this is for</h2>
          <p className="text-brand-primary/70 text-lg leading-relaxed mb-6">
            If you run a local business in Grayson County and you don't have a website, or your current one is outdated, slow, or hard to update, this is for you. I work with:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 text-brand-primary/80">
            {[
              'Contractors & tradespeople',
              'Local service providers',
              'Retail shops and boutiques',
              'Restaurants and food businesses',
              'Healthcare and wellness providers',
              'Real estate professionals',
              'Nonprofits and community organizations',
              'Any small business ready to grow',
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
          <h2 className="text-3xl md:text-4xl mb-6">What's included</h2>
          <p className="text-brand-primary/70 mb-8 leading-relaxed">
            Every website I build includes everything you need to launch professionally and start generating inquiries. No hidden fees. No shortcuts.
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

        {/* Why Local Businesses Need Professional Web Design */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl mb-6">
            Why local businesses need professional web design
          </h2>
          <div className="space-y-6 text-brand-primary/70 text-lg leading-relaxed">
            <p>
              When someone in Leitchfield searches for a plumber, a contractor, or a place to eat, they're going to Google first. If your business doesn't have a website, or has one that looks outdated, they're going to call someone else.
            </p>
            <p>
              A well-built website signals trust. It tells potential customers that you're serious about your business, that you're easy to contact, and that you're the right choice. That matters in a small community where reputation is everything.
            </p>
            <p>
              In Grayson County, word travels fast. Your website should reinforce your reputation, not weaken it.
            </p>
            <p>
              Beyond appearance, a well-built website performs. Fast load times, clear navigation, and strong calls to action turn visitors into inquiries. That's the difference between a site that just exists and one that actively grows your business.
            </p>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl mb-6">Pricing overview</h2>
          <p className="text-brand-primary/70 text-lg leading-relaxed mb-8">
            Website projects start at <strong>$1,200</strong> for a clean, professional Foundation site and scale into Growth or Membership plans depending on your needs — whether that's expanded service pages, content systems, or secure payments. Every project includes full ownership of your files and a complete launch.
          </p>
          <a
            href="/#pricing"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl font-semibold hover:scale-[1.02] transition-transform"
          >
            See Full Pricing <ArrowRight size={18} />
          </a>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto text-center py-16 px-8 bg-brand-primary text-white rounded-[2.5rem]">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to grow your Grayson County business online?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation and let's talk about your goals, your customers, and what a great website can do for your business.
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
