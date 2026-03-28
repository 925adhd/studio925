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
  telephone: '+1-270-551-2210',
  description: 'Professional web design services for small businesses in Grayson County, Kentucky and surrounding areas.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Leitchfield',
    addressRegion: 'KY',
    postalCode: '42754',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Leitchfield', containedInPlace: { '@type': 'State', name: 'Kentucky' } },
    { '@type': 'AdministrativeArea', name: 'Grayson County' },
    { '@type': 'State', name: 'Kentucky' },
  ],
  priceRange: '$$',
  knowsAbout: ['Web Design', 'Website Design Leitchfield KY', 'Small Business Websites', 'Local Web Development', 'Website Design Kentucky'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Website Design',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Foundation Website',
              description: 'A clean, professional website with up to 3 pages, mobile responsive design, contact form, and full ownership of files.',
            },
            price: '900',
            priceCurrency: 'USD',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Growth Website',
              description: 'Up to 6 pages with separate service pages, blog or CMS, Google Analytics setup, lead capture forms, and 30 days post-launch support.',
            },
            price: '1800',
            priceCurrency: 'USD',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Membership & Payments Website',
              description: 'Full website with online store, secure checkout, customer accounts, admin dashboard, and 60 days guided support.',
            },
            price: '2600',
            priceCurrency: 'USD',
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Website Care & Support',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Basic Hosting',
              description: 'Website hosting, secure backups, and keeping your site live and running.',
            },
            price: '25',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '25',
              priceCurrency: 'USD',
              unitText: 'MONTH',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Full Support',
              description: 'Everything in hosting plus content updates, text edits, layout tweaks, and ongoing SEO improvements.',
            },
            price: '49',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '49',
              priceCurrency: 'USD',
              unitText: 'MONTH',
            },
          },
        ],
      },
    ],
  },
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
