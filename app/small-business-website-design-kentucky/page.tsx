import type { Metadata } from 'next';
import KentuckyContent from './content';

export const metadata: Metadata = {
  title: 'Custom Websites for Small Businesses in Kentucky | Studio 925',
  description: 'Custom websites for small businesses in Kentucky. Custom-built from scratch — no templates, no page builders. Built to get you found on Google and bring in real customers.',
  alternates: { canonical: '/small-business-website-design-kentucky' },
  openGraph: {
    type: 'website',
    title: 'Custom Websites for Small Businesses in Kentucky | Studio 925',
    description: 'Custom websites for small businesses in Kentucky. Custom-built from scratch — no templates, no page builders. Built to get you found on Google and bring in real customers.',
    url: '/small-business-website-design-kentucky',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
};

export default function Page() {
  return <KentuckyContent />;
}
