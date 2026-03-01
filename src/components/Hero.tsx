import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-pattern -z-10" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="flex items-center justify-center gap-1.5 flex-wrap text-[9px] sm:text-xs font-medium tracking-widest uppercase text-brand-primary/60 mb-3 sm:mb-5">
            <MapPin size={11} className="shrink-0 text-brand-primary/40 hidden sm:block" />
            Web Design for Local Businesses in Grayson County, Kentucky
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-7xl mb-3 md:mb-6 leading-[1.05] sm:leading-[1.1]">
            You deserve a website that <span className="italic text-brand-accent">works as hard as you do.</span>
          </h2>

          <p className="text-[17px] md:text-xl text-brand-primary/70 mb-9 md:mb-8 max-w-2xl leading-relaxed mx-auto">
            Studio 925 builds custom websites for local businesses in Grayson County that need more calls, more leads, and real growth. Built locally. Built personally. No outsourcing. No templates. Just focused, strategic work that helps your business get found and convert.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/#contact" className="bg-brand-primary text-white px-8 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-brand-primary/20">
              Build My Website <ArrowRight size={20} />
            </a>
            <Link to="/portfolio" className="bg-white border border-brand-primary/10 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-brand-primary/5 transition-colors">
              See My Work
            </Link>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-row flex-wrap gap-3 sm:gap-x-6 gap-y-3 items-center justify-center">
            {['Easy to Contact', 'Visible on Google', 'Look Trustworthy Online'].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-brand-primary/60 whitespace-nowrap">
                <CheckCircle2 size={16} className="text-brand-accent" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
