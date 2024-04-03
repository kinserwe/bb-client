import { Product } from "../types.ts";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import check from "../assets/icons/check.svg";
import cross from "../assets/icons/cross.svg";
import { getImage } from "../firebase.ts";

interface ISearchResult {
  result: Product;
}

export const SearchResult: FC<ISearchResult> = ({ result }) => {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    getImage(`products/${result.id}`).then((image) => setImage(image));
  }, []);

  return (
    <div className="p-4 flex border-1 rounded-lg border-gray-200 gap-x-3">
      <div className="flex items-center">
        <img
          src={image}
          alt="product image"
          className="w-[100px] h-[100px] object-contain"
        />
      </div>
      <div className="flex-1 flex-col">
        <Link
          to={`/products/${result.id}`}
          className="text-base font-semibold underline-hover"
        >
          {result.name}
        </Link>
        <div className="pt-2">
          <div className="flex gap-x-4">
            <Rating
              defaultValue={result.rating}
              precision={0.5}
              readOnly
              size="small"
              className="z-[-100] pb-0 items-center"
            />
            <div className="flex gap-x-2 items-center">
              <img
                src={result.quantity ? check : cross}
                alt="check"
                className="h-4"
              />
              <span className="text-gray-800 text-sm    ">
                {result.quantity ? "Есть в наличии" : "Нет в наличии"}
              </span>
            </div>
          </div>
        </div>
        <p className="pt-2 text-gray-600 text-[13px] whitespace-pre-wrap">
          {result.description}
        </p>
      </div>
      <div className="w-[120px] flex flex-col gap-y-3">
        <p className="text-base text-right font-semibold">
          {result.price} руб.
        </p>
        <button className="text-white py-1.5 px-2.5 bg-primary hover:bg-hard-primary rounded-md transition-colors duration-300">
          В корзину
        </button>
      </div>
    </div>
  );
};
