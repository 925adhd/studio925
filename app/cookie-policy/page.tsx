import type { Metadata } from 'next';
import LegalContent from '../legal-content';

export const metadata: Metadata = {
  title: 'Cookie Policy | Studio 925',
  description: 'Read the Studio 925 cookie policy. Learn how we use cookies on our website.',
  alternates: { canonical: '/cookie-policy' },
};

export default function Page() {
  return <LegalContent type="cookie-policy" />;
}
