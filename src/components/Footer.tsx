'use client'

import Image from "next/image";
import location_icon from "@/../public/icons/location.svg";
import bg from "@/../public/images/footer/footer_bg_5.png";
import phone_icon from "@/../public/icons/phone.svg";
import email_icon from "@/../public/icons/mail.svg";
import whatsapp_icon from '@/../public/icons/whatsapp.svg';
import telegram_icon from "@/../public/icons/telegram.svg";
import instagram_icon from "@/../public/icons/instagram.svg";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from '@react-three/drei';
import EarthNight from "@/components/3d/NightEarth";
import EarthNight2 from "@/components/3d/NightEarth2";
import WhatsappLogo from "@/components/3d/WhatsappLogo";
import TelegramLogo from "@/components/3d/TelegramLogo";
import InstagramLogo from "@/components/3d/InstagramLogo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col justify-end items-center w-[100vw] h-[100vh] bg-[#171717] border-none overflow-y-hidden">
        <div className="grid justify-center content-center relative w-full bg-[#171717] border-none">
            {/* <Image src={bg} alt="footer background image" className="w-full" /> */}
            <div className="w-full h-[100vh] flex justify-center items-center absolute z-10 -top-[120px] bg-transparent border-none">
                <Canvas camera={{ position: [0,0,4.5] }}>
                    <Center>
                        <EarthNight2 scale={0.025} />
                        <ambientLight intensity={1} />
                        <directionalLight intensity={18} position={[-3,3,3]} />
                    </Center>
                <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false}  />
                </Canvas>
            </div>
        </div>
        <div className="w-full h-[80vh] px-[5rem] pb-12 gap-[5rem] flex md:flex-row flex-col-reverse justify-center items-end z-20 bottom-0 text-white irsans footer border-none">
            <div className="flex flex-col gap-6 justify-start items-end irsansx">
                <div className="flex flex-row gap-2">
                    <h5 className="font-medium">
                    تهران، خ ولیعصر، روبروی مسجد بلال، خ شهید مٌهری (امانیه)، پلاک 20
                    </h5>
                    <Image src={location_icon} width={32} alt="location address" />
                </div>
                <div className="flex flex-row gap-2">
                    <h5 className="font-medium">
                    021-25942
                    </h5>
                    <Image src={phone_icon} width={32} alt="location address" />
                </div>
                <div className="flex flex-row items-center gap-2">
                    <h5 className="font-medium">
                    info@exportcampaign.com
                    </h5>
                    <Image src={email_icon} width={32} alt="location address" />
                </div>
                <button type="button" className="flex flex-row justify-center items-center gap-2 text-white px-4 py-3 rounded-xl" style={{ background: 'linear-gradient(270deg, rgba(7,94,84,1) 13%, rgba(18,140,126,1) 63%, rgba(37,211,102,1) 100%)' }}>
                    <h5 className="flex flex-col justify-center items-center">
                    (فقط پیام کتبی) 09101112867
                    </h5>
                    <Image src={whatsapp_icon} width={30} alt="location address" />
                    {/* <div className="flex items-center justify-center w-[36px] h-[36px]">
                        <Canvas>
                            <Center>
                                <WhatsappLogo scale={1} />
                                <ambientLight intensity={1} position={[1,1,1]} />
                            </Center>
                            <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false}  />
                        </Canvas>
                    </div> */}
                </button>
                <div className="flex flex-row gap-3">
                    <Link href={"https://www.instagram.com/exportcampaign"}>
                        <button type="button" className="flex flex-row justify-center items-center gap-2 text-white px-2 py-2 rounded-full" style={{ background: 'linear-gradient(215deg, rgba(64,93,230,1) 15%, rgba(91,81,216,1) 34%, rgba(131,58,180,1) 60%, rgba(245,96,64,1) 100%)' }}>
                            <Image src={instagram_icon} width={36} alt="location address" />
                            {/* <div className="flex items-center justify-center w-[36px] h-[36px]">
                                <Canvas>
                                    <Center>
                                        <InstagramLogo scale={1} />
                                        <ambientLight intensity={1} position={[1,1,1]} />
                                    </Center>
                                    <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false}  />
                                </Canvas>
                            </div> */}
                        </button>
                    </Link>
                    <Link href={"https://t.me/Exportcampaign"}>
                        <button type="button" className="flex flex-row justify-center items-center gap-2 text-white px-2 py-2 rounded-full" style={{ background: 'linear-gradient(50deg, rgba(34,158,217,1) 0%, rgba(42,171,238,1) 100%)' }}>
                            <Image src={telegram_icon} width={36} alt="location address" />
                            {/* <div className="flex items-center justify-center w-[36px] h-[36px]">
                                <Canvas>
                                    <Center>
                                        <TelegramLogo scale={1} />
                                        <ambientLight intensity={1} position={[1,1,1]} />
                                    </Center>
                                    <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false}  />
                                </Canvas>
                            </div> */}
                        </button>
                    </Link>
                </div>
            </div>
            <h4 className="leading-8 max-w-[700px] text-right irsansx font-normal pb-4" style={{ direction: 'rtl' }}>
            <span className="text-[#25D366]">پويش ملي صادرات</span>، 
            جرياني است حياتي براي اقتصاد ايران كه با هدايت محمدامين حاج كاظميان به دور از رانت و تبعيض و بدون استفاده از هرگونه منابع مالي دولتي، 
            خالصانه و دغدغه مند در جهت: 
            <br />
            ١. ترغيب و ترويج فرهنگ صادرات در بين جامعه جوان و كارآفرين.
            <br />
            ٢. تمركز بر تجميع توانمنديها و ظرفيتهاي كارآفريني كشور به منظور توانمندسازي و توان افزايي جوانان و كارآفرينان با هدف اشتغالزايي و افزايش صادرات غيرنفتي و با هدف تربيت 
            ١٠٠/٠٠٠ صادركننده جوان پيشرو.
            <br />
            فعاليت خود را از بهمن ١٣٩٦ آغاز نموده و روند تغییرات مثبت و پایدار در اكوسيستم كارآفريني ايران را هدف قرارداده است. 
            مسئوليت اجتماعي اين عزم ملي، ايجاب مي نمايد تا رویدادهای این ١٠ گام از سلسله برنامه هاي آموزشي، پرورشی و انگيزشي، در تهران و ديگر شهرهاي ايران به صورت رايگان براي علاقمندان برگزار گردد.
            </h4>
        </div>
    </div>
  )
}

export default Footer;