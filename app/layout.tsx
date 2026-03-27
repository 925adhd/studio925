import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import '../src/index.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Web Design in Grayson County, KY | Studio 925',
  description: 'Professional web design for small businesses in Grayson County, Kentucky. Modern, fast, and built to support real growth. View pricing and book a consultation.',
  metadataBase: new URL('https://studio925.design'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Web Design in Grayson County, KY | Studio 925',
    description: 'Professional web design for small businesses in Grayson County, Kentucky. Modern, fast, and built to support real growth.',
    images: ['/studio925.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design in Grayson County, KY | Studio 925',
    description: 'Professional web design for small businesses in Grayson County, Kentucky. Modern, fast, and built to support real growth.',
    images: ['/studio925.png'],
  },
  icons: {
    icon: '/fav.png',
  },
  verification: {
    google: 's8m1KbNu-IbtH-wfDrLxlycD0lmMHYuGfhByOtdIHWY',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Studio 925',
  url: 'https://studio925.design',
  email: 'kara@studio925.design',
  description: 'Professional web design services for small businesses in Grayson County, Kentucky and surrounding areas.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Grayson County',
    addressRegion: 'KY',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Leitchfield', containedInPlace: { '@type': 'State', name: 'Kentucky' } },
    { '@type': 'AdministrativeArea', name: 'Grayson County' },
    { '@type': 'State', name: 'Kentucky' },
  ],
  serviceType: ['Website Design', 'Web Design', 'Small Business Website Design'],
  priceRange: '$$',
  knowsAbout: ['Web Design', 'Website Design Leitchfield KY', 'Small Business Websites', 'Local Web Development', 'Website Design Kentucky'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
