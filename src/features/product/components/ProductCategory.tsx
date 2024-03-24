import * as React from "react";
import { useProductCardContext } from "./ProductCardContext";

function ProductCategory() {
  const { product } = useProductCardContext();
  return <div className="product-category">{product.category}</div>;
}

export default ProductCategory;
