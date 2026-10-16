import React from 'react'

export default function WhyJelly(){
  const items = [
    'Delivery options for different package sizes',
    'Affordable, transparent pricing when confirmed',
    'A convenient WhatsApp booking process',
    'Support for individuals and business customers',
    'Local Lagos Island business address',
    'Direct communication about delivery arrangements'
  ]

  return (
    <section id="why">
      <h2 className="text-2xl font-semibold text-jellynav mb-6">Reliable Dispatch. Straightforward Service.</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-700">Jellybiz focuses on delivering dependable, local dispatch services in Lagos Island. We connect you with a rider or vehicle appropriate to your delivery, then confirm availability and pricing before proceeding.</p>
        </div>
        <div>
          <ul className="list-disc pl-5 text-gray-700">
            {items.map((t,i)=>(<li key={i} className="py-1">{t}</li>))}
          </ul>
        </div>
      </div>
    </section>
  )
}
