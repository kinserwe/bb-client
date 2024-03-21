import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Main } from "./Main.tsx";
import { Navbar } from "./Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage.tsx";
// import { Breadcrumbs } from "./Breadcrumbs.tsx";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/*<Breadcrumbs />*/}
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};
