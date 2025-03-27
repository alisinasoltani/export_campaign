import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Earth_Low(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/earth_low_2.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="root" userData={{ name: 'root' }}>
          <group
            name="GLTF_SceneRootNode"
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: 'GLTF_SceneRootNode' }}>
            <group
              name="Sphere_2"
              rotation={[0, 0.721, 0]}
              scale={1.748}
              userData={{ name: 'Sphere_2' }}
            />
          </group>
        </group>
        <group name="root001" userData={{ name: 'root.001' }}>
          <group
            name="GLTF_SceneRootNode001"
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: 'GLTF_SceneRootNode.001' }}>
            <group
              name="Sphere_2001"
              rotation={[0, 0.721, 0]}
              scale={1.748}
              userData={{ name: 'Sphere_2.001' }}
            />
          </group>
        </group>
        <group name="root002" userData={{ name: 'root.002' }}>
          <group
            name="GLTF_SceneRootNode002"
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: 'GLTF_SceneRootNode.002' }}>
            <group
              name="Sphere_2002"
              rotation={[0, 0.721, 0]}
              scale={1.748}
              userData={{ name: 'Sphere_2.002' }}>
              <mesh
                name="Object_4"
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials['Material.003']}
                userData={{ name: 'Object_4' }}
              />
            </group>
          </group>
        </group>
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials.Material}
          rotation={[-0.447, -0.87, -0.485]}
          userData={{ name: 'Sphere' }}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/earth_low_2.glb')