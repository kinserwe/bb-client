import React, { FC } from "react";

interface IMain {
  children: React.ReactNode;
}

const Main: FC<IMain> = ({ children }) => {
  return <main className="flex flex-1 flex-col items-center">{children}</main>;
};

export default Main;
