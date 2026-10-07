import type { Product } from "@/lib/products";
import Image from "next/image";
import { ProductVisual } from "./product-visual";

export function CatalogueImage({ product, priority = false }: { product: Product; priority?: boolean }) {
  if (product.image) {
    return <Image className="real-product-image" src={product.image} alt={`${product.name}, kích thước ${product.dimension}`} width={800} height={600} sizes={priority ? "(max-width: 800px) 90vw, 600px" : "(max-width: 440px) 90vw, (max-width: 800px) 45vw, 400px"} preload={priority} />;
  }

  return <ProductVisual kind={product.kind} />;
}
