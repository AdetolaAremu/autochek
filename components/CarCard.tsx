import { CarItem } from "@/interfaces/Cars";
import { CarListResponse, MakeListResponse } from "@/pages";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CarListingProps {
  carList: CarItem;
}

const CarCard: NextPage<CarListingProps> = ({ carList }) => {
  return (
    <div
      key={carList.id}
      className="w-80 md:w-[17.3rem] lg:w-80 xl:w-[18rem] 2xl:w-80 p-1 mt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <div>
        <Image
          src={carList.imageUrl}
          className="w-full h-56 bg-cover object-fill"
          alt="brands"
          height={100}
          width={100}
        />
      </div>

      <div className="mt-2">
        <div className="flex justify-between">
          <button className="text-xs capitalize bg-[#0579C9] text-white rounded-md px-2">
            {carList.sellingCondition}
          </button>
          <button className="text-xs capitalize bg-[#0579C9] text-white rounded-md px-2">
            {carList.state}
          </button>
        </div>

        <div className="flex justify-between text-sm mt-1">
          <div className="font-bold">
            {/* {carList.title} */}
            {carList.title.length > 13
              ? `${carList?.title?.slice(0, 13)}...`
              : carList?.title}
            ({carList.year})
          </div>
          <div className="text-gray-600">
            ₦ {carList.marketplacePrice.toLocaleString()}
          </div>
        </div>
        <div className="h-1 bg-[#0579C9] my-1"></div>
        <div className="flex justify-between text-sm mt-1">
          <div className="font-bold capitalize">{carList.transmission}</div>
          <div className="text-gray-600 capitalize">{carList.fuelType}</div>
        </div>
        <div className="mt-1">
          <div className="flex justify-between text-sm">
            <button className="bg-[#0579C9] text-white px-4 py-1 rounded-md">
              Add to Wishlist
            </button>
            <Link
              href={`/market/${carList.id}`}
              className="bg-[#0579C9] text-white px-4 py-1 rounded-md"
            >
              More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
