import BreadCrumb from "@/components/BreadCrumb";
import Layout from "@/components/layout";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <Layout
      title="Autocheck Market Place - Contact us"
      description="Autochek listed vehicles - Contact us page"
    >
      <div className="relative mt-10">
        <img
          src="/images/topimg.jpg"
          className="w-full h-[20rem] bg-cover bg-[rgba(42,45,84,.60)]"
          alt="logo"
        />
        <div className="absolute inset-0 flex items-center justify-center text-3xl text-white left-2">
          Contact Us
        </div>
      </div>
      <div className="bg-gray-300 py-3">
        <BreadCrumb
          items={[
            { text: "Home", link: "/" },
            { text: "Contact Us", link: "" },
          ]}
        />
      </div>

      <div className="mt-10 mx-2 md:mx-5 lg:mx-10 xl:mx-16">
        <div className="grid grid-cols-3 place-items-center">
          <div className="text-center">
            <div>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="fas fa-check mr-3 text-[#f45c80] shadow-md shadow-gray-500 p-6 rounded-full"
              />
            </div>
            <div className="mt-5 text-blue-500 text-xl font-bold">Address</div>
            <div className="text-bold-600 text-sm text-gray-500">
              11 Anthony village
            </div>
          </div>

          <div className="text-center">
            <div>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="fas fa-check mr-3 text-[#f45c80] shadow-md shadow-gray-500 p-6 rounded-full"
              />
            </div>
            <div className="mt-5 text-blue-500 text-xl font-bold">Call Us</div>
            <div className="text-bold-600 text-sm text-gray-500">
              09009988990
            </div>
          </div>

          <div className="text-center">
            <div>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="fas fa-check mr-3 text-[#f45c80] shadow-md shadow-gray-500 p-6 rounded-full"
              />
            </div>
            <div className="mt-5 text-blue-500 text-xl font-bold">Email</div>
            <div className="text-bold-600 text-sm text-gray-500">
              help@autochek.com
            </div>
          </div>
        </div>

        <div className="flex mt-10">
          <div className="w-full mr-3">
            <label htmlFor="Name" className="block">
              Name
            </label>
            <input type="text" className="bg-gray-200 w-full py-2" />
          </div>
          <div className="w-full">
            <label htmlFor="Name" className="block">
              E-mail
            </label>
            <input type="text" className="bg-gray-200 w-full py-2" />
          </div>
        </div>

        <div>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="bg-gray-200 w-full mt-6"
          ></textarea>
        </div>

        <div>
          <button className="bg-blue-500 py-3 w-full text-white mt-5">
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
