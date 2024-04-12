import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="flex h-8 cursor-pointer gap-x-2" to="/">
      <img src={logo} alt="logo" />
      <div className="select-none text-2xl">BotanicBasket</div>
    </Link>
  );
};

export default Logo;
