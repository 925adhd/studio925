'use client';

import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import { trackEvent } from '../../src/lib/gtag';

const plans = [
  {
    name: 'Basic Hosting',
    price: '25',
    features: [
      'Website hosting',
      'Secure backups',
      'Keeps your website live and online',
    ],
    featured: false,
    cta: 'Start Basic Hosting',
    stripeLink: 'https://buy.stripe.com/9B6cN79kn2Lm8gs8yscIE01',
  },
  {
    name: 'Full Support',
    price: '49',
    features: [
      'Hosting & support:',
      'Secure hosting, backups, and performance monitoring',
      'Ongoing SEO — one new service page or two blog posts per month, plus meta tag and indexing upkeep',
      '63-point local rank rescan every month',
      'Domain & setup:',
      'Free custom domain~',
      'DNS, email routing, and SSL included',
      'Updates & support:',
      'Text, images, and layout changes — just message me',
      'Priority support — I respond first',
      'Market exclusivity — no other SEO clients in your niche and market',
    ],
    featured: true,
    cta: 'Get Full Support',
    stripeLink: 'https://buy.stripe.com/14A5kFeEHgCceEQcOIcIE00',
  },
];

export default function HostingSupportPage() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="pt-24 pb-20 px-6 md:pt-32">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-14">
          <h1 className="text-3xl md:text-4xl mb-3 md:mb-4">
            Hosting <span className="italic text-brand-accent">& Support</span>
          </h1>
          <p className="text-sm md:text-base text-brand-primary/60 leading-relaxed max-w-lg mx-auto">
            You own your website. Choose whether you want to manage it yourself or have everything handled.
          </p>
        </div>

        {/* Plans */}
        <div className="max-w-5xl mx-auto mb-20 md:mb-28">
          <div className="grid sm:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 md:p-8 rounded-3xl border flex flex-col ${
                  plan.featured
                    ? 'border-brand-accent/30 bg-brand-accent/[0.03]'
                    : 'border-brand-primary/10 bg-white'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-6 bg-brand-accent text-white px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
                    Most Popular
                  </span>
                )}

                <h3 className="text-lg md:text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-5 md:mb-6">
                  <span className="text-3xl font-serif font-bold italic">${plan.price}</span>
                  <span className="text-sm text-brand-primary/50">/month</span>
                </div>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) =>
                    feature.endsWith(':') ? (
                      <li key={feature} className="text-xs font-bold uppercase tracking-widest pt-1 text-brand-primary/30">
                        {feature}
                      </li>
                    ) : feature.endsWith('~') ? (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="text-brand-accent mt-0.5 shrink-0" />
                        <span className="text-brand-primary/80">
                          {feature.slice(0, -1)}
                          <span className="ml-2 inline-block text-[10px] font-bold uppercase tracking-widest bg-brand-accent/10 text-brand-accent px-2 py-0.5 rounded-full">Included</span>
                        </span>
                      </li>
                    ) : (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="text-brand-accent mt-0.5 shrink-0" />
                        <span className="text-brand-primary/80">{feature}</span>
                      </li>
                    )
                  )}
                </ul>

                <div className="mt-7 md:mt-8">
                  <a
                    href={plan.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('click_hosting_plan', plan.name)}
                    className={`block w-full py-3.5 rounded-2xl font-bold text-center transition-all ${
                      plan.featured
                        ? 'bg-brand-accent text-white hover:bg-brand-accent/90'
                        : 'border-2 border-brand-primary/20 text-brand-primary hover:border-brand-primary/40'
                    }`}
                  >
                    {plan.cta}
                  </a>
                  {plan.featured ? (
                    <p className="text-center text-xs text-brand-primary/40 mt-3">
                      Most clients choose this for peace of mind
                    </p>
                  ) : (
                    <p className="text-center text-xs text-brand-primary/40 mt-3">
                      Updates and content changes are not included in Basic Hosting.
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs md:text-sm text-brand-primary/40 mt-8">
            Full Support includes a free custom domain for as long as your plan is active. Basic Hosting clients purchase their own domain — I'll help you connect it either way.
          </p>
          <p className="text-center text-xs text-brand-primary/30 mt-3">
            Cancel anytime. You own your website files and domain — full details in our <a href="/terms-of-service#hosting" className="text-brand-accent hover:underline">terms</a>.
          </p>
        </div>

        {/* Who This Is For */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xl md:text-3xl mb-4 md:mb-6">Who This Is For</h2>
          <ul className="space-y-3">
            {[
              'Businesses who had their website built by Studio 925',
              'Businesses who want updates and backups handled',
              "Businesses who don't want to deal with technical website management",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm md:text-base text-brand-primary/70">
                <Check size={18} className="text-brand-accent mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Why I Only Host Websites I Build */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xl md:text-3xl mb-3 md:mb-4">Why I Only Host Websites I Build</h2>
          <p className="text-sm md:text-base text-brand-primary/60 leading-relaxed">
            I only host websites I build so I can maintain speed, security, and reliability. This allows me to properly support and maintain every website I manage because I know exactly how everything is built and structured.
          </p>
        </div>

        {/* What's Actually Included */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xl md:text-3xl mb-4 md:mb-6">What Hosting and Support Actually Cover</h2>
          <div className="space-y-5 text-sm md:text-base text-brand-primary/70 leading-relaxed">
            <p>
              <strong className="text-brand-primary">Hosting</strong> means your website lives on a fast, secure server and stays online 24/7. That includes the server space, the SSL certificate that puts the lock icon next to your URL, automatic daily backups, and the underlying infrastructure that keeps your site loading quickly when someone visits.
            </p>
            <p>
              <strong className="text-brand-primary">Support</strong>{' '}is the human side. When you need to update your hours, swap out a photo, fix a typo, add a new service, or change your phone number, you message me and it gets done. No logging into a builder, no learning a CMS, no &quot;I&apos;ll get to it next month.&quot; Most small edits are turned around within a business day.
            </p>
            <p>
              On top of that, Full Support includes ongoing SEO work — adding new service pages and blog posts that target the searches your customers are actually making, keeping your meta tags accurate, and making sure your sitemap stays current and indexed on Google. You also get a 63-point local rank rescan every month, so you can see how your visibility on Google is changing block by block. As your business changes, your website changes with it.
            </p>
          </div>
        </div>

        {/* Common Questions */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xl md:text-3xl mb-4 md:mb-6">Common Questions</h2>
          <div className="space-y-6 text-sm md:text-base text-brand-primary/70 leading-relaxed">
            <div>
              <h3 className="font-semibold text-brand-primary mb-2">Do I have to sign a contract?</h3>
              <p>No. Hosting and support are month-to-month. You can cancel anytime and your website files belong to you.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-primary mb-2">What happens if I cancel?</h3>
              <p>You keep your website files and your domain. I&apos;ll help you move to another host if you ever decide to go that route — no hostage situations.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-primary mb-2">How fast are content updates?</h3>
              <p>Most small updates (text changes, swapping a photo, updating hours) are done within one business day. Bigger requests like adding a new page or section may take longer, but you&apos;ll always get a clear timeline.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-primary mb-2">What if my website goes down?</h3>
              <p>I monitor uptime and get notified automatically if anything goes wrong. In the rare event of an issue, I work to get your site back online as quickly as possible — usually before you even notice.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-primary mb-2">Can I switch between plans?</h3>
              <p>Yes. You can move from Basic Hosting to Full Support (or back) at any time. Just send me a message and I&apos;ll handle the change.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-primary mb-2">Will you do SEO for my competitor too?</h3>
              <p>No. My ongoing SEO clients get market exclusivity — I only do active SEO work for one business per niche per area. A competitor can still host with me or have a site built, since that&apos;s not ranking work. If a competitor ever wants updates without SEO, I&apos;d talk to my exclusive client first before taking it on.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg text-brand-primary/60 mb-5">Need a website first?</p>
          <Link
            href="/#pricing"
            onClick={() => trackEvent('click_view_packages', 'hosting_page')}
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-7 py-3.5 rounded-2xl font-semibold hover:bg-brand-primary/90 transition-all"
          >
            View Website Packages <ArrowRight size={18} />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
