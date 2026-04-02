'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'CS Media',
    tag: 'Real Estate Media · Leitchfield, KY',
    images: ['/csmedia.webp', '/cs1.webp', '/cs2.webp', '/cs3.webp', '/cs4.webp', '/cs5.webp'],
    href: 'https://csmedia.vercel.app',
  },
  {
    title: 'Townly',
    tag: 'Community Platform',
    image: '/townly.webp',
    href: 'https://townly.us',
  },
  {
    title: 'Four Chariots',
    tag: 'E-Commerce Brand',
    image: '/4chariots.webp',
    href: 'https://4chariots.com',
  },
];

function CarouselImage({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt={`CS Media website screenshot ${i + 1}`}
          loading="lazy"
          className={`w-full h-full object-cover transition-opacity duration-700 ${i === 0 ? '' : 'absolute inset-0'} ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
}

export default function PortfolioPreview() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white border-t border-brand-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
            Real websites for <span className="italic text-brand-accent">real businesses</span>
          </h2>
          <p className="text-sm md:text-base text-brand-primary/60 max-w-lg mx-auto">
            Every project is built from scratch. No templates, no page builders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl md:rounded-3xl overflow-hidden border border-brand-primary/5 bg-white shadow-sm shadow-brand-primary/5"
            >
              <div className="aspect-[16/10] overflow-hidden bg-brand-primary/5 p-3 md:p-4">
                {'images' in project && project.images ? (
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-md shadow-brand-primary/10 flex items-center">
                    <CarouselImage images={project.images} />
                  </div>
                ) : (
                  <div className="w-full h-full rounded-md overflow-hidden shadow-md shadow-brand-primary/10">
                    <img
                      src={project.image}
                      alt={`${project.title} website designed by Studio 925`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
              </div>
              <div className="p-4 md:p-5">
                <p className="font-bold text-sm md:text-base">{project.title}</p>
                <p className="text-xs text-brand-primary/50">{project.tag}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-brand-primary/90 transition-all group"
          >
            View Full Portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
