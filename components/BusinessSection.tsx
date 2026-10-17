import React from 'react'
import { waLink } from '../lib/site'

export default function BusinessSection() {
  const message =
    "Hello Jellybiz Logistics, I'd like to discuss business delivery arrangements for regular orders. Please let me know how to proceed."

  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-jellynav">
        Growing Your Business? Let&apos;s Move Your Orders.
      </h2>
      <p className="text-gray-700">
        Need a dependable dispatch partner for customer orders? Contact Jellybiz to discuss your delivery
        needs, pickup arrangements, and rates for regular business deliveries.
      </p>
      <div className="mt-4">
        <a
          href={waLink(message)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md bg-jellyblue px-5 py-3 font-semibold text-white"
        >
          Discuss Business Deliveries
        </a>
      </div>
    </section>
  )
}
