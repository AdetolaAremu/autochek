import {
  faCartArrowDown,
  faMapMarker,
  faPhone,
  faSignInAlt,
  faSignOutAlt,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#0579C9]">
        <div className="flex mx-16 py-4 text-sm justify-between text-white">
          <div>Access top notch vehicle financing</div>
          <div className="flex">
            <div>
              <FontAwesomeIcon
                icon={faMapMarker}
                className="fas fa-check mr-3"
              />
              Select Location
            </div>
            <div className="mx-10">|</div>

            <div>
              <FontAwesomeIcon icon={faTruck} className="fas fa-check mr-3" />{" "}
              Track Order
            </div>
            <div className="mx-10">|</div>

            <div>
              <FontAwesomeIcon icon={faPhone} className="fas fa-check mr-3" />{" "}
              01-90990-000
            </div>
            <div className="mx-10">|</div>

            <div>
              <FontAwesomeIcon
                icon={faSignInAlt}
                className="fas fa-check mr-3"
              />{" "}
              Log In
            </div>
            <div className="mx-10">|</div>

            <div>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="fas fa-check mr-3"
              />{" "}
              Register
            </div>
          </div>
        </div>
      </div>

      <div className="mx-16 mt-10">
        <div>
          <div className="flex justify-between">
            <Image
              src="/images/logo.webp"
              alt="logo"
              height={150}
              width={150}
            />

            {/* <div>
              <input
                className="border shadow-lg px-2 w-96 py-3 rounded-md"
                type="text"
                placeholder="Search e.g corolla"
              />
              <button className="bg-[#0579C9] ml-2 rounded-md py-3 text-white px-4">
                Search
              </button>
            </div> */}

            <div className="bg-black text-white py-3 px-4 rounded-md">
              <FontAwesomeIcon
                icon={faCartArrowDown}
                className="fas fa-check"
              />
            </div>
          </div>
        </div>
      </div>

      <ul className="mt-10 flex justify-center">
        <li className="mr-10">Home</li>
        <li className="mr-10">Market Place</li>
        <li className="mr-10">About Us</li>
        <li className="mr-10">New Arrivals</li>
        <li className="mr-10">Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
