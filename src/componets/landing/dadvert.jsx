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
        <SwiperSlide className='yes'>
          
         <Canvas className=' w-[100%] relative top-14'  style={{ height: "70vh"}}>
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
        
        <SwiperSlide className='yes'>
          
          <Canvas className=' w-[100%] relative top-14'  style={{ height: "70vh"}}>
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

         <SwiperSlide className='yes'>
          
         <Canvas className=' w-[100%] relative top-14'  style={{ height: "70vh"}}>
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
