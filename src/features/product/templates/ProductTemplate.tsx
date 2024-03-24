import React from "react";
import ProductCard from "../components/ProductCard";

import { Product } from "../types";
import useProduct from "../hooks/useProduct";

const product: Product = {
  id: 1,
  image: "https://iili.io/HCURIHu.jpg",
  title: "Viston Earl Grey Tea",
  category: "Black Tea",
  rating: { stars: 4, reviews: 4 },
  price: 8.95,
};

const ProductTemplate = () => {
  const { addToCart } = useProduct(product);
  return (
    <ProductCard product={product}>
      <ProductCard.Image />
      <ProductCard.Info>
        <ProductCard.Category />
        <ProductCard.Title />
        <ProductCard.Rating />
        <ProductCard.Price />

        <ProductCard.Button onClick={addToCart}>Add to cart</ProductCard.Button>
      </ProductCard.Info>
    </ProductCard>
  );
};

export default ProductTemplate;
