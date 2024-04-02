import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link className="flex gap-x-2 h-8 cursor-pointer" to="/">
      <img src={logo} alt="logo" />
      <div className="text-2xl select-none">BotanicBasket</div>
    </Link>
  );
};
