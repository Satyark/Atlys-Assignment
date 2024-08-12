import { Inter } from "next/font/google";
import React from "react";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={`flex items-center justify-center w-full ${inter.className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
