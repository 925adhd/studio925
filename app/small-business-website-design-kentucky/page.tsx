import type { Metadata } from 'next';
import KentuckyContent from './content';

export const metadata: Metadata = {
  title: 'Small Business Website Design in Kentucky | Studio 925',
  description: 'Custom website design for small businesses across Kentucky. No templates. Built from scratch to help your business get found online and convert visitors into customers.',
  alternates: { canonical: '/small-business-website-design-kentucky' },
  openGraph: {
    title: 'Small Business Website Design in Kentucky | Studio 925',
    description: 'Custom website design for small businesses across Kentucky. No templates. Built from scratch to help your business get found online and convert visitors into customers.',
    url: '/small-business-website-design-kentucky',
  },
};

export default function Page() {
  return <KentuckyContent />;
}
