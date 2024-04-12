import cart from "../assets/icons/cart.svg";
import map from "../assets/icons/map.svg";
import profile from "../assets/icons/user.svg";
import { useState } from "react";
import Logo from "./UI/Logo.tsx";
import phone from "../assets/icons/phone.svg";
import LoginForm from "./forms/LoginForm.tsx";
import RegisterForm from "./forms/RegisterForm.tsx";
import { useAppDispatch, useAppSelector } from "../redux/store.ts";
import { logoutUser } from "../redux/slices/userSlice.ts";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar.tsx";

const Header = () => {
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
      <div className="container flex h-11 items-center justify-between text-sm text-gray-600">
        <div className="flex gap-x-2">
          <img src={map} alt="map" className="fill-gray-600" />
          <p>Минск, ул. Казинца, 91</p>
        </div>
        {!isAuth ? (
          <p
            className="underline-hover cursor-pointer"
            onClick={() => setLoginModalOpen(true)}
          >
            Войти / Зарегистрироваться
          </p>
        ) : (
          <p
            className="underline-hover cursor-pointer"
            onClick={() => dispatch(logoutUser())}
          >
            Выйти из аккаунта
          </p>
        )}
      </div>
      <div className="border-b-1 border-b-gray-100"></div>
      <header className="container flex h-[100px] items-center justify-between">
        <Logo />
        <Searchbar />
        <div className="relative flex items-center gap-x-2 rounded-lg transition-colors duration-200 hover:border-primary hover:outline-2">
          {isAuth && (
            <Link to="/profile/dashboard">
              <img src={profile} alt="" className="h-10 cursor-pointer" />
            </Link>
          )}
          {cartSize > 0 && (
            <div className="absolute right-[75px] top-1 flex h-5 w-5 items-center justify-center rounded-3xl bg-hard-primary text-sm text-white">
              {cartSize}
            </div>
          )}
          <Link
            to="/profile/cart"
            className="flex items-center gap-x-2 font-semibold"
          >
            <img src={cart} alt="" className="h-10 cursor-pointer" />
            <div className="flex-col justify-between">
              <p className="text-gray-600">Корзина</p>
              <div>0.00BYN</div>
            </div>
          </Link>
        </div>
      </header>
      <div className="bg-gray-800">
        <nav className="container flex h-[60px] items-center justify-between">
          <div className="flex h-full select-none gap-x-10">
            <Link className="navbar-item" to="/catalog">
              Каталог
            </Link>
            <Link to="/contacts" className="navbar-item">
              Контакты
            </Link>
            <Link to="/about" className="navbar-item">
              О нас
            </Link>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={phone} alt="phone" />
            <a
              className="underline-hover py-0.5 text-white"
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

export default Header;
