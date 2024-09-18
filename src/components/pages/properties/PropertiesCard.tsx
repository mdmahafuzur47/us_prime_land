import { HomeSearchIcon } from '@/components/shared/icons/Icons'
import Image from 'next/image'
import React from 'react'

export default function PropertiesCard() {
  return (
    <div className='overflow-hidden rounded-lg text-white bg-primary'>
      <Image 
        src={'/img.png'}
        alt="blog"
        width={300}
        height={250}
        className='h-[200px]'
      />
      <div className='px-5 py-2'>
        <div className='flex justify-between mb-2 items-center'>
            <p className='text-xl font-medium'>$150,000</p>
            <p className='font-medium'>View Property</p>
        </div>
        <p className='text-sm mb-4'>New York City, CA, USA</p>
        <div className='grid grid-cols-2'>
            <div className='flex items-center gap-2 border-r-2 border-b-2 p-[6px]'>
                <HomeSearchIcon className='text-xl text-black' />
                <p className='text-sm'>4 Bedsroom</p>
            </div>
            <div className='flex items-center gap-2 border-b-2 p-[6px]'>
                <HomeSearchIcon className='text-xl text-black' />
                <p className='text-sm'>4 Bedsroom</p>
            </div>
            <div className='flex items-center gap-2 border-r-2 p-[6px]'>
                <HomeSearchIcon className='text-xl text-black' />
                <p className='text-sm'>4 Bedsroom</p>
            </div>
            <div className='flex items-center gap-2 p-[6px]'>
                <HomeSearchIcon className='text-xl text-black' />
                <p className='text-sm'>4 Bedsroom</p>
            </div>
        </div>
      </div>
    </div>
  )
}
