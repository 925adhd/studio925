import type { Metadata } from 'next';
import WebsiteCostContent from './content';

export const metadata: Metadata = {
  title: 'How Much Does a Website Cost? | Studio 925',
  description: 'Website design costs explained. Learn what affects pricing, compare DIY vs custom, and see transparent pricing from a local Kentucky web designer.',
  alternates: { canonical: '/website-cost' },
  openGraph: {
    title: 'How Much Does a Website Cost? | Studio 925',
    description: 'Website design costs explained. Learn what affects pricing, compare DIY vs custom, and see transparent pricing from a local Kentucky web designer.',
    url: '/website-cost',
    images: ['/studio925.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does a Website Cost? | Studio 925',
    description: 'Website design costs explained. Learn what affects pricing, compare DIY vs custom, and see transparent pricing from a local Kentucky web designer.',
    images: ['/studio925.png'],
  },
};

export default function Page() {
  return <WebsiteCostContent />;
}
