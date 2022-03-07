import React from "react";

const CTA = () => {
  return (
    <section className="z-10 flex w-[21rem] flex-col items-center gap-8 rounded-[9px] bg-[#1B2330] px-[1.75rem] pt-10 pb-[2.313rem] shadow-[5px_5px_8px_0px_rgba(0,0,0,0.2543)] xl:w-[53.938rem] xl:gap-[2.375rem] xl:px-[4.813rem] xl:pb-[2.563rem] xl:pt-[2.625rem]">
      <div className="flex w-full flex-col items-center gap-4 text-center xl:w-[42.063rem]">
        <h2 className="font-['Raleway'] text-lg font-bold leading-6 tracking-normal text-white xl:text-[2rem] xl:leading-[3rem]">
          Get early access today
        </h2>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-white">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <form className="flex w-full flex-col items-center gap-6 xl:flex-row">
        <input
          className="h-12 w-full rounded-[24px] px-[1.813rem] py-[1.188rem] text-[0.625rem] font-normal leading-[0.875rem] tracking-normal text-black shadow-[1px_1px_3px_0px_rgba(7,4,59,0.157)] placeholder:text-[0.625rem] placeholder:font-normal placeholder:leading-[0.875rem] placeholder:tracking-normal placeholder:text-[#C0C0C0] xl:w-[30rem] xl:placeholder:text-[0.75rem] xl:placeholder:leading-4"
          type="email"
          placeholder="email@example.com"
        />
        <button className="flex h-12 w-full items-center justify-center rounded-[24px] bg-gradient-to-br from-[#63E1D9] to-[#34A0CD] font-['Raleway'] text-[0.875rem] font-bold capitalize leading-4 tracking-normal text-white shadow-[2px_3px_6px_0px_rgba(0,0,0,0.1593)] xl:w-[12.5rem]">
          Get started for free
        </button>
      </form>
    </section>
  );
};

export default CTA;
