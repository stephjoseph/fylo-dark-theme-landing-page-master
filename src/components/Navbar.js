import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="mt-6 mb-12 flex w-[20.688rem] items-center justify-between xl:mb-[4.688rem] xl:mt-[4.563rem] xl:w-[88.88vw] xl:max-w-[80rem]">
      <a href="#">
        <img
          className="h-6 w-[5rem] xl:h-[3.25rem] xl:w-[11rem]"
          src={logo}
          alt=""
        />
      </a>
      <ul className="flex items-center gap-6 xl:gap-[3.625rem]">
        <li>
          <a
            className="font-['Raleway'] text-[0.75rem] font-normal leading-[0.875rem] tracking-normal text-white hover:underline xl:text-base xl:leading-[1.188rem]"
            href="#"
          >
            Features
          </a>
        </li>
        <li>
          <a
            className="font-['Raleway'] text-[0.75rem] font-normal leading-[0.875rem] tracking-normal text-white hover:underline xl:text-base xl:leading-[1.188rem]"
            href="#"
          >
            Team
          </a>
        </li>
        <li>
          <a
            className="font-['Raleway'] text-[0.75rem] font-normal leading-[0.875rem] tracking-normal text-white hover:underline xl:text-base xl:leading-[1.188rem]"
            href="#"
          >
            Sign in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
