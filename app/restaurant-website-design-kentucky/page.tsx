import type { Metadata } from 'next';
import RestaurantContent from './content';

export const metadata: Metadata = {
  title: 'Restaurant Website Design in Kentucky | Studio 925',
  description: 'Custom restaurant websites in Kentucky. Menus Google can read, hours that match your listing, and order buttons built for people deciding on their phone.',
  alternates: { canonical: '/restaurant-website-design-kentucky' },
  openGraph: {
    type: 'website',
    title: 'Restaurant Website Design in Kentucky | Studio 925',
    description: 'Custom restaurant websites in Kentucky. Menus Google can read, hours that match your listing, and order buttons built for people deciding on their phone.',
    url: '/restaurant-website-design-kentucky',
    images: [{ url: '/studio925.png', alt: 'Studio 925, custom websites for restaurants in Kentucky' }],
  },
};

export default function Page() {
  return <RestaurantContent />;
}
