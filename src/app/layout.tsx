import type { Metadata, Viewport } from "next";
import { Geist, Merriweather } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
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
      <SmoothScroll>{children}</SmoothScroll>
    </body>
  </html>
);

export default RootLayout;
