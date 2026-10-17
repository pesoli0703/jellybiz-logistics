import Image from 'next/image'
import { site, waLink } from '../lib/site'

const trustPoints = [
  'Fast Delivery',
  'Safe & Reliable',
  'City & Within Town',
  'Small & Medium Loads',
  'Parcels & Packages',
  '24/7 Support'
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-jellybg">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-jellycyan/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-jellyblue/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 md:pb-14 md:pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-jellyblue">
            <span className="h-1.5 w-1.5 rounded-full bg-jellyblue" />
            Dispatch Services · Lagos Island
          </div>

          <h1 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight text-jellynav md:text-6xl">
            Your Trusted
            <span className="block text-jellyblue">Dispatch Partner</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 md:text-lg">
            Small money. Fast delivery. Motorcycle and mini-van dispatch for parcels, packages and
            small to medium loads across Lagos Island and within town.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={waLink('Hello Jellybiz Logistics, I would like to book a delivery')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-jellyblue px-5 py-3 font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              Book a Delivery on WhatsApp
            </a>
            <a
              href={`tel:${site.phoneIntl}`}
              className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-3 font-semibold text-jellynav transition hover:border-blue-200"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>

        <figure className="mt-8 md:mt-10">
          <a
            href={site.flyer}
            target="_blank"
            rel="noreferrer"
            aria-label="Open the Jellybiz Logistics flyer at full size"
            className="block overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_24px_60px_rgba(2,44,85,0.16)] transition hover:shadow-[0_28px_70px_rgba(2,44,85,0.22)]"
          >
            <Image
              src={site.flyer}
              alt="Jellybiz Logistics flyer: dispatch services in Lagos Island with motorcycle and mini van, 07084243119, 138 Lewis Street Lagos Island"
              width={site.flyerWidth}
              height={site.flyerHeight}
              priority
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="h-auto w-full"
            />
          </a>
          <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
            <span>
              <span className="md:hidden">Tap the flyer to open it full size.</span>
              <span className="hidden md:inline">Our latest service flyer — click to open full size.</span>
            </span>
            <a href={site.flyer} download className="font-semibold text-jellyblue hover:underline">
              Download flyer
            </a>
          </figcaption>
        </figure>

        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-700">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <svg viewBox="0 0 20 20" aria-hidden className="h-4 w-4 shrink-0 fill-jellyblue">
                <path d="M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm3.9 6.2-4.6 5.2a.9.9 0 0 1-1.3.05L5.9 10.7a.9.9 0 0 1 1.2-1.3l1.5 1.4 4-4.5a.9.9 0 1 1 1.3 1.2Z" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
