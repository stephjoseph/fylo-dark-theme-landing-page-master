import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="mt-6 mb-12 flex w-[20.688rem] items-center justify-between">
      <a href="#">
        <img className="h-6 w-[5rem]" src={logo} alt="" />
      </a>
      <ul className="flex items-center gap-6">
        <li>
          <a
            className="font-['Raleway'] text-[0.75rem] font-normal leading-[0.875rem] tracking-normal text-white"
            href="#"
          >
            Features
          </a>
        </li>
        <li>
          <a
            className="font-['Raleway'] text-[0.75rem] font-normal leading-[0.875rem] tracking-normal text-white"
            href="#"
          >
            Team
          </a>
        </li>
        <li>
          <a
            className="font-['Raleway'] text-[0.75rem] font-normal leading-[0.875rem] tracking-normal text-white"
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
