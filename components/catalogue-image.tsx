import type { Product } from "@/lib/products";
import { ProductVisual } from "./product-visual";

export function CatalogueImage({ product }: { product: Product }) {
  if (product.image) {
    return <img className="real-product-image" src={product.image} alt={product.name} />;
  }

  return <ProductVisual kind={product.kind} />;
}
