import { useProductCardContext } from "./ProductCardContext";

function ProductRating() {
  const { product } = useProductCardContext();
  return (
    <div className="product-rating">
      {/* {[1, 2, 3, 4, 5].map((i) =>
        i <= product.rating.stars ? (
          <AiFillStar key={i} />
        ) : (
          <AiOutlineStar key={i} />
        )
      )} */}
      {product.rating.stars ?? 1} / 5
    </div>
  );
}
export default ProductRating;
