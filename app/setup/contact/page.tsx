import type { Metadata } from 'next';
import ContactFormGuide from './content';

export const metadata: Metadata = {
  title: 'Contact Form Setup | Studio 925',
  description: 'Set up your contact form in 5 minutes.',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ContactFormGuide />;
}
