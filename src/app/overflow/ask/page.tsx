'use client';

import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import type ReactQuillType from 'react-quill';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Page() {
  const [value, setValue] = useState('');
  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}