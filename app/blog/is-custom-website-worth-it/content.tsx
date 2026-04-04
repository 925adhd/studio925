'use client';

import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, ChevronDown, TrendingUp, DollarSign, Users, Calendar } from 'lucide-react';
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
              <span className="px-2.5 py-0.5 rounded-lg bg-brand-accent/10 text-brand-accent text-[10px] font-bold tracking-widest uppercase">ROI</span>
              <span className="px-2.5 py-0.5 rounded-lg bg-brand-accent/10 text-brand-accent text-[10px] font-bold tracking-widest uppercase">Small Business</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-[1.1]">
              Is a Custom Website Worth It? Here's the Math.
            </h1>
            <p className="text-brand-primary/50 text-sm mb-10">April 2, 2026 · 5 min read</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10">
            <img
              src="/custom-website-worth-it-roi.webp"
              alt="Is a custom website worth it — two business owners shaking hands in front of a laptop showing a $900 website investment with $2,400 ROI"
              width={1024}
              height={1024}
              className="w-full rounded-2xl"
              loading="eager"
            />
          </motion.div>

          <div className="prose-studio">
            {/* Intro */}
            <p className="text-base md:text-lg text-brand-primary/70 leading-relaxed mb-8">
              "Is a website really worth it?" is the most honest question a small business owner can ask. You work hard for your money. You should know exactly what you're getting and whether it'll pay off.
            </p>
            <p className="text-base md:text-lg text-brand-primary/70 leading-relaxed mb-8">
              So let's skip the sales pitch and do the actual math.
            </p>

            {/* The math */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">The $900 Question</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              Studio 925's Foundation plan costs $900. That's a real number, and for a small business, it's not pocket change. So here's the question: <strong>how many customers does your website need to bring in to pay for itself?</strong>
            </p>

            {/* ROI Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <DollarSign size={16} className="text-brand-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Contractor</span>
                </div>
                <p className="text-sm text-brand-primary/60 mb-3">Average job: $3,000</p>
                <p className="text-2xl font-bold text-brand-primary mb-1">1 customer</p>
                <p className="text-xs text-brand-primary/50">pays for the website <span className="text-emerald-600 font-semibold">3x over</span></p>
              </div>

              <div className="p-6 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <Users size={16} className="text-brand-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Salon / Barber</span>
                </div>
                <p className="text-sm text-brand-primary/60 mb-3">Average visit: $50</p>
                <p className="text-2xl font-bold text-brand-primary mb-1">18 new clients</p>
                <p className="text-xs text-brand-primary/50">pays for the website — <span className="text-emerald-600 font-semibold">and they come back</span></p>
              </div>

              <div className="p-6 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <Calendar size={16} className="text-brand-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Photographer</span>
                </div>
                <p className="text-sm text-brand-primary/60 mb-3">Average booking: $1,200</p>
                <p className="text-2xl font-bold text-brand-primary mb-1">1 booking</p>
                <p className="text-xs text-brand-primary/50">covers the website cost <span className="text-emerald-600 font-semibold">+ hosting for a year</span></p>
              </div>

              <div className="p-6 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <TrendingUp size={16} className="text-brand-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Auto Shop</span>
                </div>
                <p className="text-sm text-brand-primary/60 mb-3">Average repair: $600</p>
                <p className="text-2xl font-bold text-brand-primary mb-1">2 customers</p>
                <p className="text-xs text-brand-primary/50">pays for the website — <span className="text-emerald-600 font-semibold">plus profit</span></p>
              </div>
            </div>

            <p className="text-brand-primary/70 leading-relaxed mb-8">
              For most service businesses, <strong>your website pays for itself with a single new customer.</strong> Everything after that is pure return.
            </p>

            {/* What you're actually paying for */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">What You're Actually Paying For</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              You're not paying for "a website." You're paying for a business tool that works 24/7 to:
            </p>

            <div className="p-6 rounded-2xl bg-brand-primary/[0.03] border border-brand-primary/5 mb-8">
              <ul className="space-y-3 text-sm text-brand-primary/70">
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">1.</span><span><strong>Show up on Google</strong> when someone searches for what you do in your area</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">2.</span><span><strong>Load fast enough</strong> that they don't bounce before seeing your services</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">3.</span><span><strong>Look professional enough</strong> that they trust you over the next result</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">4.</span><span><strong>Make it easy</strong> to call, email, or fill out a form — right now, on their phone</span></li>
              </ul>
            </div>

            <p className="text-brand-primary/70 leading-relaxed mb-8">
              That's not a line item on a budget sheet. That's a revenue channel. And every month it's live, it's working for you.
            </p>

            {/* The cost of NOT having a website */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">The Cost of <em>Not</em> Having a Good Website</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              This is the part most people don't calculate. When someone Googles your type of business and finds your competitor instead of you, that's a lost customer. When someone finds your site but it's slow, outdated, or hard to navigate on their phone — they leave.
            </p>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              You'll never see those lost leads in your analytics because they never made it to your site. But your competitors will.
            </p>

            <div className="p-6 md:p-8 rounded-2xl bg-brand-primary text-white mb-8">
              <p className="text-white/85 leading-relaxed text-center">
                <strong className="text-lg">The real question isn't "can I afford a website?"</strong><br />
                <span className="text-white/65 text-sm">It's "how many customers am I losing without one?"</span>
              </p>
            </div>

            {/* Year one math */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Year One: The Full Picture</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              Here's what a realistic first year looks like for a service business with a $900 Foundation website and $49/month Full Support:
            </p>

            <div className="p-6 rounded-2xl border border-brand-primary/10 bg-white mb-8">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-brand-primary/70"><span>Website build</span><span className="font-semibold">$900</span></div>
                <div className="flex justify-between text-brand-primary/70"><span>12 months Full Support</span><span className="font-semibold">$588</span></div>
                <div className="flex justify-between font-bold text-brand-primary border-t border-brand-primary/10 pt-3 mt-3"><span>Total investment</span><span>$1,488</span></div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-primary/5">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-primary/40 mb-3">If your website brings in just...</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-brand-primary/70"><span>1 customer/month at $500 avg</span><span className="font-semibold text-emerald-600">$6,000/yr revenue</span></div>
                  <div className="flex justify-between text-brand-primary/70"><span>2 customers/month at $500 avg</span><span className="font-semibold text-emerald-600">$12,000/yr revenue</span></div>
                  <div className="flex justify-between text-brand-primary/70"><span>1 customer/month at $2,000 avg</span><span className="font-semibold text-emerald-600">$24,000/yr revenue</span></div>
                </div>
                <p className="text-[11px] text-brand-primary/40 mt-3">Even the most conservative scenario delivers 4x return on your website investment.</p>
              </div>
            </div>

            {/* Bottom line */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">The Bottom Line</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              A custom website isn't an expense — it's the lowest-cost employee you'll ever hire. It shows up every day, never calls in sick, and works nights, weekends, and holidays. For $900, that's a bargain.
            </p>

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

          {/* CTA */}
          <div className="text-center py-14 px-8 bg-brand-primary text-white rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl mb-3">The math works. Let's build it.</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">Custom websites starting at $900. No templates, no hourly billing. You own everything.</p>
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
