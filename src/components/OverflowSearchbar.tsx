import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import searchIcon from "@/../public/icons/search.svg";

type Input = {
  query: string
}

const OverflowSearchbar = () => {
    const {register, handleSubmit, watch, formState: { errors }} = useForm<Input>();

    const onSubmit: SubmitHandler<Input> = (data) => console.log(data)

    console.log(watch("query"))
    return (
        <div className="w-full flex justify-center items-center bg-white stickyNavbar py-3 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between items-center">
                <div className="flex flex-col justify-center items-center">
                    <input {...register("query", { required: true })} 
                    placeholder="سوال خود را جست و جو کنید"
                    className="bg-white outline-none grad h-[35px] nazanin md:w-[60vw] w-[50vw] px-1 md:text-lg text-xs text-center rounded-e-xl" 
                    style={{ direction: 'rtl' }} />
                    {/* errors will return when field validation fails  */}
                    {/* {errors.query && <span>This field is required</span>} */}
                </div>
                <button type="submit" className="flex justify-center items-center grad rounded-e-full p-0 h-[35px] px-2 m-0">
                    <Image src={searchIcon} width={18} alt="start searching!" />
                </button>
            </form>
        </div>
    );
}

export default OverflowSearchbar;