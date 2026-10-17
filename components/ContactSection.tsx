import React from 'react'
import Image from 'next/image'
import { site, waLink } from '../lib/site'

export default function ContactSection() {
  return (
    <section id="contact">
      <h2 className="mb-4 text-2xl font-semibold text-jellynav">Contact Jellybiz Logistics</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-md border bg-white p-6">
          <div className="flex items-center gap-3">
            <Image
              src={site.logo}
              alt="Jellybiz Logistics logo"
              width={64}
              height={64}
              className="h-14 w-14 object-contain"
            />
            <div>
              <div className="font-semibold">Jellybiz Logistics</div>
              <div className="text-sm text-gray-600">Dispatch Services</div>
            </div>
          </div>
          <div className="mt-3 text-gray-700">{site.address}</div>
          <div className="mt-2">
            Phone:{' '}
            <a href={`tel:${site.phoneIntl}`} className="font-semibold text-jellyblue">
              {site.phoneDisplay}
            </a>
          </div>
          <div className="mt-2 break-all">
            Email:{' '}
            <a href={`mailto:${site.email}`} className="text-jellyblue">
              {site.email}
            </a>
          </div>
          <div className="mt-2">
            Instagram:{' '}
            <a href={site.instagram} target="_blank" rel="noreferrer" className="text-jellyblue">
              {site.instagramHandle}
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={waLink('Hello Jellybiz Logistics, I have a question')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-jellyblue px-4 py-2 font-semibold text-white"
            >
              Chat on WhatsApp
            </a>
            <a
              href={site.flyer}
              download
              className="inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 font-semibold text-jellynav"
            >
              Download flyer
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-md border bg-white">
          <a href={site.flyer} target="_blank" rel="noreferrer" className="block">
            <Image
              src={site.flyer}
              alt="Jellybiz Logistics flyer with services, phone number and Lagos Island address"
              width={site.flyerWidth}
              height={site.flyerHeight}
              sizes="(max-width: 768px) 100vw, 560px"
              className="h-auto w-full"
            />
          </a>
          <div className="flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
            <span className="text-gray-700">Based at 138 Lewis Street, Lagos Island.</span>
            <a href={site.maps} target="_blank" rel="noreferrer" className="font-semibold text-jellyblue">
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
