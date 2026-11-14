# Rakkii Cars User Guide

The user guide for **Rakkii Ops**, the shop app of [Rakkii Cars](https://github.com/Ojhojojo/rakkii-cars). It is a [VitePress](https://vitepress.dev) site for three roles: **Owner / desk**, **Technician** and **Sales agent**.

Admin / Service Advisor: to be decided. Where a page says "owner or admin", the app also allows the admin role.

## How the guide is organised (v2)

The guide is task-based: each page answers "how do I…" in short numbered steps.

| Section | Folder | What's in it |
|---|---|---|
| Start here | `docs/start/` | Sign in, hubs, finding a job, the job page, words |
| Technician | `docs/technician/` | The bay day in six steps |
| Sales agent | `docs/sales/` | Pipeline, follow-ups, canvass requests, commission |
| Owner / desk | `docs/desk/` | Daily routine, one job in 8 steps (`desk/job/`), insurance and corporate jobs, fixing mistakes, running the shop |
| Me hub | `docs/me/` | Clock, leave, overtime, payslip |
| Reference | `docs/reference/` | Job statuses and the detailed rules (the v1 chapters 6–13) |

The sidebar and search are configured in `docs/.vitepress/config.mts`.

## Writing rules

1. Check the behaviour in the app (`develop` branch) before changing a step.
2. Use the exact UI labels in **bold**.
3. One task per section, 3–8 numbered steps. Put rules and edge cases in a "If something stops you" table or in Reference.
4. Say who does it and where at the top of each page.
5. Run `npm run docs:build`. It fails on broken internal links and missing images.

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

`docs/.vitepress/dist` is a plain static site. It is served from GitHub Pages at `https://ojhojojo.github.io/rakkii-cars-guide/` (`base: '/rakkii-cars-guide/'` in `config.mts`). Firebase Hosting, Netlify or Cloudflare Pages also work: build command `npm run docs:build`, output directory `docs/.vitepress/dist`.

## Screenshots

See [`docs/public/screenshots/README.md`](docs/public/screenshots/README.md) for how they were captured and how to retake them. Use test data only.

## Related

- Main app repository: https://github.com/Ojhojojo/rakkii-cars
