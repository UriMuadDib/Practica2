import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import { Line, OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';

function RouteLine() {
  // Define los puntos que formarán la línea (la ruta)
  const points = [
    new Vector3(0, 0, 0),  // Punto inicial (ajusta según el modelo)
    new Vector3(1, 2, 1),  // Un punto intermedio (ajusta según el modelo)
    new Vector3(3, 4, 0),  // Otro punto intermedio
    new Vector3(5, 5, -1)  // Punto final
  ];

  return (
    <Line
      points={points}       // Puntos de la línea
      color="blue"          // Color de la línea
      lineWidth={3}         // Grosor de la línea
      dashed={false}        // Línea continua
    />
  );
}

function Model() {
  // Carga el modelo .glb usando GLTFLoader
  const gltf = useLoader(GLTFLoader, 'Faro.glb');
  
  // Retorna el modelo cargado y ajusta la escala o posición si es necesario
  return <primitive object={gltf.scene} scale={0.5} position={[0, 0, 0]} />;
}

function ModelViewer() {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls />

      <Model />      {/* Renderiza el modelo .glb */}
      <RouteLine />  {/* Renderiza la línea sobre el modelo */}
    </Canvas>
  );
}

export default ModelViewer;
