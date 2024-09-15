import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import game from '../../assets/Group.svg'
import girl from '../../assets/girl.svg'

export default function Advert() {
  return (
    <div className='bg-[#171719] py-20 md:px-[84px] px-[20px]'>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper border-[1px] border-[#171719] w-[100%] overflow-hidden h-[800px] md:w-[975px] md:h-[539px] rounded-[25px]"
      >
        <SwiperSlide className='bg-[#2C3436] rounded-[25px] overflow-hidden'>
            <div className='flex flex-col gap-5 md:gap-0 md:flex-row items-center'>
                <img src={girl} alt=""  className='md:w-[459px] w-[298px] h-[300px] md:h-[522px] md:relative top-10'/>
                <div className='flex flex-col gap-3 items-center  md:start '>
                    <img src={game} alt="" className='md:w-[60px] w-[45px] h-[20px] md:h-[45px]'/>
                    <h2 className='font-sans font-bold md:text-[54px] md:text-start w-[290px] text-center  text-[49px] text-white md:w-[476px]'>Experience the Vast Metaverse</h2>
                    <p className='font-sans text-[#9B9B9B] text-center md:text-start text-[20px] md:text-[26px] md:w-[476px] w-[290px] font-medium'>Explore the vast metaverse, unravel the marvelous details of the verse through our blaq VR-headset.</p>
                    <div className='flex flex-row gap-5 items-center'>
                        <button className='w-[122px] h-[49px] bg-[#B0EF9A] rounded-[21px] text-[17.5px] font-sans font-medium text-[#171719]'>
                            Buy Now
                        </button>

                        <button className='w-[170px] h-[49px] border-[1px] border-[white] bg-transparent rounded-[21px] text-[17.5px] font-sans font-medium text-[white]'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='bg-[#2C3436] rounded-[25px] overflow-hidden'>
            <div className='flex flex-col gap-5 md:gap-0 md:flex-row items-center'>
                <img src={girl} alt=""  className='md:w-[459px] w-[298px] h-[300px] md:h-[522px] md:relative top-10'/>
                <div className='flex flex-col gap-3 items-center  md:start '>
                    <img src={game} alt="" className='md:w-[60px] w-[45px] h-[20px] md:h-[45px]'/>
                    <h2 className='font-sans font-bold md:text-[54px] md:text-start w-[290px] text-center  text-[49px] text-white md:w-[476px]'>Experience the Vast Metaverse</h2>
                    <p className='font-sans text-[#9B9B9B] text-center md:text-start text-[20px] md:text-[26px] md:w-[476px] w-[290px] font-medium'>Explore the vast metaverse, unravel the marvelous details of the verse through our blaq VR-headset.</p>
                    <div className='flex flex-row gap-5 items-center'>
                        <button className='w-[122px] h-[49px] bg-[#B0EF9A] rounded-[21px] text-[17.5px] font-sans font-medium text-[#171719]'>
                            Buy Now
                        </button>

                        <button className='w-[170px] h-[49px] border-[1px] border-[white] bg-transparent rounded-[21px] text-[17.5px] font-sans font-medium text-[white]'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  )
}
