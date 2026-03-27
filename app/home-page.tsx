'use client';

import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import Pricing from '../src/components/Pricing';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import LocalSection from '../src/components/LocalSection';

import WebsiteCare from '../src/components/WebsiteCare';

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
        <Services />
        <LocalSection />

        {/* Process Section */}
        <section id="process" className="pt-16 md:pt-24 pb-14 px-6 bg-white border-t border-brand-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl mb-2 md:mb-3">How it works.</h2>
              <p className="text-brand-primary/60 text-base md:text-lg mb-1">This shouldn't feel like <span className="italic text-brand-accent">a second job.</span></p>
              <p className="text-brand-primary/40 text-xs md:text-sm">No homework. No confusion. Just a clear process from start to finish.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { step: "01", title: "Quick Conversation", desc: "Tell me about your business, or just point me to your current website or Facebook page. That's enough to get started." },
                { step: "02", title: "48-Hour Draft", desc: "You'll have a rough draft to look at within 48 hours. No weeks of waiting around." },
                { step: "03", title: "Review & Refine", desc: "You tell me what you like, what to change, and I handle the rest." },
                { step: "04", title: "Launch", desc: "Your site goes live. I'll walk you through setting up your domain, and handle the rest." }
              ].map((item, i) => (
                <div key={i} className="relative p-5 md:p-8 glass rounded-2xl md:rounded-3xl">
                  <span className="text-lg md:text-4xl font-serif font-bold italic text-brand-accent/15 absolute top-1.5 right-2.5 md:top-3 md:right-5">{item.step}</span>
                  <h3 className="text-sm md:text-lg font-sans font-bold mb-2 md:mb-3 mt-1 md:mt-2 pr-6 md:pr-0">{item.title}</h3>
                  <p className="text-xs md:text-sm text-brand-primary/55 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-brand-primary/40 mt-6 md:mt-10 max-w-md mx-auto leading-relaxed">
              Clear milestones. Regular updates. Direct communication from start to finish.
            </p>
          </div>
        </section>


        <Pricing />
        <WebsiteCare />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
