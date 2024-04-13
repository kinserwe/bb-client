import React, { FC } from "react";
import Modal from "../UI/Modal.tsx";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/store.ts";
import { registerUser } from "../../redux/slices/userSlice.ts";
import { toast } from "react-toastify";
import { RegisterData } from "../../types/auth.ts";

interface IRegisterForm {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openLoginModal: () => void;
}

const RegisterForm: FC<IRegisterForm> = ({
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
        className="flex flex-col items-center justify-center gap-3 p-6"
        onSubmit={handleSubmit(submitForm)}
      >
        <p className="mb-2 text-3xl font-semibold">Регистрация</p>
        <input
          type="text"
          {...register("first_name")}
          className="form-input"
          placeholder="Имя"
        />
        <input
          type="text"
          {...register("last_name")}
          className="form-input"
          placeholder="Фамилия"
        />
        <input
          type="text"
          {...register("email")}
          className="form-input"
          placeholder="Адрес электронной почты"
        />
        <input
          type="text"
          {...register("username")}
          className="form-input"
          placeholder="Имя пользователя"
        />
        <input
          type="password"
          {...register("password")}
          className="form-input"
          placeholder="Пароль"
        />
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="w-[400px] rounded-[40px] bg-primary p-4 font-semibold text-white transition-colors duration-200 hover:bg-hard-primary"
        >
          Зарегистрироваться
        </button>
        <p className="mt-4 text-center text-gray-600">
          Уже зарегистрированы?{" "}
          <span
            className="underline-hover cursor-pointer font-medium text-gray-900"
            onClick={openLoginModal}
          >
            Войти
          </span>
        </p>
      </form>
    </Modal>
  );
};

export default RegisterForm;
