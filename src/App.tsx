/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LocalSection from './components/LocalSection';
import ScrollToTop from './components/ScrollToTop';
import GraysonCountyPage from './pages/GraysonCountyPage';
import KentuckyPage from './pages/KentuckyPage';
import Portfolio from './pages/Portfolio';
import { motion, useScroll, useSpring } from 'motion/react';

function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
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
                { step: "01", title: "Discovery", desc: "You get clarity on your goals, your customers, and the direction your site needs to take. No tech talk." },
                { step: "02", title: "Strategy", desc: "Your site is structured to guide visitors toward action. Not just look good." },
                { step: "03", title: "Build", desc: "Your site is built fast, secure, and mobile-ready. Nothing generic. Built specifically for your business." },
                { step: "04", title: "Launch", desc: "You launch with confidence and know exactly how to manage it. Your online presence finally works for you." }
              ].map((item, i) => (
                <div key={i} className="relative p-10 glass rounded-3xl">
                  <span className="text-5xl font-serif font-bold italic text-brand-accent/20 absolute top-4 right-6">{item.step}</span>
                  <h3 className="text-xl font-sans font-bold mb-6 mt-4">{item.title}</h3>
                  <p className="text-sm text-brand-primary/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="pt-0 pb-20 px-6 bg-white">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl mb-8 text-brand-primary">Project Details</h2>
            <p className="text-brand-primary/60 leading-relaxed mb-4">
              Projects begin with a 50% deposit. The remaining balance is due at launch.
            </p>
            <p className="text-brand-primary/60 leading-relaxed">
              Full ownership of all website files transfers upon final payment.
            </p>
          </div>
        </section>

        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-design-grayson-county-ky" element={<GraysonCountyPage />} />
        <Route path="/small-business-website-design-kentucky" element={<KentuckyPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}
