import { RightArrow } from '@/components/shared/icons/Icons'
import Image from 'next/image'
import React from 'react'

export default function BlogCard() {
  return (
    <div className='overflow-hidden rounded-lg text-white bg-myBlue'>
      <Image 
        src={'/img.png'}
        alt="blog"
        width={300}
        height={200}
        className='w-full'
      />
      <div className='px-5 py-2'>
        <p className='mb-3 text-sm'>July 1,2024</p>
        <h1 className='font-semibold'>6 Ways to Use Your Recreational Land This Summer</h1>
        <p className='my-2 text-sm mb-3'>Owning undeveloped property is a goldmine opportunity, whether you want to start ...</p>
        <hr />
        <div className='flex items-center my-3 text-xl font-medium'>
            <h1>Full Article</h1>
            <RightArrow />
        </div>
      </div>
    </div>
  )
}
