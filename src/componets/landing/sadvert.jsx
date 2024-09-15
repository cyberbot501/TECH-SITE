import React from 'react'
import bdg from '../../assets/maxime-dore-ko5SsTuOwmY-unsplash 1.svg'

export default function sadvert() {
  return (
    <div className=' flex flex-col justify-center items-center h-[100%] px-[20px] md:px-0 :w-[100%] bg-[#171719] '>
        <img src={bdg} alt="" className='md:h-[800px] h-[300px] w-[100%] md:w-[100%]'/>
        <div className='relative md:bottom-[650px] flex flex-col gap-3 justify-center items-center bg-[#2C3436] rounded-[25px] px-[10px] md:px-0  w-[100%] md:w-[843px] h-[500px]'>
                    <h2 className='font-sans font-bold md:text-[54px]  text-center  text-[49px] text-white md:w-[556px]'>Experience the thrill of VR Gaming</h2>
                    <p className='font-sans text-[#9B9B9B] text-center  text-[20px] md:text-[26px] md:w-[476px] font-medium'>Play high performance virtual reality games, with real life simulated experience and 4k visuals.</p>
                    
                    

                        <button className='w-[170px] h-[49px] border-[1px] text-[#2C3436] bg-white border-[white] bg-transparent rounded-[21px] text-[17.5px] font-sans font-medium '>
                            Pre Order
                        </button>
                   
                </div>
    </div>
  )
}
