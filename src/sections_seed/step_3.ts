import type { SectionData } from "../types"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const data: SectionData[] = [
    {
        title: 'شناسایی، انتخاب بازار هدف',
        content: ``,
        chapterId: 5,
    },
    {
        title: 'استراتژی سازمان',
        content: ``,
        chapterId: 5,
    },
    {
        title: 'ابزار SWOT',
        content: ``,
        chapterId: 5,
    },
    {
        title: 'استراتژی بازاریابی',
        content: ``,
        chapterId: 5,
    },
    {
        title: 'مدل های انتخاب بازار هدف',
        content: ``,
        chapterId: 5,
    },
    {
        title: 'حضور در نمایشگاه',
        content: ``,
        chapterId: 5,
    },
    {
        title: 'قیمت گذاری',
        content: ``,
        chapterId: 5,
    },
]

async function seed(data: SectionData[]) {
    data.map(async (section) => {
        const result = await prisma.section.create({
            data: {
                title: section.title,
                content: section.content,
                chapterId: section.chapterId,
            }
        });
      console.log(result);
    });
}

seed(data);