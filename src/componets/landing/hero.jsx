import React, { useEffect, useRef } from "react";
import chero from '../../assets/Frame 3.svg';
import fhero from '../../assets/clean and unobtrusive background for a sleek and minimalistic black VR headset 1.svg';
import { animate } from 'motion';
import shero from '../../assets/_93f83949-0b8a-4e86-b533-4ee7619ea472 1.svg';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls, Stats } from "@react-three/drei";
import { Model } from "../../model/headset/Scene";




export default function Hero() {

//     const containerRef = useRef(null);

//   useEffect(() => {
//     // Create Scene
//     const scene = new THREE.Scene();

//     // Create Camera
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 25;

//     // Create Renderer
//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     // Add Lights
//     const topLight = new THREE.DirectionalLight(0xffffff, 1);
//     topLight.position.set(500, 500, 500);
//     topLight.castShadow = true;
//     scene.add(topLight);

//     const ambientLight = new THREE.AmbientLight(0x333333, 5);
//     scene.add(ambientLight);

//     // Load 3D Model
//     const loader = new GLTFLoader();
//     let object;
//     loader.load(
//       `model/headset/scene.gltf`, // Example of a dino model, update path as needed
//       function (gltf) {
//         object = gltf.scene;
//         scene.add(object);
//       },
//       function (xhr) {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//       },
//       function (error) {
//         console.error(error);
//       }
//     );

//     // Camera Controls
//     const controls = new OrbitControls(camera, renderer.domElement);

//     // Handle window resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Clean up on unmount
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       containerRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

   
useEffect(() => {
  animate(
    "#animated-image",  // The ID for the image element
    { 
      x: ["100vw", "0"], // Start from off-screen (right) and move to its original position
      scale: [2, 1]      // Optional scaling if you want to scale as well
    },
    { 
      easing: "ease-in-out", // Ease in from the right and ease out as it reaches the final position
      duration: 1.5 // You can adjust the duration as needed
    }
  );
}, []);


  return (
    <>
    <div className='bg-[#171719] flex flex-col md:flex-row justify-center md:justify-center overflow-hidden items-center md:mt-[-120px]'>
      <div className='flex flex-col gap-7 px-[84px] md:relative left-[154px]'>
        <h1 className='md:w-[688px] w-[300px] text-center md:text-left font-sans font-semibold text-white text-[40px] md:text-[60px]'>
          Experience The Marvel of Virtual Reality
        </h1>
        <div className='flex flex-col gap-2 md:items-start items-center'>
          <p className='md:w-[430px] w-[300px] text-center md:text-left font-serif font-normal text-[21px] text-[#B8B8B8]'>
            Used and Trusted by thousands of individuals
          </p>
          <img src={chero} alt="" className='w-[194px] h-[44px]' />
        </div>
        <div className='flex flex-row gap-5 items-center'>
          <button className='w-[122px] h-[49px] bg-[#B0EF9A] rounded-[21px] text-[17.5px] font-sans font-medium text-[#171719]'>
            Buy Now
          </button>

          <button className='w-[170px] h-[49px] border-[1px] border-[white] bg-transparent rounded-[21px] text-[17.5px] font-sans font-medium text-[white]'>
            Learn More
          </button>
        </div>
      </div>

      <img
        id="animated-image"  // Adding ID for animation
        src={fhero}
        alt=""
        className='md:w-[1163px] w-[100%] h-[100%] md:h-[1000px]  relative md:right-[140px] md:top-10 hidden md:block'
      />

      {/* <img
      
        src={shero}
        alt=""
        className='md:w-[1163px] w-[100%] h-[100%] md:h-[1000px] relative md:right-52 md:top-10 md:hidden'
      /> */}



<Canvas className=' w-[100%] relative top-14 md:hidden' style={{ height: "70vh"}}>
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
    </div>

   
    </>
  );
}