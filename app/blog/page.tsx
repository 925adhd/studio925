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

const collectionLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Studio 925 Blog',
  description: 'Web design advice for small business owners.',
  url: 'https://studio925.design/blog',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Studio 925',
    url: 'https://studio925.design',
  },
  hasPart: [
    {
      '@type': 'BlogPosting',
      headline: 'What to Look for in a Local Web Designer',
      url: 'https://studio925.design/blog/what-to-look-for-in-a-local-web-designer',
    },
    {
      '@type': 'BlogPosting',
      headline: 'Your Website Is a Tax Write-Off. Here\'s What to Know',
      url: 'https://studio925.design/blog/your-website-is-a-tax-write-off',
    },
    {
      '@type': 'BlogPosting',
      headline: 'Is a Custom Website Worth It? Here\'s the Math.',
      url: 'https://studio925.design/blog/is-custom-website-worth-it',
    },
    {
      '@type': 'BlogPosting',
      headline: 'Wix vs Custom Website: Which Is Right for Your Small Business?',
      url: 'https://studio925.design/blog/wix-vs-custom-website',
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }} />
      <BlogIndex />
    </>
  );
}
