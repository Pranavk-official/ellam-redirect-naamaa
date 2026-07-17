# ellam-redirect-naamaa

Landing microsite: **ellam.in has moved to naamaa.in**. One page — hero + a
searchable directory of the temples & services captured from ellam.in, each
linking to `naamaa.in/<slug>`.

## Develop

```bash
bun install
bun dev        # http://localhost:3000
```

`bun build` / `bun start` to build and serve. `bun lint` to lint.

## Config

`.env`:

| Var | Effect |
|-----|--------|
| `NEXT_PUBLIC_OPEN_IN_NEW_TAB` | `"true"` opens naamaa.in links in a new tab |

## Catalogue

Listings live in `src/data/catalogue.ts`, grouped by category. Each row links to
`naamaa.in/<slug>`. As a listing goes live on naamaa, set its real `slug` and
`onboarded: true`; until then `slug` is a placeholder and the row shows
"Coming soon".

## Stack

Next.js 16 (App Router) · React 19 · Tailwind 4 · motion · lenis · tsparticles.

> Next.js here ships breaking changes vs. common knowledge — see `AGENTS.md`.
