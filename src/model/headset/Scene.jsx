/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 ./scene.gltf --transform 
Files: ./scene.gltf [29.17KB] > /home/cyberbot501/tech-site/src/model/headset/scene-transformed.glb [270.19KB] (-826%)
Author: BlackCube (https://sketchfab.com/blackcube4)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/oculus-quest-vr-headset-0d6c1d6aa3f747a5b35f8105ed585418
Title: Oculus Quest VR Headset
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null} scale={20}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Quest_Front} position={[0, 0.009, -0.043]} rotation={[Math.PI / 2, 0, 0]} scale={0.031} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.PaletteMaterial001} position={[0, 0.009, -0.043]} rotation={[Math.PI / 2, 0, 0]} scale={0.031} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Quest_Foam} position={[0, 0.009, -0.043]} rotation={[Math.PI / 2, 0, 0]} scale={0.031} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.Quest_Headstrap} position={[0, 0.009, -0.043]} rotation={[Math.PI / 2, 0, 0]} scale={0.031} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.PaletteMaterial002} position={[0, 0.009, -0.043]} rotation={[Math.PI / 2, 0, 0]} scale={0.031} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.Quest_Kamera} position={[0, 0.009, -0.043]} rotation={[Math.PI / 2, 0, 0]} scale={0.031} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.Quest_Screen} position={[0, 0.009, -0.043]} rotation={[Math.PI / 2, 0, 0]} scale={0.031} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.Quest_Linsen} position={[0, 0.009, -0.043]} rotation={[Math.PI / 2, 0, 0]} scale={0.031} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
