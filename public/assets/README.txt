# Jellybiz Logistics brand assets

- logo.png          — Jellybiz emblem on white (navbar, contact, Instagram card)
- flyer-banner.jpg  — the official service flyer, shown in the hero and contact sections
- og-image.jpg      — 1200x630 social share card built from the flyer (WhatsApp, Facebook, X, LinkedIn)

If the flyer artwork is updated, replace flyer-banner.jpg and update flyerWidth and
flyerHeight in lib/site.ts to match its native dimensions. Regenerate og-image.jpg
by fitting the full flyer on a 1200x630 navy background without cropping. Favicons and app icons live in /public
and are cropped from logo.png.
