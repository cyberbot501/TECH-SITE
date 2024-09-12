import React from 'react'
import chero from '../../assets/Frame 3.svg'
import fhero from '../../assets/clean and unobtrusive background for a sleek and minimalistic black VR headset 1.svg'

export default function hero() {
  return (
    <div className='bg-[#171719] flex flex-col md:flex-row justify-center md:justify-between overflow-hidden items-center'>
        <div className='flex flex-col gap-7 px-[84px] md:px-[0px] md:pl-[84px]'>
            <h1 className='md:w-[688px] w-[300px] text-center md:text-left font-sans font-semibold text-white text-[40px] md:text-[60px]'>Experience The Marvel of  Virtual Reality</h1>
            <div className='flex flex-col gap-2 items-center'>
                <p className='md:w-[430px] w-[300px] text-center md:text-left font-serif font-normal text-[21px] text-[#B8B8B8]'>Used and Trusted by thousands of individuals</p>
                <img src={chero} alt="" className='w-[194px] h-[44px]'/>
            </div>
            <div className='flex flex-row gap-5 items-center'>
                <button className='w-[122px] h-[49px] bg-[#B0EF9A] rounded-[21px] text-[17.5px] font-sans font-medium text-[#171719]'>
                    Buy Now
                </button>

                <button className='w-[170px] h-[49px] border-[1px] border-[white] bg-transparent rounded-[21px] text-[17.5px] font-sans font-medium text-[white]'>
                    Buy Now
                </button>
            </div>

        </div>

        <img src={fhero} alt="" className='md:w-[1163px] w-[100%] h-[100%] md:h-[1000px] relative md:right-52 md:top-10'/>
    </div>
  )
}
