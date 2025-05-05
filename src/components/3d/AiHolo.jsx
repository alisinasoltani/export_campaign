import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function AiHolo(props) {
  const { nodes, materials } = useGLTF('/models/Ai_holo4.glb')
  const aiRef = useRef();
  useFrame((state, delta) => {
    if (aiRef.current) {
      aiRef.current.rotation.y += 0.0025;
      // earthRef.current.rotation.y += delta;
    }
  });
  return (
    <group {...props} dispose={null} ref={aiRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials['Material.001']}
        position={[0, 0.164, -0.025]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.396}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['2'].geometry}
        material={materials.Particle_1}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['4'].geometry}
        material={materials.Particle_2}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['6'].geometry}
        material={materials['Material.003']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/Ai_holo4.glb')