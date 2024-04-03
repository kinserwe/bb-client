import { Link, useLocation } from "react-router-dom";
import { UisAngleRight } from "@iconscout/react-unicons-solid";
import home from "../assets/icons/home.svg";

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
  "order-history" = "История заказов",
}

function Breadcrumbs() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  const paths = location.pathname.split("/").filter((path) => path);
  return (
    <nav className="flex container py-8">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link
              to="/"
              className="text-gray-400 hover:filter hover:brightness-0"
            >
              <img src={home} alt="home icon" />
            </Link>
          </div>
        </li>
        {paths.map((path, index) => {
          const pathParts = paths.slice(0, index + 1);
          const to = `/${pathParts.join("/")}`;
          const displayName =
            path in routeMapping ? routeMapping[path as RouteKey] : path;
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
}

export default Breadcrumbs;
