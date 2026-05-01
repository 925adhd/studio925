import type { Metadata } from 'next';
import IndustryHubContent from './content';

export const metadata: Metadata = {
  title: 'Web Design by Industry in Kentucky | Studio 925',
  description: 'Custom websites for Kentucky small businesses by industry. Auto repair, contractors, restaurants, boutiques, and more. Each built for how customers actually search.',
  alternates: { canonical: '/web-design-by-industry' },
  openGraph: {
    type: 'website',
    title: 'Web Design by Industry in Kentucky | Studio 925',
    description: 'Custom websites for Kentucky small businesses by industry. Auto repair, contractors, restaurants, boutiques, and more. Each built for how customers actually search.',
    url: '/web-design-by-industry',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Web design by industry in Kentucky' }],
  },
};

export default function Page() {
  return <IndustryHubContent />;
}
