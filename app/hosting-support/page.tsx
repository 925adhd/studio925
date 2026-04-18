import type { Metadata } from 'next';
import HostingSupportPage from './hosting-support-page';

export const metadata: Metadata = {
  title: 'Website Care & Support | Studio 925',
  description: 'Hosting, backups, updates, and ongoing support for websites built by Studio 925. Keep your site running smoothly without dealing with the technical side.',
  alternates: { canonical: '/hosting-support' },
  openGraph: {
    type: 'website',
    title: 'Website Care & Support | Studio 925',
    description: 'Hosting, backups, updates, and ongoing support for websites built by Studio 925. Keep your site running smoothly without dealing with the technical side.',
    url: '/hosting-support',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
};

const offerLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Website Hosting & Support',
  itemListElement: [
    {
      '@type': 'Offer',
      name: 'Basic Hosting',
      description: 'Website hosting, secure backups, and keeping your site live and running.',
      price: '25',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '25',
        priceCurrency: 'USD',
        unitText: 'MONTH',
      },
      url: 'https://studio925.design/hosting-support',
    },
    {
      '@type': 'Offer',
      name: 'Full Support',
      description: 'Hosting plus content updates, layout tweaks, and ongoing SEO work including new service pages and blog posts.',
      price: '49',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '49',
        priceCurrency: 'USD',
        unitText: 'MONTH',
      },
      url: 'https://studio925.design/hosting-support',
    },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I have to sign a contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Hosting and support are month-to-month. You can cancel anytime and your website files belong to you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I cancel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You keep your website files and your domain. I\'ll help you move to another host if you ever decide to go that route \u2014 no hostage situations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast are content updates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most small updates (text changes, swapping a photo, updating hours) are done within one business day. Bigger requests like adding a new page or section may take longer, but you\'ll always get a clear timeline.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my website goes down?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I monitor uptime and get notified automatically if anything goes wrong. In the rare event of an issue, I work to get your site back online as quickly as possible \u2014 usually before you even notice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch between plans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can move from Basic Hosting to Full Support (or back) at any time. Just send me a message and I\'ll handle the change.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you do SEO for my competitor too?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. My ongoing SEO clients get market exclusivity \u2014 I only do active SEO work for one business per niche per area. A competitor can still host with me or have a site built, since that\'s not ranking work. If a competitor ever wants updates without SEO, I\'d talk to my exclusive client first before taking it on.',
      },
    },
  ],
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://studio925.design' },
    { '@type': 'ListItem', position: 2, name: 'Hosting & Support', item: 'https://studio925.design/hosting-support' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <HostingSupportPage />
    </>
  );
}
