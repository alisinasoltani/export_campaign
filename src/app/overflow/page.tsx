'use client'

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { JSX, JSXElementConstructor, useEffect, useRef } from "react";
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
import OverflowQuestionList from "@/components/OverflowQuestionList";
import type { Question } from "@/types";
// import Image from "next/image";

const questions: Question[] = [
    {
        author_id: 1,
        comments: ['1', 'very good', 'nice one!'],
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
        created_at: '1741966711244',
        stars: 12,
        tags: ['صادرات', 'خرما', 'کارت بازرگانی'],
        title: 'صدور کارت بازرگانی خرما',
        views: 22
    },
    {
        author_id: 2,
        comments: ['1', 'very good', 'nice one!'],
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
        created_at: '1741966711244',
        stars: 12,
        tags: ['صادرات', 'خرما', 'کارت بازرگانی'],
        title: 'صدور کارت بازرگانی خرما',
        views: 22
    },
    {
        author_id: 3,
        comments: ['1', 'very good', 'nice one!'],
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
        created_at: '1741966711244',
        stars: 12,
        tags: ['صادرات', 'خرما', 'کارت بازرگانی'],
        title: 'صدور کارت بازرگانی خرما',
        views: 22
    },
    {
        author_id: 4,
        comments: ['1', 'very good', 'nice one!'],
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
        created_at: '1741966711244',
        stars: 12,
        tags: ['صادرات', 'خرما', 'کارت بازرگانی'],
        title: 'صدور کارت بازرگانی خرما',
        views: 22
    },
];

const page = () => {
    const searchBarRef = useRef<HTMLDivElement>(null);
    const pageLenis = useRef<Lenis>(null);
    useEffect(() => {
        pageLenis.current = new Lenis({
          autoRaf: true,
        });
    }, []);
    const handleClick = () => {
        pageLenis.current?.scrollTo(window.scrollY + window.innerHeight, {
            duration: 3,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
    };
    const queryHandler = (searchTerm: string) => {}
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
            <div className="w-full bg-[#fdfdfd]">
                <OverflowSearchbar containerRef={searchBarRef} queryHandler={queryHandler} />
                <div className="flex flex-col justify-center items-center gap-8 py-12" ref={searchBarRef}>
                    {
                        questions.map((question, index) => {
                            if (index == 2) {
                                return <OverflowQuestionList ref={searchBarRef} key={index} question={question} />
                            } else {
                                return <OverflowQuestionList key={index} question={question} />
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default page;