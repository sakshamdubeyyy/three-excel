import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const MountModel = ({ data }) => {
  if (!data || data.length === 0) return null; // No data to render

  return (
    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {data.map((point, index) => (
        <mesh key={index} position={[point.x, point.y, point.z]}>
          <boxGeometry args={[5, 5, 5]} />  {/* Adjust size */}
          <meshStandardMaterial color={'blue'} />
        </mesh>
      ))}

      <OrbitControls />
    </Canvas>
  );
};

export default MountModel;
