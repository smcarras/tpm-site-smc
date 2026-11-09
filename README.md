# Talent PayMaster — Website

Single-page marketing site built with React 18, TypeScript, Vite and Tailwind CSS.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs static site to dist/
```

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick the repo.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Save and deploy. Every push to the main branch redeploys automatically.

## Editing content

- Page copy lives in `src/pages/*.tsx`; shared nav/footer in `src/components/`.
- Images are in `public/` and referenced by root path (e.g. `/logos/nfl.png`).
  Stock photo URLs are centralized in `src/config/images.ts`.
- Brand colors (red/blue scales) are defined in `tailwind.config.js`.
