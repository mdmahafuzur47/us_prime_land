import CommonHeader from '@/components/ui/CommonHeader';
import Container from '@/components/ui/Container';
import React from 'react';
import BlogCard from '../blog/BlogCard';

export default function ReadOurLatestNews() {
  return (
    <Container className='mt-20 flex flex-col justify-center items-center'>
      <CommonHeader title="News from the Network" />
      <h1 className="text-3xl md:text-4xl mb-10 mt-3 font-semibold">
        Read Our Latest News
      </h1>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
        {/** Using an array to map BlogCard components for scalability */}
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <BlogCard key={index} />
          ))}
      </div>
    </Container>
  );
}
