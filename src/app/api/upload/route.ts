import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Ensure we run on the Node.js runtime for fs support
export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    // Parse the incoming form data.
    const formData = await request.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Convert the file to a Buffer.
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    // Create a unique file name.
    const fileName = `${Date.now()}-${file.name}`;
    // Define the upload directory (public/uploads).
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    // Create the directory if it doesn't exist.
    await fs.mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, fileName);

    // Save the file to disk.
    await fs.writeFile(filePath, fileBuffer);

    // Build the accessible URL.
    const url = `/uploads/${fileName}`;
    return NextResponse.json({ url });
  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Error saving file: ' + error.message },
      { status: 500 }
    );
  }
}
