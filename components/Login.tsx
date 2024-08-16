import useSession from "@/hooks/useSession";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const { login } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setTimeout(async () => {
        await login(name);
        router.push("/feed", undefined, { shallow: true });
      }, 3500);
    } catch (error) {
      console.error("Login Failed:", error);
      alert("Login Failed. Please try again!");
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
            radius="sm"
            fullWidth 
          >
            Login Now
          </Button>
          <div className="mt-2 text-left text-[14px] text-[#7F8084] mb-6">
            Not registered yet?{" "}
            <a href="#" className="text-white text-opacity-80 hover:underline">
              Register →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
