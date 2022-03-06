import React from "react";
import illustrationProductive from "../images/illustration-stay-productive.png";
import iconArrow from "../images/icon-arrow.svg";

const StayProductive = () => {
  return (
    <section className="z-10 mb-[10rem] flex w-[20rem] flex-col items-start gap-12">
      <div className="w-[19rem] self-center">
        <img src={illustrationProductive} alt="" />
      </div>
      <div className="flex flex-col items-start gap-4">
        <h2 className="ml-[0.344rem] font-['Raleway'] text-lg font-bold leading-6 tracking-normal text-white">
          Stay productive, wherever you are
        </h2>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          className="flex flex-col gap-[0.375rem] text-[0.75rem] font-normal leading-4 tracking-normal text-[#62E0D9]"
          href="#"
        >
          <div className="flex items-center gap-2">
            <p>See how Fylo works</p>
            <div>
              <img className="h-[0.75rem] w-[0.75rem]" src={iconArrow} alt="" />
            </div>
          </div>
          <hr className="h-px w-full border-[#62E0D9]" />
        </a>
      </div>
    </section>
  );
};

export default StayProductive;
