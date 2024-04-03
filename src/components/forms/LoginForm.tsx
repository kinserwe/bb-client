import React, { FC, useState } from "react";
import { Modal } from "../UI/Modal.tsx";
import { useForm } from "react-hook-form";
import { LoginCredentials } from "../../types.ts";
import { useAppDispatch } from "../../redux/store.ts";
import { loginUser } from "../../redux/slices/userSlice.ts";
import eye from "../../assets/icons/eye.svg";

interface ILoginForm {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openRegisterModal: () => void;
}

export const LoginForm: FC<ILoginForm> = ({
  isOpen,
  setIsOpen,
  openRegisterModal,
}) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<LoginCredentials>();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const submitForm = async (data: LoginCredentials) => {
    dispatch(loginUser(data)).then(() => {
      reset();
      setIsOpen(false);
    });
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
          className="auth-form-input"
          placeholder="Имя пользователя"
        />
        <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"}
            {...register("password")}
            className="auth-form-input pr-9"
            placeholder="Пароль"
          />
          <img
            src={eye}
            alt="password_visibility"
            className={`absolute top-[9px] right-4 p-2.5 cursor-pointer rounded-[20px] ${passwordVisible ? "fill-white bg-primary" : ""}`}
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
        </div>
        <button
          type="submit"
          className="p-4 rounded-[40px] w-[400px] bg-primary text-white font-semibold hover:bg-hard-primary transition-colors duration-300"
        >
          Войти
        </button>
        <p className="text-center text-gray-600 mt-4">
          Нет аккаунта?{" "}
          <span
            className="font-medium text-gray-900 underline-hover cursor-pointer"
            onClick={openRegisterModal}
          >
            Зарегистрироваться
          </span>
        </p>
      </form>
    </Modal>
  );
};
