import { Product } from "../types.ts";
import { FC, useEffect, useState } from "react";
import { getImage } from "../firebase.ts";
import Rating from "@mui/material/Rating";
import check from "../assets/icons/check.svg";
import cross from "../assets/icons/cross.svg";

interface IProductCard {
  product: Product;
}

export const ProductCard: FC<IProductCard> = ({ product }) => {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    getImage(`products/${product.id}`).then((image) => setImage(image));
  }, []);

  return (
    <div className="p-5 flex border-1 rounded-lg border-gray-200 gap-x-4">
      <img
        src={image}
        alt="product image"
        className="w-[200px] h-[200px] object-contain"
      />
      <div className="flex-1 flex-col">
        <p className="text-xl font-semibold">{product.name}</p>
        <div className="pt-2">
          <div className="flex gap-x-4">
            <Rating
              defaultValue={product.rating}
              precision={0.5}
              readOnly
              size="medium"
            />
            <div className="flex gap-x-2 items-center">
              <img
                src={product.quantity ? check : cross}
                alt="check"
                className="h-4"
              />
              <span className="text-gray-800">
                {product.quantity ? "Есть в наличии" : "Нет в наличии"}
              </span>
            </div>
          </div>
        </div>
        <p className="pt-2 text-gray-600 text-sm whitespace-pre-wrap">
          {product.description}
        </p>
      </div>
      <div className="w-[240px] flex flex-col gap-y-3">
        <p className="text-lg font-semibold">{product.price} руб.</p>
        <button className="text-white py-2.5 px-5 bg-primary hover:bg-hard-primary rounded-md transition-colors duration-300">
          В корзину
        </button>
      </div>
    </div>
  );
};
