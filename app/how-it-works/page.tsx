import type { Metadata } from 'next';
import HowItWorksContent from './content';

export const metadata: Metadata = {
  title: 'How It Works | Studio 925',
  description:
    'Exactly what happens after you book a website with Studio 925. A clear timeline, what I handle, what you handle, and how you stay in the loop.',
  alternates: { canonical: '/how-it-works' },
  openGraph: {
    type: 'website',
    title: 'How It Works | Studio 925',
    description:
      'Exactly what happens after you book a website with Studio 925. A clear timeline, what I handle, what you handle, and how you stay in the loop.',
    url: '/how-it-works',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — How it works' }],
  },
};

export default function Page() {
  return <HowItWorksContent />;
}
