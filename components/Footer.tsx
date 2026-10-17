import React from 'react'
import { site, waLink } from '../lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-12 bg-jellynav text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="font-bold text-xl">Jellybiz Logistics</div>
          <div className="mt-2 text-sm text-blue-100">{site.tagline}</div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              href={waLink('Hello Jellybiz Logistics, I would like to book a delivery')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-jellyblue px-4 py-2 font-semibold text-white"
            >
              WhatsApp us
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-white/25 px-4 py-2 font-semibold text-white"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-2 space-y-1 text-sm text-blue-100">
            <li>Motorcycle Dispatch</li>
            <li>Mini Van Dispatch</li>
            <li>Parcel &amp; Package Delivery</li>
            <li>Small &amp; Medium Loads</li>
            <li>Business Delivery Support</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-2 space-y-1 text-sm text-blue-100">
            <div>
              <a href={`tel:${site.phoneIntl}`} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </div>
            <div>
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                {site.email}
              </a>
            </div>
            <div>{site.address}</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#041425] py-3 text-center text-xs text-blue-100">
        © {year} Jellybiz Logistics. All rights reserved.
      </div>
    </footer>
  )
}
