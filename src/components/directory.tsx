"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { listings, CATEGORIES, type CatalogueEntry } from "@/data/catalogue";

const NAAMAA = "https://naamaa.in";

// Open naamaa links in a new tab when NEXT_PUBLIC_OPEN_IN_NEW_TAB=true (.env).
const OPEN_IN_NEW_TAB = process.env.NEXT_PUBLIC_OPEN_IN_NEW_TAB === "true";

// Scroll-reveal for each row (blur + fade + rise, once).
const rowVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

// Service categories that actually have listings, in ellam's order, with counts.
const CATS = CATEGORIES.map((name) => ({
  name,
  count: listings.filter((l) => l.category === name).length,
})).filter((c) => c.count > 0);

const LIVE = listings.filter((l) => l.onboarded).length;

type SortKey = "name-asc" | "name-desc";

export const Directory = () => {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [onlyOnboarded, setOnlyOnboarded] = useState(false);
  const [sort, setSort] = useState<SortKey>("name-asc");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = listings.filter((l) => {
      if (cat && l.category !== cat) return false;
      if (onlyOnboarded && !l.onboarded) return false;
      if (!q) return true;
      return (
        l.name.toLowerCase().includes(q) ||
        l.slug.toLowerCase().includes(q) ||
        (l.location ?? "").toLowerCase().includes(q) ||
        l.category.toLowerCase().includes(q)
      );
    });
    if (sort === "name-desc")
      return filtered.sort((a, b) => b.name.localeCompare(a.name));
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [query, cat, onlyOnboarded, sort]);

  return (
    <section className="mt-16 pt-12">
      <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground">
        Find yours on naamaa.in
      </h2>
      <p className="mt-2 text-muted">
        {`Everything from ellam.in is moving to naamaa.in — ${LIVE} of ${listings.length} live now. Search or sort to find yours.`}
      </p>

      <div className="relative mt-6">
        <label htmlFor="dir-search" className="sr-only">
          Search temples and services
        </label>
        <SearchIcon />
        <input
          id="dir-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or place…"
          autoComplete="off"
          className="w-full rounded-full border border-border bg-transparent py-3 pl-12 pr-11 text-base text-foreground outline-none placeholder:text-muted focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1.5 text-muted transition-colors hover:bg-border/60 hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
          >
            <CloseIcon />
          </button>
        )}
      </div>

      {/* Filters + sort */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by service type"
        >
          <FilterPill active={cat === null} onClick={() => setCat(null)}>
            All
            <Count>{listings.length}</Count>
          </FilterPill>
          {CATS.map((c) => (
            <FilterPill
              key={c.name}
              active={cat === c.name}
              onClick={() => setCat(c.name)}
            >
              {c.name}
              <Count>{c.count}</Count>
            </FilterPill>
          ))}
          <span
            aria-hidden
            className="mx-1 hidden h-6 w-px self-center bg-border sm:block"
          />
          <FilterPill
            active={onlyOnboarded}
            onClick={() => setOnlyOnboarded((v) => !v)}
          >
            Onboarded
            <Count>{LIVE}</Count>
          </FilterPill>
        </div>

        <label className="flex items-center gap-2 text-sm text-muted sm:shrink-0">
          <span>Sort</span>
          <div className="relative flex-1 sm:flex-none">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="w-full cursor-pointer appearance-none rounded-full border border-border bg-background py-2 pr-9 pl-4 text-sm font-medium text-foreground focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:outline-none sm:w-auto"
            >
              <option value="name-asc">Name (A–Z)</option>
              <option value="name-desc">Name (Z–A)</option>
            </select>
            <ChevronIcon />
          </div>
        </label>
      </div>

      <p className="mt-4 text-xs text-muted" aria-live="polite">
        {`${results.length} ${results.length === 1 ? "result" : "results"}`}
      </p>

      {results.length === 0 ? (
        <p className="mt-6 text-sm text-muted">
          Nothing matches your search.
        </p>
      ) : (
        <ul className="mt-6 divide-y divide-border">
          {results.map((l, i) => (
            <motion.li
              key={`${l.slug}-${i}`}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Row l={l} />
            </motion.li>
          ))}
        </ul>
      )}
    </section>
  );
};

const Row = ({ l }: { l: CatalogueEntry }) => {
  const body = (
    <span className="flex min-w-0 flex-col">
      <span className="font-medium text-foreground group-hover:text-accent">
        {l.name}
      </span>
      <span className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
        <span className="rounded-full border border-border px-2 py-0.5 text-xs font-medium text-muted">
          {l.category}
        </span>
        {l.location && <span>{l.location}</span>}
      </span>
    </span>
  );

  if (l.onboarded) {
    return (
      <a
        href={`${NAAMAA}/${l.slug}`}
        {...(OPEN_IN_NEW_TAB && { target: "_blank", rel: "noopener noreferrer" })}
        className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
      >
        {body}
        <span
          aria-hidden
          className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
        >
          &rarr;
        </span>
      </a>
    );
  }

  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      {body}
      <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted">
        Coming soon
      </span>
    </div>
  );
};

const FilterPill = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none ${
      active
        ? "border-accent bg-accent/10 text-accent"
        : "border-border text-muted hover:border-foreground/30 hover:text-foreground"
    }`}
  >
    {children}
  </button>
);

const Count = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs opacity-60">{children}</span>
);

const SearchIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const CloseIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);
