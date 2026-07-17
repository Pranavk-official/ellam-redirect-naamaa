"use client"; // Error boundaries must be Client Components.

import { useEffect } from "react";

// Catches runtime errors thrown while rendering the page (not the root layout —
// that's global-error.tsx). Renders inside the root layout, so it keeps the
// theme, fonts and smooth scroll.
const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-dvh flex-1 flex-col items-center justify-center gap-6 px-6 py-20 text-center">
      <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-muted">
        <span>Ellam</span>
        <span aria-hidden className="h-px w-8 bg-accent" />
        <span className="text-accent">Naamaa</span>
      </div>

      <h1 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-black tracking-tight text-foreground">
        Something went wrong
      </h1>

      <p className="max-w-md text-lg leading-8 text-muted">
        An unexpected error occurred. Try again, or head over to naamaa.in.
      </p>

      <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex h-13 cursor-pointer items-center justify-center rounded-full border border-border px-7 text-base font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
        >
          Try again
        </button>
        <a
          href="https://naamaa.in"
          className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-base font-medium text-background transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
        >
          Go to naamaa.in
          <span aria-hidden>&rarr;</span>
        </a>
      </div>
    </main>
  );
};

export default Error;
