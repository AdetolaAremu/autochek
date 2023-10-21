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
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const images = ["/images/welcome-banner.jpg", "/images/benz.jpg"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Layout>
      <div className="mt-8">
        <div className="relative">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt="top img"
                className="h-[38rem] w-full bg-cover object-cover"
              />
            </div>
          ))}
        </div>

        <div className="pt-[40rem]">
          <div className="text-2xl text-center">Featured Cars</div>

          <div className="mx-2 md:mx-5 lg:mx-10 xl:mx-16 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4">
              <div className="py-4 grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3">
                {carList.map((el) => (
                  <CarCard carList={el} key={el.id} />
                ))}
              </div>
              <div className="flex justify-center flex-col md:flex-row relative">
                <Link
                  href="/market"
                  className="bg-gray-800 text-sm text-white px-2 py-2 mt-3 rounded-md flex justify-center"
                >
                  <div className="ml-2">More Cars</div>
                  <div className="ml-3">
                    <FontAwesomeIcon
                      icon={faArrowAltCircleRight}
                      className="fas fa-check mr-3"
                    />
                  </div>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/4">
              <SideCard makeList={makeList} />
            </div>
          </div>

          <div className="flex flex-row md:flex-col justify-center mt-10 mx-2 md:mx-5 lg:mx-16">
            <div className="bg-gray-50 shadow-lg w-full p-4 grid grid-cols-1 md:grid-cols-3 place-items-center">
              <div className="flex my-3">
                <div className="pt-2">
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    className="text-[#0579C9] text-5xl"
                  />
                </div>
                <div className="ml-16 md:ml-7 lg:ml-16">
                  <div className="text-xl lg:text-3xl">Car Financing</div>
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
                <div className="ml-16 md:ml-7 lg:ml-16">
                  <div className="text-xl lg:text-3xl">Fast Delivery</div>
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
                <div className="ml-16 md:ml-7 lg:ml-16">
                  <div className="text-xl lg:text-3xl">Big Choice</div>
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
