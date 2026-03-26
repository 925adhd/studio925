'use client';

import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import Pricing from '../src/components/Pricing';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import LocalSection from '../src/components/LocalSection';
import NoHomework from '../src/components/NoHomework';
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
        <section id="process" className="hidden md:block pt-24 pb-14 px-6 bg-white border-t border-brand-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-3">How it works.</h2>
              <p className="text-brand-primary/50 text-sm">Simple, direct, and transparent from start to finish.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "We talk through your goals, your customers, and what success looks like." },
                { step: "02", title: "Strategy", desc: "I map out the structure and flow. You review and approve before anything is built." },
                { step: "03", title: "Build", desc: "Your site is built from scratch, section by section. You'll see progress along the way." },
                { step: "04", title: "Launch", desc: "We launch when you're confident. You'll know exactly how everything works." }
              ].map((item, i) => (
                <div key={i} className="relative p-8 glass rounded-3xl">
                  <span className="text-4xl font-serif font-bold italic text-brand-accent/15 absolute top-3 right-5">{item.step}</span>
                  <h3 className="text-lg font-sans font-bold mb-3 mt-2">{item.title}</h3>
                  <p className="text-sm text-brand-primary/55 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-brand-primary/40 mt-10 max-w-md mx-auto leading-relaxed">
              Clear milestones. Regular updates. Direct communication from start to finish.
            </p>
          </div>
        </section>

        <NoHomework />
        <Pricing />
        <WebsiteCare />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
