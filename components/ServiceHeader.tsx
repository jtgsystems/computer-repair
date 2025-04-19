"use client";

import Image from "next/image";
import { useMobile } from "@/hooks/useMobile";

interface ServiceHeaderProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ServiceHeader({ title, description, imageUrl }: ServiceHeaderProps) {
  const isMobile = useMobile();

  return (
    <>
      <h1 className={`
        font-bold text-center text-primary
        ${isMobile ? 'text-2xl mb-4' : 'text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 sm:text-left'}
      `}>
        {title}
      </h1>
      <div className={`
        relative w-full mb-4
        ${isMobile ? 'aspect-square' : 'aspect-[16/9] sm:aspect-[21/9] sm:mb-6'}
      `}>
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          className={`
            object-cover
            ${isMobile ? 'rounded-md' : 'rounded-lg'}
          `}
          priority
        />
      </div>
      <p className={`
        max-w-3xl text-gray-700
        ${isMobile ? 'text-base mb-4' : 'text-base sm:text-lg mb-4 sm:mb-6'}
      `}>
        {description}
      </p>
    </>
  );
}
