import type { Metadata } from 'next';
import HostingSupportPage from './hosting-support-page';

export const metadata: Metadata = {
  title: 'Website Care & Support | Studio 925',
  description: 'Hosting, backups, updates, and ongoing support for websites built by Studio 925. Keep your site running smoothly without dealing with the technical side.',
  alternates: { canonical: '/hosting-support' },
  openGraph: {
    type: 'website',
    title: 'Website Care & Support | Studio 925',
    description: 'Hosting, backups, updates, and ongoing support for websites built by Studio 925. Keep your site running smoothly without dealing with the technical side.',
    url: '/hosting-support',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
};

export default function Page() {
  return <HostingSupportPage />;
}
