import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { articles } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Góc kiến thức – Pallet nhựa & vận hành kho", description: "Hướng dẫn chọn pallet nhựa, phân biệt tải trọng và kiến thức thực tế về kho vận, sản xuất từ Golden Core.", path: "/tin-tuc" });

export const revalidate = 60;

export default async function News() {
  return <main>
    <section className="page-hero wrap"><p className="eyebrow"><span /> GÓC KIẾN THỨC</p><h1>Những điều nhỏ<br /><span className="headline-accent">giúp vận hành tốt hơn.</span></h1><p>Ghi chú và kiến thức thực tế từ Golden Core dành cho người làm kho, sản xuất và logistics.</p></section>
    <section className="wrap news-grid">{articles.map((article, index) => <article className="news-card" key={article.slug}><div className={`news-art art-${index % 4}`}>{article.image ? <img src={article.image} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative", zIndex: 1 }} /> : <span>{String(index + 1).padStart(2, "0")}</span>}</div><p className="code">{article.tag} · {article.readingTime}</p><h2>{article.title}</h2><p className="news-excerpt">{article.excerpt}</p><Link href={`/tin-tuc/${article.slug}`}>Đọc bài viết <ArrowUpRight /></Link></article>)}</section>
  </main>;
}
