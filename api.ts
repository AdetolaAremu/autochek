import axios from "axios";
// import { MakeListResponse } from "@/pages";
import { base_url_staging } from "@/env";
import { CarListResponse } from "@/interfaces/Cars";
import { MakeListResponse } from "./interfaces/Makers";

const baseURLStaing = base_url_staging;

export const getPopularBrands = async (): Promise<MakeListResponse> => {
  try {
    const response = await axios.get(
      `${baseURLStaing}/inventory/make?popular=true`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllCars = async (
  pageNumber: number,
  pageSize: number
): Promise<CarListResponse> => {
  try {
    const response = await axios.get(
      `${baseURLStaing}/inventory/car/search?page_number=${pageNumber}&pageSize=${pageSize}`
    );
    console.log("data", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleCar = async (id: string): Promise<CarListResponse> => {
  try {
    const response = await axios.get(`${baseURLStaing}/inventory/car/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
