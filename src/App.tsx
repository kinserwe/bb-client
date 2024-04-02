import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./components/AppRouter.tsx";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/store.ts";
import { fetchProfile } from "./redux/slices/userSlice.ts";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  });

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen font-onest">
          <AppRouter />
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
