# Energy Hub Cafe

Website for Energy Hub Cafe, Al Nahda, Sharjah (https://www.energyhub.cafe/).

React 18 + TypeScript + Vite + Tailwind (base/utilities). Deployed on Vercel; headers and CSP live in `vercel.json`.

```bash
npm ci
npm run dev           # local dev server
npm run build         # checks image references, then builds to dist/
npm run lint
npm run typecheck
npm run check:assets  # every dish image referenced in code exists
```

## Content
- Menu, prices, hours and contacts: `src/data.ts` (AED, inclusive of 5% VAT, from the cafe's final printed menu).
- No offers or promotions are shown on the site by design.

## Images
- `public/img/dishes/`: trimmed WebP cutouts generated from the cafe's studio PNGs by
  `python3 scripts/build-images.py "<MENU PICTURES dir>" "<Links dir>"` (also writes `src/dish-manifest.json`).
- `public/img/partners/`: noon FOOD, Talabat and Keeta logos, cut from the cafe's menu PDF.
- `public/img/brand/`: logo, icons and the share image.

## Components
- Copied in from React Bits via the shadcn registry: `BlurText`, `SpotlightCard`, `Magnet` (`src/components/`). Local fixes: `BlurText` splits on words and renders any element (`as`); `SpotlightCard` colour strings repaired.
- `src/components/ui/accordion.tsx`: shadcn/Radix accordion.
