'use client'

import Image from "next/image";
import "swiper/css";
import 'swiper/css/navigation';
import { ServiceProps } from "@/types";
import { useRef } from "react";
import gsap from "gsap";
import { degToRad } from 'three/src/math/MathUtils.js'
import road from "@/../public/icons/road.svg";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import Service1 from "@/components/3d/Service1";
import Service3 from "@/components/3d/Service3";
import Chat from "@/components/3d/Chat";
import { Center, OrbitControls } from "@react-three/drei";
import Ai from "@/components/3d/Ai";
import { useGSAP } from "@gsap/react";
import { RainbowButton } from "./ui/rainbow-button";
import Link from "next/link";

const ServicesInfo: ServiceProps[] = [
    {
        title: "صفر تا صد صادرات در 10 گام",
        subtitle: "Export Training",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها",
        isNew: false,
        btnTitle: "شروع مطالعه",
        img: "/images/services/10-Steps.png",
        href: "/services/export_training",
    },
    {
        title: "Export Knowledge Assessment",
        subtitle: "ارزیابی دانش صادراتی",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها",
        isNew: false,
        btnTitle: "شروع آزمون",
        img: "/images/services/assessments.png",
        href: "/services/export_knowledge_assessment"
    },
    {
        title: "Export Plus Service Center",
        subtitle: "مرکز خدمات +Export",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها",
        isNew: false,
        btnTitle: "اطلاعات بیشتر",
        img: "/images/services/export_service_center.png",
        href: "/services/service_center"
    },
    {
        title: "FAQ",
        subtitle: "سوالات متداول",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها",
        isNew: false,
        btnTitle: "مطالعات بیشتر",
        img: "/images/services/FAQ-1.png",
        href: "/services/faq"
    },
    {
        title: "IDEA Accelerator",
        subtitle: "مرکز رشد ایده ها",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها",
        isNew: false,
        btnTitle: "اطلاعات بیشتر",
        img: "/images/services/Idea.png",
        href: "/services/idea_accelerator"
    },
    {
        title: "The Peaceful World",
        subtitle: "مشارکت در برند ملی",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها",
        isNew: false,
        btnTitle: "اطلاعات بیشتر",
        img: "/images/services/TPW.png",
        href: "/services/peaceful_world"
    },
];

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const servicesRef = useRef<HTMLDivElement|null>(null);
    // const serviceContaicerRef = useRef<HTMLDivElement|null>(null);
    useGSAP(() => {
        // const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        gsap.fromTo('#education canvas', {
            autoAlpha: 0,
            y: -20
        }, {
            scrollTrigger: {
                start: `${(windowHeight)+10} center`,
                toggleActions: 'play none none none',
            },
            y: 0,
            autoAlpha: 1,
        });
        gsap.fromTo('#askQuestions canvas', {
            autoAlpha: 0,
            y: +20
        }, {
            scrollTrigger: {
                start: `${(windowHeight*3.5)+10} center`,
                toggleActions: 'play none none none',
                // markers: true
            },
            y: 0,
            autoAlpha: 1,
        });
        gsap.fromTo('#exportServices canvas', {
            autoAlpha: 0,
            y: -20
        }, {
            scrollTrigger: {
                start: `${(windowHeight*6)} center`,
                toggleActions: 'play none none none',
                // markers: true
            },
            y: 0,
            autoAlpha: 1,
        });
        gsap.fromTo('#ai canvas', {
            autoAlpha: 0,
            y: +20
        }, {
            scrollTrigger: {
                start: `${(windowHeight*8)} center`,
                toggleActions: 'play none none none',
                // markers: true
            },
            y: 0,
            autoAlpha: 1,
        });
    }, {scope: servicesRef});
    return (
        <div className="w-[400vw] h-[100vh] flex justify-normal items-center z-[90]" ref={servicesRef}>
            <div className="w-[100vw] h-full flex justify-center items-center p-[12rem]" id="education">
                <div className="w-full h-[110%]">
                    <Canvas className="overflow-visible" camera={{ position: [2, 1, 0.24], rotation: [0, 0, 0] }}>
                        <Center>
                            <Service1 rotation={[degToRad(0), degToRad(-25), degToRad(5)]} />
                        </Center>
                        <OrbitControls minPolarAngle={degToRad(40)} maxPolarAngle={degToRad(80)} minAzimuthAngle={degToRad(80)} maxAzimuthAngle={degToRad(90)} enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight intensity={1} position={[3, 3, 3]} />
                        <directionalLight intensity={1} position={[3, 3, -3]} />
                    </Canvas>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-end gap-4">
                    <h2 className="irsansx-mid font-medium md:text-xl text-lg text-right" style={{ direction: 'rtl' }}>
                    یادگیری ساخت‌یافته، ارزیابی هدفمند: مسیر توسعه دانش صادراتی با پشتوانه تعاملی و انگیزشی
                    </h2>
                    <div className="irsansx md:text-lg text-base max-w-[40vw] text-right" style={{ direction: 'rtl' }}>
                        <span>
                        آموزش‌ها به‌صورت مرحله‌به‌مرحله و تعاملی، یادگیری مؤثر و انگیزه‌بخش را برای همراهان پویش ملی صادرات به ارمغان می‌آورد. 
                        سیستم ارزیابی با آزمون‌های تعیین سطح و تحلیل پاسخ‌ها، این مسیر را برای هر فرد شخصی‌سازی می‌کند. 
                        با تکمیل مأموریت‌های تیمی و کسب امتیاز، امکان دریافت نشان‌های معتبر و دسترسی به خدمات ویژه فراهم می‌شود.
                        </span>
                    </div>
                    <Link href={"/levels"}>
                        <RainbowButton>مسیر صادرات را شروع کنید</RainbowButton>
                    </Link>
                </div>
            </div>
            <div className="w-[100vw] h-full flex justify-center items-center p-[12rem]" id="askQuestions">
                <div className="w-full h-[140%]">
                    <Canvas className="overflow-visible" camera={{ position: [2.5, 0, 0.24], rotation: [0, 0, 0] }}>
                        <Center>
                            <Chat rotation={[degToRad(0), degToRad(100), degToRad(0)]} />
                        </Center>
                        <OrbitControls minPolarAngle={degToRad(40)} maxPolarAngle={degToRad(120)} minAzimuthAngle={degToRad(80)} maxAzimuthAngle={degToRad(120)} enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight intensity={1} position={[3, 3, 3]} />
                        <directionalLight intensity={1} position={[3, 3, -3]} />
                    </Canvas>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-end gap-4">
                    <h2 className="irsansx-mid font-medium md:text-xl text-lg text-right" style={{ direction: 'rtl' }}>
                    پاسخ در لحظه، تعامل ماندگار: تجربه‌ای ساخت‌یافته برای رفع ابهام در مسیر صادرات
                    </h2>
                    <div className="irsansx md:text-lg text-base max-w-[40vw] text-right" style={{ direction: 'rtl' }}>
                        <span>
                        در این بستر آموزشی و حرفه‌ای، بخش پرسش‌و‌پاسخ به‌گونه‌ای طراحی شده است که کاربران در هر مرحله از مسیر صادرات، بتوانند سوالات خود را به‌صورت دقیق و ساخت‌یافته مطرح کرده و پاسخ‌هایی قابل اعتماد و قابل استناد دریافت کنند. 
                        سازوکارهای نظارتی مانند امتیازدهی به پاسخ‌ها، امکان نقد، فکت‌چک، و قابلیت دیسلایک، موجب ارتقاء کیفیت تعاملات شده و از انتشار اطلاعات نادرست جلوگیری می‌کند. 
                        همچنین، کاربران می‌توانند با استفاده از چت خصوصی با دیگر اعضا یا متخصصان در ارتباط باشند و از تجربه‌های یکدیگر بهره‌مند شوند. 
                        این فرآیند نه‌تنها موجب تسریع یادگیری می‌شود، بلکه حس مشارکت مؤثر و حمایت مستمر را در میان اعضای جامعه ایجاد می‌نماید.
                        </span>
                    </div>
                    {/* <button type="button" className="min-w-fit bg-[#E6A817] hover:shadow-lg transition-all duration-500 px-6 py-2 rounded-xl flex flex-row items-center justify-center gap-4">
                        <Image src={road} width={28} alt="road button" />
                    شروع مسیر
                    </button> */}
                    <Link href={"/overflow"}>
                        <RainbowButton className="irsansx-mid">سوال خود را بپرسید</RainbowButton>
                    </Link>
                </div>
            </div>
            <div className="w-[100vw] h-full flex justify-center items-center p-[12rem]" id="exportServices">
                <div className="w-full h-[110%]">
                    <Canvas className="overflow-visible" camera={{ position: [4, 2, 0.24], rotation: [0, 0, 0] }}>
                        <Center>
                            <Service3 rotation={[degToRad(0), degToRad(-10), degToRad(0)]} />
                        </Center>
                        <OrbitControls minPolarAngle={degToRad(40)} maxPolarAngle={degToRad(120)} minAzimuthAngle={degToRad(80)} maxAzimuthAngle={degToRad(120)} enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight intensity={1} position={[3, 3, 3]} />
                        <directionalLight intensity={1} position={[3, 3, -3]} />
                    </Canvas>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-end gap-4">
                    <h2 className="irsansx-mid font-medium md:text-xl text-lg text-right" style={{ direction: 'rtl' }}>
                    برند ملی، شتاب‌دهی ایده‌ها و خدمات صادراتی جامع: سه گام هم‌افزا برای تحول در صادرات
                    </h2>
                    <div className="irsansx md:text-lg text-base max-w-[40vw] text-right" style={{ direction: 'rtl' }}>
                        <span>
                        «برند ملی The Peaceful World» با تجمیع ظرفیت‌های صنایع غذایی و ارائه هویت واحد به تولیدکنندگان ایمن، امکان حضور یکپارچه در بازارهای بین‌المللی و نمایشگاه‌های تخصصی را فراهم می‌آورد. 
                        «مرکز رشد ایده‌ها» بستری است برای حمایت از کارآفرینانی که ایده دارند اما دغدغه سرمایه‌گذاری، تیم‌سازی و مسیر عملیاتی را تجربه نکرده‌اند؛ جایی که از صفر تا تحقق یک پروژه صادراتی واقعی با پشتیبانی مالی و تخصصی همراه خواهند بود. 
                        و در نهایت، «اکسپورت پلاس» به‌عنوان مرکز خدمات تخصصی صادرات، مجموعه‌ای از امکانات فنی، تحقیقاتی، ایمنی غذایی، بازاریابی بین‌الملل و ارزیابی خریداران را ارائه می‌دهد تا مسیر صادرات برای بنگاه‌های کوچک، متوسط و بزرگ، هموار و علمی باشد. این سه خدمت با رویکردی هم‌افزا، بنیان رقابتی، هویتی و عملیاتی صادرات کشور را بازتعریف می‌کنند.
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-[100vw] h-full flex justify-center items-center p-[12rem]" id="ai">
                <div className="w-full h-[140%]">
                    <Canvas className="overflow-visible" camera={{ position: [5.8, 2, 0.24], rotation: [0, 0, 0], fov: 50 }}>
                        <Center>
                            <Ai rotation={[degToRad(0), degToRad(10), degToRad(0)]} />
                        </Center>
                        <OrbitControls enableZoom={false} enablePan={false} />
                        <ambientLight intensity={1} />
                        <directionalLight intensity={1} position={[3, 3, 3]} />
                        <directionalLight intensity={1} position={[3, 3, -3]} />
                    </Canvas>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-end gap-4">
                    <h2 className="irsansx-mid font-medium md:text-xl text-lg">
                    هوش مصنوعی در خدمت صادرات
                    </h2>
                    <div className="irsansx md:text-lg text-base max-w-[40vw] text-right" style={{ direction: 'rtl' }}>
                        <span>
                            هوش مصنوعی نقشی کلیدی در ساده‌سازی و شخصی‌سازی فرآیند صادرات ایفا می‌کند. این فناوری نه تنها مسیر یادگیری و پیشرفت هر فرد را شخصی‌سازی می‌کند،
                            بلکه با طراحی آزمون‌های هوشمند، نقاط ضعف را شناسایی و منابع مناسب را معرفی می‌کند. همچنین در جلسات آنلاین،
                            AI به‌عنوان یک دستیار زنده حضور دارد تا محتوای جلسات را خلاصه، بازخوردها را ذخیره و سوالات را پاسخ دهد. 
                            از سوی دیگر، سیستم تحلیل بازار مبتنی بر AI
                            ، ترندهای صادراتی و فرصت‌های جهانی را شناسایی کرده و در نهایت، قراردادهای هوشمند غیرمتمرکز با کمک هوش مصنوعی، فرآیند تبادل کالا و ارز را امن، سریع و شفاف می‌سازد.
                        </span>
                    </div>
                    <RainbowButton className="irsansx-mid" disabled={true}>...به زودی</RainbowButton>
                </div>
            </div>
        </div>
    );
}

export default Services;