'use client';

import FAQ from '@/components/FAQ2';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Lenis from 'lenis';
import Hero from '@/components/Hero';
import { useEffect, useRef } from 'react';
import Crates from "@/components/Crates";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Loading from "@/components/Loading";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Initialize Lenis and integrate with GSAP
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
    });

    // RAF loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Integrate Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  // Horizontal scrolling animation
  useGSAP(
    () => {
      const horizontalContainer = scrollContainerRef.current;
      if (horizontalContainer) {
        // Calculate scroll distance
        const scrollDistance = horizontalContainer.offsetWidth - window.innerWidth;

        // GSAP horizontal scroll animation
        gsap.to(horizontalContainer, {
          x: -scrollDistance,
          ease: 'none',
          scrollTrigger: {
            trigger: horizontalContainer,
            pin: true,
            scrub: true,
            end: () => '+=' + scrollDistance,
          },
        });
      }
    },
    { scope: scrollContainerRef }
  );

  // Navbar animations
  useGSAP(
    () => {
      // Animation 1: Background and blur
      const windowWidth = window.innerWidth;
      gsap.to('#navbar', {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(30px)',
        scrollTrigger: {
          trigger: '#services',
          start: `${windowWidth} center`,
          end: `${windowWidth} center`,
          toggleActions: 'play none none reset',
          // markers: true
        },
      });

      // Animation 2: Color change
      gsap.fromTo(
        '#navbar',
        { color: '#000000' },
        {
          color: '#ffffff',
          scrollTrigger: {
            trigger: '#faq',
            start: `${(windowWidth*6)-10} center`,
            end: `${windowWidth*6} center`,
            toggleActions: 'play none none reset',
            // markers: true
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div className="w-full min-h-screen overflow-hidden" ref={containerRef}>
      <main className="w-full overflow-hidden">
        <Navbar />
        <div
          className="w-[800vw] h-[100vh] flex flex-row overflow-hidden"
          ref={scrollContainerRef}
        >
          <Hero />
          {/* <Loading /> */}
          <Services />
          <Crates />
          <FAQ />
          <Footer />
        </div>
      </main>
    </div>
  );
}