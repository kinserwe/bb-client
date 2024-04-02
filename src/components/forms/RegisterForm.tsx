import React, { FC } from "react";
import { Modal } from "../UI/Modal.tsx";
import { useForm } from "react-hook-form";
import { RegisterData } from "../../types.ts";
import { useAppDispatch } from "../../redux/store.ts";
import { registerUser } from "../../redux/slices/userSlice.ts";
import { toast } from "react-toastify";

interface IRegisterForm {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openLoginModal: () => void;
}

export const RegisterForm: FC<IRegisterForm> = ({
  isOpen,
  setIsOpen,
  openLoginModal,
}) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState } = useForm<RegisterData>();

  const submitForm = (data: RegisterData) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        toast.success("You logged in successfully!", {
          position: "bottom-center",
          autoClose: 2000,
        });
        setIsOpen(false);
      })
      .catch((error: string) => {
        toast.error(error, { position: "bottom-center", autoClose: 2000 });
      });
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form
        className="flex flex-col justify-center items-center gap-3 p-6"
        onSubmit={handleSubmit(submitForm)}
      >
        <p className="text-3xl font-semibold mb-2">Регистрация</p>
        <input
          type="text"
          {...register("first_name")}
          className="auth-form-input"
          placeholder="Имя"
        />
        <input
          type="text"
          {...register("last_name")}
          className="auth-form-input"
          placeholder="Фамилия"
        />
        <input
          type="text"
          {...register("email")}
          className="auth-form-input"
          placeholder="Адрес электронной почты"
        />
        <input
          type="text"
          {...register("username")}
          className="auth-form-input"
          placeholder="Имя пользователя"
        />
        <input
          type="password"
          {...register("password")}
          className="auth-form-input"
          placeholder="Пароль"
        />
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="p-4 rounded-[40px] w-[400px] bg-primary text-white font-semibold hover:bg-hard-primary transition-colors duration-300"
        >
          Зарегистрироваться
        </button>
        <p className="text-center text-gray-600 mt-4">
          Уже зарегистрированы?{" "}
          <span
            className="font-medium text-gray-900 hover:underline hover:underline-offset-4 cursor-pointer"
            onClick={openLoginModal}
          >
            Войти
          </span>
        </p>
      </form>
    </Modal>
  );
};
