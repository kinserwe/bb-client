import truck from "../assets/icons/truck.svg";
import support from "../assets/icons/support.svg";
import secure from "../assets/icons/secure.svg";
import box from "../assets/icons/box.svg";

const Featured = () => {
  return (
    <div className="container flex h-[128px] select-none items-center justify-between gap-x-1.5 rounded-2xl p-10 shadow-md">
      <div className="flex h-12 gap-x-4">
        <img src={truck} alt="truck" />
        <div className="flex flex-col justify-between">
          <div className="text-base font-semibold">Бесплатная доставка</div>
          <div className="whitespace-nowrap text-sm text-gray-400">
            Бесплатная доставка по Минску
          </div>
        </div>
      </div>
      <div className="flex h-12 gap-x-4">
        <img src={support} alt="truck" className=""></img>
        <div className="flex flex-col justify-between">
          <div className="text-base font-semibold">Служба поддержки</div>
          <div className="whitespace-nowrap text-sm text-gray-400">
            Круглосуточная поддержка
          </div>
        </div>
      </div>
      <div className="flex h-12 gap-x-4">
        <img src={secure} alt="truck" className=""></img>
        <div className="flex flex-col justify-between">
          <div className="text-base font-semibold">Надежная оплата</div>
          <div className="whitespace-nowrap text-sm text-gray-400">
            Мы гарантируем сохранность ваших денег
          </div>
        </div>
      </div>
      <div className="flex h-12 gap-x-4">
        <img src={box} alt="truck" className=""></img>
        <div className="flex flex-col justify-between">
          <div className="text-base font-semibold">Гарантия возврата</div>
          <div className="whitespace-nowrap text-sm text-gray-400">
            Возврат средств в течение 30 дней
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
