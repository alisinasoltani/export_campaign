'use client'

import { ServiceProps } from "@/types";
import Link from "next/link";

const Service = ({ title, subtitle, isNew, img, href, btnTitle, description }: ServiceProps ) => {
  return (
    <div className="service flex md:flex-row-reverse flex-col justify-between items-center gap-4 px-8 pb-10 my-3 pt-6 nazanin relative rounded-[0.6rem]">
        <div className="flex flex-col justify-start items-end gap-1">
            <h2 className="text-right text-lg nazanin-bold">
                {title}
            </h2>
            <h3 className="text-right text-base text-[#575757] nazanin-bold">
                {subtitle}
            </h3>
            <span className="text-sm text-right max-w-[16rem] text-pretty" style={{ direction: 'rtl' }}>
                {description}
            </span>
        </div>
        <div className="flex justify-center items-center">
            <img src={img} className="md:w-[120px] w-[240px]" alt={`${subtitle} service image`} />
        </div>
        <div className="service-btn flex justify-center items-center absolute -bottom-[1rem] right-[2rem]">
            <button type="button" className="flex justify-center items-center text-[16px] nazanin-bold 
            bg-[#F5F2E8] px-4 py-2 rounded-[0.6rem] transition-all duration-300 hover:shadow-lg z-0">
                <Link href={href}>
                {btnTitle}
                </Link>
            </button>
        </div>
        {isNew && 
        <div className="flex justify-center items-center bg-[#F5006A] nazanin text-[9px] text-white font-bold text-center absolute -top-2 -left-2
        shadow-md w-5 h-5 rounded-full">
            جدید
        </div>}
    </div>
  );
}

export default Service;