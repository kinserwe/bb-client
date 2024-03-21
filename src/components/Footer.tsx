import { Logo } from "./UI/Logo.tsx";
import phone from "../assets/icons/phone.svg";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 flex flex-col">
      <div className="flex flex-col container">
        <div className="h-[16rem] flex items-center justify-between text-white">
          <div className="flex flex-col justify-around w-80 gap-y-4">
            <Logo />
            <p className="text-gray-500">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="flex gap-x-2">
              <img src={phone} alt="phone" />
              <a
                href="tel:+375(29)123-45-67"
                className="hover:underline hover:underline-offset-4"
              >
                +375 (29) 123-45-67
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-around gap-y-3">
            <p className="text-white font-medium text-base select-none">
              Мой аккаунт
            </p>
            <p className="footer-link">Аккаунт</p>
            <p className="footer-link">История заказов</p>
            <p className="footer-link">Корзина</p>
            <p className="footer-link">Список желаемого</p>
          </div>
          <div className="flex flex-col justify-around gap-y-3">
            <p className="text-white font-medium text-base select-none">
              Помощь
            </p>
            <p className="footer-link">Контакты</p>
            <p className="footer-link">Частые вопросы</p>
            <p className="footer-link">Условия пользования</p>
            <p className="footer-link">Политика конфиденциальности</p>
          </div>
          <div className="flex flex-col justify-around gap-y-3">
            <p className="text-white font-medium text-base select-none">
              Мой аккаунт
            </p>
            <p className="footer-link">Аккаунт</p>
            <p className="footer-link">История заказов</p>
            <p className="footer-link">Корзина</p>
            <p className="footer-link">Список желаемого</p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t-1 border-t-gray-800 h-20">
          <p className="text-gray-500 text-sm">
            BotanicBasket &copy; {new Date().getFullYear()}. Все права защищены
          </p>
          <div className="flex items-center justify-between gap-x-2">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};
