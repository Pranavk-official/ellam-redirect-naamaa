"use client"; // Error boundaries must be Client Components.

// Replaces the root layout when it (or a provider like SmoothScroll) throws, so
// it must be fully self-contained: its own <html>/<body> and inline styles
// (Tailwind/theme tokens may not be available here).
const GlobalError = ({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => (
  <html lang="en">
    <body
      style={{
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        padding: "0 24px",
        textAlign: "center",
        background: "#0a0a0a",
        color: "#ededed",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <title>Something went wrong · Ellam → Naamaa</title>
      <h1 style={{ margin: 0, fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 800 }}>
        Something went wrong
      </h1>
      <p style={{ maxWidth: 420, lineHeight: 1.6, color: "#a1a1aa" }}>
        An unexpected error occurred. Try again, or head to naamaa.in.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            cursor: "pointer",
            height: 52,
            padding: "0 28px",
            borderRadius: 999,
            border: "1px solid #27272a",
            background: "transparent",
            color: "#ededed",
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          Try again
        </button>
        <a
          href="https://naamaa.in"
          style={{
            display: "inline-flex",
            alignItems: "center",
            height: 52,
            padding: "0 28px",
            borderRadius: 999,
            background: "#ededed",
            color: "#0a0a0a",
            fontSize: 16,
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Go to naamaa.in →
        </a>
      </div>
    </body>
  </html>
);

export default GlobalError;
