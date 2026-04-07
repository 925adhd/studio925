'use client';

import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, ChevronDown, MapPin, MessageCircle, FileCheck, AlertTriangle } from 'lucide-react';
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
              <span className="px-2.5 py-0.5 rounded-lg bg-brand-accent/10 text-brand-accent text-[10px] font-bold tracking-widest uppercase">Hiring Guide</span>
              <span className="px-2.5 py-0.5 rounded-lg bg-brand-accent/10 text-brand-accent text-[10px] font-bold tracking-widest uppercase">Small Business</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-[1.1]">
              What to Look for in a Local Web Designer
            </h1>
            <p className="text-brand-primary/50 text-sm mb-10">April 6, 2026 · 5 min read</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10">
            <img
              src="/local-web-designer-kentucky.webp"
              alt="What to look for in a local web designer — small business owner meeting with a Kentucky web designer to review a custom website"
              width={1536}
              height={1024}
              className="w-full rounded-2xl"
              loading="eager"
            />
          </motion.div>

          <div className="prose-studio">
            {/* Intro */}
            <p className="text-base md:text-lg text-brand-primary/70 leading-relaxed mb-8">
              Hiring a web designer is one of those decisions that feels bigger than it should. There's no clear price, every designer says they do "everything," and the reviews all sound the same. If you run a small business and you're trying to find someone local who actually does good work, here's what to look for, what to ask, and the red flags that should send you running.
            </p>

            {/* Why local */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Why Local Actually Matters</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              You can hire a designer from anywhere. The internet doesn't care. But when your business depends on local customers, working with someone who knows your area gives you an edge that's hard to put a price on.
            </p>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              A local designer understands what your competitors look like, how people in your area search, what they expect when they land on a site, and which details make a small town business feel trustworthy versus generic. They can meet you in person if you want to. They can drive past your storefront. They have skin in the game because their reputation is local too.
            </p>

            {/* The four things to look for */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Four Things That Actually Matter</h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <MapPin size={16} className="text-brand-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Local Knowledge</span>
                </div>
                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  Do they understand your market? Have they worked with businesses near you? A designer who knows the area writes better copy and builds smarter local SEO than someone three states away.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <MessageCircle size={16} className="text-brand-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Plain Talk</span>
                </div>
                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  If their first email is full of jargon, run. The right designer can explain what they do without making you feel dumb. You should leave every conversation more informed, not more confused.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <FileCheck size={16} className="text-brand-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Real Work</span>
                </div>
                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  Ask to see live sites they've actually built. Click around on your phone. Quality matters more than quantity. A small portfolio of fast, well-built sites tells you more than a long list of mockups.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <AlertTriangle size={16} className="text-brand-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary/40">Clear Pricing</span>
                </div>
                <p className="text-sm text-brand-primary/70 leading-relaxed">
                  A designer who can't tell you what something costs until you "get on a call" is selling, not building. Fixed pricing or honest ranges up front means you can plan and they're confident in their work.
                </p>
              </div>
            </div>

            {/* Questions to ask */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Questions to Ask Before You Sign Anything</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              Print these out and bring them to the first meeting. Any decent designer will answer them without flinching:
            </p>

            <div className="p-6 rounded-2xl bg-brand-primary/[0.03] border border-brand-primary/5 mb-8">
              <ul className="space-y-3 text-sm text-brand-primary/70">
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">1.</span><span><strong>Do I own the website when we're done?</strong> The answer should be yes. The code, the content, the domain, all of it.</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">2.</span><span><strong>Are you using a template or building it custom?</strong> Both can work, but you deserve to know which one you're paying for.</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">3.</span><span><strong>What happens if I want to move the site to a different host later?</strong> Listen for "no problem." Watch out for "you can't."</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">4.</span><span><strong>How long will this take from start to finish?</strong> A real timeline beats a vague "a few months."</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">5.</span><span><strong>What's included in the price, and what costs extra?</strong> Hosting, content updates, SEO, future changes. Get it in writing.</span></li>
                <li className="flex items-start gap-3"><span className="text-brand-accent font-bold text-lg leading-none">6.</span><span><strong>Can I see a live site you've built?</strong> One real, working example tells you more than a wall of screenshots.</span></li>
              </ul>
            </div>

            {/* Red flags */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Red Flags to Walk Away From</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              Some things aren't deal-breakers. These are:
            </p>

            <div className="p-6 rounded-2xl bg-red-50/50 border border-red-200/40 mb-8">
              <ul className="space-y-3 text-sm text-brand-primary/70">
                <li className="flex items-start gap-3"><AlertTriangle size={16} className="text-red-500 mt-0.5 shrink-0" /><span><strong>Locked-in hosting.</strong> If you can only host the site with them, you're a hostage, not a client.</span></li>
                <li className="flex items-start gap-3"><AlertTriangle size={16} className="text-red-500 mt-0.5 shrink-0" /><span><strong>Vague pricing or hourly billing without a cap.</strong> "We'll see how it goes" is how a $1,500 project becomes $6,000.</span></li>
                <li className="flex items-start gap-3"><AlertTriangle size={16} className="text-red-500 mt-0.5 shrink-0" /><span><strong>Can't show you a single live site.</strong> Everyone starts somewhere, but they should at least have one real example you can click on.</span></li>
                <li className="flex items-start gap-3"><AlertTriangle size={16} className="text-red-500 mt-0.5 shrink-0" /><span><strong>Pushing monthly subscription website plans.</strong> Often a template wrapped in a contract you can't escape.</span></li>
                <li className="flex items-start gap-3"><AlertTriangle size={16} className="text-red-500 mt-0.5 shrink-0" /><span><strong>Promises like "guaranteed first page on Google."</strong> No one can guarantee that. Anyone who says so is either lying or doesn't understand SEO.</span></li>
              </ul>
            </div>

            {/* Callout */}
            <div className="p-6 md:p-8 rounded-2xl bg-brand-primary text-white mb-8">
              <p className="text-white/85 leading-relaxed text-center">
                <strong className="text-lg">The right designer treats your website like a business decision.</strong><br />
                <span className="text-white/65 text-sm">Clear pricing, real ownership, honest answers. Everything else is noise.</span>
              </p>
            </div>

            {/* Bottom line */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">The Bottom Line</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-8">
              Hiring a web designer isn't about finding the cheapest quote or the flashiest portfolio. It's about finding someone who answers your questions straight, prices their work honestly, builds something you actually own, and sticks around after launch. Local helps. Clear communication helps more. Trust your gut, and don't sign anything until every question on the list above has a real answer.
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
            <h2 className="text-2xl md:text-3xl mb-3">Looking for a designer who answers straight?</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">Custom websites starting at $900. Fixed pricing, full ownership, no monthly lock-in.</p>
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
