import type { Metadata } from 'next';
import AutoRepairShopContent from './content';

export const metadata: Metadata = {
  title: 'Auto Repair Shop Website Design in Kentucky | Studio 925',
  description: 'Custom website design for auto repair shops in Kentucky. Built to bring in calls, service requests, and local search visibility. No templates.',
  alternates: { canonical: '/auto-repair-shop-website-design-kentucky' },
  openGraph: {
    type: 'website',
    title: 'Auto Repair Shop Website Design in Kentucky | Studio 925',
    description: 'Custom website design for auto repair shops in Kentucky. Built to bring in calls, service requests, and local search visibility. No templates.',
    url: '/auto-repair-shop-website-design-kentucky',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for auto repair shops in Kentucky' }],
  },
};

export default function Page() {
  return <AutoRepairShopContent />;
}
