'use client';

import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, Check, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

interface FaqItem {
  question: string;
  answer: string;
}

export default function ArticlePage({ faqItems }: { faqItems: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-brand-primary/50 hover:text-brand-accent transition-colors mb-6">
              <ArrowLeft size={14} /> Back to Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2.5 py-0.5 rounded-lg bg-brand-accent/10 text-brand-accent text-[10px] font-bold tracking-widest uppercase">Comparison</span>
              <span className="px-2.5 py-0.5 rounded-lg bg-brand-accent/10 text-brand-accent text-[10px] font-bold tracking-widest uppercase">Small Business</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-[1.1]">
              Wix vs Custom Website: Which Is Right for Your Small Business?
            </h1>
            <p className="text-brand-primary/50 text-sm mb-10">April 2, 2026 · 6 min read</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10">
            <img
              src="/wix-vs-custom-website-comparison.webp"
              alt="Wix vs custom website comparison — scale balancing low-cost Wix template against a custom-built website with better SEO and performance"
              width={1024}
              height={1024}
              className="w-full rounded-2xl"
              loading="eager"
            />
          </motion.div>

          {/* Intro */}
          <div className="prose-studio">
            <p className="text-base md:text-lg text-brand-primary/70 leading-relaxed mb-8">
              If you're a small business owner looking for a website, you've probably landed on Wix, Squarespace, or WordPress.com at some point. They're everywhere. They're cheap. And they promise you can build a professional website in an afternoon.
            </p>
            <p className="text-base md:text-lg text-brand-primary/70 leading-relaxed mb-8">
              Sometimes that's true. Sometimes it's not. Here's an honest breakdown of when a DIY builder makes sense and when it doesn't — so you can make the right call for <em>your</em> business.
            </p>

            {/* Cost comparison */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">The Real Cost Comparison</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              DIY platforms seem cheaper upfront, but the total cost over time is closer than you'd think. Here's what two years actually looks like:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02]">
                <h3 className="font-bold text-lg mb-4">Wix Business Plan</h3>
                <ul className="space-y-2 text-sm text-brand-primary/70">
                  <li className="flex justify-between"><span>Monthly plan</span><span className="font-semibold">$36/mo</span></li>
                  <li className="flex justify-between"><span>Domain</span><span className="font-semibold">$15/yr</span></li>
                  <li className="flex justify-between"><span>Your time building (20+ hrs)</span><span className="font-semibold">$0*</span></li>
                  <li className="flex justify-between border-t border-brand-primary/10 pt-2 mt-2"><span className="font-bold">2-year total</span><span className="font-bold">~$894</span></li>
                </ul>
                <p className="text-[11px] text-brand-primary/40 mt-3">*Your time has value too — 20 hours at $50/hr = $1,000 in opportunity cost.</p>
              </div>

              <div className="p-6 rounded-2xl border border-brand-accent/20 bg-brand-accent/[0.03]">
                <h3 className="font-bold text-lg mb-4">Custom Website <span className="text-brand-accent">(Studio 925)</span></h3>
                <ul className="space-y-2 text-sm text-brand-primary/70">
                  <li className="flex justify-between"><span>Website build</span><span className="font-semibold">$900 one-time</span></li>
                  <li className="flex justify-between"><span>Full Support hosting</span><span className="font-semibold">$49/mo</span></li>
                  <li className="flex justify-between"><span>Domain</span><span className="font-semibold text-brand-accent">Included</span></li>
                  <li className="flex justify-between border-t border-brand-primary/10 pt-2 mt-2"><span className="font-bold">2-year total</span><span className="font-bold">~$2,076</span></li>
                </ul>
                <p className="text-[11px] text-brand-primary/40 mt-3">Includes content updates, SEO improvements, backups, and ongoing support.</p>
              </div>
            </div>

            <p className="text-brand-primary/70 leading-relaxed mb-8">
              Yes, a custom website costs more. But you're not comparing the same thing. One is a tool you built yourself. The other is a tool built specifically for your business by someone who does this for a living — with ongoing support included.
            </p>

            {/* Speed and performance */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Speed and Performance</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              This is where the gap gets real. Wix and Squarespace load extra code for their drag-and-drop builders, analytics, and third-party integrations — even if you don't use them. That slows your site down.
            </p>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              Google's own data shows <strong>53% of mobile users leave a site that takes longer than 3 seconds to load.</strong> For a small business, every visitor who bounces is a potential customer lost.
            </p>

            <div className="p-6 rounded-2xl bg-brand-primary/[0.03] border border-brand-primary/5 mb-8">
              <h3 className="font-bold mb-4">Typical PageSpeed Scores</h3>
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <div className="text-2xl font-bold text-orange-500 mb-1">45–65</div>
                  <div className="text-brand-primary/50 text-xs">Wix (Mobile)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-500 mb-1">50–70</div>
                  <div className="text-brand-primary/50 text-xs">Squarespace (Mobile)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 mb-1">90–100</div>
                  <div className="text-brand-primary/50 text-xs">Custom-Built (Mobile)</div>
                </div>
              </div>
              <p className="text-[11px] text-brand-primary/40 mt-4 text-center">Based on Google PageSpeed Insights testing across multiple small business sites.</p>
            </div>

            {/* SEO */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">SEO: Getting Found on Google</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              Both Wix and custom websites <em>can</em> rank on Google. But custom websites have structural advantages that compound over time:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-brand-primary/10">
                    <th className="text-left py-3 pr-4 font-bold">SEO Factor</th>
                    <th className="text-center py-3 px-4 font-bold">Wix / Squarespace</th>
                    <th className="text-center py-3 pl-4 font-bold text-brand-accent">Custom</th>
                  </tr>
                </thead>
                <tbody className="text-brand-primary/70">
                  <tr className="border-b border-brand-primary/5"><td className="py-2.5 pr-4">Page load speed</td><td className="text-center py-2.5 px-4"><X size={14} className="inline text-red-400" /> Slower</td><td className="text-center py-2.5 pl-4"><Check size={14} className="inline text-emerald-600" /> Fast</td></tr>
                  <tr className="border-b border-brand-primary/5"><td className="py-2.5 pr-4">Clean URL structure</td><td className="text-center py-2.5 px-4"><X size={14} className="inline text-red-400" /> Limited</td><td className="text-center py-2.5 pl-4"><Check size={14} className="inline text-emerald-600" /> Full control</td></tr>
                  <tr className="border-b border-brand-primary/5"><td className="py-2.5 pr-4">Schema markup</td><td className="text-center py-2.5 px-4"><X size={14} className="inline text-red-400" /> Basic</td><td className="text-center py-2.5 pl-4"><Check size={14} className="inline text-emerald-600" /> Custom</td></tr>
                  <tr className="border-b border-brand-primary/5"><td className="py-2.5 pr-4">Core Web Vitals</td><td className="text-center py-2.5 px-4"><X size={14} className="inline text-red-400" /> Often fails</td><td className="text-center py-2.5 pl-4"><Check size={14} className="inline text-emerald-600" /> Optimized</td></tr>
                  <tr><td className="py-2.5 pr-4">Code bloat</td><td className="text-center py-2.5 px-4"><X size={14} className="inline text-red-400" /> Heavy</td><td className="text-center py-2.5 pl-4"><Check size={14} className="inline text-emerald-600" /> Lean</td></tr>
                </tbody>
              </table>
            </div>

            {/* Ownership */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Ownership: Who Actually Owns Your Website?</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              With Wix or Squarespace, you're renting. Stop paying, and your site disappears. You can't take your site's code and move it somewhere else. You're locked into their platform.
            </p>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              With a custom website from Studio 925, <strong>you own everything after final payment</strong> — the code, the design, the files. You can host it anywhere. You're never locked in.
            </p>

            {/* When DIY makes sense */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">When DIY Actually Makes Sense</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-4">
              To be fair, there are situations where Wix or Squarespace is the right call:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'You\'re testing a business idea and need something temporary',
                'Budget is genuinely under $500 total',
                'You enjoy building things yourself and have the time',
                'Your business doesn\'t depend on Google traffic',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-brand-primary/70">
                  <Check size={14} className="text-brand-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-brand-primary/70 leading-relaxed mb-6">
              But if your business depends on people finding you online — if you need your phone to ring, your inbox to fill up, and your schedule to stay booked — a custom website is the better investment.
            </p>

            {/* Bottom line */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">The Bottom Line</h2>
            <div className="p-6 md:p-8 rounded-2xl bg-brand-primary text-white mb-8">
              <p className="text-white/85 leading-relaxed">
                Wix gives you a website. A custom website gives you a <strong>business tool</strong> — one that loads fast, ranks on Google, converts visitors into customers, and actually belongs to you. For most small businesses, the difference in results pays for itself many times over.
              </p>
            </div>

            {/* FAQ */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3 mb-12">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-brand-primary/5 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-sm">{item.question}</span>
                    <ChevronDown size={16} className={`shrink-0 text-brand-primary/40 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4">
                      <p className="text-sm text-brand-primary/60 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="py-8 px-6 bg-brand-primary/[0.03] rounded-2xl border border-brand-primary/10 mb-10">
            <div className="flex items-start gap-4">
              <img
                src="/kara-gibson-small.webp"
                alt="Kara Gibson, founder of Studio 925"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover shrink-0"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-brand-primary mb-1">Kara Gibson</p>
                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  Founder of Studio 925. Custom web designer based in Leitchfield, Kentucky, building hand-coded websites for small businesses across the state.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-14 px-8 bg-brand-primary text-white rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl mb-3">Ready to upgrade from a DIY site?</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">Custom websites starting at $900. You own everything. No platform lock-in.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-3.5 rounded-2xl font-semibold hover:brightness-115 transition-all shadow-xl shadow-brand-accent/40">
              Get Started <ArrowRight size={18} />
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
