import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faAngleRight,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { CarMake } from "@/interfaces/Makers";
import { NextPage } from "next";
import vehicleTypes from "@/utils/Pseudo";

interface MakeListProps {
  makeList: CarMake[];
}

const SideCard: NextPage<MakeListProps> = ({ makeList }) => {
  const ratingsCount: number[] = [5.0, 4.0, 3.5, 3.0, 2.5];

  const renderStars = (rating: number): JSX.Element[] => {
    const fullStars = Math.floor(rating);
    const hasHalfStar: boolean = rating % 1 === 0.5;

    const stars: JSX.Element[] = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon icon={faStar} key={i} className="text-yellow-500" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          icon={faStarHalf}
          key="half"
          className="text-yellow-500"
        />
      );
    }

    return stars;
  };
  return (
    <div>
      <div className="bg-gray-100 px-1 xl:px-6 shadow-lg mt-7">
        <div className="text-lg pt-3 text-[#0579C9]">Search Here...</div>

        <div className="mt-2 flex flex-col lg:flex-row">
          <input
            type="text"
            className="border shadow-md rounded-lg py-1 pl-2"
            placeholder="e.g Corolla 2015"
          />
          <div>
            <button className="bg-[#0579C9] text-white py-1 px-4 ml-0 lg:ml-[1px] xl:ml-2 mt-2 lg:mt-0 rounded-md">
              <FontAwesomeIcon icon={faAngleRight} className="fas fa-check" />
            </button>
          </div>
        </div>

        <div className="bg-gray-400 border h-[2.5px] my-4"></div>

        <div className="text-lg pt-1 text-[#0579C9]">Price</div>
        <ul className="text-sm mt-1">
          <li className="cursor-pointer">Under 3M</li>
          <li className="cursor-pointer pt-1">3M - 5M</li>
          <li className="cursor-pointer pt-1">5M - 8M</li>
          <li className="cursor-pointer pt-1">8M - 12M</li>
          <li className="cursor-pointer pt-1">12M - 15M</li>
          <li className="cursor-pointer pt-1">18M - 21M</li>
          <li className="cursor-pointer pt-1">Over 21M</li>
        </ul>
        <div className="bg-gray-400 border h-[2.5px] my-4"></div>

        <div className="text-lg pt-1 text-[#0579C9]">Popular Brands</div>
        <ul className="grid grid-cols-3">
          {makeList?.map((el, index) => (
            <li key={index} className="mt-3 cursor-pointer">
              <img src={el.imageUrl} className="h-9 w-9" alt="brands" />
            </li>
          ))}
        </ul>

        <div className="bg-gray-400 border h-[2.5px] my-4"></div>

        <div className="text-lg pt-1 text-[#0579C9]">Ratings</div>
        <div>
          <div className="text-sm">
            {ratingsCount.map((el) => (
              <div key={el} className="flex pt-1">
                <div>{renderStars(el)}</div>
                <div className="ml-3">
                  {Number.isInteger(el) ? `${el}.0` : el}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-400 border h-[2.5px] my-4"></div>

        <div className="text-lg pt-1 text-[#0579C9]">Vehicles</div>
        <ul className="">
          {vehicleTypes.map((el) => (
            <li key={el}>
              <div className="flex">
                <div className="pr-2">
                  <input className="" type="checkbox" name="" />
                </div>
                <div className="text-sm pt-[1px]">{el}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideCard;
