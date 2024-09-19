import {
  BedIcon,
  DollarIcon,
  FilterIcon,
  HomeIcon,
  SearchIcon,
} from "@/components/shared/icons/Icons";
import React from "react";

export default function SearchProperties() {
  return (
    <div className="flex gap-2">
      <div className="searchInput flex items-center w-full">
        <input
          className="outline-none placeholder:text-primary placeholder:font-medium"
          type="text"
          placeholder="Abilene, TX"
        />
        <SearchIcon className="text-primary text-xl font-semibold" />
      </div>
      <div className="searchInput flex items-center gap-1 w-full justify-center">
        <DollarIcon className="text-primary text-xl font-semibold" />
        <p className="uppercase font-medium text-primary">Price</p>
      </div>
      <div className="searchInput flex items-center gap-1 w-full justify-center">
        <BedIcon className="text-primary text-xl font-semibold" />
        <p className="uppercase font-medium text-primary">BED AND BATHS</p>
      </div>
      <div className="searchInput flex items-center gap-1 w-full justify-center">
        <HomeIcon className="text-primary text-xl font-semibold" />
        <p className="uppercase font-medium text-primary">HOME TYPE</p>
      </div>
      <div className="searchInput flex items-center gap-1 w-full justify-center">
        <FilterIcon className="text-primary text-xl font-semibold" />
        <p className="uppercase font-medium text-primary">ALL FILTERS</p>
      </div>
    </div>
  );
}
