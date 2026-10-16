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

export default function Home() {
  return (
    <>
      <Head>
        <title>Jellybiz Logistics — Small money. Fast delivery.</title>
        <meta name="description" content="Fast, safe, and affordable dispatch services in Lagos. Motorcycle and mini-van deliveries for individuals and businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Jellybiz Logistics — Small money. Fast delivery." />
        <meta property="og:description" content="Dispatch riders, parcel delivery, and business delivery support in Lagos Island." />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <section className="max-w-6xl mx-auto px-4 py-12">
            <Services />
          </section>
          <section className="bg-white border-t">
            <div className="max-w-6xl mx-auto px-4 py-12">
              <DeliveryForm />
            </div>
          </section>
          <section className="max-w-6xl mx-auto px-4 py-12">
            <HowItWorks />
          </section>
          <section className="bg-white border-t">
            <div className="max-w-6xl mx-auto px-4 py-12">
              <WhyJelly />
            </div>
          </section>
          <section className="max-w-6xl mx-auto px-4 py-12">
            <ServiceArea />
          </section>
          <section className="bg-white border-t">
            <div className="max-w-6xl mx-auto px-4 py-12">
              <BusinessSection />
            </div>
          </section>
          <section className="max-w-6xl mx-auto px-4 py-12">
            <InstagramPreview />
          </section>
          <section className="bg-white border-t">
            <div className="max-w-6xl mx-auto px-4 py-12">
              <FAQs />
            </div>
          </section>
          <section className="max-w-6xl mx-auto px-4 py-12">
            <ContactSection />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
