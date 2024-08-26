import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { DispatchWithoutAction, useEffect, useState } from "react";
import { useAppContext } from "@/hooks/useAppContext";
import { useAccount } from "wagmi";
import { formatWalletAddress } from "@/helper/address.helper";
import { zeroAddress } from "viem";
import TimeAgo from "./TimeAgo";
import { Post } from "@/data";

const CreatePost = ({ openModal }: { openModal: DispatchWithoutAction }) => {
  const [content, setContent] = useState('');
  const {postData,setPostData} = useAppContext();
  const [username, setUsername] = useState("");
  const { isConnected, address } = useAccount();
  const postDate: string = new Date().toISOString();
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!isConnected) {
        setUsername(localStorage.getItem("username") ?? "John");
      } else {
        setUsername(formatWalletAddress(address ?? zeroAddress));
      }
    }
  }, [address, isConnected]);

  const handlePost = () => {
    setContent('');
    setPostData((postData: Post[] | undefined) => {
      const currentPosts = postData ?? [];
      return [
        ...currentPosts,
        {
          id: currentPosts.length,
          author: username,
          time: 'AhaanS',
          profile: '/ahaan.jpeg',
          emoji: '/hand.png',
          content: content,
          comments: '0 comments',
          createdAt: postDate,
        }
      ];
    });
  };
  console.log("CreatePost-->", postData);
  
  return (
    <div className="sm:w-[700px] sm:h-[223px] w-[350px] h-[223px] border-[2px] border-[#35373B] bg-[#27292D] rounded-[8px] mt-8">
      <h2 className="text-[16px] text-[#C5C7CA] m-4">Create Post</h2>
      <div className="flex sm:w-[660px] h-[78px] w-[310px] bg-[#191920] mx-4 rounded-[8px]">
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
          placeholder='How are you feeling today?'
          value={content}
          className="bg-transparent focus:outline-none w-full"
          onChange={(e)=> setContent(e.target.value)}
          maxLength={250}
        />
      </div>
      <div className="flex flex-col items-end">
        <span className="mx-6">
      <p className="text-[12px] text-[#7F8084]">{content.length}/50 characters</p>
      </span>
        <Button
          onClick={handlePost}
          variant="solid"
          color="primary"
          radius="sm"
          className="mt-1 mr-5"
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;
