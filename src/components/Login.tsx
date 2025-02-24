import login_cover from "@/../public/images/login/login_cover.png";
import google_icon from "@/../public/icons/google.svg";
import logo from "@/../public/logo.png";
import Image from "next/image";

const Login = () => {
  return (
    <div className="w-full h-[100vh] flex flex-row justify-center items-center login_background irsans">
        <div className="flex flex-col md:max-w-[400px] max-w-[300px] justify-between items-center gap-8 rounded-2xl bg-white shadow-2xl pb-[6rem] overflow-hidden">
            <Image src={login_cover} alt="export campaign cover" />
            <div className="flex flex-row justify-center items-center py-4 px-6 rounded-t-2xl bg-white absolute md:bottom-[calc(50%-50px)] bottom-[calc(50%-25px)] overflow-hidden">
                <Image src={logo} width={100} alt="export campaign logo" />
            </div>
            <div className="w-full flex flex-col justify-center items-center pb-4 pt-8 gap-8">
                <h1 className="w-full text-center font-bold text-xl">به حساب کاربری خود وارد شوید</h1>
                <button className="flex flex-row gap-2 items-center font-bold md:text-lg hover:shadow-lg transition-all duration-300 bg-[#EBEBEB] py-4 px-8 rounded-2xl">
                    ورود با حساب گوگل
                    <Image src={google_icon} width={24} alt="google icon" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login