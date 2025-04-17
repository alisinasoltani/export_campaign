import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Chat(props) {
  const { nodes, materials } = useGLTF('/models/chat.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mobilephone005.geometry}
        material={materials.arseetsmat_C}
        position={[0.506, 1.426, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.thumbdown003.geometry}
        material={materials.arseetsmat_C}
        position={[0.13, 0.972, 0.38]}
        rotation={[0, 0, -2.864]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.thumbup003.geometry}
        material={materials.arseetsmat_C}
        position={[0.276, 0.891, 0.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bookmark_Star003.geometry}
        material={materials.arseetsmat_C}
        position={[-0.349, 1.415, 0]}
        scale={1.991}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Chat-Bubble003'].geometry}
        material={materials.arseetsmat_C}
        position={[-0.588, 1.305, 0.404]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Chat-Bubble-2003'].geometry}
        material={materials.arseetsmat_C}
        position={[0.623, 0.925, 0]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plus003.geometry}
        material={materials.arseetsmat_C}
        position={[-0.072, 1.305, 0]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Star003.geometry}
        material={materials.arseetsmat_C}
        position={[0.748, 0.935, -0.216]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ttash_Bin004.geometry}
        material={materials.arseetsmat_C}
        position={[-1.316, 1.238, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Chat-Bubble004'].geometry}
        material={materials['Material.001']}
        position={[0.356, 1.163, 0]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Chat-Bubble-2004'].geometry}
        material={materials['Material.001']}
        position={[0.235, 1.503, 0]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plus004.geometry}
        material={materials['Material.001']}
        position={[0.735, 1.305, 0.338]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ttash_Bin005.geometry}
        material={materials['Material.001']}
        position={[0.967, 1.319, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Chat-Bubble005'].geometry}
        material={materials.arseetsmat_C}
        position={[-0.072, -0.462, 0]}
        scale={0.168}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Chat-Bubble-2005'].geometry}
        material={materials.arseetsmat_C}
        position={[-1.457, -0.304, 0]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plus005.geometry}
        material={materials.arseetsmat_C}
        position={[0.655, -0.897, 0]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ttash_Bin006.geometry}
        material={materials.arseetsmat_C}
        position={[0.888, -0.884, -0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mobilephone006.geometry}
        material={materials['Material.001']}
        position={[-1.101, -0.631, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.thumbdown004.geometry}
        material={materials['Material.001']}
        position={[-0.905, -0.632, -0.147]}
        rotation={[0, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.thumbup004.geometry}
        material={materials['Material.001']}
        position={[-0.692, -0.702, -0.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Chat-Bubble-2006'].geometry}
        material={materials['Material.001']}
        position={[-0.197, -0.842, 0]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Star004.geometry}
        material={materials['Material.001']}
        position={[-0.35, -0.59, 0.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Star005.geometry}
        material={materials.arseetsmat_C}
        position={[1.122, -0.348, -0.267]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Star006.geometry}
        material={materials['Material.001']}
        position={[-1.354, 0.384, 0.345]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ttash_Bin007.geometry}
        material={materials.arseetsmat_C}
        position={[1.405, -0.014, -0.265]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mobilephone007.geometry}
        material={materials.arseetsmat_C}
        position={[1.282, 0.29, -0.463]}
        rotation={[0, 1.483, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.thumbdown005.geometry}
        material={materials.arseetsmat_C}
        position={[0.847, 1.053, -0.426]}
        rotation={[0, 1.483, -2.864]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Chat-Bubble-2007'].geometry}
        material={materials.arseetsmat_C}
        position={[1.167, 0.608, 0.067]}
        rotation={[0.044, 0.159, 0.16]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plus006.geometry}
        material={materials.arseetsmat_C}
        position={[-0.897, 1.386, -0.519]}
        rotation={[0, 1.483, 0]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Star007.geometry}
        material={materials.arseetsmat_C}
        position={[1.292, 0.618, -0.148]}
        rotation={[0.044, 0.159, 0.16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Chat-Bubble006'].geometry}
        material={materials['Material.001']}
        position={[-1.349, 0.597, 0.262]}
        rotation={[0, 1.483, 0]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Chat-Bubble-2008'].geometry}
        material={materials['Material.001']}
        position={[-1.535, 0.312, 0.019]}
        rotation={[0, 1.483, 0]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ttash_Bin008.geometry}
        material={materials['Material.001']}
        position={[0.877, 0.522, -0.561]}
        rotation={[0, 1.483, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mobilephone001.geometry}
        material={materials.arseetsmat_C}
        position={[0.543, -0.007, 0]}
        rotation={[0, 0, 0.313]}
        scale={7}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bookmark_Star001.geometry}
          material={materials.arseetsmat_C}
          position={[-0.017, 0.009, 0.028]}
          scale={0.064}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Chat-Bubble-2001'].geometry}
          material={materials.arseetsmat_C}
          position={[0.025, 0.027, 0.032]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.143}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Chat-Bubble001'].geometry}
          material={materials.arseetsmat_C}
          position={[-0.019, 0.052, 0.038]}
          scale={0.014}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.arseetsmat_C}
          position={[0, -0.022, 0.023]}
          scale={[0.143, 0.232, 0.013]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.arseetsmat_C}
          position={[0, 0.033, 0.023]}
          scale={[0.143, 0.143, 0.013]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mobilephone002.geometry}
          material={materials.arseetsmat_C}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plus001.geometry}
          material={materials.arseetsmat_C}
          position={[0.043, -0.057, 0.028]}
          scale={0.006}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Star001.geometry}
          material={materials.arseetsmat_C}
          position={[-0.003, 0.01, 0.029]}
          scale={0.055}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.thumbdown001.geometry}
          material={materials.arseetsmat_C}
          position={[0.018, -0.058, 0.03]}
          rotation={[0, 0, -Math.PI]}
          scale={0.064}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.thumbup001.geometry}
          material={materials.arseetsmat_C}
          position={[0.004, -0.056, 0.03]}
          scale={0.064}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ttash_Bin001.geometry}
          material={materials.arseetsmat_C}
          position={[0.031, -0.057, 0.029]}
          rotation={[0.035, -0.031, -0.42]}
          scale={0.053}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mobilephone003.geometry}
        material={materials['Material.001']}
        position={[-0.559, 0.316, 0]}
        rotation={[0, 0, 0.313]}
        scale={7}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bookmark_Star002.geometry}
          material={materials['Material.001']}
          position={[-0.017, 0.009, 0.028]}
          scale={0.064}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Chat-Bubble-2002'].geometry}
          material={materials['Material.001']}
          position={[0.025, 0.027, 0.032]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.143}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Chat-Bubble002'].geometry}
          material={materials['Material.001']}
          position={[-0.019, 0.052, 0.038]}
          scale={0.014}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['Material.001']}
          position={[0, -0.022, 0.023]}
          scale={[0.143, 0.232, 0.013]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['Material.001']}
          position={[0, 0.033, 0.023]}
          scale={[0.143, 0.143, 0.013]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mobilephone004.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plus002.geometry}
          material={materials['Material.001']}
          position={[0.043, -0.057, 0.028]}
          scale={0.006}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Star002.geometry}
          material={materials['Material.001']}
          position={[-0.003, 0.01, 0.029]}
          scale={0.055}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.thumbdown002.geometry}
          material={materials['Material.001']}
          position={[0.018, -0.058, 0.03]}
          rotation={[0, 0, -Math.PI]}
          scale={0.064}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.thumbup002.geometry}
          material={materials['Material.001']}
          position={[0.004, -0.056, 0.03]}
          scale={0.064}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ttash_Bin003.geometry}
          material={materials['Material.001']}
          position={[0.031, -0.057, 0.029]}
          rotation={[0.035, -0.031, -0.42]}
          scale={0.053}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/chat.glb');