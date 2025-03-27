import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const sectionId = parseInt(params.id);
  const section = await prisma.section.findUnique({
    where: { id: sectionId },
  });
  if (!section) {
    return NextResponse.json({ message: 'Section not found' }, { status: 404 });
  }
  return NextResponse.json(section);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const sectionId = parseInt(params.id);
  const { title, content, tags, chapterId } = await request.json();
  if (!title || !chapterId) {
    return NextResponse.json({ message: 'Title and chapterId are required' }, { status: 400 });
  }
  const updatedSection = await prisma.section.update({
    where: { id: sectionId },
    data: {
      title,
      content,
      tags,
      chapterId: parseInt(chapterId),
    },
  });
  return NextResponse.json(updatedSection);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const sectionId = parseInt(params.id);
  await prisma.section.delete({
    where: { id: sectionId },
  });
  return new NextResponse(null, { status: 204 });
}