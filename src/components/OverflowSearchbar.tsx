'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import searchIcon from "@/../public/icons/search.svg";
import { useInView } from "framer-motion";
import { useEffect } from "react";
import debounce from 'lodash.debounce';
import type { RefObject } from "react";
import type DebouncedFunc from "lodash.debounce"

type Input = {
  query: string
}

const OverflowSearchbar = ({ containerRef, queryHandler }: { containerRef: RefObject<HTMLDivElement | null>, queryHandler: (searchTerm: string) => void }) => {
    const {register, handleSubmit, watch, formState: { errors }} = useForm<Input>();
    const isInView = useInView(containerRef, {
        margin: "0px 0px 0px 0px",
        once: false
    });
    let new_query = watch("query");

    useEffect(() => {
        const debounced = debounce(queryHandler, 300);
        debounced(new_query);
        console.log("Element is in view: ", isInView)

        return () => debounced.cancel();
    }, [isInView, new_query, queryHandler]);
    
    const onSubmit: SubmitHandler<Input> = (data) => {
        // setQuery(data.query);
        console.log(data.query);
    };
    // query = watch;
    // console.log(watch("query"))
    return (
        <div className={`w-full flex justify-center items-center bg-white py-3 shadow-sm ${isInView ? 'fixed top-0 left-0' : ''} z-20`}>
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