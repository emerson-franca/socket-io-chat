import { FC } from "react";

interface IHome {
  children: React.ReactNode;
}

export const Home: FC<IHome> = ({ children }) => (
  <div className="bg-slate-50 grid min-h-screen grid-cols-app grid-rows-app">
    {children}
  </div>
);
