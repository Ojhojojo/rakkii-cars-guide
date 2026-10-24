# Rakkii Cars User Guide

The v1 user guide for **Rakkii Ops**, the shop app of [Rakkii Cars](https://github.com/Ojhojojo/rakkii-cars). It is a [VitePress](https://vitepress.dev) site written for three roles:

- **Shop Owner** — full workflow, money, HR and settings
- **Lead Technician** — daily bay work, checklists, QC photos, canvass
- **Sales Agent** — pipeline, quotes, commission

Admin / Service Advisor: To be decided — Waiting for confirmation.

Every page, tab, field, status and gate name matches the app on the `develop` branch of `Ojhojojo/rakkii-cars`. The steps describe workflows, page and tab names and required fields rather than colours or layout, so they stay true when the UI is restyled.

## Contents

| Part | Chapters |
|---|---|
| 1. Getting started | 1 Welcome & navigation |
| 2. Your daily guide | 2 Technician · 3 Me hub · 4 Sales agent |
| 3. The four job lanes | 5 Private / walk-in · 6 Insurance & LOA · 7 Corporate, government & blanket POs · 8 Billing chain, receivables & credit notes |
| 4. Running the shop | 9 Parts, canvass, restock & payables · 10 Board, calendar, backjobs & contractors · 11 HR, payroll & documents |
| 5. Money & admin | 12 Finance & accounting · 13 Shop settings & staff permissions |

Sources are in `docs/chapters/`. The sidebar and search are configured in `docs/.vitepress/config.mts`.

## Running locally

Requires Node.js 18+ (20 LTS recommended).

```bash
npm install
npm run docs:dev      # http://localhost:5173 with hot reload
```

## Build and preview

```bash
npm run docs:build    # static site in docs/.vitepress/dist
npm run docs:preview  # serve the built site locally
```

## Deploying

`docs/.vitepress/dist` is a plain static site and can be hosted anywhere:

- **Firebase Hosting** (same as the Rakkii apps): set `"public": "docs/.vitepress/dist"` in `firebase.json`, then `npm run docs:build && firebase deploy --only hosting`.
- **GitHub Pages**: add a workflow that runs `npm ci && npm run docs:build` and uploads `docs/.vitepress/dist` with `actions/upload-pages-artifact`. If served from `https://ojhojojo.github.io/rakkii-cars-guide/`, set `base: '/rakkii-cars-guide/'` in `config.mts`.
- **Netlify / Cloudflare Pages**: build command `npm run docs:build`, output directory `docs/.vitepress/dist`.

## Screenshots

Chapters contain screenshot **placeholders** pointing at `/screenshots/<chapter>/<step>.png`. The full checklist and capture rules are in [`docs/public/screenshots/README.md`](docs/public/screenshots/README.md). Use demo data only.

## Contributing

1. Check the behaviour in the app (`develop` branch) before changing a step.
2. Use the exact UI labels in **bold**.
3. Run `npm run docs:build` — it fails on broken internal links.
4. Open a pull request.

## Related

- Main app repository: https://github.com/Ojhojojo/rakkii-cars
