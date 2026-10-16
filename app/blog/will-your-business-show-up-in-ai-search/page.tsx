import type { Metadata } from 'next';
import ArticlePage from './content';

export const metadata: Metadata = {
  title: 'Will Your Business Show Up in AI Search? | Studio 925',
  description: 'AI search tools pull from your website, your Google Business Profile, and your reviews. What actually helps a small business show up, and what doesn\'t.',
  alternates: { canonical: '/blog/will-your-business-show-up-in-ai-search' },
  openGraph: {
    type: 'article',
    title: 'Will Your Business Show Up When Customers Ask AI?',
    description: 'AI search tools pull from your website, your Google Business Profile, and your reviews. What actually helps a small business show up, and what doesn\'t.',
    url: '/blog/will-your-business-show-up-in-ai-search',
    images: [{ url: '/customer-searching-local-business-on-phone.webp', alt: 'Hand holding a phone showing local businesses on Google Maps at a cafe table' }],
  },
};

const faqItems = [
  {
    question: 'Do I need special code or files for my business to show up in AI search?',
    answer: 'Not for Google. Google\'s own documentation says there are no extra requirements to appear in AI Overviews or AI Mode, and no special files or schema markup you need to add. What helps is the same stuff that helps regular search: clear text on your website, structured data that matches what is on the page, and an up-to-date Google Business Profile.',
  },
  {
    question: 'Does ChatGPT use my Google reviews?',
    answer: 'OpenAI hasn\'t published exactly which listing and review sources ChatGPT uses for local businesses. What you can see is the list of sources it cites under an answer, and those often include business websites and review or directory sites. Google reviews clearly matter for Google\'s own AI answers and map results. For the other tools, the safest move is to have accurate listings and real reviews in more than one place.',
  },
  {
    question: 'Should I pay for an "AI SEO" package?',
    answer: 'Be careful. Nobody can guarantee that an AI tool will recommend your business, and Google says there are no special tricks for its AI results. If someone is selling a package, ask exactly what they will change on your website and your listings. If the answer is the basics (clear website text, a complete Business Profile, reviews, accurate listings), you can often do a lot of it yourself.',
  },
  {
    question: 'How do I know if AI search is sending me customers?',
    answer: 'Visits from Google\'s AI Overviews and AI Mode are counted in your regular Google Search Console data. Visits from tools like ChatGPT often show up in Google Analytics as coming from that tool\'s website, like chatgpt.com. The simplest check is still the oldest one: ask new customers how they found you.',
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
  headline: 'Will Your Business Show Up When Customers Ask AI?',
  image: 'https://studio925.design/customer-searching-local-business-on-phone.webp',
  author: { '@type': 'Person', name: 'Kara Gibson', url: 'https://studio925.design' },
  publisher: { '@type': 'Organization', name: 'Studio 925', url: 'https://studio925.design' },
  datePublished: '2026-10-15',
  dateModified: '2026-10-15',
  description: 'AI search tools pull from your website, your Google Business Profile, and your reviews. What actually helps a small business show up, and what doesn\'t.',
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
