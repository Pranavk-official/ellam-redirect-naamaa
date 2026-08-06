import { notFound, permanentRedirect, redirect } from "next/navigation";
import { listings } from "@/data/catalogue";
import { newSiteUrl } from "@/lib/site";

// Slug pass-through: ellam.in/<slug> -> naamaa.in/<slug>.
//
// Catch-all so old ellam.in deep links work too: ellam.in/worship/<ellam_slug>
// (and /open-kitchen/…, /parking/…) — only the last segment matters. Old ellam
// slugs are translated to the naamaa slug via the catalogue's `ellam_slugs`.
//
// Catalogued slugs are confirmed live on naamaa, so they get a permanent 308.
// Any other slug-shaped path may be a listing onboarded after this snapshot was
// taken, so it gets a temporary 307 and lets naamaa.in decide — 308 would be
// cached by browsers forever even if the slug never existed. Anything not
// slug-shaped (bot probes, file requests) keeps the local 404.
//
// Static routes (sitemap.xml, robots.txt, icon.svg, public/*) still win over
// this dynamic segment.
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const naamaaSlugs = new Set(listings.map((l) => l.slug));
const ellamToNaamaa = new Map(
  listings.flatMap((l) =>
    l.ellam_slugs ? [[l.ellam_slugs.toLowerCase(), l.slug] as const] : [],
  ),
);

const SlugRedirect = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const path = await params;
  // naamaa slugs are lowercase — normalise so /Edavetty-Temple still resolves.
  const last = path.slug.at(-1)!.toLowerCase();
  const slug = ellamToNaamaa.get(last) ?? last;

  if (!SLUG_PATTERN.test(slug)) notFound();

  const target = `${newSiteUrl}/${slug}`;
  if (naamaaSlugs.has(slug)) permanentRedirect(target);
  redirect(target);
};

export default SlugRedirect;
