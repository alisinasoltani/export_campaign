'use client'

// import { RetroGrid } from "./ui/retro-grid";
import { useState, useEffect } from "react";
import { Squares } from "@/components/ui/squares-background";
import { Canvas } from "@react-three/fiber";
import ValueChain from "@/components/3d/MainChain";
import { OrbitControls } from "@react-three/drei";
import { useProgress } from "@react-three/drei";
import CircularProgress from '@mui/material/CircularProgress';
import { radToDeg } from "three/src/math/MathUtils.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
// import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
// import { Progress } from "@/components/ui/progress";
import { useRef } from "react";
// import Road from '@/components/3d/Road';
import { useMediaQuery } from 'react-responsive';
import Loading from "./Loading";
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

const Hero = () => {
    const { active, progress } = useProgress();
    const [show, setShow] = useState<boolean>(true);
    const htmlRef = useRef<any>(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [scrollOffset, setScrollOffset] = useState(0);
    // useEffect(() => {
    //     const handleWheel = (event) => {
    //         if (window.scrollY === 0 && event.deltaY < 0) {
    //             event.preventDefault();
    //             setScrollOffset(prev => prev - event.deltaY * 0.01); // Adjust sensitivity with factor
    //         }
    //     };
    //     window.addEventListener('wheel', handleWheel, { passive: false });
    //     return () => window.removeEventListener('wheel', handleWheel);
    // }, []);
    useGSAP(() => {
        if (htmlRef.current) {
          const initialY = -5;
          gsap.to(htmlRef.current.position, {
            x: initialY + 4,
            duration: 7,
            ease: 'power2.out',
            repeat: 0, // Play once
          });
        }
      });
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
            <div className={`w-[100vw] h-[100vh] z-[10] absolute top-0`}>
                {(
                <div className={`w-[100vw] h-[100vh] relative z-10 flex flex-col gap-2 justify-center items-center ${show ? '' : 'hidden'}`}>
                    {/* <CircularProgress value={progress} /> */}
                    <Loading />
                    
                    <div>
                        <CircularProgress variant="determinate" value={progress} />
                        <h6 className="-top-10 relative left-[0.4rem]">{progress == 100 ?
                        <button className={`text-red-4 text-[0.85rem]`} disabled={active} onClick={() => setShow(false)}>
                            click
                        </button> :
                        progress.toFixed()}</h6>
                    </div>
                </div>
                )}
                <Canvas camera={{ fov: 75, position: [5,0,0] }}>
                    <OrbitControls enableZoom={false} enablePan={!isMobile} enableRotate={!isMobile} />
                    <ambientLight intensity={1} />
                    <directionalLight intensity={5} position={[0,10,0]} />
                    <directionalLight intensity={5} position={[10,10,0]} />
                    <directionalLight intensity={5} position={[10,10,10]} />
                    {/* <Center > */}
                        {/* <Road rotation={[radToDeg(0), radToDeg(35), radToDeg(0)]} position={[-4, -2, -1]} /> */}
                        <ValueChain active={show} rotation={[radToDeg(0), radToDeg(86), radToDeg(0)]} 
                        scale={isMobile ? 0.5 : 1} position={isMobile ? [-1,-1,0] : [-8.3, -1, -1]} scrollOffset={scrollOffset} />
                        <Html position={[-12,5,10.5]} className="prevent-select" occlude="blending" ref={htmlRef}>
                            <div className="irsansx-bold">
                                <div className="text-shadow text-[70px]"> پویش ملی صادرات</div>
                                <div className="text-gradient text-[70px]"> پویش ملی صادرات</div>
                            </div>
                        </Html>
                    {/* </Center> */}
                </Canvas>
            </div>
            {/* <RetroGrid /> */}
        </div>
    );
}

export default Hero;