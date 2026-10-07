import Link from "next/link";
import { Suspense } from "react";
import { Check, Phone } from "@/components/icons";
import QuoteForm from "@/components/quote-form";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Báo giá pallet nhựa & sóng nhựa", description: "Gửi nhu cầu về pallet nhựa, sóng nhựa và thùng nhựa để Golden Core tư vấn, báo giá theo số lượng, kích thước và tải trọng. Hotline: 0941 495 982.", path: "/bao-gia" });

export default function QuotePage() {
  return <main><section className="quote-page wrap">
    <div className="quote-copy">
      <p className="eyebrow"><span /> TƯ VẤN & BÁO GIÁ</p>
      <h1>Báo giá pallet nhựa<br /><span className="headline-accent">& sóng nhựa.</span></h1>
      <p>Cho chúng tôi biết sản phẩm, số lượng và nhu cầu sử dụng. Golden Core sẽ liên hệ để tư vấn kích thước, tải trọng và phương án phù hợp.</p>
      <div className="quote-points"><p><Check /> Tư vấn theo tình huống vận hành</p><p><Check /> Không ràng buộc, không áp lực mua</p><p><Check /> Phản hồi trong giờ làm việc</p></div>
      <div className="quote-direct"><a className="text-link" href="tel:0941495982"><Phone size={18} /> Gọi 0941 495 982</a><a className="text-link" href="https://zalo.me/0941495982" target="_blank" rel="noreferrer">Nhắn Zalo</a></div>
      <Link className="text-link" href="/san-pham">Xem thông số sản phẩm trước khi gửi</Link>
    </div>
    <Suspense fallback={<div className="quote-form" aria-label="Đang tải biểu mẫu báo giá" />}><QuoteForm /></Suspense>
  </section></main>;
}
