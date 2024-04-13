import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { getImage } from "../firebase.ts";
import ProductStatus from "./UI/ProductStatus.tsx";
import { Product } from "../types/product.ts";

interface ISearchResult {
  result: Product;
}

const SearchResult: FC<ISearchResult> = ({ result }) => {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    getImage(`products/${result.id}`).then((image) => setImage(image));
  }, []);

  return (
    <div className="flex gap-x-3 rounded-lg border-1 border-gray-200 p-4">
      <div className="flex items-center">
        <img
          src={image}
          alt="product image"
          className="h-[100px] w-[100px] object-contain"
        />
      </div>
      <div className="flex-1 flex-col">
        <Link
          to={`/catalog/${result.category}/${result.id}`}
          className="underline-hover text-base font-semibold"
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
              className="z-[-100] items-center pb-0"
            />
            <ProductStatus productQuantity={result.quantity} />
          </div>
        </div>
        <p className="whitespace-pre-wrap pt-2 text-[13px] text-gray-600">
          {result.description}
        </p>
      </div>
      <div className="flex w-[120px] flex-col gap-y-3">
        <p className="text-right text-base font-semibold">
          {result.price} руб.
        </p>
        <button className="rounded-md bg-primary px-2.5 py-1.5 text-white transition-colors duration-200 hover:bg-hard-primary">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
