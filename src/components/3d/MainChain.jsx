'use client'
import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useFrame } from "@react-three/fiber";
import { useMemo } from 'react';

export default function ValueChain({active, rotation, scale, position, scrollOffset}) {
    const group = useRef();
    const earthRef = useRef();
    const { nodes, materials, animations } = useGLTF('/models/MainChain2.glb')
    const material = materials['Material.001'];
    const progressRef = useRef(0);
    const shaderRef = useRef(null);
    const roadRef = useRef();

    const memoPosition = useMemo(() => position, [position.toString()])
    const memoRotation = useMemo(() => rotation, [rotation.toString()])
    const memoScale = useMemo(() => scale, [scale.toString()])

  useEffect(() => {
    if (roadRef.current) {
      const mat = materials['road'];
      console.log('UV attribute:', roadRef.current.geometry.attributes.uv);
      mat.onBeforeCompile = (shader) => {
        shader.uniforms.progress = { value: 0 };

        shader.vertexShader = `
          varying vec2 vUv;
          ${shader.vertexShader}
        `;
        shader.vertexShader = shader.vertexShader.replace(
          'void main() {',
          'void main() {\n  vUv = uv;'
        );

        shader.fragmentShader = `
          uniform float progress;
          varying vec2 vUv;
          ${shader.fragmentShader}
        `;
        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <clipping_planes_fragment>',
          `
          if (vUv.x > progress) discard;
          #include <clipping_planes_fragment>
          `
        );
        // shader.fragmentShader = shader.fragmentShader.replace(
        //   '#include <clipping_planes_fragment>',
        //   `
        //   gl_FragColor = vec4(vUv.x, vUv.y, 0.0, 1.0);
        //   #include <clipping_planes_fragment>
        //   `
        // );
        shaderRef.current = shader;
      };
      mat.needsUpdate = true;
    }
  }, []);
  useFrame((state, delta) => {
    if (!active && progressRef.current < 1) {
        progressRef.current += delta * 0.3
        if (progressRef.current > 1) progressRef.current = 1
    }
    if (shaderRef.current) {
        shaderRef.current.uniforms.progress.value = progressRef.current
    }
  });
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    Object.values(actions).forEach((action) => action.play());
  }, [actions]);
  useFrame((state, delta) => {
    if (earthRef.current) {
        earthRef.current.rotation.y += 0.002;
    }
  });
  // useFrame(() => {
  //   if (group.current) {
  //     const newX = group.current.position.x - scrollOffset;
  //     // Clamp the x-position to not go below -5
  //     group.current.position.x = Math.max(newX, -8);
  //   }
  // });
    
  useGSAP(() => {
    if (!active && group.current) {
      const initialY = -5;
      gsap.to(group.current.position, {
        x: initialY + 6,
        duration: 10,
        ease: 'power4.inOut',
        repeat: 0, // Play once
      });
    }
  }, [active]);
    
  return (
    <group ref={group} position={memoPosition} rotation={memoRotation} scale={memoScale} dispose={null}>
      <group name="Scene">
        <mesh
          name="Earth"
          ref={earthRef}
          castShadow
          receiveShadow
          geometry={nodes.Earth.geometry}
          material={materials['Material.002']}
          position={[-0.152, 0.678, -0.118]}
          scale={1.521}
        />
        <mesh
          name="Box"
          castShadow
          receiveShadow
          geometry={nodes.Box.geometry}
          material={materials.Box}
          position={[0.634, 0.096, 11.888]}
          rotation={[-2.877, -0.979, -3.01]}
          scale={[0.081, 0.051, 0.051]}
        />
        <mesh
          name="AmIReadyToExport?"
          castShadow
          receiveShadow
          geometry={nodes['AmIReadyToExport?'].geometry}
          material={materials.Rod_Blue}
          position={[0.326, 0.236, 11.669]}
          rotation={[0, 0.361, 0]}
          scale={[0.09, 0.171, 0.09]}>
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
            position={[0.004, 0.83, -0.007]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.998, 2.876, 0.551]}
          />
          <mesh
            name="Text"
            castShadow
            receiveShadow
            geometry={nodes.Text.geometry}
            material={materials.Text}
            position={[-1.812, 0.83, -0.901]}
            rotation={[Math.PI / 2, 0, 0.492]}
            scale={[0.329, 0.329, 0.173]}
          />
        </mesh>
        <mesh
          name="IdentifyingMyTargetMarket"
          castShadow
          receiveShadow
          geometry={nodes.IdentifyingMyTargetMarket.geometry}
          material={materials.Rod_Green}
          position={[-0.353, 0.236, 9.686]}
          rotation={[Math.PI, -0.401, Math.PI]}
          scale={[0.09, 0.171, 0.09]}>
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
            position={[-0.002, 0.83, 0.004]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.998, 2.876, 0.551]}
          />
          <mesh
            name="Text002"
            castShadow
            receiveShadow
            geometry={nodes.Text002.geometry}
            material={materials.Text}
            position={[-1.766, 0.83, -0.987]}
            rotation={[Math.PI / 2, 0, -2.649]}
            scale={[0.28, 0.28, 0.147]}
          />
        </mesh>
        <mesh
          name="DevelopingMyExportMarketingStrategy"
          castShadow
          receiveShadow
          geometry={nodes.DevelopingMyExportMarketingStrategy.geometry}
          material={materials.Rod_Blue}
          position={[0.724, 0.236, 7.853]}
          rotation={[Math.PI, -0.356, Math.PI]}
          scale={[0.09, 0.171, 0.09]}>
          <mesh
            name="BézierCircle006"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle006.geometry}
            material={materials.Rod_Blue}
            position={[0.005, -1.335, 0.014]}
            scale={[1.12, 0.589, 1.12]}
          />
          <mesh
            name="BézierCircle007"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle007.geometry}
            material={materials.Rod_Blue}
            position={[0.005, -1.335, 0.014]}
            scale={[0.693, 0.365, 0.693]}
          />
          <mesh
            name="Plane004"
            castShadow
            receiveShadow
            geometry={nodes.Plane004.geometry}
            material={materials.Paper}
            position={[-0.001, 0.824, 0.003]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.998, 2.876, 0.551]}
          />
          <mesh
            name="Text003"
            castShadow
            receiveShadow
            geometry={nodes.Text003.geometry}
            material={materials.Text}
            position={[-1.771, 0.875, -0.977]}
            rotation={[Math.PI / 2, 0, -2.649]}
            scale={[0.363, 0.363, 0.191]}
          />
        </mesh>
        <mesh
          name="EnteringATargetMarket"
          castShadow
          receiveShadow
          geometry={nodes.EnteringATargetMarket.geometry}
          material={materials.Rod_Purple}
          position={[0.398, 0.271, 6.856]}
          rotation={[Math.PI, -0.242, Math.PI]}
          scale={[0.09, 0.205, 0.09]}>
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
            position={[-13.636, -0.889, -159.934]}
            scale={[17.043, 7.172, 17.043]}
          />
          <mesh
            name="Text004"
            castShadow
            receiveShadow
            geometry={nodes.Text004.geometry}
            material={materials.Text}
            position={[-1.76, 0.941, -1.067]}
            rotation={[Math.PI / 2, 0, -2.649]}
            scale={[0.333, 0.333, 0.14]}
          />
        </mesh>
        <mesh
          name="DeleveringMyGoods"
          castShadow
          receiveShadow
          geometry={nodes.DeleveringMyGoods.geometry}
          material={materials.Rod_Green}
          position={[-0.719, 0.237, 5.923]}
          rotation={[Math.PI, -0.381, Math.PI]}
          scale={[0.09, 0.171, 0.09]}>
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
            position={[-0.002, 0.83, 0.004]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.998, 2.876, 0.551]}
          />
          <mesh
            name="Text005"
            castShadow
            receiveShadow
            geometry={nodes.Text005.geometry}
            material={materials.Text}
            position={[-1.766, 0.83, -0.987]}
            rotation={[Math.PI / 2, 0, -2.649]}
            scale={[0.391, 0.391, 0.206]}
          />
        </mesh>
        <mesh
          name="FinancingMyExports"
          castShadow
          receiveShadow
          geometry={nodes.FinancingMyExports.geometry}
          material={materials.Rod_Yellow}
          position={[-1.474, 0.237, 5.078]}
          rotation={[Math.PI, -0.497, Math.PI]}
          scale={[0.09, 0.171, 0.09]}>
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
            position={[-0.002, 0.83, 0.004]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.998, 2.876, 0.551]}
          />
          <mesh
            name="Text006"
            castShadow
            receiveShadow
            geometry={nodes.Text006.geometry}
            material={materials.Text}
            position={[-1.766, 0.83, -0.987]}
            rotation={[Math.PI / 2, 0, -2.649]}
            scale={[0.411, 0.411, 0.216]}
          />
        </mesh>
        <mesh
          name="ManagingExport"
          castShadow
          receiveShadow
          geometry={nodes.ManagingExport.geometry}
          material={materials.Rod_Blue}
          position={[-0.603, 0.392, 4.035]}
          rotation={[0, 0.359, 0]}
          scale={[0.09, 0.289, 0.09]}>
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
            position={[0, 0.453, 0]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.998, 2.876, 0.347]}
          />
          <mesh
            name="Text007"
            castShadow
            receiveShadow
            geometry={nodes.Text007.geometry}
            material={materials.Text}
            position={[-1.828, 0.453, -0.919]}
            rotation={[Math.PI / 2, 0, 0.492]}
            scale={[0.718, 0.718, 0.185]}
          />
        </mesh>
        <mesh
          name="GlobalizingGlobalization"
          castShadow
          receiveShadow
          geometry={nodes.GlobalizingGlobalization.geometry}
          material={materials.Rod_Purple}
          position={[-0.397, 0.225, 3.096]}
          rotation={[0, 0.309, 0]}
          scale={[0.09, 0.171, 0.09]}>
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
            position={[0.007, 1.91, 0.006]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[2.271, 3.269, 0.626]}
          />
          <mesh
            name="Text008"
            castShadow
            receiveShadow
            geometry={nodes.Text008.geometry}
            material={materials.Text}
            position={[-0.006, 1.886, 0.058]}
            rotation={[Math.PI / 2, 0, 0.492]}
            scale={[0.749, 0.749, 0.394]}
          />
        </mesh>
        <mesh
          name="DevelopingMyExportPlan"
          castShadow
          receiveShadow
          geometry={nodes.DevelopingMyExportPlan.geometry}
          material={materials.Rod_Purple}
          position={[-0.346, 0.236, 10.76]}
          rotation={[0, 0.41, 0]}
          scale={[0.09, 0.171, 0.09]}>
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
            position={[0.004, 0.83, -0.007]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.998, 2.876, 0.551]}
          />
          <mesh
            name="Text010"
            castShadow
            receiveShadow
            geometry={nodes.Text010.geometry}
            material={materials.Text}
            position={[-1.812, 0.83, -0.901]}
            rotation={[Math.PI / 2, 0, 0.492]}
            scale={[0.51, 0.51, 0.268]}
          />
        </mesh>
        <mesh
          name="DevelopingMyExportMarketingStrategy001"
          castShadow
          receiveShadow
          geometry={nodes.DevelopingMyExportMarketingStrategy001.geometry}
          material={materials.Rod_Yellow}
          position={[0.148, 0.236, 8.738]}
          rotation={[-Math.PI, 0.153, -Math.PI]}
          scale={[0.09, 0.171, 0.09]}>
          <mesh
            name="BézierCircle001"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle001.geometry}
            material={materials.Rod_Yellow}
            position={[0.005, -1.335, 0.014]}
            scale={[1.12, 0.589, 1.12]}
          />
          <mesh
            name="BézierCircle003"
            castShadow
            receiveShadow
            geometry={nodes.BézierCircle003.geometry}
            material={materials.Gold}
            position={[0.005, -1.335, 0.014]}
            scale={[0.693, 0.365, 0.693]}
          />
          <mesh
            name="Plane011"
            castShadow
            receiveShadow
            geometry={nodes.Plane011.geometry}
            material={materials.Paper}
            position={[-0.001, 0.824, 0.003]}
            rotation={[Math.PI / 2, 0, 0.493]}
            scale={[1.998, 2.876, 0.551]}
          />
          <mesh
            name="Text009"
            castShadow
            receiveShadow
            geometry={nodes.Text009.geometry}
            material={materials['Material.001']}
            position={[-1.748, 0.85, -0.962]}
            rotation={[Math.PI / 2, 0, -2.642]}
            scale={[0.412, 0.412, 0.217]}
          />
        </mesh>
        <mesh
          name="road2"
          castShadow
          receiveShadow
          geometry={nodes.road2.geometry}
          material={materials['road']}
          ref={roadRef}
        />
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
        <mesh
          name="1"
          castShadow
          receiveShadow
          geometry={nodes['1'].geometry}
          material={materials.ProductionLine}
          position={[-0.004, 0.037, 1.588]}
          rotation={[-0.034, 0.202, 0.008]}
          scale={[-0.204, -0.005, -0.153]}
        />
        <mesh
          name="2"
          castShadow
          receiveShadow
          geometry={nodes['2'].geometry}
          material={materials.ProductionLine}
          position={[0.383, 0.068, 1.492]}
          rotation={[-0.054, 0.217, 0.01]}
          scale={[-0.156, -0.005, -0.152]}
        />
        <mesh
          name="3"
          castShadow
          receiveShadow
          geometry={nodes['3'].geometry}
          material={materials.ProductionLine}
          position={[0.716, 0.101, 1.391]}
          rotation={[-0.051, 0.211, 0.011]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="4"
          castShadow
          receiveShadow
          geometry={nodes['4'].geometry}
          material={materials.ProductionLine}
          position={[1.036, 0.138, 1.234]}
          rotation={[-0.036, 0.211, 0.007]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="5"
          castShadow
          receiveShadow
          geometry={nodes['5'].geometry}
          material={materials.ProductionLine}
          position={[1.302, 0.177, 1]}
          rotation={[-0.019, 0.211, 0.004]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="6"
          castShadow
          receiveShadow
          geometry={nodes['6'].geometry}
          material={materials.ProductionLine}
          position={[1.499, 0.21, 0.709]}
          rotation={[0.01, 0.211, -0.002]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="7"
          castShadow
          receiveShadow
          geometry={nodes['7'].geometry}
          material={materials.ProductionLine}
          position={[1.624, 0.241, 0.381]}
          rotation={[0.04, 0.211, -0.008]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="8"
          castShadow
          receiveShadow
          geometry={nodes['8'].geometry}
          material={materials.ProductionLine}
          position={[1.688, 0.272, 0.033]}
          rotation={[0.06, 0.211, -0.013]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="9"
          castShadow
          receiveShadow
          geometry={nodes['9'].geometry}
          material={materials.ProductionLine}
          position={[1.677, 0.303, -0.322]}
          rotation={[0.054, 0.211, -0.011]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="10"
          castShadow
          receiveShadow
          geometry={nodes['10'].geometry}
          material={materials.ProductionLine}
          position={[1.586, 0.335, -0.676]}
          rotation={[0.06, 0.211, -0.013]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="11"
          castShadow
          receiveShadow
          geometry={nodes['11'].geometry}
          material={materials.ProductionLine}
          position={[1.426, 0.365, -0.979]}
          rotation={[0.062, 0.211, -0.013]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="12"
          castShadow
          receiveShadow
          geometry={nodes['12'].geometry}
          material={materials.ProductionLine}
          position={[1.213, 0.397, -1.27]}
          rotation={[0.064, 0.211, -0.014]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="13"
          castShadow
          receiveShadow
          geometry={nodes['13'].geometry}
          material={materials.ProductionLine}
          position={[0.951, 0.427, -1.496]}
          rotation={[0.081, 0.211, -0.017]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="14"
          castShadow
          receiveShadow
          geometry={nodes['14'].geometry}
          material={materials.ProductionLine}
          position={[0.65, 0.46, -1.69]}
          rotation={[0.076, 0.211, -0.016]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="15"
          castShadow
          receiveShadow
          geometry={nodes['15'].geometry}
          material={materials.ProductionLine}
          position={[0.322, 0.49, -1.808]}
          rotation={[0.099, 0.21, -0.021]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="16"
          castShadow
          receiveShadow
          geometry={nodes['16'].geometry}
          material={materials.ProductionLine}
          position={[-0.03, 0.52, -1.862]}
          rotation={[0.128, 0.21, -0.027]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="17"
          castShadow
          receiveShadow
          geometry={nodes['17'].geometry}
          material={materials.ProductionLine}
          position={[-0.383, 0.552, -1.845]}
          rotation={[0.147, 0.209, -0.031]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="18"
          castShadow
          receiveShadow
          geometry={nodes['18'].geometry}
          material={materials.ProductionLine}
          position={[-0.722, 0.582, -1.759]}
          rotation={[0.191, 0.208, -0.04]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="19"
          castShadow
          receiveShadow
          geometry={nodes['19'].geometry}
          material={materials.ProductionLine}
          position={[-1.051, 0.615, -1.613]}
          rotation={[0.202, 0.207, -0.042]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="20"
          castShadow
          receiveShadow
          geometry={nodes['20'].geometry}
          material={materials.ProductionLine}
          position={[-1.334, 0.645, -1.412]}
          rotation={[0.215, 0.207, -0.045]}
          scale={[-0.159, -0.005, -0.152]}
        />
        <mesh
          name="21"
          castShadow
          receiveShadow
          geometry={nodes['21'].geometry}
          material={materials.ProductionLine}
          position={[-1.577, 0.676, -1.159]}
          rotation={[0.239, 0.206, -0.05]}
          scale={[-0.159, -0.005, -0.151]}
        />
        <mesh
          name="22"
          castShadow
          receiveShadow
          geometry={nodes['22'].geometry}
          material={materials.ProductionLine}
          position={[-1.773, 0.708, -0.856]}
          rotation={[0.253, 0.205, -0.053]}
          scale={[-0.159, -0.005, -0.151]}
        />
        <mesh
          name="23"
          castShadow
          receiveShadow
          geometry={nodes['23'].geometry}
          material={materials.ProductionLine}
          position={[-1.892, 0.738, -0.525]}
          rotation={[0.278, 0.204, -0.058]}
          scale={[-0.159, -0.005, -0.151]}
        />
        <mesh
          name="24"
          castShadow
          receiveShadow
          geometry={nodes['24'].geometry}
          material={materials.ProductionLine}
          position={[-1.945, 0.77, -0.167]}
          rotation={[0.308, 0.202, -0.064]}
          scale={[-0.159, -0.005, -0.151]}
        />
        <mesh
          name="25"
          castShadow
          receiveShadow
          geometry={nodes['25'].geometry}
          material={materials.ProductionLine}
          position={[-1.92, 0.801, 0.187]}
          rotation={[0.347, 0.199, -0.071]}
          scale={[-0.159, -0.005, -0.15]}
        />
        <mesh
          name="26"
          castShadow
          receiveShadow
          geometry={nodes['26'].geometry}
          material={materials.ProductionLine}
          position={[-1.829, 0.832, 0.537]}
          rotation={[0.402, 0.195, -0.082]}
          scale={[-0.159, -0.005, -0.149]}
        />
        <mesh
          name="27"
          castShadow
          receiveShadow
          geometry={nodes['27'].geometry}
          material={materials.ProductionLine}
          position={[-1.662, 0.862, 0.861]}
          rotation={[0.434, 0.192, -0.088]}
          scale={[-0.159, -0.005, -0.149]}
        />
        <mesh
          name="28"
          castShadow
          receiveShadow
          geometry={nodes['28'].geometry}
          material={materials.ProductionLine}
          position={[-1.44, 0.893, 1.144]}
          rotation={[0.464, 0.19, -0.094]}
          scale={[-0.159, -0.005, -0.148]}
        />
        <mesh
          name="29"
          castShadow
          receiveShadow
          geometry={nodes['29'].geometry}
          material={materials.ProductionLine}
          position={[-1.172, 0.924, 1.38]}
          rotation={[0.485, 0.188, -0.098]}
          scale={[-0.159, -0.005, -0.147]}
        />
        <mesh
          name="30"
          castShadow
          receiveShadow
          geometry={nodes['30'].geometry}
          material={materials.ProductionLine}
          position={[-0.863, 0.955, 1.56]}
          rotation={[0.548, 0.185, -0.103]}
          scale={[-0.159, -0.005, -0.146]}
        />
        <mesh
          name="31"
          castShadow
          receiveShadow
          geometry={nodes['31'].geometry}
          material={materials.ProductionLine}
          position={[-0.527, 0.982, 1.682]}
          rotation={[0.538, 0.182, -0.108]}
          scale={[-0.159, -0.005, -0.146]}
        />
        <mesh
          name="32"
          castShadow
          receiveShadow
          geometry={nodes['32'].geometry}
          material={materials.ProductionLine}
          position={[-0.178, 1.017, 1.723]}
          rotation={[0.578, 0.178, -0.115]}
          scale={[-0.159, -0.005, -0.145]}
        />
        <mesh
          name="33"
          castShadow
          receiveShadow
          geometry={nodes['33'].geometry}
          material={materials.ProductionLine}
          position={[0.175, 1.048, 1.694]}
          rotation={[0.608, 0.174, -0.12]}
          scale={[-0.159, -0.006, -0.144]}
        />
        <mesh
          name="34"
          castShadow
          receiveShadow
          geometry={nodes['34'].geometry}
          material={materials.ProductionLine}
          position={[0.514, 1.079, 1.593]}
          rotation={[0.642, 0.17, -0.126]}
          scale={[-0.159, -0.006, -0.143]}
        />
        <mesh
          name="35"
          castShadow
          receiveShadow
          geometry={nodes['35'].geometry}
          material={materials.ProductionLine}
          position={[1.091, 1.142, 1.18]}
          rotation={[0.625, 0.172, -0.123]}
          scale={[-0.159, -0.006, -0.144]}
        />
        <mesh
          name="37"
          castShadow
          receiveShadow
          geometry={nodes['37'].geometry}
          material={materials.ProductionLine}
          position={[1.311, 1.173, 0.898]}
          rotation={[0.669, 0.167, -0.131]}
          scale={[-0.159, -0.006, -0.142]}
        />
        <mesh
          name="38"
          castShadow
          receiveShadow
          geometry={nodes['38'].geometry}
          material={materials.ProductionLine}
          position={[1.468, 1.204, 0.592]}
          rotation={[0.711, 0.161, -0.137]}
          scale={[-0.159, -0.006, -0.141]}
        />
        <mesh
          name="39"
          castShadow
          receiveShadow
          geometry={nodes['39'].geometry}
          material={materials.ProductionLine}
          position={[1.547, 1.234, 0.265]}
          rotation={[0.753, 0.155, -0.144]}
          scale={[-0.159, -0.006, -0.14]}
        />
        <mesh
          name="40"
          castShadow
          receiveShadow
          geometry={nodes['40'].geometry}
          material={materials.ProductionLine}
          position={[1.574, 1.265, -0.072]}
          rotation={[0.777, 0.162, -0.157]}
          scale={[-0.159, -0.006, -0.139]}
        />
        <mesh
          name="42"
          castShadow
          receiveShadow
          geometry={nodes['42'].geometry}
          material={materials.ProductionLine}
          position={[1.559, 1.326, -0.746]}
          rotation={[0.832, 0.231, -0.246]}
          scale={[-0.159, -0.006, -0.137]}
        />
        <mesh
          name="43"
          castShadow
          receiveShadow
          geometry={nodes['43'].geometry}
          material={materials.ProductionLine}
          position={[1.575, 1.296, -0.417]}
          rotation={[0.823, 0.195, -0.206]}
          scale={[-0.159, -0.006, -0.137]}
        />
        <mesh
          name="44"
          castShadow
          receiveShadow
          geometry={nodes['44'].geometry}
          material={materials.ProductionLine}
          position={[0.827, 1.111, 1.411]}
          rotation={[0.63, 0.172, -0.124]}
          scale={[-0.159, -0.006, -0.144]}
        />
        <mesh
          name="1001"
          castShadow
          receiveShadow
          geometry={nodes['1001'].geometry}
          material={materials.ProductionLine}
          position={[-0.386, 0.023, 1.757]}
          rotation={[3.071, -0.531, -0.171]}
          scale={[-0.175, -0.005, -0.153]}
        />
        <group
          name="Crate003"
          position={[13.8, 0, 0]}
          rotation={[0.463, 0.127, -0.597]}
          scale={0.762}>
          <mesh
            name="Cube057"
            castShadow
            receiveShadow
            geometry={nodes.Cube057.geometry}
            material={materials.Box}
          />
          <mesh
            name="Cube057_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube057_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group
          name="Crate005"
          position={[11.73, 0, 0]}
          rotation={[1.174, -0.97, 0.217]}
          scale={1.262}>
          <mesh
            name="Cube059"
            castShadow
            receiveShadow
            geometry={nodes.Cube059.geometry}
            material={materials.Box}
          />
          <mesh
            name="Cube059_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube059_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group name="Crate008" position={[0.65, 0, 0]} rotation={[0.487, 0.245, -0.091]}>
          <mesh
            name="Cube062"
            castShadow
            receiveShadow
            geometry={nodes.Cube062.geometry}
            material={materials.Box}
          />
          <mesh
            name="Cube062_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group
          name="Crate009"
          position={[5.04, 0, 0]}
          rotation={[0.521, 0.483, -0.105]}
          scale={0.864}>
          <mesh
            name="Cube063"
            castShadow
            receiveShadow
            geometry={nodes.Cube063.geometry}
            material={materials.Box}
          />
          <mesh
            name="Cube063_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube063_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group
          name="Crate010"
          position={[10.19, 0, 0]}
          rotation={[0.757, -0.525, 0.523]}
          scale={1.429}>
          <mesh
            name="Cube064"
            castShadow
            receiveShadow
            geometry={nodes.Cube064.geometry}
            material={materials.Box}
          />
          <mesh
            name="Cube064_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube064_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group name="Crate011" position={[8.13, 0, 0]} rotation={[0.336, -0.242, 0.41]}>
          <mesh
            name="Cube065"
            castShadow
            receiveShadow
            geometry={nodes.Cube065.geometry}
            material={materials.Box}
          />
          <mesh
            name="Cube065_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube065_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group name="Crate013" position={[12.67, 0, 0]} rotation={[0.029, -1.202, 0.43]}>
          <mesh
            name="Cube067"
            castShadow
            receiveShadow
            geometry={nodes.Cube067.geometry}
            material={materials.Box}
          />
          <mesh
            name="Cube067_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube067_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group name="Crate016" position={[6.19, 0, 0]} rotation={[-0.265, -0.496, 0.051]}>
          <mesh
            name="Cube070"
            castShadow
            receiveShadow
            geometry={nodes.Cube070.geometry}
            material={materials.Box}
          />
          <mesh
            name="Cube070_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube070_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group name="Crate017" position={[8.23, 0, 0]} rotation={[-0.262, -0.212, 0.063]}>
          <mesh
            name="Cube071"
            castShadow
            receiveShadow
            geometry={nodes.Cube071.geometry}
            material={materials.Box}
          />
          <mesh
            name="Cube071_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube071_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group
          name="Crate018"
          position={[3.61, 0, 0]}
          rotation={[-0.131, 0.073, 0.043]}
          scale={1.787}>
          <mesh
            name="Cube072"
            castShadow
            receiveShadow
            geometry={nodes.Cube072.geometry}
            material={materials.Box}
          />
          <mesh
            name="Cube072_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube072_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group name="Crate021" position={[5.15, 0, 0]} rotation={[-0.186, -0.518, -0.18]}>
          <mesh
            name="Cube075"
            castShadow
            receiveShadow
            geometry={nodes.Cube075.geometry}
            material={materials.Box}
          />
          <mesh
            name="Cube075_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube075_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group name="Crate024" position={[2.76, 0, 0]} rotation={[0.138, -0.019, -0.138]}>
          <mesh
            name="Cube078"
            castShadow
            receiveShadow
            geometry={nodes.Cube078.geometry}
            material={materials.Box}
          />
          <mesh
            name="Cube078_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube078_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group name="Crate025" position={[2.08, 0, 0]}>
          <mesh
            name="Cube079"
            castShadow
            receiveShadow
            geometry={nodes.Cube079.geometry}
            material={materials.Box}
          />
          <mesh
            name="Cube079_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube079_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group name="box_curve002" />
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.207, 1.154, 1.043]}
          rotation={[1.353, 0.014, -0.917]}
          scale={[1.392, 1.562, 1.066]}
        />
        <mesh
          name="Cylinder001_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.393, 1.184, 0.748]}
          rotation={[1.329, 0.133, -1.137]}
          scale={[1.392, 1.562, 1.066]}
        />
        <mesh
          name="Cylinder002_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.52, 1.213, 0.43]}
          rotation={[2.849, 0.252, -1.715]}
          scale={[1.392, 1.563, 1.065]}
        />
        <mesh
          name="Cylinder003_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.57, 1.243, 0.093]}
          rotation={[1.392, 0.164, -1.486]}
          scale={[1.392, 1.568, 1.059]}
        />
        <mesh
          name="Cylinder004_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.58, 1.274, -0.247]}
          rotation={[1.41, 0.153, -1.592]}
          scale={[1.392, 1.571, 1.055]}
        />
        <mesh
          name="Cylinder005_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.569, 1.298, -0.582]}
          rotation={[-0.804, -0.014, -1.388]}
          scale={[1.392, 1.573, 1.053]}
        />
        <mesh
          name="Cylinder006_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[0.965, 1.119, 1.306]}
          rotation={[1.296, 0.013, -0.69]}
          scale={[1.392, 1.562, 1.066]}
        />
        <mesh
          name="Cylinder007_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[0.675, 1.091, 1.513]}
          rotation={[1.431, -0.077, -0.459]}
          scale={[1.395, 1.571, 1.052]}
        />
        <mesh
          name="Cylinder008_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[0.349, 1.058, 1.653]}
          rotation={[1.449, -0.103, -0.26]}
          scale={[1.395, 1.571, 1.052]}
        />
        <mesh
          name="Cylinder009_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[0.002, 1.03, 1.722]}
          rotation={[1.457, -0.125, -0.06]}
          scale={[1.395, 1.571, 1.052]}
        />
        <mesh
          name="Cylinder010_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[-0.698, 0.961, 1.632]}
          rotation={[1.522, -0.156, 0.344]}
          scale={[1.395, 1.571, 1.052]}
        />
        <mesh
          name="Cylinder011_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[-0.352, 0.995, 1.71]}
          rotation={[1.457, -0.189, 0.131]}
          scale={[1.395, 1.568, 1.055]}
        />
        <mesh
          name="Cylinder012_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[-1.022, 0.926, 1.479]}
          rotation={[1.562, -0.158, 0.556]}
          scale={[1.395, 1.568, 1.055]}
        />
        <mesh
          name="Cylinder013_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[-1.315, 0.895, 1.271]}
          rotation={[1.569, -0.18, 0.751]}
          scale={[1.395, 1.568, 1.055]}
        />
        <mesh
          name="Cylinder014_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[-1.562, 0.866, 1.01]}
          rotation={[1.607, -0.176, 0.966]}
          scale={[1.395, 1.568, 1.055]}
        />
        <mesh
          name="Cylinder015_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[-1.749, 0.838, 0.702]}
          rotation={[1.726, -0.224, 1.165]}
          scale={[1.395, 1.564, 1.06]}
        />
        <mesh
          name="Cylinder016_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[-1.876, 0.798, 0.365]}
          rotation={[1.668, -0.169, 1.363]}
          scale={[1.395, 1.564, 1.06]}
        />
        <mesh
          name="Cylinder017_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[-1.937, 0.771, 0.011]}
          rotation={[1.701, -0.207, 1.57]}
          scale={[1.395, 1.564, 1.06]}
        />
        <mesh
          name="Cylinder018_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[-1.925, 0.741, -0.346]}
          rotation={[1.735, -0.155, 1.774]}
          scale={[1.395, 1.559, 1.066]}
        />
        <mesh
          name="Cylinder019_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[-1.841, 0.707, -0.692]}
          rotation={[1.766, -0.134, 1.961]}
          scale={[1.395, 1.56, 1.065]}
        />
        <mesh
          name="Cylinder020_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_1.geometry}
          material={materials.ProductionLineCylinder}
          position={[-1.686, 0.684, -1.01]}
          rotation={[1.81, -0.127, 2.154]}
          scale={[1.395, 1.559, 1.065]}
        />
        <mesh
          name="Cylinder021"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021.geometry}
          material={materials.ProductionLineCylinder}
          position={[-1.464, 0.65, -1.283]}
          rotation={[1.82, -0.067, 2.35]}
          scale={[1.395, 1.562, 1.062]}
        />
        <mesh
          name="Cylinder022"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022.geometry}
          material={materials.ProductionLineCylinder}
          position={[-1.2, 0.616, -1.513]}
          rotation={[1.814, -0.011, 2.53]}
          scale={[1.395, 1.564, 1.06]}
        />
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023.geometry}
          material={materials.ProductionLineCylinder}
          position={[-0.898, 0.592, -1.698]}
          rotation={[1.812, 0.036, 2.719]}
          scale={[1.395, 1.564, 1.06]}
        />
        <mesh
          name="Cylinder024"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024.geometry}
          material={materials.ProductionLineCylinder}
          position={[-0.562, 0.559, -1.814]}
          rotation={[1.801, 0.081, 2.908]}
          scale={[1.395, 1.564, 1.06]}
        />
        <mesh
          name="Cylinder025"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025.geometry}
          material={materials.ProductionLineCylinder}
          position={[-0.212, 0.532, -1.868]}
          rotation={[1.78, 0.125, 3.105]}
          scale={[1.395, 1.564, 1.06]}
        />
        <mesh
          name="Cylinder026"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026.geometry}
          material={materials.ProductionLineCylinder}
          position={[0.143, 0.494, -1.85]}
          rotation={[1.72, 0.158, -2.982]}
          scale={[1.395, 1.564, 1.06]}
        />
        <mesh
          name="Cylinder027"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027.geometry}
          material={materials.ProductionLineCylinder}
          position={[0.49, 0.464, -1.763]}
          rotation={[1.679, 0.183, -2.774]}
          scale={[1.395, 1.564, 1.06]}
        />
        <mesh
          name="Cylinder028"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028.geometry}
          material={materials.ProductionLineCylinder}
          position={[0.804, 0.43, -1.606]}
          rotation={[1.623, 0.189, -2.57]}
          scale={[1.395, 1.566, 1.058]}
        />
        <mesh
          name="Cylinder029"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.086, 0.398, -1.392]}
          rotation={[1.574, 0.183, -2.381]}
          scale={[1.395, 1.568, 1.055]}
        />
        <mesh
          name="Cylinder030"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.323, 0.367, -1.128]}
          rotation={[1.524, 0.16, -2.183]}
          scale={[1.395, 1.57, 1.053]}
        />
        <mesh
          name="Cylinder031"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.512, 0.342, -0.825]}
          rotation={[1.444, 0.181, -2]}
          scale={[1.392, 1.571, 1.055]}
        />
        <mesh
          name="Cylinder032"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.641, 0.309, -0.502]}
          rotation={[1.465, 0.126, -1.787]}
          scale={[1.395, 1.575, 1.046]}
        />
        <mesh
          name="Cylinder033"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.693, 0.281, -0.147]}
          rotation={[1.442, 0.076, -1.587]}
          scale={[1.395, 1.577, 1.044]}
        />
        <mesh
          name="Cylinder034"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.669, 0.247, 0.207]}
          rotation={[1.433, 0.032, -1.393]}
          scale={[1.395, 1.578, 1.043]}
        />
        <mesh
          name="Cylinder035"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.574, 0.219, 0.548]}
          rotation={[-1.485, -0.099, -1.943]}
          scale={[1.396, 1.579, 1.041]}
        />
        <mesh
          name="Cylinder036"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder036.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.409, 0.182, 0.861]}
          rotation={[1.43, -0.024, -0.979]}
          scale={[1.395, 1.578, 1.044]}
        />
        <mesh
          name="Cylinder037"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder037.geometry}
          material={materials.ProductionLineCylinder}
          position={[1.18, 0.144, 1.129]}
          rotation={[-2.859, 0.815, -1.838]}
          scale={[1.052, 1.578, 1.389]}
        />
        <mesh
          name="Cylinder038"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder038.geometry}
          material={materials.ProductionLineCylinder}
          position={[0.882, 0.106, 1.323]}
          rotation={[1.406, -0.29, -0.477]}
          scale={[1.366, 1.579, 1.08]}
        />
        <mesh
          name="Cylinder039"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039.geometry}
          material={materials.ProductionLineCylinder}
          position={[0.549, 0.071, 1.448]}
          rotation={[-1.635, 0.07, -2.83]}
          scale={[1.398, 1.579, 1.038]}
        />
        <mesh
          name="Cylinder040"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder040.geometry}
          material={materials.ProductionLineCylinder}
          position={[0.21, 0.04, 1.53]}
          rotation={[-1.612, 0.078, -2.889]}
          scale={[1.398, 1.579, 1.038]}
        />
        <mesh
          name="Cylinder041"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041.geometry}
          material={materials.ProductionLineCylinder}
          position={[-0.21, 0.017, 1.67]}
          rotation={[-1.642, 0.058, -2.664]}
          scale={[1.169, 1.579, 1.29]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/MainChain2.glb')
