import Image from 'next/image'
import { site, waLink } from '../lib/site'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#how', label: 'How It Works' },
  { href: '#why', label: 'Why Jellybiz' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#contact', label: 'Contact' }
]

const bookingLink = waLink('Hello Jellybiz Logistics, I want to book a delivery')

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src={site.logo}
            alt="Jellybiz Logistics logo"
            width={56}
            height={56}
            priority
            className="h-11 w-11 object-contain md:h-14 md:w-14"
          />
          <span>
            <span className="block text-lg font-black leading-none tracking-tight text-jellynav md:text-xl">
              Jellybiz
            </span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">
              Logistics
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-gray-700 transition hover:text-jellynav">
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${site.phoneIntl}`}
            className="hidden items-center gap-2 text-sm font-semibold text-jellynav lg:inline-flex"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={bookingLink}
            target="_blank"
            rel="noreferrer"
            className="ml-1 inline-flex items-center rounded-md bg-jellyblue px-4 py-2 text-sm font-semibold text-white"
          >
            Book a Delivery
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={bookingLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-jellyblue px-3 py-2 text-xs font-semibold text-white"
          >
            Book
          </a>
          <details className="relative">
            <summary className="cursor-pointer list-none rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-jellynav [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 flex w-56 flex-col rounded-md border border-gray-100 bg-white p-2 shadow-lg">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="rounded px-3 py-2 text-gray-700 hover:bg-gray-50">
                  {link.label}
                </a>
              ))}
              <a href={`tel:${site.phoneIntl}`} className="rounded px-3 py-2 font-semibold text-jellynav hover:bg-gray-50">
                Call {site.phoneDisplay}
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
