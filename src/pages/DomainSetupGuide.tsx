import { motion } from 'motion/react';
import { Globe, ExternalLink, ChevronRight, CheckCircle, Info, AlertTriangle } from 'lucide-react';

const steps = [
  {
    num: 1,
    title: 'Buy Your Domain Name',
    subtitle: 'A domain is your website address — like yourbusiness.com',
    color: 'bg-brand-accent',
    instructions: [
      <>Click the link below to <strong>create a free Cloudflare account</strong>. Cloudflare is where you'll buy and manage your domain name. Use your <strong>business email</strong> to sign up.</>,
      <>Once you're logged in, look at the <strong>left side of the screen</strong>. Click <strong>"Domains"</strong> to open the menu, then click <strong>"Domain registrations"</strong>.</>,
      <>You'll see a <strong>"Buy domain"</strong> button in the top-right corner — click it.</>,
      <>Type in the domain name you want (for example: <strong>yourbusiness.com</strong>) and follow the steps to purchase it.</>,
    ],
    link: 'https://dash.cloudflare.com/sign-up',
    videos: [
      { src: '/guides/domain1.mp4', caption: 'Click "Domains", then "Domain registrations" on the left side' },
      { src: '/guides/domain2.mp4', caption: 'Click the "Buy domain" button in the top-right' },
    ],
    tips: [
      { type: 'blue' as const, icon: Info, text: <>You don't need any add-ons during checkout. Just make sure <strong>Privacy Protection is ON</strong> — it usually is by default. A <strong>.com</strong> domain costs about <strong>$10/year</strong> through Cloudflare — no hidden fees.</> },
    ],
  },
  {
    num: 2,
    title: 'Make Sure Your Domain Is Active',
    subtitle: 'Just a quick check — takes 10 seconds',
    color: 'bg-sky-600',
    instructions: [
      <>After your purchase, go back to the <strong>main Cloudflare page</strong>. You should see your new domain name listed there.</>,
      <>If you see it, you're good! <strong>Click on it</strong> to open its settings — you'll need this later in Step 4.</>,
    ],
    tips: [
      { type: 'blue' as const, icon: Info, text: <>If you <strong>don't</strong> see your domain listed, click <strong>"Add a domain"</strong> on the main page and follow the prompts. When it asks you to pick a plan, choose the <strong>Free</strong> option.</> },
    ],
  },
  {
    num: 3,
    title: 'Send Me Your Domain Name',
    subtitle: 'This is the only thing I need from you right now',
    color: 'bg-amber-600',
    instructions: [
      <>Send me a text or email with <strong>just your domain name</strong> — for example: <strong>yourbusiness.com</strong></>,
      <>Then <strong>wait for me to reply</strong> before moving on to Step 4. I need to do some setup on my end first.</>,
    ],
    tips: [
      { type: 'green' as const, icon: CheckCircle, text: <><strong>Important:</strong> Don't skip ahead to Step 4 yet! Wait until I message you back and say it's time. The order matters here.</> },
    ],
  },
  {
    num: 4,
    title: 'Add 2 Settings to Connect Your Domain',
    subtitle: "I'll tell you when it's time for this step — it only takes a couple minutes",
    color: 'bg-brand-primary',
    instructions: [
      <>Go back to <strong>Cloudflare</strong> and click on <strong>your domain name</strong> to open its settings.</>,
      <>On the <strong>left side of the screen</strong>, click <strong>"DNS"</strong> to open the menu, then click <strong>"Records"</strong>.</>,
      <>Click the blue <strong>"+ Add record"</strong> button on the right side.</>,
      <>A form will pop up with a few boxes to fill in. Use the table below to know <strong>exactly what to type in each box</strong>. You'll do this <strong>twice</strong> — once for each row in the table.</>,
      <>After filling in the boxes for the first row, click <strong>"Save"</strong>. Then click <strong>"+ Add record"</strong> again and do the same thing for the second row.</>,
    ],
    videos: [
      { src: '/guides/domain3.mp4', caption: 'Click "DNS", then "Records" on the left side' },
      { src: '/guides/domain4.mp4', caption: 'Click the blue "+ Add record" button' },
      { src: '/guides/domain5.mp4', caption: 'Fill in each box using the table below, then click "Save"' },
    ],
    dnsRecords: [
      {
        which: 'First time',
        steps: [
          { label: 'Type', value: 'A', note: '(select from dropdown)' },
          { label: 'Name', value: '@', note: '(just the @ symbol)' },
          { label: 'IPv4 address', value: '76.76.21.21', note: '(type this exactly)' },
        ],
      },
      {
        which: 'Second time',
        steps: [
          { label: 'Type', value: 'CNAME', note: '(select from dropdown)' },
          { label: 'Name', value: 'www', note: '(just the letters www)' },
          { label: 'Target', value: 'cname.vercel-dns.com', note: '(type this exactly)' },
        ],
      },
    ],
    tips: [
      { type: 'yellow' as const, icon: AlertTriangle, text: <>There's a toggle called <strong>"Proxy status"</strong> — make sure it says <strong>"DNS only"</strong> and shows a <strong>gray cloud</strong>. If you see an <strong>orange cloud</strong>, click the toggle to turn it off. Do this for <strong>both</strong> records.</> },
      { type: 'blue' as const, icon: Info, text: <>Don't worry if these numbers and codes look confusing — you don't need to understand what they mean. Just <strong>copy them exactly as shown</strong> and click Save. That's it!</> },
    ],
  },
];

const tipStyles = {
  green: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  blue: 'bg-sky-50 border-sky-200 text-sky-800',
  yellow: 'bg-amber-50 border-amber-200 text-amber-800',
};

export default function DomainSetupGuide() {
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
            Connect Your Own Domain<br />
            <span className="italic text-brand-accent">to Your Website</span>
          </h1>
          <p className="text-lg text-brand-primary/60 max-w-xl mx-auto leading-relaxed">
            No technical experience needed — just follow along one step at a time. If you get stuck on anything, send me a message and I'll walk you through it.
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
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['Buy your domain', 'Confirm it works', 'Send me the name', 'Add 2 settings'].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <span className="flex items-center gap-2 bg-brand-primary/5 rounded-full px-3 py-1.5 text-sm font-semibold">
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
            {'link' in step && step.link && (
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

            {/* Videos */}
            {'videos' in step && step.videos && step.videos.map((vid, j) => (
              <div key={j} className="mt-5 rounded-xl border-2 border-brand-primary/10 overflow-hidden">
                <div className={`${step.color} text-white text-xs font-bold px-4 py-2 tracking-wide`}>
                  {vid.caption}
                </div>
                <div className="bg-white p-4 flex justify-center">
                  <video
                    src={vid.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="max-w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            ))}

            {/* DNS Records — friendly format */}
            {'dnsRecords' in step && step.dnsRecords && (
              <div className="space-y-4 mt-5">
                <p className="text-xs font-bold text-brand-accent uppercase tracking-wider">What to type in each box</p>
                {step.dnsRecords.map((record, j) => (
                  <div key={j} className="border-2 border-dashed border-brand-accent/20 rounded-xl px-5 py-4">
                    <p className="font-sans font-bold text-brand-primary mb-3">{record.which}:</p>
                    <div className="space-y-2">
                      {record.steps.map((field, k) => (
                        <div key={k} className="flex flex-wrap items-baseline gap-x-2">
                          <span className="font-sans font-semibold text-sm text-brand-primary/60">{field.label}:</span>
                          <span className="font-mono font-bold text-brand-primary">{field.value}</span>
                          <span className="font-sans text-xs text-brand-primary/40">{field.note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tips */}
            {'tips' in step && step.tips?.map((tip, j) => (
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
          <Globe size={48} className="mx-auto mb-4 text-brand-accent" />
          <h2 className="text-2xl md:text-3xl mb-3">You're All Done!</h2>
          <p className="text-white/70 text-base max-w-lg mx-auto leading-relaxed font-sans">
            Once both settings are saved, your domain will connect to your website automatically. It can take anywhere from a few minutes to a couple of hours — that's completely normal. I'll handle everything else from here!
          </p>
        </motion.div>

        {/* Link to other guide */}
        <div className="text-center mt-10">
          <a
            href="/guide/web3forms"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-brand-accent hover:underline"
          >
            Need to set up your contact form? Follow the Contact Form Guide <ChevronRight size={14} />
          </a>
        </div>

        {/* Footer attribution */}
        <p className="text-center text-sm text-brand-primary/30 mt-6 font-sans">
          Studio 925 &middot; studio925.design
        </p>
      </div>
    </div>
  );
}
