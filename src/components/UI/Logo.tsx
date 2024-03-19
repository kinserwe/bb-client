import logo from "../../assets/icons/logo.svg";

export const Logo = () => {
  return (
    <div className="flex gap-x-2 h-8 cursor-pointer">
      <img src={logo} alt="logo" />
      <div className="text-2xl select-none">BotanicBasket</div>
    </div>
  );
};
