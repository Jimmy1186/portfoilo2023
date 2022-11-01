import React, { Suspense, useRef } from 'react'
import { useGLTF,BakeShadows, OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { BufferGeometry } from 'three';

type modelType = {
    materials:any,
    nodes:{
        "Ak-47_Wood_ak-47_0":{geometry:BufferGeometry}
        "Ak-47_Metall_ak-47_0":{geometry:BufferGeometry}
    }
}


export function Model(props:any) {
    const { nodes, materials } = useGLTF('/models/ak-47/scene.gltf') as unknown as modelType
    const texture = useLoader(THREE.TextureLoader,'/models/DuckCM.png')

    if(!nodes['Ak-47_Wood_ak-47_0'] || !nodes['Ak-47_Metall_ak-47_0'] ||!nodes['Ak-47_Wood_ak-47_0'].geometry){
        return <>model broken</>
    }
    return (
        <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-90.68, -4.5, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={250}>
            <mesh geometry={nodes['Ak-47_Wood_ak-47_0'].geometry} material={materials['Wood_ak-47']} />
            <mesh geometry={nodes['Ak-47_Metall_ak-47_0'].geometry} material={materials['Metall_ak-47']} />
          </group>
        </group>
      </group>
    </group>
    )
  }







const Test = () => {

  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[2, -1, 5]} />
      <directionalLight color="white" position={[-2, 1, -5]} />
      <Suspense fallback={null}>
     <Model/>
     <BakeShadows />
    </Suspense>
    <OrbitControls autoRotate />
    </Canvas>
  );
};

export default Test;
