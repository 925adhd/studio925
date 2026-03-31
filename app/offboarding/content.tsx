'use client';

import { motion } from 'motion/react';
import { Mail, Globe, BarChart3, Server, ChevronRight, CheckCircle, Info, ExternalLink, ArrowRight } from 'lucide-react';

const sections = [
  {
    id: 'contact-form',
    num: 1,
    title: 'Set Up Your Own Contact Form',
    subtitle: 'So website messages keep going to your email',
    icon: Mail,
    color: 'bg-brand-accent',
    intro: 'Your contact form was managed through our account. To keep it working, you\'ll need to create your own free Web3Forms account and update one line in your website code.',
    steps: [
      {
        heading: 'Create a free Web3Forms account',
        instructions: [
          <>Go to <strong>web3forms.com</strong> and sign up using your <strong>business email</strong>.</>,
          <>Once you're logged in, click <strong>"+ New Form"</strong> on the left side.</>,
        ],
        link: 'https://web3forms.com',
      },
      {
        heading: 'Create your form',
        instructions: [
          <>For the form name, type something simple like <strong>"Contact"</strong>.</>,
          <>Where it says <strong>"Domain Name"</strong>, enter your <strong>website address</strong>.</>,
          <>Where it says <strong>"Send Submissions To"</strong>, enter the <strong>email where you want to receive messages</strong>.</>,
          <>Click <strong>"Create Form"</strong>.</>,
        ],
      },
      {
        heading: 'Copy your new access key',
        instructions: [
          <>After creating the form, you'll see a <strong>Form Access Key</strong> — a long code that looks like: <span className="font-mono bg-brand-primary/5 px-2 py-0.5 rounded text-sm">xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx</span></>,
          <>Copy this key. Your developer will need it for the next step.</>,
        ],
      },
      {
        heading: 'Have your developer update the code',
        instructions: [
          <>In your website code, open the file <strong className="font-mono">src/components/Contact.tsx</strong>.</>,
          <>Find the line that says <strong className="font-mono">formData.append('access_key', '...')</strong>.</>,
          <>Replace the old key with your <strong>new access key</strong>.</>,
          <>Save, rebuild, and redeploy the site. That's it — your contact form is now on your own account.</>,
        ],
      },
    ],
    tips: [
      { type: 'green' as const, icon: CheckCircle, text: <>The free plan includes <strong>up to 250 messages per month</strong> — more than enough for most businesses. No monthly fees.</> },
    ],
  },
  {
    id: 'analytics',
    num: 2,
    title: 'Set Up Your Own Analytics',
    subtitle: 'Keep tracking your website visitors',
    icon: BarChart3,
    color: 'bg-sky-600',
    intro: 'Your website analytics were running through our account. Here\'s how to set up your own so you can keep tracking traffic.',
    steps: [
      {
        heading: 'Google Search Console (free)',
        instructions: [
          <>Go to <strong>search.google.com/search-console</strong> and sign in with your Google account.</>,
          <>Click <strong>"Add property"</strong> and enter your website URL.</>,
          <>Follow the verification steps — the easiest is the HTML tag method. Your developer can add the verification code to your site.</>,
          <>Once verified, submit your sitemap: go to <strong>Sitemaps</strong> in the left menu and enter <strong className="font-mono">sitemap.xml</strong>.</>,
        ],
        link: 'https://search.google.com/search-console',
      },
      {
        heading: 'Ahrefs Analytics (free, optional)',
        instructions: [
          <>Go to <strong>ahrefs.com</strong> and create a free account.</>,
          <>Add your website as a new project.</>,
          <>You'll get a <strong>data key</strong> — your developer can update this in <strong className="font-mono">app/layout.tsx</strong> where the analytics script is.</>,
        ],
        link: 'https://ahrefs.com',
      },
    ],
    tips: [
      { type: 'blue' as const, icon: Info, text: <>Google Search Console is the most important one — it shows you how people find your site on Google. Ahrefs is a nice bonus for tracking visitor behavior on your site.</> },
    ],
  },
  {
    id: 'hosting',
    num: 3,
    title: 'Set Up Your Own Hosting',
    subtitle: 'Keep your website live and online',
    icon: Server,
    color: 'bg-amber-600',
    intro: 'Your website is a static Next.js site — it\'s lightweight and can run on several free or low-cost hosting platforms. Your developer will handle this, but here are the options.',
    steps: [
      {
        heading: 'Option A: Vercel (recommended)',
        instructions: [
          <>Create a free account at <strong>vercel.com</strong>.</>,
          <>Connect your GitHub repository.</>,
          <>Vercel will automatically build and deploy your site every time code is pushed.</>,
          <>Connect your custom domain in the Vercel dashboard.</>,
        ],
        link: 'https://vercel.com',
      },
      {
        heading: 'Option B: GitHub Pages (free)',
        instructions: [
          <>If your code is already on GitHub, enable Pages in <strong>Settings → Pages</strong>.</>,
          <>Set the source to the <strong>main</strong> branch.</>,
          <>Add your custom domain in the Pages settings.</>,
        ],
      },
      {
        heading: 'Option C: Netlify (free tier)',
        instructions: [
          <>Create a free account at <strong>netlify.com</strong>.</>,
          <>Import your GitHub repository.</>,
          <>Connect your custom domain.</>,
        ],
        link: 'https://netlify.com',
      },
    ],
    tips: [
      { type: 'green' as const, icon: CheckCircle, text: <>All three options have free tiers that are more than enough for a business website. Your developer will know which one to use.</> },
    ],
  },
  {
    id: 'domain',
    num: 4,
    title: 'Your Domain',
    subtitle: 'Your website address stays yours',
    icon: Globe,
    color: 'bg-brand-primary',
    intro: 'If you purchased your domain through Cloudflare during onboarding, it\'s already in your name. You own it — it just needs to point to your new hosting.',
    steps: [
      {
        heading: 'What to tell your new developer',
        instructions: [
          <>Your domain is managed at <strong>Cloudflare</strong> — give your developer access to your Cloudflare account.</>,
          <>They'll need to update the <strong>DNS records</strong> to point to wherever your site is now hosted (Vercel, GitHub Pages, or Netlify).</>,
          <>Your domain renews annually (usually around <strong>$10/year</strong> for a .com) — make sure auto-renew is on so you don't lose it.</>,
        ],
        link: 'https://dash.cloudflare.com',
      },
    ],
    tips: [
      { type: 'blue' as const, icon: Info, text: <>If someone else registered your domain for you and you don't have the login, reach out to them to transfer it to your own account. You should always have direct access to your domain.</> },
    ],
  },
];

const tipStyles = {
  green: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  blue: 'bg-sky-50 border-sky-200 text-sky-800',
  yellow: 'bg-amber-50 border-amber-200 text-amber-800',
};

export default function OffboardingContent() {
  return (
    <div className="min-h-screen bg-brand-warm selection:bg-brand-accent selection:text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-brand-primary text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Transition Guide
          </span>
          <h1 className="text-3xl md:text-5xl mb-4 leading-[1.1]">
            Managing Your Website<br />
            <span className="italic text-brand-accent">On Your Own</span>
          </h1>
          <p className="text-lg text-brand-primary/60 max-w-xl mx-auto leading-relaxed">
            Everything you need to keep your website running after transitioning away from Studio 925 hosting. You own all your code and files — this guide helps you set up the services independently.
          </p>
        </motion.div>

        {/* What you already have */}
        <motion.div
          className="glass rounded-2xl p-6 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-xs font-bold text-brand-accent uppercase tracking-widest text-center mb-4">
            What you already own
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: 'Your complete website code', desc: 'All source files — ready for any developer to work with' },
              { label: 'Your domain name', desc: 'Registered in your name, you control it' },
              { label: 'Your content & images', desc: 'Every page, photo, and piece of copy is yours' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 bg-brand-primary/5 rounded-xl p-4">
                <CheckCircle size={18} className="text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-brand-primary">{item.label}</p>
                  <p className="text-xs text-brand-primary/50 font-sans mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Jump links */}
        <motion.div
          className="glass rounded-2xl p-5 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-xs font-bold text-brand-accent uppercase tracking-widest text-center mb-3">
            What you'll need to set up
          </p>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-2">
            {sections.map((section, i) => (
              <div key={section.id} className="flex items-center gap-2">
                <a
                  href={`#${section.id}`}
                  className="flex items-center gap-2 bg-brand-primary/5 rounded-full px-3 py-1.5 text-sm font-semibold w-full sm:w-auto hover:bg-brand-primary/10 transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-brand-accent text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {section.num}
                  </span>
                  {section.title.replace('Set Up Your Own ', '').replace('Your ', '')}
                </a>
                {i < sections.length - 1 && <ChevronRight size={16} className="text-brand-primary/20 hidden sm:block" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sections */}
        {sections.map((section, i) => (
          <motion.div
            key={section.id}
            id={section.id}
            className="glass rounded-3xl p-7 md:p-9 mb-7 relative overflow-hidden scroll-mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
          >
            {/* Left accent bar */}
            <div className={`absolute top-0 left-0 w-1.5 h-full ${section.color} rounded-l-3xl`} />

            {/* Section header */}
            <div className="flex items-start gap-4 mb-5">
              <div className={`${section.color} text-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>
                <section.icon size={24} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl leading-tight">{section.title}</h2>
                <p className="text-sm text-brand-primary/50 font-sans font-medium mt-0.5">{section.subtitle}</p>
              </div>
            </div>

            {/* Intro */}
            <p className="text-brand-primary/70 font-sans leading-relaxed mb-6">{section.intro}</p>

            {/* Steps within section */}
            {section.steps.map((step, j) => (
              <div key={j} className="mb-6 last:mb-2">
                <h3 className="text-base font-sans font-bold text-brand-primary mb-3 flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-lg ${section.color}/10 text-brand-accent flex items-center justify-center text-xs font-bold shrink-0`}>
                    {String.fromCharCode(65 + j)}
                  </span>
                  {step.heading}
                </h3>
                <ul className="space-y-2.5 ml-8">
                  {step.instructions.map((text, k) => (
                    <li key={k} className="flex items-start gap-3 text-brand-primary/75 leading-relaxed text-sm">
                      <ChevronRight size={14} className="text-brand-accent shrink-0 mt-0.5" />
                      <span className="font-sans">{text}</span>
                    </li>
                  ))}
                </ul>
                {'link' in step && step.link && (
                  <div className="flex items-center gap-3 bg-brand-primary/5 rounded-xl px-4 py-3 mt-3 ml-8">
                    <ExternalLink size={16} className="text-brand-accent shrink-0" />
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-brand-accent font-medium hover:underline break-all"
                    >
                      {step.link}
                    </a>
                  </div>
                )}
              </div>
            ))}

            {/* Tips */}
            {section.tips.map((tip, j) => (
              <div key={j} className={`flex items-start gap-3 rounded-xl px-4 py-3 mt-4 border ${tipStyles[tip.type]}`}>
                <tip.icon size={18} className="shrink-0 mt-0.5" />
                <span className="text-sm font-sans leading-relaxed font-medium">{tip.text}</span>
              </div>
            ))}
          </motion.div>
        ))}

        {/* Need help card */}
        <motion.div
          className="bg-brand-primary text-white rounded-3xl p-10 text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ArrowRight size={48} className="mx-auto mb-4 text-brand-accent" />
          <h2 className="text-2xl md:text-3xl mb-3">You've Got Everything You Need</h2>
          <p className="text-white/70 text-base max-w-lg mx-auto leading-relaxed font-sans mb-6">
            Your website code, domain, and content are all yours. Hand this guide to your new developer and they'll have everything they need to get you set up.
          </p>
          <p className="text-white/50 text-sm font-sans">
            If you ever need help in the future, we're still here — just reach out.
          </p>
        </motion.div>

        {/* Footer attribution */}
        <p className="text-center text-sm text-brand-primary/30 mt-10 font-sans">
          Studio 925 &middot; <a href="https://studio925.design" className="hover:text-brand-accent transition-colors">studio925.design</a>
        </p>
      </div>
    </div>
  );
}
