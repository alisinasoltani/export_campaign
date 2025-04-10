'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { FrequentQuestions } from '@/types';
import Image from 'next/image';
import logo from "@/app/favicon.ico";
import OverflowTag from './OverflowTag';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import gsap from 'gsap';
import 'swiper/css';

const Questions: FrequentQuestions[] = [
    {
        id: 0,
        author: "پویش ملی صادرات",
        authorId: 0,
        body: "آیا راهکاری وجود دارد تا قبل از ارسال کالا به خریدار خارجی، بتوان وجه آن را دریافت نمود؟",
        closed: false,
        createdAt: Date.now().toFixed(),
        tags: ["پیش پرداخت", "خریدار", "دریافت وجه"],
        title: "دریافت وجه از خریدار خارجی",
        viewCount: 10,
        answers: [
            `بله. راهکاری وجود دارد تا اعتماد خریدار جلب گردد تا قبل از ارسال کالا، وجه را بطور کامل دریافت کنیم.علی الخصوص برای بازار های خطرناک این راهکار پیشنهاد می گردد. در این حین باید از شرکت های بازرسی مثل IEI و SGS که مورد قبول طرفین هستند استفاده کنیم.
ابتدا باید مقدار اندکی در حدود ۳۰ درصد را بصورت پیش پرداخت دریافت کنیم، سپس محموله را به شرکت حمل و نقل (کشتیرانی) تحویل دهیم و “پیش نویس” بارنامه دریافت کنیم اما به هیچ وجه اجازه بارگیری نمی دهیمو بارنامه اصلی را صادر نمی کنیم تا زمانی که در ازای کپی پیش نویس بارنامه و تایید بازرسی، ۷۰ درصد مابقی پول را دریافت کنیم.
ابتدا هم توافق می کنیم که کدام طرف هزینه “بازرسی” را بپردازد. اگر خدای نکرده بدون دریافت کامل پول، بار از کشور خارج شود، کنترل کردن محموله، فروش به خریداری دیگر در همان کشور، ارسال به مبدا یا مقاصد جدید متحمل هزینه های سنگین انبارداری و گمرک خواهد شد و اصل و فرع سودمان تباه می شود. پس اکیدا پیشنهاد می گردد با این روش کار کنیم.            `
        ]
    },
    {
        id: 1,
        author: "پویش ملی صادرات",
        authorId: 0,
        body: "آیا بدون سرمایه می توان صادرات کرد؟",
        closed: false,
        createdAt: Date.now().toFixed(),
        tags: ["صادرات", "سرمایه"],
        title: "نقش سرمایه در صادرات",
        viewCount: 10,
        answers: [
            `بله. هستند کسانی که سرمایه مالی دارند اما مهارت تسلط بر زبان انگلیسی،  دانش صادراتی و تسلط بر زنجیره تامین و تحویل کالا را ندارند.
            با پیوستن به این اشخاص می توانیم کار صادراتی را شروع کنیم
            ضمنا با دریافت پیش پرداخت از طرف خریدار هم می توانیم سرمایه لازم را تامین کنیم.
            `
        ]
    },
    {
        id: 2,
        author: "پویش ملی صادرات",
        authorId: 0,
        body: "بهترین محصول برای صادرات چیست؟",
        closed: false,
        createdAt: Date.now().toFixed(),
        tags: ["صادرات", "محصول صادراتی"],
        title: "بهترین محصول برای صادرات",
        viewCount: 10,
        answers: [
            `ابتدا باید به سطحی از “خود شناسی” برسیم و تحقیقاتی را پیرامون پتانسیل های موجود اطرافمان انجام دهیم.
            در این بین می توانیم از ابزار Export Potential Map سایت macmap.org هم استفاده کنیم. در نهایتمحصولی را باید انتخاب کنیم کهcommodity باشد.
            یعنی در حجم و زمان نامحدود قابلیت تامین داشته باشد.
            بر فرض مثال، در بحث خشکبار، پسته commodity است. مواد معدنی مانند سنگ ساختمانی کالاهایی هستند که قابلیت تامین در هر زمان و حجمی را دارند.
            `
        ]
    },
    {
        id: 3,
        author: "پویش ملی صادرات",
        authorId: 0,
        body: "بهترین کشور برای صادرات به آن کدام است؟",
        closed: false,
        createdAt: Date.now().toFixed(),
        tags: ["صادرات", "مقصد"],
        title: "بهترین کشور برای صادرات",
        viewCount: 10,
        answers: [
            `هیچگاه نمی توان چنین نسخه ای را بصورت کلی نوشت که کدام کشور بهترین مقصد صادراتی است، 
            اما می توان با توجه به فاکتور هایی از قبیل تقاضای آن محصول، 
            روابط بین کشور ها در بازه های زمانی مورد نظر، 
            تعرفه های ترجیحی و پتانسیل های سازمان مان، 
            در نهایت بازار هدف را انتخاب کرد.در این بین می توانیم از ابزار Export Potential Map سایتmacmap.org هم استفاده کنیم.
            `
        ]
    },
    {
        id: 3,
        author: "پویش ملی صادرات",
        authorId: 0,
        body: "آیا برای صادرات، خودم باید تولیدکننده باشم؟",
        closed: false,
        createdAt: Date.now().toFixed(),
        tags: ["تولید", "صادرات", "تولید کننده"],
        title: "رابطه تولید کننده و صادرات",
        viewCount: 10,
        answers: [
            `لزوما نباید خودمان تولیدکننده باشیم. می توانیم از ظرفیت تولیدکننده های دیگر استفاده کنیم. در این باب مدل هایی وجود دارد، می توانیم Broker ، TraderیاEMC باشیم.
            در مدل Broker ، سرمایه نداریم، واسطه هستیم. تولیدکننده تعهدی به شما ندارد.
            در مدل Trader ، سرمایه از شماست.می توانید کالا را با برند کارخانه بخریدیا با برند خودتان (private label) به کارخانه سفارش دهید.
            در مدل EMC (export management company)  ، تامین کننده به شما متعهد است. یک برند ثبت کنید و در اختیار کارخانه قرار دهید.
            `
        ]
    },
]

