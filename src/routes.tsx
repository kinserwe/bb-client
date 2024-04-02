import { ProductsPage } from "./pages/ProductsPage.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { CatalogPage } from "./pages/CatalogPage.tsx";

export const routes = [
  { path: "/products", element: <ProductsPage /> },
  { path: "/", element: <HomePage /> },
  { path: "/catalog", element: <CatalogPage /> },
  {
    path: "*",
    element: (
      <span className="container flex items-center justify-center text-6xl">
        404
      </span>
    ),
  },
];
