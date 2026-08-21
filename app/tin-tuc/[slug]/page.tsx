import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "@/components/icons";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return <main>
    <div className="breadcrumbs wrap"><Link href="/">Trang chủ</Link><ChevronRight size={14} /><Link href="/tin-tuc">Góc kiến thức</Link><ChevronRight size={14} /><span>{article.title}</span></div>
    <article className="article-page wrap">
      <header><p className="eyebrow"><span /> {article.tag}</p><h1>{article.title}</h1><p className="article-lede">{article.excerpt}</p><p className="article-meta">Golden Core · {article.publishedAt} · {article.readingTime}</p></header>
      <div className="article-body">{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
      <aside className="article-cta"><p>Cần chọn sản phẩm theo nhu cầu vận hành?</p><Link href="/bao-gia">Trao đổi với Golden Core <ArrowUpRight /></Link></aside>
    </article>
  </main>;
}
