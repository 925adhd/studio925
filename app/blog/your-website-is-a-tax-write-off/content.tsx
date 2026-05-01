'use client';

import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, ChevronDown, Receipt, PiggyBank, FileText, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import BlogAuditCTA from '../../../src/components/BlogAuditCTA';

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
              <span className="px-2.5 py-0.5 rounded-lg bg-brand-accent/10 text-brand-accent text-[10px] font-bold tracking-widest uppercase">Tax Tips</span>
              <span className="px-2.5 py-0.5 rounded-lg bg-brand-accent/10 text-brand-accent text-[10px] font-bold tracking-widest uppercase">Small Business</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-[1.1]">
              Your Website Is a Tax Write-Off. Here's What to Know
            </h1>
            <p className="text-brand-primary/50 text-sm mb-10">April 4, 2026 · 4 min read</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10">
            <img
              src="/small-business-website-tax-write-off.webp"
              alt="Small business website tax write-off, laptop showing tax deduction form next to a small business storefront and piggy bank"
              width={1024}
              height={1024}
              className="w-full rounded-2xl"
              loading="eager"
            />
          </motion.div>

          <div className="prose-studio">
            {/* Intro */}
            <p className="text-base md:text-lg text-brand-primary/70 leading-relaxed mb-8">
              If you're a small business owner, here's something you might not know: <strong>the money you spend on your business website may be tax-deductible as a business expense.</strong> In most cases, that means you can subtract it from your taxable income, putting real money back in your pocket.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/60 mb-8">
              <p className="text-sm text-amber-900/80 leading-relaxed">
                <strong>Heads up:</strong> This article is for general information only and is not tax advice. Every business is different. Always consult a qualified tax professional or accountant before making tax decisions.
              </p>
            </div>

            {/* How it works */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">How It Works</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              The IRS generally treats a business website as a legitimate business expense. Depending on the size and complexity of your project, there are usually two ways it can be handled:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <Receipt size={16} className="text-brand-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Business Expense</span>
                </div>
                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  A simple business website is often deducted as a <strong>business expense in the year you paid for it</strong>. This is the most common route for smaller informational sites.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <FileText size={16} className="text-brand-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Software / Asset</span>
                </div>
                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  Larger projects with accounts, dashboards, or e-commerce may be treated more like <strong>software or a business asset</strong> and deducted over time. Your accountant can advise which method fits.
                </p>
              </div>
            </div>

            <p className="text-brand-primary/70 leading-relaxed mb-8">
              Either way, it reduces your taxable income, which means you pay less in taxes. Your tax professional can tell you which option makes the most sense for your business.
            </p>

            {/* What you can deduct */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">What Can You Typically Deduct?</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              It's not just the website build itself. Most business-related web expenses are potentially deductible:
            </p>

            <div className="p-6 rounded-2xl bg-brand-primary/[0.03] border border-brand-primary/5 mb-8">
              <ul className="space-y-3 text-sm text-brand-primary/70">
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">1.</span><span><strong>Website design & development:</strong> the cost of building your site</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">2.</span><span><strong>Domain name registration:</strong> your .com or other domain</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">3.</span><span><strong>Hosting fees:</strong> monthly or annual hosting costs</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">4.</span><span><strong>Maintenance & updates:</strong> ongoing support and changes</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">5.</span><span><strong>SSL certificates:</strong> security for your site</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">6.</span><span><strong>SEO services:</strong> work done to help your site rank on Google</span></li>
              </ul>
            </div>

            <p className="text-brand-primary/70 leading-relaxed mb-8">
              Keep your receipts and invoices. Your accountant will need them to claim the deduction properly.
            </p>

            {/* Real example */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">What This Looks Like in Real Numbers</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              Let's say you're a small business owner in the 22% tax bracket and you invest in a $900 Foundation website plus a year of hosting:
            </p>

            <div className="p-6 rounded-2xl border border-brand-primary/10 bg-white mb-4">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-brand-primary/70"><span>Website build</span><span className="font-semibold">$900</span></div>
                <div className="flex justify-between text-brand-primary/70"><span>12 months hosting ($49/mo)</span><span className="font-semibold">$588</span></div>
                <div className="flex justify-between font-bold text-brand-primary border-t border-brand-primary/10 pt-3 mt-3"><span>Total deductible amount</span><span>$1,488</span></div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-primary/5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <PiggyBank size={16} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Potential tax savings</p>
                    <p className="text-2xl font-bold text-emerald-600">~$327</p>
                  </div>
                </div>
                <p className="text-xs text-brand-primary/50">At the 22% bracket. Your actual savings depend on your tax situation. Ask your accountant for your specific number.</p>
              </div>
            </div>

            <p className="text-brand-primary/70 leading-relaxed mb-8">
              That's money back in your pocket just for investing in something your business already needs. And the website is also <Link href="/blog/is-custom-website-worth-it" className="text-brand-accent underline underline-offset-2 hover:text-brand-accent/80 transition-colors">bringing in new customers on top of that</Link>.
            </p>

            {/* Callout */}
            <div className="p-6 md:p-8 rounded-2xl bg-brand-primary text-white mb-8">
              <p className="text-white/85 leading-relaxed text-center">
                <strong className="text-lg">Your website isn't just a business tool. It's a business deduction.</strong><br />
                <span className="text-white/65 text-sm">Invest in your business. Write it off. Keep more of what you earn.</span>
              </p>
            </div>

            {/* Tips */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Quick Tips to Make the Most of It</h2>

            <div className="p-6 rounded-2xl bg-brand-primary/[0.03] border border-brand-primary/5 mb-8">
              <ul className="space-y-3 text-sm text-brand-primary/70">
                <li className="flex items-start gap-3">
                  <ShieldCheck size={16} className="text-brand-accent mt-0.5 shrink-0" />
                  <span><strong>Keep every invoice and receipt.</strong> Your website build, hosting payments, domain renewals, all of it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck size={16} className="text-brand-accent mt-0.5 shrink-0" />
                  <span><strong>Pay from a business account.</strong> Makes it easier to track and prove the expense.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck size={16} className="text-brand-accent mt-0.5 shrink-0" />
                  <span><strong>Talk to your tax professional.</strong> They'll tell you exactly how to claim it and which method saves you the most.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck size={16} className="text-brand-accent mt-0.5 shrink-0" />
                  <span><strong>Don't wait until tax season.</strong> Invest now and deduct it this year.</span>
                </li>
              </ul>
            </div>

            {/* Bottom line */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">The Bottom Line</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              You need a website for your business, and in most cases the cost can be deducted as a business expense. That makes a $900 website even more affordable than it already is. Talk to your accountant, keep your receipts, and put your website to work for your customers <em>and</em> your tax return.
            </p>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              If you&apos;re still in the hiring stage, <Link href="/blog/what-to-look-for-in-a-local-web-designer" className="text-brand-accent hover:underline">what to look for in a local web designer</Link> walks through the questions to ask before signing anything.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/60 mb-8">
              <p className="text-sm text-amber-900/80 leading-relaxed">
                <strong>Reminder:</strong> This article is general information, not tax advice. Tax laws change and every situation is different. Please consult a qualified tax professional or CPA before claiming any deductions.
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
                  Founder of Studio 925. Custom web designer based in Leitchfield, Kentucky, building custom websites for small businesses across the state.
                </p>
              </div>
            </div>
          </div>

          <BlogAuditCTA />

          {/* CTA */}
          <div className="text-center py-14 px-8 bg-brand-primary text-white rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl mb-3">Invest in your business. Write it off.</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">Custom websites starting at $900. No templates, no hourly billing. You own everything.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-3.5 rounded-2xl font-semibold hover:brightness-115 transition-all shadow-xl shadow-brand-accent/40">
              Contact Kara <ArrowRight size={18} />
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
