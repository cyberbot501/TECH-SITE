import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../css/advert.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// import slide_image_1 from '../../assets/girl.svg';
import slide_image_2 from '../../assets/girl.svg';
import slide_image_3 from '../../assets/girl.svg';


import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls, Stats } from "@react-three/drei";
import { Model } from "../../model/headset/Scene";



// Swiper.use([EffectCoverflow, Pagination, Navigation]);


export default function Dadvert() {
  return (
    <div className="container bg-[#171719]" >
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className='yes bg-[#171719] '>
        <div className='w-[100%] h-[499px] bg-[#D9D9D910] shadow-2xl rounded-[30px]  relative top-[170px] flex flex-col justify-center items-center gap-5'>
          <div className='flex flex-col justify-center items-center'>  
              <h2 className='text-white'>Myriads Pro 3</h2>
              <p className='text-white'>$450</p>
          </div>

          <button className='w-[122px] h-[44px] bg-[#B0EF9A] rounded-[25px] text-[17.5px] font-sans font-medium text-[#171719] hidden md:block'>
        Buy Now
      </button>
        </div>
         <Canvas className=' w-[100%] relative bottom-[520px] '  style={{ height: "70vh"}}>
                 {/* <Environment preset="forest" /> */}
                 <ambientLight />
                 <Suspense fallback={null}>
                   <Model /> 
                 </Suspense>
                   {/* <ContactShadows position={[0.1, -1.3, 0]} color="#ffffff" /> */}
                 <spotLight
                   position={[10, 15, 10]}
                   intensity={0.5}
                   angle={0.1}
                   penumbra={1}
                   castShadow
                 />
                 <OrbitControls enablePan enableZoom enableRotate autoRotate />
                 {/* <axesHelper args={[5]} /> */}
                 <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
               {/* <primitive object={/gltf.scene} position={[0, 1, 0]} /> */}
                 
               </Canvas>

               
        </SwiperSlide>
        
        <SwiperSlide className='yes bg-[#171719]'>
        <div className='w-[100%] h-[499px] bg-[#D9D9D9] shadow-2xl bg-[#00000090] rounded-[30px]  relative top-[170px] flex flex-col justify-center items-center gap-5'>
          <div className='flex flex-col justify-center items-center'>  
              <h2 className='text-white'>Myriads Pro 3</h2>
              <p className='text-white'>$450</p>
          </div>

          <button className='w-[122px] h-[44px] bg-[#B0EF9A] rounded-[25px] text-[17.5px] font-sans font-medium text-[#171719] hidden md:block'>
        Buy Now
      </button>
        </div>
         <Canvas className=' w-[100%] relative bottom-[520px] '  style={{ height: "70vh"}}>
                 {/* <Environment preset="forest" /> */}
                 <ambientLight />
                 <Suspense fallback={null}>
                   <Model /> 
                 </Suspense>
                   {/* <ContactShadows position={[0.1, -1.3, 0]} color="#ffffff" /> */}
                 <spotLight
                   position={[10, 15, 10]}
                   intensity={0.5}
                   angle={0.1}
                   penumbra={1}
                   castShadow
                 />
                 <OrbitControls enablePan enableZoom enableRotate autoRotate />
                 {/* <axesHelper args={[5]} /> */}
                 <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
               {/* <primitive object={/gltf.scene} position={[0, 1, 0]} /> */}
                 
               </Canvas>

               
        </SwiperSlide>

        <SwiperSlide className='yes bg-[#171719]'>
        <div className='w-[100%] h-[499px] bg-[#D9D9D9] shadow-2xl bg-[#00000090] rounded-[30px]  relative top-[170px] flex flex-col justify-center items-center gap-5 '>
          <div className='flex flex-col justify-center items-center'>  
              <h2 className='text-white'>Myriads Pro 3</h2>
              <p className='text-white'>$450</p>
          </div>

          <button className='w-[122px] h-[44px] bg-[#B0EF9A] rounded-[25px] text-[17.5px] font-sans font-medium text-[#171719] hidden md:block'>
        Buy Now
      </button>
        </div>
         <Canvas className=' w-[100%] relative bottom-[520px] '  style={{ height: "70vh"}}>
                 {/* <Environment preset="forest" /> */}
                 <ambientLight />
                 <Suspense fallback={null}>
                   <Model /> 
                 </Suspense>
                   {/* <ContactShadows position={[0.1, -1.3, 0]} color="#ffffff" /> */}
                 <spotLight
                   position={[10, 15, 10]}
                   intensity={0.5}
                   angle={0.1}
                   penumbra={1}
                   castShadow
                 />
                 <OrbitControls enablePan enableZoom enableRotate autoRotate />
                 {/* <axesHelper args={[5]} /> */}
                 <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
               {/* <primitive object={/gltf.scene} position={[0, 1, 0]} /> */}
                 
               </Canvas>

               
        </SwiperSlide>

        


        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}
