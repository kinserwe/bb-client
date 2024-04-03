// import { useAppSelector } from "../redux/store.ts";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FC } from "react";
import dashboardIcon from "../assets/icons/dashboard.svg";
import orderHistoryIcon from "../assets/icons/order_history.svg";
import heartIcon from "../assets/icons/heart.svg";
import logoutIcon from "../assets/icons/logout.svg";
import { useAppDispatch } from "../redux/store.ts";
import { logoutUser } from "../redux/slices/userSlice.ts";

interface FieldProps {
  to: string;
  name: string;
  icon: string;
}

const ProfileNavbarField: FC<FieldProps> = ({ to, name, icon }) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={
        location.pathname === to
          ? "border-l-[3px] border-primary ml-[-3px] flex px-5 py-4 gap-x-2.5 text-black bg-gray-100"
          : "flex px-5 py-4 text-gray-600 gap-x-2.5 hover:bg-gray-100 transition-colors duration-200"
      }
    >
      <img
        src={icon}
        alt=""
        className={`filter ${location.pathname === to ? "brightness-0" : "brightness-100"}`}
      />
      <span>{name}</span>
    </Link>
  );
};

const ProfilePage = () => {
  // const user = useAppSelector((state) => state.user.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="container flex gap-x-6">
      <section className="flex flex-col w-[300px] border-1 rounded-md py-4">
        <p className="text-xl font-semibold pl-5 pb-4">Профиль</p>
        <ProfileNavbarField
          to="/profile/dashboard"
          name="Личный кабинет"
          icon={dashboardIcon}
        />
        <ProfileNavbarField
          to="/profile/order-history"
          name="История заказов"
          icon={orderHistoryIcon}
        />
        <ProfileNavbarField
          to="/profile/wishlist"
          name="Список желаемого"
          icon={heartIcon}
        />
        <div
          className="flex px-5 py-4  text-red-500 gap-x-2.5 cursor-pointer hover:bg-red-50 active:bg-red-100"
          onClick={() => dispatch(logoutUser()).then(() => navigate("/"))}
        >
          <img src={logoutIcon} alt="logout icon" />
          <span>Выйти из аккаунта</span>
        </div>
      </section>
      <Outlet />
    </div>
  );
};

export default ProfilePage;
