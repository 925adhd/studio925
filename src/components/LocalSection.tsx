'use client';

import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

export default function LocalSection() {
  return (
    <section className="relative py-10 md:pt-12 md:pb-36 px-6 bg-brand-warm overflow-hidden" id="local">

      {/* County outline — decorative background */}
      <style>{`
        .county-bg {
          position: absolute;
          left: 50%;
          top: 55%;
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
        src="/county.webp"
        alt="Map of Grayson County, Kentucky service area for Studio 925 web design"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="county-bg"
      />

      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1"
        >
          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-brand-primary/10 text-brand-primary/60 text-xs font-medium mb-6">
            <MapPin size={12} className="shrink-0" /> <Link href="/web-design-grayson-county-ky" className="hover:text-brand-accent transition-colors">Grayson County, KY</Link>
          </div>

          <h2 className="text-3xl md:text-5xl mb-5 md:mb-6">
            Local website designer. <span className="block italic text-brand-accent">Not an agency.</span>
          </h2>

          <div className="space-y-3.5 text-brand-primary/75 text-base leading-relaxed">
            <p>
              You work directly with the person building your site. I'm in <Link href="/website-design-leitchfield-ky" className="text-emerald-800 font-semibold hover:underline">Leitchfield, Kentucky</Link>, right here in <Link href="/web-design-grayson-county-ky" className="text-emerald-800 font-semibold hover:underline">Grayson County</Link>.
            </p>
            <p>
              When you have a question, you call me. When something needs to change, I handle it.
            </p>
          </div>

          <p className="text-brand-primary font-bold text-xl md:text-2xl mt-6">
            Someone <span className="italic text-emerald-700">in your corner.</span>
          </p>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col items-center order-2 md:mt-24"
        >
          <img
            src="/kara-gibson.webp"
            alt="Kara Gibson, local web designer in Grayson County, Kentucky"
            width={320} height={320}
            loading="lazy"
            className="w-64 md:w-full max-w-xs object-cover rounded-3xl shadow-xl shadow-brand-primary/10"
          />
          <div className="mt-4 text-center">
            <Link href="/web-design-grayson-county-ky" className="md:hidden inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-brand-primary text-white text-xs font-medium mb-4 hover:bg-brand-primary/90 transition-colors">
              <MapPin size={12} className="shrink-0" /> Grayson County, KY
            </Link>
            <span className="block text-xs font-normal text-brand-primary/75">Kara Gibson</span>
            <span className="block text-xs font-normal text-brand-primary/75 mt-0.5">Owner, Studio 925</span>
            <a href="tel:2705512210" className="block text-xs text-brand-primary/75 mt-2 hover:text-emerald-800 transition-colors">Call or text: 270-551-2210</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
