import { Product } from "../types";

function useProduct(product: Product) {
  const addToCart = () => {
    console.log("Added:", product);
  };

  return { addToCart };
}

export default useProduct;
