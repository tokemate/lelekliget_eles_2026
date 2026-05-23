# Lélekliget Weboldal — Claude Code instrukciók

## Stack

- **Framework:** Astro 4
- **CSS:** Tailwind CSS 3 (`tailwind.config.mjs`)
- **CMS:** Decap CMS (`public/admin/`) — blog tartalomkezelés
- **Hosting:** Netlify (`netlify.toml`)
- **Foglalórendszer:** SimplyBook.me embed (`src/pages/idopontfoglalas.astro`)

## Könyvtárstruktúra

```
src/
  layouts/BaseLayout.astro   # Alap HTML wrapper (meta, fontek, header, footer)
  components/
    layout/Header.astro      # Sticky header, mobile menü (vanilla JS)
    layout/Footer.astro
    sections/                # Főoldal szekciók (Hero, WhyUs, Services, Clinics, BlogHighlights, CTABanner)
  pages/                     # Minden URL = egy .astro fájl
  content/
    blog/                    # Markdown blog posztok (Decap CMS kezeli)
    config.ts                # Astro content collection séma
  styles/global.css          # Tailwind direktívák + btn-brand, btn-outline segédosztályok
public/
  admin/                     # Decap CMS UI és config
  logo.png / logo-dark.png
```

## Brand

- Elsődleges szín: `#41bdc4` (Tailwind: `brand`)
- Sötétebb árnyalat: `#34979d` (Tailwind: `brand-dark`)
- Halvány háttér: `#d6f0f2` (Tailwind: `brand-light`)
- Nagyon halvány: `#eff9fa` (Tailwind: `brand-50`)
- Display font: Alike (heading)
- Body font: Poppins

## Git & Deployment

- Commit és push minden feladat után
- `npm run build` kötelező commit előtt
- Netlify automatikusan deploy-ol a `main` branch-ről
