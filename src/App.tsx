import { Outlet, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/store.ts";
import { fetchProfile } from "./redux/slices/userSlice.ts";
import Header from "./components/Header.tsx";
import Breadcrumbs from "./components/Breadcrumbs.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <>
      <div className="flex min-h-screen flex-col font-onest">
        <Header />
        <Breadcrumbs />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
