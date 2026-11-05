import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// Kara's Google Workspace referral link
const REFERRAL_LINK = 'https://referworkspace.app.goo.gl/WpW8';

const screenshot = {
  src: '/guides/google-workspace-plans.webp',
  alt: 'Google Workspace plans page with the Starter "Start a trial" button and the Annual switch marked',
  width: 990,
  height: 853,
};

const steps = [
  {
    title: 'Start the free trial',
    body: (
      <>
        Open Google&apos;s plans page with the button above and click <strong>Start a trial</strong> under{' '}
        <strong>Starter</strong>, the plan on the far left. Then fill in your business name and contact info.
      </>
    ),
  },
  {
    title: 'Pick your address',
    body: (
      <>
        When Google asks about a domain, choose <strong>Yes, I have one I can use</strong> and type it in. Then pick
        your address, like <strong>contact@yourbusiness.com</strong>.
      </>
    ),
  },
  {
    title: 'Send me a screenshot',
    body: (
      <>
        When you reach <strong>Verify your domain</strong>, stop there. Screenshot it and send it to me. I&apos;ll
        connect everything on my end and text you when it&apos;s ready.
      </>
    ),
  },
  {
    title: 'Sign in',
    body: (
      <>
        Sign in at <strong>gmail.com</strong>{' '}or in the Gmail app with your new address. Then text me the address and
        I&apos;ll add it to your website.
      </>
    ),
  },
];

export default function EmailGuide() {
  return (
    <div className="min-h-screen bg-brand-warm selection:bg-brand-accent selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12 md:pt-10 md:pb-20">
        <Link href="/" aria-label="Studio 925 home" className="inline-block">
          <img src="/logo.webp" alt="Studio 925" width={162} height={56} className="h-8 md:h-9 w-auto" />
        </Link>

        <main className="mt-8 md:mt-16 grid gap-10 md:grid-cols-12 md:gap-x-14 md:gap-y-12">
          {/* Intro and the one action */}
          <header className="md:col-span-6 md:row-start-1">
            <h1 className="text-[2.1rem] leading-[1.08] md:text-5xl">Get a business email with your own domain</h1>
            <p className="mt-4 text-base md:text-lg text-brand-primary/80 leading-relaxed max-w-md">
              Google Workspace gives you an address like you@yourbusiness.com. It works just like Gmail, on any device.
            </p>
            <a
              href={REFERRAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 whitespace-nowrap btn-lit [--btn:var(--color-brand-primary)] hover:[--btn:#1e293b] text-white font-semibold rounded-xl px-5 py-3"
            >
              Start my free trial <ArrowUpRight size={17} className="shrink-0" aria-hidden />
            </a>
            <p className="mt-3 text-sm text-brand-primary/70 leading-relaxed max-w-md">
              14 days free, then about $7 a month per person. This link takes 10% off your first year. Google bills you
              directly.
            </p>
          </header>

          {/* What to click on Google's page */}
          <figure className="md:col-span-6 md:col-start-7 md:row-span-2 md:row-start-1 md:self-start md:sticky md:top-8">
            <a
              href={screenshot.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl ring-1 ring-brand-primary/10 bg-white p-2 sm:p-3 sm:pointer-events-none"
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                sizes="(min-width: 768px) 520px, 100vw"
                className="w-full h-auto rounded-lg"
                priority
              />
            </a>
            <figcaption className="mt-3 text-sm text-brand-primary/80 leading-relaxed">
              <ol className="space-y-1.5">
                <li className="flex gap-2.5">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 tabular-nums">1</span>
                  <span>Click this one.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 tabular-nums">2</span>
                  <span>On means you pay yearly, which is cheaper. Off means monthly.</span>
                </li>
              </ol>
              <span className="mt-2 block text-brand-primary/60 sm:hidden">Tap the picture to see it bigger.</span>
            </figcaption>
          </figure>

          {/* The steps */}
          <section aria-labelledby="steps-heading" className="md:col-span-6 md:row-start-2">
            <h2 id="steps-heading" className="text-2xl md:text-3xl">What to do, in order</h2>
            <ol className="mt-5 border-t border-brand-primary/15">
              {steps.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[2.25rem_1fr] gap-x-3 py-5 border-b border-brand-primary/15">
                  <span className="font-serif text-3xl leading-none text-brand-accent tabular-nums" aria-hidden>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl leading-snug">{step.title}</h3>
                    <p className="mt-1.5 text-brand-primary/80 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-brand-primary/80 leading-relaxed">
              Stuck on a screen? Send me a screenshot of it and I&apos;ll tell you what to click.
            </p>
          </section>
        </main>

        <p className="mt-14 md:mt-20 pt-6 border-t border-brand-primary/10 text-sm text-brand-primary/70">
          Studio 925 &middot;{' '}
          <a href="https://studio925.design" className="underline-offset-2 hover:underline hover:text-emerald-800">
            studio925.design
          </a>
        </p>
      </div>
    </div>
  );
}
