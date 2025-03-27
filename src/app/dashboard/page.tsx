'use client'

import { FaBook } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-full irsansx">
        <div className="w-full h-full p-12">
            <Link href={"/dashboard/education"}>
                <div className="flex justify-between items-center gap-4 w-fit bg-gray-50 p-8 rounded-xl backdrop-blur-xl
                hover:shadow-md transition-all duration-300">
                    <FaBook className="w-12 h-12" />
                    <h3 className="irsansx-mid md:text-lg text-md">مدیریت آموزش ها</h3>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default page;