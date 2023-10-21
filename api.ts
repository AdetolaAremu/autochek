import axios from "axios";
import { MakeListResponse } from "./pages";
import { CarListResponse } from "./interfaces/Cars";
// import { CarListResponse } from "./interfaces/Cars";
// import { MakeListResponse } from "./interfaces/Makers";

const baseURL = process.env.SERVICE_URL;

export const getPopularBrands = async (): Promise<MakeListResponse> => {
  try {
    const response = await axios.get(
      `https://api.staging.myautochek.com/v1/inventory/make?popular=true`
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
    const apiUrl = "https://api-prod.autochek.africa/v1/inventory/car/search";
    const response = await axios.get(
      `${apiUrl}?pageSize=${pageSize}&currentPage=${currentPage}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleCar = async (id: string): Promise<CarListResponse> => {
  try {
    const response = await axios.get(
      `https://api-prod.autochek.africa/v1/inventory/car/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
