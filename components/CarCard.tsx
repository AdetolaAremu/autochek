import { CarItem } from "@/interfaces/Cars";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="relative">
        <Image
          src={carList.imageUrl}
          className={`w-full h-56 bg-cover object-fill ${
            !carList.imageUrl && "blur-sm"
          }`}
          alt="cars"
          height={100}
          width={100}
        />
        <div className="bg-gray-600 px-1 absolute flex -mt-6">
          <div className="mr-3">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          </div>
          <div className="text-xs text-white pt-1">
            {carList.gradeScore.toFixed(1)}
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex justify-between">
          <div>
            <button className="text-xs capitalize bg-[#0579C9] text-white rounded-md px-2">
              {carList.sellingCondition}
            </button>
            <button className="text-xs ml-2 capitalize bg-[#0579C9] text-white rounded-md px-2">
              {carList.mileage} {carList.mileageUnit}
            </button>
          </div>

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
