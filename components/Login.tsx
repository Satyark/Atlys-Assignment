import useSession from '@/hooks/useSession';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Login = () => {
  const {login} = useSession();
  const router = useRouter();
  const [name,setName] = useState('');
  const [passwordType, setPasswordType] = useState('password') 
  const handleClick=()=>{
    passwordType=='password'? setPasswordType('text') : setPasswordType('password');
  }
  const handleLogin=async ()=>{
    try {
      await login(name);
      router.push('/feed',undefined, { shallow: true })  

    } catch (error) { 
    }
  }
  return (
    <div>
      <div className='flex justify-center w-full my-10'>
      <Image src='/Shape.png' alt='/Shape.png' width={32} height={32} className='flex justify-center'/>
      </div>
      <div className="bg-[#27292D] p-5 rounded-lg shadow-lg max-w-sm w-[463px] border-[2px]">
        <div className="flex justify-center items-center mb-6 w-full mt-4">
          <div className="font-semibold">
            <h3 className="text-[#6B6C70] flex justify-center text-[12px]">WELCOME BACK</h3>
            <h1 className="text-white text-[16px] font-bold">Log into your account</h1>
          </div>
        </div>
          <div className='rounded-[4px] my-2'>
            <label htmlFor="email" className="block text-[#C5C7CA] text-[12px]">Email or Username</label>
            <input type="text" id="email" className="w-full p-2 mt-1 text-[#7F8084] text-[14px] bg-transparent border border-[#35373B] rounded-md" placeholder="Enter your email or username" onChange={e=>setName(e.target.value)} />
          </div>
          <div className='my-2'>
            <div className='flex justify-between items-center rounded-[4px]'>
            <label htmlFor="password" className="block text-[#C5C7CA] text-[12px]">Password</label>
            <a href="#" className="text-sm text-gray-400 text-[10px] hover:underline inline-block">Forgot password?</a>
            </div>
            <div className="flex items-center justify-between w-full p-2 m-[1.5px] text-[#7F8084] text-[14px] bg-transparent border border-[#35373B] rounded-md">
              <input type={passwordType} placeholder="Enter your password" className='bg-transparent focus:outline-none'/>
              <Image src='/Icon.svg' alt='/Icon.svg' width={18} height={14} className='cursor-pointer' onClick={handleClick}/>
            </div>
          </div>
          <button type="submit" className="mt-1 w-full bg-[#4A96FF] hover:opacity-80 transition duration-300 hover:transition text-white text-[14px] p-2 rounded-[4px]" onClick={handleLogin}>Login now</button>
          <div className="mt-2 text-left text-[14px] text-[#7F8084] mb-6">
          Not registered yet? <a href="#" className="text-white text-opacity-80 hover:underline">Register →</a>
        </div>  
      </div>
      </div>
  );
}


export default Login;