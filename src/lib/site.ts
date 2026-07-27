// Absolute base for canonical / OG / sitemap URLs. It MUST match the host that
// actually serves the site, or scrapers fetch og:image from the wrong origin
// and no preview shows. On Vercel this auto-resolves to the production URL
// (including a custom domain once added), so it usually needs no config. Set
// NEXT_PUBLIC_SITE_URL only to override (e.g. non-Vercel hosts, Docker).
//
// Server-only module — do not import from a client component (the Vercel var
// is not NEXT_PUBLIC_ and would be undefined in the browser bundle).
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://ellam.in");

// Where everything moved to. Canonical target and JSON-LD publisher.
export const newSiteUrl = "https://naamaa.in";

// Mirrored from naamaa.in/contact — keep in sync if that page changes.
export const contact = {
  email: "info@parinaamaa.ai",
  phone: "+91 80861 86688",
  phoneHref: "tel:+918086186688",
  hours: "Mon–Sat, 10 AM – 6 PM IST. WhatsApp also available.",
  enterpriseUrl: "https://enterprise.naamaa.in",
};
