import React from 'react'

export default function Hero(){
  return (
    <section className="bg-gradient-to-b from-white to-jellybg/5">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-jellynav">Your Deliveries. Our Priority.</h1>
          <p className="mt-4 text-gray-700">Fast, safe, and affordable dispatch services for individuals and businesses in Lagos. From urgent documents to parcels and business deliveries, Jellybiz helps you get it there.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://wa.me/2347084243119?text=Hello%20Jellybiz%20Logistics%2C%20I%20would%20like%20to%20book%20a%20delivery" className="inline-flex items-center px-5 py-3 bg-jellyblue text-white rounded-md">Book a Delivery on WhatsApp</a>
            <a href="#services" className="inline-flex items-center px-5 py-3 border border-gray-200 rounded-md">Explore Our Services</a>
          </div>

          <div className="mt-6 flex gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-jellyblue rounded-full inline-block"></span>Fast Delivery</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-jellyblue rounded-full inline-block"></span>Safe and Reliable</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-jellyblue rounded-full inline-block"></span>Affordable Rates</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-jellyblue rounded-full inline-block"></span>Local Dispatch Support</div>
          </div>
        </div>

        <div className="order-first md:order-last">
          <div className="w-full h-64 bg-gray-100 rounded-md flex items-center justify-center">
            <div className="text-center text-gray-400">Replace with Jellybiz flyer image (logo, rider, van, Lagos) in public/assets/</div>
          </div>
        </div>
      </div>
    </section>
  )
}
