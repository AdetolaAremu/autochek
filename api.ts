import axios from "axios";
// import { MakeListResponse } from "@/pages";
import { base_url_prod, base_url_staging } from "@/env";
import { CarListResponse } from "@/interfaces/Cars";
import { MakeListResponse } from "./interfaces/Makers";

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
  pageNumber: number,
  pageSize: number
): Promise<CarListResponse> => {
  try {
    const response = await fetch(
      `${baseURLProd}/inventory/car/search?page_number=${pageNumber}&pageSize=${pageSize}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      // Handle non-successful responses, e.g., HTTP error status codes
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("data", data);
    return data;
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
