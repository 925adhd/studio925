import type { Metadata } from 'next';
import LeitchfieldContent from './content';

export const metadata: Metadata = {
  title: 'Website Design in Leitchfield, KY | Studio 925',
  description: 'Professional website design for small businesses in Leitchfield, Kentucky. Custom-built websites that bring in real customers. No templates. No page builders.',
  alternates: { canonical: '/website-design-leitchfield-ky' },
  openGraph: {
    title: 'Website Design in Leitchfield, KY | Studio 925',
    description: 'Professional website design for small businesses in Leitchfield, Kentucky. Custom-built websites that bring in real customers. No templates. No page builders.',
    url: '/website-design-leitchfield-ky',
  },
};

export default function Page() {
  return <LeitchfieldContent />;
}
