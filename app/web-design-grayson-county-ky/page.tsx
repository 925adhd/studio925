import type { Metadata } from 'next';
import GraysonCountyContent from './content';

export const metadata: Metadata = {
  title: 'Web Design in Grayson County, KY | Studio 925',
  description: 'Professional web design for small businesses in Grayson County, Kentucky. Custom-built websites that bring in real customers and grow your business.',
  alternates: { canonical: '/web-design-grayson-county-ky' },
  openGraph: {
    title: 'Web Design in Grayson County, KY | Studio 925',
    description: 'Professional web design for small businesses in Grayson County, Kentucky. Custom-built websites that bring in real customers and grow your business.',
    url: '/web-design-grayson-county-ky',
    images: ['/studio925.png'],
  },
};

export default function Page() {
  return <GraysonCountyContent />;
}
