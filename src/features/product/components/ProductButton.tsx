import * as React from "react";
import { ReactNode } from "react";
import { Product } from "../types";
import { useProductCardContext } from "./ProductCardContext";

type Props = {
  children: ReactNode;
  onClick: (product: Product) => void;
};

function ProductButton({ children, onClick }: Props) {
  const { product } = useProductCardContext();

  const handleClick = () => {
    onClick(product);
  };

  return (
    <button type="button" onClick={handleClick} className="product-button">
      {children}
    </button>
  );
}

export default ProductButton;
