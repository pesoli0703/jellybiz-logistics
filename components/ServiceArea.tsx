import React from 'react'
import { site } from '../lib/site'

export default function ServiceArea() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-jellynav">Service Area</h2>
      <p className="text-gray-700">
        Jellybiz Logistics is based at {site.address}. We cover Lagos Island and within-town deliveries.
        Please contact us to confirm whether pickup and delivery are available for your specific location.
      </p>
      <div className="mt-4">
        <a className="inline-block font-semibold text-jellyblue" href={site.maps} target="_blank" rel="noreferrer">
          Open in Google Maps
        </a>
      </div>
    </section>
  )
}
