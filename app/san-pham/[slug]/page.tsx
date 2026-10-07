import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Check } from "@/components/icons";
import { CatalogueImage } from "@/components/catalogue-image";
import { products } from "@/lib/products";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, productImages, productMetadata, productSchema, webPageSchema } from "@/lib/seo";

export const revalidate = 60;

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  return productMetadata(product);
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find((product) => product.slug === slug);
  if (!p) notFound();

  return <main>
    <StructuredData data={[
      webPageSchema(`/san-pham/${p.slug}`, p.name, productImages([p])),
      productSchema(p),
      breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Sản phẩm", path: "/san-pham" }, { name: p.name, path: `/san-pham/${p.slug}` }]),
    ]} />
    <div className="breadcrumbs wrap">
      <Link href="/">Trang chủ</Link><ChevronRight size={14} />
      <Link href="/san-pham">Sản phẩm</Link><ChevronRight size={14} />
      <span>{p.name}</span>
    </div>
    <section className="detail wrap">
      <div className="detail-visual"><div className="detail-rings" /><CatalogueImage product={p} priority /><p>HÌNH ẢNH SẢN PHẨM<br /><span>{p.name}</span></p></div>
      <div className="detail-copy">
        <p className="eyebrow"><span /> {p.category.toUpperCase()}</p><p className="code">{p.code}</p><h1>{p.name}</h1><p className="detail-lede">{p.description}</p>
        <div className="spec-grid">
          <div><span>Kích thước</span><b>{p.dimension}</b></div><div><span>Vật liệu</span><b>{p.material}</b></div>
          {p.weight && <div><span>Trọng lượng</span><b>{p.weight}</b></div>}{p.capacity && <div><span>Sức chứa</span><b>{p.capacity}</b></div>}
          <div><span>Tải trọng tĩnh</span><b>{p.static}</b></div><div><span>Tải trọng động</span><b>{p.dynamic}</b></div>
          {p.racking && <div><span>Tải trọng trên kệ</span><b>{p.racking}</b></div>}{p.nestingHeight && <div><span>Chiều cao xếp lồng</span><b>{p.nestingHeight}</b></div>}
        </div>
        <p className="price-note">Giá được báo theo số lượng và nhu cầu sử dụng. Liên hệ để xác nhận phương án phù hợp.</p>
        <Link className="button gold" href={`/bao-gia?san-pham=${encodeURIComponent(p.code)}`}>Yêu cầu báo giá <ArrowUpRight /></Link>
      </div>
    </section>
    <section className="detail-notes"><div className="wrap"><p className="eyebrow light"><span /> LƯU Ý KHI CHỌN</p><div className="notes-grid"><h2>Thông số cần đặt<br />trong bối cảnh sử dụng.</h2><div><p><Check /> Tải trọng thực tế có thể thay đổi theo cách xếp hàng, nhiệt độ và thiết bị nâng.</p><p><Check /> Hãy trao đổi với Golden Core nếu cần dùng trên kệ hoặc trong kho lạnh.</p><p><Check /> Xác nhận thông số, màu sắc và điều kiện sử dụng với Golden Core trước khi đặt hàng.</p></div></div></div></section>
  </main>;
}
