import CommonHeader from '@/components/ui/CommonHeader'
import Container from '@/components/ui/Container'
import React from 'react'
import BlogCard from '../blog/BlogCard'

export default function ReadOurLatestNews() {
  return (
    <Container className='mt-20 flex flex-col justify-center items-center'>
         <CommonHeader title="News from the Network" />
        <h1 className="text-4xl mb-10 mt-3 font-semibold">
        Read Our Latest News
        </h1>
      <div className='grid grid-cols-4 gap-5'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Container>
  )
}