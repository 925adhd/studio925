import type { Metadata } from 'next';
import ArticlePage from './content';

export const metadata: Metadata = {
  title: 'Why I Stopped Using GoDaddy and Learned to Code Instead | Studio 925',
  description: 'GoDaddy\'s website builder still locks custom HTML inside iframes and won\'t let you edit the head tag. Here\'s how those limits pushed me to write code, and what changed.',
  alternates: { canonical: '/blog/why-i-stopped-using-godaddy' },
  openGraph: {
    title: 'Why I Stopped Using GoDaddy and Learned to Code Instead',
    description: 'How GoDaddy\'s builder limits pushed me to write HTML and CSS, and what most small business owners on GoDaddy still hit today.',
    url: '/blog/why-i-stopped-using-godaddy',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
};

const faqItems = [
  {
    question: 'Can you add custom code to a GoDaddy website?',
    answer: 'Yes, but only inside the body of the page, embedded in an iframe. You can\'t add code to the <head>, can\'t inject JavaScript into the page source, and the HTML sections you can add leave blank space around them. For most third-party tools (analytics, live chat, ad pixels, schema markup), the body-iframe approach isn\'t enough.',
  },
  {
    question: 'Why doesn\'t GoDaddy let you edit the header?',
    answer: 'Older versions of GoDaddy\'s builder had a Settings field for header and footer code on every page. They removed it when they switched to the current Websites + Marketing builder. There\'s no official explanation, but arbitrary header injection is a support and security headache for any hosted builder, which is the most likely reason.',
  },
  {
    question: 'Is GoDaddy\'s website builder good for a small business?',
    answer: 'It\'s fine for a static brochure site that doesn\'t need third-party tracking, paid ads, custom fonts, or much design control. Anything beyond that hits the head-tag and JavaScript limits quickly. If your business depends on Google traffic, conversion tracking, or a brand that doesn\'t look like the templates, you\'ll outgrow it fast.',
  },
  {
    question: 'Should I switch from GoDaddy to a custom website?',
    answer: 'If your current GoDaddy site is meeting your needs, no. If you\'re trying to add tracking, run ads, rank on Google, or build something that doesn\'t look like a template, a custom build solves the wall you keep hitting. You can keep your domain through GoDaddy and just point it at a new site.',
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
  headline: 'Why I Stopped Using GoDaddy and Learned to Code Instead',
  image: 'https://studio925.design/why-i-stopped-using-godaddy.webp',
  author: { '@type': 'Person', name: 'Kara Gibson', url: 'https://studio925.design' },
  publisher: { '@type': 'Organization', name: 'Studio 925', url: 'https://studio925.design' },
  datePublished: '2026-05-02',
  dateModified: '2026-05-02',
  description: 'How GoDaddy\'s website builder limits pushed me to write HTML and CSS, and what most small business owners on GoDaddy still hit today.',
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
