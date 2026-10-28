import type { Metadata } from 'next';
import ClarksonContent from './content';

export const metadata: Metadata = {
  title: 'Website Design in Clarkson, KY | Studio 925',
  description: 'Custom website design for small businesses in Clarkson, Kentucky. Built by a local designer just down US 62 in Leitchfield. Sites start at $900.',
  alternates: { canonical: '/website-design-clarkson-ky' },
  openGraph: {
    type: 'website',
    title: 'Website Design in Clarkson, KY | Studio 925',
    description: 'Custom website design for small businesses in Clarkson, Kentucky. Built by a local designer just down US 62 in Leitchfield. Sites start at $900.',
    url: '/website-design-clarkson-ky',
    images: [{ url: '/studio925.png', alt: 'Studio 925 | Custom websites for small businesses in Kentucky' }],
  },
};

export default function Page() {
  return <ClarksonContent />;
}
