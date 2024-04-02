import * as React from "react";
import { FC } from "react";

interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export const Modal: FC<IModal> = ({
  children,
  isOpen,
  setIsOpen,
  className,
}) => {
  return (
    <div
      className={`inset-0 fixed bg-green-800 bg-opacity-25 z-100 ${isOpen ? "flex items-center justify-center" : "hidden"} ${className}`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white rounded-lg shadow"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
