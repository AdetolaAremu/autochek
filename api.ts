import axios from "axios";
import { MakeListResponse } from "@/pages";
import { base_url_prod, base_url_staging } from "@/env";
import { CarListResponse } from "@/interfaces/Cars";

const baseURLStaing = base_url_staging;
const baseURLProd = base_url_prod;

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
  pageSize: number,
  currentPage: number
): Promise<CarListResponse> => {
  try {
    const response = await axios.get(
      `${baseURLProd}/inventory/car/search?pageSize=${pageSize}&currentPage=${currentPage}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleCar = async (id: string): Promise<CarListResponse> => {
  try {
    const response = await axios.get(`${baseURLProd}/inventory/car/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
