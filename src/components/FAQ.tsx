"use client"

import Image from "next/image";
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import bg from "@/../public/images/faq/faq_bg.png";
import question_icon from "@/../public/icons/big_question_mark.svg";
import link from "@/../public/icons/link.svg";
import { styled } from '@mui/material/styles';
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from '@react-three/drei';
import AccordionLogo from "@/components/3d/AccordionLogo";
import LinkLogo from "@/components/3d/LinkLogo";
import QuestionLogo from "@/components/3d/QuestionLogo";
import { Preload } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import MouseRotator from "@/components/3d/MouseRotator";
import AccordionLogoScene from "@/components/3d/AccordionlogoScene";

// MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1umw9bq-MuiSvgIcon-root
const FaqAccordion = styled(Accordion)<AccordionProps>(({ theme }) => ({
    maxWidth: '50vw',
    direction: 'rtl',
    minWidth: '200px',
    backgroundColor: '#ffffff',
    paddingBlock: '0.8rem',
    borderRadius: '1rem',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    '&::before': {
        display: 'none',
    },
    '&:first-of-type': {
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        },
        '&:last-of-type': {
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
        // Fix a rendering issue on Edge
        '@supports (-ms-ime-align: auto)': {
            borderBottomLeftRadius: '1rem',
            borderBottomRightRadius: '1rem',
        },
    },
}));



