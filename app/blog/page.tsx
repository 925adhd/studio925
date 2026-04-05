import type { Metadata } from 'next';
import BlogIndex from './blog-index';

export const metadata: Metadata = {
  title: 'Blog — Web Design Tips for Small Businesses | Studio 925',
  description: 'Honest advice on web design, pricing, DIY vs custom websites, and how to get more customers online. Written for small business owners by a Kentucky web designer.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Web Design Tips for Small Businesses | Studio 925',
    description: 'Honest advice on web design, pricing, DIY vs custom websites, and how to get more customers online.',
    url: '/blog',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
};

export default function Page() {
  return <BlogIndex />;
}
