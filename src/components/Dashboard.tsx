import { useAppSelector } from "../redux/store.ts";
import { useEffect, useState } from "react";
import { getImage } from "../firebase.ts";
import defaultUserImage from "../assets/images/default_user.png";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const user = useAppSelector((state) => state.user.data);
  const [userImage, setUserImage] = useState<string>();
  useEffect(() => {
    if (user) getImage(`users/${user.id}`).then((image) => setUserImage(image));
  }, [user]);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex gap-x-6 flex-wrap">
        <div className="flex flex-col flex-auto py-8 border-1 items-center gap-y-2 rounded-md">
          <img
            src={userImage ?? defaultUserImage}
            alt=""
            className="object-cover w-[150px] h-[150px] rounded-[50%]"
          />
          <p className="text-xl text-gray-900 font-medium">
            {user?.first_name + " " + user?.last_name}
          </p>
          <p className="text-sm text-gray-500 mt-[-6px]">
            {user?.is_staff ? "Администратор" : "Покупатель"}
          </p>
          <Link to="/profile/settings" className="font-medium text-primary">
            Редактировать профиль
          </Link>
        </div>
        <div className="flex flex-col flex-1 py-8 border-1 items-center gap-y-2 rounded-md"></div>
      </div>
    </div>
  );
};
