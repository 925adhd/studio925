import type { Metadata } from 'next';
import WebsiteCostContent from './content';

export const metadata: Metadata = {
  title: 'How Much Does a Website Cost? | Studio 925',
  description: 'Website design costs explained. Learn what affects pricing, compare DIY vs custom, and see transparent pricing from a local Kentucky web designer.',
  alternates: { canonical: '/website-cost' },
  openGraph: {
    type: 'website',
    title: 'How Much Does a Website Cost? | Studio 925',
    description: 'Website design costs explained. Learn what affects pricing, compare DIY vs custom, and see transparent pricing from a local Kentucky web designer.',
    url: '/website-cost',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does a Website Cost? | Studio 925',
    description: 'Website design costs explained. Learn what affects pricing, compare DIY vs custom, and see transparent pricing from a local Kentucky web designer.',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
};

export default function Page() {
  return <WebsiteCostContent />;
}
