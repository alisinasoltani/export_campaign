'use client'

import FAQ from "@/components/FAQ2";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Lenis from 'lenis';
import Hero from "@/components/Hero";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement|null>(null);
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
  useGSAP(() => {
    gsap.to('#navbar', {
      scrollTrigger: {
        trigger: "#services",
        toggleActions: "play play reset none",
        start: "top top",
        end: "top top",
      },
      backgroundColor: "rgba(255,255,255,0.2)",
      backdropFilter: "blur(10px)",
    })
  }, { scope: containerRef })
  return (
    <div className="flex flex-col justify-center items-center w-full" ref={containerRef}>
      <main className="flex flex-col w-full">
        <Navbar />
        {/* <Slider /> */}
        <Hero />
        <Services />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}