import searchIcon from "../assets/icons/search.svg";
import { SearchResult } from "./SearchResult.tsx";
import React, { useEffect, useState } from "react";
import { Product } from "../types.ts";
import apiClient from "../axios.ts";
import { debounce } from "lodash";
import { useLocation } from "react-router-dom";

export const Searchbar = () => {
  const [resultOpen, setResultOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [results, setResults] = useState<Product[]>();
  const location = useLocation();

  const fetchResults = async () => {
    const { data } = await apiClient.get("api/products", {
      params: { search: searchValue },
    });
    return data;
  };

  useEffect(() => {
    fetchResults().then((results) => setResults(results));
  }, [searchValue]);

  useEffect(() => {
    setResultOpen(false);
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 2) {
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
        className="w-[800px] h-12 flex relative focus-within:shadow"
        onSubmit={(e) => e.preventDefault()}
      >
        <img
          src={searchIcon}
          alt="search"
          className="h-5 absolute left-3.5 top-3.5"
        />
        <input
          type="text"
          className="flex-1 pl-10 focus:outline-none rounded-md border-1"
          onChange={debouncedSetSearchValue}
          placeholder="Поиск в каталоге"
        />
        {/*<button*/}
        {/*  type="submit"*/}
        {/*  className="w-25 bg-primary rounded-r-md rounded-l-none text-white hover:bg-hard-primary transition-colors duration-300"*/}
        {/*>*/}
        {/*  Поиск*/}
        {/*</button>*/}
        <SearchResult results={results} isOpen={resultOpen} />
      </form>
    </>
  );
};
