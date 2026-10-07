import type { Metadata } from "next";
import { Be_Vietnam_Pro, DM_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/chrome";
import { StructuredData } from "@/components/structured-data";
import { homeDescription, homeTitle, organizationSchema, siteUrl, websiteSchema } from "@/lib/seo";

const primaryFont = Be_Vietnam_Pro({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin", "vietnamese"], display: "swap", variable: "--font-be-vietnam" });
const monoFont = DM_Mono({ weight: ["400", "500"], subsets: ["latin"], display: "swap", variable: "--font-dm-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${homeTitle} | Golden Core`, template: "%s | Golden Core" },
  description: homeDescription,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi" className={`${primaryFont.variable} ${monoFont.variable}`}><body><StructuredData data={[organizationSchema, websiteSchema]} /><Header />{children}<Footer /></body></html>;
}
