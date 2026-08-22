"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "./icons";

const nav = [{ href: "/san-pham", label: "Sản phẩm" }, { href: "/giai-phap", label: "Giải pháp" }, { href: "/gioi-thieu", label: "Về Golden Core" }, { href: "/tin-tuc", label: "Góc kiến thức" }];

export function Brand() {
  return <Link href="/" className="brand" aria-label="Golden Core - Trang chủ"><span className="brand-mark"><i /><i /><i /></span><span>GOLDEN <b>CORE</b></span></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return <><header className="site-header"><div className="header-inner wrap"><Brand /><nav className="desktop-nav">{nav.map((item) => <Link className={path.startsWith(item.href) ? "active" : ""} href={item.href} key={item.href}>{item.label}</Link>)}</nav><div className="header-cta"><Link className="header-phone" href="tel:0941495982"><Phone size={16} /><span>0941 495 982</span></Link><Link className="mini-quote" href="/bao-gia">Báo giá <ArrowUpRight size={15} /></Link><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Mở menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button></div></div></header>{open && <div className="mobile-menu"><div className="wrap">{nav.map((item) => <Link onClick={() => setOpen(false)} href={item.href} key={item.href}>{item.label}<ArrowUpRight /></Link>)}<Link onClick={() => setOpen(false)} className="button gold" href="/bao-gia">Yêu cầu báo giá <ArrowUpRight /></Link></div></div>}</>;
}

export function Footer() {
  return <><footer><div className="wrap footer-top"><div><Brand /><p className="footer-blurb">Nền tảng vững cho những hành trình vận hành hiệu quả hơn.</p></div><div><p className="footer-label">KHÁM PHÁ</p><Link href="/san-pham">Sản phẩm</Link><Link href="/giai-phap">Giải pháp</Link><Link href="/tin-tuc">Góc kiến thức</Link><Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link></div><div><p className="footer-label">LIÊN HỆ</p><a href="tel:0941495982">0941 495 982</a><a href="mailto:goldencore.biz@gmail.com">goldencore.biz@gmail.com</a><span><b>Công ty:</b> Công ty TNHH Golden Core</span><span><b>Mã số thuế:</b> 0111592859</span><span><b>Văn phòng:</b> Số 59, Đường Tỉnh 418-UBND,<br />Thôn Tây Ninh, Xã Đoài Phương, Hà Nội</span><span><b>Kho hàng:</b> Km3 ĐT376, Nguyễn Văn Linh, Hưng Yên</span></div></div><div className="wrap footer-map"><div className="footer-map-copy"><p className="footer-label">BẢN ĐỒ KHO HÀNG</p><h2>Golden Core · Hưng Yên</h2><p>Km3 ĐT376, Nguyễn Văn Linh, Hưng Yên</p><a className="footer-map-link" href="https://www.google.com/maps/search/?api=1&query=C%C3%B4ng%20Ty%20TNHH%20Golden%20Core%2C%20Km3%20%C4%90T376%2C%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20H%C6%B0ng%20Y%C3%AAn" target="_blank" rel="noreferrer">Mở trên Google Maps <ArrowUpRight size={16} /></a></div><div className="footer-map-frame"><iframe title="Bản đồ Công ty TNHH Golden Core" src="https://www.google.com/maps?q=C%C3%B4ng%20Ty%20TNHH%20Golden%20Core%2C%20Km3%20%C4%90T376%2C%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20H%C6%B0ng%20Y%C3%AAn&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Golden Core. Bảo lưu mọi quyền.</span></div></footer><FloatingContact /></>;
}

function FloatingContact() {
  return <aside className="floating-contact" aria-label="Liên hệ nhanh"><a className="floating-contact__button floating-contact__zalo" href="https://zalo.me/0941495982" target="_blank" rel="noreferrer" aria-label="Nhắn Zalo cho Golden Core"><span>Zalo</span></a><a className="floating-contact__button floating-contact__phone" href="tel:0941495982" aria-label="Gọi Golden Core"><Phone size={22} /></a></aside>;
}
