import BlogCard from "@/components/pages/blog/BlogCard";
import Container from "@/components/ui/Container";
import SharedHeroSection from "@/components/ui/SharedHeroSection";
import React from "react";

export default function BlogsAndNews() {
  return (
    <Container>
      <SharedHeroSection title="Blogs & News" />

      <div className="w-full mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-2">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Container>
  );
}
