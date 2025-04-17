import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Service1(props) {
  const { nodes, materials } = useGLTF('/models/Service1.glb');
  return (
    <group {...props} dispose={null} scale={2}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0.179, 0.077, -0.197]} rotation={[-1.742, 0.572, -2.675]} scale={0.002}>
          <group
            position={[0, 77.381, 158.908]}
            rotation={[0.72, 0, 0]}
            scale={[6.977, 6.977, 93.025]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_Material003_0.geometry}
              material={materials['Material.013']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_Material004_0.geometry}
              material={materials['Material.012']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_Material002_0.geometry}
            material={materials['Material.015']}
            position={[0, 202.962, 15.716]}
            rotation={[-0.851, 0, 0]}
            scale={[100, 100, 10.294]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_Material001_0.geometry}
            material={materials['Material.014']}
            position={[0, 203.097, 15.835]}
            rotation={[-0.851, 0, 0]}
            scale={[96.393, 96.393, 7.159]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['0fe7b9f0-7982-4a6d-91cf-1f53dc1c7d99'].geometry}
        material={materials['0fe7b9f0-7982-4a6d-91cf-1f53dc1c7d99']}
        position={[0, -0.064, 0.208]}
        rotation={[1.994, 0.455, -2.368]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.003']}
        position={[0.211, 0.18, 0.207]}
        rotation={[0, 0.698, 0.611]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CurlyCurve002.geometry}
        material={materials.Connector}
        position={[0.334, -0.183, -0.051]}
        rotation={[-0.228, 0.544, 2.336]}
        scale={0.229}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials['Material.005']}
        position={[0.033, 0.114, -0.09]}
        rotation={[0, 0.698, 0.611]}
        scale={[0.006, 0.043, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials['Material.004']}
        position={[-0.028, 0.228, -0.039]}
        rotation={[0, 0.698, 0.611]}
        scale={[0.006, 0.043, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['Material.009']}
        position={[0.281, -0.273, -0.216]}
        rotation={[0, 0.698, 0.611]}
        scale={[0.006, 0.043, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Material.008']}
        position={[0.23, -0.178, -0.173]}
        rotation={[0, 0.698, 0.611]}
        scale={[0.006, 0.043, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Material.007']}
        position={[0.18, -0.083, -0.13]}
        rotation={[0, 0.698, 0.611]}
        scale={[0.006, 0.043, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.006']}
        position={[0.129, 0.012, -0.088]}
        rotation={[0, 0.698, 0.611]}
        scale={[0.006, 0.043, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.002']}
        position={[0.421, -0.157, 0.076]}
        rotation={[0, 0.698, 0.611]}
        scale={[0.008, 0.06, 0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.001']}
        position={[0.588, -0.071, 0.37]}
        rotation={[0, 0.698, 0.611]}
        scale={[0.01, 0.075, 0.113]}
      />
    </group>
  );
}

useGLTF.preload('/models/Service1.glb');