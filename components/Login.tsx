import useSession from "@/hooks/useSession";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const Login = () => {
  const { login } = useSession();
  const { isConnected } = useAccount();
  const router = useRouter();
  const [name, setName] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  useEffect(() => {
    if (isConnected) {
      router.push("/feed", undefined, { shallow: true });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setTimeout(async () => {
        await login(name);
        router.push("/feed", undefined, { shallow: true });
      }, 2000);
    } catch (error) {
      console.error("Login Failed:", error);
      alert("Login Failed. Please try again!");
    }
  };

  return (
    <div className="h-screen flex items-center">
      <div>
        <div className="flex justify-center w-full my-10">
          <Image
            src="/Shape.png"
            alt="Shape"
            width={32}
            height={32}
            className="flex justify-center"
          />
        </div>
        <div className="max-w-md rounded-lg p-px bg-gradient-to-br from-[#969696] to-[#343434]">
          <div className="bg-[#27292D] p-5 rounded-lg shadow-lg w-[463px] max-w-sm">
            <div className="flex justify-center items-center mb-6 mt-4">
              <div className="text-center font-semibold">
                <h3 className="text-[#6B6C70] text-[12px]"></h3>
                <h1 className="text-white text-[16px] font-bold">
                  Log into your account
                </h1>
              </div>
            </div>

            <Input
              isRequired
              type="email"
              label="Email"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
              className="my-2"
              variant="bordered"
              radius="sm"
            />
            <Input
              type={passwordType}
              label="Password"
              className="my-2 mb-4"
              variant="bordered"
              radius="sm"
            />
            <Button
              onClick={() => handleLogin()}
              isLoading={loading}
              variant="solid"
              color="primary"
              isDisabled={name.length === 0}
              radius="sm"
              fullWidth
            >
              Login with username
            </Button>

            <div className="flex justify-center my-2">or</div>
            <div className="flex justify-center my-2 w-full">
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  const ready = mounted && authenticationStatus !== "loading";
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === "authenticated");

                  return (
                    <div className="w-full">
                      {(() => {
                        if (!connected) {
                          return (
                            <Button
                              onClick={() => openConnectModal()}
                              variant="solid"
                              color="primary"
                              radius="sm"
                              fullWidth
                            >
                              Login with wallet
                            </Button>
                          );
                        }

                        if (chain.unsupported) {
                          return (
                            <Button
                              onClick={() => openChainModal()}
                              variant="solid"
                              color="primary"
                              radius="sm"
                              fullWidth
                            >
                              Wrong Network
                            </Button>
                          );
                        }
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
