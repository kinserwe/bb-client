import { Product } from "../types.ts";
import { FC, useEffect, useState } from "react";
import { getImage } from "../firebase.ts";
import { Link } from "react-router-dom";
import ProductStatus from "./UI/ProductStatus.tsx";
import Rating from "./UI/Rating.tsx";
import green_heart from "../assets/icons/green_heart.svg";

interface IProductCard {
  product: Product;
}

const ProductCard: FC<IProductCard> = ({ product }) => {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    getImage(`products/${product.id}`).then((image) => setImage(image));
  }, []);

  return (
    <div className="flex gap-x-4 rounded-lg border-1 border-gray-200 p-5">
      <Link to={`/products/${product.id}`}>
        <img
          src={image}
          alt="product image"
          className="h-[200px] w-[200px] object-contain"
        />
      </Link>

      <div className="flex-1 flex-col">
        <Link
          to={`${product.parent_category}/${product.category}/${product.id}`}
          className="underline-hover text-xl font-semibold"
        >
          {product.name}
        </Link>
        <div className="pt-2">
          <div className="flex gap-x-4">
            <div className="flex gap-x-1">
              <Rating value={product?.rating} />
              <span>({product?.review_count})</span>
            </div>
            <ProductStatus productQuantity={product.quantity} />
          </div>
        </div>
        <p className="whitespace-pre-wrap pt-2 text-sm text-gray-600">
          {product.description}
        </p>
      </div>
      <div className="flex w-[240px] flex-col gap-y-3">
        <p className="text-lg font-semibold">{product.price} руб.</p>
        <div className="flex items-center gap-x-3">
          <button className="flex-1 rounded-md bg-primary px-5 py-2.5 text-white transition-colors duration-200 hover:bg-hard-primary">
            В корзину
          </button>
          <button className="flex h-[44px] w-[44px] items-center justify-center rounded-[50%] bg-[#20B256]/20 transition-colors duration-200 hover:bg-[#20B256]/40">
            <img src={green_heart} alt="" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
