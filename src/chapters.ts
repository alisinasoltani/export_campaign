import type { ChapterData } from "./types";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const data: ChapterData[] = [
    {
        "id": 1,
        "title": "آشنایی با پویش ملی صادرات"
    },
    {
        "id": 13,
        "title": "امنیت اطلاعات"
    },
    {
        "id": 10,
        "title": "روش های تحقیق بازار"
    },
    {
        "id": 12,
        "title": "صادرات را از کجا آغاز کنیم؟"
    },
    {
        "id": 3,
        "title": "گام 1"
    },
    {
        "id": 4,
        "title": "گام 2"
    },
    {
        "id": 5,
        "title": "گام 3"
    },
    {
        "id": 6,
        "title": "گام 4"
    },
    {
        "id": 7,
        "title": "گام 5"
    },
    {
        "id": 8,
        "title": "گام 6"
    },
    {
        "id": 9,
        "title": "گام 7"
    },
    {
        "id": 2,
        "title": "مقدمات صادراتی"
    },
    {
        "id": 11,
        "title": "مقدمه ای بر اصول مذاکره"
    },
    {
        "id": 14,
        "title": "نمونه موردی صادرات"
    }
];

async function seed(data: ChapterData[]) {
    data.map(async (chapter) => {
      const result = await prisma.chapter.create({
        data: { 
            id: chapter.id,
            title: chapter.title
        }
      });
      console.log(result);
    });
}

async function makeAllVisible() {
    const updatedChapters = await prisma.chapter.updateMany({
        where: { isVisible: false },
        data: { isVisible: true },
    });
    console.log(updatedChapters);
}

seed(data);
// makeAllVisible();