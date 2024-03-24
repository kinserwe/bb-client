import React, { FC } from "react";
import { Modal } from "../UI/Modal.tsx";
import { useForm } from "react-hook-form";
import { LoginCredentials } from "../../types.ts";
import { useAppDispatch } from "../../redux/store.ts";
import { loginUser } from "../../redux/slices/userSlice.ts";

interface ILoginForm {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginForm: FC<ILoginForm> = ({ isOpen, setIsOpen }) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<LoginCredentials>();

  const submitForm = (data: LoginCredentials) => {
    dispatch(loginUser(data));
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form
        className="flex flex-col justify-center items-center gap-3 p-6"
        onSubmit={handleSubmit(submitForm)}
      >
        <p className="text-3xl font-semibold mb-2">Вход</p>
        <input
          type="text"
          {...register("username")}
          className="p-4 rounded-md border-1 w-[400px] focus:outline-none"
          placeholder="Имя пользователя"
        />
        <input
          type="password"
          {...register("password")}
          className="p-4 rounded-md border-1 w-[400px] focus:outline-none"
          placeholder="Пароль"
        />
        <button
          type="submit"
          className="p-4 rounded-[40px] w-[400px] bg-primary text-white font-semibold hover:bg-hard-primary transition-colors duration-300"
        >
          Войти
        </button>
      </form>
    </Modal>
  );
};
