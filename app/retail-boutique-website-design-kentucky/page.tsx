import type { Metadata } from 'next';
import RetailContent from './content';

export const metadata: Metadata = {
  title: 'Boutique & Retail Website Design in Kentucky | Studio 925',
  description: 'Custom websites for boutiques, gift shops, and retail stores in Kentucky. Show what you carry, keep hours current, and sell online when you are ready.',
  alternates: { canonical: '/retail-boutique-website-design-kentucky' },
  openGraph: {
    type: 'website',
    title: 'Boutique & Retail Website Design in Kentucky | Studio 925',
    description: 'Custom websites for boutiques, gift shops, and retail stores in Kentucky. Show what you carry, keep hours current, and sell online when you are ready.',
    url: '/retail-boutique-website-design-kentucky',
    images: [{ url: '/studio925.png', alt: 'Studio 925, custom websites for boutiques and retail shops in Kentucky' }],
  },
};

export default function Page() {
  return <RetailContent />;
}
