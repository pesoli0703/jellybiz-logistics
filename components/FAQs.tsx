import React from 'react'

const faqs = [
  {q:'What delivery services does Jellybiz offer?', a:'Motorcycle dispatch, mini van dispatch, parcel delivery, and small/medium load transport within our confirmed service areas.'},
  {q:'How do I request a dispatch rider?', a:'Use the "Book a Delivery" WhatsApp button or fill the delivery enquiry form which opens WhatsApp with your details.'},
  {q:'How can I get a delivery quote?', a:'Contact Jellybiz on WhatsApp with pickup and destination details for an availability and pricing confirmation.'},
  {q:'Does Jellybiz deliver larger packages?', a:'We offer mini van and small/medium load services for larger items where the size and route are suitable. Please confirm by contacting us.'},
  {q:'Can online vendors arrange recurring deliveries?', a:'Yes. Discuss business delivery arrangements via the business contact button to plan recurring pickups and rates.'},
  {q:'Which areas does Jellybiz cover?', a:'Jellybiz is based in Lagos Island. Please contact us to check availability for your specific pickup and delivery locations.'},
  {q:'How can I contact Jellybiz?', a:'Phone/WhatsApp: 07084243119. Email: jelili_abubakar@yahoo.com. Instagram: @Jellybiz.logistics'},
  {q:'How do I confirm whether a delivery request has been accepted?', a:'After opening WhatsApp and sending your enquiry, Jellybiz will confirm availability and pricing in the chat. The website only opens the chat — confirmation happens during direct communication.'}
]

export default function FAQs(){
  return (
    <section id="faqs">
      <h2 className="text-2xl font-semibold text-jellynav mb-4">Frequently asked questions</h2>
      <div className="grid gap-4">
        {faqs.map((f,i)=>(
          <div key={i} className="bg-white border rounded-md p-4">
            <div className="font-semibold">{f.q}</div>
            <div className="mt-2 text-gray-700">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
