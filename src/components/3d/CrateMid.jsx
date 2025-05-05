import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export default function CrateMid({ position }) {
  const rigidBodyRef = useRef();

  const handleHoverStart = () => {
    if (rigidBodyRef.current) {
      rigidBodyRef.current.applyImpulse({ x: 0, y: 1, z: 1 }, true);
    }
  };
  const { nodes, materials } = useGLTF('/models/crate.glb');

  return (
    <RigidBody ref={rigidBodyRef} position={position} colliders="hull">
      <group dispose={null} onClick={handleHoverStart} scale={0.35}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.CaretBody}
          scale={0.753}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials.Material}
            scale={1.584}
          />
        </mesh>
      </group>
    </RigidBody>
  );
}

useGLTF.preload('/models/crate.glb');
