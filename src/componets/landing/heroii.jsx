import React, { useEffect } from "react";
import chero from "../../assets/Frame 3.svg";
import fhero from "../../assets/Untitled_design-removebg-preview.png";
import manager from '../../assets/Untitled.jpeg'
import sold from '../../assets/24K.svg'
import rating from '../../assets/Group 2.svg'
import { animate } from 'motion';

export default function Heroii() {
    useEffect(() => {
        animate(
          "#animated-images", 
          { 
            x: ["-100vw", "0"], 
            scale: [2, 1]      
          },
          { 
            easing: "ease-in-out", 
            duration: 1.5 
          }
        );
      }, []);
  return (
    <div className="bg-[#171719] flex flex-col md:flex-row-reverse justify-center md:justify-center overflow-hidden items-center ">
      <div className="flex flex-col gap-7 px-[84px] md:relative md:right-[146px] justify-center items-center">
        <h1 className="md:w-[688px] text-center md:text-left font-sans font-medium text-white text-[28px] md:text-[48px]">
          High resolution 4k graphics & optimum audio quality applied into Blaq
          VR-headset. High performance and a smooth experience all day long.
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 md:w-[665px] w-[320px] ">
          <div class="col-span-2 border-[1px] border-white bg-transparent h-[357px] flex flex-col justify-center items-center md:items-start md:px-20 gap-14    p-4">
            <h2 className="md:w-[579px] w-[300px] font-normal md:text-[24px] text-center md:text-start text-[20px] text-[white]">“Blaq VR-headset is embedded with a highly functional AI which increases the smoothness in experience. Blaq boosts in the creation of user friendly VR Headset”</h2>
            <div className="flex flex-row items-center gap-5">
                <img src={manager} alt="" className="h-[60px] rounded-[30px] w-[60px]"/>
                <div className="flex flex-col items-start">
                    <h2 className="text-[22px] text-white font-sans font-bold">Abdullah Veronza</h2>
                    <p className="text-[18px] text-[#C5C5C5] font-sans font-normal">Managing Director</p>
                </div>
            </div>
          </div>

          <div class="bg-transparent border-[1px] border-white h-[241px] border-l-transparent p-4 flex flex-col justify-center items-center gap-10">
                <img src={sold} alt="" className="w-[78px] h-[30px] md:w-[121px] md:h-[55px]"/>
                <h2 className="font-sans font-semibold text-[white] w-[80px] md:w-[400px] text-center text-[18px] md:text-[26px]">Product Sold</h2>
          </div>

          <div class="bg-transparent border-[1px] border-white h-[241px] border-l-transparent p-4 flex flex-col justify-center items-center gap-10">
                <img src={rating} alt="" className="w-[78px] h-[30px] md:w-[121px] md:h-[55px]"/>
                <h2 className="font-sans font-semibold text-[white] w-[100px] md:w-[400px] text-center text-[18px] md:text-[26px]">Customer Ratings</h2>
          </div>

         
        </div>
       
      </div>

      <img
        id="animated-images"
        src={fhero}
        alt=""
        className="md:w-[1163px] w-[100%] h-[100%] md:h-[1000px] relative  md:top-10 hidden md:block"
      />
    </div>
  );
}
