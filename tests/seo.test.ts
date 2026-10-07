import assert from "node:assert/strict";
import { test } from "node:test";
import { products } from "../lib/products";
import { articles } from "../lib/articles";
import { absoluteUrl, articleMetadata, articleSchema, breadcrumbSchema, catalogueSchema, productImages, productMetadata, productSchema, serializeJsonLd, webPageSchema } from "../lib/seo";
import sitemap from "../app/sitemap";

test("each product has its own canonical title and crawlable image metadata", () => {
  const titles = products.map((product) => {
    const metadata = productMetadata(product);
    assert.equal(metadata.alternates?.canonical, absoluteUrl(`/san-pham/${product.slug}`));
    assert.ok(JSON.stringify(metadata.title).includes(product.name));
    assert.ok(metadata.description?.includes(product.dimension));
    const imageUrls = productImages([product]);
    assert.ok(imageUrls.every((image) => image.startsWith("https://")));
    assert.deepEqual(productSchema(product).image, imageUrls);
    assert.equal(webPageSchema(`/san-pham/${product.slug}`, product.name, imageUrls).primaryImageOfPage?.url, imageUrls[0]);
    return JSON.stringify(metadata.title);
  });
  assert.equal(new Set(titles).size, products.length);
});

test("quote-only products never imply invented offers, stock or reviews", () => {
  for (const product of products) {
    const schema = productSchema(product);
    assert.ok(!("offers" in schema));
    assert.ok(!("aggregateRating" in schema));
    assert.ok(!("review" in schema));
    assert.equal(schema.sku, product.code);
  }
});

test("CMS images and missing photos are respected instead of inserting a different product", () => {
  const image = "https://cdn.sanity.io/images/vbkoelrz/production/example-800x600.png";
  const product = { ...products[0], image };
  assert.deepEqual(productImages([product]), [image]);
  assert.deepEqual(productImages([{ ...product, image: undefined }]), []);
  assert.equal(webPageSchema("/test", "Test").primaryImageOfPage, undefined);
});

test("structured data safely carries a CMS title containing script markup", () => {
  const value = { name: '</script><script>alert("test")</script>' };
  const serialized = serializeJsonLd(value);
  assert.ok(!serialized.includes("<"));
  assert.deepEqual(JSON.parse(serialized), value);
});

test("article titles and breadcrumbs point to their exact pages", () => {
  for (const article of articles) {
    assert.equal(articleMetadata(article).alternates?.canonical, absoluteUrl(`/tin-tuc/${article.slug}`));
    assert.equal(articleSchema(article).headline, article.title);
  }
  const breadcrumbs = breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Sản phẩm", path: "/san-pham" }]);
  assert.deepEqual(breadcrumbs.itemListElement.map((item) => item.position), [1, 2]);
  assert.equal(catalogueSchema(products).itemListElement.length, products.length);
});

test("image sitemap preserves all published product and article URLs", async (t) => {
  const previous = process.env.SANITY_CONTENT_ENABLED;
  delete process.env.SANITY_CONTENT_ENABLED;
  t.after(() => { if (previous === undefined) delete process.env.SANITY_CONTENT_ENABLED; else process.env.SANITY_CONTENT_ENABLED = previous; });
  const entries = await sitemap();
  assert.equal(entries.length, 7 + products.length + articles.length);
  for (const product of products) {
    const entry = entries.find((item) => item.url === absoluteUrl(`/san-pham/${product.slug}`));
    assert.ok(entry);
    assert.deepEqual(entry.images, productImages([product]));
    assert.equal(entry.lastModified, undefined);
  }
});
