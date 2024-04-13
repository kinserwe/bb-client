import searchIcon from "../assets/icons/search.svg";
import SearchResults from "./SearchResults.tsx";
import React, { useEffect, useState } from "react";

import apiClient from "../axios.ts";
import { debounce } from "lodash";
import { useLocation } from "react-router-dom";
import { PaginatedResponse } from "../types/api.ts";
import { Product } from "../types/product.ts";

const Searchbar = () => {
  const [resultOpen, setResultOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);
  const location = useLocation();

  const fetchResults = async () => {
    const { data } = await apiClient.get<PaginatedResponse<Product>>(
      "api/products",
      {
        params: { search: searchValue },
      },
    );
    return data.results;
  };

  useEffect(() => {
    fetchResults().then((results) => setResults(results));
  }, [searchValue]);

  useEffect(() => {
    setResultOpen(false);
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 1) {
      setSearchValue(e.target.value);
      setResultOpen(true);
    } else {
      setResultOpen(false);
    }
  };

  const debouncedSetSearchValue = debounce(handleChange, 500);

  return (
    <>
      <form
        className="relative flex h-12 w-[600px] focus-within:shadow"
        onSubmit={(e) => e.preventDefault()}
      >
        <img
          src={searchIcon}
          alt="search"
          className="absolute left-3.5 top-3.5 h-5"
        />
        <input
          type="text"
          className="flex-1 rounded-md border-1 pl-10 focus:outline-none"
          onChange={debouncedSetSearchValue}
          placeholder="Поиск в каталоге"
        />
        {/*<button*/}
        {/*  type="submit"*/}
        {/*  className="w-25 bg-primary rounded-r-md rounded-l-none text-white hover:bg-hard-primary transition-colors duration-200"*/}
        {/*>*/}
        {/*  Поиск*/}
        {/*</button>*/}
        <SearchResults results={results} isOpen={resultOpen} />
      </form>
    </>
  );
};

export default Searchbar;
