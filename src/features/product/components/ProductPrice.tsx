import * as React from "react";
import { useProductCardContext } from "./ProductCardContext";

type Props = {
  currency?: string;
};

function ProductPrice({ currency = "EUR" }: Props) {
  const { product } = useProductCardContext();
  return (
    <div className="product-price">
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
      }).format(product.price)}
    </div>
  );
}

export default ProductPrice;
