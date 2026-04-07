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
      description: 'Hosting plus content updates, text edits, layout tweaks, and ongoing site care.',
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerLd) }} />
      <HostingSupportPage />
    </>
  );
}
