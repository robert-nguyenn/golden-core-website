# Golden Core — Hiển thị tìm kiếm và chuẩn bị quảng cáo

## Nội dung tìm kiếm

Tiêu đề trang chủ: **Pallet nhựa & sóng nhựa công nghiệp | Golden Core**.

Trang danh mục, từng sản phẩm, báo giá và bài viết có tiêu đề, mô tả và URL canonical riêng. Trang chủ sử dụng ảnh pallet có sẵn; ảnh sản phẩm có alt text, kích thước và phiên bản tối ưu cho điện thoại. Metadata `og:image`, `WebPage.primaryImageOfPage` và sitemap ảnh giúp Google nhận biết ảnh phù hợp với từng trang.

Google tự quyết định tiêu đề, đoạn mô tả, ảnh thu nhỏ và số lượng ảnh hiển thị. Các thay đổi này không bảo đảm một hàng bốn ảnh như website khác. Cần triển khai rồi chờ Google thu thập lại. Không dùng lời hứa “rẻ nhất” hoặc “giá tại xưởng” khi chưa có thông tin doanh nghiệp xác nhận.

Đây là website nhận yêu cầu báo giá, không có giá bán công khai hoặc đánh giá đã xác minh. Structured data không thêm giá 0 đồng, tình trạng tồn kho hay đánh giá giả. `Product` mô tả sản phẩm, nhưng chưa đáp ứng yêu cầu riêng của Google cho kết quả sản phẩm có giá/đánh giá.

## Việc chủ tài khoản cần làm sau khi triển khai

1. Trong Google Search Console, dùng property của `goldencorepallet.com`, gửi `https://www.goldencorepallet.com/sitemap.xml`.
2. URL Inspection: kiểm tra trang chủ, `/san-pham` và trang sản phẩm dùng chạy quảng cáo; yêu cầu index lại nếu Google cho phép. Không cần yêu cầu index cho mọi ảnh.
3. Gửi một báo giá thử với sự đồng ý của chủ hộp thư. Xác nhận email kích hoạt FormSubmit nếu có, và kiểm tra yêu cầu thực sự đến `goldencore.biz@gmail.com`, kể cả Spam. Kiểm tra giao diện success/error bằng mock chưa xác nhận được email đã đến hộp thư.
4. Nếu chạy Google Ads, thiết lập đo lường chuyển đổi cho gửi báo giá và bấm gọi điện/Zalo trong tài khoản phù hợp. Website chưa có ID Google Ads/GA4 của doanh nghiệp nên chưa cài tag hoặc xác nhận đo lường.
5. Cấu hình asset hình ảnh trong Google Ads nếu chiến dịch và tài khoản đủ điều kiện. Ảnh trong quảng cáo là thiết lập riêng với ảnh ở kết quả tìm kiếm tự nhiên.

## Kiểm tra bản cập nhật

Bản build production tạo thành công tất cả các trang. Kiểm tra crawl xác nhận 80 URL có title/canonical riêng và 69 ảnh truy cập được. Kiểm tra trình duyệt ở độ rộng 375, 768 và 1440 px bao gồm lọc danh mục, điền sẵn mã sản phẩm khi báo giá, phản hồi bị từ chối/thành công bằng mock và trang sản phẩm không tồn tại trả 404.

Lighthouse trên bản production chạy local với mô phỏng điện thoại: Performance 87, Accessibility 100, SEO 100, CLS 0. Điểm có thể thay đổi theo môi trường và không thay cho dữ liệu người dùng thực tế hoặc việc phê duyệt quảng cáo. Font đã được phục vụ từ website thay cho stylesheet Google Fonts ở runtime.

Các kiểm tra form dùng mock, không gửi email thật. Việc nhận email và đo lường chuyển đổi vẫn cần chủ tài khoản xác nhận như các bước trên.

## Chọn trang đích

- Quảng cáo một mẫu pallet cụ thể: trỏ về `/san-pham/<slug>` của mẫu đó; khách nhìn thấy ảnh, kích thước, tải trọng và nút báo giá có mã sản phẩm điền sẵn.
- Quảng cáo nhiều loại: trỏ về `/san-pham` để tìm theo mã, tên, kích thước và lọc nhóm sản phẩm.
- Trang `/bao-gia` có biểu mẫu, liên kết gọi điện/Zalo và chính sách bảo mật.

Website đã có thông tin doanh nghiệp, hotline, email, địa chỉ, HTTPS và robots cho phép crawl. Phải kiểm tra bản triển khai cuối cùng trên điện thoại, việc nhận báo giá và đo lường trước khi chi tiền. Website hoạt động không bảo đảm Google Ads sẽ phê duyệt từng quảng cáo; điều đó còn phụ thuộc nội dung và tài khoản chiến dịch.

## Nguồn tham khảo

- [Tiêu đề trong Google Search](https://developers.google.com/search/docs/appearance/title-link)
- [Google Image SEO và lựa chọn ảnh preview](https://developers.google.com/search/docs/appearance/google-images)
- [Yêu cầu riêng của Product snippets](https://developers.google.com/search/docs/appearance/structured-data/product-snippet)
- [Yêu cầu trang đích Google Ads](https://support.google.com/adspolicy/answer/6368661)
