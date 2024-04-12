import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import CatalogPage from "./pages/CatalogPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactsPage from "./pages/ContactsPage.tsx";
import UploadImagePage from "./pages/UploadImagePage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import App from "./App.tsx";
import Wishlist from "./components/Wishlist.tsx";
import Dashboard from "./components/Dashboard.tsx";
import OrderHistory from "./components/OrderHistory.tsx";
import ProfileSettings from "./components/ProfileSettings.tsx";
import { ProductPage } from "./pages/ProductPage.tsx";
import Cart from "./components/Cart.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/catalog",
        element: <CatalogPage />,
        children: [
          {
            path: ":categoryName",
            element: <CatalogPage />,
            children: [{ path: ":subcategoryName", element: <CatalogPage /> }],
          },
        ],
      },
      {
        path: "/catalog/:categoryName/:subcategoryName/:productId",
        element: <ProductPage />,
      },
      { path: "/about", element: <AboutPage /> },
      { path: "/contacts", element: <ContactsPage /> },
      { path: "/upload", element: <UploadImagePage /> },
      {
        path: "/profile",
        element: <ProfilePage />,
        children: [
          { path: "wishlist", element: <Wishlist /> },
          { path: "cart", element: <Cart /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "orders", element: <OrderHistory /> },
          { path: "settings", element: <ProfileSettings /> },
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
