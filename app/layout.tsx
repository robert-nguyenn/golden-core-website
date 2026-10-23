import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "@/components/chrome";
import { StructuredData } from "@/components/structured-data";
import { homeDescription, homeTitle, organizationSchema, siteUrl, websiteSchema } from "@/lib/seo";

// Full font files keep Vietnamese combining marks in the same face as the base letters.
const primaryFont = localFont({
  src: [
    { path: "./fonts/BeVietnamPro-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/BeVietnamPro-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/BeVietnamPro-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/BeVietnamPro-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/BeVietnamPro-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${homeTitle} | Golden Core`, template: "%s | Golden Core" },
  description: homeDescription,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi" className={primaryFont.variable}><body><StructuredData data={[organizationSchema, websiteSchema]} /><Header />{children}<Footer /></body></html>;
}
