import type { Metadata } from 'next';
import ArticlePage from './content';

export const metadata: Metadata = {
  title: 'Is a Custom Website Worth It? Here\'s the Math | Studio 925',
  description: 'See how a $900 custom website can pay for itself with just one new customer. Real ROI math for small business owners deciding between DIY and professional web design.',
  alternates: { canonical: '/blog/is-custom-website-worth-it' },
  openGraph: {
    title: 'Is a Custom Website Worth It? Here\'s the Math.',
    description: 'See how a $900 custom website pays for itself with one new customer.',
    url: '/blog/is-custom-website-worth-it',
  },
};

const faqItems = [
  {
    question: 'How long does it take for a website to pay for itself?',
    answer: 'For most service businesses, a single new customer from your website covers the entire cost. If your average job is $1,500+ and your site brings in even one client per month, the ROI is significant within the first few weeks.',
  },
  {
    question: 'Is $900 a normal price for a small business website?',
    answer: 'It\'s on the affordable end for custom work. Most freelancers charge $2,000–$5,000, and agencies start at $10,000+. Studio 925 keeps prices low by working solo with no agency overhead.',
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
  author: { '@type': 'Person', name: 'Kara Gibson' },
  publisher: { '@type': 'Organization', name: 'Studio 925', url: 'https://studio925.design' },
  datePublished: '2026-04-02',
  description: 'See how a $900 custom website can pay for itself with just one new customer.',
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
