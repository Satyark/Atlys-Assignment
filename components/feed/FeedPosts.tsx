import { useAppContext } from "@/hooks/useAppContext";
import FeedPostsUi from "./FeedPostsUi";

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
