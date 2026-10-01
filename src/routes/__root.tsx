import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'
import { COMPANY } from '@/data/company'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { MobileBottomBar } from '@/components/MobileBottomBar'
import { TrackingModal } from '@/components/TrackingModal'
import { TrackModalProvider } from '@/lib/track-modal-context'

const siteName = `${COMPANY.name} | Packers and Movers in Hyderabad`
const siteDescription =
  'Government-approved packers and movers in Alwal, Secunderabad. Household shifting, office relocation, car transport, and warehousing across Hyderabad and Pan-India.'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  '@id': `${COMPANY.siteUrl}/#organization`,
  name: COMPANY.name,
  url: COMPANY.siteUrl,
  logo: `${COMPANY.siteUrl}/logo.png`,
  image: `${COMPANY.siteUrl}/logo.png`,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ambedkar Nagar Colony, Padmavathi Nagar Colony',
    addressLocality: 'Alwal, Secunderabad',
    addressRegion: 'Telangana',
    postalCode: '500015',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '17.5028',
    longitude: '78.5085',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '22:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'City', name: 'Secunderabad' },
    { '@type': 'State', name: 'Telangana' },
    { '@type': 'Country', name: 'India' },
  ],
  hasMap: COMPANY.mapUrl,
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      {
        name: 'author',
        content: COMPANY.name,
      },
      {
        name: 'keywords',
        content:
          'packers and movers Hyderabad, packers and movers Secunderabad, household shifting Alwal, home relocation Hyderabad, car transport Hyderabad, office shifting, warehouse storage Secunderabad',
      },
      {
        property: 'og:site_name',
        content: COMPANY.name,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: COMPANY.siteUrl,
      },
      {
        property: 'og:image',
        content: `${COMPANY.siteUrl}/logo.png`,
      },
      {
        property: 'og:locale',
        content: 'en_IN',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: siteName,
      },
      {
        name: 'twitter:description',
        content: siteDescription,
      },
      {
        name: 'twitter:image',
        content: `${COMPANY.siteUrl}/logo.png`,
      },
      {
        name: 'geo.region',
        content: 'IN-TG',
      },
      {
        name: 'geo.placename',
        content: 'Secunderabad, Hyderabad, Telangana',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: COMPANY.siteUrl,
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
        <TrackModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileBottomBar />
          <FloatingWhatsApp />
          <TrackingModal />
        </TrackModalProvider>
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center font-sans">
      <p className="text-xs font-bold uppercase tracking-wider text-red-600">404</p>
      <h1 className="mt-2 text-3xl font-black text-slate-900">Page Not Found</h1>
      <p className="mt-2 text-sm text-slate-600">
        The page you're looking for doesn't exist. Head back to the homepage to find what you need.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-red-600 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all hover:bg-red-700"
      >
        Back to Home
      </Link>
    </div>
  )
}
