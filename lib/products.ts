export type Product = { code: string; slug: string; name: string; kind: "pallet" | "crate" | "bin"; category: string; dimension: string; material: string; static: string; dynamic: string; description: string };
export const products: Product[] = [
 { code:"GC-P12", slug:"pallet-gc-p12", name:"Pallet nhựa GC-P12", kind:"pallet", category:"Pallet nhựa", dimension:"1200 × 1000 × 150 mm", material:"HDPE / PP", static:"3.000 kg", dynamic:"1.500 kg", description:"Pallet mặt lưới, cân bằng giữa trọng lượng nhẹ và độ bền cho kho vận thông dụng." },
 { code:"GC-P11", slug:"pallet-gc-p11", name:"Pallet nhựa GC-P11", kind:"pallet", category:"Pallet nhựa", dimension:"1100 × 1100 × 150 mm", material:"HDPE / PP", static:"3.000 kg", dynamic:"1.500 kg", description:"Kiểu dáng vuông vững chãi, thuận tiện cho lưu kho và luân chuyển hàng hoá." },
 { code:"GC-P10E", slug:"pallet-gc-p10e", name:"Pallet xuất khẩu GC-P10E", kind:"pallet", category:"Pallet nhựa", dimension:"1000 × 1000 × 120 mm", material:"PP", static:"1.000 kg", dynamic:"1.000 kg", description:"Giải pháp gọn nhẹ cho luân chuyển hàng hoá và nhu cầu xuất khẩu." },
 { code:"GC-C31", slug:"song-nhua-gc-c31", name:"Sóng nhựa GC-C31", kind:"crate", category:"Sóng nhựa", dimension:"610 × 420 × 310 mm", material:"HDPE", static:"—", dynamic:"—", description:"Sóng nhựa bền chắc, thành cao, phù hợp phân loại và bảo quản hàng hoá." },
 { code:"GC-C39", slug:"song-nhua-gc-c39", name:"Sóng nhựa GC-C39", kind:"crate", category:"Sóng nhựa", dimension:"610 × 420 × 390 mm", material:"HDPE", static:"—", dynamic:"—", description:"Dung tích rộng rãi cho công đoạn đóng gói, vận chuyển và lưu kho." },
 { code:"GC-B120", slug:"thung-rac-gc-b120", name:"Thùng rác GC-B120", kind:"bin", category:"Thùng rác", dimension:"480 × 570 × 930 mm", material:"HDPE", static:"120 L", dynamic:"—", description:"Thùng rác có bánh xe, tiện cho khuôn viên doanh nghiệp và khu công nghiệp." },
];
export const featuredProducts = products.slice(0, 3);
export const getProduct = (slug: string) => products.find(p => p.slug === slug);
