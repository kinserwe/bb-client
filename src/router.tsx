import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import { ProductsPage } from "./pages/ProductsPage.tsx";
import { CatalogPage } from "./pages/CatalogPage.tsx";
import { AboutPage } from "./pages/AboutPage.tsx";
import { ContactsPage } from "./pages/ContactsPage.tsx";
import { UploadImagePage } from "./pages/UploadImagePage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import { PageNotFound } from "./pages/PageNotFound.tsx";
import App from "./App.tsx";
import { Wishlist } from "./components/Wishlist.tsx";
import { Dashboard } from "./components/Dashboard.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
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
          { path: "wishlist", element: <Wishlist /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "order-history", element: <Dashboard /> },
        ],
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
