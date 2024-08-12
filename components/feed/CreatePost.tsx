import Image from "next/image";
import React from "react";

const CreatePost = ({ openModal }: { openModal: () => void }) => {
  return (
    <div className="w-[700px] h-[223px] border-[2px] border-[#35373B] bg-[#27292D] rounded-[8px] mt-8">
      <h2 className="text-[16px] text-[#C5C7CA] m-4">Create Post</h2>
      <div className="flex w-[660px] h-[78px] bg-[#191920] mx-4 rounded-[8px]">
        <div className="bg-[#27292D] w-[48px] h-[48px] flex justify-center items-center m-4 rounded-full">
          <Image
            src="/PostIcon.png"
            alt="/PostIcon.png"
            width={18}
            height={18}
          />
        </div>
        <input
          type="text"
          placeholder="How are you feeling today?"
          className="bg-transparent focus:outline-none w-full"
        />
      </div>
      <div className="flex justify-end">
        <button
          className="w-[111px] h-[43px] bg-[#4A96FF] hover:opacity-80 transition duration-500 hover:transition text-[14px] m-4 rounded-[4px]"
          onClick={openModal}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
