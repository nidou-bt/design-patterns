import * as React from "react";
import { useProductCardContext } from "./ProductCardContext";

function ProductTitle() {
  const { product } = useProductCardContext();
  return <div className="product-title">{product.title}</div>;
}

export default ProductTitle;
