import React from 'react'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="bg-jellynav text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-bold text-xl">Jellybiz Logistics</div>
          <div className="mt-2 text-sm">Small money. Fast delivery.</div>
        </div>
        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-2 text-sm">
            <li>Motorcycle Dispatch</li>
            <li>Mini Van Dispatch</li>
            <li>Parcel Delivery</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-2 text-sm">07084243119</div>
          <div className="text-sm">jelili_abubakar@yahoo.com</div>
        </div>
      </div>
      <div className="bg-[#041425] text-center py-3 text-sm">© {year} Jellybiz Logistics. All rights reserved.</div>
    </footer>
  )
}
