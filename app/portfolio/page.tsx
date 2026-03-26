import type { Metadata } from 'next';
import PortfolioPage from './portfolio-page';

export const metadata: Metadata = {
  title: 'Portfolio | Studio 925 — Real Websites for Real Businesses',
  description: 'See real websites built by Studio 925 for small businesses. Custom designs that bring in calls, leads, and customers.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio | Studio 925 — Real Websites for Real Businesses',
    description: 'See real websites built by Studio 925 for small businesses. Custom designs that bring in calls, leads, and customers.',
    url: '/portfolio',
  },
};

export default function Page() {
  return <PortfolioPage />;
}
