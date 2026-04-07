import type { Metadata } from 'next';
import ArticlePage from './content';

export const metadata: Metadata = {
  title: 'What to Look for in a Local Web Designer | Studio 925',
  description: 'Hiring a local web designer for your small business? Here\'s what actually matters, what to ask before signing anything, and the red flags to avoid.',
  alternates: { canonical: '/blog/what-to-look-for-in-a-local-web-designer' },
  openGraph: {
    title: 'What to Look for in a Local Web Designer',
    description: 'Hiring a local web designer? Here\'s what actually matters and the red flags to avoid.',
    url: '/blog/what-to-look-for-in-a-local-web-designer',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
};

const faqItems = [
  {
    question: 'Does my web designer really need to be local?',
    answer: 'Not strictly. Plenty of good designers work remotely. But a local designer knows your market, your competitors, and how people in your area actually search and shop. For small businesses serving a local customer base, that context is hard to replicate from across the country.',
  },
  {
    question: 'How much should a small business website cost?',
    answer: 'A custom small business website typically runs from $900 to $5,000 depending on scope. Anything under $500 usually means a template with a markup. Anything over $10,000 for a basic small business site is usually overkill unless you need custom functionality like booking, e-commerce, or member accounts.',
  },
  {
    question: 'Will I own my website when it\'s finished?',
    answer: 'You should. Always confirm in writing that you own the code, content, and domain after final payment. If a designer says you can\'t move the site elsewhere, walk away. That\'s a lock-in and it will cost you down the road.',
  },
  {
    question: 'How long does a small business website take to build?',
    answer: 'It depends on the designer and the scope. A focused small business site can launch in a week or two when the designer is organized and not juggling too many clients. Bigger projects with custom features or lots of pages can take a month or more. If a designer can\'t give you a clear timeline up front, treat that as a warning sign.',
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
  headline: 'What to Look for in a Local Web Designer',
  author: { '@type': 'Person', name: 'Kara Gibson' },
  publisher: { '@type': 'Organization', name: 'Studio 925', url: 'https://studio925.design' },
  datePublished: '2026-04-06',
  description: 'Hiring a local web designer? Here\'s what actually matters and the red flags to avoid.',
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
