'use client'

import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Lenis from 'lenis';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <main className="flex flex-col w-full">
        <Navbar />
        <Slider />
        <Services />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}