import type { Metadata } from 'next';
import ArticlePage from './content';

export const metadata: Metadata = {
  title: 'Is a Custom Website Worth It? Here\'s the Math | Studio 925',
  description: 'Honest ROI math on whether a custom website actually pays for itself for a small business. Real numbers, no sales pitch.',
  alternates: { canonical: '/blog/is-custom-website-worth-it' },
  openGraph: {
    title: 'Is a Custom Website Worth It? Here\'s the Math.',
    description: 'Honest ROI math on whether a custom website actually pays for itself for a small business.',
    url: '/blog/is-custom-website-worth-it',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
};

const faqItems = [
  {
    question: 'How long does it take for a website to pay for itself?',
    answer: 'For most service businesses, a single new customer from your website covers the entire cost. If your average job is $1,500+ and your site brings in even one client per month, the ROI is significant within the first few weeks.',
  },
  {
    question: 'What\'s a normal price for a small business website?',
    answer: 'Custom small business websites typically range from $900 to $5,000 depending on scope. Freelancers usually fall in the $2,000–$5,000 range, and agencies often start at $10,000 or more because of their overhead. Anything under $500 is almost always a template with a markup.',
  },
  {
    question: 'What if my website doesn\'t bring in any new customers?',
    answer: 'A well-built website with proper SEO structure gives your business the best chance to be found online. While no one can guarantee specific results, a professional site outperforms DIY builders in speed, search rankings, and conversion rates.',
  },
  {
    question: 'Do I need a website if I already get customers from word of mouth?',
    answer: 'Word of mouth is powerful — but even referrals will Google your business before calling. A professional website confirms you\'re legitimate and makes it easy to take that next step. It also opens a second channel of customers who find you through search.',
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
  headline: 'Is a Custom Website Worth It? Here\'s the Math.',
  image: 'https://studio925.design/custom-website-worth-it-roi.webp',
  author: { '@type': 'Person', name: 'Kara Gibson', url: 'https://studio925.design' },
  publisher: { '@type': 'Organization', name: 'Studio 925', url: 'https://studio925.design' },
  datePublished: '2026-04-02',
  dateModified: '2026-04-07',
  description: 'Honest ROI math on whether a custom website actually pays for itself for a small business.',
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
