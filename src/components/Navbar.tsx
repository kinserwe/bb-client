import phone from "../assets/icons/phone.svg";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container flex justify-between items-center h-[60px]">
        <div className="flex gap-x-8 text-gray-400 select-none">
          <div className="hover:text-white cursor-pointer">Каталог</div>
          <div className="hover:text-white cursor-pointer">Каталог</div>
          <div className="hover:text-white cursor-pointer">Каталог</div>
          <div className="hover:text-white cursor-pointer">Каталог</div>
          <div className="hover:text-white cursor-pointer">Каталог</div>
        </div>
        <div className="flex gap-x-2 items-center">
          <img src={phone} alt="phone" />
          <p className="py-0.5 text-white">+375 (29) 123-45-67</p>
        </div>
      </div>
    </nav>
  );
};
