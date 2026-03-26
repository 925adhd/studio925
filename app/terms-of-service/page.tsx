import type { Metadata } from 'next';
import LegalContent from '../legal-content';

export const metadata: Metadata = {
  title: 'Terms of Service | Studio 925',
  description: 'Read the Studio 925 terms of service. Understand the terms that govern our web design services.',
  alternates: { canonical: '/terms-of-service' },
};

export default function Page() {
  return <LegalContent type="terms-of-service" />;
}
