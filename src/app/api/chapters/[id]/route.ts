import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const chapterId = parseInt(params.id);
  const chapter = await prisma.chapter.findUnique({
    where: { id: chapterId, isVisible: true },
  });
  if (!chapter) {
    return NextResponse.json({ message: 'Chapter not found' }, { status: 404 });
  }
  return NextResponse.json(chapter);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const chapterId = parseInt(params.id);
  const { title, isVisible } = await request.json();
  if (!title) {
    return NextResponse.json({ message: 'Title is required' }, { status: 400 });
  }
  const updatedChapter = await prisma.chapter.update({
    where: { id: chapterId },
    data: { title: title, isVisible: isVisible },
  });
  return NextResponse.json(updatedChapter);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const chapterId = await params;
  await prisma.chapter.update({
    where: { id: parseInt(chapterId.id) },
    data: { isVisible: false },
  });
  return new NextResponse(null, { status: 204 });
}