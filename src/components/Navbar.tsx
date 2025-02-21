import Image from "next/image";
import logo from "@/app/favicon.ico";
import search from "@/../public/icons/search.svg";
import road from "@/../public/icons/road.svg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="flex flex-row-reverse justify-between items-center w-full px-8 py-4 irsans font-bold shadow-lg">
        <div className="flex flex-row-reverse justify-start items-center gap-4">
            <Image src={logo} width={120} alt="export campaign logo" />
            <h3></h3>
            <DropdownMenu>
                <DropdownMenuTrigger>صادرات</DropdownMenuTrigger>
                <DropdownMenuContent className="px-4 py-4 text-right rounded-xl" style={{ direction: 'rtl' }}>
                    <DropdownMenuItem className="py-2">آموزش صادرات</DropdownMenuItem>
                    <DropdownMenuItem className="py-2">ایده های صادراتی</DropdownMenuItem>
                    <DropdownMenuItem className="py-2">اورژانس صادراتی</DropdownMenuItem>
                    <DropdownMenuItem className="py-2">خدمات صادراتی</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <h3>آزمون آنلاین</h3>
            <h3>عصرانه</h3>
            <h3>برند ملی</h3>
            <h3>سوالات متداول</h3>
            <h3>درباره ما</h3>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
            <button type="button" className="bg-[#E6A817] hover:shadow-lg transition-all duration-500 px-4 py-2 rounded-xl flex flex-row items-center justify-center gap-4">
                <Image src={road} width={32} alt="road button" />
                شروع مسیر
            </button>
            <button type="button" className="bg-[#f5f5f5] hover:shadow-lg transition-all duration-500 p-2 rounded-full flex flex-row items-center justify-center">
                <Image src={search} width={32} alt="search button" />
            </button>
        </div>
    </div>
  )
}

export default Navbar;