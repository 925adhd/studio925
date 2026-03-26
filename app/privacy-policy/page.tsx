import type { Metadata } from 'next';
import LegalContent from '../legal-content';

export const metadata: Metadata = {
  title: 'Privacy Policy | Studio 925',
  description: 'Read the Studio 925 privacy policy. Learn how we collect, use, and protect your information.',
  alternates: { canonical: '/privacy-policy' },
};

export default function Page() {
  return <LegalContent type="privacy-policy" />;
}
