import type { Metadata } from 'next';
import ArticlePage from './content';

export const metadata: Metadata = {
  title: 'Your Website Is a Tax Write-Off. Here\'s What to Know | Studio 925',
  description: 'A business website is a tax-deductible expense under Section 179. Learn how small business owners can write off their website costs and keep more money in their pocket.',
  alternates: { canonical: '/blog/your-website-is-a-tax-write-off' },
  openGraph: {
    title: 'Your Website Is a Tax Write-Off. Here\'s What to Know',
    description: 'A business website is a tax-deductible expense. Here\'s what small business owners need to know.',
    url: '/blog/your-website-is-a-tax-write-off',
  },
};

const faqItems = [
  {
    question: 'Can I write off my entire website cost in one year?',
    answer: 'In most cases, yes. Under Section 179, small businesses can deduct the full cost of a business website in the year it was purchased rather than spreading it over several years. However, tax rules can change, so always check with your accountant or tax professional to confirm what applies to your situation.',
  },
  {
    question: 'Is website hosting tax-deductible too?',
    answer: 'Generally, yes. Ongoing business expenses like hosting, domain registration, and website maintenance are typically deductible as ordinary business expenses. Consult a tax professional to make sure you\'re categorizing them correctly.',
  },
  {
    question: 'What if I\'m a sole proprietor? Does this still apply?',
    answer: 'Sole proprietors, LLCs, S-Corps, and other business structures can typically deduct website costs as a business expense. The specifics depend on your situation, so it\'s worth a quick conversation with your tax advisor.',
  },
  {
    question: 'Do I need to prove my website is for business use?',
    answer: 'Yes. The website needs to be used for business purposes like generating leads, serving customers, or selling products. A personal blog or hobby site wouldn\'t qualify. If your site is for your business, you\'re likely in the clear. Your tax professional can confirm.',
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
  headline: 'Your Website Is a Tax Write-Off. Here\'s What to Know',
  author: { '@type': 'Person', name: 'Kara Gibson' },
  publisher: { '@type': 'Organization', name: 'Studio 925', url: 'https://studio925.design' },
  datePublished: '2026-04-04',
  description: 'A business website is a tax-deductible expense. Here\'s what small business owners need to know.',
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
