import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/store.ts";
import { fetchProfile } from "./redux/slices/userSlice.ts";
import { Header } from "./components/Header.tsx";
import Breadcrumbs from "./components/Breadcrumbs.tsx";
import { Main } from "./components/Main.tsx";
import { Footer } from "./components/Footer.tsx";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  });

  return (
    <>
      <div className="flex flex-col min-h-screen font-onest">
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
