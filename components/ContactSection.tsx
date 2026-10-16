import React from 'react'

export default function ContactSection(){
  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold text-jellynav mb-4">Contact Jellybiz Logistics</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-md p-6">
          <div className="font-semibold">Jellybiz Logistics</div>
          <div className="mt-2 text-gray-700">138 Lewis Street, Lagos Island, Lagos, Nigeria</div>
          <div className="mt-2">Phone: <a href="tel:+2347084243119" className="text-jellyblue">07084243119</a></div>
          <div className="mt-2">Email: <a href="mailto:jelili_abubakar@yahoo.com" className="text-jellyblue">jelili_abubakar@yahoo.com</a></div>
          <div className="mt-2">Instagram: <a href="https://www.instagram.com/jellybiz.logistics/" target="_blank" rel="noreferrer" className="text-jellyblue">@Jellybiz.logistics</a></div>
          <div className="mt-4">
            <a className="inline-flex items-center px-4 py-2 bg-jellyblue text-white rounded-md" href="https://wa.me/2347084243119?text=Hello%20Jellybiz%20Logistics%2C%20I%20have%20a%20question">Chat on WhatsApp</a>
          </div>
        </div>
        <div className="bg-white border rounded-md p-6">
          <div className="font-semibold">Map & Service area</div>
          <div className="mt-2 text-gray-700">Based at 138 Lewis Street, Lagos Island. Click the link to open the location in Google Maps.</div>
          <div className="mt-4">
            <a href="https://www.google.com/maps/search/138+Lewis+Street+Lagos+Island+Lagos+Nigeria" target="_blank" rel="noreferrer" className="text-jellyblue">Open in Google Maps</a>
          </div>
        </div>
      </div>
    </section>
  )
}
