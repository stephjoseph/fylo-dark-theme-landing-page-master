import React from "react";
import heroImg from "../images/illustration-intro.png";

const Hero = () => {
  return (
    <div className="z-10 flex w-[20rem] flex-col items-center gap-[2.063rem] xl:w-[45rem] xl:gap-9">
      <div>
        <img
          className="h-[14.063rem] w-[19rem] xl:h-[33.375rem] xl:w-[45rem]"
          src={heroImg}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <h1 className="mb-[0.938rem] font-['Raleway'] text-2xl font-bold leading-9 tracking-normal text-white xl:mb-8 xl:text-[2.5rem] xl:leading-[3.75rem]">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="mb-8 w-[18.5rem] text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white xl:w-[36.813rem] xl:text-xl xl:leading-[1.875rem]">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <a
          className="flex h-12 w-[15rem] items-center justify-center rounded-[24px] bg-gradient-to-br from-[#63CAE1] to-[#34A0CD] font-['Raleway'] text-[0.875rem] font-bold leading-6 tracking-normal text-white shadow-[2px_3px_6px_0px_rgba(0,0,0,0.1593)] xl:h-14 xl:w-[17.5rem] xl:rounded-[28px] xl:text-base xl:leading-[1.188rem]"
          href="#"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
