'use client'

import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Lenis from 'lenis';
import Hero from "@/components/Hero";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      // lerp: 0.05,
      smoothWheel: true, // Smooth mouse wheel (default: true)
      // syncTouchLerp: 0.05,
      // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // wheelMultiplier: 1.2, // Adjust scroll speed for mouse wheel
      // touchMultiplier: 1.5, // Adjust scroll speed for touch
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <main className="flex flex-col w-full">
        {/* <Navbar /> */}
        {/* <Slider /> */}
        <Hero />
        <Services />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}