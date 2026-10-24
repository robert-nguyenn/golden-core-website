import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { homeTitle, homeDescription, pageMetadata, organizationSchema, absoluteUrl } from "../lib/seo";

test("homepage uses the requested search title without an added brand suffix", () => {
  assert.equal(homeTitle, "Tổng Kho Pallet Nhựa | Giá Sỉ Tốt - Giao Hàng Toàn Quốc");
  const metadata = pageMetadata({ title: homeTitle, description: homeDescription, path: "/" });
  assert.deepEqual(metadata.title, { absolute: homeTitle });
  assert.equal(metadata.openGraph?.title, homeTitle);
  assert.equal(metadata.twitter?.title, homeTitle);
  assert.deepEqual(pageMetadata({ title: "Sản phẩm", description: "", path: "/san-pham" }).title, { absolute: "Sản phẩm | Golden Core" });
});

test("organization logo and favicon use the supplied square PNG", () => {
  assert.equal(organizationSchema.logo, absoluteUrl("/images/nobackground.png"));
  const png = readFileSync("public/images/nobackground.png");
  assert.equal(png.readUInt32BE(16), 1254);
  assert.equal(png.readUInt32BE(20), 1254);
  assert.ok(readFileSync("app/layout.tsx", "utf8").includes('icon: { url: "/images/nobackground.png"'));
});

test("applications heading no longer overrides the mobile left alignment", () => {
  const css = readFileSync("app/globals.css", "utf8");
  assert.ok(!css.includes(".solutions .section-head{align-items:end}"));
});
