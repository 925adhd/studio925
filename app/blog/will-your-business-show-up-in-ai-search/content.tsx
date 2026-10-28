'use client';

import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, Check, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import BlogAuditCTA from '../../../src/components/BlogAuditCTA';

interface FaqItem {
  question: string;
  answer: string;
}

const helps = [
  { title: 'Clear text on your website', text: 'Your services, the towns you serve, your hours, and your phone number, written as real text. Not baked into a photo, a flyer, or a PDF menu.' },
  { title: 'A complete Google Business Profile', text: 'Right category, every service listed, accurate hours, real photos. Google specifically tells site owners to keep this up to date.' },
  { title: 'Real reviews', text: 'Reviews feed Google\'s map rankings, and review sites show up as sources in AI answers. A business with zero reviews gives these tools very little to go on.' },
  { title: 'Listings beyond Google', text: 'Bing Places, Apple Business Connect, Yelp, and your local Chamber of Commerce. Different tools lean on different sources, so be accurate in more than one place.' },
  { title: 'The same details everywhere', text: 'Same business name, phone number, and town on your website and every listing. Mismatched info makes it harder for any tool to trust what it finds.' },
  { title: 'Structured data that matches the page', text: 'The behind-the-scenes code that tells search engines your hours and location. It should say exactly what your page says, nothing more.' },
];

const doesntHelp = [
  'Special "AI files" or secret code. Google says you don\'t need them.',
  'Stuffing your website with phrases like "best plumber near me" over and over.',
  'Dozens of near-copy pages for every town in the county.',
  'Anyone who promises AI tools will recommend you. Nobody controls that.',
];

