// src/components/Card.tsx
import React from 'react';
import Image from 'next/image';
import { CardProps } from '@/src/utils/admin'; // Adjust path if needed

const Card: React.FC<CardProps> = ({ title, img, count }) => {
  return (
    <div className="w-64 h-30 flex p-4 justify-between gap-6 mb-10 bg-slate-100 rounded-3xl shadow-[-4px_4px_27px_0px_#6B23CA] transition-all duration-300 hover:scale-110">
      <div className="flex flex-col">
        <span className="text-[#5A12CF] font-semibold font-sans text-xl">{title}</span>
        <span className="text-xl text-gray-600 font-bold">{count}</span>
      </div>
      <Image src={img.src} alt={title} width={40} height={40} className="transition-all duration-300 hover:scale-125" />
    </div>
  );
};

export default Card;
