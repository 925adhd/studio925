'use client';

import dynamic from 'next/dynamic';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import TrustStrip from '../src/components/TrustStrip';

// Lazy load everything below the fold to unblock LCP
const Services = dynamic(() => import('../src/components/Services'), { ssr: true });
const Comparison = dynamic(() => import('../src/components/Comparison'), { ssr: true });
const SpeedProof = dynamic(() => import('../src/components/SpeedProof'), { ssr: true });
const Pricing = dynamic(() => import('../src/components/Pricing'), { ssr: true });
const PortfolioPreview = dynamic(() => import('../src/components/PortfolioPreview'), { ssr: true });
const WhoItsFor = dynamic(() => import('../src/components/WhoItsFor'), { ssr: true });
const LocalSection = dynamic(() => import('../src/components/LocalSection'), { ssr: true });
const Contact = dynamic(() => import('../src/components/Contact'), { ssr: true });
const Footer = dynamic(() => import('../src/components/Footer'), { ssr: true });

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Services />
        <Comparison />
        <Pricing />
        <SpeedProof />

        {/* Process Section — Timeline */}
        <section id="process" className="py-20 md:py-36 px-6 bg-white border-t border-brand-primary/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl mb-2 md:mb-3">How it works.</h2>
              <p className="text-brand-primary/60 text-base md:text-lg mb-1">This shouldn't feel like <span className="italic text-emerald-700">a second job.</span></p>
              <p className="text-brand-primary/65 text-xs md:text-sm">No homework. No confusion. Just a clear process from start to finish.</p>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-primary/10 md:-translate-x-px" />

              {[
                { step: "01", title: "Quick Conversation", desc: "Tell me about your business, or just point me to your current website or Facebook page. That's enough to get started.", time: "Day 1", illustration: (
                  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-auto">
                    {/* First chat bubble */}
                    <rect x="8" y="20" width="58" height="38" rx="12" fill="#059669" opacity="0.15" />
                    <rect x="12" y="24" width="50" height="30" rx="10" fill="#059669" opacity="0.22" />
                    <circle cx="27" cy="39" r="3" fill="#059669" style={{ animation: 'dot-typing 1.8s ease-in-out infinite' }} />
                    <circle cx="37" cy="39" r="3" fill="#059669" style={{ animation: 'dot-typing 1.8s ease-in-out 0.3s infinite' }} />
                    <circle cx="47" cy="39" r="3" fill="#059669" style={{ animation: 'dot-typing 1.8s ease-in-out 0.6s infinite' }} />
                    <path d="M18 54 L12 66 L28 54" fill="#059669" opacity="0.22" />
                    {/* Reply bubble — slides in */}
                    <g style={{ animation: 'reply-in 0.6s ease-out 0.5s both' }}>
                      <rect x="50" y="48" width="62" height="32" rx="10" fill="#059669" opacity="0.13" />
                      <rect x="54" y="52" width="54" height="24" rx="8" fill="#059669" opacity="0.2" />
                      <rect x="62" y="61" width="20" height="3" rx="1.5" fill="#059669" opacity="0.4" />
                      <rect x="62" y="67" width="32" height="3" rx="1.5" fill="#059669" opacity="0.3" />
                      <path d="M100 80 L108 90 L94 80" fill="#059669" opacity="0.2" />
                    </g>
                    {/* Person silhouette */}
                    <circle cx="98" cy="16" r="8" fill="#0f172a" opacity="0.1" />
                    <path d="M86 38 Q98 28 110 38" fill="#0f172a" opacity="0.08" />
                  </svg>
                )},
                { step: "02", title: "48-Hour Draft", desc: "You'll have a working draft of your website within 48 hours. No weeks of waiting around.", time: "Day 2–3", illustration: (
                  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-auto">
                    {/* Clock face */}
                    <circle cx="60" cy="50" r="38" fill="#059669" opacity="0.08" />
                    <circle cx="60" cy="50" r="32" fill="white" stroke="#059669" strokeWidth="2" strokeOpacity="0.25" />
                    <circle cx="60" cy="50" r="28" fill="#059669" opacity="0.04" />
                    {/* Hour markers */}
                    <rect x="59" y="22" width="2" height="6" rx="1" fill="#059669" opacity="0.4" />
                    <rect x="59" y="72" width="2" height="6" rx="1" fill="#059669" opacity="0.4" />
                    <rect x="86" y="49" width="6" height="2" rx="1" fill="#059669" opacity="0.4" />
                    <rect x="28" y="49" width="6" height="2" rx="1" fill="#059669" opacity="0.4" />
                    {/* Hour hand */}
                    <line x1="60" y1="50" x2="60" y2="34" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" style={{ transformOrigin: '60px 50px', animation: 'hand-spin 120s linear infinite' }} />
                    {/* Minute hand */}
                    <line x1="60" y1="50" x2="60" y2="28" stroke="#059669" strokeWidth="2" strokeLinecap="round" opacity="0.7" style={{ transformOrigin: '60px 50px', animation: 'hand-spin 20s linear infinite' }} />
                    <circle cx="60" cy="50" r="3" fill="#059669" opacity="0.6" />
                    {/* "48h" label */}
                    <rect x="74" y="62" width="34" height="18" rx="9" fill="#059669" opacity="0.15" />
                    <text x="91" y="75" textAnchor="middle" fontSize="11" fontWeight="700" fill="#059669" opacity="0.7" fontFamily="system-ui">48h</text>
                  </svg>
                )},
                { step: "03", title: "Review & Refine", desc: "You tell me what you like, what to change, and I handle the rest. Revisions until you're happy.", time: "Day 3–5", illustration: (
                  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-auto">
                    {/* Document */}
                    <rect x="24" y="8" width="56" height="72" rx="8" fill="white" stroke="#059669" strokeWidth="1.5" strokeOpacity="0.2" />
                    <rect x="24" y="8" width="56" height="72" rx="8" fill="#059669" opacity="0.04" />
                    {/* Text lines on document */}
                    <rect x="34" y="22" width="28" height="3" rx="1.5" fill="#0f172a" opacity="0.12" />
                    <rect x="34" y="30" width="36" height="3" rx="1.5" fill="#0f172a" opacity="0.08" />
                    <rect x="34" y="38" width="32" height="3" rx="1.5" fill="#0f172a" opacity="0.08" />
                    <rect x="34" y="46" width="24" height="3" rx="1.5" fill="#0f172a" opacity="0.08" />
                    <rect x="34" y="54" width="36" height="3" rx="1.5" fill="#0f172a" opacity="0.08" />
                    <rect x="34" y="62" width="18" height="3" rx="1.5" fill="#0f172a" opacity="0.08" />
                    {/* Pencil — angled to touch the document, writing motion */}
                    <g style={{ animation: 'pencil-write 2s ease-in-out 0.4s infinite' }}>
                      <rect x="0" y="0" width="6" height="34" rx="1.5" fill="#059669" opacity="0.25" />
                      <rect x="0" y="0" width="6" height="7" rx="1.5" fill="#059669" opacity="0.45" />
                      <path d="M0 34 L3 40 L6 34" fill="#059669" opacity="0.4" />
                    </g>
                    {/* Single checkmark — pops in */}
                    <g style={{ transformOrigin: '96px 24px', animation: 'check-pop 0.4s ease-out 0.8s both' }}>
                      <circle cx="96" cy="24" r="10" fill="#059669" opacity="0.12" />
                      <path d="M90 24 L94 28 L102 20" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                    </g>
                  </svg>
                )},
                { step: "04", title: "Launch", desc: "Your site goes live. Domain connected, SSL secured, Google notified. You're online and ready for customers. Most projects launch within a week.", time: "Day 5–7", illustration: (
                  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-auto">
                    {/* Rocket — gentle float */}
                    <g style={{ animation: 'rocket-float 3s ease-in-out infinite' }}>
                      {/* Rocket body */}
                      <path d="M60 8 Q68 20 68 40 L52 40 Q52 20 60 8Z" fill="#059669" opacity="0.25" />
                      <path d="M56 12 Q60 8 64 12 Q66 22 66 38 L54 38 Q54 22 56 12Z" fill="#059669" opacity="0.35" />
                      {/* Rocket window */}
                      <circle cx="60" cy="26" r="4" fill="white" opacity="0.85" />
                      <circle cx="60" cy="26" r="2.5" fill="#059669" opacity="0.25" />
                      {/* Rocket fins */}
                      <path d="M52 32 L44 42 L52 40Z" fill="#059669" opacity="0.22" />
                      <path d="M68 32 L76 42 L68 40Z" fill="#059669" opacity="0.22" />
                      {/* Flame — flickers */}
                      <path d="M54 40 Q57 52 60 56 Q63 52 66 40Z" fill="#059669" opacity="0.2" style={{ transformOrigin: '60px 40px', animation: 'flame-flicker 0.8s ease-in-out infinite' }} />
                      <path d="M56 40 Q58 48 60 52 Q62 48 64 40Z" fill="#059669" opacity="0.3" style={{ transformOrigin: '60px 40px', animation: 'flame-flicker 0.8s ease-in-out 0.4s infinite' }} />
                    </g>
                    {/* Smoke trail — static */}
                    <circle cx="60" cy="62" r="5" fill="#0f172a" opacity="0.08" />
                    <circle cx="55" cy="70" r="7" fill="#0f172a" opacity="0.06" />
                    <circle cx="66" cy="72" r="6" fill="#0f172a" opacity="0.06" />
                    <circle cx="58" cy="80" r="8" fill="#0f172a" opacity="0.04" />
                    {/* Ground line */}
                    <path d="M20 90 Q40 85 60 88 Q80 91 100 86" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />
                  </svg>
                )}
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-5 md:gap-0 mb-10 md:mb-20 last:mb-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot on the line */}
                  <div className="absolute left-4 md:left-1/2 top-1 md:top-3 w-2.5 h-2.5 rounded-full bg-brand-accent ring-4 ring-white -translate-x-1/2 z-10" />

                  {/* Spacer for mobile left offset */}
                  <div className="w-10 shrink-0 md:hidden" />

                  {/* Content */}
                  <div className={`flex-1 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                  }`}>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-1.5">{item.time}</span>
                    <h3 className="text-base md:text-lg font-sans font-bold mb-1.5">{item.title}</h3>
                    <p className="text-xs md:text-sm text-brand-primary/60 leading-relaxed">{item.desc}</p>
                    {/* Illustration — desktop only; decorative, hidden on mobile for shorter scroll */}
                  </div>

                  {/* Illustration on opposite side — desktop only */}
                  <div className={`hidden md:flex md:w-[calc(50%-2rem)] items-start ${
                    i % 2 === 0 ? 'pl-12 justify-start' : 'pr-12 justify-end'
                  }`}>
                    {item.illustration}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-xs text-brand-primary/60 mt-10 md:mt-14 max-w-md mx-auto leading-relaxed">
              Clear milestones. Regular updates. Direct communication from start to finish.
            </p>
          </div>
        </section>

        <PortfolioPreview />
        <WhoItsFor />
        <LocalSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
