import { useEffect, useState } from "react";
import { Product } from "../types.ts";
import apiClient from "../axios.ts";
import { ProductCard } from "../components/ProductCard.tsx";
import { Loader } from "../components/Loader.tsx";

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    const { data } = await apiClient.get<Product[]>("api/products");
    return data;
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container flex items-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="flex flex-col w-[450px]"></section>
          <section className="flex flex-col flex-1 gap-y-2 pt-2">
            {products?.map((product) => <ProductCard product={product} />)}
          </section>
        </>
      )}
    </div>
  );
};
