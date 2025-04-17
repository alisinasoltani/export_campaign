import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Service3(props) {
  const { nodes, materials } = useGLTF('/models/Service3.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TPW.geometry}
        material={materials.TPW}
        position={[0.344, -0.383, -1.037]}
        rotation={[1.994, 0.455, -2.368]}
        scale={4.336}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Idea.geometry}
        material={materials.Idea}
        position={[0.071, 0.888, 0.798]}
        rotation={[1.994, 0.455, -2.368]}
        scale={2.748}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.export_service_center.geometry}
        material={materials.export_service_center}
        position={[-0.256, -0.539, 0.786]}
        rotation={[1.994, 0.455, -2.368]}
        scale={3.555}
      />
    </group>
  );
}

useGLTF.preload('/models/Service3.glb');
