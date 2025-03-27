'use client'

import { commands } from '@uiw/react-md-editor';
import Markdown from '@uiw/react-markdown-preview';
import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import textLeftIcon from "@/../public/icons/textLeft.svg";
import textRightIcon from "@/../public/icons/textRight.svg";
import Image from 'next/image';

const MarkdownEditor: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [isRTL, setIsRTL] = useState<boolean>(false);

  const toggleDirection = () => {
    setIsRTL((prev) => !prev);
  };

  const uploadImageCommand = {
    name: 'image-upload',
    keyCommand: 'image-upload',
    buttonProps: { 'aria-label': 'Upload Image', 'title': 'Upload Image' },
    icon: <span>📷</span>,
    execute: () => {
      document.getElementById('image-upload-input')?.click();
    },
  };

  const rtlToggleCommand = {
    name: 'toggle-rtl',
    keyCommand: 'toggle-rtl',
    buttonProps: { 'aria-label': 'Toggle Text Direction', 'title': 'Toggle Text Direction' },
    icon: <span>{isRTL ? <Image src={textRightIcon} width={16} alt='text directiorn right to left' /> : <Image src={textLeftIcon} width={16} alt='text directiorn left to right' />}</span>,
    execute: toggleDirection,
  };

  const updatedCommands = [
    ...commands.getCommands().slice(0, Math.floor(commands.getCommands().length / 2)),
    rtlToggleCommand,
    uploadImageCommand,
    ...commands.getCommands().slice(Math.floor(commands.getCommands().length / 2)),
  ];

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');

      const data = await res.json();
      setValue((prev) => prev + `\n\n![alt text](${data.url})\n`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentSubmit = () => {
    console.log(value);
  }


  return (
    <div className='w-full flex flex-col justify-center items-center gap-3' data-color-mode="light py-8">
      <div className='w-full md:text-lg text-md flex flex-col gap-2 irsansx text-right' style={{ direction: 'rtl' }}>
        <h3 className='irsansx-mid'>دیدگاه خود را بنویسید:</h3>
        <MDEditor
          preview='edit'
          value={value}
          onChange={(v) => setValue(v || '')}
          className='w-full flex'
          height={300}
          commands={updatedCommands}
          textareaProps={{ dir: isRTL ? 'rtl' : 'ltr', style: { textAlign: isRTL ? 'right' : 'left' } }}
        />
        <input
          id="image-upload-input"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
      </div>
      <div className='w-full md:text-lg text-md flex flex-col gap-2 irsansx text-right' style={{ direction: 'rtl' }}>
        <h3 className='irsansx-mid'>پیش نمایش:</h3>
        <Markdown 
          className='w-full min-h-[300px] bg-[#ffffff] border-2 grad'
          source={value}
        />
      </div>
      <div>
        <button type='button' className='border-2 border-green-400 hover:bg-green-400 transition-colors duration-300 px-5 py-2 irsansx-mid rounded-xl' onClick={handleCommentSubmit}>
          ثبت دیدگاه
        </button>
      </div>
    </div>
  );
};

export default MarkdownEditor;