import { Link, useLocation, useParams } from "react-router-dom";
import { UisAngleRight } from "@iconscout/react-unicons-solid";
import home from "../assets/icons/home.svg";
import { useEffect, useState } from "react";
import apiClient from "../axios.ts";
import { Product } from "../types/product.ts";

type RouteKey = keyof typeof routeMapping;

enum routeMapping {
  "about" = "О нас",
  "products" = "Все товары",
  "contacts" = "Контакты",
  "catalog" = "Каталог",
  "profile" = "Профиль",
  "cart" = "Корзина",
  "wishlist" = "Список желаемого",
  "dashboard" = "Личный кабинет",
  "orders" = "История заказов",
  "settings" = "Настройки",
}

const Breadcrumbs = () => {
  const location = useLocation();
  const { productId } = useParams();
  const [productName, setProductName] = useState<string>("");

  useEffect(() => {
    if (productId)
      apiClient
        .get<Product>(`api/products/${productId}`)
        .then(({ data }) => setProductName(data.name));
  }, [productId]);

  if (location.pathname === "/") {
    return null;
  }

  const paths = location.pathname.split("/").filter((path) => path);
  return (
    <nav className="container flex py-8">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link
              to="/"
              className="text-gray-400 hover:brightness-0 hover:filter"
            >
              <img src={home} alt="home icon" />
            </Link>
          </div>
        </li>
        {paths.map((path, index) => {
          const pathParts = paths.slice(0, index + 1);
          const to = `/${pathParts.join("/")}`;
          let displayName = decodeURIComponent(
            path in routeMapping ? routeMapping[path as RouteKey] : path,
          );
          if (
            paths.includes("catalog") &&
            productId &&
            index === paths.length - 1
          ) {
            displayName = productName;
          }
          return (
            <li key={to}>
              <div className="flex items-center">
                <UisAngleRight />
                <Link
                  to={to}
                  className="ml-4 text-base font-medium text-gray-500 hover:text-gray-700"
                  aria-current="page"
                >
                  {displayName}
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
