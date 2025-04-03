'use client'

import Image from "next/image";
// import steps from "@/../public/images/services/10-Steps.png";
// import assessments from "@/../public/images/services/assessments.png";
// import export_service_center from "@/../public/images/services/export_service_center.png";
// import faq from "@/../public/images/services/FAQ-1.png";
// import idea from "@/../public/images/services/Idea.png";
// import tpw from "@/../public/images/services/TPW.png";
import idea_icon from "@/../public/icons/idea.svg";
import checklist_icon from "@/../public/icons/checklist.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import Service from "./Service";
import { ServiceProps } from "@/types";

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

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center" id="services">
        <div className="flex flex-row gap-4 pt-12 text-3xl irsansx-mid service-title">
            <Image src={idea_icon} width={42} alt="idea icon" />
            <h2>خدمات ما</h2>
            <Image src={checklist_icon} width={42} alt="idea icon" />
        </div>
        <div className="md:hidden flex w-full pt-8 px-12">
            <Swiper className="w-full h-[500px]" navigation={true} modules={[Navigation]} spaceBetween={30}>
                {
                ServicesInfo.map((service, index) => (
                    <SwiperSlide key={index} className="h-[500px] rounded-xl">
                        <Service title={service.title} subtitle={service.subtitle} isNew={service.isNew} 
                        img={service.img} href={service.href} btnTitle={service.btnTitle} description={service.description} />
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
        <div className="md:flex hidden justify-evenly items-center gap-4 flex-wrap px-12 pt-8">
            {
                ServicesInfo.map((service, index) => (
                    <Service key={index} title={service.title} subtitle={service.subtitle} isNew={service.isNew} 
                    img={service.img} href={service.href} btnTitle={service.btnTitle} description={service.description} />
                ))
            }
        </div>
        {/* <div className="md:flex hidden md:flex-col md:w-full md:justify-center md:items-center gap-8 py-12">
            <div className="flex md:flex-row sm:flex-row sm:flex-wrap flex-col w-full gap-6 justify-center items-center">
                <div className="flex flex-col gap-2 bg-[#F5F5F5] px-8 py-12 rounded-xl shadow-lg justify-center items-center font-bold">
                    <Image src={faq} width={200} alt="Frequently Asked Questions" />
                    <h3>FAQ</h3>
                    <h3>سوالات متداول</h3>
                </div>
                <div className="flex flex-col gap-2 bg-[#F5F5F5] px-8 py-12 rounded-xl shadow-lg justify-center items-center font-bold">
                    <Image src={assessments} width={200} alt="Export Knowledge Assessment" />
                    <h3 className="text-sm">Export Knowledge Assessment</h3>
                    <h3>ارزیابی دانش صادراتی</h3>
                </div>
                <div className="flex flex-col gap-2 bg-[#F5F5F5] px-8 py-12 rounded-xl shadow-lg justify-center items-center font-bold">
                    <Image src={steps} width={200} alt="Export Training" />
                    <h3>Export Training</h3>
                    <h3>آموزش صفر تا صد صادرات</h3>
                </div>
            </div>
            <div className="flex md:flex-row sm:flex-row sm:flex-wrap flex-col w-full gap-6 justify-center items-center">
                <div className="flex flex-col gap-2 bg-[#F5F5F5] px-8 py-12 rounded-xl shadow-lg justify-center items-center font-bold">
                    <Image src={export_service_center} width={200} alt="Export Plus Service Center" />
                    <h3>Export Plus Service Center</h3>
                    <h3>مرکز خدمات +Export</h3>
                </div>
                <div className="flex flex-col gap-2 bg-[#F5F5F5] px-8 py-12 rounded-xl shadow-lg justify-center items-center font-bold">
                    <Image src={idea} width={200} alt="IDEA Accelerator" />
                    <h3>IDEA Accelerator</h3>
                    <h3>مرکز رشد ایده ها</h3>
                </div>
                <div className="flex flex-col gap-2 bg-[#F5F5F5] px-8 py-12 rounded-xl shadow-lg justify-center items-center font-bold">
                    <Image src={tpw} width={200} alt="The Peaceful World" />
                    <h3>The Peaceful World</h3>
                    <h3>مشارکت در برند ملی</h3>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Services;