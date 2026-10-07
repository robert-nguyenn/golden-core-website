import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight, Package, ShieldCheck, Sparkles } from "@/components/icons";
import { CatalogueImage } from "@/components/catalogue-image";
import { products } from "@/lib/products";
import { StructuredData } from "@/components/structured-data";
import { homeDescription, homeTitle, pageMetadata, productImages, webPageSchema } from "@/lib/seo";

const solutions = [
  ["01", "Kho vận & phân phối", "Pallet đồng nhất, bền bỉ và dễ đưa vào quy trình vận hành hiện hữu."],
  ["02", "Sản xuất công nghiệp", "Tối ưu dòng chảy vật tư bằng thùng, khay và pallet theo nhu cầu thực tế."],
  ["03", "Thực phẩm & đồ uống", "Giải pháp dễ vệ sinh, bền ẩm và phù hợp môi trường vận hành cường độ cao."],
];

export const revalidate = 60;

export async function generateMetadata() {
  return pageMetadata({ title: homeTitle, description: homeDescription, path: "/", images: productImages(products.filter((product) => product.kind === "pallet").slice(0, 3)) });
}

export default async function Home() {
  const featuredProducts = products.slice(0, 3);
  const heroProduct = products.find((product) => product.kind === "pallet" && product.image);
  return <main>
    <StructuredData data={webPageSchema("/", homeTitle, heroProduct ? productImages([heroProduct]) : [])} />
    <section className="hero section-grid">
      <div className="wrap hero-grid">
        <div className="hero-copy enter">
          <p className="eyebrow"><span /> GIẢI PHÁP NHỰA CÔNG NGHIỆP</p>
          <h1>Pallet nhựa & sóng nhựa<br /><span className="headline-accent">cho doanh nghiệp.</span></h1>
          <p className="hero-lede">Chọn pallet nhựa, sóng nhựa và thùng nhựa theo kích thước, tải trọng và môi trường sử dụng. Xem ảnh sản phẩm, so sánh thông số và nhận báo giá từ Golden Core.</p>
          <div className="hero-actions"><Link className="button gold" href="/bao-gia">Nhận tư vấn & báo giá <ArrowUpRight /></Link><Link className="text-link" href="/san-pham">Xem sản phẩm <ChevronRight /></Link></div>
        </div>
        {heroProduct && <div className="hero-art enter delay-1">
          <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
          <Link className="hero-product" href={`/san-pham/${heroProduct.slug}`}><CatalogueImage product={heroProduct} priority /></Link>
          <div className="measure measure-x">{heroProduct.code}</div><div className="measure measure-y">TẢI TĨNH {heroProduct.static}</div>
          <div className="hero-tag"><Sparkles /> Sẵn sàng cho vận hành</div>
        </div>}
      </div>
      <div className="wrap trust-strip"><p>ĐƯỢC THIẾT KẾ CHO</p><span>Kho bãi</span><span>Sản xuất</span><span>Xuất khẩu</span><span>Bán lẻ</span><span>F&B</span></div>
    </section>

    <section className="intro wrap section-pad">
      <div><p className="eyebrow"><span /> VÌ SAO GOLDEN CORE</p><h2>Tối giản vật liệu.<br />Tối đa hiệu quả.</h2></div>
      <div className="intro-copy"><p>Chúng tôi không tin rằng một sản phẩm tốt chỉ cần bền. Nó cần làm cho công việc hàng ngày trở nên nhẹ hơn, gọn hơn và đáng tin hơn.</p><Link className="text-link" href="/gioi-thieu">Câu chuyện của Golden Core <ArrowUpRight /></Link></div>
    </section>

    <section className="products-preview section-grid"><div className="wrap section-pad">
      <div className="section-head"><div><p className="eyebrow"><span /> DANH MỤC NỔI BẬT</p><h2>Pallet nhựa và sản phẩm<br />cho kho vận.</h2></div><Link className="button outline" href="/san-pham">Xem tất cả <ArrowUpRight /></Link></div>
      <div className="product-grid">{featuredProducts.map((product, i) => <Link className={`product-card card-${i}`} href={`/san-pham/${product.slug}`} key={product.code}><div className="card-visual"><CatalogueImage product={product} /></div><p className="code">{product.code}</p><h3>{product.name}</h3><div className="card-foot"><span>{product.dimension}</span><ArrowUpRight /></div></Link>)}</div>
    </div></section>

    <section className="solutions wrap section-pad"><div className="section-head"><div><p className="eyebrow"><span /> ỨNG DỤNG</p><h2>Đi cùng nhịp<br />vận hành của bạn.</h2></div><p className="muted">Từ một góc kho nhỏ đến chuỗi vận hành rộng lớn, Golden Core giúp xác định giải pháp phù hợp với điều kiện thực tế.</p></div><div className="solution-list">{solutions.map(([num, title, text]) => <article key={num}><p className="solution-number">{num}</p><h3>{title}</h3><p>{text}</p><ArrowUpRight /></article>)}</div></section>

    <section className="quote-band"><div className="wrap quote-grid"><div><p className="eyebrow light"><span /> BẮT ĐẦU TỪ NHU CẦU THẬT</p><h2>Chưa chắc nên chọn loại nào?</h2><p>Gửi chúng tôi kích thước, tải trọng và cách bạn đang vận hành. Đội ngũ Golden Core sẽ cùng bạn tìm phương án phù hợp.</p></div><Link className="button gold" href="/bao-gia">Yêu cầu báo giá <ArrowUpRight /></Link></div></section>

    <section className="assurance wrap"><div><Package /><h3>Sản phẩm rõ thông số</h3><p>Kích thước, vật liệu và tải trọng được trình bày trực quan.</p></div><div><ShieldCheck /><h3>Tư vấn theo ứng dụng</h3><p>Không chỉ bán sản phẩm, chúng tôi cùng nhìn vào quy trình.</p></div><div><Check /><h3>Đồng hành dài lâu</h3><p>Ưu tiên một giải pháp dùng tốt hôm nay và bền vững về sau.</p></div></section>
  </main>;
}
