import { Product } from "../types";

function useProduct(product: Product) {
  const addToCart = () => {
    console.log("Added:", product);
    setTimeout(() => {
      console.log("test");
    }, 5000);
  };

  return { addToCart };
}

export default useProduct;
