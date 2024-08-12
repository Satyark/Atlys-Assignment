import React, { useState } from 'react';
import Image from 'next/image';


const FeedPosts = () => {
    
  return (
    <div>
        <div className='w-[700px] h-[223px] border-[2px] border-[#35373B] bg-[#27292D] rounded-[8px] mt-2'>
              <div className='flex justify-between items-center m-4'>
                <div className='flex justify-start w-[177px] h-[44px]'>
                    <Image src='/girl.png' alt='/girl.png' width={44} height={44} className='rounded-full object-cover' />
                    <div className='mx-2'>
                        <p className='text-[#C5C7CA] text-[14px]'>Theresa Webb</p>
                        <p className='text-[#7F8084] text-[12px]'>5mins ago</p>
                    </div>
                </div>
                <button className='w-[16.33px] h-[8.5px] text-[#C5C7CA] mb-5'>...</button>
              </div>
              <div className='flex items-center w-[660px] h-[107px] bg-[#191920] mx-3 rounded-[8px]'>
                <div className='bg-[#27292D] w-[48px] h-[48px] flex justify-center items-center ml-4 mr-2 mt-3 mb-8 rounded-full'>
                  <Image src='/hand.png' alt='/hand.png' width={18} height={18}/>
                </div>
                <div className='ml-2 max-w-md'>
                <p className='text-[14px] text-[#7F8084]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> 
                </div>               
              </div>
              <div className='flex justify-start mx-4 my-2'>
                <Image src='/Chat_Bubble.png' alt='/Chat_Bubble.png' width={20} height={20}/>
                <p className='text-[12px] text-[#7F8084] ml-2'>24 comments</p>
              </div>
            </div>


            <div className='w-[700px] h-[223px] border-[2px] border-[#35373B] bg-[#27292D] rounded-[8px] mt-2'>
              <div className='flex justify-between items-center m-4'>
                <div className='flex justify-start w-[177px] h-[44px]'>
                    <Image src='/baldguy.png' alt='/baldguy.png' width={44} height={44} className='rounded-full' />
                    <div className='mx-2'>
                        <p className='text-[#C5C7CA] text-[14px]'>Marvin McKinney</p>
                        <p className='text-[#7F8084] text-[12px]'>8mins ago • Edited</p>
                    </div>
                </div>
                <button className='w-[16.33px] h-[8.5px] text-[#C5C7CA] mb-5'>...</button>
              </div>
              <div className='flex items-center w-[660px] h-[107px] bg-[#191920] mx-3 rounded-[8px]'>
                <div className='bg-[#27292D] w-[48px] h-[48px] flex justify-center items-center ml-4 mr-2 mt-3 mb-8 rounded-full'>
                  <Image src='/sad.png' alt='/sad.png' width={18} height={18}/>
                </div>
                <div className='ml-2 max-w-md'>
                <p className='text-[14px] text-[#7F8084]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> 
                </div>               
              </div>
              <div className='flex justify-start mx-4 my-2'>
                <Image src='/Chat_Bubble.png' alt='/Chat_Bubble.png' width={20} height={20}/>
                <p className='text-[12px] text-[#7F8084] ml-2'>24 comments</p>
              </div>
            </div>
    </div>
  )
}

export default FeedPosts;