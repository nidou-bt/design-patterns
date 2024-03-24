import * as React from "react";
import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

function ProductInfo({ children }: Props) {
  return <div className="product-card-body">{children}</div>;
}

export default ProductInfo;
