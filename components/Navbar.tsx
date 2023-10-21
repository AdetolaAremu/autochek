import {
  faBars,
  faCartArrowDown,
  faMapMarker,
  faPhone,
  faSignInAlt,
  faSignOutAlt,
  faTruck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <div>
      <div className="bg-[#0579C9]">
        <div className="block xl:flex mx-2 md:mx-5 lg:mx-8 xl:mx-16 py-4 text-sm justify-between text-white">
          <div className="text-center text-md md:text-md mb-2">
            Access top notch vehicle financing
          </div>
          <div className="flex flex-wrap justify-center">
            <div>
              <FontAwesomeIcon
                icon={faMapMarker}
                className="fas fa-check mr-3"
              />
              Select Location
            </div>
            <div className="mx-3 md:mx-10">|</div>

            <span>
              <FontAwesomeIcon icon={faTruck} className="fas fa-check mr-3" />{" "}
              Track Order
            </span>
            <span className="mx-3 md:mx-10">|</span>

            <span>
              <FontAwesomeIcon icon={faPhone} className="fas fa-check mr-3" />{" "}
              01-90990-000
            </span>
            <span className="mx-3 md:mx-10">|</span>

            <span>
              <FontAwesomeIcon
                icon={faSignInAlt}
                className="fas fa-check mr-3"
              />{" "}
              Log In
            </span>
            <span className="mx-3 md:mx-10">|</span>

            <span>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="fas fa-check mr-3"
              />{" "}
              Register
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-2 md:mx-5 lg:mx-16 mt-10 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-auto flex justify-between md:block">
              <Image
                src="/images/logo.webp"
                alt="logo"
                height={150}
                width={150}
              />

              <div className="bg-black text-white py-3 px-4 rounded-lg block md:hidden">
                <FontAwesomeIcon
                  icon={faCartArrowDown}
                  className="fas fa-check"
                />
              </div>

              {/* <button
                onClick={toggleMenu}
                className="md:hidden text-[#0579C9] text-xl focus:outline-none"
              >
                {isMenuOpen ? (
                  <FontAwesomeIcon icon={faXmark} className="fas fa-check" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="fas fa-check" />
                )}
              </button> */}
            </div>

            <div
              className={`mt-1 flex justify-center md:justify-end items-center space-x-4 transition-max-h ease-in-out duration-300 overflow-hidden ${
                isMenuOpen ? "max-h-full" : "max-h-0"
              }`}
            >
              <Link
                href="/"
                className="hover:text-blue-500 ease-in-out duration-300"
              >
                Home
              </Link>
              <Link
                href="/market"
                className="hover:text-blue-500 ease-in-out duration-300"
              >
                Market Place
              </Link>
              <Link
                href="/"
                className="hover:text-blue-500 ease-in-out duration-300"
              >
                About Us
              </Link>
              <Link
                href="/"
                className="hover:text-blue-500 ease-in-out duration-300"
              >
                Contact Us
              </Link>
            </div>

            <div className="bg-black text-white py-3 px-4 rounded-lg hidden md:block">
              <FontAwesomeIcon
                icon={faCartArrowDown}
                className="fas fa-check"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
