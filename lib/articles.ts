export type Article = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  readingTime: string;
  publishedAt: string;
  image?: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "chon-pallet-nhua-5-cau-hoi",
    tag: "HƯỚNG DẪN",
    title: "Chọn pallet nhựa: 5 câu hỏi cần trả lời trước khi mua",
    excerpt: "Bắt đầu từ hàng hoá và cách vận hành, thay vì chỉ nhìn vào kích thước pallet.",
    readingTime: "5 phút đọc",
    publishedAt: "20 tháng 8, 2026",
    sections: [
      { heading: "1. Hàng hoá của bạn nặng bao nhiêu?", paragraphs: ["Tải trọng là điểm xuất phát. Cần phân biệt tải trọng tĩnh khi pallet đặt trên nền, tải trọng động khi pallet được di chuyển bằng xe nâng hoặc xe kéo, và tải trên kệ nếu hàng được lưu trữ trên hệ thống racking.", "Một pallet có tải trọng tĩnh cao chưa chắc phù hợp với xe nâng hoặc kệ chứa hàng. Hãy cung cấp khối lượng của cả hàng hoá, bao bì và cách xếp hàng để được tư vấn đúng."] },
      { heading: "2. Kích thước kiện hàng và mặt bằng kho là gì?", paragraphs: ["Kích thước pallet nên phù hợp với thùng carton, bao hàng hoặc khay đang sử dụng. Khi pallet quá nhỏ, hàng dễ nhô ra ngoài. Khi quá lớn, diện tích kho và phương tiện vận chuyển lại bị lãng phí.", "Ngoài chiều dài và chiều rộng, nên xem xét chiều cao xếp hàng, lối đi kho và kích thước xe tải hoặc container thường dùng."] },
      { heading: "3. Pallet sẽ được nâng bằng thiết bị nào?", paragraphs: ["Xe nâng tay, xe nâng điện và xe nâng càng có yêu cầu tiếp cận pallet khác nhau. Kiểu chân pallet, hướng nâng và kết cấu mặt đáy đều ảnh hưởng trực tiếp đến thao tác hằng ngày.", "Nếu pallet cần đi qua nhiều công đoạn, hãy mô tả toàn bộ hành trình thay vì chỉ nêu một loại xe nâng."] },
      { heading: "4. Môi trường sử dụng có đặc biệt không?", paragraphs: ["Kho lạnh, khu vực ẩm, thực phẩm, hoá chất nhẹ hay ngoài trời đều cần được cân nhắc. Điều kiện nhiệt độ và vệ sinh có thể thay đổi lựa chọn vật liệu và kiểu bề mặt phù hợp."] },
      { heading: "5. Có cần dùng trên kệ hoặc luân chuyển thường xuyên không?", paragraphs: ["Pallet dùng trên kệ cần được đánh giá theo tải trên kệ và thiết kế gia cường phù hợp. Với luân chuyển nhiều vòng, độ bền, khả năng vệ sinh và tính ổn định của pallet thường quan trọng hơn mức giá ban đầu.", "Một vài thông tin ngắn về hàng hoá, thiết bị nâng và môi trường làm việc thường đã đủ để Golden Core đề xuất phương án sát thực tế."] },
    ],
  },
  {
    slug: "tai-trong-tinh-dong-va-tai-tren-ke",
    tag: "KHO VẬN",
    title: "Tải trọng tĩnh, động và tải trên kệ: hiểu đúng để dùng an toàn",
    excerpt: "Ba con số giống nhau trên giấy có thể mang ý nghĩa hoàn toàn khác trong kho.",
    readingTime: "4 phút đọc",
    publishedAt: "20 tháng 8, 2026",
    sections: [
      { heading: "Tải trọng tĩnh", paragraphs: ["Đây là tải trọng khi pallet đặt ổn định trên một mặt nền phẳng. Giá trị này thường cao nhất vì pallet được nâng đỡ đều và không phải chịu lực rung, lực nâng hay độ võng của kệ."] },
      { heading: "Tải trọng động", paragraphs: ["Đây là tải trọng khi pallet đang được di chuyển bằng xe nâng hoặc xe kéo. Trong tình huống này, tải bị tác động bởi gia tốc, điểm tựa của càng nâng và cách xếp hàng. Vì vậy tải trọng động luôn cần được xem riêng."] },
      { heading: "Tải trọng trên kệ", paragraphs: ["Khi pallet được đặt trên thanh beam của kệ, phần giữa pallet không được đỡ như khi đặt trên sàn. Tải trên kệ vì thế có thể thấp hơn nhiều so với tải trọng tĩnh. Không nên suy luận thông số này từ hai thông số còn lại."] },
      { heading: "Cách đọc thông số một cách có trách nhiệm", paragraphs: ["Thông số kỹ thuật là cơ sở để lựa chọn, không thay thế việc kiểm tra điều kiện sử dụng. Cách xếp hàng, độ cao chất hàng, nhiệt độ, loại xe nâng và tình trạng của pallet đều có ảnh hưởng.", "Nếu vận hành trên kệ hoặc kho lạnh, hãy gửi thông tin thực tế cho Golden Core trước khi chốt lựa chọn."] },
    ],
  },
  {
    slug: "khi-nao-dung-song-nhua-thay-thung-carton",
    tag: "VẬN HÀNH",
    title: "Khi nào nên dùng sóng nhựa thay cho thùng carton?",
    excerpt: "Không phải lúc nào nhựa cũng thay thế carton, nhưng với luân chuyển lặp lại, bài toán thay đổi rõ rệt.",
    readingTime: "3 phút đọc",
    publishedAt: "20 tháng 8, 2026",
    sections: [
      { heading: "Carton phù hợp khi nào?", paragraphs: ["Carton là lựa chọn hợp lý cho đơn hàng một chiều, hàng cần in ấn thông tin riêng hoặc khi cần giảm chi phí đầu vào cho từng chuyến. Nó gọn khi chưa sử dụng và dễ tuỳ biến theo quy cách."] },
      { heading: "Sóng nhựa tạo lợi thế ở đâu?", paragraphs: ["Trong các tuyến giao nhận quay vòng, sóng nhựa giúp giảm việc thay thùng, chịu ẩm tốt hơn và dễ vệ sinh. Kết cấu cứng cũng hỗ trợ xếp chồng ổn định, đặc biệt trong kho hoặc trên xe giao nhận.", "Các kiểu thành lưới, thành đặc, có nắp hoặc có bánh xe nên được chọn theo loại hàng và tần suất sử dụng."] },
      { heading: "Đừng chỉ so giá mua", paragraphs: ["Nên so sánh theo số vòng sử dụng, thời gian bốc xếp, tỷ lệ hư hỏng và không gian lưu kho. Một giải pháp có giá ban đầu cao hơn đôi khi lại hợp lý nếu được sử dụng lặp lại trong thời gian dài."] },
    ],
  },
  {
    slug: "khong-gian-kho-gon-va-hieu-qua",
    tag: "GÓC NHÌN",
    title: "Một không gian kho gọn có thể thay đổi hiệu quả làm việc ra sao?",
    excerpt: "Sự gọn gàng không chỉ để nhìn đẹp; nó giúp giảm thao tác thừa và làm rõ những điểm cần cải thiện.",
    readingTime: "4 phút đọc",
    publishedAt: "20 tháng 8, 2026",
    sections: [
      { heading: "Nhìn thấy được luồng hàng", paragraphs: ["Khi khu vực nhận hàng, lưu trữ và xuất hàng có ranh giới rõ, người vận hành ít phải tìm kiếm và chờ đợi hơn. Pallet, sóng nhựa và thùng chứa đồng bộ giúp hàng hoá dễ nhận diện trong từng bước."] },
      { heading: "Giảm những thao tác không cần thiết", paragraphs: ["Một chiếc thùng có kích thước phù hợp với kệ, xe đẩy và pallet giúp tránh việc sang hàng nhiều lần. Những cải thiện nhỏ này thường lặp lại hàng trăm lần trong một ngày làm việc."] },
      { heading: "Bắt đầu từ một khu vực", paragraphs: ["Không cần thay đổi cả kho cùng lúc. Hãy chọn một điểm đang gây chậm trễ, ghi lại cách hàng hoá di chuyển và thử chuẩn hoá bằng đúng loại vật tư chứa hoặc pallet. Kết quả từ một khu vực thường cho thấy bước tiếp theo cần làm."] },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
