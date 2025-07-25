import React from 'react';
import { useGLTF } from '@react-three/drei';



const ThreeM = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1} />;
};

export default ThreeM;
