import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Ai(props) {
    const aiRef = useRef();
    const { nodes, materials } = useGLTF('/models/ai2.glb');
    useFrame(({ clock }) => {
        aiRef.current.rotation.x += clock.elapsedTime / 4200;
        // aiRef.current.rotation.x += clock.elapsedTime / 1200;
        // aiRef.current.rotation.y += clock.elapsedTime / 1200;
    })
    return (
        <group {...props} dispose={null} ref={aiRef}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials['Scene_-_Root']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials['Material.006']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials['Scene_-_Root']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials['Scene_-_Root']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials['Material.007']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials['Material.004']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials['Material.008']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials['Material.002']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials['Scene_-_Root']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_19.geometry}
            material={materials['Scene_-_Root']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials['Material.003']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials['Scene_-_Root']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials['Scene_-_Root']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials['Scene_-_Root']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_23.geometry}
            material={materials['Scene_-_Root']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials['Material.005']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials['Material.009']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials['Material.011']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials['Material.010']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials['Scene_-_Root']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials['Scene_-_Root']}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials['Scene_-_Root']}
            />
        </group>
        </group>
    );
}

useGLTF.preload('/models/ai2.glb');
