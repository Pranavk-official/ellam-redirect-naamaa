import type { Metadata, Viewport } from "next";
import { Geist, Merriweather } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

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
  "Ellam is now part of Parinaamaa. Every temple and service on ellam.in has migrated to naamaa.in — old links redirect automatically.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ellam.in"),
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
  alternates: { canonical: "https://naamaa.in" },
  openGraph: {
    type: "website",
    url: "https://ellam.in",
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
