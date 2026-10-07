import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { articles } from "@/lib/articles";
import { absoluteUrl, productImages } from "@/lib/seo";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
      url: absoluteUrl(path || "/"),
      ...(["", "/san-pham"].includes(path) ? { images: productImages(products.slice(0, path === "" ? 3 : undefined)) } : {}),
      changeFrequency,
      priority,
    })),
    ...products.map((product) => ({
      url: absoluteUrl(`/san-pham/${product.slug}`),
      images: productImages([product]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/tin-tuc/${article.slug}`),
      ...(article.image ? { images: [absoluteUrl(article.image)] } : {}),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
