import type { Metadata } from 'next';
import KentuckyContent from './content';

export const metadata: Metadata = {
  title: 'Website Design in Kentucky for Small Businesses | Studio 925',
  description: 'Website design in Kentucky for small businesses. Custom-coded sites, no templates or page builders. Built to bring in real customers from Google.',
  alternates: { canonical: '/small-business-website-design-kentucky' },
  openGraph: {
    type: 'website',
    title: 'Website Design in Kentucky for Small Businesses | Studio 925',
    description: 'Website design in Kentucky for small businesses. Custom-coded sites, no templates or page builders. Built to bring in real customers from Google.',
    url: '/small-business-website-design-kentucky',
    images: [{ url: '/studio925.png', alt: 'Studio 925, custom websites for small businesses in Kentucky' }],
  },
};

export default function Page() {
  return <KentuckyContent />;
}
