import { motion } from 'motion/react';
import { Mail, MessageSquare, Calendar, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-brand-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
              Your next customer is already <br />
              <span className="italic text-brand-accent">searching for you.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-lg">
              Tell me about your business. No pressure, no pitch — just an honest conversation about what would actually help you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Email Me</p>
                  <p className="text-lg font-medium">contact@studio925.design</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Book a Free Call</p>
                  <p className="text-lg font-medium">Schedule on Calendly</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white text-brand-primary p-8 md:p-12 rounded-[3rem] shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-50">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-brand-primary/10 focus:outline-none focus:border-brand-accent transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-50">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-brand-primary/10 focus:outline-none focus:border-brand-accent transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider opacity-50">Business Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-brand-primary/10 focus:outline-none focus:border-brand-accent transition-colors bg-white">
                  <option>Local Service Provider</option>
                  <option>Small Business</option>
                  <option>Community Platform</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider opacity-50">Project Details</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-brand-primary/10 focus:outline-none focus:border-brand-accent transition-colors" placeholder="Tell me about your business and what you need..."></textarea>
              </div>
              <button className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-all group">
                Start My Website <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
