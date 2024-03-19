import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Main } from "./Main.tsx";
import { Navbar } from "./Navbar.tsx";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};
