import React from "react";
import illustrationProductive from "../images/illustration-stay-productive.png";
import iconArrow from "../images/icon-arrow.svg";

const StayProductive = () => {
  return (
    <section className="z-10 mb-[10rem] flex w-[20rem] flex-col items-start gap-12 xl:mb-[7.5rem] xl:w-[77.188rem] xl:flex-row xl:gap-[3.563rem]">
      <div className="w-[19rem] self-center xl:h-[28.977rem] xl:w-[38.423rem] xl:self-start">
        <img
          className="w-[19rem] xl:h-[28.977rem] xl:w-[38.423rem]"
          src={illustrationProductive}
          alt=""
        />
      </div>
      <div className="flex flex-col items-start gap-4 xl:mt-[7.165rem] xl:w-[35.188rem] xl:gap-0">
        <h2 className="ml-[0.344rem] font-['Raleway'] text-lg font-bold leading-6 tracking-normal text-white xl:mb-[1.188rem] xl:ml-0 xl:text-[2.5rem] xl:leading-[3.125rem]">
          Stay productive, <br className="hidden xl:inline" /> wherever you are
        </h2>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white xl:mb-4 xl:text-base xl:leading-6">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white xl:mb-6 xl:text-base xl:leading-6">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          className="flex flex-col gap-[0.375rem] text-[0.75rem] font-normal leading-4 tracking-normal text-[#62E0D9] xl:text-base xl:leading-[1.375rem]"
          href="#"
        >
          <div className="flex items-center gap-2 xl:gap-1">
            <p>See how Fylo works</p>
            <div>
              <img
                className="h-[0.75rem] w-[0.75rem] xl:h-4 xl:w-4"
                src={iconArrow}
                alt=""
              />
            </div>
          </div>
          <hr className="h-px w-full border-[#62E0D9]" />
        </a>
      </div>
    </section>
  );
};

export default StayProductive;
