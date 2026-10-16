import React from 'react'

export default function HowItWorks(){
  const steps = [
    'Tell us what you need delivered',
    'Share the pickup and destination details',
    'Contact Jellybiz to confirm availability and pricing',
    'Arrange the pickup and delivery'
  ]

  return (
    <section id="how">
      <h2 className="text-2xl font-semibold text-jellynav mb-6">How It Works</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {steps.map((s,i)=> (
          <div key={i} className="bg-white border rounded-md p-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-jellyblue text-white flex items-center justify-center font-bold">{i+1}</div>
            <div className="mt-3 text-gray-700">{s}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
