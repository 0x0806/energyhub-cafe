# Energy Hub Cafe

Website for Energy Hub Cafe, Al Nahda, Sharjah (https://www.energyhub.cafe/).

React 18 + TypeScript + Vite. Deployed on Vercel; headers and CSP live in `vercel.json`.

```bash
npm ci
npm run dev        # local dev server
npm run build      # production build to dist/
npm run lint
npm run typecheck
```

- Menu content and contact details: `src/data.ts` (prices are AED, transcribed from the printed boards).
- Images: `public/img/` (`food` crops and `boards` from the cafe's menu boards, `brand` logo and icons).
