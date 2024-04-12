import { useAppSelector } from "../redux/store.ts";
import { useEffect, useState } from "react";
import { getImage } from "../firebase.ts";
import defaultUserImage from "../assets/images/default_user.png";
import { Link } from "react-router-dom";
import Loader from "./Loader.tsx";

const Dashboard = () => {
  const user = useAppSelector((state) => state.user.data);
  const [userImage, setUserImage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (user) {
      getImage(`users/${user.id}`)
        .then((image) => {
          setUserImage(image);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user]);

  return (
    <div className="flex flex-1 flex-col gap-y-6">
      <div className="flex flex-wrap gap-x-6">
        <div className="flex flex-auto flex-col items-center gap-y-2 rounded-md border-1 py-8">
          {loading ? (
            <Loader />
          ) : (
            <>
              <img
                src={userImage ?? defaultUserImage}
                alt=""
                className="h-[150px] w-[150px] rounded-[50%] object-cover"
              />
              <p className="text-xl font-medium text-gray-900">
                {user?.first_name + " " + user?.last_name}
              </p>
              <p className="mt-[-6px] text-sm text-gray-500">
                {user?.is_staff ? "Администратор" : "Покупатель"}
              </p>
              <Link
                to="/profile/settings"
                className="underline-hover font-medium text-primary"
              >
                Редактировать профиль
              </Link>
            </>
          )}
        </div>
        <div className="flex flex-1 flex-col items-center gap-y-2 rounded-md border-1 py-8"></div>
      </div>
      <div className="flex min-w-full flex-1 flex-col overflow-hidden rounded-md border-1 pb-6">
        <p className="px-6 py-4 text-xl font-semibold">Последние заказы</p>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-900">
              <td className="px-6 py-2">Номер</td>
              <td className="px-6 py-2">Дата оформления</td>
              <td className="px-6 py-2">Сумма</td>
              <td className="px-6 py-2">Статус</td>
              <td className="px-6 py-2"></td>
            </tr>
          </thead>
          <tbody className="before:block before:leading-3 before:text-transparent before:content-['-']">
            <tr className="text-gray-700">
              <td className="px-6 py-2">#1</td>
              <td className="px-6 py-2">22 сентября 2024</td>
              <td className="px-6 py-2">100 руб. (2 товара)</td>
              <td className="px-6 py-2">В обработке</td>
              <td className="underline-hover cursor-pointer px-6 py-2 font-medium text-primary">
                Подробнее
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
