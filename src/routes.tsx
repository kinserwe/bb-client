import { ProductsPage } from "./pages/ProductsPage.tsx";
import { HomePage } from "./pages/HomePage.tsx";
import { CatalogPage } from "./pages/CatalogPage.tsx";
import { UploadImagePage } from "./pages/UploadImagePage.tsx";
import { AboutPage } from "./pages/AboutPage.tsx";
import { ContactsPage } from "./pages/ContactsPage.tsx";
import { PageNotFound } from "./pages/PageNotFound.tsx";
import { ProfilePage } from "./pages/ProfilePage.tsx";
import { Wishlist } from "./components/Wishlist.tsx";
import { Dashboard } from "./components/Dashboard.tsx";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/catalog", element: <CatalogPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contacts", element: <ContactsPage /> },
  { path: "/upload", element: <UploadImagePage /> },
  {
    path: "/profile",
    element: <ProfilePage />,
    children: [
      { path: "/profile/dashboard", element: <Dashboard /> },
      { path: "/profile/wishlist", element: <Wishlist /> },
    ],
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
];
