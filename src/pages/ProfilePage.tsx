import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FC } from "react";
import { useAppDispatch } from "../redux/store.ts";
import { logoutUser } from "../redux/slices/userSlice.ts";
import { IoBagOutline } from "react-icons/io5";
import { MdDashboard, MdOutlineSettings } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { LuHeart } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";
import { IconType } from "react-icons";

interface FieldProps {
  to: string;
  name: string;
  icon: IconType;
}

const ProfileNavbarField: FC<FieldProps> = ({ to, name, icon: Icon }) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={
        location.pathname === to
          ? "relative flex items-center  gap-x-2.5 border-primary bg-gray-100 px-5 py-4 text-black before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-primary before:content-['']"
          : "flex gap-x-2.5 px-5 py-4 text-gray-600 transition-colors duration-200 hover:bg-gray-100"
      }
    >
      <Icon
        size={24}
        className={`${location.pathname === to ? "text-black" : "text-gray-600"}`}
      />
      <span>{name}</span>
    </Link>
  );
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mb-20 flex gap-x-6">
      <section className="flex h-fit w-[300px] flex-col rounded-md border-1 py-4">
        <p className="pb-4 pl-5 text-xl font-medium">Профиль</p>
        <ProfileNavbarField
          to="/profile/dashboard"
          name="Личный кабинет"
          icon={MdDashboard}
        />
        <ProfileNavbarField
          to="/profile/orders"
          name="История заказов"
          icon={AiOutlineHistory}
        />
        <ProfileNavbarField
          to="/profile/wishlist"
          name="Список желаемого"
          icon={LuHeart}
        />
        <ProfileNavbarField
          to="/profile/cart"
          name="Корзина"
          icon={IoBagOutline}
        />
        <ProfileNavbarField
          to="/profile/settings"
          name="Настройки"
          icon={MdOutlineSettings}
        />
        <div
          className="flex cursor-pointer gap-x-2.5  px-5 py-4 text-red-500 transition-colors duration-200 hover:bg-red-50 active:bg-red-100"
          onClick={() => dispatch(logoutUser()).then(() => navigate("/"))}
        >
          <TbLogout size={24} />
          <span>Выйти из аккаунта</span>
        </div>
      </section>
      <Outlet />
    </div>
  );
};

export default ProfilePage;
