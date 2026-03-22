import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Mail, ChevronRight, CheckCircle, Info, X, ZoomIn } from 'lucide-react';

const steps = [
  {
    num: 1,
    title: 'Create Your Free Account',
    subtitle: 'Takes about 2 minutes — no credit card needed',
    color: 'bg-brand-accent',
    instructions: [
      <>Click the link below to go to <strong>Web3Forms</strong> — this is the free service that will send contact form messages to your email.</>,
      <>Sign up using your <strong>business email address</strong>.</>,
      <>Once you're logged in, look at the <strong>left side of the screen</strong>. You'll see a <strong>"+ New Form"</strong> button — click it.</>,
    ],
    link: 'https://web3forms.com',
    video: { src: '/guides/web3forms1.mp4', caption: 'Click "+ New Form" on the left side of the screen' },
  },
  {
    num: 2,
    title: 'Fill In Your Form Details',
    subtitle: 'Just 3 fields — your name, email, and website address',
    color: 'bg-sky-600',
    instructions: [
      <>Where it says <strong>"Form Name"</strong>, type something simple like <strong>"Contact"</strong>.</>,
      <>Where it says <strong>"Domain Name"</strong>, type in your <strong>website address</strong> — for example: <strong>yourbusiness.com</strong></>,
      <>Where it says <strong>"Send Submissions To"</strong>, type in the <strong>email address where you want to receive messages</strong> from your contact form.</>,
      <>Click the <strong>"Create Form"</strong> button.</>,
    ],
    video: { src: '/guides/web3forms2.mp4', caption: 'Fill in these 3 fields, then click "Create Form"' },
  },
  {
    num: 3,
    title: 'Copy Your Access Key',
    subtitle: 'This is the only thing I need from you',
    color: 'bg-amber-600',
    instructions: [
      <>After clicking "Create Form", you'll see a long code called your <strong>Access Key</strong>. It looks like a bunch of letters and numbers separated by dashes.</>,
      <>Click the <strong>copy button</strong> next to it — this saves it so you can paste it in a message to me.</>,
    ],
    video: { src: '/guides/web3forms3.mp4', caption: 'Copy the access key shown on this page' },
    keyBox: {
      label: 'Your access key will look something like this:',
      value: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    },
  },
  {
    num: 4,
    title: 'Send Me the Access Key',
    subtitle: "That's it — I'll handle the rest",
    color: 'bg-brand-primary',
    instructions: [
      <>Paste the access key into a <strong>text or email</strong> and send it to me. That's all I need!</>,
      <>Once I plug it in, every message someone sends through your website's contact form will go <strong>straight to your email inbox</strong>.</>,
    ],
    tips: [
      { type: 'green' as const, icon: CheckCircle, text: <>The free plan lets you receive <strong>up to 250 messages per month</strong> through your contact form — more than enough to start. If your business grows and you need more, you can upgrade later.</> },
      { type: 'blue' as const, icon: Info, text: <>There are <strong>no monthly fees</strong> on the free plan. You only pay if you choose to upgrade down the road.</> },
    ],
  },
];

const tipStyles = {
  green: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  blue: 'bg-sky-50 border-sky-200 text-sky-800',
  yellow: 'bg-amber-50 border-amber-200 text-amber-800',
};

