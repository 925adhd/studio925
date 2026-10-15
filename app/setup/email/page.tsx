import type { Metadata } from 'next';
import EmailGuide from './content';

export const metadata: Metadata = {
  title: 'Business Email Setup Guide | Studio 925',
  description: 'Get a business email that uses your own domain with Google Workspace.',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <EmailGuide />;
}
