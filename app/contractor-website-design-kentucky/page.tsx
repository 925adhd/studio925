import type { Metadata } from 'next';
import ContractorContent from './content';

export const metadata: Metadata = {
  title: 'Contractor Website Design in Kentucky | Studio 925',
  description: 'Custom websites for contractors, roofers, plumbers, electricians, and builders in Kentucky. Built to bring in calls, quote requests, and local search visibility.',
  alternates: { canonical: '/contractor-website-design-kentucky' },
  openGraph: {
    type: 'website',
    title: 'Contractor Website Design in Kentucky | Studio 925',
    description: 'Custom websites for contractors, roofers, plumbers, electricians, and builders in Kentucky. Built to bring in calls, quote requests, and local search visibility.',
    url: '/contractor-website-design-kentucky',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for contractors and trades in Kentucky' }],
  },
};

export default function Page() {
  return <ContractorContent />;
}
