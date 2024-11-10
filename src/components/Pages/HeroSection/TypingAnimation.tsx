"use client"
import { TypeAnimation } from 'react-type-animation';
 
export default function TypingAnimation () {
  return (
    <TypeAnimation
      sequence={[
        'seorang Full Stack Developer',
        1000,
        'seorang Penulis',
        2000,
        'seorang Video Editor',
        1000,
        'seorang Excel Specialist',
        2000,
        'seorang Admin Gudang',
        1000
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className='text-white font-mono'
    />
  );
};