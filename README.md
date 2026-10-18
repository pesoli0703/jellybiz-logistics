# Jellybiz Logistics — Website

Landing page for Jellybiz Logistics & Dispatch Services (Lagos Island), built with Next.js, TypeScript, and Tailwind CSS.

## Brand assets

The official flyer is the single source of brand imagery across the site:

| File | Used for |
| --- | --- |
| `public/assets/flyer-banner.jpg` | Hero banner, contact section, flyer downloads |
| `public/assets/og-image.jpg` | Social share preview (WhatsApp, Facebook, X, LinkedIn, Telegram) — 1200×630 |
| `public/assets/logo.png` | Navbar, contact card, Instagram card, source for icons |
| `public/icon-512.png`, `icon-192.png`, `icon-maskable-512.png` | Web app / install icons |
| `public/apple-touch-icon.png`, `favicon.ico`, `favicon-32x32.png`, `favicon-16x16.png` | Browser and device icons |

All copy, phone/WhatsApp links, address, social links and the production URL live in `lib/site.ts` — update that one file to change contact details everywhere.

If the flyer artwork changes, replace `flyer-banner.jpg`, update `flyerWidth` and `flyerHeight` in `lib/site.ts` to match the image, and regenerate `og-image.jpg` at 1200×630 without cropping the artwork.

## Local setup

1. Install dependencies

   npm install

2. Run the development server

   npm run dev

3. Build for production

   npm run build

## Deployment

The site is deployed on Vercel at https://jellybiz-logistics-navy.vercel.app. Connect the repository to Vercel and deploy; `sitemap.xml`, `robots.txt` and the canonical/OG URLs already point to that domain. If a custom domain is added, update `site.url` in `lib/site.ts` plus `public/sitemap.xml` and `public/robots.txt`.

## SEO

- Title, description, canonical, Open Graph and Twitter card tags are set in `pages/index.tsx`.
- LocalBusiness (`MovingCompany`) structured data is embedded on the home page.
- `public/sitemap.xml` and `public/robots.txt` are ready for Google Search Console.

## WhatsApp links

All WhatsApp CTAs open +234 708 424 3119 via `wa.me` with URL-encoded messages, generated through `waLink()` in `lib/site.ts`.
