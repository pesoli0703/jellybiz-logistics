import React from 'react'
import Image from 'next/image'
import { site } from '../lib/site'

export default function InstagramPreview() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-jellynav">Follow the Journey with Jellybiz.</h2>
      <p className="text-gray-700">See deliveries, riders and daily updates on Instagram.</p>

      <div className="mt-5 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-jellynav via-[#0a3563] to-jellyblue text-white shadow-sm">
        <div className="flex flex-col items-center gap-4 px-6 py-8 text-center sm:flex-row sm:text-left">
          <Image
            src={site.logo}
            alt="Jellybiz Logistics emblem"
            width={96}
            height={96}
            className="h-20 w-20 rounded-full bg-white object-contain p-1"
          />
          <div className="flex-1">
            <div className="text-lg font-bold">{site.instagramHandle}</div>
            <div className="text-sm text-blue-100">{site.tagline}</div>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-white px-4 py-2 font-semibold text-jellynav"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
