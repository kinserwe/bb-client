import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./components/AppRouter.tsx";

function App() {
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
