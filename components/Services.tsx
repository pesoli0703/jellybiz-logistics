import React from 'react'

const services = [
  {id: 'motorcycle', title: 'Motorcycle Dispatch', desc: 'Quick motorcycle deliveries for documents and small parcels within Lagos Island.'},
  {id: 'minivan', title: 'Mini Van Dispatch', desc: 'Larger or multiple items transported safely in our mini van service.'},
  {id: 'parcel', title: 'Parcel and Package Delivery', desc: 'Reliable parcel pickup and delivery for individuals and businesses.'},
  {id: 'loads', title: 'Small & Medium Loads', desc: 'Transport solutions for small to medium-sized goods within confirmed areas.'},
  {id: 'local', title: 'Local Delivery Support', desc: 'Assistance for local pickup and delivery arrangements.'},
  {id: 'business', title: 'Business Delivery Support', desc: 'Regular dispatch support for online sellers, shops and offices.'}
]

function waLinkFor(serviceId:string, serviceTitle:string){
  const base = 'https://wa.me/2347084243119'
  const text = `Hello Jellybiz Logistics, I would like to request the ${serviceTitle} service. Please let me know availability and rates.`
  return `${base}?text=${encodeURIComponent(text)}`
}

export default function Services(){
  return (
    <section id="services">
      <h2 className="text-2xl font-semibold text-jellynav mb-6">Delivery Solutions for Everyday Business</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.id} className="bg-white border rounded-md p-5 shadow-sm">
            <h3 className="font-semibold text-lg text-jellynav">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
            <div className="mt-4">
              <a href={waLinkFor(s.id, s.title)} className="inline-flex items-center px-4 py-2 bg-jellyblue text-white rounded-md">Request This Service</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
