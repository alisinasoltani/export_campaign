'use client'

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const QuestionLogo = ({ scale, ...props }) => {
  const { nodes, materials } = useGLTF('/models/question_logo.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials['Material.001']}
        rotation={[(Math.PI / 2)+0.02, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Material.002']}
          position={[-0.011, 0.026, 0.207]}
          scale={-0.063 * scale}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/question_logo.glb');

export default QuestionLogo;