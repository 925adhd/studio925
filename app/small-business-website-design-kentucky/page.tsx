import type { Metadata } from 'next';
import KentuckyContent from './content';

export const metadata: Metadata = {
  title: 'Custom Websites for Small Businesses in Kentucky | Studio 925',
  description: 'Custom websites for small businesses in Kentucky. Hand-coded from scratch — no templates, no page builders. Built to get you found on Google and bring in real customers.',
  alternates: { canonical: '/small-business-website-design-kentucky' },
  openGraph: {
    type: 'website',
    title: 'Custom Websites for Small Businesses in Kentucky | Studio 925',
    description: 'Custom websites for small businesses in Kentucky. Hand-coded from scratch — no templates, no page builders. Built to get you found on Google and bring in real customers.',
    url: '/small-business-website-design-kentucky',
    images: ['/studio925.png'],
  },
};

export default function Page() {
  return <KentuckyContent />;
}
