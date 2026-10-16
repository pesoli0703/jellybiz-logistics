import React from 'react'

export default function BusinessSection(){
  const handleClick = ()=>{
    const base = 'https://wa.me/2347084243119'
    const text = 'Hello Jellybiz Logistics, I\'d like to discuss business delivery arrangements for regular orders. Please let me know how to proceed.'
    window.open(`${base}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold text-jellynav mb-4">Growing Your Business? Let\'s Move Your Orders.</h2>
      <p className="text-gray-700">Need a dependable dispatch partner for customer orders? Contact Jellybiz to discuss your delivery needs, pickup arrangements, and rates for regular business deliveries.</p>
      <div className="mt-4">
        <button onClick={handleClick} className="inline-flex items-center px-5 py-3 bg-jellyblue text-white rounded-md">Discuss Business Deliveries</button>
      </div>
    </section>
  )
}
