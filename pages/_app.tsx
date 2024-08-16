import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode, useState } from "react";
import { posts } from "@/data";
import { AppContext } from "@/context";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [postData, setPostData] = useState(posts);
  return (
    <AppContext.Provider value={{ postData, setPostData }}>
      {children}
    </AppContext.Provider>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </NextUIProvider>
  );
}
