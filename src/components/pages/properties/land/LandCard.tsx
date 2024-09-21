import Image from "next/image";
import Link from "next/link";

export const LandCard = () => {
  return (
    <Link href={"/properties/land/12345"} className="overflow-hidden rounded-lg text-white bg-primary">
      <Image
        src={"/img.png"}
        alt="blog"
        width={300}
        height={250}
        className="h-[200px] w-full"
      />
      <div className="px-5 py-2">
        <div className="flex justify-between mb-2 items-center">
          <p className="text-xl font-medium">$150,000</p>
          {/* <p className='font-medium'>View Property</p> */}
        </div>
        <p className="text-sm mb-4">New York City, CA, USA</p>
        <h3 className="font-medium text-xl">Property Size # 1 Acore</h3>
        <div className="flex items-center justify-between gap-1 my-3">
          <p className="text-sm">Property ID # 12345</p>
          <button className="px-3 shadow-md font-medium py-2 text-sm border rounded-lg">
            View Property
          </button>
        </div>
      </div>
    </Link>
  );
};
