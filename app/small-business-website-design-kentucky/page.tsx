import type { Metadata } from 'next';
import KentuckyContent from './content';

export const metadata: Metadata = {
  title: 'Small Business Website Design in Kentucky | Studio 925',
  description: 'Custom website design for small businesses across Kentucky. No templates. Built from scratch to help your business get found online and convert visitors.',
  alternates: { canonical: '/small-business-website-design-kentucky' },
  openGraph: {
    title: 'Small Business Website Design in Kentucky | Studio 925',
    description: 'Custom website design for small businesses across Kentucky. No templates. Built from scratch to help your business get found online and convert visitors.',
    url: '/small-business-website-design-kentucky',
    images: ['/studio925.png'],
  },
};

export default function Page() {
  return <KentuckyContent />;
}
