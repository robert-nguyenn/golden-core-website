# Golden Core Website

Website catalogue tiếng Việt cho Golden Core, xây bằng Next.js + TypeScript và sẵn sàng triển khai miễn phí trên Vercel.

## Chạy trên máy

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Thay thông tin trước khi công khai

- Số điện thoại, email và địa chỉ hiện là dữ liệu chờ cập nhật trong `components/chrome.tsx`.
- Danh mục và thông số mẫu nằm trong `lib/products.ts`.
- Ảnh sản phẩm hiện là minh hoạ CSS có chủ đích. Khi có ảnh thật, thay từng `ProductVisual` bằng ảnh tại `public/` để giữ nguyên bố cục.
- Form báo giá hiện hiển thị xác nhận ở phía trình duyệt. Để nhận email thật, có thể kết nối Formspree (gói miễn phí) hoặc Resend sau khi có địa chỉ email doanh nghiệp.

## Kiểm tra production

```bash
npm run build
npm run start
```
Website for Golden Core industrial plastic pallets, containers, crates, and related products
