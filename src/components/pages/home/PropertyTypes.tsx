import CommonHeader from '@/components/ui/CommonHeader'
import Container from '@/components/ui/Container'
import Slider from '@/components/ui/Slider'
import Image from 'next/image'
import React from 'react'
import { SwiperSlide } from 'swiper/react'

export default function PropertyTypes() {
  return (
    <div>
      <Container className='mt-20 flex flex-col justify-center items-center'>
      <CommonHeader title='Property types' />
      <h1 className='text-4xl mb-10 mt-3 font-semibold'>Explore Properties Types</h1>
    </Container>
      <Slider >
        <SwiperSlide ><PropertyCard /></SwiperSlide>
        <SwiperSlide >slide 2</SwiperSlide>
        <SwiperSlide >slide 3</SwiperSlide>
        <SwiperSlide >slide 4</SwiperSlide>
      </Slider>
    </div>
  )
}


const PropertyCard = () => {
  return (
    <div className='bg-primary p-5 rounded-lg'>
      <div className='bg-white w-fit p-4 rounded-full'>
        <Image 
          src={"/propertiesImg/Capa_1.png"}
          alt="property"
          width={35}
          height={35}
        />
      </div>
    </div>
  )
}


