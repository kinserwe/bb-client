import { useAppDispatch, useAppSelector } from "../redux/store.ts";
import { useForm } from "react-hook-form";
import { User } from "../types.ts";
import React, { useEffect, useState } from "react";
import { getImage, uploadImage } from "../firebase.ts";
import defaultUserImage from "../assets/images/default_user.png";
import { toast } from "react-toastify";
import { updateUser } from "../redux/slices/userSlice.ts";

const ProfileSettings = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.data);
  const { register, handleSubmit, setValue } = useForm<User>();
  const [userImage, setUserImage] = useState<string>();

  useEffect(() => {
    if (user) getImage(`users/${user.id}`).then((image) => setUserImage(image));
    for (const prop in user) {
      setValue(prop as keyof User, user[prop as keyof User]);
    }
  }, [user]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      uploadImage(e.target.files[0], `users/${user?.id}`).then((url) => {
        toast.success("Изображение добавлено!", {
          position: "top-center",
          autoClose: 2000,
        });
        setUserImage(url);
      });
    }
  };

  const submitForm = (data: User) => {
    dispatch(updateUser(data));
  };

  return (
    <div className="flex flex-1 flex-col rounded-md border-1">
      <p className="border-b-1 py-4 pl-6 text-xl font-medium">
        Настроки аккаунта
      </p>
      <div className="flex gap-x-6">
        <form
          className="flex flex-auto flex-col justify-center gap-y-1.5 p-6"
          onSubmit={handleSubmit(submitForm)}
        >
          <label>Имя</label>
          <input
            type="text"
            className="form-input mb-[18px]"
            {...register("first_name")}
          />
          <label>Фамилия</label>
          <input
            type="text"
            className="form-input mb-[18px]"
            {...register("last_name")}
          />
          <label>Электронная почта</label>
          <input
            type="text"
            className="form-input mb-[18px]"
            {...register("email")}
          />
          <label>Номер телефона</label>
          <input
            type="text"
            className="form-input mb-[18px]"
            {...register("phone")}
          />
          <button
            type="submit"
            className="self-start rounded-md bg-primary px-8 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-hard-primary"
          >
            Сохранить изменения
          </button>
        </form>
        <div className="flex flex-1 flex-col items-center gap-y-5 pt-14">
          <img
            src={userImage ?? defaultUserImage}
            alt=""
            className="h-[224px] w-[224px] rounded-[50%] object-cover"
          />
          <input
            id="upload_image"
            type="file"
            className="hidden"
            onChange={handleImageUpload}
          />
          <label
            htmlFor="upload_image"
            className="cursor-pointer rounded-md bg-white px-8 py-3.5 font-semibold text-primary outline outline-2 outline-primary transition-colors duration-200 hover:bg-primary hover:text-white"
          >
            Загрузить изображение
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
