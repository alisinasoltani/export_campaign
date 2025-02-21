"use client"
import Image from "next/image";
import slide1 from "@/../public/images/slider/slide1.jpg";
import slide2 from "@/../public/images/slider/slide2.jpg";
import slide3 from "@/../public/images/slider/slide3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <div>
        <Swiper className="w-full" navigation={true} modules={[Navigation]}>
            <SwiperSlide>
              <Image src={slide1} alt="slide one" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={slide2} alt="slide two" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={slide3} alt="slide three" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider