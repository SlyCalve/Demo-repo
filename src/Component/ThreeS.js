'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './ThreeM';  


const ThreeS = () => {

  return (
    <Canvas style={{background: '' }} >
       <ambientLight intensity={0} />
       
       <pointLight position={[10, 10, 10]}/>
       
       <Suspense fallback={null}>
       <Model url="\newwebscene.glb" />
       <directionalLight animations={1} intensity={0} position={[0, 2, 3]}/>
       
     </Suspense>
     <OrbitControls autoRotate={true} />
     
    


    </Canvas>
  
  )

}


export default ThreeS
