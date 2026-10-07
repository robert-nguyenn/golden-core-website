import type { Metadata } from "next";
import type { Article } from "./articles";
import type { Product } from "./products";

export const siteUrl = "https://www.goldencorepallet.com";
export const siteName = "Golden Core";
export const homeTitle = "Pallet nhựa & sóng nhựa công nghiệp";
export const homeDescription = "Golden Core cung cấp pallet nhựa, sóng nhựa và thùng nhựa cho kho vận, sản xuất. Xem hình ảnh, kích thước, tải trọng và nhận báo giá theo nhu cầu: 0941 495 982.";

export function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).href;
}

export function pageMetadata({ title, description, path, images = [], type = "website" }: {
  title: string;
  description: string;
  path: string;
  images?: string[];
  type?: "website" | "article";
}): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const imageUrls = images.map(absoluteUrl);
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName,
      locale: "vi_VN",
      type,
      images: imageUrls.map((url) => ({ url, alt: title })),
    },
    twitter: { card: imageUrls.length ? "summary_large_image" : "summary", title: fullTitle, description, images: imageUrls },
  };
}

export function productImages(products: Product[]) {
  return products.flatMap((product) => product.image ? [absoluteUrl(product.image)] : []);
}

export function productMetadata(product: Product) {
  return pageMetadata({
    title: `${product.name} – Thông số & báo giá`,
    description: `${product.description} Kích thước ${product.dimension}, vật liệu ${product.material}. Liên hệ Golden Core để nhận báo giá theo số lượng và nhu cầu sử dụng.`,
    path: `/san-pham/${product.slug}`,
    images: productImages([product]),
  });
}

export function articleMetadata(article: Article) {
  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/tin-tuc/${article.slug}`,
    images: article.image ? [article.image] : [],
    type: "article",
  });
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  legalName: "Công ty TNHH Golden Core",
  url: siteUrl,
  telephone: "+84941495982",
  email: "goldencore.biz@gmail.com",
  taxID: "0111592859",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Số 59, Đường Tỉnh 418-UBND, Thôn Tây Ninh, Xã Đoài Phương",
    addressLocality: "Hà Nội",
    addressCountry: "VN",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  inLanguage: "vi-VN",
  publisher: { "@id": organizationSchema["@id"] },
};

export function webPageSchema(path: string, name: string, images: string[] = []) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    inLanguage: "vi-VN",
    isPartOf: { "@id": websiteSchema["@id"] },
    ...(images.length ? { primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(images[0]) } } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}

export function productSchema(product: Product) {
  const url = absoluteUrl(`/san-pham/${product.slug}`);
  const specifications = [
    ["Kích thước", product.dimension], ["Vật liệu", product.material],
    ["Trọng lượng", product.weight], ["Sức chứa", product.capacity],
    ["Tải trọng tĩnh", product.static], ["Tải trọng động", product.dynamic],
    ["Tải trọng trên kệ", product.racking], ["Chiều cao xếp lồng", product.nestingHeight],
  ];
  // This catalogue sells by quotation. Do not invent prices, stock or reviews
  // to satisfy Google's separate requirements for product rich results.
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    url,
    name: product.name,
    description: product.description,
    image: productImages([product]),
    sku: product.code,
    category: product.category,
    material: product.material,
    brand: { "@type": "Brand", name: siteName },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    additionalProperty: specifications.flatMap(([name, value]) => value ? [{ "@type": "PropertyValue", name, value }] : []),
  };
}

export function catalogueSchema(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Danh mục pallet nhựa, sóng nhựa và thùng nhựa Golden Core",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/san-pham/${product.slug}`),
      name: product.name,
      ...(product.image ? { image: absoluteUrl(product.image) } : {}),
    })),
  };
}

export function articleSchema(article: Article) {
  const url = absoluteUrl(`/tin-tuc/${article.slug}`);
  const date = /^\d{4}-\d{2}-\d{2}$/.test(article.publishedAt) ? article.publishedAt : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    url,
    inLanguage: "vi-VN",
    mainEntityOfPage: { "@id": `${url}#webpage` },
    author: { "@type": "Organization", name: siteName, url: siteUrl },
    publisher: { "@id": organizationSchema["@id"] },
    ...(article.image ? { image: [absoluteUrl(article.image)] } : {}),
    ...(date ? { datePublished: date } : {}),
  };
}

export function serializeJsonLd(data: unknown) {
  // Published CMS text is untrusted inside a script element, even as JSON.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
