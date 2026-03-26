import type { Metadata } from 'next';
import ThankYouContent from './content';

export const metadata: Metadata = {
  title: 'Thank You | Studio 925',
  description: "Thanks for reaching out to Studio 925. We'll be in touch soon.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ThankYouContent />;
}
