"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";
import { ArrowUpRight, Check } from "@/components/icons";

type FormState = "idle" | "sending" | "success" | "error";

function QuoteForm() {
  const params = useSearchParams();
  const [state, setState] = useState<FormState>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (fields.get("_honey")) return;

    setState("sending");
    const payload = {
      name: fields.get("name"),
      company: fields.get("company") || "Không cung cấp",
      phone: fields.get("phone"),
      email: fields.get("email") || "Không cung cấp",
      product: fields.get("product") || "Chưa xác định",
      message: fields.get("message"),
      _subject: "Yêu cầu báo giá mới — Golden Core",
      _template: "table",
      _honey: "",
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/goldencore.biz@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "success") return <div className="success"><Check size={28} /><h2>Cảm ơn bạn!</h2><p>Golden Core đã nhận thông tin. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.</p></div>;

  return <form onSubmit={submit} className="quote-form">
    <label className="honeypot" aria-hidden="true">Website<input name="_honey" tabIndex={-1} autoComplete="off" /></label>
    <label>Họ và tên<input name="name" required placeholder="Nguyễn Văn A" /></label>
    <label>Tên công ty<input name="company" placeholder="Tên doanh nghiệp của bạn" /></label>
    <div className="two-col"><label>Số điện thoại<input name="phone" required type="tel" placeholder="0941 495 982" /></label><label>Email<input name="email" type="email" placeholder="email@congty.vn" /></label></div>
    <label>Sản phẩm quan tâm<input name="product" defaultValue={params.get("san-pham") ?? ""} placeholder="Ví dụ: Pallet GC-P12" /></label>
    <label>Nhu cầu của bạn<textarea name="message" required placeholder="Số lượng, tải trọng, môi trường sử dụng hoặc điều bạn đang cần tư vấn..." rows={4} /></label>
    <button className="button gold" type="submit" disabled={state === "sending"}>{state === "sending" ? "Đang gửi..." : <>Gửi yêu cầu <ArrowUpRight /></>}</button>
    {state === "error" && <p className="form-error">Chưa thể gửi yêu cầu. Vui lòng gọi 0941 495 982 hoặc thử lại sau.</p>}
    <p className="form-note">Thông tin của bạn chỉ được dùng để liên hệ tư vấn.</p>
  </form>;
}

export default function QuotePage() {
  return <main><section className="quote-page wrap"><div className="quote-copy"><p className="eyebrow"><span /> TƯ VẤN & BÁO GIÁ</p><h1>Hãy bắt đầu bằng<br /><span className="headline-accent">nhu cầu của bạn.</span></h1><p>Gửi những thông tin bạn đang có. Chúng tôi sẽ liên hệ lại để làm rõ ứng dụng, số lượng và phương án phù hợp.</p><div className="quote-points"><p><Check /> Tư vấn theo tình huống vận hành</p><p><Check /> Không ràng buộc, không áp lực mua</p><p><Check /> Phản hồi trong giờ làm việc</p></div></div><Suspense fallback={<div className="quote-form" />}><QuoteForm /></Suspense></section></main>;
}
