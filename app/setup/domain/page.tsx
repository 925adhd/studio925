import type { Metadata } from 'next';
import DomainGuide from './content';

export const metadata: Metadata = {
  title: 'Domain Setup Guide | Studio 925',
  description: 'Connect your domain to your website in 10 minutes.',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <DomainGuide />;
}
