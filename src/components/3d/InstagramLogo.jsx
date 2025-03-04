'use client'

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const InstagramLogo = ({ scale, ...props}) => {
  const { nodes, materials } = useGLTF('/models/instagram_logo.glb');
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0.102, 0.053]}
        rotation={[-2.884, 0, -Math.PI / 2]}
        scale={[1, 0.092, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['Material.002']}
          position={[0.001, 1.301, 0.002]}
          rotation={[-Math.PI, 0.257, -Math.PI]}
          scale={[0.296, 0.403, 0.296]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials['Material.002']}
          position={[0.195, 1.193, 0.343]}
          rotation={[-Math.PI, 0.257, -Math.PI]}
          scale={[0.074, 0.233, 0.074]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials['Material.002']}
          position={[0.004, 1.692, -0.003]}
          rotation={[-Math.PI, 0.257, -Math.PI]}
          scale={[0.533, 5.793, 0.533]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/instagram_logo.glb');

export default  InstagramLogo;
