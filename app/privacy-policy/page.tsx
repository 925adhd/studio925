import type { Metadata } from 'next';
import LegalContent from '../legal-content';

export const metadata: Metadata = {
  title: 'Privacy Policy | Studio 925',
  description: 'Read the Studio 925 privacy policy. Learn how we collect, use, and protect your personal information when you use our web design services and website.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Studio 925',
    description: 'Read the Studio 925 privacy policy. Learn how we collect, use, and protect your personal information when you use our web design services and website.',
    url: '/privacy-policy',
    images: ['/studio925.png'],
  },
};

export default function Page() {
  return <LegalContent type="privacy-policy" />;
}
