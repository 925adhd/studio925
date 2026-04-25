import type { Metadata } from 'next';
import ArticlePage from './content';

export const metadata: Metadata = {
  title: 'Wix vs Custom Website: Which Is Right for Your Small Business? | Studio 925',
  description: 'An honest comparison of Wix, Squarespace, and custom-built websites. Compare costs, speed, SEO, and long-term value for your small business.',
  alternates: { canonical: '/blog/wix-vs-custom-website' },
  openGraph: {
    title: 'Wix vs Custom Website: Which Is Right for Your Small Business?',
    description: 'An honest comparison of Wix, Squarespace, and custom-built websites for small businesses.',
    url: '/blog/wix-vs-custom-website',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
};

const faqItems = [
  {
    question: 'Is Wix good for a small business website?',
    answer: 'Wix works for basic needs like a personal portfolio or hobby blog. For a business that depends on Google traffic, fast load times, and converting visitors into customers, a custom-built website typically performs better in every measurable category.',
  },
  {
    question: 'How much does a custom website cost compared to Wix?',
    answer: 'Wix plans run $17–$159/month (plus your time building it). A custom website from Studio 925 starts at $900 one-time, with optional hosting at $25–$49/month. Over two years, the total cost is often comparable, but the custom site performs significantly better.',
  },
  {
    question: 'Can I switch from Wix to a custom website?',
    answer: 'Yes. Your content (text, images, branding) carries over. The site itself gets rebuilt from scratch for better speed, SEO, and design. Studio 925 handles the full migration, so you don\'t lose anything.',
  },
  {
    question: 'Do custom websites rank better on Google than Wix?',
    answer: 'In most cases, yes. Custom websites load faster, have cleaner code structure, and can be optimized specifically for the search terms your customers use. Wix adds extra code overhead that slows things down.',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wix vs Custom Website: Which Is Right for Your Small Business?',
  image: 'https://studio925.design/wix-vs-custom-website-comparison.webp',
  author: { '@type': 'Person', name: 'Kara Gibson', url: 'https://studio925.design' },
  publisher: { '@type': 'Organization', name: 'Studio 925', url: 'https://studio925.design' },
  datePublished: '2026-04-02',
  dateModified: '2026-04-07',
  description: 'An honest comparison of Wix, Squarespace, and custom-built websites for small businesses.',
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <ArticlePage faqItems={faqItems} />
    </>
  );
}
