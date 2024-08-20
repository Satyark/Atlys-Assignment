import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { DispatchWithoutAction, useEffect, useState } from "react";
import { useAppContext } from "@/hooks/useAppContext";
import { useAccount } from "wagmi";
import { formatWalletAddress } from "@/helper/address.helper";
import { zeroAddress } from "viem";
import TimeAgo from "./TimeAgo";

const CreatePost = ({ openModal }: { openModal: DispatchWithoutAction }) => {
  const [content, setContent] = useState('');
  const {setPostData} = useAppContext();
  const [username, setUsername] = useState("");
  const { isConnected, address } = useAccount();
  const postDate: string = new Date().toISOString();
  const timeAgo = TimeAgo(postDate);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!isConnected) {
        setUsername(localStorage.getItem("username") ?? "John");
      } else {
        setUsername(formatWalletAddress(address ?? zeroAddress));
      }
    }
  }, [address, isConnected]);

  const handlePost = ()=>{
    setContent('');
    setPostData((postData: any) => {
      return[
        ...postData,{
          id: postData.length-1,
          author: username,
          time: timeAgo,
          profile:'/ahaan.jpeg',
          emoji: '/hand.png',
          content:content,
          comments: '0 comments'
        }
      ]
    });
  }
  
  return (
    <div className="sm:w-[700px] sm:h-[223px] w-[350px] h-[223px] border-[2px] border-[#35373B] bg-[#27292D] rounded-[8px] mt-8 ml-3">
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
          placeholder="How are you feeling today?"
          value={content}
          className="bg-transparent focus:outline-none w-full"
          onChange={(e)=> setContent(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <Button
          onClick={handlePost}
          variant="solid"
          color="primary"
          radius="sm"
          className="mt-4 mr-5"
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;
