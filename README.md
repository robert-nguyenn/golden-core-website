# Golden Core Website

Website catalogue tiếng Việt cho Công ty TNHH Golden Core, xây bằng Next.js và TypeScript. Dự án phù hợp triển khai trên Vercel hoặc bất kỳ dịch vụ hosting Node.js nào.

## Chạy trên máy

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Kiểm tra production

```bash
npm run build
npm run start
```

## Quản lý nội dung

- Thông tin doanh nghiệp, số điện thoại, email và địa chỉ: `components/chrome.tsx`.
- Danh mục, mã Golden Core và thông số sản phẩm: `lib/products.ts`.
- Ảnh sản phẩm: `public/images/`.
- Bài viết trong Góc kiến thức: `lib/articles.ts`.

## Kích hoạt biểu mẫu báo giá

Biểu mẫu đã gửi đến `goldencore.biz@gmail.com` thông qua FormSubmit, không cần máy chủ email hoặc tài khoản trả phí. Sau khi website được triển khai, hãy gửi một yêu cầu báo giá thử.

Lần gửi đầu tiên, FormSubmit sẽ gửi một email xác nhận đến hộp thư Golden Core. Mở email đó và bấm xác nhận để kích hoạt nhận tất cả các yêu cầu tiếp theo. Kiểm tra cả mục Spam nếu chưa thấy email.

Biểu mẫu gửi email, không tự gửi SMS đến số điện thoại. Số điện thoại vẫn là kênh gọi trực tiếp trên website.

## Triển khai Vercel

1. Đăng nhập Vercel bằng tài khoản GitHub có quyền truy cập repository này.
2. Chọn **Add New → Project**, rồi import repository `golden-core-website`.
3. Giữ nguyên các thiết lập Next.js mặc định và chọn **Deploy**.
4. Sau khi có tên miền thật, thêm tên miền đó trong phần **Domains** của Vercel.
5. Gửi một yêu cầu báo giá thử và xác nhận email FormSubmit như phần trên.
