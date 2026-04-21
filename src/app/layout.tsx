import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Manrope,
} from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});
const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});
const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quanta Services | Operational AI Advisory",
    template: "%s | Quanta Services",
  },
  description:
    "Operational AI advisory for infrastructure, field service, logistics, and shared-services teams that need measurable workflow improvement.",
  keywords: [
    "operational AI advisory",
    "AI consulting",
    "workflow automation consulting",
    "industrial AI consulting",
    "field service automation",
    "logistics AI",
    "workflow automation",
  ],
  openGraph: {
    title: "Quanta Services | Operational AI Advisory",
    description:
      "Operational AI for complex organizations that need cleaner workflows, faster decisions, and measurable business results.",
    images: [
      {
        url: "/images/visuals/gold-wave-hero.png",
        width: 1365,
        height: 768,
        alt: "Quanta Services operational AI visualization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quanta Services | Operational AI Advisory",
    description:
      "Operational AI for complex teams that need faster decisions and measurable business results.",
    images: ["/images/visuals/gold-wave-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      >
        <div className="site-shell">
          <SiteHeader />
          <main className="main-shell">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
