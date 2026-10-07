"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "@/components/icons";
import { CatalogueImage } from "@/components/catalogue-image";
import type { Product } from "@/lib/products";

export default function ProductCatalogue({ products }: { products: Product[] }) {
  const categories = ["Tất cả", ...new Set(products.map((product) => product.category))];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const filtered = useMemo(() => products.filter((product) =>
    (category === "Tất cả" || product.category === category) &&
    `${product.name} ${product.code} ${product.dimension}`.toLocaleLowerCase("vi").includes(query.toLocaleLowerCase("vi"))
  ), [products, query, category]);

  return <main>
    <section className="page-hero wrap">
      <p className="eyebrow"><span /> DANH MỤC SẢN PHẨM</p>
      <h1>Pallet nhựa, sóng nhựa<br /><span className="headline-accent">& thùng nhựa.</span></h1>
      <p>So sánh hình ảnh, kích thước và tải trọng. Chọn sản phẩm phù hợp rồi gửi yêu cầu để nhận tư vấn và báo giá từ Golden Core.</p>
    </section>
    <section className="catalogue wrap" aria-label="Tìm sản phẩm">
      <div className="catalogue-tools">
        <div className="search-box"><Search size={19} /><input aria-label="Tìm sản phẩm theo mã, tên hoặc kích thước" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm theo mã, tên hoặc kích thước" /></div>
        <div className="filter-row" aria-label="Loại sản phẩm">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={item === category ? "selected" : ""} aria-pressed={item === category}>{item}</button>)}</div>
      </div>
      <p className="result-count" role="status">{filtered.length} sản phẩm phù hợp</p>
      <div className="catalogue-grid">{filtered.map((product) => <Link href={`/san-pham/${product.slug}`} className="catalogue-card" key={product.code}>
        <div className="catalogue-visual"><CatalogueImage product={product} /><span>{product.category}</span></div>
        <p className="code">{product.code}</p><h2>{product.name}</h2><p className="card-dim">{product.dimension}</p>
        <div><span>Xem thông số & báo giá</span><ArrowUpRight /></div>
      </Link>)}</div>
      {!filtered.length && <div className="empty-state">Không tìm thấy sản phẩm phù hợp. <Link href="/bao-gia">Gửi nhu cầu cho chúng tôi</Link>.</div>}
    </section>
  </main>;
}
