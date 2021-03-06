import React from "react";
import logo from "../images/logo.svg";
import iconLocation from "../images/icon-location.svg";
import iconPhone from "../images/icon-phone.svg";
import iconEmail from "../images/icon-email.svg";

const Footer = () => {
  return (
    <footer className="z-10 -mt-[11rem] flex w-full max-w-[26.75rem] flex-col bg-[#0B1524] px-[1.75rem] pt-[16.188rem] pb-[3.25rem] xl:-mt-[7.25rem] xl:w-[100vw] xl:max-w-[90rem] xl:pr-[min(8.33vw,_7.5rem)] xl:pt-[min(11.73vw,_10.563rem)] xl:pb-[min(3.68vw,_3.313rem)] xl:pl-[min(5.55vw,_5rem)] ">
      <a
        className="mb-[2.188rem] ml-[0.688rem] xl:ml-0 xl:mb-[3.25rem]"
        href="#"
      >
        <img className="h-[1.938rem] w-[6.75rem]" src={logo} alt="" />
      </a>
      <div className="xl:flex xl:flex-row">
        <div className="mb-14 flex flex-col gap-4 xl:mb-0 xl:mr-[min(10.13vw,_9.125rem)] xl:flex-row xl:gap-[min(5.55vw,_5rem)]">
          <div className="flex gap-4">
            <div className="flex h-6 w-6 items-center xl:mt-[0.313rem]">
              <img
                className="h-[1.125rem] w-[0.774rem]"
                src={iconLocation}
                alt=""
              />
            </div>
            <p className="w-[17.438rem] text-base font-normal leading-6 tracking-normal text-white xl:w-[21.188rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="flex flex-col gap-4 xl:w-[10.688rem]">
            <div className="flex gap-4 xl:gap-6">
              <div className="flex h-6 w-6 xl:items-center xl:justify-center">
                <img
                  className="h-[0.813rem] w-[0.813rem] xl:h-[1.125rem] xl:w-[1.125rem]"
                  src={iconPhone}
                  alt=""
                />
              </div>
              <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white">
                +1-543-123-4567
              </p>
            </div>
            <div className="flex gap-4 xl:gap-[1.375rem]">
              <div className="flex h-6 w-6 items-center justify-center">
                <img className="h-4 w-5" src={iconEmail} alt="" />
              </div>
              <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white">
                example@fylo.com
              </p>
            </div>
          </div>
        </div>
        <nav
          className="mb-14 flex flex-col gap-12 xl:mb-0 xl:mr-[min(7.5vw,_6.75rem)] xl:w-[15rem] xl:flex-row xl:gap-[min(5.55vw,_5rem)]"
          id="footer-nav"
        >
          <ul className="flex flex-col gap-4 text-base font-normal leading-[1.375rem] tracking-normal text-white xl:w-[4.563rem]">
            <li>
              <a className="hover:font-bold" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="#">
                Jobs
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="#">
                Press
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="#">
                Blog
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4 text-base font-normal leading-[1.375rem] tracking-normal text-white xl:w-[5.438rem]">
            <li>
              <a className="hover:font-bold" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="#">
                Terms
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="#">
                Privacy
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-[0.625rem] self-center xl:gap-[0.75rem] xl:self-start">
          <a
            className="group flex h-[1.688rem] w-[1.753rem] items-center justify-center rounded-full border border-solid border-[#DFE4F0] hover:border-[#62E0D9] xl:h-[1.938rem] xl:w-[2.023rem]"
            href="#"
          >
            <svg
              className="xl:w-[0.563rem]"
              width="8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                className="group-hover:fill-[#62E0D9]"
                fill="white"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
          </a>
          <a
            className="group flex h-[1.688rem] w-[1.753rem] items-center justify-center rounded-full border border-solid border-[#DFE4F0] hover:border-[#62E0D9] xl:h-[1.938rem] xl:w-[2.023rem]"
            href="#"
          >
            <svg
              className="xl:w-[14px]"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                className="group-hover:fill-[#62E0D9]"
                fill="white"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              />
            </svg>
          </a>
          <a
            className="group flex h-[1.688rem] w-[1.753rem] items-center justify-center rounded-full border border-solid border-[#DFE4F0] hover:border-[#62E0D9] xl:h-[1.938rem] xl:w-[2.023rem]"
            href="#"
          >
            <svg
              className="xl:w-[15px]"
              width="13"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                className="group-hover:fill-[#62E0D9]"
                fill="white"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
