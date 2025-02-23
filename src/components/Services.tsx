'use client'

import Image from "next/image";
import steps from "@/../public/images/services/10-Steps.png";
import assessments from "@/../public/images/services/assessments.png";
import export_service_center from "@/../public/images/services/export_service_center.png";
import faq from "@/../public/images/services/FAQ-1.png";
import idea from "@/../public/images/services/Idea.png";
import tpw from "@/../public/images/services/TPW.png";
import idea_icon from "@/../public/icons/idea.svg";
import checklist_icon from "@/../public/icons/checklist.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row gap-4 pt-12 text-3xl font-bold service-title">
            <Image src={idea_icon} width={42} alt="idea icon" />
            <h2>خدمات ما</h2>
            <Image src={checklist_icon} width={42} alt="idea icon" />
        </div>
        <div className="md:hidden flex w-full pt-8 px-12">
            <Swiper className="w-full h-[500px]" navigation={true} modules={[Navigation]} spaceBetween={30}>
                <SwiperSlide className="h-[500px] rounded-xl">
                    <div className="flex flex-col h-[500px] gap-2 bg-[#F5F5F5] px-8 py-12 rounded-xl shadow-lg justify-center items-center font-bold">
                        <Image src={faq} width={200} alt="Frequently Asked Questions" />
                        <h3>FAQ</h3>
                        <h3>سوالات متداول</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[500px] rounded-xl">
                    <div className="flex flex-col h-[500px] gap-2 bg-[#F5F5F5] px-8 py-12 rounded-xl shadow-lg justify-center items-center font-bold">
                        <Image src={assessments} width={200} alt="Export Knowledge Assessment" />
                        <h3 className="text-sm">Export Knowledge Assessment</h3>
                        <h3>ارزیابی دانش صادراتی</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[500px] rounded-xl">
                    <div className="flex flex-col h-[500px] gap-2 bg-[#F5F5F5] px-8 py-12 rounded-xl shadow-lg justify-center items-center font-bold">
                        <Image src={steps} width={200} alt="Export Training" />
                        <h3>Export Training</h3>
                        <h3>آموزش صفر تا صد صادرات</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[500px] rounded-xl">
                    <div className="flex flex-col h-[500px] gap-2 bg-[#F5F5F5] px-8 py-12 rounded-xl shadow-lg justify-center items-center font-bold">
                        <Image src={export_service_center} width={200} alt="Export Plus Service Center" />
                        <h3>Export Plus Service Center</h3>
                        <h3>مرکز خدمات +Export</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[500px] rounded-xl">
                    <div className="flex flex-col h-[500px] gap-2 bg-[#F5F5F5] px-8 py-12 rounded-xl shadow-lg justify-center items-center font-bold">
                        <Image src={idea} width={200} alt="IDEA Accelerator" />
                        <h3>IDEA Accelerator</h3>
                        <h3>مرکز رشد ایده ها</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[500px] rounded-xl">
                    <div className="flex flex-col h-[500px] gap-2 bg-[#F5F5F5] px-8 py-12 rounded-xl shadow-lg justify-center items-center font-bold">
                        <Image src={tpw} width={200} alt="The Peaceful World" />
                        <h3>The Peaceful World</h3>
                        <h3>مشارکت در برند ملی</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div className="md:flex hidden md:flex-col md:w-full md:justify-center md:items-center gap-8 py-12">
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
        </div>
    </div>
  )
}

export default Services;