// components/Navbar.jsx
"use client";
import React, { useState } from "react";
import Logo from "../../public/indmoney_logo.png";
import Button from "./Button";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white sticky-navbar w-full">
    <div className="flex items-center font-medium justify-around">
      <div className="bg-white sticky z-[1000] p-5 md:w-auto w-full flex justify-between">
        <Image src={Logo} alt="logo" className="md:cursor-pointer h-9 w-9" />
        <div className="flex-1 flex justify-end md:hidden">
          <button className="text-green-600 border-2 border-green-600 rounded-full h-8 w-20 mr-2">
            Log In
          </button>
          <div className="text-xl mt-1 mr-3">
          <button>
          <FontAwesomeIcon icon={faHeadphones} />
            {/* <FontAwesomeIcon icon={faBars} /> */}
          </button>
           
          </div>
          <div className="text-xl mt-1 mr-3">
            <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div className="text-xl md:hidden mt-1 mr-0" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </div>
      </div>
      <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
        <li>
          <a href="/" className="py-7 px-3 inline-block">
            Home
          </a>
        </li>

        <NavLinks />
        <li>
          <a
            href="https://www.indmoney.com/pricing?type=indian-stocks"
            className="py-7 px-3 inline-block"
          >
            Pricing
          </a>
          {/* <hr className="w-full h-px my-0 bg-gray-200 border-0 dark:bg-gray-200"></hr> */}
        </li>
      </ul>
      <div className="md:flex hidden items-center">
        <button className="text-green-600 border-2 border-green-600 rounded-full h-8 w-20 mr-4">
          Log In
        </button>
        <Button />
      </div>
      {/* Mobile nav */}
      <ul
        className={`
      md:hidden bg-white sticky-navbar fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-0
      duration-500 ${open ? "left-0" : "left-[-100%]"}
      `}
      >
        <div className=" flex items-center justify-center">
          <Button />
        </div>
        <li>
          <a href="/" className="py-7 px-3 inline-block">
            Home
          </a>
        </li>
        <hr className="w-full h-px my-0 bg-gray-200 border-0 dark:bg-gray-200"></hr>
        <NavLinks />

        <li>
          <a
            href="https://www.indmoney.com/pricing?type=indian-stocks"
            className="py-7 px-3 inline-block"
          >
            Pricing
          </a>
        </li>
        <hr className="w-full h-px my-0 bg-gray-200 border-0 dark:bg-gray-200"></hr>
      </ul>
    </div>
  </nav>
);
};

export default Navbar;
