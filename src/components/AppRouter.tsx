import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Main } from "./Main.tsx";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage.tsx";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};
