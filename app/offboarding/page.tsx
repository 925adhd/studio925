import type { Metadata } from 'next';
import OffboardingContent from './content';

export const metadata: Metadata = {
  title: 'Website Transition Guide | Studio 925',
  description: 'Everything you need to manage your website independently after leaving Studio 925 hosting.',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <OffboardingContent />;
}
