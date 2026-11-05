# Chora Tea

Chora Tea storefront preview built with Astro and Preact.

Live site: https://cheerayleejackson-svg.github.io/chora-tea/

## Development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro, under `/chora-tea/`.

## Verification

```sh
npm test
npm run build
npm run preview
```

## Deployment

Push to `main` to run the tests, build the static site, and deploy it to GitHub Pages. The workflow can also be started manually from the Actions tab.

The site uses `/chora-tea/` as its base path. Update `site` and `base` in `astro.config.mjs` if the repository name or hosting address changes.

This is a storefront demo. Checkout, accounts, and product availability retain their preview behavior; it does not process payments or submit real orders.

Source imported from the Chora Tea preview release dated October 4, 2026. Existing photo attribution is preserved in `CREDITS.md`.
