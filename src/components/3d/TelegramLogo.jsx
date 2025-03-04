'use client'

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const TelegramLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/telegram_logo.glb');
  return (
    <group {...props} dispose={null}>
      <group position={[0, 3, 6]} rotation={[Math.PI / 2, 0, 0]} scale={0.843}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031.geometry}
          material={materials['glossy telegram']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031_1.geometry}
          material={materials['glossy putih.008']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/telegram_logo.glb');

export default TelegramLogo;
