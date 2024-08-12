import Image from "next/image";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const SignUp = ({ closeModal }: { closeModal: () => void }) => {
  const [name, setName] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const handleClick = () => {
    passwordType == "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };
  return (
    <div className="bg-[#27292D] rounded-lg shadow-lg max-w-sm w-[463px]">
      <span className="flex justify-end">
        <button
          className="rounded-full w-[32px] h-[32px] bg-[#131319] flex justify-center items-center"
          onClick={closeModal}
        >
          <RxCross2 />
        </button>
      </span>
      <div className="flex justify-center items-center mb-6 w-full mt-2">
        <div className="font-semibold">
          <h3 className="text-[#6B6C70] flex justify-center text-[12px]">
            SIGN UP
          </h3>
          <h1 className="text-white text-[16px] font-bold">
            Create an account to continue
          </h1>
        </div>
      </div>
      <div className="rounded-[4px] my-2">
        <label htmlFor="email" className="block text-[#C5C7CA] text-[12px]">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 mt-1 text-[#7F8084] text-[14px] bg-transparent border border-[#35373B] rounded-md"
          placeholder="Enter your email"
        />
      </div>
      <div className="rounded-[4px] my-2">
        <label htmlFor="email" className="block text-[#C5C7CA] text-[12px]">
          Username
        </label>
        <input
          type="text"
          id="email"
          className="w-full p-2 mt-1 text-[#7F8084] text-[14px] bg-transparent border border-[#35373B] rounded-md"
          placeholder="Choose a preferred username"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="my-2">
        <div className="flex justify-between items-center rounded-[4px]">
          <label
            htmlFor="password"
            className="block text-[#C5C7CA] text-[12px]"
          >
            Password
          </label>
        </div>
        <div className="flex items-center justify-between w-full p-2 m-[1.5px] text-[#7F8084] text-[14px] bg-transparent border border-[#35373B] rounded-md">
          <input
            type={passwordType}
            placeholder="Enter your password"
            className="bg-transparent focus:outline-none"
          />
          <Image
            src="/Icon.svg"
            alt="/Icon.svg"
            width={18}
            height={14}
            className="cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-1 w-full bg-[#4A96FF] hover:opacity-80 transition duration-300 hover:transition text-white text-[14px] p-2 rounded-[4px]"
      >
        Continue
      </button>
      <div className="mt-2 text-left text-[14px] text-[#7F8084] mb-6">
        Already have an account?{" "}
        <a href="#" className="text-white text-opacity-80 hover:underline">
          Login →
        </a>
      </div>
    </div>
  );
};

export default SignUp;
