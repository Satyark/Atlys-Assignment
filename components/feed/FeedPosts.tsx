import Image from 'next/image';
import { Post, posts} from '@/data';
import { User } from '@nextui-org/react';
import { useAppContext } from '@/hooks/useAppContext';
import FeedCard from './FeedCard';
import TimeAgo from './TimeAgo';

const FeedPosts = () => {
  const {postData} = useAppContext();
  return (
    <div className='justify-center items-center'>
     {(postData?.length ? [...postData].reverse() : []).map((post, i) => (
      // <FeedCard name={post.author} img={post.profile} time={post.time} content={post.content} comments={post.comments}/>
        <div className='sm:w-[700px] w-[350px] p-1 border-[2px] border-[#35373B] bg-[#27292D] rounded-[8px] mt-2' key={i}>
        <div className='flex justify-between items-center m-4'>
          <div className='flex justify-start w-[177px] h-[44px]'>
            <User name={post.author}
            description={post.time}
            avatarProps={{
              src: post.profile
            }} />
          </div>
          <button className='w-[16.33px] h-[8.5px] text-[#C5C7CA] mb-5'>...</button>
        </div>
        <div className='flex items-center sm:w-[660px] w-[310px] bg-[#191920] mx-3 rounded-[8px]'>
          <div className='hidden sm:block'>
          <div className='bg-[#27292D] w-[48px] h-[48px] flex justify-center items-center ml-4 mr-2 mt-3 mb-8 rounded-full'>
            <Image src={post.emoji} alt={post.emoji} width={18} height={18}/>
          </div>
          </div>
          <div className='ml-2 max-w-md'>
          <p className='text-[14px] text-[#7F8084]'>{post.content}</p> 
          </div>               
        </div>
        <div className='flex justify-between'>
        <div className='flex justify-start mx-4 my-2 items-center'>
          <Image src='/Chat_Bubble.png' alt='/Chat_Bubble.png' width={20} height={20}/>
          <p className='text-[12px] text-[#7F8084] ml-2'>{post.comments}</p>
        </div>
        <span className='my-2 mx-6'>
        <TimeAgo postDate={post.createdAt} />
        </span>
      </div>
      </div>
      ))}
    </div>
  )
}

export default FeedPosts;