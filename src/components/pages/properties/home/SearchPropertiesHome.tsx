import {
  BedIcon,
  DollarIcon,
  FilterIcon,
  HomeIcon,
  SearchIcon,
} from "@/components/shared/icons/Icons";
import CommonHeader from "@/components/ui/CommonHeader";
import React from "react";

export default function SearchPropertiesHome() {
  return (
    <>
      <div className="bg-[#9fdbff] py-10 rounded-2xl shadow flex flex-col w-full  items-center">
        <CommonHeader title="Search Your Property" />
        <h1 className="text-2xl md:text-4xl text-center px-3 mb-8 mt-3 font-semibold">
          Explore Homes from Quick Search
        </h1>

        <div className="w-full px-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-2">
          <div className="searchInput bg-white flex  sm:col-span-2 items-center w-full">
            <input
              className="outline-none w-full placeholder:text-primary placeholder:font-medium"
              type="text"
              placeholder="Abilene, TX"
            />
            <SearchIcon className="text-primary text-xl font-semibold" />
          </div>
          <div className="searchInput bg-white flex  items-center gap-1 w-full justify-center">
            <DollarIcon className="text-primary text-xl font-semibold" />
            <p className="uppercase font-medium text-primary">Price</p>
          </div>
          <div className="searchInput bg-white flex  items-center gap-1 w-full justify-center">
            <BedIcon className="text-primary text-xl font-semibold" />
            <p className="uppercase font-medium text-primary">BED AND BATHS</p>
          </div>
          <div className="searchInput bg-white flex  items-center gap-1 w-full justify-center">
            <HomeIcon className="text-primary text-xl font-semibold" />
            <p className="uppercase font-medium text-primary">HOME TYPE</p>
          </div>
          <div className="searchInput bg-white flex  items-center gap-1 w-full justify-center">
            <FilterIcon className="text-primary text-xl font-semibold" />
            <p className="uppercase font-medium text-primary">ALL FILTERS</p>
          </div>
        </div>
      </div>
    </>
  );
}
