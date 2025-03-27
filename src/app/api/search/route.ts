import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface SearchResult {
  section_id: number;
  section_title: string;
  chapter_id: number;
  chapter_title: string;
  context: string;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  if (!q) {
    return NextResponse.json({ message: 'Search query is required' }, { status: 400 });
  }

  const results: SearchResult[] = await prisma.$queryRaw`
    SELECT
      s.id AS section_id,
      s.title AS section_title,
      c.id AS chapter_id,
      c.title AS chapter_title,
      SUBSTRING(
        s.content,
        GREATEST(1, LOCATE(${q}, s.content) - 100),
        LENGTH(${q}) + 200
      ) AS context
    FROM
      Section s
    JOIN
      Chapter c ON s.chapterId = c.id
    WHERE
      s.content LIKE CONCAT('%', ${q}, '%')
  `;

  return NextResponse.json(results);
}