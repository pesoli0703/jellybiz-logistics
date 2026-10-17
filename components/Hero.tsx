import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-jellybg/5">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-jellyblue">
              Trusted dispatch partner
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-none text-jellynav tracking-tight">
              Your Deliveries.
              <span className="block text-jellyblue">Our Priority.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base md:text-lg text-gray-700">
              Fast, safe, and affordable dispatch services for individuals and businesses in Lagos. From urgent documents to parcels and business deliveries, Jellybiz helps you get it there.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/2347084243119?text=Hello%20Jellybiz%20Logistics%2C%20I%20would%20like%20to%20book%20a%20delivery"
                className="inline-flex items-center px-5 py-3 bg-jellyblue text-white rounded-md font-semibold shadow-sm hover:brightness-110 transition"
              >
                Book a Delivery on WhatsApp
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-5 py-3 border border-gray-200 bg-white text-jellynav rounded-md font-semibold hover:border-blue-200 transition"
              >
                Explore Our Services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-jellyblue rounded-full"></span>Fast Delivery</div>
              <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-jellyblue rounded-full"></span>Safe & Reliable</div>
              <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-jellyblue rounded-full"></span>Affordable Rates</div>
              <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-jellyblue rounded-full"></span>Local Support</div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-200 bg-white shadow-[0_20px_50px_rgba(2,44,85,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-cyan-300/20" />
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src="/assets/IMG_6305.jpeg"
                  alt="Jellybiz Logistics dispatch van, rider, and Lagos city skyline"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 900px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
