import searchIcon from "../assets/icons/search.svg";
import cart from "../assets/icons/cart.svg";
import map from "../assets/icons/map.svg";
import { useState } from "react";
import { Logo } from "./UI/Logo.tsx";
import phone from "../assets/icons/phone.svg";
import { LoginForm } from "./forms/LoginForm.tsx";

export const Header = () => {
  const [cartSize] = useState<number>(0);
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="container h-11 flex items-center justify-between text-sm text-gray-600">
        <div className="flex gap-x-2">
          <img src={map} alt="map" className="fill-gray-600" />
          <p>Минск, ул. Казинца, 91</p>
        </div>
        <p
          className="hover:underline hover:underline-offset-4 cursor-pointer"
          onClick={() => setLoginModalOpen(true)}
        >
          Войти / Зарегистрироваться
        </p>
      </div>
      <div className="border-b-1 border-b-gray-100"></div>
      <header className="container h-[100px] flex items-center justify-between">
        <Logo />
        <form
          className="w-[500px] h-12 flex relative rounded-md border-1 focus-within:shadow"
          onSubmit={(e) => e.preventDefault()}
        >
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
      <div className="bg-gray-800">
        <nav className="container flex justify-between items-center h-[60px]">
          <div className="flex gap-x-10 h-full select-none">
            <div className="navbar-item">Каталог</div>
            <div className="navbar-item">Все товары</div>
            <div className="navbar-item">Контакты</div>
            <div className="navbar-item">О нас</div>
            <div className="navbar-item">Каталог</div>
          </div>
          <div className="flex gap-x-2 items-center">
            <img src={phone} alt="phone" />
            <a
              className="py-0.5 text-white hover:underline hover:underline-offset-4"
              href="tel:+375 (29) 123-45-67"
            >
              +375 (29) 123-45-67
            </a>
          </div>
        </nav>
      </div>
      <LoginForm isOpen={loginModalOpen} setIsOpen={setLoginModalOpen} />
    </>
  );
};
