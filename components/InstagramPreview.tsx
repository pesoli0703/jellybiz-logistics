import React from 'react'

export default function InstagramPreview(){
  return (
    <section>
      <h2 className="text-2xl font-semibold text-jellynav mb-4">Follow the Journey with Jellybiz.</h2>
      <p className="text-gray-700">See deliveries and updates on Instagram.</p>
      <div className="mt-4">
        <a href="https://www.instagram.com/jellybiz.logistics/" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-white border rounded-md">Follow Us on Instagram</a>
      </div>
      <div className="mt-6 w-full h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">Instagram preview unavailable without integration — link above opens the account.</div>
    </section>
  )
}
