import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Container(props) {
  const { nodes, materials } = useGLTF('/models/container.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Container_container01textred_0.geometry}
        material={materials.container01textred}
        position={[0, 0.297, 0]}
        scale={0.002}
      />
    </group>
  );
}

useGLTF.preload('/models/container.glb');