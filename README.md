# ellam → naamaa

The migration site for **ellam.in**. It announces that Ellam has moved to
**naamaa.in** (Parinaamaa) and helps people find each temple / store / service
on the new platform.

Ellam was a Kerala temple-and-services booking app; it has been folded into
Parinaamaa and its backend is gone. This small, mostly-static Next.js site
replaces it at the ellam.in domain. Onboarding to naamaa.in is **phased** —
listings go live over time.

## What it does

- **`/`** — a full-screen "ellam.in has moved to naamaa.in" notice, plus a
  searchable / filterable / sortable **directory** of everything that was on
  ellam.in. Onboarded listings link straight to `naamaa.in/<slug>`; the rest
  show **Coming soon**.
- **Any other path** — a branded **404** page (`not-found.tsx`). ellam.in never
  exposed slug-based URLs (it was a client app making internal API calls), so
  there are no deep links to preserve — unmatched URLs get the 404, not a
  redirect. That's why there is no `[...slug]` route.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind v4 · Motion · tsParticles
(sparkles) · Lenis (smooth scroll). Package manager: **Bun**.

## Develop

```bash
bun install
cp .env.example .env    # then adjust values
bun dev                 # http://localhost:3000
bun run build
bun run start
```

## Project layout

```
src/
  app/
    layout.tsx           root layout — SEO metadata, fonts, smooth scroll
    page.tsx             landing = <Hero/> + <Directory/>
    not-found.tsx        404 for any unmatched path (retired-domain notice)
    error.tsx            runtime error boundary  (client)
    global-error.tsx     root-layout error fallback (client, self-contained)
    opengraph-image.tsx  generated link-preview image (next/og)
    icon.svg             favicon (gold sparkle)
    globals.css          Tailwind v4 theme tokens + Lenis base css
  components/
    hero.tsx             full-screen hero — sparkles overlay, CTAs, scroll cue
    directory.tsx        searchable / filterable / sortable listing directory
    ui/                  sparkles, smooth-scroll (Lenis), scroll-text (reveal)
  data/
    catalogue.ts         source of truth — every listing, grouped by category
  lib/
    utils.ts             cn()
```

## The data — how to onboard a listing

Everything lives in [`src/data/catalogue.ts`](src/data/catalogue.ts), grouped by
category (`Prarthana`, `Ellam Stores`, `Parking`). Each entry:

```ts
{ name: "Edavetty Sree Krishna Swami Temple", slug: "edavetty-temple", location: "Edavetty", onboarded: true }
```

- **`slug`** — the naamaa subdomain. The directory links to `naamaa.in/<slug>`.
- **`onboarded: true`** — it is live on naamaa.in. Onboarded rows are clickable;
  everything else renders **Coming soon**.

naamaa slugs are **not** derivable from the old ellam names (e.g. the ellam
domain `edavettykrishnaswami` became `edavetty-temple`), so when a listing goes
live, set its real `slug` by hand and add `onboarded: true`. That's the only
edit needed — `listings` (the flat, category-tagged view the directory uses) is
derived automatically.

> The catalogue was captured from the live ellam.in API
> (`prod.ellam.in/consumers/<worship|open-kitchen|parking>`) before shutdown.

## Environment variables

`.env` is git-ignored; [`.env.example`](.env.example) is the committed
reference. Set these locally **and** in your deploy environment.

| Variable                     | Purpose                                                                                              |
| ---------------------------- | --------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`       | Absolute URL the site is served from; builds OG / link-preview image URLs. **On Vercel, leave it unset** — it auto-detects the production URL (and a custom domain once added). Set only to override (e.g. non-Vercel hosts). |
| `NEXT_PUBLIC_OPEN_IN_NEW_TAB`| `true` opens naamaa listing links in a new tab.                                                      |

## Deploy

The site's job is to catch **ellam.in** traffic, so point **`ellam.in`** (apex
+ `www`) DNS at this deployment — that is what makes old links land here.
`ellam.naamaa.in` can be an alias / canonical host, but it isn't what catches
anything (nobody has `ellam.naamaa.in/...` links). The app never reads the
request host, so the same build works from any hostname.

Checklist:

1. **On Vercel**, `og:image` URLs auto-resolve to the deployment's production
   URL (and your custom domain once added) — no `NEXT_PUBLIC_SITE_URL` needed.
   Set `NEXT_PUBLIC_OPEN_IN_NEW_TAB` if you want it (`.env` isn't committed). On
   non-Vercel hosts, set `NEXT_PUBLIC_SITE_URL` to the serving host.
2. naamaa.in must be live for the onboarded links to resolve.
3. Link previews are cached by scrapers — after deploying, re-scrape via the
   [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/),
   X Card Validator, or LinkedIn Post Inspector to refresh them.
