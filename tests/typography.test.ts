import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const stylesheet = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
const fonts: { conversion: { subsetted: boolean }; files: { file: string; weight: string; sha256: string }[] } =
  JSON.parse(readFileSync(new URL("../app/fonts/source.json", import.meta.url), "utf8"));
const rules = Array.from(stylesheet.matchAll(/([^{}]+)\{([^{}]*)\}/g), ([, selectors, declarations]) => ({
  selectors: selectors.trim().split(",").map((selector) => selector.trim()),
  declarations,
}));

test("the shared layout self-hosts a Vietnamese-capable font for every text weight", () => {
  assert.match(layout, /next\/font\/local/);
  const configured = Array.from(layout.matchAll(/path:\s*"\.\/fonts\/([^"]+)",\s*weight:\s*"(\d+)"/g),
    ([, file, weight]) => ({ file, weight }));
  assert.deepEqual(configured, fonts.files.map(({ file, weight }) => ({ file, weight })));
  assert.deepEqual(configured.map(({ weight }) => weight), ["400", "500", "600", "700", "800"]);
  assert.match(layout, /lang="vi"/);
  assert.doesNotMatch(layout, /DM_Mono|--font-dm-mono|next\/font\/google/);
});

test("the licensed full-coverage font files match the Vietnamese glyph audit", () => {
  assert.equal(fonts.conversion.subsetted, false);
  for (const { file, sha256 } of fonts.files) {
    const bytes = readFileSync(new URL(`../app/fonts/${file}`, import.meta.url));
    assert.equal(bytes.subarray(0, 4).toString("ascii"), "wOF2", file);
    assert.equal(bytes.length, bytes.readUInt32BE(8), file);
    assert.equal(createHash("sha256").update(bytes).digest("hex"), sha256, file);
  }
  const license = readFileSync(new URL("../app/fonts/OFL.txt", import.meta.url), "utf8");
  assert.match(license, /SIL OPEN FONT LICENSE/);
});

test("small labels and product values never mix Latin-only mono glyphs with Vietnamese fallback", () => {
  const selectors = [
    ".eyebrow", ".trust-strip", ".code", ".card-foot", ".result-count",
    ".catalogue-visual span", ".card-dim", ".detail-visual>p", ".spec-grid b",
    ".measure", ".footer-label", ".article-meta",
  ];
  for (const selector of selectors) {
    const declarations = rules.filter((rule) => rule.selectors.includes(selector))
      .map((rule) => rule.declarations).join(";");
    assert.match(declarations, /font:\s*\d+px\/1\.[56] var\(--font-be-vietnam\),Arial,sans-serif/, selector);
  }
  assert.doesNotMatch(stylesheet, /--font-dm-mono|\bmonospace\b/);
});

test("circled labels have room for Vietnamese accents and stable changing counts", () => {
  const declarations = (selector: string) => rules.filter((rule) => rule.selectors.includes(selector))
    .map((rule) => rule.declarations).join(";");
  assert.match(declarations(".eyebrow"), /font:12px\/1\.5/);
  assert.match(declarations(".result-count"), /font:13px\/1\.6/);
  assert.match(declarations(".result-count"), /font-variant-numeric:tabular-nums/);
  assert.match(declarations(".footer-label"), /font:12px\/1\.5/);
});
