'use client'

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const NightEarth2 = ({ scale, ...props }) => {
  const { nodes, materials } = useGLTF('/models/earth_night_high.glb');
  const earthRef = useRef(null);
  const startTime = useRef(Date.now());
  useFrame(() => {
    if(earthRef.current) {
        const elapsedTime = (Date.now() - startTime.current) / 1000;
        const progress = elapsedTime / 30;
        earthRef.current.rotation.y = Math.PI * 2 * progress;
        if (progress >= 1) {
            startTime.current = Date.now();
        }
    }
  });
  return (
    <group {...props} dispose={null}>
      <group scale={scale} ref={earthRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_Material001_0.geometry}
          material={materials['Material.001']}
          rotation={[-Math.PI / 2, 0, -0.262]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/earth_night_high.glb');

export default NightEarth2;