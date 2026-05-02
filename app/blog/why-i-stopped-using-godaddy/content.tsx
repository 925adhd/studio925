'use client';

import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, Check, ChevronDown } from 'lucide-react';
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
              <span className="px-2.5 py-0.5 rounded-lg bg-brand-accent/10 text-brand-accent text-[10px] font-bold tracking-widest uppercase">Story</span>
              <span className="px-2.5 py-0.5 rounded-lg bg-brand-accent/10 text-brand-accent text-[10px] font-bold tracking-widest uppercase">Small Business</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-[1.1]">
              Why I Stopped Using GoDaddy and Learned to Code Instead
            </h1>
            <p className="text-brand-primary/50 text-sm mb-10">May 2, 2026 · 5 min read</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10">
            <img
              src="/why-i-stopped-using-godaddy.webp"
              alt="Why I stopped using GoDaddy and learned to code instead — illustration showing iframe builder limits on the left, a designer writing custom code in the center, and a clean custom website on the right"
              width={1536}
              height={1024}
              className="w-full rounded-2xl"
              loading="eager"
            />
          </motion.div>

          <div className="prose-studio">
            {/* Intro / answer-first */}
            <p className="text-base md:text-lg text-brand-primary/70 leading-relaxed mb-6">
              I stopped using GoDaddy because the website builder wouldn't let me do basic things. I couldn't add a tracking pixel. I couldn't edit the head of the page. I couldn't drop in a custom font without it ending up trapped inside an iframe. After a few weekends of fighting it, I gave up on the builder and started learning to write HTML and CSS myself.
            </p>
            <p className="text-base md:text-lg text-brand-primary/70 leading-relaxed mb-10">
              That's the short version. Here's the longer one. And what surprised me when I checked recently is that most of those same limitations are still there in 2026.
            </p>

            {/* The wall */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">The wall every GoDaddy user hits eventually</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              If you're on GoDaddy's current builder (Websites + Marketing) and you've tried to do anything outside the templates, you've probably already met one of these:
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Custom HTML you add gets embedded inside an iframe in the body of the page, isolated from the rest of the site.',
                'There\'s no way to edit the <head> of your page, which is where most third-party tools (live chat, analytics, ad pixels, schema markup) need to go.',
                'JavaScript can\'t be injected into the page source. GoDaddy explicitly blocks it.',
                'The "HTML section" you can add leaves blank space around it that you can\'t style away.',
                'If you want a code block on every page, you have to add it to every page manually. There\'s no global injection.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-brand-primary/70">
                  <Check size={16} className="text-brand-accent shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-brand-primary/70 leading-relaxed mb-6">
              In an older version of GoDaddy's builder, there was at least a Settings field where you could paste code into the header or footer of every page. They removed that when they switched to the current builder. So if anything, custom code support is <em>worse</em> now than it was when I started.
            </p>

            {/* Why it matters */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Why this actually matters for a small business</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              When you have a small business website, the things that make it actually <em>work</em> for you are usually the things that need head-tag access:
            </p>

            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {[
                { tool: 'Google Analytics or Microsoft Clarity', need: 'See what visitors actually do on your site' },
                { tool: 'Facebook or Google Ads pixel', need: 'Track conversions and run paid ads' },
                { tool: 'Schema markup', need: 'Tell Google you\'re a local business with hours, phone, area served' },
                { tool: 'A live chat widget', need: 'Catch visitors who would otherwise leave' },
                { tool: 'A custom font', need: 'Match your brand instead of looking like every other template' },
                { tool: 'Speed optimizations', need: 'Pass Google\'s Core Web Vitals so your site ranks higher' },
              ].map(({ tool, need }) => (
                <div key={tool} className="p-4 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02]">
                  <p className="font-semibold text-sm mb-1">{tool}</p>
                  <p className="text-xs text-brand-primary/60 leading-relaxed">{need}</p>
                </div>
              ))}
            </div>

            <p className="text-brand-primary/70 leading-relaxed mb-6">
              You can't do any of that cleanly on GoDaddy's builder. You can hack around some of it with iframe tricks, but they break, they slow your site down, and the worst part is you can never really tell if they're working because you can't see the real code.
            </p>

            {/* What changed */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">What changed when I learned to code</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              Once I switched to writing HTML and CSS myself (and later JavaScript and React), the wall went away. I could put any tracking code anywhere I wanted. I could make pages load fast because there was no builder bloat. I could build the design that was actually in my head instead of the one that fit the template. I owned the files outright and could host them anywhere.
            </p>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              I'm not saying every small business owner needs to learn to code. Most shouldn't. That's not what their time is for. But the experience of running into GoDaddy's wall is what pushed me to do it, and it's the reason every site I build for clients now is custom from scratch. So they never run into the same wall.
            </p>

            {/* If you're stuck */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">If you're on GoDaddy and frustrated</h2>
            <p className="text-brand-primary/70 leading-relaxed mb-6">
              If you're reading this because your GoDaddy site won't do something you want, here's the practical take:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-accent/10 text-brand-accent font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">1</div>
                <p className="text-sm md:text-base text-brand-primary/70 leading-relaxed">
                  If it's a small thing (one extra section, a different color, a small layout change), poke around the templates first. Sometimes the answer is hiding in a setting you didn't notice.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-accent/10 text-brand-accent font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">2</div>
                <p className="text-sm md:text-base text-brand-primary/70 leading-relaxed">
                  If it's anything involving tracking, ads, schema, or speed, you're going to keep hitting the wall. The builder isn't going to change. That's a structural limit, not a feature request waiting in line.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-accent/10 text-brand-accent font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">3</div>
                <p className="text-sm md:text-base text-brand-primary/70 leading-relaxed">
                  A custom site costs more upfront, but it's built around what you actually need. No iframes. No blocked head tag. No 20-step workaround for a tracking pixel.
                </p>
              </div>
            </div>

            {/* Bottom line */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">The bottom line</h2>
            <div className="p-6 md:p-8 rounded-2xl bg-brand-primary text-white mb-8">
              <p className="text-white/85 leading-relaxed">
                I built my first site on GoDaddy because it was easy to start. I left it because it was hard to grow. The builder hasn't really gotten better at the things that mattered to me, so I'm glad I took the long way around. If you want a site that doesn't fight you when you try to do something useful with it, that's the kind of site I build now.
              </p>
            </div>

            {/* FAQ */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Frequently asked questions</h2>
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
            <h2 className="text-2xl md:text-3xl mb-3">Ready for a site that doesn't fight you?</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">Custom websites starting at $900. You own everything. No iframes. No locked head tag.</p>
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
