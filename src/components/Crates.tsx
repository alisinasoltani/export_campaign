'use client'

import { Canvas } from "@react-three/fiber";
import { Center, Html } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
// import { useState, useRef } from "react";
import { Box, OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
// import Crate from "@/components/3d/CrateMid";
import CrateMid from "@/components/3d/CrateMid";
import CargoShip from "@/components/3d/CargoShip";
import Container from "@/components/3d/Container";
import { degToRad } from "three/src/math/MathUtils.js";
// import React from 'react';

const Crates = () => {
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          <Canvas shadows={true} camera={{ position: [30, 2, -10], fov: 30 }} className="w-full h-full">
            <color attach="background" args={['#ffffff']} />
              <Suspense fallback={<Html><h1 className="text-4xl font-bold">Loading...</h1></Html>}>
                <Physics debug={false}>
                  <ambientLight intensity={1} />
                  <directionalLight position={[30, 3, 0]} intensity={1} />
                  <OrbitControls enableZoom={false} minDistance={15} maxDistance={30} enablePan={false} minAzimuthAngle={degToRad(50)} maxAzimuthAngle={degToRad(160)} minPolarAngle={degToRad(60)} maxPolarAngle={degToRad(100)} />
                  {
                    [...Array(4)].map((_, index) => (
                      // <Crate position={[0,2*index-2,-2]} key={index} />
                      <CrateMid position={[0,2*index-2,-2]} key={index} />
                    ))
                  }
                  {
                    [...Array(4)].map((_, index) => (
                      <CrateMid position={[1,2*index-2,-1]} key={index} />
                      // <Crate position={[1,2*index-2,-1]} key={index} />
                    ))
                  }
                  {
                    [...Array(3)].map((_, index) => (
                      <CrateMid position={[0,2*index-2,0]} key={index} />
                      // <Crate position={[0,2*index-2,0]} key={index} />
                    ))
                  }
                  {
                    [...Array(3)].map((_, index) => (
                      <CrateMid position={[1.2,2*index-2,1]} key={index} />
                      // <Crate position={[1.2,2*index-2,1]} key={index} />
                    ))
                  }
                  {
                    [...Array(2)].map((_, index) => (
                      <CrateMid position={[0,2*index-2,1.8]} key={index} />
                      // <Crate position={[0,2*index-2,1.8]} key={index} />
                    ))
                  }
                  {
                    [...Array(2)].map((_, index) => (
                      <CrateMid position={[0,2*index-2,3.7]} key={index} />
                      // <Crate position={[0,2*index-2,3.7]} key={index} />
                    ))
                  }
                  {
                    [...Array(2)].map((_, index) => (
                      <CrateMid position={[1,2*index-2,2.8]} key={index} />
                      // <Crate position={[1,2*index-2,2.8]} key={index} />
                    ))
                  }
                  {
                    [...Array(3)].map((_, index) => (
                      <CrateMid position={[0,2*index-2,5.6]} key={index} />
                      // <Crate position={[0,2*index-2,5.6]} key={index} />
                    ))
                  }
                  {
                    [...Array(3)].map((_, index) => (
                      <CrateMid position={[1,2*index-2,4.5]} key={index} />
                      // <Crate position={[1,2*index-2,4.5]} key={index} />
                    ))
                  }
                  {
                    [...Array(4)].map((_, index) => (
                      <CrateMid position={[0,2*index-2,7.5]} key={index} />
                      // <Crate position={[0,2*index-2,7.5]} key={index} />
                    ))
                  }
                  {
                    [...Array(4)].map((_, index) => (
                      <CrateMid position={[1,2*index-2,6.5]} key={index} />
                      // <Crate position={[1,2*index-2,6.5]} key={index} />
                    ))
                  }
                  <Center>
                    <RigidBody type="fixed" friction={4} name="floor">
                        <Box position={[0, 0, 0]} args={[40, 0.01, 100]} receiveShadow castShadow={false}>
                            <meshStandardMaterial transparent={true} opacity={0} />
                        </Box>
                    </RigidBody>
                    <RigidBody type="fixed" name="ship">
                      <CargoShip scale={3.5} rotation={[degToRad(0),degToRad(-70),degToRad(0)]} position={[-12,3.4,6]} />
                    </RigidBody>
                    <RigidBody type="fixed" name="container">
                      <Container scale={5} rotation={[degToRad(0),degToRad(-40),degToRad(0)]} position={[-4,0,-6]} />
                    </RigidBody>
                  </Center>
                  {/* </Stage> */}
                </Physics>
              </Suspense>
          </Canvas>
        </div>
    );
}

export default Crates;

