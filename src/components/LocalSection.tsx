import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function LocalSection() {
  return (
    <section className="relative pt-10 md:pt-24 pb-24 px-6 bg-brand-warm overflow-hidden" id="local">

      {/* County outline — decorative background */}
      <style>{`
        .county-bg {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 1200px;
          opacity: 0.4;
          pointer-events: none;
          user-select: none;
        }
        @media (max-width: 767px) {
          .county-bg {
            width: 75vw;
            opacity: 0.07;
            top: 30%;
          }
        }
      `}</style>
      <img
        src="/county.png"
        alt=""
        aria-hidden="true"
        className="county-bg"
      />

      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-brand-primary text-white text-xs font-medium mb-6">
            <MapPin size={12} className="shrink-0" /> Grayson County, KY
          </div>

          <p className="text-xs font-medium tracking-widest uppercase text-brand-primary/40 mb-3">Behind the work</p>

          <h2 className="text-4xl md:text-5xl mb-6">
            Local designer. <span className="italic text-brand-accent">Websites that work.</span>
          </h2>

          <div className="space-y-4 text-brand-primary/70 text-lg leading-relaxed">
            <p>
              I'm a Grayson County–based web designer who works directly with small business owners. When you hire Studio 925, you're working with the person building your site.
            </p>
            <p>
              No agencies. No outsourcing. No middlemen.
            </p>
            <p>
              Just clear, focused work that helps your business get found and look professional online. If needed, we can sit down and talk through your goals in person.
            </p>
            <p className="text-brand-primary/90 font-medium">
              That kind of access is rare.
            </p>
            <p>
              Local businesses don't need flashy tech.<br />
              They need results.<br />
              Clear. Easy to use. Built to be found. Built to be trusted.
            </p>
            <p className="text-brand-primary/90 font-medium">
              Built for local businesses serious about growth.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/#pricing"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl font-semibold hover:scale-[1.02] transition-transform"
            >
              See Pricing
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center order-1 md:order-2"
        >
          <img
            src="/me.png"
            alt="Studio 925 — local web designer in Grayson County, KY"
            className="w-64 md:w-full max-w-xs object-cover rounded-3xl shadow-xl shadow-brand-primary/10"
          />
        </motion.div>

      </div>
    </section>
  );
}
