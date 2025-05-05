'use client'
import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useFrame } from "@react-three/fiber";

export default function ValueChain(props) {
  const group = useRef();
  const earthRef = useRef();
  const { nodes, materials, animations } = useGLTF('/models/chain_static.glb');
  const { actions } = useAnimations(animations, group);
  const material = materials['Material.001']
  const progressRef = useRef(0)
  const shaderRef = useRef(null)

  useEffect(() => {
    material.onBeforeCompile = (shader) => {
      // Add progress uniform
      shader.uniforms.progress = { value: 0 }

      // Modify vertex shader to pass UV coordinates
      shader.vertexShader = `
        varying vec2 vUv;
        ${shader.vertexShader}
      `
      shader.vertexShader = shader.vertexShader.replace(
        'void main() {',
        'void main() {\n  vUv = uv;'
      )

      // Modify fragment shader to use progress and vUv
      shader.fragmentShader = `
        uniform float progress;
        varying vec2 vUv;
        ${shader.fragmentShader}
      `
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <clipping_planes_fragment>',
        `
        if (vUv.x > progress) discard;
        #include <clipping_planes_fragment>
        `
      )
      shaderRef.current = shader
    }
    material.needsUpdate = true
  }, [material])
  
  useFrame((state, delta) => {
    if (progressRef.current < 1) {
      progressRef.current += delta * 0.3
      if (progressRef.current > 1) progressRef.current = 1
    }
    if (shaderRef.current) {
      shaderRef.current.uniforms.progress.value = progressRef.current
    }
  });

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });
  
  useGSAP(() => {
    if (group.current) {
      const initialY = -5;
      gsap.to(group.current.position, {
        x: initialY + 4,
        duration: 7,
        ease: 'power2.out',
        repeat: 0, // Play once
      });
    }
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group ref={earthRef} name="Earth" rotation={[0, 0.721, 0]} scale={1.748}>
          <mesh
            name="Object_4"
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials['Material.002']}
            position={[0, 1, 0]}
            scale={0.905}
          />
        </group>
        <mesh
          name="road"
          castShadow
          receiveShadow
          geometry={nodes.road.geometry}
          material={material}
          position={[29.48, 0, 0.19]}
          scale={[0.71, 0.951, 0.682]}
        />
        <mesh
          name="Box"
          castShadow
          receiveShadow
          geometry={nodes.Box.geometry}
          material={materials.Box}
          position={[0.252, 0.096, 9.638]}
          rotation={[-2.877, -0.979, -3.01]}
          scale={[0.081, 0.051, 0.051]}
        />
        <mesh
          name="AmIReadyToExport?"
          castShadow
          receiveShadow
          geometry={nodes['AmIReadyToExport?'].geometry}
          material={materials.Rod_Blue}
          position={[0.651, 0.163, 9.581]}
          scale={[0.059, 0.112, 0.059]}>
          <mesh
            name="BézierCircle"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle.geometry}
            material={materials.Rod_Blue}
            position={[0.005, -1.335, 0.014]}
            scale={[1.126, 0.592, 1.126]}
          />
          <mesh
            name="BézierCircle002"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle002.geometry}
            material={materials.Rod_Blue}
            position={[0.005, -1.335, 0.014]}
            scale={[0.693, 0.365, 0.693]}
          />
          <mesh
            name="Plane001"
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials.Paper}
            position={[0, 0.83, 0]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.537, 2.212, 0.424]}
          />
          <mesh
            name="Text"
            castShadow
            receiveShadow
            geometry={nodes.Text.geometry}
            material={materials.Text}
            position={[-1.397, 0.83, -0.688]}
            rotation={[Math.PI / 2, 0, 0.492]}
            scale={[0.253, 0.253, 0.133]}
          />
        </mesh>
        <mesh
          name="IdentifyingMyTargetMarket"
          castShadow
          receiveShadow
          geometry={nodes.IdentifyingMyTargetMarket.geometry}
          material={materials.Rod_Green}
          position={[2.261, 0.163, 8.384]}
          rotation={[Math.PI, -0.09, Math.PI]}
          scale={[0.059, 0.112, 0.059]}>
          <mesh
            name="BézierCircle004"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle004.geometry}
            material={materials.Rod_Green}
            position={[0.005, -1.335, 0.014]}
            scale={[1.12, 0.589, 1.12]}
          />
          <mesh
            name="BézierCircle005"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle005.geometry}
            material={materials.Rod_Green}
            position={[0.005, -1.335, 0.014]}
            scale={[0.693, 0.365, 0.693]}
          />
          <mesh
            name="Plane003"
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials.Paper}
            position={[0, 0.83, 0]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.537, 2.212, 0.424]}
          />
          <mesh
            name="Text002"
            castShadow
            receiveShadow
            geometry={nodes.Text002.geometry}
            material={materials.Text}
            position={[-1.357, 0.83, -0.762]}
            rotation={[Math.PI / 2, 0, -2.649]}
            scale={[0.216, 0.216, 0.113]}
          />
        </mesh>
        <mesh
          name="DevelopingMyExportMarketingStrategy"
          castShadow
          receiveShadow
          geometry={nodes.DevelopingMyExportMarketingStrategy.geometry}
          material={materials.Rod_Yellow}
          position={[2.568, 0.163, 7.571]}
          rotation={[Math.PI, -0.356, Math.PI]}
          scale={[0.059, 0.112, 0.059]}>
          <mesh
            name="BézierCircle006"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle006.geometry}
            material={materials.Rod_Yellow}
            position={[0.005, -1.335, 0.014]}
            scale={[1.12, 0.589, 1.12]}
          />
          <mesh
            name="BézierCircle007"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle007.geometry}
            material={materials.Gold}
            position={[0.005, -1.335, 0.014]}
            scale={[0.693, 0.365, 0.693]}
          />
          <mesh
            name="Plane004"
            castShadow
            receiveShadow
            geometry={nodes.Plane004.geometry}
            material={materials.Paper}
            position={[0, 0.83, 0]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.537, 2.212, 0.424]}
          />
          <mesh
            name="Text003"
            castShadow
            receiveShadow
            geometry={nodes.Text003.geometry}
            material={materials.Text}
            position={[-1.361, 0.869, -0.753]}
            rotation={[Math.PI / 2, 0, -2.649]}
            scale={[0.279, 0.279, 0.147]}
          />
        </mesh>
        <mesh
          name="EnteringATargetMarket"
          castShadow
          receiveShadow
          geometry={nodes.EnteringATargetMarket.geometry}
          material={materials.Rod_Purple}
          position={[2.693, 0.163, 6.824]}
          rotation={[Math.PI, -0.879, Math.PI]}
          scale={[0.059, 0.112, 0.059]}>
          <mesh
            name="BézierCircle008"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle008.geometry}
            material={materials.Rod_Purple}
            position={[0.005, -1.335, 0.014]}
            scale={[1.12, 0.589, 1.12]}
          />
          <mesh
            name="BézierCircle009"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle009.geometry}
            material={materials.Rod_Purple}
            position={[0.005, -1.335, 0.014]}
            scale={[0.693, 0.365, 0.693]}
          />
          <mesh
            name="Plane005"
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials.Paper}
            position={[0, 0.83, 0]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.537, 2.212, 0.424]}
          />
          <mesh
            name="Text004"
            castShadow
            receiveShadow
            geometry={nodes.Text004.geometry}
            material={materials.Text}
            position={[-1.337, 0.85, -0.737]}
            rotation={[Math.PI / 2, 0, -2.649]}
            scale={[0.256, 0.256, 0.135]}
          />
        </mesh>
        <mesh
          name="DeleveringMyGoods"
          castShadow
          receiveShadow
          geometry={nodes.DeleveringMyGoods.geometry}
          material={materials.Rod_Green}
          position={[1.752, 0.163, 6.023]}
          rotation={[Math.PI, -0.847, Math.PI]}
          scale={[0.059, 0.112, 0.059]}>
          <mesh
            name="BézierCircle010"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle010.geometry}
            material={materials.Rod_Green}
            position={[0.005, -1.335, 0.014]}
            scale={[1.12, 0.589, 1.12]}
          />
          <mesh
            name="BézierCircle011"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle011.geometry}
            material={materials.Rod_Green}
            position={[0.005, -1.335, 0.014]}
            scale={[0.693, 0.365, 0.693]}
          />
          <mesh
            name="Plane006"
            castShadow
            receiveShadow
            geometry={nodes.Plane006.geometry}
            material={materials.Paper}
            position={[0, 0.83, 0]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.537, 2.212, 0.424]}
          />
          <mesh
            name="Text005"
            castShadow
            receiveShadow
            geometry={nodes.Text005.geometry}
            material={materials.Text}
            position={[-1.356, 0.83, -0.763]}
            rotation={[Math.PI / 2, 0, -2.649]}
            scale={[0.345, 0.345, 0.181]}
          />
        </mesh>
        <mesh
          name="FinancingMyExports"
          castShadow
          receiveShadow
          geometry={nodes.FinancingMyExports.geometry}
          material={materials.Rod_Yellow}
          position={[0.31, 0.163, 5.767]}
          rotation={[0, -1.443, 0]}
          scale={[0.059, 0.112, 0.059]}>
          <mesh
            name="BézierCircle012"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle012.geometry}
            material={materials.Rod_Yellow}
            position={[0.005, -1.335, 0.014]}
            scale={[1.12, 0.589, 1.12]}
          />
          <mesh
            name="BézierCircle013"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle013.geometry}
            material={materials.Rod_Yellow}
            position={[0.005, -1.335, 0.014]}
            scale={[0.693, 0.365, 0.693]}
          />
          <mesh
            name="Plane007"
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials.Paper}
            position={[0, 0.83, 0]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.537, 2.212, 0.424]}
          />
          <mesh
            name="Text006"
            castShadow
            receiveShadow
            geometry={nodes.Text006.geometry}
            material={materials.Text}
            position={[-1.356, 0.83, -0.763]}
            rotation={[Math.PI / 2, 0, -2.649]}
            scale={[0.316, 0.316, 0.166]}
          />
        </mesh>
        <mesh
          name="ManagingExport"
          castShadow
          receiveShadow
          geometry={nodes.ManagingExport.geometry}
          material={materials.Rod_Blue}
          position={[-1.172, 0.163, 5.278]}
          rotation={[0, 1.274, 0]}
          scale={[0.059, 0.112, 0.059]}>
          <mesh
            name="BézierCircle014"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle014.geometry}
            material={materials.Rod_Blue}
            position={[0.005, -1.335, 0.014]}
            scale={[1.12, 0.589, 1.12]}
          />
          <mesh
            name="BézierCircle015"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle015.geometry}
            material={materials.Rod_Blue}
            position={[0.005, -1.335, 0.014]}
            scale={[0.693, 0.365, 0.693]}
          />
          <mesh
            name="Plane008"
            castShadow
            receiveShadow
            geometry={nodes.Plane008.geometry}
            material={materials.Paper}
            position={[0, 0.83, 0]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.537, 2.212, 0.424]}
          />
          <mesh
            name="Text007"
            castShadow
            receiveShadow
            geometry={nodes.Text007.geometry}
            material={materials.Text}
            position={[-1.397, 0.83, -0.688]}
            rotation={[Math.PI / 2, 0, 0.492]}
            scale={[0.552, 0.552, 0.291]}
          />
        </mesh>
        <mesh
          name="GlobalizingGlobalization"
          castShadow
          receiveShadow
          geometry={nodes.GlobalizingGlobalization.geometry}
          material={materials.Rod_Purple}
          position={[-0.671, 0.163, 4.172]}
          rotation={[0, 0.279, 0]}
          scale={[0.059, 0.112, 0.059]}>
          <mesh
            name="BézierCircle016"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle016.geometry}
            material={materials.Rod_Purple}
            position={[0.005, -1.335, 0.014]}
            scale={[1.12, 0.589, 1.12]}
          />
          <mesh
            name="BézierCircle017"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle017.geometry}
            material={materials.Rod_Purple}
            position={[0.005, -1.335, 0.014]}
            scale={[0.693, 0.365, 0.693]}
          />
          <mesh
            name="Plane009"
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={materials.Paper}
            position={[0.007, 1.808, 0.006]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.747, 2.515, 0.482]}
          />
          <mesh
            name="Text008"
            castShadow
            receiveShadow
            geometry={nodes.Text008.geometry}
            material={materials.Text}
            position={[-0.006, 1.809, 0.058]}
            rotation={[Math.PI / 2, 0, 0.492]}
            scale={[0.576, 0.576, 0.303]}
          />
        </mesh>
        <mesh
          name="DevelopingMyExportPlan"
          castShadow
          receiveShadow
          geometry={nodes.DevelopingMyExportPlan.geometry}
          material={materials.Rod_Purple}
          position={[1.522, 0.163, 8.761]}
          scale={[0.059, 0.112, 0.059]}>
          <mesh
            name="BézierCircle018"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle018.geometry}
            material={materials.Rod_Purple}
            position={[0.005, -1.335, 0.014]}
            scale={[1.12, 0.589, 1.12]}
          />
          <mesh
            name="BézierCircle019"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle019.geometry}
            material={materials.Rod_Purple}
            position={[0.005, -1.335, 0.014]}
            scale={[0.693, 0.365, 0.693]}
          />
          <mesh
            name="Plane010"
            castShadow
            receiveShadow
            geometry={nodes.Plane010.geometry}
            material={materials.Paper}
            position={[0, 0.83, 0]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.537, 2.212, 0.424]}
          />
          <mesh
            name="Text010"
            castShadow
            receiveShadow
            geometry={nodes.Text010.geometry}
            material={materials.Text}
            position={[-1.397, 0.83, -0.688]}
            rotation={[Math.PI / 2, 0, 0.492]}
            scale={[0.392, 0.392, 0.206]}
          />
        </mesh>
        <group
          name="Sketchfab_model"
          position={[-0.815, -0.06, 2.62]}
          rotation={[-Math.PI / 2, 0, -1.383]}
          scale={0.011}>
          <group name="510e9cb6034e45f8bc6e54d36b76aceefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <mesh
                name="Box001__0"
                castShadow
                receiveShadow
                geometry={nodes.Box001__0.geometry}
                material={materials['Scene_-_Root']}
                position={[-1.21, 0, -51.506]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <group
                name="Box002"
                position={[-0.845, 40.756, -44.493]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Box002__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Box002__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Box004"
                position={[-0.845, 29.158, -44.493]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Box004__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Box004__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Box006"
                position={[-1.139, 40.756, 29.495]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Box006__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Box006__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Box007"
                position={[-1.139, 29.158, 29.495]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Box007__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Box007__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group name="Box008" position={[-1.21, 0, 36.454]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Box008__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Box008__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cone001"
                position={[-0.999, 67.523, -42.497]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cone001__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone001__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cone002"
                position={[-0.999, 67.523, -37.714]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cone002__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone002__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cone003"
                position={[-0.999, 67.523, -32.204]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cone003__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone003__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cone004"
                position={[-0.999, 76.88, -26.699]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cone004__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone004__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cone005"
                position={[-0.999, 80.391, -21.203]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cone005__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone005__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cone006"
                position={[-0.999, 83.976, -15.53]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cone006__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone006__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cone007"
                position={[-0.999, 87.91, -10.197]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cone007__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone007__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cone008"
                position={[-0.945, 67.523, 28.458]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cone008__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone008__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cone009"
                position={[3.39, 67.523, 26.437]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cone009__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone009__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cone010"
                position={[8.384, 67.523, 24.108]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cone010__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone010__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cone011"
                position={[13.373, 76.88, 21.782]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cone011__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone011__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cone012"
                position={[18.354, 80.391, 19.459]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cone012__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone012__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cone013"
                position={[23.496, 83.976, 17.061]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cone013__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone013__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cone014"
                position={[28.329, 87.91, 14.808]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cone014__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone014__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder001"
                position={[-0.982, 9.252, -42.505]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder001__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder001__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder002"
                position={[-0.982, 9.252, -37.722]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder002__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder002__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder003"
                position={[-0.982, 9.252, -32.212]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder003__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder003__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder004"
                position={[-0.982, 9.15, -26.707]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder004__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder004__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder005"
                position={[-0.982, 9.285, -21.211]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder005__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder005__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder006"
                position={[-0.982, 8.976, -15.538]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder006__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder006__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder007"
                position={[-0.982, 9.008, -10.205]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder007__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder007__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder008"
                position={[-0.964, 55.088, -42.504]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder008__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder008__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder009"
                position={[-0.964, 35.881, -42.504]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder009__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder009__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder010"
                position={[-0.964, 17.69, -42.504]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder010__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder010__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder011"
                position={[-0.959, 9.252, 28.446]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder011__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder011__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder012"
                position={[3.376, 9.252, 26.425]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder012__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder012__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder013"
                position={[8.37, 9.252, 24.097]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder013__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder013__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder014"
                position={[13.359, 9.15, 21.77]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder014__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder014__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder015"
                position={[18.34, 9.285, 19.447]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder015__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder015__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder016"
                position={[23.482, 8.976, 17.05]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder016__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder016__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder017"
                position={[28.315, 9.008, 14.796]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder017__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder017__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder018"
                position={[-0.965, 55.088, 28.43]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder018__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder018__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder019"
                position={[-0.965, 35.881, 28.43]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder019__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder019__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Cylinder020"
                position={[-0.965, 17.69, 28.43]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Cylinder020__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder020__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere001"
                position={[-1.358, 81.935, -51.554]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere001__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere001__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere002"
                position={[-0.979, 66.99, -42.501]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere002__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere002__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere003"
                position={[-0.979, 63.277, -42.501]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere003__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere003__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere004"
                position={[-0.979, 66.99, -37.718]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere004__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere004__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere005"
                position={[-0.979, 63.277, -37.718]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere005__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere005__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere006"
                position={[-0.979, 66.99, -32.208]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere006__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere006__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere007"
                position={[-0.979, 63.277, -32.208]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere007__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere007__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere008"
                position={[-0.979, 76.26, -26.703]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere008__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere008__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere009"
                position={[-0.979, 71.945, -26.703]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere009__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere009__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere010"
                position={[-0.979, 79.741, -21.207]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere010__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere010__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere011"
                position={[-0.979, 75.21, -21.207]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere011__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere011__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere012"
                position={[-0.979, 83.29, -15.533]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere012__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere012__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere013"
                position={[-0.979, 78.512, -15.533]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere013__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere013__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere014"
                position={[-0.979, 87.189, -10.2]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere014__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere014__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere015"
                position={[-0.979, 82.162, -10.2]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere015__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere015__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere016"
                position={[-0.626, 81.935, 36.555]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere016__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere016__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere017"
                position={[-0.956, 66.99, 28.442]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere017__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere017__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere018"
                position={[-0.956, 63.277, 28.442]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere018__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere018__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere019"
                position={[3.379, 66.99, 26.421]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere019__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere019__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere020"
                position={[3.379, 63.277, 26.421]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere020__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere020__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere021"
                position={[8.373, 66.99, 24.092]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere021__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere021__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere022"
                position={[8.373, 63.277, 24.092]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere022__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere022__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere023"
                position={[13.362, 76.26, 21.766]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere023__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere023__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere024"
                position={[13.362, 71.945, 21.766]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere024__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere024__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere025"
                position={[18.343, 79.741, 19.443]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere025__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere025__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere026"
                position={[18.343, 75.21, 19.443]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere026__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere026__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere027"
                position={[23.485, 83.29, 17.045]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere027__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere027__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere028"
                position={[23.485, 78.512, 17.045]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere028__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere028__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere029"
                position={[28.318, 87.189, 14.792]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere029__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere029__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
              <group
                name="Sphere030"
                position={[28.318, 82.162, 14.792]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Sphere030__0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere030__0.geometry}
                  material={materials['Scene_-_Root']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/chain_static.glb');
