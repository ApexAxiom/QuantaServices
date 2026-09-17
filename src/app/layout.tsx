import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
const bodyFont = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const monoFont = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono", display: "swap" });
export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
    title: { default: "Quanta AI | Intelligence, beyond possibility.", template: "%s | Quanta AI" },
    description: "Ambitious thinking. Practical AI. Quanta connects information, workflows, and people to create a new dimension of intelligence.",
    openGraph: { title: "Quanta AI | Intelligence, beyond possibility.", description: "Quantum-inspired. Human-driven. Discover a new dimension of intelligence.", images: [{ url: "/images/visuals/quantum-core.webp", width: 1672, height: 941, alt: "A luminous quantum core in a futuristic laboratory" }] },
    twitter: { card: "summary_large_image", images: ["/images/visuals/quantum-core.webp"] },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#06090c" };
export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <html lang="en"><body className={`${bodyFont.variable} ${monoFont.variable}`}><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}
