import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Main } from "./Main.tsx";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes.tsx";
import Breadcrumbs from "./Breadcrumbs.tsx";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Main>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </Main>
      <Footer />
    </>
  );
};
