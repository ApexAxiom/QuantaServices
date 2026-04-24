import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
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
    default: "Quanta Services | Operational AI Consulting",
    template: "%s | Quanta Services",
  },
  description:
    "Operational AI consulting for infrastructure, field service, logistics, and shared-services teams seeking measurable workflow improvement.",
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
    title: "Quanta Services | Operational AI Consulting",
    description:
      "Operational AI consulting for organizations that need cleaner workflows, faster decisions, and measurable business results.",
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
    title: "Quanta Services | Operational AI Consulting",
    description:
      "Operational AI consulting for complex teams that need faster decisions and measurable business results.",
    images: ["/images/visuals/gold-wave-hero.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${monoFont.variable}`}
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
