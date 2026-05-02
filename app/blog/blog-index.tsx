'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

const posts = [
  {
    slug: 'why-i-stopped-using-godaddy',
    title: 'Why I Stopped Using GoDaddy and Learned to Code Instead',
    excerpt: 'GoDaddy\'s builder still locks custom HTML inside iframes and won\'t let you edit the head tag. Here\'s how those limits pushed me to write code, and what changed.',
    date: '2026-05-02',
    readTime: '5 min read',
    tags: ['Story', 'Small Business'],
    image: '/why-i-stopped-using-godaddy.webp',
  },
  {
    slug: 'wix-vs-custom-website',
    title: 'Wix vs Custom Website: Which Is Right for Your Small Business?',
    excerpt: 'An honest comparison of costs, speed, SEO, and long-term value, so you can decide what actually makes sense for your business.',
    date: '2026-04-02',
    readTime: '6 min read',
    tags: ['Comparison', 'Small Business'],
    image: '/wix-vs-custom-website-comparison.webp',
  },
  {
    slug: 'is-custom-website-worth-it',
    title: 'Is a Custom Website Worth It? Here\'s the Math.',
    excerpt: 'Your website is a business tool, not an expense. See how a $900 site can pay for itself with just one new customer.',
    date: '2026-04-02',
    readTime: '5 min read',
    tags: ['ROI', 'Small Business'],
    image: '/custom-website-worth-it-roi.webp',
  },
  {
    slug: 'what-to-look-for-in-a-local-web-designer',
    title: 'What to Look for in a Local Web Designer',
    excerpt: 'Hiring a local web designer for your small business? Here\'s what actually matters, what to ask before signing, and the red flags to walk away from.',
    date: '2026-04-06',
    readTime: '5 min read',
    tags: ['Hiring Guide', 'Small Business'],
    image: '/local-web-designer-kentucky.webp',
  },
  {
    slug: 'your-website-is-a-tax-write-off',
    title: 'Your Website Is a Tax Write-Off. Here\'s What to Know',
    excerpt: 'In most cases, a business website is tax-deductible as a business expense. Here\'s what small business owners need to know to keep more money in their pocket.',
    date: '2026-04-04',
    readTime: '4 min read',
    tags: ['Tax Tips', 'Small Business'],
    image: '/small-business-website-tax-write-off.webp',
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20 px-6">
        <section className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase text-brand-primary/40 mb-3">
              Blog
            </p>
            <h1 className="text-3xl md:text-5xl mb-3 leading-[1.1]">
              Honest Web Design Advice
            </h1>
            <p className="text-base md:text-lg text-brand-primary/60 max-w-xl leading-relaxed">
              No jargon, no upsells. Just straightforward answers to the questions small business owners actually ask.
            </p>
          </motion.div>
        </section>

        <section className="max-w-4xl mx-auto">

          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-3xl bg-white border border-brand-primary/5 hover:border-brand-accent/20 hover:shadow-lg hover:shadow-brand-accent/5 transition-all group overflow-hidden"
                >
                  {post.image ? (
                    <img
                      src={post.image}
                      alt=""
                      width={896}
                      height={300}
                      className="w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full aspect-[896/300] bg-gradient-to-br from-brand-accent/5 to-brand-primary/5 flex items-center justify-center border-b border-brand-primary/5">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-primary/30">Studio 925</span>
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-lg bg-brand-accent/10 text-brand-accent text-[10px] font-bold tracking-widest uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl md:text-2xl mb-2 group-hover:text-brand-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm md:text-base text-brand-primary/60 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-brand-primary/40">{post.readTime}</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent group-hover:gap-2.5 transition-all">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto text-center mt-16 py-14 px-8 bg-brand-primary text-white rounded-[2.5rem]">
          <h2 className="text-2xl md:text-3xl mb-3">
            Ready to stop researching and start building?
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Custom websites starting at $900. No templates, no hourly billing.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-3.5 rounded-2xl font-semibold hover:brightness-115 transition-all shadow-xl shadow-brand-accent/40"
          >
            Contact Kara <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
