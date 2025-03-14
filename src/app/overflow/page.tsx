'use client'

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useEffect } from "react";
import Lenis from "lenis";
import { TextShimmer } from '@/components/ui/text-shimmer';
import { ShimmerButton } from "@/components/ui/shimmer-button";
// import lightbulb_logo from "@/../public/icons/lightbulb_filled.svg";
// import search_logo from "@/../public/icons/search_filled.svg";
import SearchLogo from "@/components/SearchLogo";
import LightbulbLogo from "@/components/LightbulbLogo";
import Image from "next/image";
import ArrowsDownLogo from "@/components/ArrowsDownLogo";
import OverflowSearchbar from "@/components/OverflowSearchbar";
// import Image from "next/image";

const page = () => {
    let lenis: Lenis;
    useEffect(() => {
        lenis = new Lenis({
          autoRaf: true,
        });
    }, []);
    const handleClick = () => {
        lenis?.scrollTo(window.scrollY + window.innerHeight, {
            duration: 3,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
    };
    return (
        <div>
            <AuroraBackground>
                <motion.div
                initial={{ opacity: 0.0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }} className="relative flex flex-col gap-12 items-center justify-center px-4 nazanin-bold">
                    <div className="flex flex-col md:gap-4 gap-1 justify-center items-center text-3xl md:text-7xl font-bold dark:text-white text-center" style={{ direction: 'rtl' }}>
                        <TextShimmer
                        duration={3}
                        className='md:text-[40px] text-2xl py-1 font-medium [--base-color:theme(colors.gray.400)] [--base-gradient-color:theme(colors.gray.400)] dark:[--base-color:theme(colors.gray.400)] dark:[--base-gradient-color:theme(colors.white)]'>
                        بپرسید، هم‌افزا شوید، و در کنار جامعه‌ای از متخصصان رشد کنید.
                        </TextShimmer>
                        <TextShimmer
                        duration={3}
                        className='md:text-[40px] text-2xl py-1 font-medium [--base-color:theme(colors.gray.400)] [--base-gradient-color:theme(colors.gray.400)] dark:[--base-color:theme(colors.gray.400)] dark:[--base-gradient-color:theme(colors.white)]'>
                        چالش‌های تجارت جهانی را به فرصت تبدیل کنید.
                        </TextShimmer>
                    </div>
                    <div className="flex flex-row-reverse justify-center items-center gap-4">
                        <div className="z-10 flex items-center justify-center">
                            <ShimmerButton className="shadow-2xl flex justify-center items-center gap-2 nazanin-bold">
                                <LightbulbLogo />
                                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                بپرسید
                                </span>
                            </ShimmerButton>
                        </div>
                        <div className="z-10 flex items-center justify-center">
                            <ShimmerButton className="shadow-2xl flex justify-center items-center gap-2 nazanin-bold">
                                <SearchLogo />
                                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                جست و جو کنید
                                </span>
                            </ShimmerButton>
                        </div>
                    </div>
                </motion.div>
            </AuroraBackground>
            <div className="w-full flex justify-center items-center absolute bottom-6" onClick={handleClick}>
                <ArrowsDownLogo />
            </div>
            <div className="w-full h-[100vh]">
                <OverflowSearchbar />
            </div>
        </div>
    );
}

export default page;