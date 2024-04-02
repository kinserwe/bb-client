import { ProductsPage } from "./pages/ProductsPage.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { CatalogPage } from "./pages/CatalogPage.tsx";
import { UploadImagePage } from "./pages/UploadImagePage.tsx";
import { AboutPage } from "./pages/AboutPage.tsx";
import { ContactsPage } from "./pages/ContactsPage.tsx";

export const routes = [
  { path: "/products", element: <ProductsPage /> },
  { path: "/", element: <HomePage /> },
  { path: "/catalog", element: <CatalogPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contacts", element: <ContactsPage /> },
  { path: "/upload", element: <UploadImagePage /> },
  {
    path: "*",
    element: (
      <span className="container flex items-center justify-center text-6xl">
        404
      </span>
    ),
  },
];
