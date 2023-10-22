import { getAllCars, getPopularBrands } from "@/api";
import CarCard from "@/components/CarCard";
import PaginationControls from "@/components/Pagination";
import SideCard from "@/components/SideCard";
import Layout from "@/components/layout";
import { CarListResponse } from "@/interfaces/Cars";
import { MakeListResponse } from "@/interfaces/Makers";
import { GetServerSideProps, NextPage } from "next";
import BreadCrumb from "@/components/BreadCrumb";

const MarketPlace: NextPage<CarListResponse & MakeListResponse> = ({
  result,
  currentPage,
  pageSize,
  totalItems,
  makeList,
}) => {
  return (
    <Layout
      title="Autocheck Market Place"
      description="Autochek listed vehicles"
    >
      <div className="mt-8">
        <div className="relative">
          <div className={`w-full h-full transition-opacity duration-1000`}>
            <img
              src="/images/cars2.webp"
              alt="top img"
              className="h-[38rem] w-full bg-cover object-cover brightness-50"
            />
          </div>
          <div className="absolute w-full h-full ml-auto top-[270px] flex justify-center text-white">
            <div>
              <div className="font-extrabold text-xl lg:text-3xl">
                VEHICLE MARKET PLACE
              </div>

              <div className="font-semibold text-center text-lg mt-2">
                The car you want, we have it.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 py-3">
        <BreadCrumb
          items={[
            { text: "Home", link: "/" },
            { text: "Market Place", link: "" },
          ]}
        />
      </div>

      <div className="mx-2 md:mx-5 lg:mx-10 xl:mx-16 flex flex-col md:flex-row">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-3/4">
            <div className="py-4 grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3">
              {result.map((el) => (
                <CarCard carList={el} key={el.id} />
              ))}
            </div>

            <div className="flex justify-center">
              <PaginationControls
                currentPage={currentPage}
                pageSize={pageSize}
                totalItems={totalItems}
              />
            </div>
          </div>

          <div className="w-full md:w-1/4">
            <SideCard makeList={makeList} />
          </div>
        </div>
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
      result: carList.result,
      currentPage,
      pageSize,
      makeList: makers.makeList,
    },
  };
};

export default MarketPlace;
