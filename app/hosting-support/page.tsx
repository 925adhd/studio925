import type { Metadata } from 'next';
import HostingSupportPage from './hosting-support-page';

export const metadata: Metadata = {
  title: 'Website Care & Support | Studio 925',
  description: 'Hosting, backups, updates, and ongoing support for websites built by Studio 925. Keep your site running smoothly without dealing with the technical side.',
  alternates: { canonical: '/hosting-support' },
  openGraph: {
    title: 'Website Care & Support | Studio 925',
    description: 'Hosting, backups, updates, and ongoing support for websites built by Studio 925. Keep your site running smoothly without dealing with the technical side.',
    url: '/hosting-support',
    images: ['/studio925.png'],
  },
};

export default function Page() {
  return <HostingSupportPage />;
}
