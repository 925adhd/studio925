import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import '../src/index.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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


export const metadata: Metadata = {
  title: 'Studio 925 | Custom Web Design in Kentucky',
  description: 'Studio 925 builds custom websites for small businesses. No templates, no page builders — just fast, professional sites designed to bring in real customers.',
  metadataBase: new URL('https://studio925.design'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Studio 925 | Custom Web Design in Kentucky',
    description: 'Studio 925 builds custom websites for small businesses. No templates, no page builders — just fast, professional sites designed to bring in real customers.',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio 925 | Custom Web Design in Kentucky',
    description: 'Studio 925 builds custom websites for small businesses. No templates, no page builders — just fast, professional sites designed to bring in real customers.',
    images: [{ url: '/studio925.png', alt: 'Studio 925 — Custom websites for small businesses in Kentucky' }],
  },
  icons: {
    icon: '/fav.png',
  },
  verification: {
    google: 's8m1KbNu-IbtH-wfDrLxlycD0lmMHYuGfhByOtdIHWY',
  },
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Studio 925 Web Design',
  url: 'https://studio925.design',
  logo: 'https://studio925.design/fav.png',
  email: 'kara@studio925.design',
  telephone: '+1-270-551-2210',
  sameAs: [
    'https://www.facebook.com/studio925design',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Leitchfield',
    addressRegion: 'KY',
    postalCode: '42754',
    addressCountry: 'US',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Studio 925 Web Design',
  url: 'https://studio925.design',
  email: 'kara@studio925.design',
  telephone: '+1-270-551-2210',
  sameAs: [
    'https://www.facebook.com/studio925design',
  ],
  description: 'Professional web design services for small businesses in Grayson County, Kentucky and surrounding areas.',
  image: [
    'https://studio925.design/studio925.png',
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.4801,
    longitude: -86.2938,
  },
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
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
              name: 'Online Store Website',
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="4aAbtU0hK7mRoLOqZCAPEg"
          strategy="lazyOnload"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0XT038VM5Z"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-0XT038VM5Z');`}
        </Script>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
