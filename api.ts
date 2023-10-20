import axios from "axios";
import { MakeListResponse } from "./pages";
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
