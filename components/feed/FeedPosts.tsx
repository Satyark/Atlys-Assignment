import Image from "next/image";
import { Post, posts } from "@/data";
import { Button, User } from "@nextui-org/react";
import { useAppContext } from "@/hooks/useAppContext";
import FeedCard from "./FeedCard";
import TimeAgo from "./TimeAgo";
import DropdownButton from "./Dropdown";
import { useState } from "react";
import FeedPostsUi from "./FeedPostsUi";
import { profile } from "console";

const FeedPosts = ({username} :{username:string}) => {
  const { postData } = useAppContext();
  
  
  return (
    <div className="justify-center items-center">
      {(postData?.length ? [...postData].reverse() : []).map((post, i) => (
        <FeedPostsUi
        id={post.id}
        author={post.author}
        time={post.time}
        profile={post.profile}
        emoji={post.emoji}
        content={post.content}
        comments={post.comments}
        createdAt={post.createdAt}
        username={username}
        />
      
      ))}
    </div>
  );
};

export default FeedPosts;
