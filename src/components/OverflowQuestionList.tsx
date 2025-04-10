import Image from "next/image";
import starIcon from "@/../public/icons/star.svg";
import commentIcon from "@/../public/icons/comment.svg";
import dotIcon from "@/../public/icons/dot.svg";
import viewIcon from "@/../public/icons/view.svg";
import OverflowTag from "./OverflowTag";
import type { Question } from "@/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RefObject } from "react";
// import * as moment from 'jalali-moment';

const OverflowQuestionList = ({question, ref}: {question: Question,  ref?: RefObject<HTMLDivElement | null>}) => {
  const date = new Date(parseInt(question.createdAt.toString()));
  // const todayJalali = moment(created_at, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
  return (
    <div className="w-full flex justify-center items-center" ref={ref}>
      <div className="flex justify-between items-center md:w-[40vw] w-[80vw] grad grad-bg shadow-sm p-8 rounded-xl">
        <div className="max-w-fit flex flex-col gap-1 justify-center items-end">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-between items-center gap-1 cursor-help">
                  <h3 className="nazanin-bold text-lg text-right">{ question.votes.length }</h3>
                  <Image src={starIcon} width={24} alt="how many stars community gave this question." />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-white shadow-sm grad right-1 top-1 absolute" style={{ borderRadius: '1rem' }}>
                <p>امتیاز</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-between items-center gap-1 cursor-help">
                  <h3 className="nazanin-bold text-lg text-right">{ question.comments.length }</h3>
                  <Image src={commentIcon} width={24} alt="how many people of the community commented on this question." />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-white shadow-sm grad right-1.5 top-1 absolute" style={{ borderRadius: '1rem' }}>
                <p>نظرات</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-between items-center gap-1 cursor-help">
                  <h3 className="nazanin-bold text-lg text-right">{ question.viewCount }</h3>
                  <Image src={viewIcon} width={24} alt="how many views has this quation got." />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-white shadow-sm grad right-1 top-1 absolute" style={{ borderRadius: '1rem' }}>
                <p>بازدیدها</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="max-w-fit truncate flex flex-col justify-center text-right md:text-xl text-md items-end gap-3">
          <div className="text-right max-w-[30vw] nazanin-bold" style={{ direction: 'rtl' }}>
            <h2>{ question.title }</h2>
          </div>
          <div className="text-right nazanin text-base truncate max-w-[30vw] h-[4rem]" style={{ direction: 'rtl' }}>
            <span>{ question.body }</span>
          </div>
          <div className="w-full flex justify-end items-center gap-12">
            <div className="flex justify-between items-center gap-2 text-base">
              <div className="flex justify-center items-center nazanin text-center">
                <h5>{ `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}` }</h5>
              </div>
              <div className="flex flex-col justify-center items-center text-center text-xl nazanin-bold">
                <Image src={dotIcon} width={16} alt="name-date separator" draggable={false} />
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="text-right nazanin">
                  <h5>{ question.authorId.toString() }</h5>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#E6E6E6]"></div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              {
                question.tags.map((tag, index) => (
                  <OverflowTag key={index} tag={tag.name} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverflowQuestionList;