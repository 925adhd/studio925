import type { Metadata } from 'next';
import CaneyvilleContent from './content';

export const metadata: Metadata = {
  title: 'Website Design in Caneyville, KY | Studio 925',
  description: 'Custom website design for small businesses in Caneyville, Kentucky. One local designer, custom-coded sites, flat pricing from $900, and you own everything.',
  alternates: { canonical: '/website-design-caneyville-ky' },
  openGraph: {
    type: 'website',
    title: 'Website Design in Caneyville, KY | Studio 925',
    description: 'Custom website design for small businesses in Caneyville, Kentucky. One local designer, custom-coded sites, flat pricing from $900, and you own everything.',
    url: '/website-design-caneyville-ky',
    images: [{ url: '/studio925.png', alt: 'Studio 925 | Custom websites for small businesses in Kentucky' }],
  },
};

export default function Page() {
  return <CaneyvilleContent />;
}
