import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/chrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.goldencorepallet.com"),
  title: { default: "Golden Core | Giải pháp kho vận", template: "%s | Golden Core" },
  description: "Golden Core cung cấp pallet nhựa, sóng nhựa và giải pháp lưu kho cho doanh nghiệp Việt Nam.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body><Header />{children}<Footer /></body></html>;
}
