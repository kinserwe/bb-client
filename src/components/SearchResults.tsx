import { FC } from "react";
import { Product } from "../types.ts";
import SearchResult from "./SearchResult.tsx";

interface ISearchResult {
  results: Product[];
  isOpen: boolean;
}

const SearchResults: FC<ISearchResult> = ({ results, isOpen }) => {
  return (
    <div
      className={`${isOpen ? "flex flex-col gap-y-2" : "hidden"} absolute top-[46px] z-[100] max-h-[480px] w-full overflow-y-auto rounded-md rounded-t-none border-1 border-t-0 bg-white p-5 focus-within:shadow`}
    >
      {results.length > 0 ? (
        results.map((result) => (
          <SearchResult key={result.id} result={result} />
        ))
      ) : (
        <div className="flex items-center justify-center">
          По вашему запросу ничего не найдено
        </div>
      )}
    </div>
  );
};

export default SearchResults;
