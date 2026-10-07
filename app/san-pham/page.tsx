import ProductCatalogue from "@/components/product-catalogue";
import { products } from "@/lib/products";
import { StructuredData } from "@/components/structured-data";
import { catalogueSchema, pageMetadata, productImages, webPageSchema } from "@/lib/seo";

export const revalidate = 60;

export async function generateMetadata() {
  return pageMetadata({ title: "Pallet nhựa, sóng nhựa & thùng nhựa – Danh mục", description: "Xem danh mục pallet nhựa, sóng nhựa và thùng nhựa Golden Core. Hình ảnh, kích thước, vật liệu, tải trọng từng mẫu và tư vấn báo giá theo nhu cầu.", path: "/san-pham", images: productImages(products.slice(0, 3)) });
}

export default async function ProductsPage() {
  return <><StructuredData data={[webPageSchema("/san-pham", "Danh mục sản phẩm Golden Core", productImages(products.slice(0, 1))), catalogueSchema(products)]} /><ProductCatalogue products={products} /></>;
}
