import { FC } from "react";
import { Product } from "../types.ts";
import { ProductCard } from "./ProductCard.tsx";

interface ISearchResult {
  results: Product[] | undefined;
  isOpen: boolean;
}

export const SearchResult: FC<ISearchResult> = ({ results, isOpen }) => {
  return (
    <div
      className={`${isOpen ? "flex flex-col gap-y-2" : "hidden"} absolute w-[800px] p-5 top-[46px] bg-white rounded-md rounded-t-none border-t-0 border-1 focus-within:shadow z-[100]`}
    >
      {results?.map((result) => <ProductCard product={result} />)}
      {!!results && (
        <div className="flex justify-center items-center">
          По вашему запросу ничего не найдено
        </div>
      )}
    </div>
  );
};
