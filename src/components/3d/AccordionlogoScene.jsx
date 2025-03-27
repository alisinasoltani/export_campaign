'use client'
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from '@react-three/drei';
import AccordionLogo from "@/components/3d/AccordionLogo";
import MouseRotator from "@/components/3d/MouseRotator";

const AccordionLogoScene = () => {
    return (
        <div className="w-[24px] h-[24px] flex justify-center items-center">
            <Canvas shadows={true} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={5} />
                {/* <MouseRotator containerRef={containerRef}> */}
                    <Center>
                        <AccordionLogo scale={0.6} />
                    </Center>
                {/* </MouseRotator> */}
            </Canvas>
        </div>
    );
}

export default AccordionLogoScene;