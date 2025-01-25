import React from 'react'
import girl from '../assets/girl.svg'

export default function Login() {
  return (
    <div className='bg-[#171719] flex justify-center place-items-center content-center h-[100vh]'>
      <div className='w-[700px] h-[400px] rounded-[40px] bg-[#2C3436] shadow-2xl overflow-hidden flex flex-row gap-9 items-center justify-center'>
        <img src={girl} alt="" className='w-[400px] h-[500px]' />
        <form action="" className='flex flex-col justify-center items-center gap-5'>

          <h2 className='text-white text-[54px] font-bold'>Login</h2>

          <label htmlFor="">
            <p className='text-white text-[22px] font-semibold'>Username</p>
            <input type="text" name="" id="" className='w-[250px] h-[30px] rounded-[30px] shadow'/>
          </label>


          <label htmlFor="">
            <p className='text-white text-[22px] font-semibold'>Password</p>
            <input type="password" name="" id="" className='w-[250px] h-[30px] rounded-[30px] shadow'/>
          </label>

          <button className='w-[122px] h-[44px] bg-[#B0EF9A] rounded-[25px] text-[17.5px] font-sans font-medium text-[#171719] '>
            Login
      </button>
        </form>
      </div>
    </div>
   
  )
}
