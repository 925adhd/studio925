import type { Metadata } from 'next';
import AuditContent from './content';

export const metadata: Metadata = {
  title: 'Free Local SEO Audit for Grayson County Businesses | Studio 925',
  description:
    'See exactly where your business ranks on Google block by block. A free 49-point local SEO audit for Grayson County, KY businesses. No subscription, no catch.',
  alternates: { canonical: '/audit' },
  openGraph: {
    type: 'website',
    title: 'Free Local SEO Audit for Grayson County Businesses | Studio 925',
    description:
      'See exactly where your business ranks on Google block by block. A free 49-point local SEO audit for Grayson County, KY businesses.',
    url: '/audit',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Free local SEO audit for Grayson County, KY' }],
  },
};

export default function Page() {
  return <AuditContent />;
}
