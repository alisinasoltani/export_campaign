'use client'

import { signIn, signOut, useSession } from "next-auth/react";
import login_cover from "@/../public/images/login/login_cover.png";
import google_icon from "@/../public/icons/google.svg";
import logo from "@/../public/logo.png";
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei';
import { Earth_Low } from "@/components/3d/Earth_Low"
import InstagramLogo from "./3d/InstagramLogo";
// import { Environment } from '@react-three/drei';

const Login = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="flex gap-4">
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">
          Sign out
        </button>
      </div>
    )
  }
  return (
    <div className="absolute w-full h-[100vh] flex flex-row justify-center items-center overflow-visible">
      <BackgroundGradientAnimation className="w-full h-[100vh] flex flex-row justify-center items-center overflow-visible">
        <div className="z-40 flex flex-col md:max-w-[400px] max-w-[300px] justify-between items-center gap-8 rounded-2xl bg-white shadow-2xl overflow-visible">
            <div className="absolute overflow-visible top-[calc(50%-15rem)] z-10 h-[190px]">
              <Canvas camera={{ position:[0, 1.145, 5.5] }} className="overflow-visible block" style={{ overflow: 'visible' }}>
                  <Center scale={1.7}> 
                      <ambientLight intensity={5} />
                      <Earth_Low />
                  </Center>
                  <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false}  />
              </Canvas>
            </div>
            {/* <Image src={login_cover} alt="export campaign cover" /> */}
            <div className="flex flex-row justify-center items-center py-4 px-12 z-40 rounded-t-2xl bg-white absolute md:top-[calc(50%-10rem)] top-[calc(50%-10.5rem)] overflow-hidden">
                <Image src={logo} width={100} alt="export campaign logo" />
            </div>
            <div className="flex flex-col justify-center items-center py-12 px-8 bg-white z-20 rounded-2xl">
              <div className="w-full flex flex-col justify-center items-center pb-4 pt-8 gap-8">
                <h1 className="w-full text-center irsansx-mid text-lg">به حساب کاربری خود وارد شوید</h1>
                <form>
                  <button className="flex flex-row gap-2 items-center irsansx-mid md:text-base hover:shadow-lg transition-all duration-300 bg-[#EBEBEB] py-4 px-8 rounded-2xl"
                  onClick={() => signIn("github")}>
                      ورود با حساب گوگل
                      <Image src={google_icon} width={24} alt="google icon" />
                  </button>
                </form>
              </div>
            </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  )
  // return (
  //   <button onClick={() => signIn("github")} className="bg-blue-500 text-white px-4 py-2 rounded">
  //     Sign in with GitHub
  //   </button>
  // );
}

export default Login;