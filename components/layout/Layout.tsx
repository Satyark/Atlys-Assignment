import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { PropsWithChildren } from "react";
import { useAccount } from "wagmi";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: PropsWithChildren) => {
  
  const router = useRouter()
  const { isConnected, isDisconnected } = useAccount();

  useEffect(()=>{
    if(isDisconnected){
      router.push("/", undefined, { shallow: true });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isDisconnected])

  return (
    <>
      {isConnected && (
        <div className="w-full flex justify-end p-4">
          <ConnectButton />
        </div>
      )}
      <div
        className={`flex items-center justify-center w-full ${inter.className}`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
