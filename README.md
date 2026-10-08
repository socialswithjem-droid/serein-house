# SEREIN HOUSE

A complete editorial ecommerce portfolio by WORKS BY JEM, built from the supplied brief. This is a fictional concept store; no real transactions, accounts, or messages are processed.

## Run locally

Requires Node.js 20.9+ and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To preview the production export:

```sh
npm run build
npm run preview
```

## Deploy to Vercel

Import this `serein-house` directory as the project root. The included `vercel.json` sets Next.js, `npm run build`, and the `out` output directory. No environment variables or backend services are required. The generated `out/` folder can also be hosted by any static host supporting directory index files and a custom `404.html`.

The local preview is not a public deployment.

## Included

- 37 page routes plus a custom 404: homepage, shop, six collections, 15 products, About, journal index and three articles, Contact, FAQ, shipping/returns, privacy, terms, search, cart, wishlist, and account demo.
- Central catalog in `src/data/products.json`, extracted from `build-brief.txt` with supplied names, prices, ratings, review counts, and descriptions.
- Shared product cards, filters, sorting, galleries, scent notes, quantity controls, local bag and wishlist persistence, review navigation, responsive menus, form validation, and clear demo outcomes.
- WORKS BY JEM signature on every page, including 404; no invented portfolio URL.
- Static per-route metadata and Open Graph titles/descriptions. Product images are optimized WebP files, loaded lazily outside the first view. Three requested Google Fonts are loaded externally.
- 18 original generated images: 15 catalog photographs and three editorial scenes. Full built-in image-generation prompts and source mapping are recorded in `image-prompts.json`. Gallery detail views deliberately crop the corresponding product photo; shared editorial imagery provides lifestyle/context positions.

## Verify

```sh
npm run build
npm test
npm run preview
# In a second terminal:
npm run test:e2e
```

On macOS the browser tests use installed Google Chrome. On other systems install Playwright Chromium with `npx playwright install chromium` first.

Automated checks cover the desktop/mobile customer journey, product gallery, filters and sorting, cart arithmetic and persistence, wishlist persistence, search, required form validation, demo outcomes, unknown product routes, static link targets, metadata, and layout overflow at 375, 390, 430, 768, 1024, 1280, 1440, and 1920 pixels.

## Content notes

Prices are USD. Ratings and supplied review quotations are concept content. All products are marked in stock because the brief specifies no unavailable products. The Evening Ritual retains the brief's $96 price and $112 compare-at price (and $16 savings), even though its individual items total $118. Ingredient highlights are presented as highlights, not invented complete formulas. Shipping, policies, contact and account flows are demonstrations.

Bag and wishlist data stay in the visitor's browser. Newsletter and contact inputs are not transmitted or persisted. Checkout never collects payment information. External fonts and hosting may make normal network requests.

## Structure

- `src/app/`: layout, responsive brand styles, static routing, metadata and error pages
- `src/components/store.tsx`: reusable interactive ecommerce components
- `src/components/pages.tsx`: editorial and information pages
- `src/data/`: centralized catalog, collection copy, FAQs, articles and demo policies
- `public/images/`: optimized website assets
- `tests/`: static export validation and browser journeys
- `out/`: generated deployment-ready website
