import { getAllCars, getPopularBrands } from "@/api";
import CarCard from "@/components/CarCard";
import PaginationControls from "@/components/Pagination";
import SideCard from "@/components/SideCard";
import Layout from "@/components/layout";
import { CarItem } from "@/interfaces/Cars";
import { CarMake } from "@/interfaces/Makers";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";

export interface CarListResponse {
  carList: CarItem[];
  currentPage: number;
  pageSize: number;
  totalItems: number;
}

export interface MakeListResponse {
  makeList: CarMake[];
}

const MarketPlace: NextPage<CarListResponse & MakeListResponse> = ({
  carList,
  currentPage,
  pageSize,
  totalItems,
  makeList,
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
      </div>
      <div className="bg-gray-300 py-3">
        <div className="flex mx-16">
          <div className="text-orange-700">Home</div>
          <div className="mx-5">/</div>
          <div>Market Place</div>
        </div>
      </div>

      <div className="mx-16">
        <div className="flex">
          <div className="w-3/4">
            <div className="py-4 grid grid-cols-3 place-items-center">
              {carList.map((el) => (
                <CarCard carList={el} key={el.id} />
              ))}
            </div>
          </div>

          <SideCard makeList={makeList} />
        </div>
      </div>

      <div className="flex justify-center">
        <PaginationControls
          currentPage={currentPage}
          pageSize={pageSize}
          totalItems={totalItems}
        />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const currentPageParam = query.page;
  const pageSizeParam = query.pageSize;

  const currentPage =
    typeof currentPageParam === "string" ? parseInt(currentPageParam, 10) : 1;
  const pageSize =
    typeof pageSizeParam === "string" ? parseInt(pageSizeParam, 10) : 9;

  const carList = await getAllCars(pageSize, currentPage);
  const makers = await getPopularBrands();

  return {
    props: {
      carList: carList.result,
      currentPage,
      pageSize,
      makeList: makers.makeList,
    },
  };
};

export default MarketPlace;
