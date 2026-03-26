import type { Metadata } from 'next';
import SetupContent from './content';

export const metadata: Metadata = {
  title: 'Client Setup Guides | Studio 925',
  description: 'Setup guides for Studio 925 clients. Connect your domain and set up your contact form.',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <SetupContent />;
}
