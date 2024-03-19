import searchIcon from "../assets/icons/search.svg";
import cart from "../assets/icons/cart.svg";
import { useState } from "react";
import { Logo } from "./UI/Logo.tsx";

export const Header = () => {
  const [cartSize] = useState<number>(0);

  return (
    <header className="container h-[100px] flex items-center justify-between">
      <Logo />
      <form className="w-[500px] h-12 flex relative rounded-md border-1 focus-within:shadow">
        <img
          src={searchIcon}
          alt="search"
          className="h-5 absolute left-3.5 top-3.5"
        />
        <input
          type="text"
          className="flex-1 pl-10 focus:outline-none rounded-l-md rounded-r-none"
        />
        <button
          type="submit"
          className="w-25 bg-primary rounded-r-md rounded-l-none text-white hover:bg-hard-primary transition-colors duration-300"
        >
          Поиск
        </button>
      </form>
      <div className="flex gap-x-2 items-center cursor-pointer rounded-lg hover:outline-2 hover:border-primary transition-colors duration-300 relative">
        <img src={cart} alt="" className="h-10" />
        {cartSize > 0 && (
          <div className="text-sm rounded-3xl h-5 w-5 text-white flex items-center justify-center bg-hard-primary absolute top-1 right-[75px]">
            {cartSize}
          </div>
        )}
        <div className="flex flex-col justify-between font-semibold">
          <p className="text-gray-600">Корзина</p>
          <div>0.00BYN</div>
        </div>
      </div>
    </header>
  );
};
