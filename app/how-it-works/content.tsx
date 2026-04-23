'use client';

import { motion } from 'motion/react';
import { Check, ArrowRight, Clock, MessageCircle, CreditCard, Pencil, Eye, Rocket } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import { trackEvent } from '../../src/lib/gtag';

const phases = [
  {
    num: '01',
    label: 'Day 1',
    icon: MessageCircle,
    title: 'Quick conversation',
    blurb:
      'Tell me about your business, or just point me to your current website or Facebook page. That is enough to get started. If you already know which package fits, you can skip this and book direct from the pricing page.',
  },
  {
    num: '02',
    label: 'Day 1 to 2',
    icon: CreditCard,
    title: 'You book your package',
    blurb:
      'Pick your package and pay your 50% deposit through Stripe. Secure, takes 60 seconds. Within 24 hours I reach out personally by email or text, not a form letter, just a quick hello to confirm we are on the same page. Before you even touch the intake form, I pull what I can from your Facebook or current site so the form is only asking for the gaps, or anything you want included that isn\'t already online. The intake takes about 10 to 15 minutes and auto-saves as you go. Within one business day of your intake, you get a Project Strategy Document and a shared Google Drive folder for your logo, photos, and any drafts.',
  },
  {
    num: '03',
    label: 'Day 2 to 3',
    icon: Pencil,
    title: '48-hour first draft',
    blurb:
      'On Foundation, you see the first full draft of your homepage within 48 hours of assets landing. No weeks of wondering what I am up to. On Growth and Online Store, first drafts arrive in the first week along with a full SEO audit of your market.',
  },
  {
    num: '04',
    label: 'Day 3 onward',
    icon: Eye,
    title: 'Review and refine',
    blurb:
      'You tell me what you like, what to change, and I handle the rest. Send feedback in one combined list per round instead of bits and pieces, it saves time on both sides. Revisions until you are happy before launch.',
  },
  {
    num: '05',
    label: 'Launch day',
    icon: Rocket,
    title: 'Preview, approve, go live',
    blurb:
      'When revisions are done you get a live preview link to see the whole site in action before anything touches your domain. Click around, test forms, share it with your team. Once you approve the preview, you pay the remaining 50% through Stripe and I push it live on your domain that same day. You also get a walk-through video so you can update text and images yourself, plus a 14-day fix window if anything is off.',
  },
];

const youHandle = [
  'Filling out the intake form (the sooner, the better)',
  'Logo and brand colors you already have',
  'Photos you want on the site (or say the word, I will use stock)',
  'Text for each page, or rough drafts I can polish',
  'Logins for your domain or existing hosting',
  'Reviewing drafts and sending feedback in one combined list per round',
  'Paying the final invoice before launch',
];

const iHandle = [
  'Custom design built around your business',
  'Writing or polishing your copy',
  'SEO setup (meta tags, sitemap, Google Search Console)',
  'Domain connection and secure hosting',
  'Testing on phones, tablets, and desktops',
  'A walk-through video so you can update things yourself',
  'Fixing anything broken in the first 14 days after launch',
];

const timelines = [
  { name: 'Foundation', range: '1 to 2 weeks', price: '$900', pages: 'Up to 5 pages' },
  { name: 'Growth', range: '3 to 4 weeks', price: '$1,800', pages: 'Up to 10 core pages' },
  { name: 'Online Store', range: '4 to 6 weeks', price: '$2,600', pages: 'Up to 15 core pages' },
];

const faqs = [
  {
    q: 'What if I change my mind after paying the deposit?',
    a: 'The deposit is non-refundable once we start, but if you reach out before I start building (usually within 48 hours of payment), I will refund it in full, no questions asked.',
  },
  {
    q: 'Can I see progress as you work?',
    a: 'Yes. I share a live preview link inside your shared Google Drive folder so you can watch the site come together. You do not need any special tools, just click the link.',
  },
  {
    q: 'What happens if I need more pages than my package includes?',
    a: 'We can upgrade to the next package at any point, or add individual pages for a flat fee. I will always tell you the price before I start so there are no surprise invoices.',
  },
  {
    q: 'Do I own the website when we are done?',
    a: 'Yes. 100%. Code, content, domain, everything. If you ever want to move to a different developer, I hand it all over cleanly. Nothing held hostage, ever.',
  },
  {
    q: 'What if I do not have a logo or photos?',
    a: 'I can do a simple logo cleanup if you have something rough, and I will pull stock photos that match your brand. Just tell me on the intake form and I will take it from there.',
  },
  {
    q: 'How do I pay the final invoice?',
    a: 'Right before launch I send you a secure Stripe link for the remaining 50%. Same payment flow as the deposit. Once that clears, we go live.',
  },
];

