import React, { Suspense } from "react"
import './App.css';
import Scene from "./Component/ThreeS";
//import { Canvas } from '@react-three/fiber';
import styled from "styled-components";
const CanvasContainer = styled.div`
width: 670px;
height: 850px; 
margin: 50px;
margin-top: 76px;
`;

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <CanvasContainer>
        <directionalLight intensity={1} position={[6, 2, 3]}/>
        <Suspense fallback={null}>
       <Scene/>
         </Suspense>
       </CanvasContainer>

      </header>
     
      
     
    </div>
  );
}

export default App;
