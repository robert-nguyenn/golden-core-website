import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { products } from "@/lib/products";

const siteUrl = "https://www.goldencorepallet.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date();
  const pages = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/san-pham", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/giai-phap", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/gioi-thieu", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/tin-tuc", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: "/bao-gia", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/chinh-sach-bao-mat", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return [
    ...pages.map(({ path, changeFrequency, priority }) => ({
      url: `${siteUrl}${path}`,
      lastModified: updatedAt,
      changeFrequency,
      priority,
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/san-pham/${product.slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/tin-tuc/${article.slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
