import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ChatBubble(props) {
  const { nodes, materials } = useGLTF('/models/ChatBubbles.glb')
  return (
    <group {...props} dispose={null} scale={0.5}>
      <group
        position={[-0.737, 3.812, 2.159]}
        rotation={[Math.PI, -0.272, Math.PI]}
        scale={[0.722, 0.734, 0.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials['Material.001']}
        />
      </group>
      <group
        position={[1.79, 1.889, 1.563]}
        rotation={[Math.PI, -0.389, Math.PI]}
        scale={[0.868, 0.848, 0.465]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0001.geometry}
          material={materials['.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0001_1.geometry}
          material={materials['.005']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/ChatBubbles.glb');
