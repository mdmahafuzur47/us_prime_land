import Container from "@/components/ui/Container";
import SharedHeroSection from "@/components/ui/SharedHeroSection";
import Image from "next/image";
import React from "react";

export default function BlogDetails() {
  return (
    <Container>
      <SharedHeroSection title="Blogs Details" />
      <div className="mt-10 flex gap-5">
        <div className="flex-1">
          <Image
            src={"/img.png"}
            alt="Logo"
            width={1200}
            height={900}
            className="h-[500px]"
          />
          <div>
            <h1 className="text-2xl mt-5 font-medium mb-3">
              Total Sales by Company Top Producers in alphabetical order
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium repellat quidem, itaque illo saepe soluta ex esse porro
              sunt reprehenderit excepturi in vel sapiente quae. Velit quas
              tempora beatae cumque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptates accusantium vel consequuntur quos est
              ratione ipsum, perspiciatis eos tempore dolore quis distinctio
              reiciendis. Dignissimos hic assumenda a commodi quasi repudiandae.
            </p>
          </div>
        </div>
        {/* blog side  */}
        <div className="w-[30%]">
            <h2 className="text-xl font-medium mb-3">Related Blogs</h2>
          <div className="">
            <div className="flex flex-col  gap-3">
              <div className="flex border px-3 py-2 rounded-md shadow items-center gap-3">
                <Image
                  src={"/img.png"}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-[100px] h-[80px] rounded-md"
                />
                <div >
                  <h3 className="text-xl font-medium mb-3">Blog Title</h3>
                  <p className="text-sm text-gray-600">20 May 2022</p>
                </div>
              </div>
              <div className="flex border px-3 py-2 rounded-md shadow items-center gap-3">
                <Image
                  src={"/img.png"}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-[100px] h-[80px] rounded-md"
                />
                <div >
                  <h3 className="text-xl font-medium mb-3">Blog Title</h3>
                  <p className="text-sm text-gray-600">20 May 2022</p>
                </div>
              </div>
              <div className="flex border px-3 py-2 rounded-md shadow items-center gap-3">
                <Image
                  src={"/img.png"}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-[100px] h-[80px] rounded-md"
                />
                <div >
                  <h3 className="text-xl font-medium mb-3">Blog Title</h3>
                  <p className="text-sm text-gray-600">20 May 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
