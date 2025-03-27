'use client'

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const LinkLogo = ({ scale, ...props }) => {
  const { nodes, materials } = useGLTF('/models/link_logo.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Layer_001.geometry}
        material={materials['Material.001']}
        scale={scale}
      />
    </group>
  );
}

useGLTF.preload('/models/link_logo.glb');

export default LinkLogo;