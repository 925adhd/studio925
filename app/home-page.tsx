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
        <section id="process" className="pt-32 pb-16 px-6 bg-white border-t border-brand-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">How I build websites <span className="italic text-brand-accent">that work.</span></h2>
            </div>

            <div className="grid md:grid-cols-4 gap-10">
              {[
                { step: "01", title: "Discovery", desc: "We clarify your goals, customers, and what success looks like — together. You'll know exactly what we're building and why before anything begins." },
                { step: "02", title: "Strategy", desc: "I map out the structure and user flow for your site based on your goals and your customers. You review and approve the plan before we move forward." },
                { step: "03", title: "Build", desc: <>Your website is built from scratch, not from a template, <strong className="font-semibold text-brand-primary/80">section by section</strong>. You'll see progress and receive a private preview before anything goes live.</> },
                { step: "04", title: "Launch", desc: "Once everything is finalized and approved, we launch with confidence. You'll know exactly how your site works and what to expect moving forward." }
              ].map((item, i) => (
                <div key={i} className="relative p-10 glass rounded-3xl">
                  <span className="text-5xl font-serif font-bold italic text-brand-accent/20 absolute top-4 right-6">{item.step}</span>
                  <h3 className="text-xl font-sans font-bold mb-6 mt-4">{item.title}</h3>
                  <p className="text-sm text-brand-primary/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-brand-primary/50 mt-12 max-w-xl mx-auto leading-relaxed">
              You'll never wonder what's happening with your project. Clear milestones. Regular updates. Direct communication from start to finish.
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
