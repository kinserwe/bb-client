import truck from "../assets/icons/truck.svg";
import support from "../assets/icons/support.svg";
import secure from "../assets/icons/secure.svg";
import box from "../assets/icons/box.svg";

export const Featured = () => {
  return (
    <div className="container flex justify-between items-center gap-x-1.5 h-[128px] shadow-md rounded-2xl p-10 select-none">
      <div className="flex h-12 gap-x-4">
        <img src={truck} alt="truck" />
        <div className="flex flex-col justify-between">
          <div className="font-semibold text-base">Бесплатная доставка</div>
          <div className="text-sm text-gray-400 whitespace-nowrap">
            Бесплатная доставка по Минску
          </div>
        </div>
      </div>
      <div className="flex h-12 gap-x-4">
        <img src={support} alt="truck" className=""></img>
        <div className="flex flex-col justify-between">
          <div className="font-semibold text-base">Служба поддержки</div>
          <div className="text-sm text-gray-400 whitespace-nowrap">
            Круглосуточная поддержка
          </div>
        </div>
      </div>
      <div className="flex h-12 gap-x-4">
        <img src={secure} alt="truck" className=""></img>
        <div className="flex flex-col justify-between">
          <div className="font-semibold text-base">Надежная оплата</div>
          <div className="text-sm text-gray-400 whitespace-nowrap">
            Мы гарантируем сохранность ваших денег
          </div>
        </div>
      </div>
      <div className="flex h-12 gap-x-4">
        <img src={box} alt="truck" className=""></img>
        <div className="flex flex-col justify-between">
          <div className="font-semibold text-base">Гарантия возврата</div>
          <div className="text-sm text-gray-400 whitespace-nowrap">
            Возврат средств в течение 30 дней
          </div>
        </div>
      </div>
    </div>
  );
};
