import React from "react";

const Testimony = (props) => {
  return (
    <div className="flex w-full flex-col gap-[1.063rem] rounded-[3.93px] bg-[#202A3C] px-5 pt-6 pb-[1.313rem] shadow-[0px_0px_8px_4px_rgba(56,56,56,0.0459)] xl:w-[22.5rem] xl:gap-6 xl:px-[1.625rem] xl:pt-10 xl:pb-[1.625rem]">
      <blockquote className="text-[0.625rem] font-normal leading-[1.125rem] tracking-normal text-white xl:w-[19.331rem] xl:text-[0.875rem] xl:leading-[1.313rem]">
        Fylo has improved our team productivity by{" "}
        <br className="hidden xl:inline" /> an order of magnitude. Since making
        the switch our team has become a well-oiled collaboration machine.
      </blockquote>
      <div className="flex items-center gap-2">
        <div>
          <img className="h-6 w-6 rounded-full" src={props.img} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[0.625rem] font-bold leading-[0.75rem] tracking-[0.5px] text-white">
            {props.person}
          </p>
          <p className="text-[0.438rem] font-normal leading-[0.625rem] tracking-[0.5px] text-white">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
