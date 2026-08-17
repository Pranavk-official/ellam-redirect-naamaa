import Link from "next/link";
import { Directory } from "./directory";
import { listings } from "@/data/catalogue";
import { newSiteUrl } from "@/lib/site";

// naamaa.in serves the same SPA shell for every path, so even a dead slug
// answers 200 — the microsite lookup its own frontend calls is the real check
// (404 = "Microsite not found or unpublished"). Anything else, a network error
// included, keeps the listing: a stale link beats an empty directory when
// naamaa is down. Cached a day, so the page stays static between revalidations.
const isLive = async (slug: string) => {
  try {
    const res = await fetch(`${newSiteUrl}/api/v1/public/microsite/${slug}`, {
      next: { revalidate: 86400 },
    });
    return res.status !== 404;
  } catch {
    return true;
  }
};

export const Hero = async () => {
  // Sequential on purpose: naamaa drops connections when the whole catalogue is
  // checked at once, and a dropped check fails open into a dead link.
  const items = [];
  for (const l of listings) if (await isLive(l.slug)) items.push(l);

  return (
  <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 py-16 text-center opacity-100 transition-opacity duration-700 ease-out sm:px-10 sm:py-20 starting:opacity-0">
    <div className="relative z-10 w-full max-w-3xl">
      {/* Eyebrow: old → new */}
      <div className="flex items-center justify-center gap-2 text-[clamp(1.5rem,7vw,4.5rem)] font-medium uppercase tracking-[0.15em] text-muted sm:gap-3 sm:tracking-widest">
        <span>Ellam</span>
        <span aria-hidden className="h-px w-5 shrink-0 bg-accent sm:w-8" />
        <span className="text-accent">Naamaa</span>
      </div>

      {/* Headline */}
      <h1 className="mt-6 text-balance font-serif text-2xl font-black leading-[1.08] tracking-tight text-foreground sm:mt-8 sm:text-3xl">
        ellam.in has moved to{" "}
        <Link href="https://naamaa.in">
          <span className="whitespace-nowrap text-accent">naamaa.in</span>
        </Link>
      </h1>
    </div>

    <div className="relative z-10 w-full max-w-3xl">
      <Directory items={items} />
    </div>
  </section>
  );
};
