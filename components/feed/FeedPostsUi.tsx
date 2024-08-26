import { Button, User } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import TimeAgo from './TimeAgo';
import Image from 'next/image';
import DropdownButton from './Dropdown';
import { posts } from '@/data';
import { useAppContext } from '@/hooks/useAppContext';

const FeedPostsUi = ({
    id,
    author,
    time,
    profile,
    emoji,
    content,
    comments,
    createdAt,
    username
}:{
    id: number;
    author:string;
    time: string;
    profile: string;
    emoji: string;
    content: string;
    comments: string;
    createdAt: string;
    username:string;
}) => {
  const [inputContent, setInputContent] = useState(content);
  // console.log('--->', inputContent,id);
  const {postData,setPostData} = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [displayContent, setDisplayContent] = useState(content);
  const handleEdit=()=>{
    if (isEditing) {
      const post = postData?.find(post => post.id === id);
      
      if (post) {
        post.content = inputContent;
      }
    }
    setIsEditing(!isEditing);
    // setDisplayContent(inputContent) //Set data directly
    // setIsEditing(false)
  }
  const handleDelete = () => {
    const postIndex = postData?.findIndex(post => post.id === id);
    if (postIndex && postIndex !== -1) {
      postData?.splice(postIndex, 1);
    }
  };
  console.log("-->", postData);
  return (
      <div
          className="sm:w-[700px] w-[350px] p-1 border-[2px] border-[#35373B] bg-[#27292D] rounded-[8px] mt-2"
          key={id}
        >
          <div className="flex justify-between items-center m-4">
            <div className="flex justify-start w-[177px] h-[44px]">
              <User
                name={author}
                description={time}
                avatarProps={{
                  src: profile,
                }}
              />
            </div>
            {author===username?<DropdownButton clickEdit={setIsEditing} clickDelete={setIsDelete} handleDelete={handleDelete}/> : null}
          </div>
          <div className="flex items-center sm:w-[660px] w-[310px] bg-[#191920] mx-3 rounded-[8px]">
            <div className="hidden sm:block sm:px-3 sm:py-6">
              <div className="bg-[#27292D] w-[48px] h-[48px] flex justify-center items-center rounded-full">
                <Image
                  src={emoji}
                  alt={emoji}
                  width={18}
                  height={18}
                />
              </div>
            </div>
            <div className="ml-2 max-w-md">
              {isEditing && author===username?
              <input
              type="text"
              value={inputContent}
              className="bg-transparent focus:outline-none w-full"
              maxLength={250}
              onChange={(e)=>setInputContent(e.target.value)}
            />:
            <p className="text-[14px] text-[#7F8084]">{content}</p>
              }
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-start mx-4 my-2 items-center">
              <Image
                src="/Chat_Bubble.png"
                alt="/Chat_Bubble.png"
                width={20}
                height={20}
              />
              <p className="text-[12px] text-[#7F8084] ml-2">{comments}</p>
            </div>
            
           {isEditing && author===username? <div className="flex flex-col items-end">
        <span className="mx-6">
      <p className="text-[12px] text-[#7F8084]">{inputContent.length}/50 characters</p>
      </span>
        <Button
          onClick={handleEdit}
          variant="solid"
          color="primary"
          radius="sm"
          className="mt-1 mr-5"
        >
          Post
        </Button>
      </div>: <span className="my-2 mx-6">
              <TimeAgo postDate={createdAt} />
            </span>}
          </div>
        </div>
  )
}

export default FeedPostsUi