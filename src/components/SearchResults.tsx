import { FC } from "react";
import { Product } from "../types.ts";
import { SearchResult } from "./SearchResult.tsx";

interface ISearchResult {
  results: Product[];
  isOpen: boolean;
}

export const SearchResults: FC<ISearchResult> = ({ results, isOpen }) => {
  return (
    <div
      className={`${isOpen ? "flex flex-col gap-y-2" : "hidden"} absolute w-full p-5 top-[46px] bg-white rounded-md rounded-t-none border-t-0 border-1 focus-within:shadow z-[100]`}
    >
      {results.length > 0 ? (
        results.map((result) => (
          <SearchResult key={result.id} result={result} />
        ))
      ) : (
        <div className="flex justify-center items-center">
          По вашему запросу ничего не найдено
        </div>
      )}
    </div>
  );
};
