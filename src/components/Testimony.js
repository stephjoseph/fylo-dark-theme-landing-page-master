import React from "react";

const Testimony = (props) => {
  return (
    <div className="flex w-full flex-col gap-[1.063rem] rounded-[3.93px] bg-[#202A3C] px-5 pt-6 pb-[1.313rem]">
      <blockquote className="text-[0.625rem] font-normal leading-[1.125rem] tracking-normal text-white">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
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
