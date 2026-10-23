import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { homeDescription, homeTitle, pageMetadata } from "../lib/seo";

test("the homepage snippet is descriptive prose rather than contact boilerplate", () => {
  assert.ok(homeDescription.startsWith("Golden Core cung cấp pallet nhựa, sóng nhựa và thùng nhựa"));
  assert.ok(homeDescription.endsWith("."));
  assert.doesNotMatch(homeDescription, /0941|@|LIÊN HỆ|Công ty:|\uFFFD/);
  const metadata = pageMetadata({ title: homeTitle, description: homeDescription, path: "/" });
  assert.equal(metadata.description, homeDescription);
  assert.equal(metadata.openGraph?.description, homeDescription);
  assert.equal(metadata.twitter?.description, homeDescription);
});

test("navigation and footer boilerplate use supported snippet-exclusion containers", () => {
  const chrome = readFileSync(new URL("../components/chrome.tsx", import.meta.url), "utf8");
  assert.match(chrome, /<div className="header-inner wrap" data-nosnippet="">/);
  assert.match(chrome, /<div className="mobile-menu" data-nosnippet="">/);
  assert.match(chrome, /export function Footer\(\)\s*\{\s*return\s*\(\s*<div data-nosnippet="">/);
  assert.doesNotMatch(chrome, /<(?:header|footer|aside)[^>]*data-nosnippet/);
  assert.match(chrome, /href="tel:0941495982"/);
  assert.match(chrome, /href="mailto:goldencore\.biz@gmail\.com"/);
});
