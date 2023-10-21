import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import {
  faEnvelopeOpen,
  faMapMarker,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import PaymentTypes from "@/components/PaymentTypes";

interface vehicleTypes {
  categories: string[];
}

const Footer: NextPage<vehicleTypes> = ({ categories }) => {
  return (
    <div>
      <div className="bg-gray-800 mt-10 py-3">
        <div className="mx-2 md:mx-5 lg:mx-16 grid grid-cols-1 md:grid-cols-4 gap-x-0 md:gap-x-2 lg:gap-x-0">
          <div>
            <div className="text-white text-2xl mb-1 md:mb-3">Categories</div>
            {categories?.map((el) => (
              <div className="text-gray-300 text-sm mt-2" key={el}>
                {el}
              </div>
            ))}
          </div>

          <div>
            <div className="text-white text-2xl mt-3 md:mt-0 mb-1 md:mb-3">
              Quick Links
            </div>
            {quickLinks?.map((el) => (
              <div key={el.id}>
                <Link href={el.link} className="text-gray-300 text-sm mt-2">
                  {el.name}
                </Link>
              </div>
            ))}
          </div>

          <div>
            <div className="text-white text-2xl mt-3 md:mt-0 mb-1 md:mb-3">
              Get in Touch
            </div>
            {getInTouch?.map((el) => (
              <div className="flex" key={el.id}>
                <div className="mr-2 pt-2">{el.icon}</div>
                <div className="text-gray-300 text-sm mt-2">{el.text}</div>
              </div>
            ))}
          </div>

          <div>
            <div className="text-white text-2xl mt-3 md:mt-0 mb-1 md:mb-3">
              NewsLetter
            </div>
            <div className="text-gray-300 mt-1 md:mt-4">
              Access to quality Loan Financing
            </div>
            <div className="md:mt-5 mt-2 flex flex-wrap">
              <input
                type="text"
                className="h-10 pl-2 md:w-[60%] lg:w-[70%]"
                placeholder="Email"
              />
              <button className="bg-[#0579C9] ml-1 py-2 px-3 text-gray-300">
                Go
              </button>
            </div>
            <div className="text-2xl text-white font-bold mt-3">
              Follow Us On
            </div>
            <div className="mt-2">
              <div>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white bg-[#5D77AF] p-2 rounded-full"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-white bg-[#2393C8] mx-3 p-2 rounded-full"
                />
                <FontAwesomeIcon
                  icon={faGooglePlus}
                  className="text-white bg-[#BB4738] p-2 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 md:mx-5 lg:mx-16 my-8">
        <div>
          <div className="text-gray-600 text-xl mb-1">Sedan:</div>
          <div className="flex flex-wrap">
            {carTypes.Sedan.map((el) => (
              <span key={el} className="flex">
                <Link href={"/"} className="text-gray-600 text-sm">
                  {el}
                </Link>
                <span className="text-gray-400 mx-3 -mt-[3px]">|</span>
              </span>
            ))}
          </div>

          <div className="text-gray-600 text-xl mb-1 mt-3">SUV:</div>
          <div className="flex flex-wrap">
            {carTypes.SUV.map((el) => (
              <span key={el} className="flex">
                <Link href={"/"} className="text-gray-600 text-sm">
                  {el}
                </Link>
                <span className="text-gray-400 mx-3 -mt-[3px]">|</span>
              </span>
            ))}
          </div>

          <div className="text-gray-600 text-xl mb-1 mt-3">Hatchback:</div>
          <div className="flex flex-wrap">
            {carTypes.Hatchback.map((el) => (
              <span key={el} className="flex">
                <Link href={"/"} className="text-gray-600 text-sm">
                  {el}
                </Link>
                <span className="text-gray-400 mx-3 -mt-[3px]">|</span>
              </span>
            ))}
          </div>

          <div className="text-gray-600 text-xl mb-1 mt-3">Sports:</div>
          <div className="flex flex-wrap">
            {carTypes.Sports.map((el) => (
              <span key={el} className="flex">
                <Link href={"/"} className="text-gray-600 text-sm">
                  {el}
                </Link>
                <span className="text-gray-400 mx-3 -mt-[3px]">|</span>
              </span>
            ))}
          </div>

          <div className="text-gray-600 text-xl mb-1 mt-3">Popular:</div>
          <div className="flex flex-wrap">
            {carTypes.Popular.map((el) => (
              <span key={el} className="flex">
                <Link href={"/"} className="text-gray-600 text-sm">
                  {el}
                </Link>
                <span className="text-gray-400 mx-3 -mt-[3px]">|</span>
              </span>
            ))}
          </div>
        </div>

        <PaymentTypes />
      </div>

      <div className="bg-[#0579C9] p-5 mt-8">
        <div className="text-white text-center">
          © {new Date().getFullYear()} AutoChek. All rights reserved
        </div>
      </div>
    </div>
  );
};

const quickLinks = [
  { link: "/", name: "About Us", id: 1 },
  { link: "/", name: "Contact Us", id: 2 },
  { link: "/", name: "Help", id: 3 },
  { link: "/", name: "Faqs", id: 4 },
  { link: "/", name: "Terms of use", id: 5 },
  { link: "/", name: "About Us", id: 6 },
  { link: "/", name: "Privacy", id: 7 },
];

const getInTouch = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faMapMarker} className="text-[#0579C9]" />,
    text: "14, Anthony Village, Lagos",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faMobile} className="text-[#0579C9]" />,
    text: "234-01-00009",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faPhone} className="text-[#0579C9]" />,
    text: "234-01-00009",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faEnvelopeOpen} className="text-[#0579C9]" />,
    text: "support@autochek.com",
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon={faEnvelopeOpen} className="text-[#0579C9]" />,
    text: "help@autochek.com",
  },
];

const carTypes = {
  Sedan: [
    "Tokunbo",
    "Brand New",
    "V2 Engines",
    "V3 Engines",
    "Refurbished",
    "Nigerian Used",
  ],
  SUV: ["Tokunbo", "Brand New", "V4 Engines", "V6 Engines", "Nigerian Used"],
  Hatchback: [
    "Tokunbo",
    "Brand New",
    "V2 Engines",
    "V3 Engines",
    "Refurbished",
    "Nigerian Used",
  ],
  Pickup: ["Tokunbo", "Brand New", "V6 Engines", "V8 Engines", "Nigerian Used"],
  Sports: ["Tokunbo", "Brand New", "V6 Engines", "V8 Engines", "Nigerian Used"],
  Popular: [
    "Corolla 2004",
    "Corolla 2010",
    "Honda EOD",
    "Honda Accord",
    "Hiace",
    "Corolla Big Daddy",
  ],
};

export default Footer;
