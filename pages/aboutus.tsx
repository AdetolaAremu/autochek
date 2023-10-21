import BreadCrumb from "@/components/BreadCrumb";
import Layout from "@/components/layout";
import Image from "next/image";
import React from "react";

const AboutUS = () => {
  return (
    <Layout>
      <div className="relative mt-10">
        <img
          src="/images/topimg.jpg"
          className="w-full h-[20rem] bg-cover bg-[rgba(42,45,84,.60)]"
          alt="logo"
        />
        <div className="absolute inset-0 flex items-center justify-center text-3xl text-white left-2">
          About Us
        </div>
      </div>
      <div className="bg-gray-300 py-3">
        <BreadCrumb
          items={[
            { text: "Home", link: "/" },
            { text: "About Us", link: "" },
          ]}
        />
      </div>

      <div className="mx-2 md:mx-5 lg:mx-10 xl:mx-16">
        <div className="flex justify-center mt-10">
          <div>
            <Image
              src="/images/cars2.webp"
              className="w-full h-72 bg-cover object-fill"
              alt="brands"
              height={100}
              width={100}
            />
          </div>
        </div>
        <div>
          <div className="text-center mt-10">
            We are an automotive technology development company that is building
            the infrastructure to make car ownership more accessible and
            affordable in Africa. With active operations in 9 countries across
            East, West, and North Africa, a partner-led retail footprint in over
            1,500 dealers and workshop locations, and more than 70 banking
            partners, Autochek is improving Africa automotive finance value
            proposition by bringing all relevant stakeholders together to enable
            easier access to more financing options as a catalyst for growth in
            Africa automotive industry.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUS;
