'use client'

import { IoMdAdd } from "react-icons/io";
import { IoRemove } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import axios from "axios";

const ChapterOverview = ({ id, title, trigger }: { id: number, title: string, trigger: () => void }) => {
    const { toast } = useToast()
    const handleDeleteUndo = (id: number) => {
        axios.put(`http://localhost:3000/api/chapters/${id}`, {
            title: title,
            isVisible: true,
        }).then((response) => {
            if (response.status == 200) {
                toast({
                    title: `فصل ${id+1} اضافه شد!`,
                    action: <ToastAction altText="فهمیدم" onClick={() => {}}>فهمیدم</ToastAction>,
                });
            } else {
                toast({
                    title: `خطا هنگام اضافه کردن فصل ${id+1}`,
                    action: <ToastAction altText="فهمیدم" onClick={() => {}}>فهمیدم</ToastAction>,
                });
            }
        });
        trigger();
    }
    const handleDelete = (id: number) => {
        axios.delete(`http://localhost:3000/api/chapters/${id}`)
        .then((response) => {
            if (response.status === 204) {
                toast({
                    title: `فصل ${id+1} حذف شد!`,
                    action: <ToastAction altText="لغو" onClick={() => handleDeleteUndo(id)}>لغو</ToastAction>,
                });
            } else {
                toast({
                    title: `خطا هنگام حذف کردن فصل ${id+1}`,
                    action: <ToastAction altText="فهمیدم" onClick={() => {}}>فهمیدم</ToastAction>,
                });
            }
        });
        trigger();
    }

    return (
        <div className="w-[40vw] bg-[rgba(243,244,246,0.6)] flex justify-between items-center gap-12 backdrop-blur-xl md:text-lg text-base irsansx-mid
        px-4 py-3 rounded-xl">
            <div className="flex justify-center items-center gap-4">
                <button type="button" className="flex justify-between gap-1 items-center text-sm bg-red-500 px-4 py-3 rounded-2xl"
                onClick={() => handleDelete(id)}>
                    <IoRemove className="w-4 h-4" />
                    <h5>حذف</h5>
                </button>
                <button type="button" className="flex justify-between gap-1 items-center text-sm bg-yellow-400 px-4 py-3 rounded-2xl">
                    <MdOutlineEdit className="w-4 h-4" />
                    <h5>ویرایش</h5>
                </button>
            </div>
            <div className="w-full flex justify-start items-center text-right" style={{ direction: 'rtl' }}>
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default ChapterOverview;