gsap.registerPlugin([ScrollTrigger]);

const FAQ = () => {
    const swiperRef = useRef<any>(null);
    useGSAP(() => {
        gsap.fromTo('.faq', {
            autoAlpha: 0,
            y: -20
        }, {
            scrollTrigger: {
                start: 'center center',
                end: 'center center',
                toggleActions: 'play none none none'
            },
            y: 0,
            autoAlpha: 1,
            stagger: 0.2
        });
    }, {scope: swiperRef})
    return (
        <div className='flex flex-col py-[4rem]'>
            <div className='w-full flex justify-center items-center text-3xl irsansx font-bold text-center'><h2>سوالات متداول</h2></div>
            <div className='w-full min-h-[100vh] pt-[2rem] pb-[6rem] px-[5rem] flex'>
                <Swiper
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
                autoplay={{delay: 500}}
                loop={true}
                pagination={{
                clickable: true,
                }}
                modules={[Navigation]}
                className="FAQ"
                ref={swiperRef}>
                    {
                        Questions.map((question, index) => (
                            <SwiperSlide className='overflow-visible bg-[rgba(255,255,255, 0.1)] w-full h-full rounded-3xl px-8 py-8 flex flex-col border-2 backdrop-blur-xl border-black faq' key={index}>
                                <div className='w-full h-full flex flex-col justify-start items-end'>
                                    <h3 className='text-right font-bold text-lg irsansx pb-5' style={{ direction: 'rtl' }}>
                                        {question.title}
                                    </h3>
                                    <h4 className='text-right font-normal text-lg irsansx pb-5' style={{ direction: 'rtl' }}>
                                        {question.body}
                                    </h4>
                                    <div className='flex justify-end items-center gap-2 pb-5'>
                                        <h5 className='text-base font-medium irsansx text-[#5e5e5e]'>
                                            {question.author}
                                        </h5>
                                        <div className='w-8 h-8 rounded-full overflow-hidden shadow-lg'>
                                            <Image className='w-full h-full' src={logo} alt={`${question.author} profile picture`} />
                                        </div>
                                    </div>
                                    <div className='w-full h-[1px] bg-[#e1e1e1]'></div>
                                    <div className='pt-5 pb-2'>
                                        <h3 className='irsansx font-medium text-xl pb-2 text-right'> 
                                            دیدگاه برتر
                                        </h3>
                                        <div className='text-base irsansx font-light text-righ line-clamp-[7]' style={{ direction: 'rtl' }}>
                                            {question.answers[0]}
                                        </div>
                                    </div>
                                    <div className='flex justify-end items-center gap-2 pb-5'>
                                        <h5 className='text-base font-medium irsansx text-[#5e5e5e]'>
                                            {question.author}
                                        </h5>
                                    </div>
                                    <div className="w-full h-full flex flex-col justify-end items-end self-end gap-2">
                                        <div className="h-full max-w-fit flex self-start items-end justify-start gap-4">
                                            <div className="flex justify-between items-center gap-1">
                                                <button type="button" className="irsansx-mid bg-blue-400 px-3 py-2 rounded-xl text-sm text-right">{ question.answers.length } :دیدگاه ها</button>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-end pb-[7px] gap-2">
                                            {
                                            question.tags.map((tag, index) => (
                                                <OverflowTag key={index} tag={tag} />
                                            ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default FAQ;