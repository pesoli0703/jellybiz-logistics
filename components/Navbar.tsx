import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="relative h-12 w-52 overflow-hidden rounded-md bg-white">
          <Image
            src="/assets/86aa350d-1a19-4905-894c-ef3cc6773e89.jpeg"
            alt="Jellybiz Logistics logo"
            fill
            priority
            sizes="208px"
            style={{ objectFit: 'contain' }}
          />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-gray-700 hover:text-jellynav">Services</a>
          <a href="#how" className="text-gray-700 hover:text-jellynav">How It Works</a>
          <a href="#why" className="text-gray-700 hover:text-jellynav">Why Jellybiz</a>
          <a href="#faqs" className="text-gray-700 hover:text-jellynav">FAQs</a>
          <a href="#contact" className="text-gray-700 hover:text-jellynav">Contact</a>
          <a
            href="https://wa.me/2347084243119?text=Hello%20Jellybiz%20Logistics%2C%20I%20want%20to%20book%20a%20delivery"
            className="ml-2 inline-flex items-center px-4 py-2 bg-jellyblue text-white rounded-md"
          >
            Book a Delivery
          </a>
        </nav>

        <div className="md:hidden">
          <details>
            <summary className="p-2 rounded-md bg-gray-100">Menu</summary>
            <div className="mt-2 flex flex-col bg-white p-2 rounded-md">
              <a href="#services" className="py-2">Services</a>
              <a href="#how" className="py-2">How It Works</a>
              <a href="#why" className="py-2">Why Jellybiz</a>
              <a href="#faqs" className="py-2">FAQs</a>
              <a href="#contact" className="py-2">Contact</a>
              <a href="https://wa.me/2347084243119?text=Hello%20Jellybiz%20Logistics%2C%20I%20want%20to%20book%20a%20delivery" className="mt-2 inline-flex items-center px-4 py-2 bg-jellyblue text-white rounded-md">Book a Delivery</a>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
