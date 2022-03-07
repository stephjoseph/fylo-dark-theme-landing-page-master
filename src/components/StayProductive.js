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
          className="group flex flex-col gap-[0.375rem] text-[0.75rem] font-normal leading-4 tracking-normal text-[#62E0D9] hover:text-white xl:text-base xl:leading-[1.375rem]"
          href="#"
        >
          <div className="flex items-center gap-2 xl:gap-1">
            <p>See how Fylo works</p>
            <div>
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <circle id="b" cx="6" cy="6" r="6" />
                  <filter
                    x="-25%"
                    y="-25%"
                    width="150%"
                    height="150%"
                    filterUnits="objectBoundingBox"
                    id="a"
                  >
                    <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      stdDeviation="1"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(2 2)">
                    <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                    <use
                      className="group-hover:fill-white"
                      fill="#62E0D9"
                      xlinkHref="#b"
                    />
                  </g>
                  <path
                    d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
                    fill="#1B2330"
                  />
                </g>
              </svg>
            </div>
          </div>
          <hr className="h-px w-full border-[#62E0D9] group-hover:border-white" />
        </a>
      </div>
    </section>
  );
};

export default StayProductive;
