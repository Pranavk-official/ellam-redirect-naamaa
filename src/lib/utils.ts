// Minimal class combiner (no clsx/tailwind-merge dep needed for our usage).
export function cn(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(" ");
}
