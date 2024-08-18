import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css"; 
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode, useState } from "react";
import { posts } from "@/data";
import { AppContext } from "@/context";
import { rainwbowKitConfig } from "@/rainbow-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";

const queryClient = new QueryClient();

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
    <WagmiProvider config={rainwbowKitConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <NextUIProvider>
            <AppProvider>
              <Component {...pageProps} />
            </AppProvider>
          </NextUIProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
