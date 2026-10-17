export const site = {
  name: 'Jellybiz Logistics',
  tagline: 'Small money. Fast delivery.',
  url: 'https://jellybiz-logistics-navy.vercel.app',
  phoneDisplay: '0708 424 3119',
  phoneRaw: '07084243119',
  phoneIntl: '+2347084243119',
  whatsapp: 'https://wa.me/2347084243119',
  email: 'jelili_abubakar@yahoo.com',
  address: '138 Lewis Street, Lagos Island, Lagos, Nigeria',
  instagram: 'https://www.instagram.com/jellybiz.logistics/',
  instagramHandle: '@jellybiz.logistics',
  flyer: '/assets/flyer-banner.jpg',
  flyerWidth: 1280,
  flyerHeight: 511,
  ogImage: '/assets/og-image.jpg',
  logo: '/assets/logo.png',
  maps: 'https://www.google.com/maps/search/138+Lewis+Street+Lagos+Island+Lagos+Nigeria'
}

export function waLink(message: string) {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`
}
