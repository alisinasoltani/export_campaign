'use client'

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const WhatsappLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/whatsapp_logo.glb');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 3, 6]} scale={13.49}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials['glossy_putih.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.glossy_wa}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/whatsapp_logo.glb');

export default WhatsappLogo;