import React from "react";
import heroImg from "../images/illustration-intro.png";

const Hero = () => {
  return (
    <div className="z-10 flex w-[20rem] flex-col items-center gap-[2.063rem]">
      <div>
        <img className="h-[14.063rem] w-[19rem]" src={heroImg} alt="" />
      </div>
      <div className="flex flex-col items-center text-center">
        <h1 className="mb-[0.938rem] font-['Raleway'] text-2xl font-bold leading-9 tracking-normal text-white">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="mb-8 w-[18.5rem] text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <a
          className="flex h-12 w-[15rem] items-center justify-center rounded-[24px] bg-gradient-to-br from-[#63CAE1] to-[#34A0CD] font-['Raleway'] text-[0.875rem] font-bold leading-6 tracking-normal text-white shadow-[2px_3px_6px_0px_rgba(0,0,0,0.1593)]"
          href="#"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
