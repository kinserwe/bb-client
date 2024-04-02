import { useEffect, useState } from "react";
import { Category } from "../types.ts";
import apiClient from "../axios.ts";
import { Link } from "react-router-dom";

export const CatalogPage = () => {
  const [categories, setCategories] = useState<Category[]>();

  const fetchCategories = async () => {
    const { data } = await apiClient.get("api/categories");
    return data;
  };

  useEffect(() => {
    fetchCategories().then((categories) => setCategories(categories));
  }, []);

  return (
    <div className="container grid grid-cols-3 gap-[1px] p-[1px] bg-gray-100">
      {categories?.map((category) => (
        <Link
          to={`/catalog/${category.name}`}
          className="hover:shadow hover:text-hard-primary flex items-center justify-center cursor-pointer py-12 bg-white text-lg font-semibold transition-all duration-200"
        >
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};