export default function ArticlePage({ faqItems }: { faqItems: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-brand-primary/75 hover:text-emerald-800 transition-colors mb-6">
              <ArrowLeft size={14} /> Back to Blog
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-[1.1]">
              Will Your Business Show Up When Customers Ask AI?
            </h1>
            <p className="text-brand-primary/75 text-sm mb-10">Local Search · October 15, 2026 · 5 min read</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10">
            <img
              src="/customer-searching-local-business-on-phone.webp"
              alt="Hand holding a phone showing local businesses on Google Maps at a cafe table"
              width={1536}
              height={1024}
              className="w-full rounded-2xl"
              loading="eager"
            />
          </motion.div>

          <div className="prose-studio">
            {/* Intro / answer-first */}
            <p className="text-base md:text-lg text-brand-primary/75 leading-relaxed mb-6">
              Your business can show up in AI search results, and the good news is there are no secret tricks to it. AI tools like Google&apos;s AI Overviews and ChatGPT build their answers from the same places regular search does: your website, your Google Business Profile, your reviews, and what other sites say about you. If those are solid, you have a real shot. If they&apos;re thin, AI has nothing to recommend.
            </p>
            <p className="text-base md:text-lg text-brand-primary/75 leading-relaxed mb-10">
              Here&apos;s what&apos;s actually known about where these answers come from, what helps, what doesn&apos;t, and how to check where your business stands today.
            </p>

            {/* People are asking */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">People are asking AI for recommendations now</h2>
            <p className="text-brand-primary/75 leading-relaxed mb-6">
              More of your customers are typing full questions instead of a few keywords. Things like &quot;who&apos;s a good plumber in Leitchfield?&quot; or &quot;where can I get a cake for a birthday this weekend?&quot; Google answers some of those with an AI summary at the top of the results. Others ask ChatGPT or a similar tool directly.
            </p>
            <p className="text-brand-primary/75 leading-relaxed mb-6">
              Either way, the tool is picking a few businesses to mention. The question every owner should be asking is: what is it looking at when it decides?
            </p>

            {/* Google */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Where Google&apos;s AI answers come from</h2>
            <p className="text-brand-primary/75 leading-relaxed mb-6">
              Google is unusually clear about this one. Its guide for site owners says:
            </p>
            <blockquote className="border-l-4 border-emerald-700 pl-5 py-1 mb-6 text-brand-primary/80 italic leading-relaxed">
              &quot;There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary.&quot;
            </blockquote>
            <p className="text-brand-primary/75 leading-relaxed mb-6">
              The same guide lists the basics that still matter: keeping important content in text form, linking your pages together so they&apos;re easy to find, making sure your structured data matches what&apos;s on the page, and, for local businesses, checking that your Business Profile information is up to date. You can read it yourself on{' '}
              <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer" className="text-emerald-800 font-semibold underline underline-offset-2">Google&apos;s Search Central site</a>.
            </p>
            <p className="text-brand-primary/75 leading-relaxed mb-6">
              In plain English: Google&apos;s AI answers are built on Google Search. If your business is easy for Google to understand and trust, it&apos;s in the running for the AI answer too.
            </p>

            {/* ChatGPT */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Where ChatGPT and other AI tools get their answers</h2>
            <p className="text-brand-primary/75 leading-relaxed mb-6">
              This part is fuzzier, and anyone who tells you otherwise is guessing. OpenAI hasn&apos;t published exactly which listing and review services ChatGPT uses for local businesses. Marketing companies have run their own tests, and their results don&apos;t agree with each other.
            </p>
            <p className="text-brand-primary/75 leading-relaxed mb-6">
              What you can see for yourself is the list of sources these tools cite under an answer. For local questions, those sources tend to be business websites, review and directory sites like Yelp, and local pages like a Chamber of Commerce listing or a news story. That tells you something useful: the tools are reading the open web, so your business needs to be accurately described in more than one place.
            </p>

            {/* What helps */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">What actually helps</h2>
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {helps.map(({ title, text }) => (
                <div key={title} className="p-4 rounded-2xl border border-brand-primary/10 bg-brand-primary/[0.02]">
                  <div className="flex items-center gap-2 mb-1">
                    <Check size={16} className="text-emerald-700 shrink-0" />
                    <p className="font-semibold text-sm">{title}</p>
                  </div>
                  <p className="text-xs text-brand-primary/75 leading-relaxed pl-6">{text}</p>
                </div>
              ))}
            </div>
            <p className="text-brand-primary/75 leading-relaxed mb-6">
              If this list looks familiar, that&apos;s the point. It&apos;s the same foundation that helps you show up on Google&apos;s map and in regular search results. A restaurant with its menu written as real text, for example, is easier for every one of these tools to read than one with a photo of the menu. I wrote more about that on my{' '}
              <Link href="/restaurant-website-design-kentucky" className="text-emerald-800 font-semibold underline underline-offset-2">restaurant website page</Link>.
            </p>

            {/* What doesn't */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">What doesn&apos;t help</h2>
            <ul className="space-y-3 mb-8">
              {doesntHelp.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-brand-primary/75">
                  <X size={16} className="text-red-700 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-brand-primary/75 leading-relaxed mb-6">
              Google&apos;s spam policies already warn against mass-producing thin pages just to catch more searches. That was bad for regular SEO, and it&apos;s bad for AI search too.
            </p>

            {/* Test it */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Check where your business stands</h2>
            <p className="text-brand-primary/75 leading-relaxed mb-6">
              You can test this yourself in about five minutes:
            </p>
            <div className="space-y-4 mb-8">
              {[
                'Ask ChatGPT, and Google\'s AI Mode if you have it, the question a new customer would ask. Something like "Who\'s a good plumber in Leitchfield?" Swap in your own business type and town.',
                'See if your business comes up. Then try a couple of different wordings, since answers can change from one question to the next.',
                'Look at the sources the tool lists under its answer. Those are the places it trusted. Make sure your business is listed there, with correct details.',
                'Search your business name on Google and look at your Business Profile. Is every field filled in? How many reviews do you have?',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-accent/10 text-emerald-800 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                  <p className="text-sm md:text-base text-brand-primary/75 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-brand-primary/75 leading-relaxed mb-6">
              If you&apos;re missing from both the AI answer and the Google map, the fix usually starts in the same place: your Business Profile, your reviews, and a website that says clearly what you do and where.
            </p>

            {/* Bottom line */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">The bottom line</h2>
            <div className="p-6 md:p-8 rounded-2xl bg-brand-primary text-white mb-8">
              <p className="text-white/85 leading-relaxed">
                AI search is a new way of asking, not a new set of rules. The businesses that show up are the ones that are easy to understand and easy to trust: a clear website, a complete Google Business Profile, real reviews, and the same details everywhere. Get those right and you&apos;re ready for regular search, the map, and whatever AI tool your customers try next.
              </p>
            </div>

            {/* FAQ */}
            <h2 className="text-2xl md:text-3xl mt-12 mb-6">Frequently asked questions</h2>
            <div className="space-y-3 mb-12">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-brand-primary/10 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-sm">{item.question}</span>
                    <ChevronDown size={16} className={`shrink-0 text-brand-primary/70 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4">
                      <p className="text-sm text-brand-primary/75 leading-relaxed">{item.answer}</p>
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
                <p className="text-sm text-brand-primary/75 leading-relaxed">
                  Founder of Studio 925. Custom web designer based in Leitchfield, Kentucky, building custom websites for small businesses across the state.
                </p>
              </div>
            </div>
          </div>

          <BlogAuditCTA />

          {/* CTA */}
          <div className="text-center py-14 px-8 bg-brand-primary text-white rounded-[2.5rem]">
            <h2 className="text-2xl md:text-3xl mb-3">Want a website that&apos;s easy to find and easy to trust?</h2>
            <p className="text-white/75 mb-8 max-w-md mx-auto">Custom websites starting at $900, built with clear text, clean structure, and local SEO from day one. You own everything.</p>
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
