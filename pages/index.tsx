import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faMoneyBill,
  faShippingFast,
  faStar,
  faStarHalf,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import vehicleTypes from "@/utils/Pseudo";
import Layout from "@/components/layout";
import { GetServerSideProps, NextPage } from "next";
import { CarMake, Pagination } from "@/interfaces/Makers";
import { getPopularBrands } from "@/api";

export interface MakeListResponse {
  makeList: CarMake[];
  pagination: Pagination;
}

const HomePage: NextPage<MakeListResponse> = ({ makeList }) => {
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
    <Layout>
      <div>
        {/* {makeList?.map((el: CarMake) => (
          <div key={el.id}>{el.name}</div>
        ))} */}
      </div>
      <div className="mt-8">
        <Image
          src="/images/corolla1.webp"
          className="w-full h-[38rem] bg-cover"
          alt="logo"
          height={100}
          width={100}
        />

        <div className="mt-10">
          <div className="text-2xl text-center">Popular Brands</div>

          <div className="mx-16 flex">
            <div className="w-3/4">
              <div className="bg-gray-50 py-4 shadow-lg grid grid-cols-3 gap-4 mt-7">
                {makeList.map((el, index) => (
                  <div key={index} className="flex flex-col items-center mt-2">
                    <Image
                      src={el.imageUrl}
                      alt="brands"
                      height={100}
                      width={100}
                    />
                    <div className="text-center mt-3 text-lg">{el.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 px-6 shadow-xl w-1/4 mt-7">
              <div className="text-lg pt-3 text-[#0579C9]">Search Here...</div>

              <div className="mt-2">
                <input
                  type="text"
                  className="border shadow-md rounded-lg py-1 pl-2"
                  placeholder="e.g Corolla 2015"
                />
                <button className="bg-[#0579C9] text-white py-1 px-4 ml-2 rounded-md">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="fas fa-check"
                  />
                </button>
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

              <div className="text-lg pt-1 text-[#0579C9]">Discount</div>
              <ul className="">
                <li>
                  <div className="flex">
                    <div className="pr-2">
                      <input className="" type="checkbox" name="" />
                    </div>
                    <div className="text-sm pt-[1px]">5% or More</div>
                  </div>

                  <div className="flex">
                    <div className="pr-2">
                      <input className="" type="checkbox" name="" />
                    </div>
                    <div className="text-sm pt-[1px]">10% or More</div>
                  </div>

                  <div className="flex">
                    <div className="pr-2">
                      <input className="" type="checkbox" name="" />
                    </div>
                    <div className="text-sm pt-[1px]">20% or More</div>
                  </div>

                  <div className="flex">
                    <div className="pr-2">
                      <input className="" type="checkbox" name="" />
                    </div>
                    <div className="text-sm pt-[1px]">30% or More</div>
                  </div>

                  <div className="flex">
                    <div className="pr-2">
                      <input className="" type="checkbox" name="" />
                    </div>
                    <div className="text-sm pt-[1px]">50% or More</div>
                  </div>

                  <div className="flex">
                    <div className="pr-2">
                      <input className="" type="checkbox" name="" />
                    </div>
                    <div className="text-sm pt-[1px]">60% or More</div>
                  </div>
                </li>
              </ul>

              <div className="bg-gray-400 border h-[2.5px] my-4"></div>

              <div className="text-lg pt-1 text-[#0579C9]">Customer Review</div>
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

          <div className="flex justify-center mt-10 mx-16">
            <div className="bg-gray-50 shadow-lg w-full p-4 grid grid-cols-3 place-items-center">
              <div className="flex my-3">
                <div className="pt-2">
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    className="text-[#0579C9] text-5xl"
                  />
                </div>
                <div className="ml-16">
                  <div className="text-3xl">Car Financing</div>
                  <div className="text-gray-500">Loan up to 10million</div>
                </div>
              </div>

              <div className="flex my-3">
                <div className="pt-2">
                  <FontAwesomeIcon
                    icon={faShippingFast}
                    className="text-[#0579C9] text-5xl"
                  />
                </div>
                <div className="ml-16">
                  <div className="text-3xl">Fast Delivery</div>
                  <div className="text-gray-500">All over Africa</div>
                </div>
              </div>

              <div className="flex my-3">
                <div className="pt-2">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="text-[#0579C9] text-5xl"
                  />
                </div>
                <div className="ml-16">
                  <div className="text-3xl">Big Choice</div>
                  <div className="text-gray-500">of Brands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const makers = await getPopularBrands();

  return {
    props: { makeList: makers.makeList },
  };
};

export default HomePage;
