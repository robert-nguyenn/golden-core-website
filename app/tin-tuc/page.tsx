import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { articles } from "@/lib/articles";

export default function News() {
  return <main>
    <section className="page-hero wrap"><p className="eyebrow"><span /> GÓC KIẾN THỨC</p><h1>Những điều nhỏ<br /><span className="headline-accent">giúp vận hành tốt hơn.</span></h1><p>Ghi chú và kiến thức thực tế từ Golden Core dành cho người làm kho, sản xuất và logistics.</p></section>
    <section className="wrap news-grid">{articles.map((article, index) => <article className="news-card" key={article.slug}><div className={`news-art art-${index}`}><span>0{index + 1}</span></div><p className="code">{article.tag} · {article.readingTime}</p><h2>{article.title}</h2><p className="news-excerpt">{article.excerpt}</p><Link href={`/tin-tuc/${article.slug}`}>Đọc bài viết <ArrowUpRight /></Link></article>)}</section>
  </main>;
}
