import phone from "../assets/icons/phone.svg";

export const Navbar = () => {
  return (
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
  );
};
