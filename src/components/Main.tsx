import { FC } from "react";
import React from "react";

interface IMain {
  children: React.ReactNode;
}

export const Main: FC<IMain> = ({ children }) => {
  return (
    <main className="flex flex-col flex-1 items-center justify-center">
      {children}
    </main>
  );
};
