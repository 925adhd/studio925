import type { Metadata } from 'next';
import LegalContent from '../legal-content';

export const metadata: Metadata = {
  title: 'Cookie Policy | Studio 925',
  description: 'Learn how Studio 925 uses cookies on our website. We keep things simple — no ad tracking, no third-party marketing cookies, just what\'s needed to run the site.',
  alternates: { canonical: '/cookie-policy' },
  openGraph: {
    type: 'website',
    title: 'Cookie Policy | Studio 925',
    description: 'Learn how Studio 925 uses cookies on our website. We keep things simple — no ad tracking, no third-party marketing cookies, just what\'s needed to run the site.',
    url: '/cookie-policy',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
};

export default function Page() {
  return <LegalContent type="cookie-policy" />;
}
