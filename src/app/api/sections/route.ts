import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const sections = await prisma.section.findMany();
  return NextResponse.json(sections);
}

export async function POST(request: NextRequest) {
  const { title, content, tags, chapterId } = await request.json();
  if (!title || !chapterId) {
    return NextResponse.json({ message: 'Title and chapterId are required' }, { status: 400 });
  }
  const section = await prisma.section.create({
    data: {
      title,
      content: content || '',
      tags: tags || {},
      chapterId: parseInt(chapterId),
    },
  });
  return NextResponse.json(section, { status: 201 });
}