export default function Web3FormsGuide() {
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);

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
            Setup Guide
          </span>
          <h1 className="text-3xl md:text-5xl mb-4 leading-[1.1]">
            Set Up Your<br />
            <span className="italic text-brand-accent">Contact Form</span>
          </h1>
          <p className="text-lg text-brand-primary/60 max-w-xl mx-auto leading-relaxed">
            Follow these simple steps so that when someone fills out the contact form on your website, the message goes straight to your email. It's free, and takes about 5 minutes.
          </p>
        </motion.div>

        {/* Summary Strip */}
        <motion.div
          className="glass rounded-2xl p-5 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-xs font-bold text-brand-accent uppercase tracking-widest text-center mb-3">
            The whole process at a glance
          </p>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-2">
            {['Create free account', 'Fill in 3 fields', 'Copy your key', 'Send it to me'].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <span className="flex items-center gap-2 bg-brand-primary/5 rounded-full px-3 py-1.5 text-sm font-semibold w-full sm:w-auto">
                  <span className="w-5 h-5 rounded-full bg-brand-accent text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  {label}
                </span>
                {i < 3 && <ChevronRight size={16} className="text-brand-primary/20 hidden sm:block" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="glass rounded-3xl p-7 md:p-9 mb-7 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
          >
            {/* Left accent bar */}
            <div className={`absolute top-0 left-0 w-1.5 h-full ${step.color} rounded-l-3xl`} />

            {/* Step header */}
            <div className="flex items-start gap-4 mb-6">
              <div className={`${step.color} text-white text-xl font-bold w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-sans`}>
                {step.num}
              </div>
              <div>
                <h2 className="text-xl md:text-2xl leading-tight">{step.title}</h2>
                <p className="text-sm text-brand-primary/50 font-sans font-medium mt-0.5">{step.subtitle}</p>
              </div>
            </div>

            {/* Instructions */}
            <ul className="space-y-3 mb-2">
              {step.instructions.map((text, j) => (
                <li key={j} className="flex items-start gap-3 text-brand-primary/80 leading-relaxed">
                  <span className={`w-6 h-6 rounded-lg ${step.color}/10 text-brand-accent flex items-center justify-center text-xs font-bold shrink-0 mt-0.5`}>
                    <ChevronRight size={14} />
                  </span>
                  <span className="font-sans">{text}</span>
                </li>
              ))}
            </ul>

            {/* Link box */}
            {step.link && (
              <div className="flex items-center gap-3 bg-brand-primary/5 rounded-xl px-4 py-3 mt-4">
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

            {/* Video */}
            {step.video && (
              <div className="mt-5 rounded-xl border-2 border-brand-primary/10 overflow-hidden">
                <div className={`${step.color} text-white text-xs font-bold px-4 py-2 tracking-wide`}>
                  {step.video.caption}
                </div>
                <div
                  className="bg-white p-4 flex justify-center relative cursor-pointer group"
                  onClick={() => setExpandedVideo(step.video!.src)}
                >
                  <video
                    src={step.video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="max-w-full rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg m-4">
                    <span className="bg-white/90 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 sm:opacity-0 transition-opacity flex items-center gap-1.5 text-xs font-semibold text-brand-primary/70 px-3">
                      <ZoomIn size={14} /> Tap to enlarge
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Key box */}
            {step.keyBox && (
              <div className="border-2 border-dashed border-brand-accent/20 rounded-xl px-5 py-4 mt-4">
                <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-1">{step.keyBox.label}</p>
                <p className="font-mono text-sm text-brand-primary/50 tracking-wide">{step.keyBox.value}</p>
              </div>
            )}

            {/* Tips */}
            {step.tips?.map((tip, j) => (
              <div key={j} className={`flex items-start gap-3 rounded-xl px-4 py-3 mt-4 border ${tipStyles[tip.type]}`}>
                <tip.icon size={18} className="shrink-0 mt-0.5" />
                <span className="text-sm font-sans leading-relaxed font-medium">{tip.text}</span>
              </div>
            ))}
          </motion.div>
        ))}

        {/* Done Card */}
        <motion.div
          className="bg-brand-primary text-white rounded-3xl p-10 text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Mail size={48} className="mx-auto mb-4 text-brand-accent" />
          <h2 className="text-2xl md:text-3xl mb-3">That's It — You're All Set!</h2>
          <p className="text-white/70 text-base max-w-md mx-auto leading-relaxed font-sans">
            Once I have your access key, your contact form will be live and working. Every message someone sends through your website will land straight in your email inbox.
          </p>
        </motion.div>

        {/* Link to other guide */}
        <div className="text-center mt-10">
          <a
            href="/setup/domain"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-brand-accent hover:underline"
          >
            Need to connect a custom domain? Follow the Domain Setup Guide <ChevronRight size={14} />
          </a>
        </div>

        {/* Footer attribution */}
        <p className="text-center text-sm text-brand-primary/30 mt-6 font-sans">
          Studio 925 &middot; <a href="https://studio925.design" className="hover:text-brand-accent transition-colors">studio925.design</a>
        </p>
      </div>

      {/* Fullscreen video modal */}
      <AnimatePresence>
        {expandedVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedVideo(null)}
          >
            <button
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              onClick={() => setExpandedVideo(null)}
            >
              <X size={24} className="text-white" />
            </button>
            <motion.video
              src={expandedVideo}
              autoPlay
              loop
              muted
              playsInline
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
