import Link from "next/link";

// Root not-found: Next renders this for any unmatched URL app-wide (with a 404
// status), so it replaces the old [...slug] catch-all. ellam.in is retired —
// point strays at naamaa.in.
const NotFound = () => (
  <main className="flex min-h-dvh flex-1 flex-col items-center justify-center gap-6 px-6 py-20 text-center">
    <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-muted">
      <span>Ellam</span>
      <span aria-hidden className="h-px w-8 bg-accent" />
      <span className="text-accent">Naamaa</span>
    </div>

    <h1 className="font-serif text-[clamp(3rem,10vw,5rem)] font-black leading-none tracking-tight text-foreground">
      404
    </h1>

    <p className="max-w-md text-lg leading-8 text-muted">
      This page isn’t here. Ellam has moved to{" "}
      <span className="font-medium text-foreground">naamaa.in</span>.
    </p>

    <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
      <a
        href="https://naamaa.in"
        className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-base font-medium text-background transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        Go to naamaa.in
        <span aria-hidden>&rarr;</span>
      </a>
      <Link
        href="/"
        className="inline-flex h-13 items-center justify-center rounded-full border border-border px-7 text-base font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        Back to home
      </Link>
    </div>
  </main>
);

export default NotFound;
