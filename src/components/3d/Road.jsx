import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Road(props) {
  const { nodes } = useGLTF('/models/road.glb')
  const roadRef = useRef()
      const shaderRef = useRef()
      const progressRef = useRef(0)

      // Load GLB model (replace 'spiral-road.glb' with your actual file path if testing locally)
      // const { nodes } = useGLTF(url || 'https://example.com/spiral-road.glb') // Placeholder URL

      useEffect(() => {
        if (!roadRef.current) return

        const geometry = nodes.road?.geometry || roadRef.current.geometry
        if (!geometry) {
          console.error('Geometry not found. Check nodes:', nodes)
          return
        }

        geometry.computeBoundingBox()
        const { min, max } = geometry.boundingBox
        const minY = min.y
        const maxY = max.y

        console.log('minY:', minY, 'maxY:', maxY) // Debug bounding box

        const customMaterial = new THREE.ShaderMaterial({
          uniforms: {
            minY: { value: minY },
            maxY: { value: maxY },
            progress: { value: 0 },
          },
          vertexShader: `
            uniform float minY;
            uniform float maxY;
            varying float vProgress;
            void main() {
              vProgress = (position.y - minY) / (maxY - minY);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float progress;
            varying float vProgress;
            void main() {
              if (vProgress > progress) discard;
              gl_FragColor = vec4(1.0, 0.5, 0.2, 1.0);
            }
          `,
          side: THREE.DoubleSide,
        })

        shaderRef.current = customMaterial
        roadRef.current.material = customMaterial
        roadRef.current.material.needsUpdate = true
      }, [nodes])

      useFrame((state, delta) => {
        if (shaderRef.current && progressRef.current < 1) {
          progressRef.current += delta * 0.5 // Adjust speed here
          if (progressRef.current > 1) progressRef.current = 1
          shaderRef.current.uniforms.progress.value = progressRef.current
          console.log('Progress:', progressRef.current) // Debug animation
        }
      })

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={roadRef}
        castShadow
        receiveShadow
        geometry={nodes.road.geometry}
        position={[0.26, 0, 0.19]}
        scale={[0.71, 0.951, 0.682]}
      />
    </group>
  )
}

useGLTF.preload('/models/road.glb');