import { getSingleCar } from "@/api";
import Layout from "@/components/layout";
import { CarItem } from "@/interfaces/Cars";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import React from "react";

export interface CarListResponse {
  carList: CarItem;
}

const GetSingleCar: NextPage<CarListResponse> = ({ carList }) => {
  return (
    <Layout>
      <div className="bg-gray-300 py-3 mt-8">
        <div className="flex mx-16">
          <div className="text-orange-700">Home</div>
          <div className="mx-5">/</div>
          <div>{carList.carName}</div>
        </div>
      </div>

      <div className="mx-16 mt-10">
        <div className="flex">
          {/* {carList.imageUrl} */}
          <Image
            src={carList.imageUrl}
            className="w-[50%] h-[30rem] bg-cover object-fill"
            alt="logo"
            height={100}
            width={100}
          />
          <div className="ml-10 pt-2">
            <div className="text-2xl font-bold flex">
              <div>
                {carList.carName}{" "}
                <span className="capitalize">({carList.sellingCondition})</span>
              </div>
              <div className="mx-6 text-blue-400">|</div>
              <div>₦ {carList.marketplacePrice.toLocaleString()}</div>
            </div>

            <div className="fmt-1 text-gray-600 capitalize">
              <div>Body Type: {carList.bodyType.name}</div>
              <div className="">
                Mileage: {carList.mileage.toLocaleString()}{" "}
                {carList.mileageUnit}
              </div>
              <div>VIN: {carList.vin}</div>
              <div>Wheel Type: {carList.model.wheelType}</div>
              <div>
                Location: {carList.city}, {carList.state}
              </div>
              <div>Fuel type: {carList.fuelType}</div>
            </div>

            <div className="h-[1px] bg-[#0579C9] my-2"></div>

            <div className="text-gray-600">
              <div className="text-xl font-bold">
                <div className="text-black">Loan Facility</div>
              </div>
              <div>
                Loan Percentage:{" "}
                {carList.financingSettings.loanCalculator.loanPercentage.toFixed(
                  2
                )}{" "}
                %
              </div>
              <div className="">
                Loan Tenure:{" "}
                {carList.financingSettings.loanCalculator.defaultValues.tenure}
              </div>
              <div>
                Interest Rate:{" "}
                {carList.financingSettings.loanCalculator.defaultValues.interestRate.toFixed(
                  2
                )}{" "}
                %
              </div>
            </div>

            <div className="h-[1px] bg-[#0579C9] my-2"></div>

            <div className="text-gray-600">
              <div className="text-xl font-bold">
                <div className="text-black">Inspecting Officer</div>
              </div>
              <div className="">
                Name: {carList.inspectorDetails.inspectorFullName}
              </div>
              <div className="">
                Successfully inspected:{" "}
                {carList.inspectorDetails.totalInspection} Vehicles
              </div>
            </div>

            <div className="mt-1">
              <div className="flex justify-between text-sm">
                <button className="bg-[#0579C9] text-white px-4 py-1 rounded-md">
                  Apply for Loan
                </button>
                <button className="bg-[#0579C9] text-white px-4 py-1 rounded-md">
                  Buy Outrightly
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const parsedId = typeof id === "string" ? id : "";

  const car = await getSingleCar(parsedId);

  return {
    props: {
      carList: car,
    },
  };
};

export default GetSingleCar;
