import Image from "next/image";
import dotIcon from "@/../public/icons/dot.svg";
import OverflowTag from "@/../src/components/OverflowTag";
import type { Question } from "@/types";
import MarkdownEditor from "@/components/MarkdownEditor";
const question: Question = {
  author_id: 1,
  comments: ['1', 'very good', 'nice one!'],
  body: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
  created_at: '1741966711244',
  stars: 12,
  tags: ['صادرات', 'خرما', 'کارت بازرگانی'],
  title: 'صدور کارت بازرگانی خرما',
  views: 22
};

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  // fetch post data here
  return (
  <div className="md:max-w-[60vw] max-w-[80vw] gap-8 place-self-center flex flex-col justify-center items-center bg-[#fdfdfd] py-12">
    <div className="md:w-[60vw] w-[80vw] flex flex-col justify-center items-start gap-4 grad p-8 rounded-2xl">
      <div className="flex flex-col gap-4 justify-center item-end">
        <div className="md:text-2xl text-lg irsansx-bold text-right md:max-w-[60vw] max-w-[50vw]" style={{ direction: 'rtl' }}>
          <h2>{ question.title }</h2>
        </div>
        <div className="h-fit text-right irsansx md:text-lg text-md max-w-[60vw]" style={{ direction: 'rtl' }}>
          <span>{ question.content }</span>
        </div>
      </div>
      <div className="w-full md:flex flex-col md:justify-end md:items-center justify-center items-end md:gap-4 gap-2">
        <div className="w-full md:flex flex-col flex justify-start items-end md:gap-12 gap-2">
          <div className="flex justify-end items-center gap-2 text-base irsansx">
            <div className="flex justify-center items-center irsansx text-center">
              <h5 className="md:text-lg text-md">
                {/* { `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}` } */}
                2025/2/4
              </h5>
            </div>
            <div className="flex flex-col justify-center items-center text-center text-xl irsansx-bold">
              <Image src={dotIcon} width={16} alt="name-date separator" draggable={false} />
            </div>
            <div className="flex justify-between items-center gap-2">
                <h5 className="text-right md:text-lg text-md irsansx">
                  علی سینا سلطانی
                  {/* { question.author_id.toString() } */}
                </h5>
              <div className="w-6 h-6 rounded-full bg-[#E6E6E6]"></div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="max-w-fit flex place-self-end justify-start gap-4">
            <div className="flex justify-between items-center gap-2">
              <button type="button" className="irsansx-mid bg-green-400 px-3 py-1 rounded-xl text-mid text-right">+{ question.stars } مفید بود</button>
            </div>
            <div className="flex justify-between items-center gap-1">
              <button type="button" className="irsansx-mid bg-blue-400 px-3 py-1 rounded-xl text-mid text-right">{ question.comments.length } :دیدگاه ها</button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            {
              question.tags.map((tag, index) => (
                <OverflowTag key={index} tag={tag} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
    <MarkdownEditor />
  </div>
  );
}