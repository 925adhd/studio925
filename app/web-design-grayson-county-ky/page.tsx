import type { Metadata } from 'next';
import GraysonCountyContent from './content';

export const metadata: Metadata = {
  title: 'Web Design in Grayson County, KY | Studio 925',
  description: 'Web design for small businesses in Grayson County, Kentucky. One local designer in Leitchfield, custom-coded sites built to bring in real customers.',
  alternates: { canonical: '/web-design-grayson-county-ky' },
  openGraph: {
    type: 'website',
    title: 'Web Design in Grayson County, KY | Studio 925',
    description: 'Web design for small businesses in Grayson County, Kentucky. One local designer in Leitchfield, custom-coded sites built to bring in real customers.',
    url: '/web-design-grayson-county-ky',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
};

export default function Page() {
  return <GraysonCountyContent />;
}
