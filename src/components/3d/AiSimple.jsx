import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function AiSimple(props) {
  const { nodes, materials } = useGLTF('/models/AI_Simple.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        rotation={[0, 0, -Math.PI]}
        scale={[-1, -1, -0.086]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials['Material.001']}
        position={[0, -0.037, 0.106]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials['Material.002']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.827}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={materials['Material.003']}
        rotation={[2.175, 0, 0]}
        scale={2.455}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry}
        material={materials['Material.004']}
        rotation={[Math.PI / 2, 0, 0.474]}
        scale={3.083}
      />
    </group>
  )
}

useGLTF.preload('/models/AI_Simple.glb')
