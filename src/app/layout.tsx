import type { Metadata, Viewport } from "next";
import { Geist, Merriweather } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Sparkles } from "@/components/ui/sparkles";
import { newSiteUrl, siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const title = "ellam.in has moved to naamaa.in";
const description =
  "Ellam is now part of Parinaamaa. Every temple and service on ellam.in is moving to naamaa.in — find yours.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Ellam → Naamaa",
  },
  description,
  applicationName: "Ellam → Naamaa",
  authors: [{ name: "Parinaamaa" }],
  creator: "Parinaamaa",
  keywords: [
    "ellam.in",
    "naamaa.in",
    "Parinaamaa",
    "temple booking Kerala",
    "online pooja booking",
    "prarthana",
    "vazhipadu",
    "Kerala temples",
    "ellam moved to naamaa",
    "temple microsite",
  ],
  // Cross-domain canonical: consolidate ranking signals onto the new home.
  alternates: { canonical: newSiteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ellam → Naamaa",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html
    lang="en"
    className={`${geistSans.variable} ${merriweather.variable} h-full antialiased`}
  >
    <body className="min-h-full flex flex-col">
      {/* Sparkles behind the whole site: fixed to the viewport so it keeps
          covering the page as you scroll. Content sits above it via z-10. */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-50">
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_bottom,rgba(224,181,60,0.14),transparent_70%)]" />
        <Sparkles
          density={650}
          speed={1}
          size={1.1}
          direction="top"
          opacitySpeed={2}
          color="#e0b53c"
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </div>
    </body>
  </html>
);

export default RootLayout;
