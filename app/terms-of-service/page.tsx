import type { Metadata } from 'next';
import LegalContent from '../legal-content';

export const metadata: Metadata = {
  title: 'Terms of Service | Studio 925',
  description: 'Review the Studio 925 terms of service. These terms outline the agreement between you and Studio 925 for all web design and development services.',
  alternates: { canonical: '/terms-of-service' },
  openGraph: {
    type: 'website',
    title: 'Terms of Service | Studio 925',
    description: 'Review the Studio 925 terms of service. These terms outline the agreement between you and Studio 925 for all web design and development services.',
    url: '/terms-of-service',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
};

export default function Page() {
  return <LegalContent type="terms-of-service" />;
}
