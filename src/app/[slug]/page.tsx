import { notFound, permanentRedirect, redirect } from "next/navigation";
import { listings } from "@/data/catalogue";
import { newSiteUrl } from "@/lib/site";

// Slug pass-through: ellam.in/<slug> -> naamaa.in/<slug>.
//
// Catalogued slugs are confirmed live on naamaa, so they get a permanent 308.
// Any other slug-shaped path may be a listing onboarded after this snapshot was
// taken, so it gets a temporary 307 and lets naamaa.in decide — 308 would be
// cached by browsers forever even if the slug never existed. Anything not
// slug-shaped (bot probes, file requests, stray deep links) keeps the local 404.
//
// Only single-segment paths reach here; static routes (sitemap.xml, robots.txt,
// icon.svg, public/*) still win over this dynamic segment.
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const catalogued = new Set(listings.map((l) => l.slug));

const SlugRedirect = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  // naamaa slugs are lowercase — normalise so /Edavetty-Temple still resolves.
  const slug = (await params).slug.toLowerCase();

  if (!SLUG_PATTERN.test(slug)) notFound();

  const target = `${newSiteUrl}/${slug}`;
  if (catalogued.has(slug)) permanentRedirect(target);
  redirect(target);
};

export default SlugRedirect;
