import React from "react";
import iconAccess from "../images/icon-access-anywhere.svg";
import iconSecurity from "../images/icon-security.svg";
import iconCollaboration from "../images/icon-collaboration.svg";
import iconFile from "../images/icon-any-file.svg";

const Features = () => {
  return (
    <section className="mb-[10rem] grid place-items-center gap-20 xl:mb-[8.563rem] xl:w-[55rem] xl:grid-cols-2 xl:justify-between xl:gap-x-0 xl:gap-y-20">
      <div className="flex w-[20rem] flex-col items-center text-center xl:w-[21.813rem] xl:justify-self-start">
        <div className="mb-6 flex h-20 w-20 items-center justify-center xl:mb-4 xl:h-[6.5rem] xl:w-[6.5rem] ">
          <img
            className="h-[3.738rem] w-[4.029rem] xl:h-[4.875rem] xl:w-[5.25rem]"
            src={iconAccess}
            alt=""
          />
        </div>
        <h1 className="mb-2 font-['Raleway'] text-lg font-bold leading-6 tracking-normal text-white xl:text-xl xl:leading-[1.438rem]">
          Access your files, anywhere
        </h1>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white">
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </p>
      </div>
      <div className="flex w-[20rem] flex-col items-center text-center xl:w-[24rem] xl:justify-self-end">
        <div className="mb-6 flex h-20 w-20 items-center justify-center xl:mb-4 xl:h-[6.5rem] xl:w-[6.5rem]">
          <img
            className="h-[4.039rem] w-[3.173rem] xl:h-[5.25rem] xl:w-[4.125rem]"
            src={iconSecurity}
            alt=""
          />
        </div>
        <h1 className="mb-2 font-['Raleway'] text-lg font-bold leading-6 tracking-normal text-white xl:text-xl xl:leading-[1.438rem]">
          Security you can trust
        </h1>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white">
          2-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.
        </p>
      </div>
      <div className="flex w-[20rem] flex-col items-center text-center xl:w-[22.688rem]  xl:justify-self-start">
        <div className="mb-6 flex h-20 w-20 items-center justify-center xl:mb-4 xl:h-[6.5rem] xl:w-[6.5rem]">
          <img
            className="h-[3.318rem] w-[4.039rem] xl:h-[4.313rem] xl:w-[5.25rem]"
            src={iconCollaboration}
            alt=""
          />
        </div>
        <h1 className="mb-2 font-['Raleway'] text-lg font-bold leading-6 tracking-normal text-white xl:text-xl xl:leading-[1.438rem]">
          Real-time collaboration
        </h1>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
      </div>
      <div className="flex w-[20rem] flex-col items-center text-center xl:w-[22.688rem]  xl:justify-self-end">
        <div className="mb-6 flex h-20 w-20 items-center justify-center xl:mb-4 xl:h-[6.5rem] xl:w-[6.5rem]">
          <img
            className="h-[3.029rem] w-[4.327rem] xl:h-[3.938rem] xl:w-[5.625rem]"
            src={iconFile}
            alt=""
          />
        </div>
        <h1 className="mb-2 font-['Raleway'] text-lg font-bold leading-6 tracking-normal text-white xl:text-xl xl:leading-[1.438rem]">
          Store any type of file
        </h1>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white">
          Whether you're sharing holidays photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared.
        </p>
      </div>
    </section>
  );
};

export default Features;
