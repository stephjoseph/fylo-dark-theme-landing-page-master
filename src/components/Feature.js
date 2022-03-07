import React from "react";

const Feature = (props) => {
  return (
    <div className="flex w-[20rem] flex-col items-center text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center xl:h-[6.5rem] xl:w-[6.5rem]">
        <img width={props.width} height={props.height} src={props.img} alt="" />
      </div>
      <h1 className="mb-2 font-['Raleway'] text-lg font-bold leading-6 tracking-normal text-white">
        {props.header}
      </h1>
      <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white">
        {props.text}
      </p>
    </div>
  );
};

export default Feature;
