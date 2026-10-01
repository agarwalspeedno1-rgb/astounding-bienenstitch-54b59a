# Agarwal Speed Packers & Movers

Marketing and lead-generation website for Agarwal Speed Packers & Movers, a household and corporate relocation
company based in Alwal, Secunderabad, serving Hyderabad and Pan-India.

## Pages

- **Home** — hero with instant quote form, coverage areas, packing types, services preview, customer reviews
- **About Us** — company background and credentials
- **Services** — full service catalog (household shifting, office relocation, car/bike transport, warehousing, etc.)
- **Work Gallery** — photos of past moves
- **FAQ**
- **Contact** — phone, WhatsApp, email, address, and a contact/quote form
- **Get a Quote** — dedicated quote page with the item-by-item inventory calculator

## Features

- Instant cost estimate based on move type, distance, and (optionally) a room-by-room inventory calculator
- Quote requests are captured via Netlify Forms as soon as a visitor submits them, in addition to the optional
  WhatsApp follow-up
- "Check shipment status" sends the customer's booking ID straight to WhatsApp/phone instead of showing fabricated
  tracking data
- Per-page SEO titles/descriptions and `MovingCompany` structured data (JSON-LD) for local search visibility

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (file-based routing, SSR)
- React 19
- Tailwind CSS 4
- Netlify Forms (lead capture)
- TypeScript (strict mode)
- Vite 7

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`. To test the full Netlify runtime (forms, redirects) locally, use the
Netlify CLI instead:

```bash
netlify dev
```

## Build

```bash
npm run build
```

Outputs a deployable build to `dist/client` (configured in `netlify.toml`).

## Editing Content

All business content — phone numbers, address, service areas, service catalog, reviews, FAQ, and gallery items —
lives in `src/data/company.ts`. See `AGENTS.md` for the full project structure and conventions.
