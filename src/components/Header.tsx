import cart from "../assets/icons/cart.svg";
import map from "../assets/icons/map.svg";
import { useState } from "react";
import { Logo } from "./UI/Logo.tsx";
import phone from "../assets/icons/phone.svg";
import { LoginForm } from "./forms/LoginForm.tsx";
import { RegisterForm } from "./forms/RegisterForm.tsx";
import { useAppDispatch, useAppSelector } from "../redux/store.ts";
import { logoutUser } from "../redux/slices/userSlice.ts";
import { Link } from "react-router-dom";
import { Searchbar } from "./Searchbar.tsx";

export const Header = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const [cartSize] = useState<number>(0);
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [registerModalOpen, setRegisterModalOpen] = useState<boolean>(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
    setRegisterModalOpen(false);
  };

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
    setLoginModalOpen(false);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  return (
    <>
      <div className="container h-11 flex items-center justify-between text-sm text-gray-600">
        <div className="flex gap-x-2">
          <img src={map} alt="map" className="fill-gray-600" />
          <p>Минск, ул. Казинца, 91</p>
        </div>
        {!isAuth ? (
          <p
            className="hover:underline hover:underline-offset-4 cursor-pointer"
            onClick={() => setLoginModalOpen(true)}
          >
            Войти / Зарегистрироваться
          </p>
        ) : (
          <p
            className="hover:underline hover:underline-offset-4 cursor-pointer"
            onClick={() => dispatch(logoutUser())}
          >
            Выйти из аккаунта
          </p>
        )}
      </div>
      <div className="border-b-1 border-b-gray-100"></div>
      <header className="container h-[100px] flex items-center justify-between">
        <Logo />
        <Searchbar />
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
            <Link className="navbar-item" to="/catalog">
              Каталог
            </Link>
            <Link className="navbar-item" to="/products">
              Все товары
            </Link>
            <Link to="/contacts" className="navbar-item">
              Контакты
            </Link>
            <Link to="/about" className="navbar-item">
              О нас
            </Link>
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
      <LoginForm
        isOpen={loginModalOpen}
        setIsOpen={closeLoginModal}
        openRegisterModal={openRegisterModal}
      />
      <RegisterForm
        isOpen={registerModalOpen}
        setIsOpen={closeRegisterModal}
        openLoginModal={openLoginModal}
      />
    </>
  );
};
