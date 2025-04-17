'use client'

import { RetroGrid } from "./ui/retro-grid";
import { Squares } from "@/components/ui/squares-background";
// import { Canvas } from "@react-three/fiber";
// import { Center, OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei';

const Hero = () => {

    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-white overflow-y-hidden">
            <Squares
            className="bg-white"
            direction="diagonal"
            speed={0.1}
            squareSize={40}
            borderColor="#f1f3f2" 
            hoverFillColor="#f6f6f6"
            />
            {/* <RetroGrid /> */}
        </div>
    );
}

export default Hero;