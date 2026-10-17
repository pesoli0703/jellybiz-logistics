import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import DeliveryForm from '../components/DeliveryForm'
import HowItWorks from '../components/HowItWorks'
import WhyJelly from '../components/WhyJelly'
import ServiceArea from '../components/ServiceArea'
import BusinessSection from '../components/BusinessSection'
import InstagramPreview from '../components/InstagramPreview'
import FAQs from '../components/FAQs'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { site } from '../lib/site'

const pageTitle = 'Jellybiz Logistics — Small money. Fast delivery.'
const pageDescription =
  'Your trusted dispatch partner in Lagos Island. Motorcycle and mini van dispatch, parcel and package delivery, and small to medium loads. 24/7 support. Book on WhatsApp: 07084243119.'

const ogImage = {
  url: `${site.url}${site.ogImage}`,
  width: 1200,
  height: 630,
  alt: 'Jellybiz Logistics flyer — dispatch services, 07084243119, 138 Lewis Street, Lagos Island',
  type: 'image/jpeg'
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  '@id': `${site.url}/#business`,
  name: site.name,
  alternateName: 'Jellybiz Logistics & Dispatch Services',
  description: pageDescription,
  slogan: site.tagline,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  image: [ogImage.url],
  telephone: site.phoneDisplay,
  email: site.email,
  priceRange: '₦₦',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '138 Lewis Street',
    addressLocality: 'Lagos Island',
    addressRegion: 'Lagos',
    addressCountry: 'NG'
  },
  areaServed: [
    { '@type': 'City', name: 'Lagos Island' },
    { '@type': 'City', name: 'Lagos' }
  ],
  sameAs: [site.instagram],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dispatch services',
    itemListElement: [
      'Motorcycle Dispatch',
      'Mini Van Dispatch',
      'Parcel and Package Delivery',
      'Small & Medium Loads',
      'Business Delivery Support'
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name }
    }))
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={site.url} />
        <meta name="theme-color" content="#06213A" />
        <meta name="robots" content="index,follow,max-image-preview:large" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.name} />
        <meta property="og:locale" content="en_NG" />
        <meta property="og:url" content={site.url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage.url} />
        <meta property="og:image:type" content={ogImage.type} />
        <meta property="og:image:width" content={String(ogImage.width)} />
        <meta property="og:image:height" content={String(ogImage.height)} />
        <meta property="og:image:alt" content={ogImage.alt} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage.url} />
        <meta name="twitter:image:alt" content={ogImage.alt} />

        <meta name="apple-mobile-web-app-title" content="Jellybiz" />
        <meta name="application-name" content="Jellybiz Logistics" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div id="top" className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <section className="mx-auto max-w-6xl px-4 py-12">
            <Services />
          </section>
          <section className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-12">
              <DeliveryForm />
            </div>
          </section>
          <section className="mx-auto max-w-6xl px-4 py-12">
            <HowItWorks />
          </section>
          <section className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-12">
              <WhyJelly />
            </div>
          </section>
          <section className="mx-auto max-w-6xl px-4 py-12">
            <ServiceArea />
          </section>
          <section className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-12">
              <BusinessSection />
            </div>
          </section>
          <section className="mx-auto max-w-6xl px-4 py-12">
            <InstagramPreview />
          </section>
          <section className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-12">
              <FAQs />
            </div>
          </section>
          <section className="mx-auto max-w-6xl px-4 py-12">
            <ContactSection />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
