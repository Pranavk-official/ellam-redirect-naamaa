import Link from "next/link";
import { Directory } from "./directory";

export const Hero = () => (
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
      <Directory />
    </div>
  </section>
);