export default function HowItWorksContent() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="pt-24 pb-20 px-6 md:pt-32">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-brand-accent mb-3">
            How It Works
          </span>
          <h1 className="text-3xl md:text-5xl mb-4 md:mb-6 leading-tight">
            Here is exactly what happens <span className="italic text-brand-accent">after you book</span>.
          </h1>
          <p className="text-sm md:text-lg text-brand-primary/65 leading-relaxed max-w-2xl mx-auto">
            No mystery, no "we will get back to you eventually." Every project follows the same clear path from deposit to launch, so you always know what is happening next.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 text-xs text-brand-primary/50">
            <Clock size={14} className="text-brand-accent" />
            <span>1 to 6 weeks total, depending on your package</span>
          </div>
        </div>

        {/* Phases */}
        <div className="max-w-4xl mx-auto mb-20 md:mb-28">
          <div className="space-y-4 md:space-y-5">
            {phases.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative bg-white border border-brand-primary/10 rounded-2xl p-6 md:p-7 flex gap-5 md:gap-7"
                >
                  <div className="shrink-0">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                      <span className="font-serif italic text-brand-accent font-bold text-sm">{p.num}</span>
                      <h2 className="text-lg md:text-xl font-serif font-bold">{p.title}</h2>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/45">{p.label}</span>
                    </div>
                    <p className="text-sm md:text-base text-brand-primary/70 leading-relaxed">{p.blurb}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Who handles what */}
        <div className="max-w-5xl mx-auto mb-20 md:mb-28">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl mb-3">
              Who handles <span className="italic text-brand-accent">what.</span>
            </h2>
            <p className="text-sm md:text-base text-brand-primary/60 max-w-xl mx-auto">
              Clear split so nothing falls through the cracks. If something on your list is missing, tell me, we can work around it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-warm border-l-4 border-brand-accent rounded-2xl p-6 md:p-8"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-accent">I handle</span>
              <h3 className="text-xl font-serif font-bold mt-1 mb-4">The build</h3>
              <ul className="space-y-2.5">
                {iHandle.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm md:text-[15px]">
                    <Check size={15} className="text-brand-accent mt-1 shrink-0" />
                    <span className="text-brand-primary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-brand-primary/10 rounded-2xl p-6 md:p-8"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-primary/50">You handle</span>
              <h3 className="text-xl font-serif font-bold mt-1 mb-4">Your stuff</h3>
              <ul className="space-y-2.5">
                {youHandle.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm md:text-[15px]">
                    <Check size={15} className="text-brand-primary/40 mt-1 shrink-0" />
                    <span className="text-brand-primary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Timeline per package */}
        <div className="max-w-4xl mx-auto mb-20 md:mb-28">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl mb-3">
              How long <span className="italic text-brand-accent">it takes.</span>
            </h2>
            <p className="text-sm md:text-base text-brand-primary/60 max-w-xl mx-auto">
              Timelines assume you send assets in the first week. If those slow down, everything shifts.
            </p>
          </div>

          <div className="space-y-3">
            {timelines.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-brand-primary/10 rounded-2xl p-5 md:p-6 flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2.5 mb-1 flex-wrap">
                    <h3 className="text-lg md:text-xl font-serif font-bold">{t.name}</h3>
                    <span className="text-xs text-brand-primary/45">{t.pages}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-brand-primary/55">
                    <Clock size={13} className="text-brand-accent" />
                    <span>{t.range}</span>
                  </div>
                </div>
                <span className="font-serif font-bold italic text-xl md:text-2xl text-brand-primary shrink-0">
                  {t.price}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Payment */}
        <div className="max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="bg-brand-primary text-white rounded-3xl p-7 md:p-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-accent">Payment</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-2 mb-5">
              Simple two-step payment.
            </h2>

            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <strong className="block text-white">50% deposit when you book</strong>
                  <span className="text-white/65">
                    Paid through Stripe. Locks in your timeline and gets the project on the calendar.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <strong className="block text-white">Remaining 50% once you&apos;re happy with the live preview</strong>
                  <span className="text-white/65">
                    You see the finished site working on a live preview link first. Click around, test forms, check it on your phone. When you&apos;re happy, I send a secure Stripe link and push it live on your domain the same day.
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs md:text-sm text-white/55 mt-6 pt-6 border-t border-white/10">
              No hourly billing. No hidden fees. No monthly platform costs on the build. You own everything, code, content, and domain, after final payment.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl mb-3">
              Common <span className="italic text-brand-accent">questions.</span>
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-brand-primary/10 pb-5">
                <h3 className="font-semibold text-brand-primary mb-2 text-[15px] md:text-base">{f.q}</h3>
                <p className="text-sm md:text-[15px] text-brand-primary/65 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl mb-3">
            Ready to <span className="italic text-brand-accent">get started?</span>
          </h2>
          <p className="text-sm md:text-base text-brand-primary/60 mb-7 max-w-lg mx-auto">
            Pick the package that fits your business. Everything above kicks off the moment your deposit clears.
          </p>
          <Link
            href="/#pricing"
            onClick={() => trackEvent('click_view_packages', 'how_it_works_page')}
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-7 py-3.5 rounded-2xl font-bold hover:bg-brand-accent/90 transition-all"
          >
            View Packages <ArrowRight size={18} />
          </Link>
          <p className="text-xs text-brand-primary/40 mt-4">
            Not sure which one is right for you?{' '}
            <Link href="/#contact" className="underline hover:text-brand-primary/60">
              Message me
            </Link>{' '}
            and I will help you pick.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
