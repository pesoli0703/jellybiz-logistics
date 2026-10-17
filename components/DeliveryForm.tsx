import React, { useState } from 'react'
import { site } from '../lib/site'

export default function DeliveryForm(){
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [pickup, setPickup] = useState('')
  const [delivery, setDelivery] = useState('')
  const [type, setType] = useState('Motorcycle Dispatch')
  const [desc, setDesc] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')

  function handleSubmit(e:any){
    e.preventDefault()
    if(!name || !phone || !pickup || !delivery){
      alert('Please complete the required fields: name, phone, pickup and delivery addresses.')
      return
    }
    const message = `Delivery Enquiry from Website:\nName: ${name}\nPhone: ${phone}\nPickup: ${pickup}\nDelivery: ${delivery}\nType: ${type}\nDescription: ${desc}\nPreferred date: ${date}\nAdditional instructions: ${notes}`
    const url = `${site.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold text-jellynav mb-4">Request a Delivery</h2>
      <p className="text-sm text-gray-600">Fill in the details below and we'll open WhatsApp so you can confirm the booking with Jellybiz. We only collect details to prepare the enquiry.</p>
      <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full name *</label>
          <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone number *</label>
          <input value={phone} onChange={e=>setPhone(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 p-2" placeholder="0708 424 3119" required />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Pickup address *</label>
          <input value={pickup} onChange={e=>setPickup(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 p-2" required />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Delivery address *</label>
          <input value={delivery} onChange={e=>setDelivery(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Delivery type</label>
          <select value={type} onChange={e=>setType(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 p-2">
            <option>Motorcycle Dispatch</option>
            <option>Mini Van Dispatch</option>
            <option>Parcel and Package Delivery</option>
            <option>Small & Medium Load</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred delivery date</label>
          <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 p-2" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Package description</label>
          <textarea value={desc} onChange={e=>setDesc(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 p-2" rows={3} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Additional instructions</label>
          <textarea value={notes} onChange={e=>setNotes(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 p-2" rows={2} />
        </div>

        <div className="md:col-span-2 flex items-center justify-between">
          <div className="text-xs text-gray-500">We will use these details only to respond to your delivery enquiry via WhatsApp.</div>
          <div>
            <button type="submit" className="inline-flex items-center px-5 py-3 bg-jellyblue text-white rounded-md">Send enquiry on WhatsApp</button>
          </div>
        </div>
      </form>
    </section>
  )
}
