'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Mail, ExternalLink, ChevronRight, Tag, ZoomIn } from 'lucide-react';

// Kara's Google Workspace referral link
const REFERRAL_LINK = 'https://referworkspace.app.goo.gl/WpW8';

const steps = [
  {
    num: 1,
    title: 'Start Your Free Trial',
    color: 'bg-brand-accent',
    instructions: [
      <>Tap the button below.</>,
      <>Click <strong>"Start a trial"</strong> under <strong>Starter</strong>, the plan on the far left.</>,
      <>Fill in your business name and contact info.</>,
    ],
    link: REFERRAL_LINK,
    image: {
      src: '/guides/google-workspace-plans.webp',
      alt: 'Google Workspace plans page with the Starter "Start a trial" button and the Annual switch marked',
      width: 990,
      height: 853,
      legend: [
        <>Click this one.</>,
        <>On = pay yearly (cheaper). Off = pay monthly.</>,
      ],
    },
  },
  {
    num: 2,
    title: 'Pick Your Email Address',
    color: 'bg-sky-600',
    instructions: [
      <>Choose <strong>"Yes, I have one I can use"</strong> and type your domain.</>,
      <>Pick your address, like <strong>contact@yourbusiness.com</strong>.</>,
    ],
  },
  {
    num: 3,
    title: 'Send Me a Screenshot',
    color: 'bg-amber-600',
    instructions: [
      <>When you see <strong>"Verify your domain"</strong>, screenshot it and send it to me.</>,
      <>I'll handle the rest. Wait for my reply.</>,
    ],
  },
  {
    num: 4,
    title: 'Sign In',
    color: 'bg-brand-primary',
    instructions: [
      <>Sign in at <strong>gmail.com</strong> or the Gmail app with your new email.</>,
    ],
  },
];

export default function EmailGuide() {
  return (
    <div className="min-h-screen bg-brand-warm selection:bg-brand-accent selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10">

        {/* Logo back to the main site */}
        <div className="flex justify-center mb-6 md:mb-14">
          <Link href="/" aria-label="Studio 925 home">
            <img src="/logo.webp" alt="Studio 925" width={162} height={56} className="h-8 md:h-10 w-auto" />
          </Link>
        </div>

        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl mb-3 md:mb-4 leading-[1.1]">
            Get a Business Email<br />
            <span className="italic text-emerald-700">With Your Own Domain</span>
          </h1>
          <p className="text-base md:text-lg text-brand-primary/75 max-w-xl mx-auto leading-relaxed">
            Get you@yourbusiness.com with Google Workspace. It works just like Gmail, on any device.
          </p>
        </motion.div>

        {/* Summary Strip (desktop only, the steps sit right below on mobile) */}
        <motion.div
          className="hidden sm:block glass rounded-2xl p-5 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest text-center mb-3">
            The whole process at a glance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['Start free trial', 'Pick your address', 'Send me a screenshot', 'Sign in and test'].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <span className="flex items-center gap-2 bg-brand-primary/5 rounded-full px-3 py-1.5 text-sm font-semibold">
                  <span className="w-5 h-5 rounded-full bg-brand-accent text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  {label}
                </span>
                {i < 3 && <ChevronRight size={16} className="text-brand-primary/20" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="glass rounded-3xl p-5 md:p-9 mb-5 md:mb-7 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
          >
            {/* Left accent bar */}
            <div className={`absolute top-0 left-0 w-1.5 h-full ${step.color} rounded-l-3xl`} />

            {/* Step header */}
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className={`${step.color} text-white text-lg md:text-xl font-bold w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 font-sans`}>
                {step.num}
              </div>
              <h2 className="text-xl md:text-2xl leading-tight min-w-0">{step.title}</h2>
            </div>

            {/* Instructions */}
            <ul className="space-y-2.5 md:space-y-3 mb-2">
              {step.instructions.map((text, j) => (
                <li key={j} className="flex items-start gap-3 text-brand-primary/80 leading-relaxed">
                  <span className={`w-6 h-6 rounded-lg ${step.color}/10 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5`}>
                    <ChevronRight size={14} />
                  </span>
                  <span className="font-sans">{text}</span>
                </li>
              ))}
            </ul>

            {/* Sign-up button */}
            {'link' in step && step.link && (
              <div className="mt-4">
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex sm:inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-sans font-semibold rounded-xl px-5 py-3 hover:bg-brand-primary/90 transition-colors"
                >
                  Start My Free Trial <ExternalLink size={16} className="shrink-0" />
                </a>
                <p className="flex items-center justify-center sm:justify-start gap-1.5 text-sm font-sans font-medium text-emerald-800 mt-2">
                  <Tag size={14} className="shrink-0" /> 14 days free, then about $7/month per person. 10% off your first year.
                </p>
              </div>
            )}

            {/* Screenshot */}
            {'image' in step && step.image && (
              <div className="mt-5 rounded-xl border-2 border-brand-primary/10 overflow-hidden">
                <a
                  href={step.image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 sm:p-4 flex justify-center relative sm:pointer-events-none sm:cursor-default"
                >
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    width={step.image.width}
                    height={step.image.height}
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                  <span className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/90 rounded-full shadow-lg flex sm:hidden items-center gap-1.5 text-xs font-semibold text-brand-primary px-3 py-2">
                    <ZoomIn size={14} /> Tap to enlarge
                  </span>
                </a>
                <ol className="bg-white border-t border-brand-primary/10 px-4 py-3 space-y-2">
                  {step.image.legend.map((text, k) => (
                    <li key={k} className="flex items-start gap-3 text-sm font-sans text-brand-primary/80 leading-relaxed">
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {k + 1}
                      </span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

          </motion.div>
        ))}

        {/* Done Card */}
        <motion.div
          className="bg-brand-primary text-white rounded-3xl p-7 md:p-10 text-center mt-8 md:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Mail size={40} className="mx-auto mb-3 md:mb-4 text-brand-accent" />
          <h2 className="text-2xl md:text-3xl mb-3">You're All Set!</h2>
          <p className="text-white/80 text-base max-w-lg mx-auto leading-relaxed font-sans">
            Text me your new address and I'll add it to your website.
          </p>
        </motion.div>

        {/* Footer attribution */}
        <p className="text-center text-sm text-brand-primary/70 mt-8 md:mt-10 font-sans">
          Studio 925 &middot; <a href="https://studio925.design" className="hover:text-emerald-800 transition-colors">studio925.design</a>
        </p>
      </div>
    </div>
  );
}
