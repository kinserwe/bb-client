import React, { FC, SetStateAction, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.tsx";
import Loader from "../components/Loader.tsx";
import { Pagination } from "@mui/material";
import { useParams } from "react-router-dom";
import Accordion from "../components/UI/Accordion.tsx";
import { useAppDispatch, useAppSelector } from "../redux/store.ts";
import { fetchProducts } from "../redux/slices/productSlice.ts";

export interface RequestParams {
  page?: number;
  category?: string;
  search?: string;
  sort?: string;
  min_price?: number;
  max_price?: number;
  manufacturer?: number;
}

interface FilterProps {
  params: RequestParams;
  setParams: React.Dispatch<SetStateAction<RequestParams>>;
}

const CatalogFilters: FC<FilterProps> = ({ params, setParams }) => {
  return (
    <section className="flex h-[1200px] w-[300px] flex-col rounded-lg border-1 border-gray-200">
      <Accordion
        label="Цена"
        content={
          <div>
            <input
              type="number"
              value={params.min_price || 0}
              onChange={(e) =>
                setParams((prevParams) => ({
                  ...prevParams,
                  min_price: e.target.valueAsNumber,
                }))
              }
            />
            <input
              type="number"
              value={params.max_price || 2000}
              onChange={(e) =>
                setParams((prevParams) => ({
                  ...prevParams,
                  max_price: +e.target.valueAsNumber,
                }))
              }
            />
          </div>
        }
      />
      <Accordion label="Производитель" content={<input type="range" />} />
      <Accordion label="Рейтинг" content={<input type="range" />} />

      <button className="mt-4 justify-self-end rounded-lg border-4 border-primary bg-white text-lg font-medium text-primary transition-colors duration-200 hover:bg-primary hover:text-white">
        Очистить фильтры
      </button>
    </section>
  );
};

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const {
    data: products,
    loading,
    total_pages: pageCount,
  } = useAppSelector((state) => state.product);
  const { categoryName, subcategoryName } = useParams();

  const [params, setParams] = useState<RequestParams>({ page: 1 });

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setParams((prevParams) => ({ ...prevParams, page: value }));
  };

  useEffect(() => {
    dispatch(fetchProducts(params));
  }, [params, categoryName, subcategoryName]);

  useEffect(() => {
    document.title =
      (subcategoryName ? subcategoryName : categoryName || "Каталог") +
      " \u2022 BotanicBasket";
    categoryName &&
      setParams((prevParams) => ({ ...prevParams, category: categoryName }));
    subcategoryName &&
      setParams((prevParams) => ({ ...prevParams, category: subcategoryName }));
  }, [categoryName, subcategoryName]);

  return (
    <div className="container flex flex-col">
      <div className="mb-6 flex justify-between">
        <h3 className="text-3xl font-semibold">
          {subcategoryName ? subcategoryName : categoryName || "Каталог"}
        </h3>
        <select
          className="mb-2 cursor-pointer self-end bg-transparent text-right text-hard-primary"
          value={params.sort}
          onChange={(e) => {
            setParams((prevParams) => ({
              ...prevParams,
              sort: e.target.value,
              page: 1,
            }));
          }}
        >
          <option value="-orders__quantity">Сначала популярные</option>
          <option value="price">Сначала дешевые</option>
          <option value="-price">Сначала дорогие</option>
          <option value="-reviews__count">С отзывами</option>
          <option value="-created_at">Новые</option>
        </select>
      </div>
      <div className="flex gap-x-5">
        <CatalogFilters params={params} setParams={setParams} />
        <section className="flex flex-1 flex-col gap-y-5">
          {loading ? (
            <Loader />
          ) : (
            <>
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
              {pageCount && pageCount > 1 && (
                <Pagination
                  className="self-center pb-4 pt-2"
                  page={params.page}
                  count={pageCount}
                  siblingCount={1}
                  onChange={handlePageChange}
                />
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default CatalogPage;
