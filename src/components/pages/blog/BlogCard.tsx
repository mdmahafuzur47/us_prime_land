import { RightArrow } from '@/components/shared/icons/Icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function BlogCard() {
  return (
    <Link href={"/blogs&news/123456"} className='overflow-hidden rounded-lg text-white bg-myBlue transition-transform transform hover:scale-[102%]'
    data-aos="fade-up"
    >
      <Image 
        src={'/img.png'}
        alt="Blog post about recreational land usage"
        width={300}
        height={200}
        className='w-full h-48 object-cover' // Added object-cover for better image display
      />
      <div className='px-5 py-2'>
        <p className='mb-3 text-sm text-gray-200'>July 1, 2024</p>
        <h1 className='font-semibold text-lg md:text-xl'>6 Ways to Use Your Recreational Land This Summer</h1>
        <p className='my-2 text-sm text-gray-300 mb-3'>
          Owning undeveloped property is a goldmine opportunity, whether you want to start ...
        </p>
        <hr className='border-gray-400' />
        <div className='flex items-center my-3 text-lg font-medium text-gray-200 hover:text-gray-100'>
          <h1>Full Article</h1>
          <RightArrow className='ml-2' />
        </div>
      </div>
    </Link>
  );
}
