import React, { FC } from "react";

interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const Modal: FC<IModal> = ({ children, isOpen, setIsOpen }) => {
  return (
    <div
      className={`z-100 fixed inset-0 bg-green-800 bg-opacity-25 ${isOpen ? "flex items-center justify-center" : "hidden"}`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="rounded-lg bg-white shadow"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
