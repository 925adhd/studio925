'use client';

import { motion } from 'motion/react';
import { Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const plans = ['Foundation', 'Growth', 'Online Store', 'Not Sure Yet'];

export default function Contact() {
  const [selectedPlan, setSelectedPlan] = useState('Not Sure Yet');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handlePlanSelected = (e: Event) => {
      setSelectedPlan((e as CustomEvent).detail);
    };
    window.addEventListener('planSelected', handlePlanSelected);
    return () => window.removeEventListener('planSelected', handlePlanSelected);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', 'c6f8a1a3-cfa8-4688-8f3b-73e2f5a64182');
    formData.append('subject', 'New Studio 925 Website Inquiry');
    formData.append('from_name', 'Studio 925 – New Lead');
    formData.append('replyto', formData.get('Email') as string);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setSelectedPlan('Not Sure Yet');
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 pt-10 pb-24 md:py-36 px-6 bg-brand-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none select-none hidden md:block" aria-hidden="true">
        <img
          src="/custom-website-code-development.webp"
          alt="Custom website code being built for a small business by Studio 925"
          className="w-full h-full object-cover opacity-[0.08] -scale-x-100"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
              Let's build something <br />
              <span className="italic text-brand-accent">worth finding.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-lg">
              Tell me about your business. No pressure, no pitch. Just an honest conversation about what would actually help you.
            </p>

            <div className="space-y-6">
              <a href="mailto:kara@studio925.design" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Email Me</p>
                  <p className="text-lg font-medium">kara@studio925.design</p>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white text-brand-primary p-6 md:p-8 rounded-[2rem] shadow-xl"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-brand-accent/10 flex items-center justify-center mb-5">
                  <CheckCircle2 size={26} className="text-brand-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">You're all set!</h3>
                <p className="text-brand-primary/60">I'll review your details and be in touch shortly.</p>
              </div>
            ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider opacity-50">Name</label>
                  <input required name="Name" id="contact-name" type="text" className="w-full px-3 py-2.5 rounded-xl border border-brand-primary/10 focus:border-brand-accent transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider opacity-50">Email</label>
                  <input required name="Email" id="contact-email" type="email" className="w-full px-3 py-2.5 rounded-xl border border-brand-primary/10 focus:border-brand-accent transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <fieldset className="space-y-2">
                <legend className="text-xs font-bold uppercase tracking-wider opacity-50">Which plan are you interested in?</legend>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1" role="radiogroup" aria-label="Select a plan">
                  {plans.map((plan) => (
                    <button
                      key={plan}
                      type="button"
                      role="radio"
                      aria-checked={selectedPlan === plan}
                      onClick={() => setSelectedPlan(plan)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-left transition-all ${
                        selectedPlan === plan
                          ? 'text-brand-primary font-semibold'
                          : 'text-brand-primary/50 hover:text-brand-primary/70'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 transition-all ${
                        selectedPlan === plan
                          ? 'border-brand-accent bg-brand-accent'
                          : 'border-brand-primary/20'
                      }`} aria-hidden="true" />
                      {plan}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="Plan" value={selectedPlan} />
              </fieldset>
              <div className="space-y-2">
                <label htmlFor="contact-business-type" className="text-xs font-bold uppercase tracking-wider opacity-50">Business Type</label>
                <select name="Business Type" id="contact-business-type" className="w-full px-3 py-2.5 rounded-xl border border-brand-primary/10 focus:border-brand-accent transition-colors bg-white">
                  <option>Local Service Provider</option>
                  <option>Small Business</option>
                  <option>Community Platform</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-details" className="text-xs font-bold uppercase tracking-wider opacity-50">Project Details</label>
                <textarea name="Project Details" id="contact-details" rows={3} className="w-full px-3 py-2.5 rounded-xl border border-brand-primary/10 focus:border-brand-accent transition-colors text-base" placeholder="Tell me about your business or organization and what you're looking to create."></textarea>
              </div>
              {status === 'error' && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again or email me directly.</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-brand-primary text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-all group disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : <>Send Message <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
              </button>
            </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
