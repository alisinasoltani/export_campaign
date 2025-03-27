import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const chapters = await prisma.chapter.findMany({
    where: {isVisible: true}
  });
  return NextResponse.json(chapters);
}

export async function POST(request: NextRequest) {
  const { title } = await request.json();
  if (!title) {
    return NextResponse.json({ message: 'Title is required' }, { status: 400 });
  }
  const chapter = await prisma.chapter.create({
    data: { title },
  });
  return NextResponse.json(chapter, { status: 201 });
}