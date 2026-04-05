import type { Metadata } from 'next';
import LegalContent from '../legal-content';

export const metadata: Metadata = {
  title: 'Disclaimer | Studio 925',
  description: 'Studio 925 disclaimer. Understand the limitations of web design services and what results we can and cannot guarantee.',
  alternates: { canonical: '/disclaimer' },
  openGraph: {
    type: 'website',
    title: 'Disclaimer | Studio 925',
    description: 'Studio 925 disclaimer. Understand the limitations of web design services and what results we can and cannot guarantee.',
    url: '/disclaimer',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
};

export default function Page() {
  return <LegalContent type="disclaimer" />;
}
