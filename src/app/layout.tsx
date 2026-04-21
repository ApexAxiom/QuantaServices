import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quanta Services | Chicago AI Consulting",
    template: "%s | Quanta Services",
  },
  description:
    "Chicago-based AI consulting for industrial operations, field service, logistics, and back-office teams that need production systems, not vague pilots.",
  keywords: [
    "AI consulting",
    "Chicago AI consulting",
    "industrial AI",
    "workflow automation",
    "field service AI",
    "logistics AI",
  ],
  openGraph: {
    title: "Quanta Services | Chicago AI Consulting",
    description:
      "Operational AI for industrial teams that need faster decisions, cleaner workflows, and measurable margin impact.",
    images: [
      {
        url: "/images/visuals/pipeline-growth.png",
        width: 1365,
        height: 768,
        alt: "Quanta Services operational AI visualization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quanta Services | Chicago AI Consulting",
    description:
      "Operational AI for industrial teams that need faster decisions and measurable business results.",
    images: ["/images/visuals/pipeline-growth.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main className="main-shell">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