const FAQ = () => {
    const containerRef = useRef(null);
    let window_d: any;
    useEffect(() => {
        window_d = window.devicePixelRatio;
    }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full nazanin-bold" ref={containerRef}>
        <div>
            <Image src={bg} alt="faq bg" draggable={false} />
        </div>
        <div className="w-full flex flex-col justify-center items-center bg-[#FFDB87] irsansx">
            <div className="flex lg:flex-row-reverse flex-col justify-center items-center w-full py-12 gap-8
            relative md:-top-[140px] -top-[50px]">
                <div className="flex flex-col justify-center items-center gap-4">
                    <Image src={question_icon} height={200} alt="faq icon" />
                    {/* <div className="w-full h-full"> */}
                        {/* <Canvas> */}
                            {/* <Center scale={12}> */}
                                {/* <QuestionLogo scale={1} /> */}
                                {/* <directionalLight intensity={7} position={[1,1,1]} /> */}
                                {/* <directionalLight intensity={7} position={[-1,-1,-1]} /> */}
                                {/* <directionalLight intensity={7} position={[-12,-12,-3]} /> */}
                                {/* <ambientLight intensity={6.5} position={[-1,0,-1]} /> */}
                            {/* </Center> */}
                            {/* <OrbitControls maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} enableZoom={false} /> */}
                        {/* </Canvas> */}
                    {/* </div> */}
                    <h2 className="font-bold text-2xl">سوالات متداول</h2>
                    <button type="button" className="flex flex-row justify-center items-center gap-2 bg-[#CF3828] px-4 py-2 rounded-2xl all_faq_btn
                    text-sm font-bold text-white">
                        <div className="flex justify-center items-center w-[25px] h-[25px]">
                            <Canvas 
                                shadows
                                gl={{ antialias: true, alpha: true }}
                                dpr={window_d}
                                camera={{ position: [0, 0, 3], fov: 50 }}>
                                <ambientLight intensity={5} />
                                <MouseRotator containerRef={containerRef}>
                                    <Center>
                                    <LinkLogo scale={0.25} />
                                    </Center>
                                </MouseRotator>
                                <OrbitControls 
                                maxPolarAngle={Math.PI/2}
                                minPolarAngle={Math.PI/2}
                                enableZoom={false}
                                target={[0, 0, 0]}
                                // autoRotate // Optional: adds subtle rotation
                                // autoRotateSpeed={2}
                                />
                                <Preload all />
                            </Canvas>
                        </div>
                        <h5 className="w-full h-full flex justify-center items-center">
                            مشاهده همه سوالات
                        </h5>
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <FaqAccordion>
                        <AccordionSummary
                        sx={{ borderRadius: '1rem' }}
                        expandIcon={<AccordionLogoScene />}
                        aria-controls="panel1-content"
                        id="panel1-header">
                        آیا راهکاری وجود دارد تا قبل از ارسال کالا به خریدار خارجی، بتوان وجه آن را دریافت نمود؟
                        </AccordionSummary>
                        <AccordionDetails
                        sx={{ borderRadius: '1rem' }}>
                        بله. راهکاری وجود دارد تا اعتماد خریدار جلب گردد تا قبل از ارسال کالا، وجه را بطور کامل دریافت کنیم.
                        علی الخصوص برای بازار های خطرناک این راهکار پیشنهاد می گردد. در این حین باید از شرکت های بازرسی مثل IEI و SGS که مورد قبول طرفین هستند استفاده کنیم.
                        ابتدا باید مقدار اندکی در حدود ۳۰ درصد را بصورت پیش پرداخت دریافت کنیم، سپس محموله را به شرکت حمل و نقل (کشتیرانی) تحویل دهیم و “پیش نویس” بارنامه دریافت کنیم اما به هیچ وجه اجازه بارگیری نمی دهیمو بارنامه اصلی را صادر نمی کنیم تا زمانی که در ازای کپی پیش نویس بارنامه و تایید بازرسی، ۷۰ درصد مابقی پول را دریافت کنیم.
                        ابتدا هم توافق می کنیم که کدام طرف هزینه “بازرسی” را بپردازد. اگر خدای نکرده بدون دریافت کامل پول، بار از کشور خارج شود، کنترل کردن محموله، فروش به خریداری دیگر در همان کشور، ارسال به مبدا یا مقاصد جدید متحمل هزینه های سنگین انبارداری و گمرک خواهد شد و اصل و فرع سودمان تباه می شود. پس اکیدا پیشنهاد می گردد با این روش کار کنیم.
                        </AccordionDetails>
                    </FaqAccordion>
                    <FaqAccordion>
                        <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: '#CF3828' }} />}
                        aria-controls="panel2-content"
                        id="panel2-header">
                        آیا بدون سرمایه می توان صادرات کرد؟
                        </AccordionSummary>
                        <AccordionDetails>
                        بله. هستند کسانی که سرمایه مالی دارند اما مهارت تسلط بر زبان انگلیسی،  دانش صادراتی و تسلط بر زنجیره تامین و تحویل کالا را ندارند.
                        با پیوستن به این اشخاص می توانیم کار صادراتی را شروع کنیم
                        ضمنا با دریافت پیش پرداخت از طرف خریدار هم می توانیم سرمایه لازم را تامین کنیم.
                        </AccordionDetails>
                    </FaqAccordion>
                    <FaqAccordion>
                        <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: '#CF3828' }} />}
                        aria-controls="panel3-content"
                        id="panel3-header">
                        بهترین محصول برای صادرات چیست؟
                        </AccordionSummary>
                        <AccordionDetails>
                        ابتدا باید به سطحی از “خود شناسی” برسیم و تحقیقاتی را پیرامون پتانسیل های موجود اطرافمان انجام دهیم.
                        در این بین می توانیم از ابزار Export Potential Map سایت macmap.org هم استفاده کنیم. در نهایتمحصولی را باید انتخاب کنیم کهcommodity باشد.
                        یعنی در حجم و زمان نامحدود قابلیت تامین داشته باشد.
                        بر فرض مثال، در بحث خشکبار، پسته commodity است. مواد معدنی مانند سنگ ساختمانی کالاهایی هستند که قابلیت تامین در هر زمان و حجمی را دارند.
                        </AccordionDetails>
                    </FaqAccordion>
                    <FaqAccordion>
                        <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: '#CF3828' }} />}
                        aria-controls="panel4-content"
                        id="panel4-header">
                        بهترین کشور برای صادرات به آن کدام است؟
                        </AccordionSummary>
                        <AccordionDetails>
                        هیچگاه نمی توان چنین نسخه ای را بصورت کلی نوشت که کدام کشور بهترین مقصد صادراتی است، 
                        اما می توان با توجه به فاکتور هایی از قبیل تقاضای آن محصول، 
                        روابط بین کشور ها در بازه های زمانی مورد نظر، 
                        تعرفه های ترجیحی و پتانسیل های سازمان مان، 
                        در نهایت بازار هدف را انتخاب کرد.در این بین می توانیم از ابزار Export Potential Map سایتmacmap.org هم استفاده کنیم.
                        </AccordionDetails>
                    </FaqAccordion>
                    <FaqAccordion>
                        <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: '#CF3828' }} />}
                        aria-controls="panel5-content"
                        id="panel5-header">
                        آیا برای صادرات، خودم باید تولیدکننده باشم؟
                        </AccordionSummary>
                        <AccordionDetails>
                        لزوما نباید خودمان تولیدکننده باشیم. می توانیم از ظرفیت تولیدکننده های دیگر استفاده کنیم. در این باب مدل هایی وجود دارد، می توانیم Broker ، TraderیاEMC باشیم.
                        <br />
                        در مدل Broker ، سرمایه نداریم، واسطه هستیم. تولیدکننده تعهدی به شما ندارد.
                        <br />
                        در مدل Trader ، سرمایه از شماست.می توانید کالا را با برند کارخانه بخریدیا با برند خودتان (private label) به کارخانه سفارش دهید.
                        <br />
                        در مدل EMC (export management company)  ، تامین کننده به شما متعهد است. یک برند ثبت کنید و در اختیار کارخانه قرار دهید.
                        </AccordionDetails>
                    </FaqAccordion>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