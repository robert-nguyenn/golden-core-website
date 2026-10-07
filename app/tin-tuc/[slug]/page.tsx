import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "@/components/icons";
import { articles } from "@/lib/articles";
import { StructuredData } from "@/components/structured-data";
import { articleMetadata, articleSchema, breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const revalidate = 60;

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return articleMetadata(article);
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  return <main>
    <StructuredData data={[
      webPageSchema(`/tin-tuc/${article.slug}`, article.title, article.image ? [article.image] : []),
      articleSchema(article),
      breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Góc kiến thức", path: "/tin-tuc" }, { name: article.title, path: `/tin-tuc/${article.slug}` }]),
    ]} />
    <div className="breadcrumbs wrap"><Link href="/">Trang chủ</Link><ChevronRight size={14} /><Link href="/tin-tuc">Góc kiến thức</Link><ChevronRight size={14} /><span>{article.title}</span></div>
    <article className="article-page wrap">
      <header><p className="eyebrow"><span /> {article.tag}</p><h1>{article.title}</h1><p className="article-lede">{article.excerpt}</p><p className="article-meta">Golden Core · {article.publishedAt} · {article.readingTime}</p></header>
      {article.image && <img src={article.image} alt={article.title} style={{ width: "100%", height: "auto", marginBottom: 32 }} />}
      <div className="article-body">{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
      <aside className="article-cta"><p>Cần chọn sản phẩm theo nhu cầu vận hành?</p><Link href="/bao-gia">Trao đổi với Golden Core <ArrowUpRight /></Link></aside>
    </article>
  </main>;
}
