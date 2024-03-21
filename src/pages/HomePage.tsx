import { Gallery } from "../components/Gallery.tsx";
import { Featured } from "../components/Featured.tsx";
import logo from "../assets/icons/logo.svg";
import quote from "../assets/icons/quote.svg";
import rating from "../assets/icons/rating.svg";

export const HomePage = () => {
  return (
    <>
      <Gallery />
      <Featured />
      <section className="bg-gray-50 py-[60px] mt-[60px] w-full">
        <div className="container flex flex-col gap-y-8 mb-4 justify-between">
          <p className="text-3xl font-semibold">Последние отзывы</p>
          <div className="flex items-center justify-between gap-x-6">
            <div className="flex flex-col gap-y-6 p-6 bg-white rounded-lg pt-[64px] relative">
              <img src={quote} alt="quote" className="absolute top-6 left-6" />
              <p className="text-sm text-gray-700">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-3">
                  <img src={logo} alt="logo" className="h-[56px]" />
                  <div className="flex flex-col justify-center">
                    <div className="text-base font-medium">Дмитрий Лебедь</div>
                    <div className="text-sm text-gray-400">Покупатель</div>
                  </div>
                </div>
                <img src={rating} alt="rating" />
              </div>
            </div>
            <div className="flex flex-col gap-y-6 p-6 bg-white rounded-lg pt-[64px] relative">
              <img src={quote} alt="quote" className="absolute top-6 left-6" />
              <p className="text-sm text-gray-700">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-3">
                  <img src={logo} alt="logo" className="h-[56px]" />
                  <div className="flex flex-col justify-center">
                    <div className="text-base font-medium">Дмитрий Лебедь</div>
                    <div className="text-sm text-gray-400">Покупатель</div>
                  </div>
                </div>
                <img src={rating} alt="rating" />
              </div>
            </div>
            <div className="flex flex-col gap-y-6 p-6 bg-white rounded-lg pt-[64px] relative">
              <img src={quote} alt="quote" className="absolute top-6 left-6" />
              <p className="text-sm text-gray-700">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-3">
                  <img src={logo} alt="logo" className="h-[56px]" />
                  <div className="flex flex-col justify-center">
                    <div className="text-base font-medium">Дмитрий Лебедь</div>
                    <div className="text-sm text-gray-400">Покупатель</div>
                  </div>
                </div>
                <img src={rating} alt="rating" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
