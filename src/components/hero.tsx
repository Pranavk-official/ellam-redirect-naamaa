"use client";

import { useLenis } from "lenis/react";
import { Sparkles } from "@/components/ui/sparkles";

export const Hero = () => {
  const lenis = useLenis();

  // Scroll to the directory (Lenis-smooth) without pushing "#find" into the URL.
  const scrollToFind = () => {
    const el = document.getElementById("find");
    if (!el) return;
    if (lenis) lenis.scrollTo(el);
    else el.scrollIntoView();
  };

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-20 text-center opacity-100 transition-opacity duration-700 ease-out sm:px-10 starting:opacity-0">
      {/* Sparkles overlay across the whole hero (subtle, gold, theme-matched) */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_bottom,rgba(224,181,60,0.14),transparent_70%)]" />
        <Sparkles
          density={650}
          speed={1}
          size={1.1}
          direction="top"
          opacitySpeed={2}
          color="#e0b53c"
          className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_58%,transparent)]"
        />
      </div>

      {/* Bottom fade: dissolve sparkles + glow into the page so the hero blends
          into the directory below instead of ending on a hard clipped edge. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-40 bg-linear-to-b from-transparent to-background" />

      <div className="relative z-10 w-full max-w-3xl">
        {/* Eyebrow: old → new */}
        <div className="flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-widest text-muted">
          <span>Ellam</span>
          <span aria-hidden className="h-px w-8 bg-accent" />
          <span className="text-accent">Naamaa</span>
        </div>

        {/* Headline */}
        <h1 className="mt-8 text-balance font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[1.08] tracking-tight text-foreground">
          ellam.in has moved to{" "}
          <span className="whitespace-nowrap text-accent">naamaa.in</span>
        </h1>

        {/* Explanation */}
        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-muted sm:text-xl">
          Ellam is now part of{" "}
          <span className="font-medium text-foreground">Parinaamaa</span>. Temples
          and services are moving to{" "}
          <span className="font-medium text-foreground">naamaa.in</span> — find
          yours below and open it there.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://naamaa.in"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-base font-medium text-background transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            Go to naamaa.in
            <span aria-hidden>&rarr;</span>
          </a>
          <button
            type="button"
            onClick={scrollToFind}
            className="inline-flex h-13 cursor-pointer items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-7 text-base font-medium text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            Find your service
            <span aria-hidden>&darr;</span>
          </button>
        </div>
      </div>

      {/* Pulsing scroll cue */}
      <button
        type="button"
        onClick={scrollToFind}
        className="absolute inset-x-0 bottom-6 z-10 mx-auto flex w-fit cursor-pointer flex-col items-center gap-1 text-xs font-medium uppercase tracking-widest text-muted transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none motion-safe:animate-pulse"
      >
        <span>Scroll to find your service</span>
        <span aria-hidden className="text-base">
          &darr;
        </span>
      </button>
    </section>
  );
};
