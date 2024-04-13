import React, { FC, useState } from "react";
import Modal from "../UI/Modal.tsx";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/store.ts";
import { loginUser } from "../../redux/slices/userSlice.ts";
import eye from "../../assets/icons/eye.svg";
import { LoginCredentials } from "../../types/auth.ts";

interface ILoginForm {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openRegisterModal: () => void;
}

const LoginForm: FC<ILoginForm> = ({
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
        className="flex flex-col items-center justify-center gap-3 p-6"
        onSubmit={handleSubmit(submitForm)}
      >
        <p className="mb-2 text-3xl font-semibold">Вход</p>
        <input
          type="text"
          {...register("username")}
          className="form-input"
          placeholder="Имя пользователя"
        />
        <div className="relative w-full">
          <input
            type={passwordVisible ? "text" : "password"}
            {...register("password")}
            className="form-input pr-9"
            placeholder="Пароль"
          />
          <img
            src={eye}
            alt="password_visibility"
            className={`absolute right-4 top-[9px] cursor-pointer rounded-[20px] p-2.5 ${passwordVisible ? "bg-primary fill-white" : ""}`}
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
        </div>
        <button
          type="submit"
          className="w-[400px] rounded-[44px] bg-primary p-4 font-semibold text-white transition-colors duration-200 hover:bg-hard-primary"
        >
          Войти
        </button>
        <p className="mt-4 text-center text-gray-600">
          Нет аккаунта?{" "}
          <span
            className="underline-hover cursor-pointer font-medium text-gray-900"
            onClick={openRegisterModal}
          >
            Зарегистрироваться
          </span>
        </p>
      </form>
    </Modal>
  );
};

export default LoginForm;
