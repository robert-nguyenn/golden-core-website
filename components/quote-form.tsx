"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowUpRight, Check } from "@/components/icons";

type FormState = "idle" | "sending" | "success" | "error";

export default function QuoteForm() {
  const params = useSearchParams();
  const [state, setState] = useState<FormState>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
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
        signal: AbortSignal.timeout(30000),
      });
      if (!response.ok) throw new Error("Form submission failed");
      const result: { success?: unknown } = await response.json();
      if (result.success !== true && result.success !== "true") throw new Error("Form submission was not accepted");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "success") return <div className="success" role="status"><Check size={28} /><h2>Cảm ơn bạn!</h2><p>Yêu cầu của bạn đã được gửi. Golden Core sẽ liên hệ để tư vấn trong giờ làm việc.</p><Link className="text-link" href="/san-pham">Xem thêm sản phẩm <ArrowUpRight /></Link></div>;

  return <form onSubmit={submit} className="quote-form">
    <label className="honeypot" aria-hidden="true">Website<input name="_honey" tabIndex={-1} autoComplete="off" /></label>
    <label>Họ và tên<input name="name" required autoComplete="name" maxLength={120} placeholder="Nguyễn Văn A" /></label>
    <label>Tên công ty<input name="company" autoComplete="organization" maxLength={200} placeholder="Tên doanh nghiệp của bạn" /></label>
    <div className="two-col"><label>Số điện thoại<input name="phone" required type="tel" autoComplete="tel" maxLength={32} placeholder="Số điện thoại liên hệ" /></label><label>Email<input name="email" type="email" autoComplete="email" maxLength={254} placeholder="email@congty.vn" /></label></div>
    <label>Sản phẩm quan tâm<input name="product" defaultValue={params.get("san-pham") ?? ""} maxLength={200} placeholder="Ví dụ: Pallet GC-P08" /></label>
    <label>Nhu cầu của bạn<textarea name="message" required maxLength={5000} placeholder="Số lượng, tải trọng, môi trường sử dụng hoặc điều bạn đang cần tư vấn..." rows={4} /></label>
    <button className="button gold" type="submit" disabled={state === "sending"}>{state === "sending" ? "Đang gửi..." : <>Gửi yêu cầu <ArrowUpRight /></>}</button>
    {state === "error" && <p className="form-error" role="alert">Chưa thể gửi yêu cầu. Vui lòng <a href="tel:0941495982">gọi 0941 495 982</a>, <a href="https://zalo.me/0941495982" target="_blank" rel="noreferrer">nhắn Zalo</a> hoặc thử lại sau.</p>}
    <p className="form-note">Thông tin của bạn chỉ được dùng để liên hệ tư vấn. <Link href="/chinh-sach-bao-mat">Xem chính sách bảo mật</Link>.</p>
  </form>;
}
