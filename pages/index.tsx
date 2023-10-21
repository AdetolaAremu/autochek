import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faMoneyBill,
  faShippingFast,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "@/components/layout";
import { GetServerSideProps, NextPage } from "next";
import { CarMake, Pagination } from "@/interfaces/Makers";
import { getAllCars, getPopularBrands } from "@/api";
import { CarItem } from "@/interfaces/Cars";
import Link from "next/link";
import CarCard from "@/components/CarCard";
import SideCard from "@/components/SideCard";

export interface MakeListResponse {
  makeList: CarMake[];
  pagination: Pagination;
}

export interface CarListResponse {
  carList: CarItem[];
}

const HomePage: NextPage<MakeListResponse & CarListResponse> = ({
  makeList,
  carList,
}) => {
  return (
    <Layout>
      <div className="mt-8">
        <Image
          src="/images/corolla1.webp"
          className="w-full h-[38rem] bg-cover"
          alt="logo"
          height={100}
          width={100}
        />

        <div className="mt-10">
          <div className="text-2xl text-center">Featured</div>

          <div className="mx-16 flex">
            <div className="w-3/4">
              <div className="py-4 grid grid-cols-3">
                {carList.map((el) => (
                  <CarCard carList={el} key={el.id} />
                ))}
              </div>

              <div className="flex justify-center">
                <Link
                  href="/"
                  className="bg-gray-800 text-sm text-white px-2 py-2 mt-3 rounded-md flex justify-center"
                >
                  <span className="ml-2">More Details</span>
                  <span className="ml-3">
                    <FontAwesomeIcon
                      icon={faArrowAltCircleRight}
                      className="fas fa-check mr-3"
                    />
                  </span>
                </Link>
              </div>
            </div>

            <SideCard makeList={makeList} />
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
  const carList = await getAllCars(9, 1);

  return {
    props: { makeList: makers.makeList, carList: carList.result },
  };
};

export default HomePage;
