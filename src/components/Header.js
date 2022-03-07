import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className="z-10 mb-[7.5rem] flex w-full max-w-[26.75rem] flex-col items-center xl:mb-[9.875rem] xl:max-w-[90rem]">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
