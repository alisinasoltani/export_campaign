'use client'

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const AccordionLogo = ({ scale, ...props}) => {
  const { nodes, materials } = useGLTF('/models/accordion_logo.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Layer_001.geometry}
        material={materials['Material.001']}
        rotation={[0, 0, 2.356]}
        scale={scale}
      />
    </group>
  );
}

useGLTF.preload('/models/accordion_logo.glb');

export default AccordionLogo;